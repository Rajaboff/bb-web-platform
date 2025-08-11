import { useEffect } from 'react';
import { X } from 'lucide-react';
import { languages } from '@/lib/translations';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedLanguage: string;
}

export function PrivacyModal({ isOpen, onClose, selectedLanguage }: PrivacyModalProps) {
  const currentLang = languages[selectedLanguage];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-md flex items-center justify-center p-4 z-50 transition-all duration-300"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="premium-glass rounded-3xl max-w-2xl w-full max-h-[80vh] overflow-hidden animate-fadeIn shadow-2xl">
        
        {/* Modal Header */}
        <div className="p-6 border-b border-pink-500 border-opacity-20">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-white">
              {currentLang.privacyTitle}
            </h3>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors duration-200 p-1 hover:bg-white hover:bg-opacity-10 rounded-lg"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto max-h-96">
          <div 
            className="text-gray-300 leading-relaxed space-y-4"
            dangerouslySetInnerHTML={{ __html: currentLang.privacyContent }}
          />
        </div>

      </div>
    </div>
  );
}
