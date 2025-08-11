import { useState } from 'react';
import { LanguageSelector } from '@/components/LanguageSelector';
import { PrivacyModal } from '@/components/PrivacyModal';
import { languages } from '@/lib/translations';

export default function Home() {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  const currentLang = languages[selectedLanguage];

  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-5">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: 'radial-gradient(circle at 25% 25%, #3B82F6 0%, transparent 50%), radial-gradient(circle at 75% 75%, #60A5FA 0%, transparent 50%)'
          }}
        />
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
        <div className="glass-effect rounded-3xl p-8 md:p-12 max-w-md w-full text-center animate-float">
          
          {/* App Icon */}
          <div className="mb-8 flex justify-center">
            <div className="breathe-icon w-24 h-24 rounded-2xl flex items-center justify-center shadow-2xl">
              <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C12 2 8 4 8 8C8 10 9 11 10 12C9 13 8 14 8 16C8 20 12 22 12 22C12 22 16 20 16 16C16 14 15 13 14 12C15 11 16 10 16 8C16 4 12 2 12 2Z" opacity="0.7"/>
                <circle cx="12" cy="12" r="2" fill="white"/>
              </svg>
            </div>
          </div>

          {/* App Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            BreatheBook
          </h1>

          {/* App Subtitle */}
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            {currentLang.appDescription}
          </p>

          {/* Privacy Policy Button */}
          <button 
            onClick={() => setIsPrivacyModalOpen(true)}
            className="glass-button rounded-2xl px-8 py-4 text-white font-medium hover:scale-105 transition-all duration-300 shadow-lg"
          >
            {currentLang.privacyButtonLabel}
          </button>

        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            {currentLang.footerCopyright}
          </p>
        </div>

      </div>

      {/* Privacy Policy Modal */}
      <PrivacyModal 
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
        selectedLanguage={selectedLanguage}
      />
    </div>
  );
}
