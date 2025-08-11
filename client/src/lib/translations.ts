export interface Language {
  code: string;
  flag: string;
  name: string;
  appDescription: string;
  privacyButtonLabel: string;
  privacyTitle: string;
  footerCopyright: string;
  privacyContent: string;
}

export const languages: Record<string, Language> = {
  en: {
    code: 'EN',
    flag: '🇺🇸',
    name: 'English',
    appDescription: 'Mindful breathing exercises for inner peace and mental clarity',
    privacyButtonLabel: 'Privacy Policy',
    privacyTitle: 'Privacy Policy',
    footerCopyright: '© 2024 BreatheBook. All rights reserved.',
    privacyContent: `
      <h4 class="text-lg font-semibold text-white mb-3">Information We Collect</h4>
      <p>BreatheBook collects minimal data to provide you with the best meditation experience. We may collect usage statistics to improve our app functionality.</p>
      
      <h4 class="text-lg font-semibold text-white mb-3 mt-6">How We Use Your Information</h4>
      <p>Your personal information is used solely to enhance your breathing exercise experience. We do not sell or share your data with third parties.</p>
      
      <h4 class="text-lg font-semibold text-white mb-3 mt-6">Data Security</h4>
      <p>We implement industry-standard security measures to protect your information. All data is encrypted and stored securely.</p>
      
      <h4 class="text-lg font-semibold text-white mb-3 mt-6">Contact Us</h4>
      <p>If you have any questions about this privacy policy, please contact us at privacy@breathebook.app</p>
    `
  },
  ru: {
    code: 'RU',
    flag: '🇷🇺',
    name: 'Русский',
    appDescription: 'Осознанные дыхательные упражнения для внутреннего покоя и ясности ума',
    privacyButtonLabel: 'Политика конфиденциальности',
    privacyTitle: 'Политика конфиденциальности',
    footerCopyright: '© 2024 BreatheBook. Все права защищены.',
    privacyContent: `
      <h4 class="text-lg font-semibold text-white mb-3">Информация, которую мы собираем</h4>
      <p>BreatheBook собирает минимальные данные для предоставления вам лучшего опыта медитации. Мы можем собирать статистику использования для улучшения функциональности приложения.</p>
      
      <h4 class="text-lg font-semibold text-white mb-3 mt-6">Как мы используем вашу информацию</h4>
      <p>Ваша личная информация используется исключительно для улучшения вашего опыта дыхательных упражнений. Мы не продаем и не передаем ваши данные третьим лицам.</p>
      
      <h4 class="text-lg font-semibold text-white mb-3 mt-6">Безопасность данных</h4>
      <p>Мы применяем стандартные отраслевые меры безопасности для защиты вашей информации. Все данные шифруются и хранятся в безопасности.</p>
      
      <h4 class="text-lg font-semibold text-white mb-3 mt-6">Связаться с нами</h4>
      <p>Если у вас есть вопросы об этой политике конфиденциальности, пожалуйста, свяжитесь с нами по адресу privacy@breathebook.app</p>
    `
  },
  es: {
    code: 'ES',
    flag: '🇪🇸',
    name: 'Español',
    appDescription: 'Ejercicios de respiración consciente para la paz interior y claridad mental',
    privacyButtonLabel: 'Política de Privacidad',
    privacyTitle: 'Política de Privacidad',
    footerCopyright: '© 2024 BreatheBook. Todos los derechos reservados.',
    privacyContent: `
      <h4 class="text-lg font-semibold text-white mb-3">Información que Recopilamos</h4>
      <p>BreatheBook recopila datos mínimos para brindarte la mejor experiencia de meditación. Podemos recopilar estadísticas de uso para mejorar la funcionalidad de nuestra aplicación.</p>
      
      <h4 class="text-lg font-semibold text-white mb-3 mt-6">Cómo Usamos tu Información</h4>
      <p>Tu información personal se utiliza únicamente para mejorar tu experiencia de ejercicios de respiración. No vendemos ni compartimos tus datos con terceros.</p>
      
      <h4 class="text-lg font-semibold text-white mb-3 mt-6">Seguridad de Datos</h4>
      <p>Implementamos medidas de seguridad estándar de la industria para proteger tu información. Todos los datos están cifrados y almacenados de forma segura.</p>
      
      <h4 class="text-lg font-semibold text-white mb-3 mt-6">Contáctanos</h4>
      <p>Si tienes alguna pregunta sobre esta política de privacidad, por favor contáctanos en privacy@breathebook.app</p>
    `
  },
  fr: {
    code: 'FR',
    flag: '🇫🇷',
    name: 'Français',
    appDescription: 'Exercices de respiration consciente pour la paix intérieure et la clarté mentale',
    privacyButtonLabel: 'Politique de Confidentialité',
    privacyTitle: 'Politique de Confidentialité',
    footerCopyright: '© 2024 BreatheBook. Tous droits réservés.',
    privacyContent: `
      <h4 class="text-lg font-semibold text-white mb-3">Informations que Nous Collectons</h4>
      <p>BreatheBook collecte des données minimales pour vous offrir la meilleure expérience de méditation. Nous pouvons collecter des statistiques d'utilisation pour améliorer les fonctionnalités de notre application.</p>
      
      <h4 class="text-lg font-semibold text-white mb-3 mt-6">Comment Nous Utilisons Vos Informations</h4>
      <p>Vos informations personnelles sont utilisées uniquement pour améliorer votre expérience d'exercices de respiration. Nous ne vendons ni ne partageons vos données avec des tiers.</p>
      
      <h4 class="text-lg font-semibold text-white mb-3 mt-6">Sécurité des Données</h4>
      <p>Nous mettons en œuvre des mesures de sécurité standard de l'industrie pour protéger vos informations. Toutes les données sont chiffrées et stockées en sécurité.</p>
      
      <h4 class="text-lg font-semibold text-white mb-3 mt-6">Nous Contacter</h4>
      <p>Si vous avez des questions concernant cette politique de confidentialité, veuillez nous contacter à privacy@breathebook.app</p>
    `
  }
};

export const supportedLanguages = Object.keys(languages);
