import { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { ArrowLeft } from 'lucide-react';
import { LanguageSelector } from '@/components/LanguageSelector';
import { languages } from '@/lib/translations';

export default function Contacts() {
  const [location, setLocation] = useLocation();
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get('lang');
    if (lang && languages[lang]) {
      setSelectedLanguage(lang);
    }
  }, []);

  useEffect(() => {
    const url = new URL(window.location.href);
    url.searchParams.set('lang', selectedLanguage);
    window.history.replaceState({}, '', url.toString());
  }, [selectedLanguage]);

  const currentLang = languages[selectedLanguage];

  const handleBack = () => {
    setLocation('/');
  };

  return (
    <div className="min-h-screen premium-bg">
      {/* Header */}
      <div className="relative flex items-center justify-between p-6">
        <button 
          onClick={handleBack}
          className="glass-button rounded-lg px-3 py-2 text-white font-light flex items-center space-x-2 text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </button>
        
        <LanguageSelector 
          selectedLanguage={selectedLanguage}
          onLanguageChange={setSelectedLanguage}
        />
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 pb-8">
        <div className="premium-glass rounded-xl p-6 md:p-8">
          <h1 className="text-2xl md:text-3xl font-light text-white mb-6 text-center">
            {currentLang.contactsTitle}
          </h1>
          
          <div 
            className="text-gray-300 leading-relaxed space-y-4 text-sm"
            dangerouslySetInnerHTML={{ __html: currentLang.contactsContent }}
          />
        </div>
      </div>
    </div>
  );
}
