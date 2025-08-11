import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Search } from 'lucide-react';
import { languages } from '@/lib/translations';

interface LanguageSelectorProps {
  selectedLanguage: string;
  onLanguageChange: (language: string) => void;
}

export function LanguageSelector({ selectedLanguage, onLanguageChange }: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const currentLang = languages[selectedLanguage];
  
  const filteredLanguages = Object.entries(languages).filter(([_, lang]) =>
    lang.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
    setSearchTerm('');
  };

  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const handleKeyDown = (event: React.KeyboardEvent, langCode?: string) => {
    if (event.key === 'Escape') {
      setIsOpen(false);
      setSearchTerm('');
    } else if (event.key === 'Enter' && langCode) {
      handleLanguageSelect(langCode);
    }
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
        className={`absolute top-full right-0 mt-2 w-[320px] sm:w-72 max-w-[90vw] language-dropdown rounded-xl shadow-xl transition-all duration-300 transform z-50 ${
          isOpen 
            ? 'opacity-100 visible scale-100' 
            : 'opacity-0 invisible scale-95'
        }`}
      >
        {/* Search Input */}
        <div className="p-3 border-b border-pink-500 border-opacity-20">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-pink-300" />
            <input
              ref={searchInputRef}
              type="text"
              placeholder={selectedLanguage === 'ru' ? 'Поиск языка...' : selectedLanguage === 'es' ? 'Buscar idioma...' : selectedLanguage === 'fr' ? 'Rechercher langue...' : selectedLanguage === 'de' ? 'Sprache suchen...' : selectedLanguage === 'ja' ? '言語を検索...' : selectedLanguage === 'zh' ? '搜索语言...' : selectedLanguage === 'ko' ? '언어 검색...' : selectedLanguage === 'ar' ? 'البحث عن لغة...' : selectedLanguage === 'hi' ? 'भाषा खोजें...' : 'Search language...'}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => handleKeyDown(e)}
              className="w-full pl-10 pr-4 py-2 bg-black bg-opacity-30 rounded-lg text-white placeholder-pink-300 border border-pink-500 border-opacity-20 focus:border-pink-400 focus:outline-none transition-colors text-sm"
            />
          </div>
        </div>

        {/* Languages Grid */}
        <div className="max-h-72 overflow-y-auto">
          <div className="grid grid-cols-2 gap-0">
            {filteredLanguages.length > 0 ? (
              filteredLanguages.map(([langCode, lang], index) => (
                <button
                  key={langCode}
                  onClick={() => handleLanguageSelect(langCode)}
                  onKeyDown={(e) => handleKeyDown(e, langCode)}
                  className={`text-left px-3 py-2.5 text-white hover:bg-pink-500 hover:bg-opacity-10 focus:bg-pink-500 focus:bg-opacity-20 flex items-center space-x-2 transition-colors duration-200 font-light text-sm outline-none ${
                    selectedLanguage === langCode ? 'bg-pink-500 bg-opacity-20' : ''
                  } ${
                    index >= filteredLanguages.length - 2 ? 'rounded-b-lg' : ''
                  }`}
                >
                  <span className="text-base">{lang.flag}</span>
                  <span className="truncate">{lang.name}</span>
                </button>
              ))
            ) : (
              <div className="col-span-2 px-4 py-6 text-center text-pink-300 text-sm">
                {selectedLanguage === 'ru' ? 'Язык не найден' : 
                 selectedLanguage === 'es' ? 'Idioma no encontrado' : 
                 selectedLanguage === 'fr' ? 'Langue non trouvée' : 
                 selectedLanguage === 'de' ? 'Sprache nicht gefunden' : 
                 selectedLanguage === 'ja' ? '言語が見つかりません' : 
                 selectedLanguage === 'zh' ? '未找到语言' : 
                 selectedLanguage === 'ko' ? '언어를 찾을 수 없습니다' : 
                 selectedLanguage === 'ar' ? 'لم يتم العثور على اللغة' : 
                 selectedLanguage === 'hi' ? 'भाषा नहीं मिली' : 
                 'Language not found'}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
