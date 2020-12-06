export default {
  //Global Containers
  _default: {
    locale: "ru",
    name: "Русский (Russian)"
  },
  App: {
    toastContent: "Вход выполнен успешно",
    toastTitle: "Аутентификация"
  },
  Sidebar: {
    title: "Vidulum",
    hub: "V-Центр",
    rewards: "История наград",
    masternode: "Мониторинг мастернод",
    network: "сеть",
    mining: "VDL майнинг",
    wallet: "Бумажник",
    network: "сеть",
    earn: "делать",
    settings: "Настройки"
  },
  Header: {
    themeButton: "Темы",
    logout: "Выйти",
    hub: "V-Центр",
    rewards: "История наград",
    masternode: "Мастернод Монитор",
    wallet: "Бумажник",
    earn: "делать",
    settings: "Настройки",
    headerToastTitle: "Информация о последней транзакции"
  },
  Login: {
    loginToastTitle: "Попытка входа",
    login: "Войти ",
    authorizePKey: "Войти используя приватный ключ",
    appLogin: "Вход в приложение Vidulum.App",
    username: "Имя пользователя",
    password: "Пароль",
    pin: "Числовой пин-код",
    twofa: "2FA (если включено)",
    authorize: "Войти",
    cancel: "Отмена",
    private: "Приватный ключ",
    address: "Адрес:",
    loading: "Загрузка...",
    nospacesToast: "В имени пользователя не должно быть пробелов",
    failed: "Ошибка входа",
    usernameError: "Ошибка в имени пользователя"
  },
  Register: {
    defaultToastTitle: "Регистрация пользователя",
    regEmailInvalidToast: "Email недействителен",
    regEmailInvalidTitle: "Поле электронной почты",
    regPasswordToastTitle: "Поле ввода пароля",
    regVerifyPassToastTitle: "Поле подтверждения пароля",
    regPinCodeFailedTitle: "Поле с пин-кодом",
    regPinLongToast: "Пин-код должен быть длинным и уникальным",
    regPinCodeNumOnly: "Пин-код допускает использование только цифр",
    regVerifyPassToast: "Требуется длинный и сложный пароль",
    regUseUpperToast: "Должны присутствовать заглавные буквы",
    regUseLowerToast: "Должны присутствовать строчные буквы",
    regUseSymbolsToast: "Добавте символы",
    regUseNumToast: "Должны присутствовать цифры",
    regSuccessToast: "Теперь вы можете войти в Vidulum",
    regFailedToast: "Возникла проблема: support@vidulum.app",
    usernamePopover: "Только буквы и цифры; 6-15 персонажей",
    passwordPopover:
      "Используйте цифры, буквы, символы; Чем длинее ваш пароль, тем труднее его взломать. Мы НЕ храним пароли и не можем восстановить его в случае утери.",
    verifyPasswordPopover: "Введите пароль еще раз",
    pinPopover:
      "Только числа; Чем длиннее ваш пин-код, тем больше времени требуется для взлома. Мы НЕ храним пин-коды и не можем их восстановить.",
    emailPopover: "Введите действующий адрес электронной почты и подтвердите его после входа через меню настроек",
    registerbtn: "У вас нет аккаунта? Зарегистрируйтесь",
    checkUsernameToastTitle: "Поле имени пользователя",
    checkUsernameToast1: "Уже используется или содержит недопустимый символ",
    checkUsernameToast2: " доступен",
    create: "Регистрация",
    noticePart1: "При создании учетной записи, пожалуйста, убедитесь, что вы сделали копию вашего",
    noticePart2: "имени пользователя, пароля и пин-кода",
    noticePart3:
      "сохраните данные для входа в надежном месте. Команда Vidulum не сможет восстановить вашу учетную запись, если вы потеряете или забудете свои учетные данные.",
    loading: "Загрузка...",
    username: "имя пользователя - Vidulum id",
    password: "пароль",
    verifyPassword: "подтвердите пароль",
    pin: "Пин-код",
    verifyPin: "подтвердите пин-код",
    email: "адрес электронной почты (необязательно)",
    termsPart1: "Я прочитал и согласен с",
    termsPart2: "Условиями использования",
    alreadyAccount: "Уже есть аккаунт? (отменить регистрацию)",
    preVerify: "Проверить",
    prePin: "Пин-код",
    preEmail: "Email",
    preID: "Vidulum ID",
    prePassword: "Пароль"
  },
  Send: {
    sendToastTitle: "Статус транзакции",
    send: "Отправить",
    tip: "Помощь команде VDL",
    address: "Адрес",
    amount: "Количество",
    fee: "Комиссия сети",
    add: "Добавить получателя",
    tipAmount: "Tip (~25 cents)",
    gas: "Цена за газ",
    edit: "Редактировать комиссию",
    editTX: "Изменить транзакцию",
    tipUs: "Поблагодарить команду VDL (спасибо)",
    total: "Общая сумма транзакции",
    auth: "Подтвердить транзакцию",
    editTransaction: "Изменить транзакцию",
    login: "Войдите, чтобы отправить",
    authToast: "Необходима войти",
    failedToast: "Сбой отправки транзакции",
    queuedToast: "Добавлено в очередь транзакций",
    txErrorToast: "Ошибка транзакции",
    checkAddToast: "Ошибка, пожалуйста, вернитесь и проверьте адрес.",
    manyInputsToast: "Слишком много мелких входящих транзакций, попробуйте:",
    notEnoughToast: "Недостаточно подтверждений у входящих транзакций для выполнения операции.",
    sendMoreToast: "Попробуйте отправить больше монет на свой кошелек.",
    maxRecipToast: "Привышено максимально возможное количество получателей.",
    sendErrToast: "Ошибка отправки данного количества монет.",
    receiveErrToast: "Ошибка в адресе получателя",
    addCoinsToast: "Добавьте больше монет в свой кошелек и попробуйте снова",
    addReceiverToast: "Укажите получателя",
    tryAgainToast: "Цена недоступна - попробуйте позже"
  },
  Footer: {
    copyright: "2020 Авторские права защищены",
    vidulumApp: "Vidulum App"
  },
  //View Containers
  //Dashboard
  NetworkStats: {
    network: "Vidulum сеть",
    connections: "Соединения: (!!! need to check in place)",
    height: "Текущий блок:",
    difficulty: "Сложность:",
    version: "Версия протокола:"
  },
  PortfolioOverview: {
    balance: "Итоговый баланс",
    graph: "График",
    other: "Показать небольшие кошельки"
  },
  RecentTransactions: {
    recent: "Последние транзакции",
    date: "Дата",
    noRecent: "Нет новых транзакций",
    symbol: "символ"
  },
  VStatistics: {
    vstats: "V-Статистика",
    users: "Всего пользователей",
    twitter: "Подписчики в Твиттере",
    discord: "Участники Discord"
  },
  WalletsList: {
    wallet: "Кошельки",
    fav: "Сначала Избранные",
    search: "Поиск",
    clear: "очистить",
    disconnected: "отключено",
    value: "стоимость",
    price: "цена монеты",
    change: "изменить",
    hr: "24 часа",
    online: "Онлайн",
    explorer: "Эксплорер",
    offline: "Оффлайн",
    enabled: "Включено",
    vstaking: "V-staking",
    send: "Отправить",
    receive: "Получить",
    loginToView: "Войти для просмотра адреса кошелька.",
    copy: "Копировать адрес в буфер обмена",
    fieldAsset: "Монета",
    fieldActions: "Быстрые действия",
    fieldValue: "Стоимость",
    fieldPrice: "Цена",
    fieldFavorite: "Избранное",
    copiedToastTitle: "Скопировано в буфер обмена",
    addressToastContent: "Адрес"
  },
  //Masternode Monitor
  MonitoredMNs: {
    masternodeToastTitle: "Мониторинг мастернод",
    monitored: "Мониторинг мастернод",
    vidulum: "Vidulum",
    soon: "Скоро",
    start: "Начать мониторинг",
    details: "Детали",
    address: "Адрес:",
    ip: "IP:",
    paid: "Последняя выплата",
    version: "Версия протокола",
    id: "TXiD",
    output: "Output ID",
    hide: "Скрыть подробности",
    stop: "Остановить мониторинг",
    mnWallet: "Адрес кошелька мастерноды",
    mnLabel: "Название мастерноды",
    fieldMasternode: "Мастернода",
    fieldActive: "Активное время",
    fieldLast: "Последнее посещение",
    fieldDetails: "Показать подробности",
    fieldStatus: "Статус"
  },
  //Rewards
  RewardHistory: {
    reward: "История вознаграждений",
    fieldAsset: "Монета",
    fieldPay: "Дата выплаты",
    fieldStaked: "Доля",
    fieldEarned: "Заработок",
    fieldRank: "Рейтинг",
    fieldStatus: "Статус",
    fieldDetails: "Показать подробности"
  },
  StakingWallets: {
    Staking: "V-Staking кошельки",
    fieldAsset: "Монета",
    fieldBalance: "Баланс"
  },
  StakingDescription: {
    what: "Что такое V-Staking?",
    description:
      "Необходимо держать в своем Vidulum App кошельке 100 единиц монеты, которая поддерживает V-Staking для получения ежедневных наград",
    more: "Подробности"
  },
  //Settings
  AuthenticatorWidget: {
    authToastTitle: "Настройки безопасности",
    security: "Настройки безопасности",
    authentication: "Двухфакторная аутентификация",
    notEnabled2faText:
      "Сделайте свою учетную запись Vidulum App более безопасной включив двухфакторную аутентификацию. Загрузите приложение для проверки подлинности на мобильное устройство или планшет,",
    authy: "Authy",
    google: "Google Authenticator",
    keyNotice: "Безопасное резервное копирование секретного ключа",
    enterCode: "Введите 6-значный код подтверждения созданный приложением для проверки подлинности.",
    disable: "Введите код 2FA, чтобы отключить эту функцию безопасности.",
    disable2fa: "Отключить 2FA",
    activ2fa: "Активировать 2FA",
    enable2fa: "Включить 2FA",
    auth2faHolder: "123 456",
    loading: "Загрузка...",
    enterCodeToast: "Введите код 2FA сейчас",
    disabledToast: "2FA теперь отключен",
    failedDisableToast: "Не удалось отключить 2FA",
    enabledToast: "2FA теперь включено",
    enableFailToast: "Не удалось включить 2FA",
    failedSetToast: "Не удалось установить 2FA"
  },
  SettingsContactInfo: {
    contact: "Связь с нами",
    bug: "Сообщить о проблеме",
    bugPart1: "Чтобы сообщить об ошибке, свяжитесь с нами по следующему адресу электронной почты:",
    bugPart2: "Пожалуйста, включите подробное описание и, если возможно, шаги, чтобы воссоздать проблему.",
    more: "Подробнее",
    faq: "FAQ",
    history: "История обновлений",
    about: "О Vidulum",
    aboutPart1:
      "Vidulum - это цифровой кошелек активов, который поддерживает множество криптовалют и доступен через Интернет через любой современный веб-браузер. Сосредоточив внимание на простоте использования и функциональности, команда Vidulum стремится к расширению использования криптовалют в повседневной жизни, одновременно снижая входные барьеры. Приложение Vidulum разработано таким образом, что может начислять ежедневную награду за хранение некоторых криптовалют через встроенную систему V-Staking. VDL - это собственная криптовалюта, которую пользователи будут получать через систему V-Staking. VDL - криптовалюта Proof of Work (доказательство проделанной работы), поддерживает мастерноды.",
    aboutPart2:
      "Не смотря на то что Vidulum App является онлайн кошельком со множеством криптовалют, пользователи полностью контролируют свои приватные ключи в то время как команда Vidulum не имеет доступ к учетным данным пользователей. Это означает, что только вы можете получить доступ к своей учетной записи и своим криптоактивам, поэтому крайне важно, чтобы вы не потеряли учетные данные используемые для входа и создали резервную копию приватных ключей, надежно их сохранив. Также рекомендуется обеспечить защиту своей учетной записи надежным паролем, уникальным именем пользователя и сложным пин-кодом. Помимо этого, рекомендуется, чтобы вы как пользователей включали двухфакторную аутентификацию.",
    exchange: "Биржи",
    getVDL: "Получить VDL в Stex или Crex24"
  },
  UserInfo: {
    userToastTitle: "Информация о пользователе",
    user: "Информация о пользователе",
    userDescription: "Введите свой email и будьте в курсе последний новостей Vidulum App.",
    resend: "Отправить",
    yourKeys: "Ваши Ключи - ваш Криптовалюта",
    yourKeysDescription:
      "Экспортируйте приватные ключи для ваших кошельков Vidulum App в файл CSV. Мы рекомендуем хранить ваши закрытые ключи в надежном месте.",
    export: "Экспортировать все ключи в текст",
    rateLimitToast: "Вы ограничены в скорости (5 минут)",
    verifyToast: "Код подтверждения отправлен",
    IssueToast: "Проблема при смене электронной почты",
    codeConfirmToast: "Код электронной почты подтвержден",
    codeIssueToast: "Проблема с кодом электронной почты",
    verifyErrToast: "Ошибка проверки кода электронной почты"
  },
  //Wallet View
  AssetCharts: {
    chartToastTitle: "График криптоактивов",
    chartErrorToast: "Ошибка диаграммы кошелька"
  },
  AssetDetails: {
    copy: "Копировать адрес",
    load: "Импортировать",
    import: "Импорт с другого адреса",
    qrcode: "Показать адрес в виде QR-кода",
    copyAdd: "Копировать адрес в буфер обмена",
    display: "Показать приватный ключ монеты",
    details: "Детали криптовактива",
    price: "Цена",
    value: "Стоимость",
    balance: "Баланс",
    rewards: "Награды V-Staking",
    rewardsActive: "Активный",
    rewardsInactive: "Неактивно",
    rank: "Рейтинг",
    last: "Последний",
    earned: "Заработано",
    qr: "QR-код",
    output: "OUTPUT:",
    input: "Введите приватный ключ",
    start: "Начать процесс импорта",
    startImport: "Начать импорт",
    fee: "Сетевая комиссия:",
    edit: "Редактировать комиссию",
    close: "Закрыть импорт",
    cancel: "Отмена",
    importA: "Импортировать",
    now: "Сейчас",
    startImportErrTitle: "Ошибка импорта",
    startImportErr1: "Невозможно получить баланс",
    startImportErr2: "Нераспознанный тип закрытого ключа",
    startImportErr3: "Ошибка начала импорта",
    importConfirmErr: "Недостаточно подтвержденных новых транзакций для выполнения операции.",
    copiedClipboard: "Скопировано в буфер обмена",
    importToastTitle: "Ошибка импорта баланса",
    importToastContent: "Недостаточно монет для отправки",
    addressToastContent: "Адрес",
    manyToastContent: "Слишком много мелких переводов в ваш кошелек, пожалуйста, уменьшите сумму, попробуйте "
  },
  AssetScroller: {
    fav: "Избранные",
    currentToastTitle: "Текущий криптоактив",
    currentToastContent: "Показаны:"
  },
  TransactionHistory: {
    txHistory: "История транзакций | Статус:",
    connected: "подключен",
    disconnected: "отключено",
    fieldAmount: "Количество",
    fieldTX: "TXID",
    fieldDate: "Дата"
  },
    // EarnPage
  OffersContainer: {
    offerTitle: "Предложения",
    earnVDL: "Полное предложение заработать VDL.",
  },
  EarnInfoContainer: {
    earnInfoTitle: "Заработок",
  },
  // NetworkPage
  MasternodeStats: {
    mnTitle: "Vidulum Masternode Network",
    activeMN: "Активные Мастерноды",
    collateralMN: "Мастернод залог",
    lockedMN: "Монеты, запертые в мастерноде",
    monthlyMN: "Расчетные ежемесячные вознаграждения за мастер-класс"
  },
  CoinStats: {
    statsTitle: "Vidulum | VDL Информация о монетах",
    coinStats: "VDL Coin Stats",
    circulatingSupply: "Циркуляционная поставка",
    maximumSupply: "Максимальный запас",
    blockHeight: "Высота блока",
    connectionStats: "Соединения",
    networkHashrate: "Сетевой хэшрейт",
    blockRewards: "Блок вознаграждений",
  },
  //Mining
  MiningWidget: {
    downloadBtn: "Загрузить GMiner сейчас",
    nvidiaAMD: "(Nvidia | AMD)",
    immatureMining: "незрелая",
    pendingMining: "Pending",
    paidMining: "Платный",
    availableMining: "Доступные бассейны VDL",
    currentWorkers: "Текущие работники"
  },
  MiningChart: {
    connectMessage: "Подключи майнера к пулу, чтобы увидеть свою историю"
  },
  Themes: {
    themesButton: "Темы"
  }
};
