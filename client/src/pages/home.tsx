import { useState } from "react";
import { Download } from "lucide-react";
import { useLocation } from "wouter";
import { LanguageSelector } from "@/components/LanguageSelector";
import { languages } from "@/lib/translations";
import appIcon from "@/assets/app-icon.svg";

export default function Home() {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [location, setLocation] = useLocation();

  const currentLang = languages[selectedLanguage];

  const handleDownload = () => {
    window.open("https://apps.apple.com/app/breathebook", "_blank");
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
        <div className="glass-effect rounded-2xl p-8 md:p-10 max-w-md w-full text-center">
          {/* App Icon */}
          <div className="mb-6 flex justify-center">
            <div className="w-20 h-20 rounded-xl overflow-hidden shadow-2xl">
              <img
                src={appIcon}
                alt="BreatheBook App Icon"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* App Title */}
          <h1 className="text-3xl md:text-3xl font-semibold text-white mb-3 tracking-wide">
            BreatheBook
          </h1>

          {/* Tagline */}
          <div className="mb-6">
            <span className="text-xs font-light text-pink-400 bg-pink-500 bg-opacity-10 px-3 py-1 rounded-full border border-pink-500 border-opacity-20">
              ✨ Mindful breathing made simple
            </span>
          </div>

          {/* App Subtitle */}
          <p className="text-sm text-gray-400 mb-8 leading-relaxed font-light max-w-sm mx-auto">
            {currentLang.appDescription}
          </p>

          {/* Download Button */}
          <button
            onClick={handleDownload}
            className="download-button rounded-xl px-6 py-3 text-white font-medium mb-6 w-full flex items-center justify-center space-x-2"
          >
            <Download className="w-4 h-4" />
            <span>{currentLang.downloadButtonLabel}</span>
          </button>

          {/* Legal Buttons */}
          <div className="flex flex-col sm:flex-row gap-2">
            <button
              onClick={handlePrivacyClick}
              className="glass-button rounded-lg px-4 py-2 text-white font-light text-xs flex-1"
            >
              {currentLang.privacyButtonLabel}
            </button>
            <button
              onClick={handleTermsClick}
              className="glass-button rounded-lg px-4 py-2 text-white font-light text-xs flex-1"
            >
              {currentLang.termsButtonLabel}
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center">
          <p className="text-gray-500 text-xs">{currentLang.footerCopyright}</p>
        </div>
      </div>
    </div>
  );
}
