import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Lock, X, Shield, Sparkles } from 'lucide-react';

interface PINLockProps {
  onUnlock: (pin: string) => void;
  onCancel?: () => void;
  subjectName?: string;
  isSocialStream?: boolean;
}

const PINLock = ({ onUnlock, onCancel, subjectName, isSocialStream = false }: PINLockProps) => {
  const [pin, setPin] = useState('');
  const [error, setError] = useState(false);

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

  const handleDigitClick = (digit: string) => {
    if (pin.length < 4) {
      const newPin = pin + digit;
      setPin(newPin);
      
      if (newPin.length === 4) {
        // Auto-submit when 4 digits are entered
        setTimeout(() => {
          onUnlock(newPin);
        }, 100);
      }
    }
  };

  const handleClear = () => {
    setPin('');
    setError(false);
  };

  const handleDelete = () => {
    if (pin.length > 0) {
      setPin(pin.slice(0, -1));
      setError(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <Card className="bg-white/[0.08] backdrop-blur-xl border-white/[0.1] w-full max-w-sm">
        <CardContent className="p-6">
          <div className="text-center mb-6">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg">
              <Lock className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Enter PIN Code</h2>
            {subjectName && (
              <p className="text-white/50 text-sm">
                Unlock {subjectName}
              </p>
            )}
          </div>

          {/* PIN Display */}
          <div className="flex justify-center gap-3 mb-6">
            {[0, 1, 2, 3].map((index) => (
              <div
                key={index}
                className={`w-12 h-12 rounded-lg border-2 flex items-center justify-center transition-all duration-200 ${
                  error
                    ? 'border-red-500 bg-red-500/20'
                    : pin[index]
                    ? 'border-indigo-500 bg-indigo-500/20'
                    : 'border-white/20 bg-white/5'
                }`}
              >
                {pin[index] && (
                  <div className="w-3 h-3 rounded-full bg-indigo-400" />
                )}
              </div>
            ))}
          </div>

          {error && (
            <p className="text-red-400 text-center text-sm mb-4">
              Incorrect PIN. Please try again.
            </p>
          )}

          {/* Number Pad */}
          <div className="grid grid-cols-3 gap-2 mb-4">
            {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map((digit) => (
              <Button
                key={digit}
                onClick={() => handleDigitClick(digit)}
                variant="outline"
                className="h-14 text-xl font-semibold border-white/20 text-white hover:bg-white/10"
              >
                {digit}
              </Button>
            ))}
            <Button
              onClick={handleClear}
              variant="outline"
              className="h-14 border-white/20 text-white/60 hover:bg-white/10"
            >
              Clear
            </Button>
            <Button
              onClick={() => handleDigitClick('0')}
              variant="outline"
              className="h-14 text-xl font-semibold border-white/20 text-white hover:bg-white/10"
            >
              0
            </Button>
            <Button
              onClick={handleDelete}
              variant="outline"
              className="h-14 border-white/20 text-white/60 hover:bg-white/10"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {onCancel && (
            <Button
              onClick={onCancel}
              variant="ghost"
              className="w-full text-white/60 hover:text-white hover:bg-white/10"
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
