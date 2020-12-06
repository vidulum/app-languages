export default {
  //Global Containers
  _default: {
    locale: "jp",
    name: "日本語 (Japanese)"
  },
  App: {
    toastContent: "ログインしました。",
    toastTitle: "認証"
  },
  Sidebar: {
    title: "Vidulum",
    hub: "V-Hub",
    rewards: "リワード履歴",
    masternode: "マスターノードモニター",
    network:"ネットワーク",
    mining: "VDLマイニング",
    wallet: "ウォレット",
    network: "通信網",
    earn: "稼ぐ",
    settings: "設定"
  },
  Header: {
    themeButton: "テーマ",
    logout: "ログアウト",
    hub: "V-Hub",
    rewards: "リワード履歴",
    masternode: "マスターノードモニター",
    wallet: "ウォレット",
    earn: "稼ぐ",
    settings: "設定",
    headerToastTitle: "最新の取引情報"
  },
  Login: {
    loginToastTitle: "ログインアクティビティ",
    login: "ログイン ",
    authorizePKey: "秘密鍵の使用を許可する",
    appLogin: "Vidulum Appへのログイン",
    username: "ユーザー名",
    password: "パスワード",
    pin: "暗証番号",
    twofa: "2FA（有効な場合）",
    authorize: "許可する",
    cancel: "キャンセル",
    private: "秘密鍵",
    address: "アドレス:",
    loading: "読み込み中...",
    nospacesToast: "ユーザー名にスペースを使用できません",
    failed: "ログイン認証に失敗しました",
    usernameError: "ユーザー名のエラー"
  },
  Register: {
    defaultToastTitle: "ユーザー登録",
    regEmailInvalidToast: "不正なメールアドレスです",
    regEmailInvalidTitle: "メール",
    regPasswordToastTitle: "パスワード",
    regVerifyPassToastTitle: "パスワードの確認",
    regPinCodeFailedTitle: "暗証番号",
    regPinLongToast: "暗証番号は長くてユニークでなければなりません",
    regPinCodeNumOnly: "暗証番号は数字のみです",
    regVerifyPassToast: "これを長く複雑にするが、長くすることをお勧めします",
    regUseUpperToast: "大文字も使用してください",
    regUseLowerToast: "小文字も使用してください",
    regUseSymbolsToast: "記号も使用してください",
    regUseNumToast: "数字も使用してください",
    regSuccessToast: "Vidulumにログインできるようになりました",
    regFailedToast: "問題が発生しました。「support@vidulum.app」にお問い合わせてください",
    usernamePopover: "6〜15文字の英数字のみ",
    passwordPopover:
      "数字,文字,記号を使用してください。パスワードが長いほど,解読に時間がかかります。このパスワードは保存されず,回復する方法はありません。",
    verifyPasswordPopover: "パスワードをもう一度入力してください",
    pinPopover:
      "数字のみ。暗証番号が長いほど,クラックにかかる時間が長くなります。このピンは保存せず,回復する方法もありません。",
    emailPopover: "メールアドレスを入力し、ログイン後に[設定]メニューで確認してください",
    registerbtn: "アカウントを登録します",
    checkUsernameToastTitle: "Vidulum ID",
    checkUsernameToast1: "存在されているか不正な文字が入力されています",
    checkUsernameToast2: "利用可能です",
    create: "アカウントの作成",
    noticePart1:
      "アカウントの作成する際に、入力したユーザー名、パスワードと暗証番号をセキュアなところに記事するの忘れないでください。",
    noticePart2: "ログイン資格情報を紛失または忘れた場合、Vidulumチームはアカウントを復旧できません。",
    noticePart3: "",
    loading: "読み込み中...",
    ユーザー名: "ユーザー名　-　Vidulum ID",
    パスワード: "パスワード",
    verifyPassword: "パスワードの確認",
    pin: "暗証番号",
    verifyPin: "暗証番号の確認",
    email: "メールアドレス（任意）",
    termsPart1: "利用規約に同意します",
    termsPart2: "利用規約",
    alreadyAccount: "アカウントをお持ちですか？（ログインへ）",
    preVerify: "検証",
    prePin: "暗証番号",
    preEmail: "メール",
    preID: "Vidulum ID",
    prePassword: "パスワード"
  },
  Send: {
    sendToastTitle: "トランザクションステータス",
    send: "送信",
    tip: "チームへのチップ",
    address: "アドレス",
    amount: "数量",
    fee: "ネットワーク料金",
    add: "受信者を追加する",
    tipAmount: "チップ（約25セント）",
    gas: "ガス価格",
    edit: "手数料の編集",
    editTX: "トランザクションの編集",
    tipUs: "チップをありがとうございました！",
    total: "合計トランザクション金額",
    auth: "トランザクションの承認",
    editTransaction: "トランザクションの編集",
    login: "ログインして送信する",
    authToast: "認証が必要です",
    failedToast: "トランザクションが失敗しました",
    queuedToast: "トランザクションキューに追加されました",
    txErrorToast: "トランザクションのエラー",
    checkAddToast: "エラー：　戻ってアドレスを確認してください。",
    manyInputsToast: "入力が多すぎます。試してください:",
    notEnoughToast: "トランザクションを実行するのに十分な確認済み入力がありません。",
    sendMoreToast: "より多くのコインを財布に送ってみてください。",
    maxRecipToast: "最大受信者数に達しました。",
    sendErrToast: "送信量のエラー。",
    receiveErrToast: "受信者アドレスのエラー",
    addCoinsToast: "コインをウォレットに追加して,もう一度お試しください",
    addReceiverToast: "受信者を追加する",
    tryAgainToast: "価格がありません。しばらくしてからもう一度お試しください"
  },
  Footer: {
    copyright: "2020 Copyright",
    vidulumApp: "Vidulum App"
  },
  //View Containers
  //Dashboard
  NetworkStats: {
    network: "Vidulum Network",
    connections: "接続:",
    height: "ブロックの高さ:",
    difficulty: "難易度:",
    version: "プロトコルバージョン:"
  },
  PortfolioOverview: {
    balance: "合計残高",
    graph: "ポートフォリオグラフ",
    other: "小額のウォレットを表示"
  },
  RecentTransactions: {
    recent: "最近のトランザクション",
    date: "TXの日付",
    noRecent: "最近のトランザクションはありません",
    symbol: "記号"
  },
  VStatistics: {
    vstats: "V統計",
    users: "登録者数",
    twitter: "Twitterのフォロワー",
    discord: "Discordのメンバー"
  },
  WalletsList: {
    wallet: "ウォレット",
    fav: "お気に入り順",
    search: "検索するタイプ",
    clear: "クリア",
    disconnected: "切断",
    value: "値",
    price: "価格",
    change: "変更",
    hr: "24時間",
    online: "オンライン",
    explorer: "エクスプローラー",
    offline: "オフライン",
    enabled: "有効",
    vstaking: "V-staking",
    send: "送信",
    receive: "受信",
    loginToView: "ログインしてウォレットアドレスを表示します。",
    copy: "アドレスをクリップボードにコピー",
    fieldAsset: "資産",
    fieldActions: "クイックアクション",
    fieldValue: "値",
    fieldPrice: "価格",
    fieldFavorite: "お気に入り",
    copyToastTitle: "クリップボードにコピーしました",
    addressToastContent: "アドレス"
  },
  //Masternode Monitor
  MonitoredMNs: {
    masternodeToastTitle: "マスターノードの監視",
    monitored: "監視対象マスターノード",
    vidulum: "Vidulum",
    soon: "近日公開",
    start: "監視の開始",
    details: "詳細",
    address: "アドレス:",
    ip: "IP:",
    paid: "最終支払い",
    version: "プロトコルバージョン",
    id: "TXiD",
    output: "出力ID",
    hide: "詳細を非表示",
    stop: "監視の停止",
    mnWallet: "マスターノードウォレットアドレス",
    mnLabel: "マスターノードラベル",
    fieldMasternode: "マスターノード",
    fieldActive: "アクティブ時間",
    fieldLast: "最後に見た",
    fieldDetails: "詳細を表示",
    fieldStatus: "状態"
  },
  //Rewards
  RewardHistory: {
    reward: "リワード履歴",
    fieldAsset: "アセット名",
    fieldPay: "送信日時",
    fieldStaked: "ステークバランス",
    fieldEarned: "獲得",
    fieldRank: "ランク",
    fieldStatus: "ステータス",
    fieldDetails: "詳細を表示"
  },
  StakingWallets: {
    staking: "V-Staking Wallets",
    fieldAsset: "アセット名",
    fieldBalance: "バランス"
  },
  StakingDescription: {
    what: "V-Stakingとは何ですか？",
    description:
      "上記のVステーキング対応コインを100ユニット保持するだけで、VidulumアプリウォレットにVステイキングの報酬を毎日受け取ることができます。",
    more: "もっと読みます"
  },
  //Settings
  AuthenticatorWidget: {
    authToastTitle: "セキュリティの設定",
    security: "セキュリティの設定",
    authentication: "二要素認証",
    notEnabled2faText:
      "2要素認証を有効にして、Vidulum Appのアカウントをより安全にします。モバイルデバイスまたはタブレットに認証アプリをダウンロードします。",
    authy: "Authy",
    google: "Google認証システム",
    keyNotice: "秘密鍵をセキュアなところにバックアップしてください",
    enterCode: "認証アプリによって生成された6桁の確認コードを入力してください。",
    disable: "このセキュリティ機能を無効にするには,2FAコードを入力してください。",
    disable2fa: "2FAを無効にする",
    activate2fa: "2FAを有効にする",
    enable2fa: "2FAを有効にする",
    auth2faHolder: "123 456",
    loading: "読み込み中...",
    enterCodeToast: "今すぐに2FAコードを入力してください",
    disabledToast: "2FAが無効になりました",
    failedDisableToast: "2FAを無効にできませんでした",
    enabledToast: "2FAが有効になりました",
    enableFailToast: "2FAを有効にできませんでした",
    failedSetToast: "2FAの設定に失敗しました"
  },
  SettingsContactInfo: {
    contact: "お問い合わせ",
    bug: "バグ報告",
    bugPart1: "バグを報告するのは、下記のメールにお問い合わせください:",
    bugPart2: "できる限りに問題の詳細な説明と再現の仕方を含めてください。",
    more: "詳細情報",
    faq: "FAQ",
    history: "更新履歴",
    about: "Vidulumについて",
    aboutPart1:
      "Vidulumは複数の暗号通貨をサポートし、最新のWebブラウザからオンラインでアクセスできるデジタルアセットウォレットです。Vidulumチームは使いやすさと機能性に重点を置き、導入の障壁を取り除きながら導入を推進することに専念しています。 VidulumアプリはVリワードでサポートされている暗号通貨を保持するだけで、Vステーキングシステムを通じて毎日報酬を受け取ることができます。VDLはユーザーがVステーキングシステムを通じて受け取るネイティブの暗号通貨です。VDLはProof of Work (PoW)であり、マスターノードをサポートしています。",
    aboutPart2:
      "マルチアセットのウェブウォレットとして、ユーザーは自分の秘密鍵を完全に制御でき、強力なパスワード、一意のユーザー名とPINでアカウントを保護していることを確認することをお勧めします。さらにユーザーが2要素認証を有効にすることをお勧めします。Vidulumチームは設計上、アカウントの資格情報を取得することができません。つまり、自分だけがアカウントにアクセスできるため、資格情報を紛失して秘密鍵のバックアップを取り、安全に保管することが重要です。",
    exchange: "エクスチェンジ",
    getVDL: "StexまたはCrex24にVDLの取得はできます"
  },
  UserInfo: {
    userToastTitle: "ユーザー情報",
    user: "ユーザー情報",
    userDescription: "メール設定の通知を追加し、Vidulum Appニュースの最新情報を入手してください。",
    resend: "再送信",
    yourKeys: "あなたの鍵　-　あなたの暗号",
    yourKeysDescription:
      "Vidulum App Walletの秘密鍵をCSVファイルにエクスポートします。秘密鍵は安全な場所に保管することをお勧めします。",
    export: "すべてのキーをテキストにエクスポートする",
    rateLimitToast: "レート制限されています（5分）",
    confirmToast: "確認コードが送信されました",
    issueToast: "メールを変更する際の問題",
    codeConfirmToast: "メールコードを確認しました",
    codeIssueToast: "メールコードの問題",
    verifyErrToast: "メールコードエラーの確認"
  },
  //Wallet View
  AssetCharts: {
    chartToastTitle: "ウォレットチャート",
    chartErrorToast: "ウォレットチャートのエラー"
  },
  AssetDetails: {
    copy: "アドレスをコピーする",
    load: "インポート",
    import: "別のアドレスからインポートする",
    qrcode: "アドレスをQRコードとして表示する",
    copyAdd: "アドレスをクリップボードにコピーする",
    display: "コイン秘密鍵を表示する",
    details: "資産詳細",
    price: "価格",
    value: "値",
    balance: "バランス",
    rewards: "V-Stakeリワード",
    rewardsActive: "アクティブ",
    rewardsInactive: "非アクティブ",
    rank: "ランク",
    last: "最後",
    earned: "獲得",
    qr: "QRコード",
    output: "出力:",
    input: "秘密鍵の入力",
    start: "インポートプロセスの開始",
    startImport: "インポートの開始",
    fee: "ネットワーク料金:",
    edit: "手数料の編集",
    close: "インポートを閉じる",
    cancel: "キャンセル",
    importA: "インポート",
    now: "今",
    startImportErrTitle: "インポートのエラー",
    startImportErr1: "バランスを取得できません",
    startImportErr2: "認識できない秘密鍵タイプ",
    startImportErr3: "インポートの開始に失敗しました",
    importConfirmErr: "トランザクションを実行するのに十分な確認済み入力がありません。",
    copyClipboard: "クリップボードにコピーしました",
    importToastTitle: "インポートバランスのエラー",
    importToastContent: "送るにはコインが足りません",
    addressToastContent: "アドレス",
    manyToastContent: "入力が多すぎます。試してください "
  },
  AssetScroller: {
    fav: "お気に入り",
    currentToastTitle: "現在のアセット",
    currentToastContent: "表示中: "
  },
  TransactionHistory: {
    txHistory: "トランザクション履歴|ステータス:",
    connected: "接続済み",
    disconnected: "切断",
    fieldAmount: "金額",
    fieldTX: "TXID",
    fieldDate: "日付"
  },
  // EarnPage
  OffersContaine:{
    offerTitle: "オファー",
    incomeVDL: "VDLを獲得するための完全なオファー。",
  },
  EarnInfoContainer:{
    EarnInfoTitle:"収益",
  },
  // NetworkPage
  MasternodeStats:{
    mnTitle: "Vidulum Masternode Network",
    activeMN: "アクティブマスターノード",
   collateralMN: "Masternode Collateral",
    lockedMN: "マスターノードでロックされたコイン",
    monthlyMN: "推定月額マスターノード報酬",
  },
  CoinStats:{
    statsTitle: "Vidulum | VDLコイン情報",
    coinStats: "VDLコイン統計",
    circulatingSupply: "循環供給",
    maximumSupply: "最大供給",
    blockHeight:"ブロックの高さ",
    connectionStats: "接続",
    networkHashrate: "ネットワークハッシュレート",
    blockRewards: "ブロック報酬",
  },
  //マイニング@
  MiningWidget:{
    downloadBtn: "GMinerを今すぐダウンロード",
    nvidiaAMD: "（NvidiaおよびAMD）",
    immatureMining: "未熟",
    pendingMining: "保留中",
    payMining: "有料",
    availableMining: "利用可能なVDLプール",
    currentWorkers: "現在のワーカー"
  },
  MiningChart:{
    connectMessage: "マイナーをプールに接続して履歴を確認してください"
  },
  Themes: {
    themesButton: "テーマ"
  }
};
