import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Lock, X, Shield, Sparkles, Loader2 } from 'lucide-react';
import { pinService } from '@/integrations/parse/pinService';

interface PINLockProps {
  onUnlock: (pin: string) => void;
  onCancel?: () => void;
  subjectName?: string;
  isSocialStream?: boolean;
  error?: boolean;
}

// Generate a device fingerprint using browser characteristics
const generateDeviceFingerprint = (): string => {
  const fingerprint = {
    userAgent: navigator.userAgent,
    language: navigator.language,
    platform: navigator.platform,
    screenResolution: `${screen.width}x${screen.height}`,
    colorDepth: screen.colorDepth,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    hardwareConcurrency: navigator.hardwareConcurrency || 0,
    deviceMemory: (navigator as any).deviceMemory || 0,
  };
  
  // Create a hash from the fingerprint data
  const str = JSON.stringify(fingerprint);
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash).toString(36);
};

// Storage keys for device binding
const PIN_DEVICE_KEY = 'pin_device_binding';

const PINLock = ({ onUnlock, onCancel, subjectName, isSocialStream = false, error: externalError }: PINLockProps) => {
  const [pin, setPin] = useState('');
  const [internalError, setInternalError] = useState(false);
  const error = externalError || internalError;
  const [deviceMismatch, setDeviceMismatch] = useState(false);
  const [isValidating, setIsValidating] = useState(false);

  useEffect(() => {
    // Clear device mismatch error when PIN changes
    if (pin.length === 0) {
      setDeviceMismatch(false);
    }
  }, [pin]);

  const theme = {
    primary: isSocialStream ? 'purple' : 'emerald',
    secondary: isSocialStream ? 'pink' : 'teal',
    gradient: isSocialStream 
      ? 'from-purple-500 via-pink-500 to-purple-600' 
      : 'from-emerald-500 via-teal-500 to-emerald-600',
    gradientHover: isSocialStream 
      ? 'from-purple-600 via-pink-600 to-purple-700' 
      : 'from-emerald-600 via-teal-600 to-emerald-700',
    bgTint: isSocialStream ? 'purple' : 'emerald',
    borderTint: isSocialStream ? 'purple' : 'emerald',
    iconColor: isSocialStream ? 'text-purple-400' : 'text-emerald-400',
    glowColor: isSocialStream ? 'shadow-purple-500/50' : 'shadow-emerald-500/50',
  };

  const handleDigitClick = async (digit: string) => {
    if (pin.length < 4) {
      const newPin = pin + digit;
      setPin(newPin);
      
      if (newPin.length === 4) {
        // Auto-submit when 4 digits are entered
        setIsValidating(true);
        
        try {
          // Validate PIN against Back4App database
          console.log('Validating PIN:', newPin, 'for subject:', subjectName);
          const { valid, pinData } = await pinService.validatePIN(newPin, subjectName);
          console.log('Validation result:', { valid, pinData });
          
          if (!valid) {
            // PIN is invalid or not found in database
            console.log('PIN validation failed');
            setInternalError(true);
            setPin('');
            setIsValidating(false);
            return;
          }
          
          // PIN is valid, check device binding
          const currentDeviceFingerprint = generateDeviceFingerprint();
          const storedBinding = localStorage.getItem(PIN_DEVICE_KEY);
          
          if (storedBinding) {
            const binding = JSON.parse(storedBinding);
            // Check if PIN matches and device matches
            if (binding.pin === newPin) {
              if (binding.deviceFingerprint === currentDeviceFingerprint) {
                // Same device, PIN matches - allow access
                onUnlock(newPin);
              } else {
                // PIN matches but different device - reject
                setDeviceMismatch(true);
                setInternalError(true);
                setPin('');
              }
            } else {
              // PIN doesn't match stored binding - update it
              localStorage.setItem(PIN_DEVICE_KEY, JSON.stringify({
                pin: newPin,
                deviceFingerprint: currentDeviceFingerprint,
                timestamp: Date.now()
              }));
              onUnlock(newPin);
            }
          } else {
            // First time using this PIN - bind to current device
            localStorage.setItem(PIN_DEVICE_KEY, JSON.stringify({
              pin: newPin,
              deviceFingerprint: currentDeviceFingerprint,
              timestamp: Date.now()
            }));
            onUnlock(newPin);
          }
        } catch (error) {
          console.error('Error validating PIN:', error);
          setInternalError(true);
          setPin('');
        } finally {
          setIsValidating(false);
        }
      }
    }
  };

  const handleClear = () => {
    setPin('');
    setInternalError(false);
    setDeviceMismatch(false);
  };

  const handleDelete = () => {
    if (pin.length > 0) {
      setPin(pin.slice(0, -1));
      setInternalError(false);
      setDeviceMismatch(false);
    }
  };

  const handleResetDeviceBinding = () => {
    localStorage.removeItem(PIN_DEVICE_KEY);
    setPin('');
    setInternalError(false);
    setDeviceMismatch(false);
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <Card className={`bg-white/[0.08] backdrop-blur-xl border-white/[0.1] w-full max-w-sm shadow-2xl ${theme.glowColor}`}>
        <CardContent className="p-6">
          <div className="text-center mb-6">
            <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br ${theme.gradient} flex items-center justify-center shadow-lg ${theme.glowColor} animate-pulse`}>
              <Shield className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Enter PIN Code</h2>
            {subjectName && (
              <div className="flex items-center justify-center gap-2">
                <Sparkles className={`h-4 w-4 ${theme.iconColor}`} />
                <p className="text-white/50 text-sm">
                  Unlock {subjectName}
                </p>
              </div>
            )}
          </div>

          {/* PIN Display */}
          <div className="flex justify-center gap-3 mb-6">
            {[0, 1, 2, 3].map((index) => (
              <div
                key={index}
                className={`w-14 h-14 rounded-xl border-2 flex items-center justify-center transition-all duration-300 ${
                  error
                    ? 'border-red-500 bg-red-500/20 shadow-red-500/30 shadow-lg'
                    : pin[index]
                    ? `border-${theme.primary}-500 bg-${theme.primary}-500/20 ${theme.glowColor} shadow-lg`
                    : 'border-white/20 bg-white/5'
                }`}
              >
                {isValidating && pin.length === 4 ? (
                  <Loader2 className="h-5 w-5 animate-spin text-white/70" />
                ) : pin[index] ? (
                  <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${theme.gradient} shadow-lg`} />
                ) : null}
              </div>
            ))}
          </div>

          {error && (
            <div className="mb-4 p-3 rounded-lg bg-red-500/20 border border-red-500/30">
              <p className="text-red-400 text-center text-sm font-medium mb-2">
                {deviceMismatch 
                  ? 'PIN is bound to another device. Reset to use on this device.'
                  : 'Incorrect PIN. Access requires payment.'}
              </p>
              {deviceMismatch && (
                <button
                  onClick={handleResetDeviceBinding}
                  className="mt-2 text-xs text-red-300 hover:text-red-200 underline"
                >
                  Reset Device Binding
                </button>
              )}
              {!deviceMismatch && (
                <div className="mt-3 p-3 rounded-lg bg-amber-500/10 border border-amber-500/30">
                  <p className="text-amber-300 text-xs font-semibold mb-2 text-center">💳 Payment Required</p>
                  <div className="space-y-1 text-xs text-amber-200/80">
                    <p><strong>Amount:</strong> 125 ETB</p>
                    <p><strong>CBE Bank:</strong> 1000282751279</p>
                    <p><strong>Account Name:</strong> Alexander Getahun</p>
                    <p><strong>Telebirr:</strong> 0949835147 (Merry Getahun)</p>
                    <p className="mt-2"><strong>Contact:</strong> 0992010092 / 0914546032</p>
                    <p className="text-amber-200/60 italic">Available anytime</p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Number Pad */}
          <div className="grid grid-cols-3 gap-3 mb-4">
            {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map((digit) => (
              <Button
                key={digit}
                onClick={() => handleDigitClick(digit)}
                variant="outline"
                className={`h-16 text-2xl font-semibold border-white/20 text-white bg-white/10 hover:bg-white/20 hover:border-${theme.primary}-500/50 transition-all duration-200`}
              >
                {digit}
              </Button>
            ))}
            <Button
              onClick={handleClear}
              variant="outline"
              className="h-16 border-white/20 text-white/60 bg-white/10 hover:bg-white/20 hover:border-red-500/50 transition-all duration-200"
            >
              Clear
            </Button>
            <Button
              onClick={() => handleDigitClick('0')}
              variant="outline"
              className="h-16 text-2xl font-semibold border-white/20 text-white bg-white/10 hover:bg-white/20 hover:border-${theme.primary}-500/50 transition-all duration-200"
            >
              0
            </Button>
            <Button
              onClick={handleDelete}
              variant="outline"
              className="h-16 border-white/20 text-white/60 bg-white/10 hover:bg-white/20 hover:border-red-500/50 transition-all duration-200"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {onCancel && (
            <Button
              onClick={onCancel}
              variant="ghost"
              className="w-full text-white/60 hover:text-white hover:bg-white/10 transition-all duration-200"
            >
              Cancel
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default PINLock;
