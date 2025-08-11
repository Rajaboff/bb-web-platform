import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { languages } from '@/lib/translations';

interface LanguageSelectorProps {
  selectedLanguage: string;
  onLanguageChange: (language: string) => void;
}

export function LanguageSelector({ selectedLanguage, onLanguageChange }: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const currentLang = languages[selectedLanguage];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        buttonRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageSelect = (langCode: string) => {
    onLanguageChange(langCode);
    setIsOpen(false);
  };

  return (
    <div className="relative z-20">
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="glass-button rounded-xl px-4 py-2 text-white text-sm font-light flex items-center space-x-2 transition-all duration-200"
      >
        <span>{currentLang.flag}</span>
        <span>{currentLang.code}</span>
        <ChevronDown 
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      
      <div
        ref={dropdownRef}
        className={`absolute top-full right-0 mt-2 w-40 language-dropdown rounded-xl shadow-xl transition-all duration-300 transform ${
          isOpen 
            ? 'opacity-100 visible scale-100' 
            : 'opacity-0 invisible scale-95'
        }`}
      >
        {Object.entries(languages).map(([langCode, lang], index) => (
          <button
            key={langCode}
            onClick={() => handleLanguageSelect(langCode)}
            className={`w-full text-left px-4 py-3 text-white hover:bg-pink-500 hover:bg-opacity-10 flex items-center space-x-3 transition-colors duration-200 font-light ${
              index === 0 ? 'rounded-t-xl' : ''
            } ${
              index === Object.keys(languages).length - 1 ? 'rounded-b-xl' : ''
            }`}
          >
            <span>{lang.flag}</span>
            <span>{lang.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
