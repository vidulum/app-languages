﻿export default {
  //Global Containers
  _default: {
    locale: "fr",
    name: "Français (French)",
  },
  App: {
    toastContent: "Connexion réussie",
    toastTitle: "Authentification",
  },
  Sidebar: {
    title: "Vidulum",
    hub: "V-Hub",
    rewards: "Récompenses",
    masternode: "Réseau Masternode",
    network: "Réseau",
    mining: "Minage",
    wallet: "Portefeuille",
    network: "Réseau",
    earn: "Gains",
    settings: "Paramètres",
  },
  Header: {
    themeButton: "Thèmes",
    logout: "Déconnexion",
    hub: "V-Hub",
    rewards: "Historique des Récompenses",
    masternode: "Moniteur de Masternode",
    wallet: "Portefeuille",
    earn: "Gains",
    settings: "Paramètres",
    headerToastTitle: "Dernières informations de transaction",
  },
  Login: {
    loginToastTitle: "Activité de connexion",
    login: "Connexion ",
    authorizePKey: "Autoriser l'utilisation de la clé privée",
    appLogin: "Se connecter à l'application Vidulum",
    username: "Nom D'utilisateur",
    password: "Mot de passe",
    pin: "Code pin",
    twofa: "2FA (si activé)",
    authorize: "Autoriser",
    cancel: "Annuler",
    private: "Clé privée",
    address: "Adresse:",
    loading: "Chargement...",
    nospacesToast: "Aucun espace autorisé dans le nom d'utilisateur",
    failed: "Echec de connexion",
    usernameError: "Erreur de nom d'utilisateur",
  },
  Register: {
    defaultToastTitle: "Enregistrement de l'utilisateur",
    regEmailInvalidToast: "L'e-mail n'est pas valide",
    regEmailInvalidTitle: "Champ de messagerie",
    regPasswordToastTitle: "Champ de mot de passe",
    regVerifyPassToastTitle: "Vérifier le champ du mot de passe",
    regPinCodeFailedTitle: "Champ code pin",
    regPinLongToast: "La broche doit être longue et unique",
    regPinCodeNumOnly: "Le code PIN n'est composé que des chiffres",
    regVerifyPassToast: "Plus le mot de passe est long et complexe mieux c'est",
    regUseUpperToast: "Utiliser aussi les majuscules",
    regUseLowerToast: "Utiliser aussi les minuscules",
    regUseSymbolsToast: "Utiliser aussi les symboles",
    regUseNumToast: "Utilisez aussi les nombres",
    regSuccessToast: "Vous pouvez maintenant vous connecter à Vidulum",
    regFailedToast: "En cas de soucis contactez: support@vidulum.app",
    usernamePopover: "Lettres et chiffres uniquement; 6 à 15 caractères",
    passwordPopover:
      "Utilisez des chiffres, des lettres, des symboles; plus votre mot de passe est long, plus il faudrait de temps pour le craquer. Nous ne stockons PAS ce mot de passe et nous n'avons aucun moyen de le récupérer pour vous.",
    verifyPasswordPopover: "Saisissez à nouveau le mot de passe.",
    pinPopover:
      "Chiffres uniquement; plus votre épingle est longue, plus il faudrait de temps pour la casser. Nous ne stockons PAS cette épingle et n'avons aucun moyen de la récupérer pour vous.",
    emailPopover:
      "Entrez une adresse e-mail valide et confirmez après la connexion dans le menu Paramètres.",
    registerbtn: "Vous n'avez pas de compte? Inscrivez-vous",
    checkUsernameToastTitle: "Vidulum id Field",
    checkUsernameToast1: "Déjà utilisé ou caractère invalide",
    checkUsernameToast2: "est disponible",
    create: "Créer un compte",
    noticePart1:
      "Lorsque vous créez un compte, assurez-vous d'avoir fait une copie de votre",
    noticePart2: "nom d'utilisateur, mot de passe et code PIN",
    noticePart3:
      "et l'a stocké en toute sécurité. L'équipe Vidulum ne peut pas récupérer votre compte si vous perdez ou oubliez vos informations de connexion.",
    loading: "Chargement...",
    username: "Nom d'utilisateur - Vidulum id",
    password: "Mot de passe",
    verifyPassword: "Vérifier le mot de passe",
    pin: "Code pin",
    verifyPin: "Vérifier le code PIN",
    email: "Adresse e-mail (facultative)",
    termsPart1: "J'ai lu et j'accepte les",
    termsPart2: "Conditions d'utilisation",
    alreadyAccount: "Vous avez déjà un compte? (fermer)",
    preVerify: "Vérifier",
    prePin: "Code pin",
    preEmail: "Email",
    preID: "Vidulum ID",
    prePassword: "Mot de passe",
  },
  Send: {
    sendToastTitle: "Statut de la transaction",
    send: "Envoyer",
    tip: "Pourboire à l'équipe",
    address: "Adresse",
    amount: "Montant",
    fee: "Frais de réseau",
    add: "Ajouter un récepteur",
    tipAmount: "Montant pourboire (~ 25 centimes)",
    gas: "Frais de transaction",
    edit: "Modifier les frais",
    editTX: "Modifier la transaction",
    tipUs: "Nous faire un don (merci)",
    total: "Montant total de la transaction",
    auth: "Autoriser la transaction",
    editTransaction: "Modifier la transaction",
    login: "Connectez-vous pour envoyer",
    authToast: "Authentification requise",
    failedToast: "Echec de la transaction",
    queueedToast: "Ajouté à la file d'attente de transactions",
    txErrorToast: "Erreur de transaction",
    checkAddToast: "Erreur, veuillez revenir en arrière et vérifier l'adresse.",
    manyInputsToast: "Trop d'entrées, veuillez essayer:",
    notEnoughToast:
      "Pas assez d'entrées confirmées pour effectuer la transaction.",
    sendMoreToast: "Essayez d'envoyer plus de pièces à votre portefeuille.",
    maxRecipToast: "Nombre maximal de destinataires atteints.",
    sendErrToast: "Erreur de montant d'envoi",
    receiveErrToast: "Erreur d'adresse du récepteur",
    addCoinsToast: "Ajoutez des pièces à votre portefeuille et réessayez",
    addReceiverToast: "Ajouter un récepteur",
    tryAgainToast: "Prix non disponible - Réessayez plus tard",
  },
  Footer: {
    copyright: "2020 Copyright",
    vidulumApp: "Vidulum App",
  },
  //View Containers
  //Dashboard
  NetworkStats: {
    network: "Vidulum Network",
    connections: "Connexions:",
    height: "Hauteur du bloc:",
    difficulty: "Difficulté:",
    version: "Version du Protocole:",
  },
  PortfolioOverview: {
    balance: "Solde Total",
    graph: "Composition du Wallet",
    other: "Afficher les plus petites valeurs",
  },
  RecentTransactions: {
    recent: "Transactions Récentes",
    date: "TX Date",
    noRecent: "Aucune transaction récente",
    symbol: "Symbole",
  },
  VStatistics: {
    vstats: "V-Statistiques",
    users: "Utilisateurs enregistrés",
    twitter: "Abonnés Twitter",
    discord: "Membres Discord",
  },
  WalletsList: {
    wallet: "Portefeuilles",
    fav: "Les favoris d'abord",
    search: "Tapez pour rechercher",
    clear: "Effacer",
    disconnected: "Déconnecté",
    value: "Valeur",
    price: "Prix",
    change: "Changer",
    hr: "24 h",
    online: "En ligne",
    explorer: "Explorer",
    offline: "Hors ligne",
    enabled: "Activé",
    vstaking: "V-staking",
    send: "Envoyer",
    receive: "Recevoir",
    loginToView: "Connectez-vous pour voir l'adresse du portefeuille.",
    copy: "Copier l'adresse dans le presse-papiers",
    fieldAsset: "Asset",
    fieldActions: "Actions rapides",
    fieldValue: "Value",
    fieldPrice: "Prix",
    fieldFavorite: "Favoris",
    copiedToastTitle: "Copié dans le presse-papiers",
    addressToastContent: "Adresse",
  },
  //Masternode Monitor
  MonitoredMNs: {
    masternodeToastTitle: "Surveillance des masternodes",
    monitored: "Masternodes surveillés",
    vidulum: "Vidulum",
    soon: "Bientôt disponible",
    start: "Démarrer la surveillance",
    details: "Détails",
    address: "Adresse:",
    ip: "IP:",
    paid: "Dernier payé",
    version: "Version du Protocole",
    id: "TXiD",
    output: "ID sortie",
    hide: "Masquer les détails",
    stop: "Arrêter la surveillance",
    mnWallet: "Adresse du portefeuille Masternode",
    mnLabel: "Libellé de masternode",
    fieldMasternode: "Masternode",
    fieldActive: "Temps Actif",
    fieldLast: "Dernière vue",
    fieldDetails: "Afficher les détails",
    fieldStatus: "Statut",
  },
  //Rewards
  RewardHistory: {
    reward: "Historique des Récompenses",
    fieldAsset: "Monnaie",
    fieldPay: "Date de paiement",
    fieldStaked: "Montant du stacking",
    fieldEarned: "Gagné",
    fieldRank: "Rang",
    fieldStatus: "Statut",
    fieldDetails: "Afficher les détails",
  },
  StakingWallets: {
    staking: "Portefeuilles V-Staking",
    fieldAsset: "Monnaie",
    fieldBalance: "Montant",
  },
  StakingDescription: {
    what: "Qu'est-ce que le V-Staking?",
    description:
      "Gardez au minimum 100 unités d'une monnaie prise en charge par le V-stacking, comme indiqué ci-dessus, dans votre portefeuille Vidulum App pour recevoir des récompences quotidiennes de V-stacking! Vous devez vous connecter au moins une fois tous les 60 jours.",
    more: "Dites m'en plus",
  },
  //Settings
  AuthenticatorWidget: {
    uthToastTitle: "Paramètres de Sécurité",
    security: "Paramètres de Sécurité",
    authentication: "Authentification à Deux Facteurs",
    notEnabled2faText:
      "Rendez votre compte d'application Vidulum plus sûr en activant l'authentification à deux facteurs. Téléchargez une application d'authentification sur votre appareil mobile ou votre tablette.",
    authy: "Authy",
    google: "Google Authenticator",
    keyNotice: "Sauvegarde sécurisée de la clé secrète",
    enterCode:
      "Entrez votre code de vérification à 6 chiffres généré par l'application d'authentification.",
    disable:
      "Entrez votre code 2FA pour désactiver cette fonction de sécurité.",
    disable2fa: "Désactiver 2fa",
    activate2fa: "Activer la 2FA",
    enable2fa: "Activer la 2FA",
    auth2faHolder: "123 456",
    loading: "Chargement...",
    enterCodeToast: "Entrez le code 2FA maintenant",
    disabledToast: "2FA maintenant désactivé",
    failedDisableToast: "Impossible de désactiver 2FA",
    enabledToast: "2FA maintenant activé",
    enableFailToast: "Impossible d'activer 2FA",
    failedSetToast: "Impossible de définir 2FA",
  },
  SettingsContactInfo: {
    contact: "Contactez-nous",
    bug: "Rapport de bug",
    bugPart1:
      "Pour signaler un bug, contactez-nous à l'adresse e-mail suivante:",
    bugPart2:
      "Veuillez inclure une description détaillée et si possible, les étapes qui vous ont amenées au problème.",
    more: "Plus d'Informations",
    faq: "FAQ",
    history: "Mettre à jour l'historique",
    about: "À propos de Vidulum",
    aboutPart1:
      "Vidulum est un portefeuille d'actifs numériques qui prend en charge plusieurs crypto-monnaies et qui est accessible en ligne via n'importe quel navigateur Web moderne. En mettant l'accent sur la facilité d'utilisation et les fonctionnalités, l'équipe Vidulum se consacre à favoriser l'adoption tout en supprimant les barrières à l'entrée. Les actifs contenus au sein de l'application Vidulum peuvent être récompensés quotidiennement via le système de V-Staking, uniquement en gardant une crypto-monnaie prise en charge par les V-rewards. VDL est la crypto-monnaie native que les utilisateurs recevront via le système V-Staking. VDL est une preuve de travail et prend en charge les masternodes. ",
    aboutPart2:
      "En tant que portefeuille Web multi-actifs, les utilisateurs contrôlent pleinement leurs clés privées et sont encouragés à s'assurer qu'ils ont sécurisé leurs comptes avec un mot de passe fort, un nom d'utilisateur et une épingle unique. De plus, il est encouragé que les utilisateurs activent l'authentification à 2 facteurs. . L'équipe Vidulum n'est pas en mesure de récupérer les informations d'identification du compte, par conception, ce qui signifie que vous seul pouvez accéder à votre compte, il est donc essentiel de ne pas perdre vos informations d'identification et de sauvegarder vos clés privées, en les stockant en toute sécurité. ",
    exchange: "Échanges",
    getVDL: "Obtenir VDL sur Stex ou Crex24",
  },
  UserInfo: {
    userToastTitle: "Informations Utilisateur",
    user: "Informations Utilisateur",
    userDescription:
      "Ajoutez vos notifications de configuration de messagerie et restez à jour sur les nouvelles de l'application Vidulum.",
    resend: "Renvoyer",
    yourKeys: "Vos Clés - Votre Crypto",
    yourKeysDescription:
      "Exportez les clés privées de vos portefeuilles Vidulum App vers un fichier CSV. Nous vous recommandons de stocker vos clés privées dans un endroit sûr.",
    export: "Exporter toutes les clés vers du texte",
    rateLimitToast: "Votre tarif est limité (5 minutes)",
    confirmToast: "Code de confirmation envoyé",
    issueToast: "Problème lors du changement d'e-mail",
    codeConfirmToast: "Code email confirmé",
    codeIssueToast: "Problème de code de messagerie",
    verifyErrToast: "Vérifier l'erreur du code de messagerie",
  },
  //Wallet View
  AssetCharts: {
    chartToastTitle: "Wallet Chart",
    chartErrorToast: "Erreur de graphique de portefeuille",
  },
  AssetDetails: {
    copy: "Copier l'Adresse",
    load: "Importer",
    import: "Importer depuis une autre adresse",
    qrcode: "Afficher l'adresse sous forme de code QR",
    copyAdd: "Copier l'adresse dans le presse-papiers",
    display: "Afficher la clé privée de la pièce",
    details: "Détails de l'actif",
    price: "Prix",
    value: "Valeur",
    balance: "La Équilibre",
    rewards: "V-Staking Récompenses",
    rewardsActive: "Active",
    rewardsInactive: "Inactive",
    rank: "Rang",
    last: "Dernier",
    earned: "Gagné",
    qr: "QR Code",
    output: "SORTIE:",
    input: "Entrer la clé privée",
    start: "Démarrer le processus d'importation",
    startImport: "Démarrer l'importation",
    fee: "Frais de Réseau:",
    edit: "Modifier les frais",
    close: "Fermer l'importation",
    cancel: "Annuler",
    importA: "Importer",
    now: "maintenant",
    startImportErrTitle: "Erreur d'importation",
    startImportErr1: "Impossible d'obtenir l'équilibre",
    startImportErr2: "Type de clé privée non reconnue",
    startImportErr3: "Échec du démarrage de l'importation",
    importConfirmErr:
      "Pas assez d'entrées confirmées pour effectuer la transaction.",
    copiedClipboard: "Copié dans le presse-papiers",
    importToastTitle: "Erreur de solde d'importation",
    importToastContent: "Pas assez de pièces à envoyer",
    addressToastContent: "Adresse",
    manyToastContent: "Trop d'entrées, veuillez essayer ",
  },
  AssetScroller: {
    fav: "Favoris",
    currentToastTitle: "Actif actuel",
    currentToastContent: "Affichage:",
  },
  TransactionHistory: {
    txHistory: "Historique des transactions | Statut:",
    connected: "Connecté",
    disconnected: "Déconnecté",
    fieldAmount: "Montante",
    fieldTX: "TXID",
    fieldDate: "Date",
  },
  MasternodeStats: {
    mnTitle: "Réseau de masternodes Vidulum",
    activeMN: "Masternodes actifs",
    collateralMN: "Masternode Collateral",
    LockMN: "Actif Bloqué dans les Masternodes",
    monthlyMN: "Récompenses mensuelles estiméees par Masternode",
  },
  CoinStats: {
    statsTitle: "Vidulum | Informations sur les pièces VDL",
    coinStats: "Statistiques sur les pièces VDL",
    circulatingSupply: "Circulating Supply",
    maximumSupply: "Maximum Supply",
    blockHeight: "Nombre de blocks",
    connectionStats: "Connexions",
    networkHashrate: "Network Hashrate",
    blockRewards: "Récompenses par block",
    blockTime: "Temps par block",
  }, //Exploitation minière
  MiningWidget: {
    downloadBtn: "Télécharger GMiner maintenant",
    nvidiaAMD: "(Nvidia et AMD)",
    immatureMining: "Immature",
    pendingMining: "En attente",
    paidMining: "Payé",
    availableMining: "Pools VDL disponibles",
    currentWorkers: "Travailleurs actuels",
  },
  MiningChart: {
    connectMessage: "Connectez un mineur au pool pour voir votre historique",
  },
  Themes: {
    themesButton: "Thèmes",
  },
};
