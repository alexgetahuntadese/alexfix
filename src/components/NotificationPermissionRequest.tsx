import { useEffect, useState } from 'react';
import { usePushNotifications } from '@/hooks/usePushNotifications';
import { Button } from '@/components/ui/button';
import { Bell, BellOff, X } from 'lucide-react';

export const NotificationPermissionRequest = () => {
  const { supported, permission, requestPermission, subscribe } = usePushNotifications();
  const [dismissed, setDismissed] = useState(false);
  const [showRequest, setShowRequest] = useState(false);

  useEffect(() => {
    // Show request after 5 seconds if not dismissed and permission is default
    if (supported && permission === 'default' && !dismissed) {
      const timer = setTimeout(() => {
        setShowRequest(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [supported, permission, dismissed]);

  const handleEnable = async () => {
    const newPermission = await requestPermission();
    if (newPermission === 'granted') {
      await subscribe();
    }
    setShowRequest(false);
  };

  const handleDismiss = () => {
    setDismissed(true);
    setShowRequest(false);
  };

  if (!supported || permission !== 'default' || !showRequest) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm animate-in slide-in-from-bottom-4 duration-300">
      <div className="bg-gradient-to-br from-purple-900 to-violet-800 rounded-lg shadow-2xl p-4 text-white border border-purple-700">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 mt-0.5">
            <Bell className="h-5 w-5 text-purple-200" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-sm mb-1">Enable Notifications</h3>
            <p className="text-xs text-purple-100 mb-3">
              Stay updated with quiz reminders, study tips, and important announcements.
            </p>
            <div className="flex gap-2">
              <Button
                size="sm"
                onClick={handleEnable}
                className="bg-white text-purple-900 hover:bg-purple-50 text-xs h-8"
              >
                Enable
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={handleDismiss}
                className="text-purple-200 hover:text-white hover:bg-purple-800 text-xs h-8"
              >
                Not now
              </Button>
            </div>
          </div>
          <button
            onClick={handleDismiss}
            className="flex-shrink-0 text-purple-200 hover:text-white transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export const NotificationStatus = () => {
  const { supported, permission, sendLocalNotification } = usePushNotifications();

  if (!supported) {
    return null;
  }

  const handleTestNotification = () => {
    sendLocalNotification('Test Notification', {
      body: 'This is a test notification from AlexFix!',
      icon: '/logo.svg',
    });
  };

  return (
    <div className="flex items-center gap-2 text-sm">
      {permission === 'granted' ? (
        <div className="flex items-center gap-2 text-green-600">
          <Bell className="h-4 w-4" />
          <span>Notifications enabled</span>
          <Button
            size="sm"
            variant="ghost"
            onClick={handleTestNotification}
            className="h-6 text-xs"
          >
            Test
          </Button>
        </div>
      ) : permission === 'denied' ? (
        <div className="flex items-center gap-2 text-red-600">
          <BellOff className="h-4 w-4" />
          <span>Notifications blocked</span>
        </div>
      ) : null}
    </div>
  );
};
