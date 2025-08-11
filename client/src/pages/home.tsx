import { useState } from 'react';
import { Download } from 'lucide-react';
import { useLocation } from 'wouter';
import { LanguageSelector } from '@/components/LanguageSelector';
import { languages } from '@/lib/translations';

export default function Home() {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [location, setLocation] = useLocation();

  const currentLang = languages[selectedLanguage];

  const handleDownload = () => {
    window.open('https://apps.apple.com/app/breathebook', '_blank');
  };

  const handlePrivacyClick = () => {
    setLocation(`/privacy?lang=${selectedLanguage}`);
  };

  const handleTermsClick = () => {
    setLocation(`/terms?lang=${selectedLanguage}`);
  };

  return (
    <div className="min-h-screen premium-bg overflow-x-hidden">
      {/* Background Pattern */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 modern-gradient opacity-30" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500 rounded-full filter blur-3xl opacity-10" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500 rounded-full filter blur-3xl opacity-10" />
        <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-10" />
      </div>

      {/* Main Container */}
      <div className="relative min-h-screen flex flex-col items-center justify-center px-4 py-8">
        
        {/* Language Selector */}
        <div className="absolute top-6 right-6">
          <LanguageSelector 
            selectedLanguage={selectedLanguage}
            onLanguageChange={setSelectedLanguage}
          />
        </div>

        {/* Main Content Card */}
        <div className="glass-effect rounded-3xl p-10 md:p-14 max-w-lg w-full text-center">
          
          {/* App Icon */}
          <div className="mb-10 flex justify-center">
            <div className="breathe-icon w-24 h-24 rounded-2xl flex items-center justify-center">
              <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C12 2 8 4 8 8C8 10 9 11 10 12C9 13 8 14 8 16C8 20 12 22 12 22C12 22 16 20 16 16C16 14 15 13 14 12C15 11 16 10 16 8C16 4 12 2 12 2Z" opacity="0.8"/>
                <circle cx="12" cy="12" r="2" fill="white"/>
              </svg>
            </div>
          </div>

          {/* App Title */}
          <h1 className="text-4xl md:text-5xl font-extralight text-white mb-4 tracking-wide">
            BreatheBook
          </h1>
          
          {/* Tagline */}
          <div className="mb-8">
            <span className="text-sm font-light text-pink-400 bg-pink-500 bg-opacity-10 px-3 py-1 rounded-full border border-pink-500 border-opacity-20">
              ✨ Mindful breathing made simple
            </span>
          </div>

          {/* App Subtitle */}
          <p className="text-base text-gray-400 mb-10 leading-relaxed font-light max-w-md mx-auto">
            {currentLang.appDescription}
          </p>

          {/* Download Button */}
          <button 
            onClick={handleDownload}
            className="download-button rounded-2xl px-8 py-4 text-white font-medium mb-8 w-full flex items-center justify-center space-x-3"
          >
            <Download className="w-5 h-5" />
            <span>{currentLang.downloadButtonLabel}</span>
          </button>

          {/* Legal Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button 
              onClick={handlePrivacyClick}
              className="glass-button rounded-xl px-6 py-3 text-white font-light text-sm flex-1"
            >
              {currentLang.privacyButtonLabel}
            </button>
            <button 
              onClick={handleTermsClick}
              className="glass-button rounded-xl px-6 py-3 text-white font-light text-sm flex-1"
            >
              {currentLang.termsButtonLabel}
            </button>
          </div>

        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            {currentLang.footerCopyright}
          </p>
        </div>

      </div>
    </div>
  );
}
