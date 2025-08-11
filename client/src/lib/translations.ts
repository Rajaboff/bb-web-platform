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
      <p class="mb-4">Your trust is important to us, and we strive to ensure your privacy. Our application operates entirely locally on your device and does not collect, store, or transmit any user data to servers or third parties.</p>
      <p class="mb-4">We do not use third-party services for analytics or tracking your activity. All data that you enter or create in the application remains exclusively on your device.</p>
      <p class="mb-4">If you have any questions or suggestions, please contact us.</p>
      <p>Thank you for using our application!</p>
    `,
    termsContent: `
      <h4 class="text-lg font-semibold text-white mb-3">Acceptance of Terms</h4>
      <p class="mb-4">By downloading and using BreatheBook, you agree to these terms of use. If you do not agree, please do not use our application.</p>
      <h4 class="text-lg font-semibold text-white mb-3">License to Use</h4>
      <p class="mb-4">We grant you a limited, non-exclusive, non-transferable license to use BreatheBook for personal, non-commercial purposes.</p>
      <h4 class="text-lg font-semibold text-white mb-3">User Responsibilities</h4>
      <p class="mb-4">You are responsible for using the app appropriately and not sharing your account credentials. Consult healthcare professionals before beginning any breathing exercise program.</p>
      <h4 class="text-lg font-semibold text-white mb-3">Limitations</h4>
      <p>BreatheBook is provided "as is" without warranties. We are not liable for any damages arising from your use of the application.</p>
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
      <p class="mb-4">Ваше доверие важно для нас, и мы стремимся обеспечить вашу конфиденциальность. Наше приложение работает полностью локально на вашем устройстве и не собирает, не хранит и не передает никакие данные пользователя на серверы или третьим лицам.</p>
      <p class="mb-4">Мы не используем сторонние сервисы для анализа или отслеживания вашей активности. Все данные, которые вы вводите или создаете в приложении, остаются исключительно на вашем устройстве.</p>
      <p class="mb-4">Если у вас есть вопросы или предложения, пожалуйста, свяжитесь с нами.</p>
      <p>Спасибо за использование нашего приложения!</p>
    `,
    termsContent: `
      <h4 class="text-lg font-semibold text-white mb-3">Принятие условий</h4>
      <p class="mb-4">Загружая и используя BreatheBook, вы соглашаетесь с данными условиями использования. Если вы не согласны, пожалуйста, не используйте наше приложение.</p>
      <h4 class="text-lg font-semibold text-white mb-3">Лицензия на использование</h4>
      <p class="mb-4">Мы предоставляем вам ограниченную, неисключительную, непередаваемую лицензию на использование BreatheBook в личных, некоммерческих целях.</p>
      <h4 class="text-lg font-semibold text-white mb-3">Обязанности пользователя</h4>
      <p class="mb-4">Вы несете ответственность за правильное использование приложения и за неразглашение данных своей учетной записи. Проконсультируйтесь с медицинскими специалистами перед началом любой программы дыхательных упражнений.</p>
      <h4 class="text-lg font-semibold text-white mb-3">Ограничения</h4>
      <p>BreatheBook предоставляется "как есть" без гарантий. Мы не несем ответственности за любой ущерб, возникший в результате использования приложения.</p>
    `
  },
  es: {
    code: 'ES',
    flag: '🇪🇸',
    name: 'Español',
    appDescription: 'Ejercicios de respiración consciente para la paz interior y claridad mental',
    privacyButtonLabel: 'Política de Privacidad',
    privacyTitle: 'Política de privacidad',
    termsButtonLabel: 'Términos de Uso',
    termsTitle: 'Términos de Uso',
    downloadButtonLabel: 'Descargar de App Store',
    footerCopyright: '© 2024 BreatheBook. Todos los derechos reservados.',
    privacyContent: `
      <p class="mb-4">Su confianza es importante para nosotros, y nos esforzamos por garantizar su privacidad. Nuestra aplicación funciona completamente de manera local en su dispositivo y no recopila, almacena ni transmite ningún dato del usuario a servidores o terceros.</p>
      <p class="mb-4">No utilizamos servicios externos para analizar o rastrear su actividad. Todos los datos que ingrese o cree en la aplicación permanecen exclusivamente en su dispositivo.</p>
      <p class="mb-4">Si tiene preguntas o sugerencias, por favor contáctenos.</p>
      <p>¡Gracias por usar nuestra aplicación!</p>
    `,
    termsContent: `
      <h4 class="text-lg font-semibold text-white mb-3">Aceptación de Términos</h4>
      <p class="mb-4">Al descargar y usar BreatheBook, aceptas estos términos de uso. Si no estás de acuerdo, por favor no uses nuestra aplicación.</p>
      <h4 class="text-lg font-semibold text-white mb-3">Licencia de Uso</h4>
      <p class="mb-4">Te otorgamos una licencia limitada, no exclusiva y no transferible para usar BreatheBook con fines personales y no comerciales.</p>
      <h4 class="text-lg font-semibold text-white mb-3">Responsabilidades del Usuario</h4>
      <p class="mb-4">Eres responsable de usar la aplicación apropiadamente y de no compartir las credenciales de tu cuenta. Consulta a profesionales de la salud antes de comenzar cualquier programa de ejercicios de respiración.</p>
      <h4 class="text-lg font-semibold text-white mb-3">Limitaciones</h4>
      <p>BreatheBook se proporciona "tal como está" sin garantías. No somos responsables de ningún daño que surja del uso de la aplicación.</p>
    `
  },
  fr: {
    code: 'FR',
    flag: '🇫🇷',
    name: 'Français',
    appDescription: 'Exercices de respiration consciente pour la paix intérieure et la clarté mentale',
    privacyButtonLabel: 'Politique de Confidentialité',
    privacyTitle: 'Politique de confidentialité',
    termsButtonLabel: 'Conditions d\'Utilisation',
    termsTitle: 'Conditions d\'Utilisation',
    downloadButtonLabel: 'Télécharger sur App Store',
    footerCopyright: '© 2024 BreatheBook. Tous droits réservés.',
    privacyContent: `
      <p class="mb-4">Votre confiance est importante pour nous, et nous nous efforçons de garantir votre confidentialité. Notre application fonctionne entièrement localement sur votre appareil et ne collecte, ne stocke et ne transmet aucune donnée utilisateur à des serveurs ou à des tiers.</p>
      <p class="mb-4">Nous n'utilisons pas de services tiers pour analyser ou suivre votre activité. Toutes les données que vous saisissez ou créez dans l'application restent exclusivement sur votre appareil.</p>
      <p class="mb-4">Si vous avez des questions ou des suggestions, veuillez nous contacter.</p>
      <p>Merci d'utiliser notre application !</p>
    `,
    termsContent: `
      <h4 class="text-lg font-semibold text-white mb-3">Acceptation des Conditions</h4>
      <p class="mb-4">En téléchargeant et utilisant BreatheBook, vous acceptez ces conditions d'utilisation. Si vous n'êtes pas d'accord, veuillez ne pas utiliser notre application.</p>
      <h4 class="text-lg font-semibold text-white mb-3">Licence d'Utilisation</h4>
      <p class="mb-4">Nous vous accordons une licence limitée, non exclusive et non transférable pour utiliser BreatheBook à des fins personnelles et non commerciales.</p>
      <h4 class="text-lg font-semibold text-white mb-3">Responsabilités de l'Utilisateur</h4>
      <p class="mb-4">Vous êtes responsable d'utiliser l'application de manière appropriée et de ne pas partager vos identifiants de compte. Consultez des professionnels de la santé avant de commencer tout programme d'exercices de respiration.</p>
      <h4 class="text-lg font-semibold text-white mb-3">Limitations</h4>
      <p>BreatheBook est fourni "tel quel" sans garanties. Nous ne sommes pas responsables des dommages résultant de votre utilisation de l'application.</p>
    `
  },
  de: {
    code: 'DE',
    flag: '🇩🇪',
    name: 'Deutsch',
    appDescription: 'Achtsame Atemübungen für inneren Frieden und geistige Klarheit',
    privacyButtonLabel: 'Datenschutzrichtlinie',
    privacyTitle: 'Datenschutzrichtlinie',
    termsButtonLabel: 'Nutzungsbedingungen',
    termsTitle: 'Nutzungsbedingungen',
    downloadButtonLabel: 'Aus App Store herunterladen',
    footerCopyright: '© 2024 BreatheBook. Alle Rechte vorbehalten.',
    privacyContent: `
      <p class="mb-4">Ihr Vertrauen ist uns wichtig, und wir setzen uns dafür ein, Ihre Privatsphäre zu schützen. Unsere App funktioniert vollständig lokal auf Ihrem Gerät und sammelt, speichert oder überträgt keine Benutzerdaten an Server oder Dritte.</p>
      <p class="mb-4">Wir verwenden keine Drittanbieterdienste zur Analyse oder Verfolgung Ihrer Aktivitäten. Alle Daten, die Sie in der App eingeben oder erstellen, verbleiben ausschließlich auf Ihrem Gerät.</p>
      <p class="mb-4">Wenn Sie Fragen oder Vorschläge haben, kontaktieren Sie uns bitte.</p>
      <p>Vielen Dank für die Nutzung unserer App!</p>
    `,
    termsContent: `
      <h4 class="text-lg font-semibold text-white mb-3">Annahme der Bedingungen</h4>
      <p class="mb-4">Durch das Herunterladen und Verwenden von BreatheBook stimmen Sie diesen Nutzungsbedingungen zu. Wenn Sie nicht einverstanden sind, verwenden Sie bitte unsere Anwendung nicht.</p>
      <h4 class="text-lg font-semibold text-white mb-3">Nutzungslizenz</h4>
      <p class="mb-4">Wir gewähren Ihnen eine begrenzte, nicht exklusive, nicht übertragbare Lizenz zur Nutzung von BreatheBook für persönliche, nicht kommerzielle Zwecke.</p>
      <h4 class="text-lg font-semibold text-white mb-3">Benutzerverantwortlichkeiten</h4>
      <p class="mb-4">Sie sind dafür verantwortlich, die App angemessen zu verwenden und Ihre Kontodaten nicht zu teilen. Konsultieren Sie Gesundheitsfachkräfte, bevor Sie ein Atemübungsprogramm beginnen.</p>
      <h4 class="text-lg font-semibold text-white mb-3">Einschränkungen</h4>
      <p>BreatheBook wird "wie besehen" ohne Garantien bereitgestellt. Wir sind nicht haftbar für Schäden, die durch Ihre Nutzung der Anwendung entstehen.</p>
    `
  },
  ja: {
    code: 'JA',
    flag: '🇯🇵',
    name: '日本語',
    appDescription: '内なる平和と精神的な明瞭さのためのマインドフル呼吸法',
    privacyButtonLabel: 'プライバシーポリシー',
    privacyTitle: 'プライバシーポリシー',
    termsButtonLabel: '利用規約',
    termsTitle: '利用規約',
    downloadButtonLabel: 'App Storeからダウンロード',
    footerCopyright: '© 2024 BreatheBook. 無断転載禁止。',
    privacyContent: `
      <p class="mb-4">私たちはお客様の信頼を大切にしており、プライバシーの保護に努めています。当アプリは完全にお客様のデバイス上でローカルに動作し、ユーザーデータを収集、保存、またはサーバーや第三者に送信することはありません。</p>
      <p class="mb-4">また、当アプリでは、活動の分析や追跡のために外部サービスを使用することはありません。アプリ内で入力または作成されたすべてのデータは、お客様のデバイス内にのみ保存されます。</p>
      <p class="mb-4">ご質問やご提案がございましたら、ぜひお問い合わせください。</p>
      <p>当アプリをご利用いただきありがとうございます！</p>
    `,
    termsContent: `
      <h4 class="text-lg font-semibold text-white mb-3">利用規約への同意</h4>
      <p class="mb-4">BreatheBookをダウンロードして使用することにより、本利用規約に同意したものとみなされます。同意いただけない場合は、当アプリケーションをご利用にならないでください。</p>
      <h4 class="text-lg font-semibold text-white mb-3">使用許諾</h4>
      <p class="mb-4">BreatheBookを個人的かつ非商業的な目的で使用するための限定的、非独占的、譲渡不可能なライセンスを付与いたします。</p>
      <h4 class="text-lg font-semibold text-white mb-3">ユーザーの責任</h4>
      <p class="mb-4">アプリを適切に使用し、アカウント認証情報を共有しないことはユーザーの責任です。呼吸法プログラムを開始する前に、医療専門家にご相談ください。</p>
      <h4 class="text-lg font-semibold text-white mb-3">制限事項</h4>
      <p>BreatheBookは保証なしに「現状のまま」提供されます。アプリケーションの使用によって生じるいかなる損害についても、当社は責任を負いません。</p>
    `
  },
  zh: {
    code: 'ZH',
    flag: '🇨🇳',
    name: '中文',
    appDescription: '正念呼吸练习，获得内心平静和精神清明',
    privacyButtonLabel: '隐私政策',
    privacyTitle: '隐私政策',
    termsButtonLabel: '使用条款',
    termsTitle: '使用条款',
    downloadButtonLabel: '从App Store下载',
    footerCopyright: '© 2024 BreatheBook. 保留所有权利。',
    privacyContent: `
      <p class="mb-4">您的信任对我们非常重要，我们致力于保护您的隐私。我们的应用程序完全在您的设备上本地运行，不会收集、存储或传输任何用户数据到服务器或第三方。</p>
      <p class="mb-4">我们不使用第三方服务来分析或跟踪您的活动。您在应用程序中输入或创建的所有数据都仅保留在您的设备上。</p>
      <p class="mb-4">如果您有任何问题或建议，请随时与我们联系。</p>
      <p>感谢您使用我们的应用程序！</p>
    `,
    termsContent: `
      <h4 class="text-lg font-semibold text-white mb-3">条款接受</h4>
      <p class="mb-4">通过下载和使用BreatheBook，您同意这些使用条款。如果您不同意，请不要使用我们的应用程序。</p>
      <h4 class="text-lg font-semibold text-white mb-3">使用许可</h4>
      <p class="mb-4">我们授予您有限、非独占、不可转让的许可，以供个人、非商业目的使用BreatheBook。</p>
      <h4 class="text-lg font-semibold text-white mb-3">用户责任</h4>
      <p class="mb-4">您有责任正确使用应用程序并不与他人共享您的账户凭据。在开始任何呼吸练习计划之前，请咨询医疗保健专业人员。</p>
      <h4 class="text-lg font-semibold text-white mb-3">限制</h4>
      <p>BreatheBook按"原样"提供，不提供任何保证。我们对因您使用应用程序而产生的任何损害不承担责任。</p>
    `
  },
  ko: {
    code: 'KO',
    flag: '🇰🇷',
    name: '한국어',
    appDescription: '내면의 평화와 정신적 명료함을 위한 마음챙김 호흡 운동',
    privacyButtonLabel: '개인정보 보호정책',
    privacyTitle: '개인정보 보호정책',
    termsButtonLabel: '이용 약관',
    termsTitle: '이용 약관',
    downloadButtonLabel: 'App Store에서 다운로드',
    footerCopyright: '© 2024 BreatheBook. 모든 권리 보유.',
    privacyContent: `
      <p class="mb-4">저희는 여러분의 신뢰를 중요하게 생각하며, 여러분의 개인정보를 보호하기 위해 최선을 다하고 있습니다. 저희 애플리케이션은 완전히 로컬로 여러분의 기기에서 작동하며, 사용자 데이터를 서버나 제3자에게 수집, 저장 또는 전송하지 않습니다.</p>
      <p class="mb-4">저희는 여러분의 활동을 분석하거나 추적하기 위해 타사 서비스를 사용하지 않습니다. 애플리케이션에 입력하거나 생성하는 모든 데이터는 오직 여러분의 기기에만 저장됩니다.</p>
      <p class="mb-4">질문이나 제안이 있으시면 저희에게 연락해 주세요.</p>
      <p>저희 애플리케이션을 사용해 주셔서 감사합니다!</p>
    `,
    termsContent: `
      <h4 class="text-lg font-semibold text-white mb-3">약관 동의</h4>
      <p class="mb-4">BreatheBook을 다운로드하고 사용함으로써 이 이용 약관에 동의하게 됩니다. 동의하지 않으시면 저희 애플리케이션을 사용하지 마십시오.</p>
      <h4 class="text-lg font-semibold text-white mb-3">사용 라이선스</h4>
      <p class="mb-4">개인적, 비상업적 목적으로 BreatheBook을 사용할 수 있는 제한적, 비독점적, 양도 불가능한 라이선스를 부여합니다.</p>
      <h4 class="text-lg font-semibold text-white mb-3">사용자 책임</h4>
      <p class="mb-4">앱을 적절히 사용하고 계정 자격 증명을 공유하지 않을 책임이 있습니다. 호흡 운동 프로그램을 시작하기 전에 의료 전문가와 상담하십시오.</p>
      <h4 class="text-lg font-semibold text-white mb-3">제한 사항</h4>
      <p>BreatheBook은 보증 없이 "있는 그대로" 제공됩니다. 애플리케이션 사용으로 인해 발생하는 손해에 대해 책임지지 않습니다.</p>
    `
  },
  ar: {
    code: 'AR',
    flag: '🇸🇦',
    name: 'العربية',
    appDescription: 'تمارين التنفس الواعي للسلام الداخلي والوضوح الذهني',
    privacyButtonLabel: 'سياسة الخصوصية',
    privacyTitle: 'سياسة الخصوصية',
    termsButtonLabel: 'شروط الاستخدام',
    termsTitle: 'شروط الاستخدام',
    downloadButtonLabel: 'تحميل من App Store',
    footerCopyright: '© 2024 BreatheBook. جميع الحقوق محفوظة.',
    privacyContent: `
      <p class="mb-4" dir="rtl">ثقتكم مهمة بالنسبة لنا، ونحن نسعى لضمان خصوصيتكم. يعمل تطبيقنا بشكل كامل محليًا على جهازكم ولا يجمع أو يخزن أو ينقل أي بيانات مستخدم إلى الخوادم أو إلى أطراف ثالثة.</p>
      <p class="mb-4" dir="rtl">نحن لا نستخدم خدمات خارجية لتحليل أو تتبع نشاطكم. جميع البيانات التي تدخلونها أو تنشئونها في التطبيق تبقى حصريًا على جهازكم.</p>
      <p class="mb-4" dir="rtl">إذا كانت لديكم أي أسئلة أو اقتراحات، يرجى التواصل معنا.</p>
      <p dir="rtl">شكرًا لاستخدامكم تطبيقنا!</p>
    `,
    termsContent: `
      <h4 class="text-lg font-semibold text-white mb-3" dir="rtl">قبول الشروط</h4>
      <p class="mb-4" dir="rtl">من خلال تحميل واستخدام BreatheBook، فإنك توافق على شروط الاستخدام هذه. إذا كنت لا توافق، يرجى عدم استخدام تطبيقنا.</p>
      <h4 class="text-lg font-semibold text-white mb-3" dir="rtl">ترخيص الاستخدام</h4>
      <p class="mb-4" dir="rtl">نمنحك ترخيصًا محدودًا وغير حصري وغير قابل للتحويل لاستخدام BreatheBook لأغراض شخصية وغير تجارية.</p>
      <h4 class="text-lg font-semibold text-white mb-3" dir="rtl">مسؤوليات المستخدم</h4>
      <p class="mb-4" dir="rtl">أنت مسؤول عن استخدام التطبيق بشكل مناسب وعدم مشاركة بيانات اعتماد حسابك. استشر المتخصصين في الرعاية الصحية قبل البدء في أي برنامج تمارين تنفس.</p>
      <h4 class="text-lg font-semibold text-white mb-3" dir="rtl">القيود</h4>
      <p dir="rtl">يتم توفير BreatheBook "كما هو" بدون ضمانات. نحن غير مسؤولين عن أي أضرار تنشأ من استخدامك للتطبيق.</p>
    `
  },
  hi: {
    code: 'HI',
    flag: '🇮🇳',
    name: 'हिन्दी',
    appDescription: 'आंतरिक शांति और मानसिक स्पष्टता के लिए माइंडफुल श्वास व्यायाम',
    privacyButtonLabel: 'गोपनीयता नीति',
    privacyTitle: 'गोपनीयता नीति',
    termsButtonLabel: 'उपयोग की शर्तें',
    termsTitle: 'उपयोग की शर्तें',
    downloadButtonLabel: 'App Store से डाउनलोड करें',
    footerCopyright: '© 2024 BreatheBook. सभी अधिकार सुरक्षित।',
    privacyContent: `
      <p class="mb-4">आपका विश्वास हमारे लिए महत्वपूर्ण है, और हम आपकी गोपनीयता सुनिश्चित करने के लिए प्रतिबद्ध हैं। हमारा ऐप पूरी तरह से आपके डिवाइस पर स्थानीय रूप से काम करता है और उपयोगकर्ता डेटा को सर्वर या तीसरे पक्ष को इकट्ठा, संग्रहीत या स्थानांतरित नहीं करता है।</p>
      <p class="mb-4">हम आपकी गतिविधि का विश्लेषण या ट्रैक करने के लिए किसी तृतीय-पक्ष सेवा का उपयोग नहीं करते हैं। ऐप में आप जो भी डेटा दर्ज करते हैं या बनाते हैं, वह केवल आपके डिवाइस पर ही रहता है।</p>
      <p class="mb-4">यदि आपके पास कोई प्रश्न या सुझाव हैं, तो कृपया हमसे संपर्क करें।</p>
      <p>हमारे ऐप का उपयोग करने के लिए धन्यवाद!</p>
    `,
    termsContent: `
      <h4 class="text-lg font-semibold text-white mb-3">शर्तों की स्वीकृति</h4>
      <p class="mb-4">BreatheBook को डाउनलोड और उपयोग करके, आप इन उपयोग की शर्तों से सहमत होते हैं। यदि आप सहमत नहीं हैं, तो कृपया हमारे एप्लिकेशन का उपयोग न करें।</p>
      <h4 class="text-lg font-semibold text-white mb-3">उपयोग लाइसेंस</h4>
      <p class="mb-4">हम आपको व्यक्तिगत, गैर-व्यावसायिक उद्देश्यों के लिए BreatheBook का उपयोग करने के लिए एक सीमित, गैर-विशेष, गैर-स्थानांतरणीय लाइसेंस प्रदान करते हैं।</p>
      <h4 class="text-lg font-semibold text-white mb-3">उपयोगकर्ता जिम्मेदारियां</h4>
      <p class="mb-4">आप ऐप का उचित उपयोग करने और अपनी खाता साख साझा न करने के लिए जिम्मेदार हैं। किसी भी श्वास व्यायाम कार्यक्रम की शुरुआत से पहले स्वास्थ्य सेवा पेशेवरों से सलाह लें।</p>
      <h4 class="text-lg font-semibold text-white mb-3">सीमाएं</h4>
      <p>BreatheBook बिना किसी वारंटी के "जैसा है" प्रदान किया गया है। एप्लिकेशन के आपके उपयोग से उत्पन्न होने वाली किसी भी क्षति के लिए हम उत्तरदायी नहीं हैं।</p>
    `
  },
  da: {
    code: 'DA',
    flag: '🇩🇰',
    name: 'Dansk',
    appDescription: 'Opmærksom vejrtrækning for indre fred og mental klarhed',
    privacyButtonLabel: 'Fortrolighedspolitik',
    privacyTitle: 'Fortrolighedspolitik',
    termsButtonLabel: 'Brugsvilkår',
    termsTitle: 'Brugsvilkår',
    downloadButtonLabel: 'Download fra App Store',
    footerCopyright: '© 2024 BreatheBook. Alle rettigheder forbeholdes.',
    privacyContent: `
      <p class="mb-4">Din tillid er vigtig for os, og vi stræber efter at sikre din fortrolighed. Vores app fungerer helt lokalt på din enhed og indsamler, gemmer eller overfører ingen brugerdata til servere eller tredjeparter.</p>
      <p class="mb-4">Vi bruger ikke tredjepartstjenester til analyse eller sporing af din aktivitet. Alle data, som du indtaster eller opretter i appen, forbliver udelukkende på din enhed.</p>
      <p class="mb-4">Hvis du har spørgsmål eller forslag, er du velkommen til at kontakte os.</p>
      <p>Tak fordi du bruger vores app!</p>
    `,
    termsContent: `
      <h4 class="text-lg font-semibold text-white mb-3">Accept af vilkår</h4>
      <p class="mb-4">Ved at downloade og bruge BreatheBook accepterer du disse brugsvilkår. Hvis du ikke accepterer, bedes du ikke bruge vores applikation.</p>
      <h4 class="text-lg font-semibold text-white mb-3">Brugsrettighedder</h4>
      <p class="mb-4">Vi giver dig en begrænset, ikke-eksklusiv, ikke-overdragelig licens til at bruge BreatheBook til personlige, ikke-kommercielle formål.</p>
      <h4 class="text-lg font-semibold text-white mb-3">Brugeransvar</h4>
      <p class="mb-4">Du er ansvarlig for at bruge appen hensigtsmæssigt og ikke dele dine kontooplysninger. Rådfør dig med sundhedsprofessionelle før du påbegynder et vejrtrækningsprogram.</p>
      <h4 class="text-lg font-semibold text-white mb-3">Begrænsninger</h4>
      <p>BreatheBook leveres "som den er" uden garantier. Vi er ikke ansvarlige for skader der opstår som følge af din brug af applikationen.</p>
    `
  },
  fi: {
    code: 'FI',
    flag: '🇫🇮',
    name: 'Suomi',
    appDescription: 'Tietoinen hengitys sisäisen rauhan ja mielen kirkkauden saavuttamiseksi',
    privacyButtonLabel: 'Tietosuojakäytäntö',
    privacyTitle: 'Tietosuojakäytäntö',
    termsButtonLabel: 'Käyttöehdot',
    termsTitle: 'Käyttöehdot',
    downloadButtonLabel: 'Lataa App Storesta',
    footerCopyright: '© 2024 BreatheBook. Kaikki oikeudet pidätetään.',
    privacyContent: `
      <p class="mb-4">Luottamuksesi on meille tärkeää, ja pyrimme varmistamaan yksityisyytesi. Sovelluksemme toimii täysin paikallisesti laitteellasi eikä kerää, tallenna tai siirrä mitään käyttäjätietoja palvelimille tai kolmansille osapuolille.</p>
      <p class="mb-4">Emme käytä kolmannen osapuolen palveluita toimintasi analysointiin tai seuraamiseen. Kaikki tiedot, jotka syötät tai luot sovelluksessa, pysyvät yksinomaan laitteellasi.</p>
      <p class="mb-4">Jos sinulla on kysymyksiä tai ehdotuksia, ota meihin yhteyttä.</p>
      <p>Kiitos, että käytät sovellustamme!</p>
    `,
    termsContent: `
      <h4 class="text-lg font-semibold text-white mb-3">Ehtojen hyväksyminen</h4>
      <p class="mb-4">Lataamalla ja käyttämällä BreatheBookia hyväksyt nämä käyttöehdot. Jos et hyväksy, älä käytä sovellustamme.</p>
      <h4 class="text-lg font-semibold text-white mb-3">Käyttölisenssi</h4>
      <p class="mb-4">Myönnämme sinulle rajoitetun, ei-yksinomaisen, ei-siirrettävän lisenssin käyttää BreatheBookia henkilökohtaisiin, ei-kaupallisiin tarkoituksiin.</p>
      <h4 class="text-lg font-semibold text-white mb-3">Käyttäjän vastuut</h4>
      <p class="mb-4">Olet vastuussa sovelluksen asianmukaisesta käytöstä ja tilisi kirjautumistietojen jakamatta jättämisestä. Ota yhteyttä terveydenhuollon ammattilaisiin ennen hengitysharjoitusohjelman aloittamista.</p>
      <h4 class="text-lg font-semibold text-white mb-3">Rajoitukset</h4>
      <p>BreatheBook tarjotaan "sellaisenaan" ilman takuita. Emme ole vastuussa sovelluksen käytöstä aiheutuvista vahingoista.</p>
    `
  },
  it: {
    code: 'IT',
    flag: '🇮🇹',
    name: 'Italiano',
    appDescription: 'Esercizi di respirazione consapevole per la pace interiore e la chiarezza mentale',
    privacyButtonLabel: 'Informativa sulla Privacy',
    privacyTitle: 'Informativa sulla Privacy',
    termsButtonLabel: 'Termini di Utilizzo',
    termsTitle: 'Termini di Utilizzo',
    downloadButtonLabel: 'Scarica da App Store',
    footerCopyright: '© 2024 BreatheBook. Tutti i diritti riservati.',
    privacyContent: `
      <p class="mb-4">La vostra fiducia è importante per noi e ci impegniamo a garantire la vostra privacy. La nostra applicazione funziona completamente in locale sul vostro dispositivo e non raccoglie, memorizza o trasmette alcun dato utente a server o terze parti.</p>
      <p class="mb-4">Non utilizziamo servizi di terze parti per analizzare o tracciare la vostra attività. Tutti i dati che inserite o create nell'applicazione rimangono esclusivamente sul vostro dispositivo.</p>
      <p class="mb-4">Se avete domande o suggerimenti, vi preghiamo di contattarci.</p>
      <p>Grazie per aver utilizzato la nostra applicazione!</p>
    `,
    termsContent: `
      <h4 class="text-lg font-semibold text-white mb-3">Accettazione dei Termini</h4>
      <p class="mb-4">Scaricando e utilizzando BreatheBook, accettate questi termini di utilizzo. Se non siete d'accordo, vi preghiamo di non utilizzare la nostra applicazione.</p>
      <h4 class="text-lg font-semibold text-white mb-3">Licenza d'Uso</h4>
      <p class="mb-4">Vi concediamo una licenza limitata, non esclusiva e non trasferibile per utilizzare BreatheBook per scopi personali e non commerciali.</p>
      <h4 class="text-lg font-semibold text-white mb-3">Responsabilità dell'Utente</h4>
      <p class="mb-4">Siete responsabili dell'uso appropriato dell'app e di non condividere le credenziali del vostro account. Consultate professionisti sanitari prima di iniziare qualsiasi programma di esercizi di respirazione.</p>
      <h4 class="text-lg font-semibold text-white mb-3">Limitazioni</h4>
      <p>BreatheBook è fornito "così com'è" senza garanzie. Non siamo responsabili per danni derivanti dal vostro utilizzo dell'applicazione.</p>
    `
  },
  pt: {
    code: 'PT',
    flag: '🇵🇹',
    name: 'Português',
    appDescription: 'Exercícios de respiração consciente para paz interior e clareza mental',
    privacyButtonLabel: 'Política de Privacidade',
    privacyTitle: 'Política de Privacidade',
    termsButtonLabel: 'Termos de Uso',
    termsTitle: 'Termos de Uso',
    downloadButtonLabel: 'Baixar da App Store',
    footerCopyright: '© 2024 BreatheBook. Todos os direitos reservados.',
    privacyContent: `
      <p class="mb-4">A sua confiança é importante para nós, e esforçamo-nos para garantir a sua privacidade. A nossa aplicação funciona completamente de forma local no seu dispositivo e não recolhe, armazena ou transmite quaisquer dados do utilizador para servidores ou terceiros.</p>
      <p class="mb-4">Não utilizamos serviços de terceiros para análise ou rastreamento da sua atividade. Todos os dados que introduza ou crie na aplicação permanecem exclusivamente no seu dispositivo.</p>
      <p class="mb-4">Se tiver questões ou sugestões, por favor contacte-nos.</p>
      <p>Obrigado por usar a nossa aplicação!</p>
    `,
    termsContent: `
      <h4 class="text-lg font-semibold text-white mb-3">Aceitação dos Termos</h4>
      <p class="mb-4">Ao baixar e usar o BreatheBook, você concorda com estes termos de uso. Se não concordar, por favor não use nossa aplicação.</p>
      <h4 class="text-lg font-semibold text-white mb-3">Licença de Uso</h4>
      <p class="mb-4">Concedemos-lhe uma licença limitada, não exclusiva e intransferível para usar o BreatheBook para fins pessoais e não comerciais.</p>
      <h4 class="text-lg font-semibold text-white mb-3">Responsabilidades do Utilizador</h4>
      <p class="mb-4">É responsável por usar a aplicação adequadamente e não partilhar as credenciais da sua conta. Consulte profissionais de saúde antes de iniciar qualquer programa de exercícios respiratórios.</p>
      <h4 class="text-lg font-semibold text-white mb-3">Limitações</h4>
      <p>O BreatheBook é fornecido "como está" sem garantias. Não somos responsáveis por quaisquer danos decorrentes do seu uso da aplicação.</p>
    `
  },
  pl: {
    code: 'PL',
    flag: '🇵🇱',
    name: 'Polski',
    appDescription: 'Świadome ćwiczenia oddechowe dla wewnętrznego spokoju i jasności umysłu',
    privacyButtonLabel: 'Polityka Prywatności',
    privacyTitle: 'Polityka Prywatności',
    termsButtonLabel: 'Warunki Użytkowania',
    termsTitle: 'Warunki Użytkowania',
    downloadButtonLabel: 'Pobierz z App Store',
    footerCopyright: '© 2024 BreatheBook. Wszelkie prawa zastrzeżone.',
    privacyContent: `
      <p class="mb-4">Wasze zaufanie jest dla nas ważne i staramy się zapewnić Waszą prywatność. Nasza aplikacja działa całkowicie lokalnie na Waszym urządzeniu i nie zbiera, nie przechowuje ani nie przesyła żadnych danych użytkownika na serwery lub do stron trzecich.</p>
      <p class="mb-4">Nie używamy usług stron trzecich do analizy lub śledzenia Waszej aktywności. Wszystkie dane, które wprowadzacie lub tworzycie w aplikacji, pozostają wyłącznie na Waszym urządzeniu.</p>
      <p class="mb-4">Jeśli macie jakieś pytania lub sugestie, prosimy o kontakt z nami.</p>
      <p>Dziękujemy za korzystanie z naszej aplikacji!</p>
    `,
    termsContent: `
      <h4 class="text-lg font-semibold text-white mb-3">Akceptacja Warunków</h4>
      <p class="mb-4">Pobierając i używając BreatheBook, zgadzasz się na te warunki użytkowania. Jeśli się nie zgadzasz, prosimy nie używać naszej aplikacji.</p>
      <h4 class="text-lg font-semibold text-white mb-3">Licencja Użytkowania</h4>
      <p class="mb-4">Przyznajemy ci ograniczoną, niewyłączną, nieprzenoszalną licencję na używanie BreatheBook do celów osobistych i niekomercyjnych.</p>
      <h4 class="text-lg font-semibold text-white mb-3">Obowiązki Użytkownika</h4>
      <p class="mb-4">Jesteś odpowiedzialny za właściwe używanie aplikacji i niedzielenie się danymi logowania do konta. Skonsultuj się z profesjonalistami opieki zdrowotnej przed rozpoczęciem jakiegokolwiek programu ćwiczeń oddechowych.</p>
      <h4 class="text-lg font-semibold text-white mb-3">Ograniczenia</h4>
      <p>BreatheBook jest dostarczany "jak jest" bez gwarancji. Nie ponosimy odpowiedzialności za jakiekolwiek szkody wynikające z użytkowania aplikacji.</p>
    `
  },
  sv: {
    code: 'SV',
    flag: '🇸🇪',
    name: 'Svenska',
    appDescription: 'Medveten andning för inre frid och mental klarhet',
    privacyButtonLabel: 'Integritetspolicy',
    privacyTitle: 'Integritetspolicy',
    termsButtonLabel: 'Användarvillkor',
    termsTitle: 'Användarvillkor',
    downloadButtonLabel: 'Ladda ner från App Store',
    footerCopyright: '© 2024 BreatheBook. Alla rättigheter förbehållna.',
    privacyContent: `
      <p class="mb-4">Er tillit är viktig för oss och vi strävar efter att säkerställa er integritet. Vår app fungerar helt lokalt på er enhet och samlar inte in, lagrar eller överför någon användardata till servrar eller tredje parter.</p>
      <p class="mb-4">Vi använder inte tredjepartstjänster för analys eller spårning av er aktivitet. All data som ni anger eller skapar i appen förblir endast på er enhet.</p>
      <p class="mb-4">Om ni har frågor eller förslag, vänligen kontakta oss.</p>
      <p>Tack för att ni använder vår app!</p>
    `,
    termsContent: `
      <h4 class="text-lg font-semibold text-white mb-3">Acceptans av Villkor</h4>
      <p class="mb-4">Genom att ladda ner och använda BreatheBook godkänner du dessa användarvillkor. Om du inte håller med, vänligen använd inte vår applikation.</p>
      <h4 class="text-lg font-semibold text-white mb-3">Användarlicens</h4>
      <p class="mb-4">Vi beviljar dig en begränsad, icke-exklusiv, icke-överförbar licens att använda BreatheBook för personliga, icke-kommersiella ändamål.</p>
      <h4 class="text-lg font-semibold text-white mb-3">Användaransvar</h4>
      <p class="mb-4">Du är ansvarig för att använda appen på lämpligt sätt och att inte dela dina kontoinloggningsuppgifter. Rådgör med vårdprofessionella innan du påbörjar något andningsprogram.</p>
      <h4 class="text-lg font-semibold text-white mb-3">Begränsningar</h4>
      <p>BreatheBook tillhandahålls "som den är" utan garantier. Vi är inte ansvariga för skador som uppstår till följd av din användning av applikationen.</p>
    `
  },
  th: {
    code: 'TH',
    flag: '🇹🇭',
    name: 'ไทย',
    appDescription: 'การออกกำลังกายการหายใจอย่างมีสติเพื่อความสงบภายในและความใสในจิตใจ',
    privacyButtonLabel: 'นโยบายความเป็นส่วนตัว',
    privacyTitle: 'นโยบายความเป็นส่วนตัว',
    termsButtonLabel: 'เงื่อนไขการใช้งาน',
    termsTitle: 'เงื่อนไขการใช้งาน',
    downloadButtonLabel: 'ดาวน์โหลดจาก App Store',
    footerCopyright: '© 2024 BreatheBook. สงวนลิขสิทธิ์.',
    privacyContent: `
      <p class="mb-4">ความไว้วางใจของคุณสำคัญสำหรับเรา และเรามุ่งมั่นที่จะรักษาความเป็นส่วนตัวของคุณ แอปพลิเคชันของเราทำงานแบบโลคอลบนอุปกรณ์ของคุณโดยสมบูรณ์ และไม่รวบรวม ไม่จัดเก็บ และไม่ส่งข้อมูลผู้ใช้ไปยังเซิร์ฟเวอร์หรือบุคคลที่สาม</p>
      <p class="mb-4">เราไม่ใช้บริการของบุคคลที่สามในการวิเคราะห์หรือติดตามกิจกรรมของคุณ ข้อมูลทั้งหมดที่คุณป้อนหรือสร้างในแอปพลิเคชันจะยังคงอยู่บนอุปกรณ์ของคุณเท่านั้น</p>
      <p class="mb-4">หากคุณมีคำถามหรือข้อเสนอแนะ โปรดติดต่อเรา</p>
      <p>ขอบคุณที่ใช้แอปพลิเคชันของเรา!</p>
    `,
    termsContent: `
      <h4 class="text-lg font-semibold text-white mb-3">การยอมรับเงื่อนไข</h4>
      <p class="mb-4">การดาวน์โหลดและใช้ BreatheBook หมายความว่าคุณยอมรับเงื่อนไขการใช้งานเหล่านี้ หากคุณไม่ยอมรับ โปรดอย่าใช้แอปพลิเคชันของเรา</p>
      <h4 class="text-lg font-semibold text-white mb-3">ใบอนุญาตการใช้งาน</h4>
      <p class="mb-4">เรามอบใบอนุญาตที่จำกัด ไม่เป็นเอกสิทธิ์ และไม่สามารถโอนย้ายได้ให้คุณใช้ BreatheBook เพื่อวัตถุประสงค์ส่วนบุคคลและไม่ใช่เพื่อการค้า</p>
      <h4 class="text-lg font-semibold text-white mb-3">ความรับผิดชอบของผู้ใช้</h4>
      <p class="mb-4">คุณมีความรับผิดชอบในการใช้แอปอย่างเหมาะสมและไม่แชร์ข้อมูลประจำตัวบัญชีของคุณ ปรึกษาผู้เชี่ยวชาญด้านสุขภาพก่อนเริ่มโปรแกรมการออกกำลังกายการหายใจใดๆ</p>
      <h4 class="text-lg font-semibold text-white mb-3">ข้อจำกัด</h4>
      <p>BreatheBook ให้บริการ "ตามสภาพ" โดยไม่มีการรับประกัน เราไม่รับผิดชอบต่อความเสียหายใดๆ ที่เกิดขึ้นจากการใช้แอปพลิเคชันของคุณ</p>
    `
  },
  tr: {
    code: 'TR',
    flag: '🇹🇷',
    name: 'Türkçe',
    appDescription: 'İç huzur ve zihinsel berraklık için bilinçli nefes egzersizleri',
    privacyButtonLabel: 'Gizlilik Politikası',
    privacyTitle: 'Gizlilik Politikası',
    termsButtonLabel: 'Kullanım Şartları',
    termsTitle: 'Kullanım Şartları',
    downloadButtonLabel: 'App Store\'dan İndir',
    footerCopyright: '© 2024 BreatheBook. Tüm hakları saklıdır.',
    privacyContent: `
      <p class="mb-4">Güveniniz bizim için önemlidir ve gizliliğinizi sağlamayı taahhüt ediyoruz. Uygulamamız tamamen cihazınızda yerel olarak çalışır ve kullanıcı verilerini sunuculara veya üçüncü taraflara toplamaz, saklamaz veya iletmez.</p>
      <p class="mb-4">Aktivitenizi analiz etmek veya izlemek için üçüncü taraf hizmetleri kullanmıyoruz. Uygulamada girdiğiniz veya oluşturduğunuz tüm veriler yalnızca cihazınızda kalır.</p>
      <p class="mb-4">Sorularınız veya önerileriniz varsa lütfen bizimle iletişime geçin.</p>
      <p>Uygulamamızı kullandığınız için teşekkür ederiz!</p>
    `,
    termsContent: `
      <h4 class="text-lg font-semibold text-white mb-3">Şartların Kabulü</h4>
      <p class="mb-4">BreatheBook'u indirip kullanarak, bu kullanım şartlarını kabul etmiş olursunuz. Kabul etmiyorsanız, lütfen uygulamamızı kullanmayın.</p>
      <h4 class="text-lg font-semibold text-white mb-3">Kullanım Lisansı</h4>
      <p class="mb-4">Size BreatheBook'u kişisel, ticari olmayan amaçlarla kullanmak için sınırlı, münhasır olmayan, devredilemez bir lisans veriyoruz.</p>
      <h4 class="text-lg font-semibold text-white mb-3">Kullanıcı Sorumlulukları</h4>
      <p class="mb-4">Uygulamayı uygun şekilde kullanmak ve hesap kimlik bilgilerinizi paylaşmamaktan sorumlusunuz. Herhangi bir nefes egzersizi programına başlamadan önce sağlık uzmanlarına danışın.</p>
      <h4 class="text-lg font-semibold text-white mb-3">Sınırlamalar</h4>
      <p>BreatheBook garanti olmaksızın "olduğu gibi" sağlanır. Uygulamanın kullanımınızdan kaynaklanan herhangi bir zarardan sorumlu değiliz.</p>
    `
  },
  vi: {
    code: 'VI',
    flag: '🇻🇳',
    name: 'Tiếng Việt',
    appDescription: 'Bài tập thở có ý thức cho sự bình an nội tâm và sự minh mẫn tinh thần',
    privacyButtonLabel: 'Chính sách bảo mật',
    privacyTitle: 'Chính sách bảo mật',
    termsButtonLabel: 'Điều khoản sử dụng',
    termsTitle: 'Điều khoản sử dụng',
    downloadButtonLabel: 'Tải từ App Store',
    footerCopyright: '© 2024 BreatheBook. Bảo lưu mọi quyền.',
    privacyContent: `
      <p class="mb-4">Sự tin tưởng của bạn rất quan trọng đối với chúng tôi, và chúng tôi cố gắng đảm bảo quyền riêng tư của bạn. Ứng dụng của chúng tôi hoạt động hoàn toàn cục bộ trên thiết bị của bạn và không thu thập, lưu trữ hoặc truyền bất kỳ dữ liệu người dùng nào đến máy chủ hoặc bên thứ ba.</p>
      <p class="mb-4">Chúng tôi không sử dụng các dịch vụ bên thứ ba để phân tích hoặc theo dõi hoạt động của bạn. Tất cả dữ liệu mà bạn nhập hoặc tạo trong ứng dụng đều chỉ được lưu trữ trên thiết bị của bạn.</p>
      <p class="mb-4">Nếu bạn có bất kỳ câu hỏi hoặc đề xuất nào, vui lòng liên hệ với chúng tôi.</p>
      <p>Cảm ơn bạn đã sử dụng ứng dụng của chúng tôi!</p>
    `,
    termsContent: `
      <h4 class="text-lg font-semibold text-white mb-3">Chấp nhận Điều khoản</h4>
      <p class="mb-4">Bằng cách tải xuống và sử dụng BreatheBook, bạn đồng ý với các điều khoản sử dụng này. Nếu bạn không đồng ý, vui lòng không sử dụng ứng dụng của chúng tôi.</p>
      <h4 class="text-lg font-semibold text-white mb-3">Giấy phép Sử dụng</h4>
      <p class="mb-4">Chúng tôi cấp cho bạn giấy phép có giới hạn, không độc quyền, không thể chuyển nhượng để sử dụng BreatheBook cho mục đích cá nhân, phi thương mại.</p>
      <h4 class="text-lg font-semibold text-white mb-3">Trách nhiệm Người dùng</h4>
      <p class="mb-4">Bạn có trách nhiệm sử dụng ứng dụng một cách thích hợp và không chia sẻ thông tin đăng nhập tài khoản của bạn. Tham khảo ý kiến chuyên gia chăm sóc sức khỏe trước khi bắt đầu bất kỳ chương trình tập thở nào.</p>
      <h4 class="text-lg font-semibold text-white mb-3">Giới hạn</h4>
      <p>BreatheBook được cung cấp "nguyên trạng" mà không có bảo hành. Chúng tôi không chịu trách nhiệm về bất kỳ thiệt hại nào phát sinh từ việc bạn sử dụng ứng dụng.</p>
    `
  },
  id: {
    code: 'ID',
    flag: '🇮🇩',
    name: 'Bahasa Indonesia',
    appDescription: 'Latihan pernapasan sadar untuk kedamaian batin dan kejernihan mental',
    privacyButtonLabel: 'Kebijakan Privasi',
    privacyTitle: 'Kebijakan Privasi',
    termsButtonLabel: 'Syarat Penggunaan',
    termsTitle: 'Syarat Penggunaan',
    downloadButtonLabel: 'Unduh dari App Store',
    footerCopyright: '© 2024 BreatheBook. Semua hak dilindungi.',
    privacyContent: `
      <p class="mb-4">Kepercayaan Anda penting bagi kami, dan kami berusaha memastikan privasi Anda. Aplikasi kami beroperasi sepenuhnya secara lokal di perangkat Anda dan tidak mengumpulkan, menyimpan, atau mengirimkan data pengguna apa pun ke server atau pihak ketiga.</p>
      <p class="mb-4">Kami tidak menggunakan layanan pihak ketiga untuk analitik atau melacak aktivitas Anda. Semua data yang Anda masukkan atau buat dalam aplikasi tetap eksklusif di perangkat Anda.</p>
      <p class="mb-4">Jika Anda memiliki pertanyaan atau saran, silakan hubungi kami.</p>
      <p>Terima kasih telah menggunakan aplikasi kami!</p>
    `,
    termsContent: `
      <h4 class="text-lg font-semibold text-white mb-3">Penerimaan Syarat</h4>
      <p class="mb-4">Dengan mengunduh dan menggunakan BreatheBook, Anda menyetujui syarat penggunaan ini. Jika Anda tidak setuju, mohon jangan gunakan aplikasi kami.</p>
      <h4 class="text-lg font-semibold text-white mb-3">Lisensi Penggunaan</h4>
      <p class="mb-4">Kami memberikan Anda lisensi terbatas, non-eksklusif, tidak dapat dialihkan untuk menggunakan BreatheBook untuk tujuan pribadi dan non-komersial.</p>
      <h4 class="text-lg font-semibold text-white mb-3">Tanggung Jawab Pengguna</h4>
      <p class="mb-4">Anda bertanggung jawab untuk menggunakan aplikasi dengan tepat dan tidak membagikan kredensial akun Anda. Konsultasikan dengan profesional kesehatan sebelum memulai program latihan pernapasan apa pun.</p>
      <h4 class="text-lg font-semibold text-white mb-3">Keterbatasan</h4>
      <p>BreatheBook disediakan "apa adanya" tanpa jaminan. Kami tidak bertanggung jawab atas kerusakan apa pun yang timbul dari penggunaan aplikasi Anda.</p>
    `
  }
};

export const supportedLanguages = Object.keys(languages);