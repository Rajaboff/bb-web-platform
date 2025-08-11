export interface Language {
  code: string;
  flag: string;
  name: string;
  appDescription: string;
  privacyButtonLabel: string;
  privacyTitle: string;
  termsButtonLabel: string;
  termsTitle: string;
  downloadButtonLabel: string;
  footerCopyright: string;
  privacyContent: string;
  termsContent: string;
}

export const languages: Record<string, Language> = {
  en: {
    code: 'EN',
    flag: '🇺🇸',
    name: 'English',
    appDescription: 'Mindful breathing exercises for inner peace and mental clarity',
    privacyButtonLabel: 'Privacy Policy',
    privacyTitle: 'Privacy Policy',
    termsButtonLabel: 'Terms of Use',
    termsTitle: 'Terms of Use',
    downloadButtonLabel: 'Download from App Store',
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
    `,
    termsContent: `
      <h4 class="text-lg font-semibold text-white mb-3">Acceptance of Terms</h4>
      <p>By downloading and using BreatheBook, you agree to these terms of use. If you do not agree, please do not use our application.</p>
      
      <h4 class="text-lg font-semibold text-white mb-3 mt-6">License to Use</h4>
      <p>We grant you a limited, non-exclusive, non-transferable license to use BreatheBook for personal, non-commercial purposes.</p>
      
      <h4 class="text-lg font-semibold text-white mb-3 mt-6">User Responsibilities</h4>
      <p>You are responsible for using the app appropriately and not sharing your account credentials. Consult healthcare professionals before beginning any breathing exercise program.</p>
      
      <h4 class="text-lg font-semibold text-white mb-3 mt-6">Limitations</h4>
      <p>BreatheBook is provided "as is" without warranties. We are not liable for any damages arising from your use of the application.</p>
      
      <h4 class="text-lg font-semibold text-white mb-3 mt-6">Contact</h4>
      <p>For questions about these terms, contact us at legal@breathebook.app</p>
    `
  },
  ru: {
    code: 'RU',
    flag: '🇷🇺',
    name: 'Русский',
    appDescription: 'Осознанные дыхательные упражнения для внутреннего покоя и ясности ума',
    privacyButtonLabel: 'Политика конфиденциальности',
    privacyTitle: 'Политика конфиденциальности',
    termsButtonLabel: 'Условия использования',
    termsTitle: 'Условия использования',
    downloadButtonLabel: 'Скачать из App Store',
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
    `,
    termsContent: `
      <h4 class="text-lg font-semibold text-white mb-3">Принятие условий</h4>
      <p>Загружая и используя BreatheBook, вы соглашаетесь с данными условиями использования. Если вы не согласны, пожалуйста, не используйте наше приложение.</p>
      
      <h4 class="text-lg font-semibold text-white mb-3 mt-6">Лицензия на использование</h4>
      <p>Мы предоставляем вам ограниченную, неисключительную, непередаваемую лицензию на использование BreatheBook в личных, некоммерческих целях.</p>
      
      <h4 class="text-lg font-semibold text-white mb-3 mt-6">Обязанности пользователя</h4>
      <p>Вы несете ответственность за правильное использование приложения и за неразглашение данных своей учетной записи. Проконсультируйтесь с медицинскими специалистами перед началом любой программы дыхательных упражнений.</p>
      
      <h4 class="text-lg font-semibold text-white mb-3 mt-6">Ограничения</h4>
      <p>BreatheBook предоставляется "как есть" без гарантий. Мы не несем ответственности за любой ущерб, возникший в результате использования приложения.</p>
      
      <h4 class="text-lg font-semibold text-white mb-3 mt-6">Контакты</h4>
      <p>По вопросам об этих условиях обращайтесь к нам по адресу legal@breathebook.app</p>
    `
  },
  es: {
    code: 'ES',
    flag: '🇪🇸',
    name: 'Español',
    appDescription: 'Ejercicios de respiración consciente para la paz interior y claridad mental',
    privacyButtonLabel: 'Política de Privacidad',
    privacyTitle: 'Política de Privacidad',
    termsButtonLabel: 'Términos de Uso',
    termsTitle: 'Términos de Uso',
    downloadButtonLabel: 'Descargar de App Store',
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
    `,
    termsContent: `
      <h4 class="text-lg font-semibold text-white mb-3">Aceptación de Términos</h4>
      <p>Al descargar y usar BreatheBook, aceptas estos términos de uso. Si no estás de acuerdo, por favor no uses nuestra aplicación.</p>
      
      <h4 class="text-lg font-semibold text-white mb-3 mt-6">Licencia de Uso</h4>
      <p>Te otorgamos una licencia limitada, no exclusiva y no transferible para usar BreatheBook con fines personales y no comerciales.</p>
      
      <h4 class="text-lg font-semibold text-white mb-3 mt-6">Responsabilidades del Usuario</h4>
      <p>Eres responsable de usar la aplicación apropiadamente y de no compartir las credenciales de tu cuenta. Consulta a profesionales de la salud antes de comenzar cualquier programa de ejercicios de respiración.</p>
      
      <h4 class="text-lg font-semibold text-white mb-3 mt-6">Limitaciones</h4>
      <p>BreatheBook se proporciona "tal como está" sin garantías. No somos responsables de ningún daño que surja del uso de la aplicación.</p>
      
      <h4 class="text-lg font-semibold text-white mb-3 mt-6">Contacto</h4>
      <p>Para preguntas sobre estos términos, contáctanos en legal@breathebook.app</p>
    `
  },
  fr: {
    code: 'FR',
    flag: '🇫🇷',
    name: 'Français',
    appDescription: 'Exercices de respiration consciente pour la paix intérieure et la clarté mentale',
    privacyButtonLabel: 'Politique de Confidentialité',
    privacyTitle: 'Politique de Confidentialité',
    termsButtonLabel: 'Conditions d\'Utilisation',
    termsTitle: 'Conditions d\'Utilisation',
    downloadButtonLabel: 'Télécharger sur App Store',
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
    `,
    termsContent: `
      <h4 class="text-lg font-semibold text-white mb-3">Acceptation des Conditions</h4>
      <p>En téléchargeant et utilisant BreatheBook, vous acceptez ces conditions d'utilisation. Si vous n'êtes pas d'accord, veuillez ne pas utiliser notre application.</p>
      
      <h4 class="text-lg font-semibold text-white mb-3 mt-6">Licence d'Utilisation</h4>
      <p>Nous vous accordons une licence limitée, non exclusive et non transférable pour utiliser BreatheBook à des fins personnelles et non commerciales.</p>
      
      <h4 class="text-lg font-semibold text-white mb-3 mt-6">Responsabilités de l'Utilisateur</h4>
      <p>Vous êtes responsable d'utiliser l'application de manière appropriée et de ne pas partager vos identifiants de compte. Consultez des professionnels de la santé avant de commencer tout programme d'exercices de respiration.</p>
      
      <h4 class="text-lg font-semibold text-white mb-3 mt-6">Limitations</h4>
      <p>BreatheBook est fourni "tel quel" sans garanties. Nous ne sommes pas responsables des dommages résultant de votre utilisation de l'application.</p>
      
      <h4 class="text-lg font-semibold text-white mb-3 mt-6">Contact</h4>
      <p>Pour des questions sur ces conditions, contactez-nous à legal@breathebook.app</p>
    `
  }
};

export const supportedLanguages = Object.keys(languages);
