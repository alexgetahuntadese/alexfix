import { useState, useEffect, useCallback } from 'react';

export type NotificationPermission = 'default' | 'granted' | 'denied';

interface PushNotificationState {
  permission: NotificationPermission;
  supported: boolean;
  subscription: PushSubscription | null;
}

export const usePushNotifications = () => {
  const [state, setState] = useState<PushNotificationState>({
    permission: 'default',
    supported: false,
    subscription: null,
  });

  useEffect(() => {
    // Check if push notifications are supported
    const supported = 'serviceWorker' in navigator && 'PushManager' in window;
    const permission = supported ? (Notification.permission as NotificationPermission) : 'default';
    
    setState(prev => ({
      ...prev,
      supported,
      permission,
    }));

    // Get existing subscription if available
    if (supported) {
      navigator.serviceWorker.ready.then((registration) => {
        registration.pushManager.getSubscription().then((subscription) => {
          setState(prev => ({
            ...prev,
            subscription,
          }));
        });
      });
    }
  }, []);

  const requestPermission = useCallback(async (): Promise<NotificationPermission> => {
    if (!state.supported) {
      console.warn('Push notifications are not supported in this browser');
      return 'denied';
    }

    if (!('Notification' in window)) {
      console.warn('This browser does not support desktop notification');
      return 'denied';
    }

    try {
      const permission = await Notification.requestPermission();
      setState(prev => ({ ...prev, permission: permission as NotificationPermission }));
      return permission as NotificationPermission;
    } catch (error) {
      console.error('Error requesting notification permission:', error);
      return 'denied';
    }
  }, [state.supported]);

  const subscribe = useCallback(async (): Promise<PushSubscription | null> => {
    if (!state.supported) {
      console.warn('Push notifications are not supported');
      return null;
    }

    if (state.permission !== 'granted') {
      console.warn('Notification permission not granted');
      return null;
    }

    try {
      const registration = await navigator.serviceWorker.ready;
      
      // Check if already subscribed
      const existingSubscription = await registration.pushManager.getSubscription();
      if (existingSubscription) {
        setState(prev => ({ ...prev, subscription: existingSubscription }));
        return existingSubscription;
      }

      // Subscribe to push notifications
      // In production, you would use your actual VAPID public key
      const subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(
          'BEl62iUYgUivxIkv69yViEuiBIaIb-Yt0PPs8GeeY1tW-8cJw5N-llz82Qv8CjRQ4cTqW7e8fJN4q8rK6vX2p0'
        ) as any,
      });

      setState(prev => ({ ...prev, subscription }));
      return subscription;
    } catch (error) {
      console.error('Error subscribing to push notifications:', error);
      return null;
    }
  }, [state.supported, state.permission]);

  const unsubscribe = useCallback(async (): Promise<boolean> => {
    if (!state.subscription) {
      return true;
    }

    try {
      await state.subscription.unsubscribe();
      setState(prev => ({ ...prev, subscription: null }));
      return true;
    } catch (error) {
      console.error('Error unsubscribing from push notifications:', error);
      return false;
    }
  }, [state.subscription]);

  const sendLocalNotification = useCallback((title: string, options?: NotificationOptions) => {
    if (state.permission !== 'granted') {
      console.warn('Notification permission not granted');
      return;
    }

    if (!('Notification' in window)) {
      console.warn('This browser does not support desktop notification');
      return;
    }

    new Notification(title, {
      icon: '/logo.svg',
      badge: '/favicon.ico',
      ...options,
    });
  }, [state.permission]);

  return {
    ...state,
    requestPermission,
    subscribe,
    unsubscribe,
    sendLocalNotification,
  };
};

// Helper function to convert VAPID key
function urlBase64ToUint8Array(base64String: string): Uint8Array {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  
  return outputArray as any;
}
