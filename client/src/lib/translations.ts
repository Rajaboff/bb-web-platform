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
    code: "EN",
    flag: "🇺🇸",
    name: "English",
    appDescription:
      "Mindful breathing exercises for inner peace and mental clarity",
    privacyButtonLabel: "Privacy Policy",
    privacyTitle: "Privacy Policy",
    termsButtonLabel: "Terms of Use",
    termsTitle: "Terms of Use",
    downloadButtonLabel: "Download from App Store",
    footerCopyright: "© 2024 BreatheBook. All rights reserved.",
    privacyContent: `
      <p class="mb-4">Your trust is important to us, and we strive to ensure your privacy. Our application operates entirely locally on your device and does not collect, store, or transmit any user data to servers or third parties.</p>
      <p class="mb-4">We do not use third-party services for analytics or tracking your activity. All data that you enter or create in the application remains exclusively on your device.</p>
      <p class="mb-4">If you have any questions or suggestions, please contact us.</p>
      <p>Thank you for using our application!</p>
    `,
    termsContent: `
      <p class="mb-4">Welcome to our application! Please read the terms of use carefully before you start.</p>

<p class="mb-4"><strong>1. Free Trial Period:</strong><br>
We offer a free trial period of 7 days. During this time, you can use all the features of the application without any restrictions.</p>

<p class="mb-4"><strong>2. Automatic Subscription:</strong><br>
After the free trial period ends, your subscription will automatically renew for one year at a cost of $39.99.<br>
The payment will be charged to your Apple ID account upon purchase confirmation.</p>

<p class="mb-4"><strong>3. Subscription Management:</strong><br>
You can manage your subscription and disable automatic renewal in your Apple ID account settings.<br>
Subscription cancellation is only possible before the end of the current paid period.</p>

<p class="mb-4"><strong>4. Refunds:</strong><br>
Subscription payments are non-refundable, except as required by law.</p>

<p class="mb-4"><strong>5. Changes to Terms:</strong><br>
We reserve the right to modify these terms of use. You will be notified of any changes through the application.</p>

<p class="mb-4"><strong>6. Contact Information:</strong><br>
If you have any questions, please contact us through the support section in the application.</p>

<p>By using our application, you agree to these terms. Thank you for choosing our service!</p>

    `,
  },
  ru: {
    code: "RU",
    flag: "🇷🇺",
    name: "Русский",
    appDescription:
      "Осознанные дыхательные упражнения для внутреннего покоя и ясности ума",
    privacyButtonLabel: "Политика конфиденциальности",
    privacyTitle: "Политика конфиденциальности",
    termsButtonLabel: "Условия использования",
    termsTitle: "Условия использования",
    downloadButtonLabel: "Скачать из App Store",
    footerCopyright: "© 2024 BreatheBook. Все права защищены.",
    privacyContent: `
      <p class="mb-4">Ваше доверие важно для нас, и мы стремимся обеспечить вашу конфиденциальность. Наше приложение работает полностью локально на вашем устройстве и не собирает, не хранит и не передает никакие данные пользователя на серверы или третьим лицам.</p>
      <p class="mb-4">Мы не используем сторонние сервисы для анализа или отслеживания вашей активности. Все данные, которые вы вводите или создаете в приложении, остаются исключительно на вашем устройстве.</p>
      <p class="mb-4">Если у вас есть вопросы или предложения, пожалуйста, свяжитесь с нами.</p>
      <p>Спасибо за использование нашего приложения!</p>
    `,
    termsContent: `
      <p class="mb-4">Добро пожаловать в наше приложение! Пожалуйста, внимательно ознакомьтесь с условиями использования перед началом работы.</p>

<p class="mb-4"><strong>1. Бесплатный пробный период:</strong><br>
Мы предоставляем бесплатный пробный период длительностью 7 дней. В течение этого времени вы можете использовать все функции приложения без каких-либо ограничений.</p>

<p class="mb-4"><strong>2. Автоматическая подписка:</strong><br>
После окончания бесплатного пробного периода ваша подписка будет автоматически продлена на год с оплатой в размере 39.99$.<br>
Оплата будет списана с вашего аккаунта Apple ID после подтверждения покупки.</p>

<p class="mb-4"><strong>3. Управление подпиской:</strong><br>
Вы можете управлять подпиской и отключить автоматическое продление в настройках вашего аккаунта Apple ID.<br>
Отмена подписки возможна только до окончания текущего оплаченного периода.</p>

<p class="mb-4"><strong>4. Возвраты:</strong><br>
Платежи за подписку не подлежат возврату, за исключением случаев, предусмотренных законодательством.</p>

<p class="mb-4"><strong>5. Изменения условий:</strong><br>
Мы оставляем за собой право изменять данные условия использования. Обо всех изменениях вы будете уведомлены через приложение.</p>

<p class="mb-4"><strong>6. Контактная информация:</strong><br>
Если у вас возникли вопросы, пожалуйста, свяжитесь с нами через раздел поддержки в приложении.</p>

<p>Используя наше приложение, вы соглашаетесь с данными условиями. Благодарим за выбор нашего сервиса!</p>
    `,
  },
  es: {
    code: "ES",
    flag: "🇪🇸",
    name: "Español",
    appDescription:
      "Ejercicios de respiración consciente para la paz interior y claridad mental",
    privacyButtonLabel: "Política de Privacidad",
    privacyTitle: "Política de privacidad",
    termsButtonLabel: "Términos de Uso",
    termsTitle: "Términos de Uso",
    downloadButtonLabel: "Descargar de App Store",
    footerCopyright: "© 2024 BreatheBook. Todos los derechos reservados.",
    privacyContent: `
      <p class="mb-4">Su confianza es importante para nosotros, y nos esforzamos por garantizar su privacidad. Nuestra aplicación funciona completamente de manera local en su dispositivo y no recopila, almacena ni transmite ningún dato del usuario a servidores o terceros.</p>
      <p class="mb-4">No utilizamos servicios externos para analizar o rastrear su actividad. Todos los datos que ingrese o cree en la aplicación permanecen exclusivamente en su dispositivo.</p>
      <p class="mb-4">Si tiene preguntas o sugerencias, por favor contáctenos.</p>
      <p>¡Gracias por usar nuestra aplicación!</p>
    `,
    termsContent: `
      <p class="mb-4">¡Bienvenido a nuestra aplicación! Por favor, lea atentamente los términos de uso antes de comenzar.</p>

<p class="mb-4"><strong>1. Período de prueba gratuito:</strong><br>
Ofrecemos un período de prueba gratuito de 7 días. Durante este tiempo, puede utilizar todas las funciones de la aplicación sin ninguna restricción.</p>

<p class="mb-4"><strong>2. Suscripción automática:</strong><br>
Después de que finalice el período de prueba gratuito, su suscripción se renovará automáticamente por un año con un costo de 39.99$.<br>
El pago se cargará a su cuenta de Apple ID después de confirmar la compra.</p>

<p class="mb-4"><strong>3. Gestión de suscripción:</strong><br>
Puede gestionar su suscripción y desactivar la renovación automática en la configuración de su cuenta de Apple ID.<br>
La cancelación de la suscripción solo es posible antes de que finalice el período actual pagado.</p>

<p class="mb-4"><strong>4. Reembolsos:</strong><br>
Los pagos de suscripción no son reembolsables, excepto en los casos previstos por la ley.</p>

<p class="mb-4"><strong>5. Cambios en los términos:</strong><br>
Nos reservamos el derecho de modificar estos términos de uso. Se le notificará sobre cualquier cambio a través de la aplicación.</p>

<p class="mb-4"><strong>6. Información de contacto:</strong><br>
Si tiene alguna pregunta, por favor contáctenos a través de la sección de soporte en la aplicación.</p>

<p>Al utilizar nuestra aplicación, usted acepta estos términos. ¡Gracias por elegir nuestro servicio!</p>
    `,
  },
  fr: {
    code: "FR",
    flag: "🇫🇷",
    name: "Français",
    appDescription:
      "Exercices de respiration consciente pour la paix intérieure et la clarté mentale",
    privacyButtonLabel: "Politique de Confidentialité",
    privacyTitle: "Politique de confidentialité",
    termsButtonLabel: "Conditions d'Utilisation",
    termsTitle: "Conditions d'Utilisation",
    downloadButtonLabel: "Télécharger sur App Store",
    footerCopyright: "© 2024 BreatheBook. Tous droits réservés.",
    privacyContent: `
      <p class="mb-4">Votre confiance est importante pour nous, et nous nous efforçons de garantir votre confidentialité. Notre application fonctionne entièrement localement sur votre appareil et ne collecte, ne stocke et ne transmet aucune donnée utilisateur à des serveurs ou à des tiers.</p>
      <p class="mb-4">Nous n'utilisons pas de services tiers pour analyser ou suivre votre activité. Toutes les données que vous saisissez ou créez dans l'application restent exclusivement sur votre appareil.</p>
      <p class="mb-4">Si vous avez des questions ou des suggestions, veuillez nous contacter.</p>
      <p>Merci d'utiliser notre application !</p>
    `,
    termsContent: `
      <p class="mb-4">Bienvenue dans notre application ! Veuillez lire attentivement les conditions d'utilisation avant de commencer.</p>

<p class="mb-4"><strong>1. Période d'essai gratuite :</strong><br>
Nous offrons une période d'essai gratuite de 7 jours. Pendant cette période, vous pouvez utiliser toutes les fonctionnalités de l'application sans aucune restriction.</p>

<p class="mb-4"><strong>2. Abonnement automatique :</strong><br>
Après la fin de la période d'essai gratuite, votre abonnement sera automatiquement renouvelé pour une durée d'un an avec un paiement de 69,99$.<br>
Le paiement sera débité de votre compte Apple ID après confirmation de l'achat.</p>

<p class="mb-4"><strong>3. Gestion de l'abonnement :</strong><br>
Vous pouvez gérer votre abonnement et désactiver le renouvellement automatique dans les paramètres de votre compte Apple ID.<br>
L'annulation de l'abonnement est possible uniquement avant la fin de la période payée en cours.</p>

<p class="mb-4"><strong>4. Remboursements :</strong><br>
Les paiements pour l'abonnement ne sont pas remboursables, sauf dans les cas prévus par la loi.</p>

<p class="mb-4"><strong>5. Modifications des conditions :</strong><br>
Nous nous réservons le droit de modifier ces conditions d'utilisation. Vous serez informé de tout changement via l'application.</p>

<p class="mb-4"><strong>6. Informations de contact :</strong><br>
Si vous avez des questions, veuillez nous contacter via la section support de l'application.</p>

<p>En utilisant notre application, vous acceptez ces conditions. Merci de choisir notre service !</p>
    `,
  },
  de: {
    code: "DE",
    flag: "🇩🇪",
    name: "Deutsch",
    appDescription:
      "Achtsame Atemübungen für inneren Frieden und geistige Klarheit",
    privacyButtonLabel: "Datenschutzrichtlinie",
    privacyTitle: "Datenschutzrichtlinie",
    termsButtonLabel: "Nutzungsbedingungen",
    termsTitle: "Nutzungsbedingungen",
    downloadButtonLabel: "Aus App Store herunterladen",
    footerCopyright: "© 2024 BreatheBook. Alle Rechte vorbehalten.",
    privacyContent: `
      <p class="mb-4">Ihr Vertrauen ist uns wichtig, und wir setzen uns dafür ein, Ihre Privatsphäre zu schützen. Unsere App funktioniert vollständig lokal auf Ihrem Gerät und sammelt, speichert oder überträgt keine Benutzerdaten an Server oder Dritte.</p>
      <p class="mb-4">Wir verwenden keine Drittanbieterdienste zur Analyse oder Verfolgung Ihrer Aktivitäten. Alle Daten, die Sie in der App eingeben oder erstellen, verbleiben ausschließlich auf Ihrem Gerät.</p>
      <p class="mb-4">Wenn Sie Fragen oder Vorschläge haben, kontaktieren Sie uns bitte.</p>
      <p>Vielen Dank für die Nutzung unserer App!</p>
    `,
    termsContent: `
      <p class="mb-4">Willkommen in unserer App! Bitte lesen Sie die Nutzungsbedingungen sorgfältig durch, bevor Sie beginnen.</p>

<p class="mb-4"><strong>1. Kostenloser Testzeitraum:</strong><br>
Wir bieten eine kostenlose Testphase von 7 Tagen an. Während dieser Zeit können Sie alle Funktionen der App uneingeschränkt nutzen.</p>

<p class="mb-4"><strong>2. Automatisches Abonnement:</strong><br>
Nach Ablauf der kostenlosen Testphase wird Ihr Abonnement automatisch um ein Jahr verlängert, mit einer Gebühr von 69,99$.<br>
Die Zahlung wird nach Bestätigung des Kaufs von Ihrem Apple-ID-Konto abgebucht.</p>

<p class="mb-4"><strong>3. Abonnementverwaltung:</strong><br>
Sie können Ihr Abonnement verwalten und die automatische Verlängerung in den Einstellungen Ihres Apple-ID-Kontos deaktivieren.<br>
Eine Kündigung des Abonnements ist nur vor Ablauf des aktuellen bezahlten Zeitraums möglich.</p>

<p class="mb-4"><strong>4. Rückerstattungen:</strong><br>
Abonnementzahlungen sind nicht erstattungsfähig, außer in den gesetzlich vorgesehenen Fällen.</p>

<p class="mb-4"><strong>5. Änderungen der Bedingungen:</strong><br>
Wir behalten uns das Recht vor, diese Nutzungsbedingungen zu ändern. Über alle Änderungen werden Sie über die App informiert.</p>

<p class="mb-4"><strong>6. Kontaktinformationen:</strong><br>
Wenn Sie Fragen haben, kontaktieren Sie uns bitte über den Support-Bereich in der App.</p>

<p>Durch die Nutzung unserer App stimmen Sie diesen Bedingungen zu. Vielen Dank, dass Sie unseren Service gewählt haben!</p>
    `,
  },
  ja: {
    code: "JA",
    flag: "🇯🇵",
    name: "日本語",
    appDescription: "内なる平和と精神的な明瞭さのためのマインドフル呼吸法",
    privacyButtonLabel: "プライバシーポリシー",
    privacyTitle: "プライバシーポリシー",
    termsButtonLabel: "利用規約",
    termsTitle: "利用規約",
    downloadButtonLabel: "App Storeからダウンロード",
    footerCopyright: "© 2024 BreatheBook. 無断転載禁止。",
    privacyContent: `
      <p class="mb-4">私たちはお客様の信頼を大切にしており、プライバシーの保護に努めています。当アプリは完全にお客様のデバイス上でローカルに動作し、ユーザーデータを収集、保存、またはサーバーや第三者に送信することはありません。</p>
      <p class="mb-4">また、当アプリでは、活動の分析や追跡のために外部サービスを使用ؿ���ることはありません。アプリ内で入力または作成されたすべてのデータは、お客様のデバイス内にのみ保存されます。</p>
      <p class="mb-4">ご質問やご提案がございましたら、ぜひお問い合わせください。</p>
      <p>当アプリをご利用いただきありがとうございます！</p>
    `,
    termsContent: `
      <p class="mb-4">私たちのアプリへようこそ！利用を開始する前に、以下の利用規約をよくお読みください。</p>

<p class="mb-4"><strong>1. 無料試用期間:</strong><br>
私たちは7日間の無料試用期間を提供しています。この期間中、アプリのすべての機能を制限なく使用することができます。</p>

<p class="mb-4"><strong>2. 自動サブスクリプション:</strong><br>
無料試用期間終了 ،、サブスクリプションは自動的に1年間延長され、料金は39.99ドルとなります。<br>
購入確認後、Apple IDアカウントから料金が引き落とされます。</p>

<p class="mb-4"><strong>3. サブスクリプション管理:</strong><br>
Apple IDアカウント設定でサブスクリプションを管理し、自動更新を無効にすることができます。<br>
サブスクリプションのキャンセルは、現在の支払い済み期間が終了する前にのみ可能です。</p>

<p class="mb-4"><strong>4. 返金:</strong><br>
サブスクリプション料金は、法律で定められた場合を除き、返金の対象にはなりません。</p>

<p class="mb-4"><strong>5. 利用規約の変更:</strong><br>
私たちはこの利用規約を変更する権利を有します。変更についてはアプリ内で通知されます。</p>

<p class="mb-4"><strong>6. 問い合わせ先:</strong><br>
ご質問がある場合は、アプリ内のサポートセクションを通じてお問い合わせください。</p>

<p>私たちのアプリを利用することで、これらの利用規約に同意したものとみなされます。私たちのサービスを選んでいただきありがとうございます！</p>
    `,
  },
  zh: {
    code: "ZH",
    flag: "🇨🇳",
    name: "中文",
    appDescription: "正念呼吸练习，获得内心平静和精神清明",
    privacyButtonLabel: "隐私政策",
    privacyTitle: "隐私政策",
    termsButtonLabel: "使用条款",
    termsTitle: "使用条款",
    downloadButtonLabel: "从App Store下载",
    footerCopyright: "© 2024 BreatheBook. 保留所有权利。",
    privacyContent: `
      <p class="mb-4">您的信任对我们非常重要，我们致力于保护您的隐私。我们的应用程序完全在您的设备上本地运行，不会收集、存储或传输任何用户数据到服务器或第三方。</p>
      <p class="mb-4">我们不使用第三方服务来分析或跟踪您的活动。您在应用程序中输入或创建的所有数据都���保留在您的设备上。</p>
      <p class="mb-4">如果您有任何问题或建议，请随时与我们联系。</p>
      <p>感谢您使用我们的应用程序！</p>
    `,
    termsContent: `
      <p class="mb-4">欢迎使用我们的应用程序！在开始使用之前，请仔细阅读以下使用条款。</p>

<p class="mb-4"><strong>1. 免费试用期：</strong><br>
我们提供为期7天的免费试用期。在此期间，您可以无限制地使用应用程序的所有功能。</p>

<p class="mb-4"><strong>2. 自动订阅：</strong><br>
免费试用期结束后，您的订阅将自动续订一年，费用为39.99美元。<br>
费用将在您确认购买后从您的Apple ID账户中扣除。</p>

<p class="mb-4"><strong>3. 订阅管理：</strong><br>
您可以在Apple ID账户设置中管理订阅并关闭自动续订。<br>
订阅只能在当前付费周期结束之前取消。</p>

<p class="mb-4"><strong>4. 退款：</strong><br>
订阅费用不可退款，除非法律另有规定。</p>

<p class="mb-4"><strong>5. 条款变更：</strong><br>
我们保留修改使用条款的权利。所有变更将通过应用程序通知您。</p>

<p class="mb-4"><strong>6. 联系信息：</strong><br>
如果您有任何问题，请通过应用程序中的支持部分与我们联系。</p>

<p>使用我们的应用程序即表示您同意这些使用条款。感谢您选择我们的服务！</p>
    `,
  },
  ko: {
    code: "KO",
    flag: "🇰🇷",
    name: "한국어",
    appDescription: "내면의 평화와 정신적 명료함을 위한 마음챙김 호흡 운동",
    privacyButtonLabel: "개인정보 보호정책",
    privacyTitle: "개인정보 보호정책",
    termsButtonLabel: "이용 약관",
    termsTitle: "이용 약관",
    downloadButtonLabel: "App Store에서 다운로드",
    footerCopyright: "© 2024 BreatheBook. 모든 권리 보유.",
    privacyContent: `
      <p class="mb-4">저희는 여러분의 신뢰를 중요하게 생각하며, 여러분의 개인정보를 보호하기 위해 최선을 다하고 있습니다. 저희 애플리케이션은 완전히 로컬로 여러분의 기기에서 작동하며, 사용자 데이터를 서버나 제3자에게 수집, 저장 또는 전송하지 않습니다.</p>
      <p class="mb-4">저희는 여러분의 활동을 분석하거나 추적하기 위해 타사 서비스를 사용하지 않습니다. 애플리케이션에 입력하거나 생성하는 모든 데이터는 오직 여러분의 기기에만 저장됩니다.</p>
      <p class="mb-4">질문이나 제안이 있으시면 저희에게 연락해 주세요.</p>
      <p>저희 애플리케이션을 사용해 주셔서 감사합니다!</p>
    `,
    termsContent: `
      <p class="mb-4">우리 애플리케이션에 오신 것을 환영합니다! 사용을 시작하기 전에 이용 약관을 주의 깊게 읽어주세요.</p>

<p class="mb-4"><strong>1. 무료 체험 기간:</strong><br>
저희는 7일 동안 무료 체험 기간을 제공합니다. 이 기간 동안 애플리케이션의 모든 기능을 제한 없이 사용할 수 있습니다.</p>

<p class="mb-4"><strong>2. 자동 구독:</strong><br>
무료 체험 기간이 끝난 후, 귀하의 구독은 연간 $39.99의 비용으로 자동 갱신됩니다.<br>
구매 확인 후 Apple ID 계정에서 결제가 이루어집니다.</p>

<p class="mb-4"><strong>3. 구독 관리:</strong><br>
Apple ID 계정 설정에서 구독을 관리하고 자동 갱신을 비활성화할 수 있습니다.<br>
구독 취소는 현재 결제된 기간이 끝나기 전에만 가능합니다.</p>

<p class="mb-4"><strong>4. 환불:</strong><br>
구독 결제는 법률에서 요구하는 경우를 제외하고 환불되지 않습니다.</p>

<p class="mb-4"><strong>5. 약관 변경:</strong><br>
저희는 이 이용 약관을 변경할 권리를 보유합니다. 모든 변경 사항은 애플리케이션을 통해 알려드립니다.</p>

<p class="mb-4"><strong>6. 연락처 정보:</strong><br>
질문이 있으시면 애플리케이션의 지원 섹션을 통해 저희에게 연락해주세요.</p>

<p>애플리케이션을 사용함으로써 귀하는 이 약관에 동의하는 것으로 간주됩니다. 저희 서비스를 선택해 주셔서 감사합니다!</p>
    `,
  },
  ar: {
    code: "AR",
    flag: "🇸🇦",
    name: "العربية",
    appDescription: "تمارين التنفس الواعي للسلام الداخلي والوضوح الذهني",
    privacyButtonLabel: "سياسة الخصوصية",
    privacyTitle: "سياسة الخصوصية",
    termsButtonLabel: "شروط الاستخدام",
    termsTitle: "شروط الاستخدام",
    downloadButtonLabel: "تحميل من App Store",
    footerCopyright: "© 2024 BreatheBook. جميع الحقوق محفوظة.",
    privacyContent: `
      <p class="mb-4" dir="rtl">ثقتكم مهمة بالنسبة لنا، ونحن نسعى لضمان خصوصيتكم. يعمل تطبيقنا بشكل كامل محليًا على جهازكم ولا يجمع أو يخزن أو ينقل أي بيانات مستخدم إلى الخوادم أو إلى أطراف o�الثة.</p>
      <p class="mb-4" dir="rtl">نحن لا نستخدم خدمات خارجية لتحليل أو تتبع نشاطكم. جميع البيانات التي تدخلونها أو تنشئونها في التطبيق تبقى حصريًا على جهازكم.</p>
      <p class="mb-4" dir="rtl">إذا كاs�ت لديكم أي أسئلة أو اقتراحات، يرجى التواصل معنا.</p>
      <p dir="rtl">شكرًا لاستخدامكم تطبيقنا!</p>
    `,
    termsContent: `
      <p class="mb-4" dir="rtl">مرحبًا بك في تطبيقنا! يرجى قراءة شروط الاستخدام بعناية قبل البدء.</p>

<p class="mb-4" dir="rtl"><strong>1. فترة تجريبية مجانية:</strong><br>
نقدم فترة تجريبية مجانية لمدة 7 أيام. خلال هذه الفترة، يمكنك استخدام جميع ميزات التطبيق دون أي قيود.</p>

<p class="mb-4" dir="rtl"><strong>2. الاشتراك التلقائي:</strong><br>
بعد انتهاء الفترة التجريبية المجانية، سيتم تجديد اشتراكك تلقائيًا لمدة عام بتكلفة 39.99$.<br>
سيتم l�صم المبلغ من حساب Apple ID الخاص بك بعد تأكيد الشراء.</p>

<p class="mb-4" dir="rtl"><strong>3. إدارة الاشتراك:</strong><br>
يمكنك إدارة الاشتراك وإيقاف التجديد التلقائي من إعدادات حساب Apple ID الخاص بك.<br>
يمكن إلغاء الاشتراك فقط قبل نهاية الفترة المدفوعة الحالية.</p>

<p class="mb-4" dir="rtl"><strong>4. الاسترداد:</strong><br>
المدفوعات الخاصة بالاشتراك غير قابلة للاسترداد، إلا في الحالات التي ينص عليها القانون.</p>

<p class="mb-4" dir="rtl"><strong>5. تغييرات الشروط:</strong><br>
نحتفظ بالحق في تعديل شروط الاستخدام هذه. سيتم إعلامك بأي تغييرات من خلال التطبيق.</p>

<p class="mb-4" dir="rtl"><strong>6. معلومات الاتصال:</strong><br>
إذا كانت لديك أي أسئلة، يرجى التواصل معنا عبر قسم الدعم في التطبيق.</p>

<p dir="rtl">باستخدامك لتطبيقنا، فإنك توافق على هذه الشروط. شكرًا لاختيارك خدمتنا!</p>

    `,
  },
  hi: {
    code: "HI",
    flag: "🇮🇳",
    name: "हिन्दी",
    appDescription:
      "आंतरिक शांति और मानसिक स्पष्टता के लिए माइंडफुल श्वास व्यायाम",
    privacyButtonLabel: "गोपनीयता नीति",
    privacyTitle: "गोपनीयता नीति",
    termsButtonLabel: "उपयोग की शर्तें",
    termsTitle: "उपयोग की शर्तें",
    downloadButtonLabel: "App Store से डाउनलोड करें",
    footerCopyright: "© 2024 BreatheBook. सभी अधिकार सुरक्षित।",
    privacyContent: `
      <p class="mb-4">आपका विश्वास हमारे लिए महत्वपूर्ण है, और हम आपकी गोपनीयता सुनिश्चित करने के लिए प्रतिबद्ध हैं। हमारा ऐप पूरी तरह से आपके डिवाइस पर स्थानीय रूप से काम करता है और उपयोगकर्ता डेटा को सर्वर या तीसरे पक्ष को इकट्ठा, संग्रहीत या स ��थानांतरित नहीं करता है।</p>
      <p class="mb-4">हम आपकी गतिविधि का विश्लेषण या ट्रैक करने के लिए किसी तृतीय-पक्ष सेवा का उपयोग नहीं करते हैं। ऐप में आप जो भी डेटा दर्ज करते हैं या बनाते हैं, वह केवल आपके डिवाइस पर ही रहता है।</p>
      <p class="mb-4">यदि आपके पास कोई प्रश्न या सुझाव हैं, तो कृपया हमसे संपर्क करें।</p>
      <p>हमारे ऐप का उपयोग करने के लिए धन्यवाद!</p>
    `,
    termsContent: `
      <p class="mb-4">हमारे ऐप में आपका स्वागत है! कृपया उपयोग की शर्तों को ध्यानपूर्वक पढ़ें और समझें।</p>

<p class="mb-4"><strong>1. नि:शुल्क परीक्षण अवधि:</strong><br>
हम 7 दिनों की नि:शुल्क परीक्षण अवधि प्रदान करते हैं। इस दौरान आप ऐप की सभी सुविधाओं का बिना किसी प्रतिबंध के उपयोग कर सकते हैं।</p>

<p class="mb-4"><strong>2. स्वचालित सदस्यता:</strong><br>
नि:शुल्क परीक्षण अवधि समाप्त होने के बाद आपकी सदस्यता स्वचालित रूप से एक वर्ष के लिए $39.99 की कीमत पर नवीनीकृत हो जाएगी।<br>
भुगतान आपके Apple ID खाते से खरीदारी की पुष्टि के बाद लिया जाएगा।</p>

<p class="mb-4"><strong>3. सदस्यता प्रबंधन:</strong><br>
आप अपनी सदस्यता का प्रबंधन कर सकते हैं और अपने Apple ID खाते की सेटिंग्स में स्वचालित नवीनीकरण को बंद कर सकते हैं।<br>
सदस्यता रद्द करना केवल वर्तमान भुगतान किए गए अवधि के समाप्त होने से पहले संभव है।</p>

<p class="mb-4"><strong>4. धनवापसी:</strong><br>
सदस्यता के लिए किए गए भुगतान वापस नहीं किए जाएंगे, जब तक कि कानून द्वारा निर्धारित न हो।</p>

<p class="mb-4"><strong>5. शर्तों में परिवर्तन:</strong><br>
हम इन उपयोग की शर्तों को बदलने का अधिकार सुरक्षित रखते हैं। सभी परिवर्तनों की सूचना आपको ऐप के माध्यम से दी जाएगी।</p>

<p class="mb-4"><strong>6. संपर्क जानकारी:</strong><br>
यदि आपके कोई प्रश्न हैं, तो कृपया ऐप में समर्थन अनुभाग के माध्यम से हमसे संपर्क करें।</p>

<p>हमारे ऐप का उपयोग करके, आप इन शर्तों से सहमत होते हैं। हमारे सेवा को चुनने के लिए धन्यवाद!</p>
    `,
  },
  da: {
    code: "DA",
    flag: "🇩🇰",
    name: "Dansk",
    appDescription: "Opmærksom vejrtrækning for indre fred og mental klarhed",
    privacyButtonLabel: "Fortrolighedspolitik",
    privacyTitle: "Fortrolighedspolitik",
    termsButtonLabel: "Brugsvilkår",
    termsTitle: "Brugsvilkår",
    downloadButtonLabel: "Download fra App Store",
    footerCopyright: "© 2024 BreatheBook. Alle rettigheder forbeholdes.",
    privacyContent: `
      <p class="mb-4">Din tillid er vigtig for os, og vi stræber efter at sikre din fortrolighed. Vores app fungerer helt lokalt på din enhed og indsamler, gemmer eller overfører ingen brugerdata til servere eller tredjeparter.</p>
      <p class="mb-4">Vi bruger ikke tredjepartstjenester til analyse eller sporing af din aktivitet. Alle data, som du indtaster eller opretter i appen, forbliver udelukkende på din enhed.</p>
      <p class="mb-4">Hvis du har spørgsmål eller forslag, er du velkommen til at kontakte os.</p>
      <p>Tak fordi du bruger vores app!</p>
    `,
    termsContent: `
      <p class="mb-4">Velkommen til vores app! Læs venligst vilkårene for brug omhyggeligt, før du begynder.</p>

<p class="mb-4"><strong>1. Gratis prøveperiode:</strong><br>
Vi tilbyder en gratis prøveperiode på 7 dage. I denne periode kan du bruge alle appens funktioner uden begrænsninger.</p>

<p class="mb-4"><strong>2. Automatisk abonnement:</strong><br>
Efter afslutningen af den gratis prøveperiode vil dit abonnement automatisk blive forlænget med et år til en pris på 69,99$.<br>
Betalingen vil blive trukket fra din Apple ID-konto efter bekræftelse af købet.</p>

<p class="mb-4"><strong>3. Abonnementsstyring:</strong><br>
Du kan administrere dit abonnement og deaktivere automatisk forlængelse i indstillingerne for din Apple ID-konto.<br>
Opsigelse af abonnement er kun mulig inden afslutningen af den nuværende betalte periode.</p>

<p class="mb-4"><strong>4. Refusioner:</strong><br>
Betalinger for abonnementer refunderes ikke, medmindre det er påkrævet ved lov.</p>

<p class="mb-4"><strong>5. Ændringer af vilkår:</strong><br>
Vi forbeholder os retten til at ændre disse vilkår for brug. Du vil blive informeret om ændringer via appen.</p>

<p class="mb-4"><strong>6. Kontaktinformation:</strong><br>
Hvis du har spørgsmål, bedes du kontakte os via supportsektionen i appen.</p>

<p>Ved at bruge vores app accepterer du disse vilkår. Tak fordi du valgte vores service!</p>
    `,
  },
  fi: {
    code: "FI",
    flag: "🇫🇮",
    name: "Suomi",
    appDescription:
      "Tietoinen hengitys sisäisen rauhan ja mielen kirkkauden saavuttamiseksi",
    privacyButtonLabel: "Tietosuojakäytäntö",
    privacyTitle: "Tietosuojakäytäntö",
    termsButtonLabel: "Käyttöehdot",
    termsTitle: "Käyttöehdot",
    downloadButtonLabel: "Lataa App Storesta",
    footerCopyright: "© 2024 BreatheBook. Kaikki oikeudet pidätetään.",
    privacyContent: `
      <p class="mb-4">Luottamuksesi on meille tärkeää, ja pyrimme varmistamaan yksityisyytesi. Sovelluksemme toimii täysin paikallisesti laitteellasi eikä kerää, tallenna tai siirrä mitään käyttäjätietoja palvelimille tai kolmansille osapuolille.</p>
      <p class="mb-4">Emme käytä kolmannen osapuolen palveluita toimintasi analysointiin tai seuraamiseen. Kaikki tiedot, jotka syötät tai luot sovelluksessa, pysyvät yksinomaan laitteellasi.</p>
      <p class="mb-4">Jos sinulla on kysymyksiä tai ehdotuksia, ota meihin yhteyttä.</p>
      <p>Kiitos, että käytät sovellustamme!</p>
    `,
    termsContent: `
      <p class="mb-4">Tervetuloa sovellukseemme! Tutustu huolellisesti käyttöehtoihin ennen kuin aloitat sovelluksen käytön.</p>

<p class="mb-4"><strong>1. Ilmainen kokeilujakso:</strong><br>
Tarjoamme 7 päivän ilmaisen kokeilujakson. Tänä aikana voit käyttää kaikkia sovelluksen ominaisuuksia ilman rajoituksia.</p>

<p class="mb-4"><strong>2. Automaattinen tilaus:</strong><br>
Ilmaisen kokeilujakson päätyttyä tilauksesi uusitaan automaattisesti vuodeksi hintaan 69,99$.<br>
Maksu veloitetaan Apple ID -tililtäsi ostoksen vahvistamisen jälkeen.</p>

<p class="mb-4"><strong>3. Tilauksen hallinta:</strong><br>
Voit hallita tilaustasi ja poistaa automaattisen uusinnan käytöstä Apple ID -tilisi asetuksissa.<br>
Tilauksen peruutus on mahdollista vain ennen nykyisen maksetun jakson päättymistä.</p>

<p class="mb-4"><strong>4. Palautukset:</strong><br>
Tilausmaksuja ei palauteta, paitsi lain edellyttämissä tapauksissa.</p>

<p class="mb-4"><strong>5. Ehtojen muutokset:</strong><br>
Pidätämme oikeuden muuttaa näitä käyttöehtoja. Kaikista muutoksista ilmoitetaan sovelluksen kautta.</p>

<p class="mb-4"><strong>6. Yhteystiedot:</strong><br>
Jos sinulla on kysyttävää, ota yhteyttä sovelluksen tukiosion kautta.</p>

<p>Käyttämällä sovellustamme hyväksyt nämä käyttöehdot. Kiitos, että valitsit palvelumme!</p>
    `,
  },
  it: {
    code: "IT",
    flag: "🇮🇹",
    name: "Italiano",
    appDescription:
      "Esercizi di respirazione consapevole per la pace interiore e la chiarezza mentale",
    privacyButtonLabel: "Informativa sulla Privacy",
    privacyTitle: "Informativa sulla Privacy",
    termsButtonLabel: "Termini di Utilizzo",
    termsTitle: "Termini di Utilizzo",
    downloadButtonLabel: "Scarica da App Store",
    footerCopyright: "© 2024 BreatheBook. Tutti i diritti riservati.",
    privacyContent: `
      <p class="mb-4">La vostra fiducia è importante per noi e ci impegniamo a garantire la vostra privacy. La nostra applicazione funziona completamente in locale sul vostro dispositivo e non raccoglie, memorizza o trasmette alcun dato utente a server o terze parti.</p>
      <p class="mb-4">Non utilizziamo servizi di terze parti per analizzare o tracciare la vostra attività. Tutti i dati che inserite o create nell'applicazione rimangono esclusivamente sul vostro dispositivo.</p>
      <p class="mb-4">Se avete domande o suggerimenti, vi preghiamo di contattarci.</p>
      <p>Grazie per aver utilizzato la nostra applicazione!</p>
    `,
    termsContent: `
      <p class="mb-4">Benvenuto nella nostra applicazione! Ti preghiamo di leggere attentamente i termini di utilizzo prima di iniziare.</p>

<p class="mb-4"><strong>1. Periodo di prova gratuito:</strong><br>
Offriamo un periodo di prova gratuito della durata di 7 giorni. Durante questo periodo, puoi utilizzare tutte le funzionalità dell'app senza alcuna limitazione.</p>

<p class="mb-4"><strong>2. Abbonamento automatico:</strong><br>
Alla fine del periodo di prova gratuito, il tuo abbonamento verrà automaticamente rinnovato per un anno al costo di 69,99$.<br>
Il pagamento verrà addebitato sul tuo account Apple ID dopo la conferma dell'acquisto.</p>

<p class="mb-4"><strong>3. Gestione dell'abbonamento:</strong><br>
Puoi gestire il tuo abbonamento e disattivare il rinnovo automatico nelle impostazioni del tuo account Apple ID.<br>
La cancellazione dell'abbonamento è possibile solo fino alla fine del periodo attualmente pagato.</p>

<p class="mb-4"><strong>4. Rimborsi:</strong><br>
I pagamenti per l'abbonamento non sono rimborsabili, salvo nei casi previsti dalla legge.</p>

<p class="mb-4"><strong>5. Modifiche ai termini:</strong><br>
Ci riserviamo il diritto di modificare questi termini di utilizzo. Sarai informato di tutte le modifiche tramite l'applicazione.</p>

<p class="mb-4"><strong>6. Informazioni di contatto:</strong><br>
Se hai domande, ti preghiamo di contattarci tramite la sezione di supporto dell'applicazione.</p>

<p>Utilizzando la nostra applicazione, accetti questi termini. Grazie per aver scelto il nostro servizio!</p>
    `,
  },
  pt: {
    code: "PT",
    flag: "🇵🇹",
    name: "Português",
    appDescription:
      "Exercícios de respiração consciente para paz interior e clareza mental",
    privacyButtonLabel: "Política de Privacidade",
    privacyTitle: "Política de Privacidade",
    termsButtonLabel: "Termos de Uso",
    termsTitle: "Termos de Uso",
    downloadButtonLabel: "Baixar da App Store",
    footerCopyright: "© 2024 BreatheBook. Todos os direitos reservados.",
    privacyContent: `
      <p class="mb-4">A sua confiança é importante para nós, e esforçamo-nos para garantir a sua privacidade. A nossa aplicação funciona completamente de forma local no seu dispositivo e não recolhe, armazena ou transmite quaisquer dados do utilizador para servidores ou terceiros.</p>
      <p class="mb-4">Não utilizamos serviços de terceiros para análise ou rastreamento da sua atividade. Todos os dados que introduza ou crie na aplicação permanecem exclusivamente no seu dispositivo.</p>
      <p class="mb-4">Se tiver questões ou sugestões, por favor contacte-nos.</p>
      <p>Obrigado por usar a nossa aplicação!</p>
    `,
    termsContent: `
      <p class="mb-4">Bem-vindo ao nosso aplicativo! Por favor, leia atentamente os termos de uso antes de começar.</p>

<p class="mb-4"><strong>1. Período de teste gratuito:</strong><br>
Oferecemos um período de teste gratuito de 7 dias. Durante esse tempo, você pode usar todas as funcionalidades do aplicativo sem quaisquer restrições.</p>

<p class="mb-4"><strong>2. Assinatura automática:</strong><br>
Após o término do período de teste gratuito, sua assinatura será automaticamente renovada por um ano com um custo de 69,99$.<br>
O pagamento será debitado da sua conta Apple ID após a confirmação da compra.</p>

<p class="mb-4"><strong>3. Gerenciamento de assinatura:</strong><br>
Você pode gerenciar sua assinatura e desativar a renovação automática nas configurações da sua conta Apple ID.<br>
O cancelamento da assinatura só é possível até o final do período pago atual.</p>

<p class="mb-4"><strong>4. Reembolsos:</strong><br>
Pagamentos de assinatura não são reembolsáveis, exceto nos casos previstos por lei.</p>

<p class="mb-4"><strong>5. Alterações nos termos:</strong><br>
Reservamo-nos o direito de alterar estes termos de uso. Você será notificado sobre quaisquer alterações através do aplicativo.</p>

<p class="mb-4"><strong>6. Informações de contato:</strong><br>
Se você tiver dúvidas, entre em contato conosco através da seção de suporte no aplicativo.</p>

<p>Ao usar nosso aplicativo, você concorda com estes termos. Obrigado por escolher nosso serviço!</p>
    `,
  },
  pl: {
    code: "PL",
    flag: "🇵🇱",
    name: "Polski",
    appDescription:
      "Świadome ćwiczenia oddechowe dla wewnętrznego spokoju i jasności umysłu",
    privacyButtonLabel: "Polityka Prywatności",
    privacyTitle: "Polityka Prywatności",
    termsButtonLabel: "Warunki Użytkowania",
    termsTitle: "Warunki Użytkowania",
    downloadButtonLabel: "Pobierz z App Store",
    footerCopyright: "© 2024 BreatheBook. Wszelkie prawa zastrzeżone.",
    privacyContent: `
      <p class="mb-4">Wasze zaufanie jest dla nas ważne i staramy się zapewnić Waszą prywatność. Nasza aplikacja działa całkowicie lokalnie na Waszym urządzeniu i nie zbiera, nie przechowuje ani nie przesyła żadnych danych użytkownika na serwery lub do stron trzecich.</p>
      <p class="mb-4">Nie używamy usług stron trzecich do analizy lub śledzenia Waszej aktywności. Wszystkie dane, które wprowadzacie lub tworzycie w aplikacji, pozostają wyłącznie na Waszym urządzeniu.</p>
      <p class="mb-4">Jeśli macie jakieś pytania lub sugestie, prosimy o kontakt z nami.</p>
      <p>Dziękujemy za korzystanie z naszej aplikacji!</p>
    `,
    termsContent: `
      <p class="mb-4">Witamy w naszej aplikacji! Prosimy o dokładne zapoznanie się z warunkami użytkowania przed rozpoczęciem korzystania.</p>

<p class="mb-4"><strong>1. Bezpłatny okres próbny:</strong><br>
Oferujemy bezpłatny okres próbny trwający 7 dni. W tym czasie możesz korzystać ze wszystkich funkcji aplikacji bez żadnych ograniczeń.</p>

<p class="mb-4"><strong>2. Automatyczna subskrypcja:</strong><br>
Po zakończeniu bezpłatnego okresu próbnego Twoja subskrypcja zostanie automatycznie przedłużona na rok z opłatą w wysokości 39.99$.<br>
Opłata zostanie pobrana z Twojego konta Apple ID po potwierdzeniu zakupu.</p>

<p class="mb-4"><strong>3. Zarządzanie subskrypcją:</strong><br>
Możesz zarządzać subskrypcją i wyłączyć automatyczne przedłużanie w ustawieniach swojego konta Apple ID.<br>
Anulowanie subskrypcji jest możliwe tylko przed zakończeniem bieżącego opłaconego okresu.</p>

<p class="mb-4"><strong>4. Zwroty:</strong><br>
Opłaty za subskrypcję nie podlegają zwrotowi, z wyjątkiem przypadków przewidzianych przez prawo.</p>

<p class="mb-4"><strong>5. Zmiany warunków:</strong><br>
Zastrzegamy sobie prawo do zmiany niniejszych warunków użytkowania. O wszelkich zmianach zostaniesz poinformowany za pośrednictwem aplikacji.</p>

<p class="mb-4"><strong>6. Informacje kontaktowe:</strong><br>
Jeśli masz pytania, skontaktuj się z nami za pomocą sekcji wsparcia w aplikacji.</p>

<p>Korzystając z naszej aplikacji, akceptujesz niniejsze warunki. Dziękujemy za wybór naszego serwisu!</p>
    `,
  },
  sv: {
    code: "SV",
    flag: "🇸🇪",
    name: "Svenska",
    appDescription: "Medveten andning för inre frid och mental klarhet",
    privacyButtonLabel: "Integritetspolicy",
    privacyTitle: "Integritetspolicy",
    termsButtonLabel: "Användarvillkor",
    termsTitle: "Användarvillkor",
    downloadButtonLabel: "Ladda ner från App Store",
    footerCopyright: "© 2024 BreatheBook. Alla rättigheter förbehållna.",
    privacyContent: `
      <p class="mb-4">Er tillit är viktig för oss och vi strävar efter att säkerställa er integritet. Vår app fungerar helt lokalt på er enhet och samlar inte in, lagrar eller överför någon användardata till servrar eller tredje parter.</p>
      <p class="mb-4">Vi använder inte tredjepartstjänster för analys eller spårning av er aktivitet. All data som ni anger eller skapar i appen förblir endast på er enhet.</p>
      <p class="mb-4">Om ni har frågor eller förslag, vänligen kontakta oss.</p>
      <p>Tack för att ni använder vår app!</p>
    `,
    termsContent: `
      <p class="mb-4">Välkommen till vår app! Vänligen läs igenom användarvillkoren noggrant innan du börjar använda appen.</p>

<p class="mb-4"><strong>1. Gratis provperiod:</strong><br>
Vi erbjuder en gratis provperiod på 7 dagar. Under denna tid kan du använda alla funktioner i appen utan några begränsningar.</p>

<p class="mb-4"><strong>2. Automatisk prenumeration:</strong><br>
Efter den kostnadsfria provperioden förnyas din prenumeration automatiskt för ett år med en avgift på 69,99$.<br>
Betalningen dras från ditt Apple ID-konto efter att köpet har bekräftats.</p>

<p class="mb-4"><strong>3. Hantering av prenumeration:</strong><br>
Du kan hantera din prenumeration och stänga av automatisk förnyelse i inställningarna för ditt Apple ID-konto.<br>
Avbokning av prenumerationen är endast möjlig innan den aktuella betalda perioden är slut.</p>

<p class="mb-4"><strong>4. Återbetalningar:</strong><br>
Prenumerationsbetalningar återbetalas inte, förutom i de fall som föreskrivs enligt lag.</p>

<p class="mb-4"><strong>5. Ändringar av villkor:</strong><br>
Vi förbehåller oss rätten att ändra dessa användarvillkor. Du kommer att informeras om alla ändringar via appen.</p>

<p class="mb-4"><strong>6. Kontaktinformation:</strong><br>
Om du har några frågor, vänligen kontakta oss via supportavsnittet i appen.</p>

<p>Genom att använda vår app godkänner du dessa villkor. Tack för att du väljer vår tjänst!</p>
    `,
  },
  th: {
    code: "TH",
    flag: "🇹🇭",
    name: "ไทย",
    appDescription:
      "การออกกำลังกายการหายใจอย่างมีสติเพื่อความสงบภายในและความใสในจิตใจ",
    privacyButtonLabel: "นโยบายความเป็นส่วนตัว",
    privacyTitle: "นโยบายความเป็นส่วนตัว",
    termsButtonLabel: "เงื่อนไg��การใช้งาน",
    termsTitle: "เงื่อนไขการใช้งาน",
    downloadButtonLabel: "ดาวน์โหลดจาก App Store",
    footerCopyright: "© 2024 BreatheBook. สงวนลิขสิทธิ์.",
    privacyContent: `
      <p class="mb-4">ความไว้วางใจของคุณสำคัญสำหรับเรา และเรามุ่งมั่นที่จะรักษาความเป็นส่วนตัวของคุณ แอปพลิเคชันของc��ราทำงานแบบโลคอลบนอุปกรณ์ของคุณโดยสมบูรณ์ และไม่รวบรวม ไม่จัดเก็บ และไม่ส่งข้อมูลผู้ใช้ไปยังเซิร์ฟเวอร์หรือบุคc��ลk��ี่สาม</p>
      <p class="mb-4">เราไม่ใช้บริการของบุคคลที่สามในการวิเคราะห์หรือติดตามกิจกรรมของคุณ ข้อมูลทั้งหมดที่คุณป้อนหรือสร้างในแอปพลิเคชันจะยังคงอยู่บนอุปกรณ์ของคุณเท่านั้น</p>
      <p class="mb-4">หากคุณมีคำถามหรือข้อเสนอแนะ โปรดติดต่อเรา</p>
      <p>ขอบคุณที่ใช้แอปพลิเคชันของเรา!</p>
    `,
    termsContent: `
      <p class="mb-4">ยินดีต้อนรับสู่แอปพลิเคชันของเรา! กรุณาอ่านข้อกำหนดการใช้งานอย่างละเอียดก่อนเริ่มใช้งาน</p>

<p class="mb-4"><strong>1. ระยะเวลาทดลองใช้งานฟรี:</strong><br>
เราให้บริการทดลองใช้งานฟรีเป็นเวลา 7 วัน ในช่วงเวลานี้คุณสามารถใช้ฟังก์ชันทั้งหมดของแอปพลิเคชันได้โดยไม่มีข้อจำกัดใด ๆ</p>

<p class="mb-4"><strong>2. การสมัครสมาชิกอัตโนมัติ:</strong><br>
หลังจากสิ้นสุดระยะเวลาทดลองใช้งานฟรี การสมัครสมาชิกของคุณจะถูกต่ออายุโดยอัตโนมัติเป็นเวลา 1 ปี โดยมีค่าใช้จ่าย 39.99$<br>
การชำระเงินจะถูกหักจากบัญชี Apple ID ของคุณหลังจากยืนยันการซื้อ</p>

<p class="mb-4"><strong>3. การจัดการการสมัครสมาชิก:</strong><br>
คุณสามารถจัดการการสมัครสมาชิกและปิดการต่ออายุอัตโนมัติได้ในการตั้งค่าบัญชี Apple ID ของคุณ<br>
การยกเลิกการสมัครสมาชิกสามารถทำได้เฉพาะก่อนสิ้นสุดระยะเวลาที่ชำระเงินแล้วในปัจจุบัน</p>

<p class="mb-4"><strong>4. การคืนเงิน:</strong><br>
การชำระเงินสำหรับการสมัครสมาชิกจะไม่สามารถคืนเงินได้ ยกเว้นในกรณีที่กฎหมายกำหนดไว้</p>

<p class="mb-4"><strong>5. การเปลี่ยนแปลงข้อกำหนด:</strong><br>
เราขอสงวนสิทธิ์ในการเปลี่ยนแปลงข้อกำหนดการใช้งานนี้ คุณจะได้รับการแจ้งเตือนเกี่ยวกับการเปลี่ยนแปลงผ่านแอปพลิเคชัน</p>

<p class="mb-4"><strong>6. ข้อมูลติดต่อ:</strong><br>
หากคุณมีคำถาม กรุณาติดต่อเราผ่านส่วนสนับสนุนในแอปพลิเคชัน</p>

<p>การใช้แอปพลิเคชันของเราแสดงว่าคุณยอมรับข้อกำหนดเหล่านี้ ขอบคุณที่เลือกใช้บริการของเรา!</p>
    `,
  },
  tr: {
    code: "TR",
    flag: "🇹🇷",
    name: "Türkçe",
    appDescription:
      "İç huzur ve zihinsel berraklık için bilinçli nefes egzersizleri",
    privacyButtonLabel: "Gizlilik Politikası",
    privacyTitle: "Gizlilik Politikası",
    termsButtonLabel: "Kullanım Şartları",
    termsTitle: "Kullanım Şartları",
    downloadButtonLabel: "App Store'dan İndir",
    footerCopyright: "© 2024 BreatheBook. Tüm hakları saklıdır.",
    privacyContent: `
      <p class="mb-4">Güveniniz bizim için önemlidir ve gizliliğinizi sağlamayı taahhüt ediyoruz. Uygulamamız tamamen cihazınızda yerel olarak çalışır ve kullanıcı verilerini sunuculara veya üçüncü taraflara toplamaz, saklamaz veya iletmez.</p>
      <p class="mb-4">Aktivitenizi analiz etmek veya izlemek için üçüncü taraf hizmetleri kullanmıyoruz. Uygulamada girdiğiniz veya oluşturduğunuz tüm veriler yalnızca cihazınızda kalır.</p>
      <p class="mb-4">Sorularınız veya önerileriniz varsa lütfen bizimle iletişime geçin.</p>
      <p>Uygulamamızı kullandığınız için teşekkür ederiz!</p>
    `,
    termsContent: `
      <p class="mb-4">Uygulamamıza hoş geldiniz! Lütfen kullanmaya başlamadan önce kullanım şartlarını dikkatlice okuyun.</p>

<p class="mb-4"><strong>1. Ücretsiz Deneme Süresi:</strong><br>
7 gün süreyle ücretsiz deneme süresi sunuyoruz. Bu süre boyunca uygulamanın tüm özelliklerini herhangi bir kısıtlama olmaksızın kullanabilirsiniz.</p>

<p class="mb-4"><strong>2. Otomatik Abonelik:</strong><br>
Ücretsiz deneme süresi sona erdikten sonra aboneliğiniz otomatik olarak yıllık olarak yenilenecek ve 39.99$ ücret alınacaktır.<br>
Ödeme, satın alma işlemini onayladıktan sonra Apple ID hesabınızdan tahsil edilecektir.</p>

<p class="mb-4"><strong>3. Abonelik Yönetimi:</strong><br>
Aboneliğinizi yönetebilir ve otomatik yenilemeyi Apple ID hesabınızın ayarlarından devre dışı bırakabilirsiniz.<br>
Abonelik iptali yalnızca mevcut ödenmiş dönemin sonuna kadar mümkündür.</p>

<p class="mb-4"><strong>4. İadeler:</strong><br>
Abonelik ödemeleri, yasaların öngördüğü durumlar dışında iade edilmez.</p>

<p class="mb-4"><strong>5. Şartlarda Değişiklikler:</strong><br>
Bu kullanım şartlarını değiştirme hakkını saklı tutarız. Tüm değişiklikler uygulama üzerinden size bildirilecektir.</p>

<p class="mb-4"><strong>6. İletişim Bilgileri:</strong><br>
Sorularınız varsa, lütfen uygulamadaki destek bölümünden bizimle iletişime geçin.</p>

<p>Uygulamamızı kullanarak bu şartları kabul etmiş olursunuz. Hizmetimizi seçtiğiniz için teşekkür ederiz!</p>
    `,
  },
  vi: {
    code: "VI",
    flag: "🇻🇳",
    name: "Tiếng Việt",
    appDescription:
      "Bài tập thở có ý thức cho sự bình an nội tâm và sự minh mẫn tinh thần",
    privacyButtonLabel: "Chính sách bảo mật",
    privacyTitle: "Chính sách bảo mật",
    termsButtonLabel: "Điều khoản sử dụng",
    termsTitle: "Điều khoản sử dụng",
    downloadButtonLabel: "Tải từ App Store",
    footerCopyright: "© 2024 BreatheBook. Bảo lưu mọi quyền.",
    privacyContent: `
      <p class="mb-4">Sự tin tưởng của bạn rất quan trọng đối với chúng tôi, và chúng tôi cố gắng đảm bảo quyền riêng tư của bạn. Ứng dụng của chúng tôi hoạt động hoàn toàn cục bộ trên thiết bị của bạn và không thu thập, lưu trữ hoặc truyền bất kỳ dữ liệu người dùng nào đến máy chủ hoặc bên thứ ba.</p>
      <p class="mb-4">Chúng tôi không sử dụng các dịch vụ bên thứ ba để phân tích hoặc theo dõi hoạt động của bạn. Tất cả dữ liệu mà bạn nhập hoặc tạo trong ứng dụng đều chỉ được lưu trữ trên thiết bị của bạn.</p>
      <p class="mb-4">Nếu bạn có bất kỳ câu hỏi hoặc đề xuất nào, vui lòng liên hệ với chúng tôi.</p>
      <p>Cảm ơn bạn đã sử dụng ứng dụng của chúng tôi!</p>
    `,
    termsContent: `
      <p class="mb-4">Chào mừng bạn đến với ứng dụng của chúng tôi! Vui lòng đọc kỹ các điều khoản sử dụng trước khi bắt đầu.</p>

<p class="mb-4"><strong>1. Thời gian dùng thử miễn phí:</strong><br>
Chúng tôi cung cấp thời gian dùng thử miễn phí kéo dài 7 ngày. Trong thời gian này, bạn có thể sử dụng tất cả các tính năng của ứng dụng mà không có bất kỳ hạn chế nào.</p>

<p class="mb-4"><strong>2. Đăng ký tự động:</strong><br>
Sau khi kết thúc thời gian dùng thử miễn phí, đăng ký của bạn sẽ tự động gia hạn hàng năm với mức phí 39.99$.<br>
Thanh toán sẽ được trừ từ tài khoản Apple ID của bạn sau khi xác nhận mua hàng.</p>

<p class="mb-4"><strong>3. Quản lý đăng ký:</strong><br>
Bạn có thể quản lý đăng ký và tắt tự động gia hạn trong cài đặt tài khoản Apple ID của mình.<br>
Việc hủy đăng ký chỉ có thể thực hiện trước khi kết thúc giai đoạn đã thanh toán hiện tại.</p>

<p class="mb-4"><strong>4. Hoàn tiền:</strong><br>
Các khoản thanh toán cho đăng ký không được hoàn lại, ngoại trừ các trường hợp được quy định bởi pháp luật.</p>

<p class="mb-4"><strong>5. Thay đổi điều khoản:</strong><br>
Chúng tôi có quyền thay đổi các điều khoản sử dụng này. Bạn sẽ được thông báo về mọi thay đổi thông qua ứng dụng.</p>

<p class="mb-4"><strong>6. Thông tin liên hệ:</strong><br>
Nếu bạn có bất kỳ câu hỏi nào, vui lòng liên hệ với chúng tôi thông qua phần hỗ trợ trong ứng dụng.</p>

<p>Bằng cách sử dụng ứng dụng của chúng tôi, bạn đồng ý với các điều khoản này. Cảm ơn bạn đã chọn dịch vụ của chúng tôi!</p>
    `,
  },
  id: {
    code: "ID",
    flag: "🇮🇩",
    name: "Bahasa Indonesia",
    appDescription:
      "Latihan pernapasan sadar untuk kedamaian batin dan kejernihan mental",
    privacyButtonLabel: "Kebijakan Privasi",
    privacyTitle: "Kebijakan Privasi",
    termsButtonLabel: "Syarat Penggunaan",
    termsTitle: "Syarat Penggunaan",
    downloadButtonLabel: "Unduh dari App Store",
    footerCopyright: "© 2024 BreatheBook. Semua hak dilindungi.",
    privacyContent: `
      <p class="mb-4">Kepercayaan Anda penting bagi kami, dan kami berusaha memastikan privasi Anda. Aplikasi kami beroperasi sepenuhnya secara lokal di perangkat Anda dan tidak mengumpulkan, menyimpan, atau mengirimkan data pengguna apa pun ke server atau pihak ketiga.</p>
      <p class="mb-4">Kami tidak menggunakan layanan pihak ketiga untuk analitik atau melacak aktivitas Anda. Semua data yang Anda masukkan atau buat dalam aplikasi tetap eksklusif di perangkat Anda.</p>
      <p class="mb-4">Jika Anda memiliki pertanyaan atau saran, silakan hubungi kami.</p>
      <p>Terima kasih telah menggunakan aplikasi kami!</p>
    `,
    termsContent: `
      <p class="mb-4">Selamat datang di aplikasi kami! Harap baca syarat penggunaan dengan cermat sebelum mulai menggunakan.</p>

<p class="mb-4"><strong>1. Periode uji coba gratis:</strong><br>
Kami menyediakan periode uji coba gratis selama 7 hari. Selama waktu ini, Anda dapat menggunakan semua fitur aplikasi tanpa batasan apa pun.</p>

<p class="mb-4"><strong>2. Langganan otomatis:</strong><br>
Setelah periode uji coba gratis berakhir, langganan Anda akan otomatis diperpanjang selama satu tahun dengan biaya sebesar $39.99.<br>
Pembayaran akan dikenakan dari akun Apple ID Anda setelah konfirmasi pembelian.</p>

<p class="mb-4"><strong>3. Pengelolaan langganan:</strong><br>
Anda dapat mengelola langganan dan menonaktifkan perpanjangan otomatis di pengaturan akun Apple ID Anda.<br>
Pembatalan langganan hanya dapat dilakukan sebelum periode berbayar saat ini berakhir.</p>

<p class="mb-4"><strong>4. Pengembalian dana:</strong><br>
Pembayaran langganan tidak dapat dikembalikan, kecuali dalam kasus yang diatur oleh hukum.</p>

<p class="mb-4"><strong>5. Perubahan syarat:</strong><br>
Kami berhak untuk mengubah syrat penggunaan ini. Anda akan diberitahu tentang perubahan melalui aplikasi.</p>

<p class="mb-4"><strong>6. Informasi kontak:</strong><br>
Jika Anda memiliki pertanyaan, silakan hubungi kami melalui bagian dukungan di aplikasi.</p>

<p>Dengan menggunakan aplikasi kami, Anda menyetujui syarat ini. Terima kasih telah memilih layanan kami!</p>
    `,
  },
};

export const supportedLanguages = Object.keys(languages);
