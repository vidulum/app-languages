export default {
  _default: {
    locale: "es",
    name: "Espanol (Spanish)"
  },
  App: {
    toastContent: "Inicio de sesión exitoso",
    toastTitle: "Autenticación"
  },
  Sidebar: {
    title: "Vidulum",
    hub: "V-Hub",
    rewards: "Recompensas",
    masternode: "Monitor Masternode",
    network: "Red",
    mining: "Minería VDL",
    wallet: "Billetera",
    network: "Red",
    earn: "Ganar",
    settings: "Configuración"
  },
  Header: {
    themeButton: "Temas",
    logout: "Cerrar Sesión",
    hub: "V-Hub",
    rewards: "Historial Recompensas",
    masternode: "Monitor Masternode",
    wallet: "Billetera",
    earn: "Ganar",
    settings: "Configuración",
    headerToastTitle: "Información de la última Transacción"
  },
  Login: {
    loginToastTitle: "Actividad de Inicio de Sesión",
    login: "Iniciar Sesión ",
    authorizePKey: "Autorizar Uso de Clave Privada",
    appLogin: "Iniciar Sesión en la Aplicación Vidulum",
    username: "Nombre de Usuario",
    password: "Contraseña",
    pin: "Pin Numérico",
    twofa: "2FA (si está habilitado)",
    authorize: "Autorizar",
    cancel: "Cancelar",
    private: "Clave Privada",
    address: "Dirección:",
    loading: "Cargando...",
    nospacesToast: "No se permiten espacios en el nombre de usuario",
    failed: "Falló la autenticación de inicio de sesión",
    usernameError: "Error de nombre de usuario"
  },
  Register: {
    defaultToastTitle: "Registro de usuario",
    regEmailInvalidToast: "El correo electrónico no es válido",
    regEmailInvalidTitle: "Campo de correo electrónico",
    regPasswordToastTitle: "Campo de contraseña",
    regVerifyPassToastTitle: "Verificar campo de contraseña",
    regPinCodeFailedTitle: "Campo de código PIN",
    regPinLongToast: "El pin debe ser largo y único",
    regPinCodeNumOnly: "El código PIN es solo números",
    regVerifyPassToast: "Hacer esto largo y complejo pero más largo es mejor",
    regUseUpperToast: "Use mayúsculas también",
    regUseLowerToast: "Utilice también minúsculas",
    regUseSymbolsToast: "Use símbolos también",
    regUseNumToast: "Use números también",
    regSuccessToast: "Ahora puede iniciar sesión en Vidulum",
    regFailedToast: "Hubo un problema: support@vidulum.app",
    usernamePopover: "Sólo letras y números; 6-15 caracteres",
    passwordPopover:
      "Utilice números, letras, símbolos; cuanto más larga sea su contraseña, más tiempo demorará en descifrarla. NO almacenamos esta contraseña y no tenemos forma de recuperarla para usted.",
    verifyPasswordPopover: "Ingrese la contraseña nuevamente",
    pinPopover:
      "Solo números; cuanto más largo sea tu pin, más tardará en romperse. NO almacenamos este pin y no tenemos forma de recuperarlo para ti.",
    emailPopover:
      "Ingrese una dirección de correo electrónico válida y confirme después de iniciar sesión en el Menú de configuración.",
    registerbtn: "¿No tienes una cuenta? Regístrate",
    checkUsernameToastTitle: "Vidulum id Field",
    checkUsernameToast1: "Ya está en uso o carácter no válido",
    checkUsernameToast2: " está disponible",
    create: "Crear Cuenta",
    noticePart1: "Cuando cree una cuenta, asegúrese de haber realizado una copia de su",
    noticePart2: "nombre de usuario, contraseña y pin",
    noticePart3:
      "y lo almacenó de forma segura. El equipo de Vidulum no puede recuperar su cuenta si pierde u olvida sus credenciales de inicio de sesión.",
    loading: "Cargando...",
    username: "ombre de usuario - ID de Vidulum",
    password: "Contraseña",
    verifyPassword: "Verificar Contraseña",
    pin: "Pin Numérico",
    verifyPin: "Verificar Código PIN",
    email: "Dirección de correo electrónico (opcional)",
    termsPart1: "He leído y acepto el",
    termsPart2: "Términos de servicio",
    alreadyAccount: "¿Ya tienes una cuenta? (cerrar)",
    preVerify: "Verificar",
    prePin: "Código PIN",
    preEmail: "Correo Electrónico",
    preID: "ID de Vidulum",
    prePassword: "Contraseña"
  },
  Send: {
    sendToastTitle: "Estado de la Transacción",
    send: "Enviar",
    tip: "Propina al Equipo",
    address: "Dirección",
    amount: "Cantidad",
    fee: "Tarifa de red",
    add: "Agregar receptor",
    tipAmount: "Propina (~ 25 centavos)",
    gas: "Precio del gas",
    edit: "Editar tarifa",
    tipUs: "Consejo para nosotros (gracias)",
    total: "Monto Total de la Transacción",
    auth: "Autorizar Transacción",
    editTransaction: "Editar Transacción",
    login: "Iniciar sesión para enviar",
    authToast: "Se requiere autenticación",
    failedToast: "Error en la Transacción",
    queuedToast: "Agregado a la cola de transacciones",
    txErrorToast: "Error de transacción",
    checkAddToast: "Error, regrese y verifique la dirección.",
    manyInputsToast: "Demasiadas entradas, intente:",
    notEnoughToast: "No hay suficientes entradas confirmadas para realizar la transacción.",
    sendMoreToast: "Intenta enviar más monedas a tu billetera.",
    maxRecipToast: "Se han alcanzado los destinatarios máximos.",
    sendErrToast: "Error de cantidad de envío.",
    receiveErrToast: "Error de dirección del receptor",
    addCoinsToast: "Agregue monedas a su billetera e intente nuevamente",
    addReceiverToast: "Agregar un receptor",
    tryAgainToast: "Precio no disponible - Inténtalo de nuevo más tarde"
  },
  Footer: {
    copyright: "2020 Copyright",
    vidulumApp: "Vidulum App"
  },
  //View Containers
  //Dashboard
  NetworkStats: {
    network: "Red de Vidulum",
    connections: "Conexiones:",
    height: "Altura del bloque:",
    difficulty: "Dificultad:",
    version: "Versión del Protocolo:"
  },
  PortfolioOverview: {
    balance: "Saldo Total",
    graph: "Portfolio Graph",
    other: "Otro"
  },
  RecentTransactions: {
    recent: "Transacciones Recientes",
    date: "Fecha TX",
    noRecent: "No hay transacciones recientes",
    symbol: "Símbolo"
  },
  VStatistics: {
    vstats: "V-Estadísticas",
    users: "Usuarios Registrados",
    twitter: "Seguidores de Twitter",
    discord: "Miembros Discord"
  },
  WalletsList: {
    wallet: "Carteras",
    fav: "Favoritos Primero",
    search: "Escriba para buscar",
    clear: "Claro",
    disconnected: "Desconectado",
    value: "Valor",
    price: "Precio",
    change: "Cambia",
    hr: "24 Horas",
    online: "En Línea",
    explorer: "Explorador",
    offline: "Desconectado",
    enabled: "Habilitado",
    vstaking: "V-staking",
    send: "Enviar",
    receive: "Recibir",
    loginToView: "Inicie sesión para ver la dirección de la billetera.",
    copia: "Copiar dirección al portapapeles.",
    copy: "Copy address to clipboard",
    fieldAsset: "Asset",
    fieldActions: "Acciones rápidas",
    fieldValue: "Valor",
    fieldPrice: "Precio",
    fieldFavorite: "Favorito",
    copiedToastTitle: "Copiado al Portapapeles",
    addressToastContent: "Dirección"
  },
  //Masternode Monitor
  MonitoredMNs: {
    masternodeToastTitle: "Supervisión de Masternode",
    monitored: "Nodos maestros supervisados",
    vidulum: "Vidulum",
    soon: "Próximamente",
    start: "Iniciar monitoreo",
    details: "Detalles",
    address: "Dirección:",
    ip: "IP:",
    paid: "Último pago",
    version: "Versión del Protocolo",
    id: "TXiD",
    output: "ID de Salida",
    hide: "Ocultar Detalles",
    stop: "Detener monitoreo",
    mnWallet: "Dirección de la billetera Masternode",
    mnLabel: "Etiqueta Masternode",
    fieldMasternode: "Masternode",
    fieldActive: "Tiempo Activo",
    fieldLast: "Último Visto",
    fieldDetails: "Show Detalles",
    fieldStatus: "Estado"
  },
  //Rewards
  RewardHistory: {
    reward: "Historial de Recompensas",
    fieldAsset: "Asset",
    fieldPay: "Fecha de pago",
    fieldStaked: "Saldo replanteado",
    fieldEarned: "Earned",
    fieldRank: "Rango",
    fieldStatus: "Estado",
    fieldDetails: "Mostrar detalles"
  },
  StakingWallets: {
    staking: "V-Staking Carteras",
    fieldAsset: "Asset",
    fieldBalance: "Balance"
  },
  StakingDescription: {
    what: "¿Qué es el V-Staking?",
    description:
      "Simplemente sostenga 100 unidades de una moneda compatible con V-staking, como se menciona anteriormente, en su billetera de la aplicación Vidulum para recibir recompensas diarias de V-staking.",
    more: "Cuéntame Más"
  },
  //Settings
  AuthenticatorWidget: {
    authToastTitle: "Configuración de seguridad",
    security: "Configuración de Seguridad",
    authentication: "Autenticación de Dos Factores",
    notEnabled2faText:
      "Haga que su cuenta de la aplicación Vidulum sea más segura al habilitar la autenticación de dos factores. Descargue una aplicación de autenticación en su dispositivo móvil o tableta.",
    authy: "Authy",
    google: "Autenticador de Google",
    keyNotice: "Clave secreta de copia de seguridad segura",
    enterCode: "Ingrese su código de verificación de 6 dígitos generado por la aplicación de autenticación.",
    disable: "Ingrese su código 2FA para deshabilitar esta función de seguridad.",
    disable2fa: "Desactivar 2FA",
    activar2fa: "Activar 2FA",
    enable2fa: "Habilitar 2FA",
    auth2faHolder: "123456",
    loading: "Cargando...",
    enterCodeToast: "Ingrese el código 2FA ahora",
    disabledToast: "2FA ahora deshabilitado",
    failureDisableToast: "Error al deshabilitar 2FA",
    enabledToast: "2FA ahora habilitado",
    enableFailToast: "Error al habilitar 2FA",
    failureSetToast: "Error al establecer 2FA"
  },
  SettingsContactInfo: {
    contact: "Contáctenos",
    bug: "Informe de Errores",
    bugPart1: "Para informar un error, contáctenos en el siguiente correo electrónico:",
    bugPart2: "Incluya una descripción detallada y, si es posible, pasos para recrear el problema.",
    more: "Más información",
    faq: "FAQ",
    history: "Historial de Actualizaciones",
    about: "Acerca de Vidulum",
    aboutPart1:
      "Vidulum, es una billetera de activos digitales que admite múltiples criptomonedas y es accesible en línea a través de cualquier navegador web moderno. Con un enfoque en la facilidad de uso y funcionalidad, el equipo de Vidulum se dedica a impulsar la adopción y derribar las barreras de entrada. Los usuarios de La aplicación Vidulum se puede recompensar a través del sistema V-Staking a diario, simplemente sosteniendo una criptomoneda compatible con v-rewards. VDL es la criptomoneda nativa que los usuarios recibirán a través del sistema V-Staking. VDL es prueba de trabajo y admite Masternodes. ",
    aboutPart2:
      "Como una billetera web de activos múltiples, los usuarios tienen el control total de sus claves privadas y se les recomienda que se aseguren de haber asegurado sus cuentas con una contraseña segura, un nombre de usuario único y un pin. Además, se recomienda que los usuarios habiliten la autenticación de 2 factores . El equipo de Vidulum no puede recuperar las credenciales de la cuenta, por diseño, y esto significa que solo usted puede acceder a su cuenta, por lo que es fundamental que no pierda sus credenciales y tome una copia de seguridad de sus claves privadas, almacenándolas de forma segura.",
    exchange: "Intercambios",
    getVDL: "Obtenga VDL en Stex o Crex24"
  },
  UserInfo: {
    userToastTitle: "Información del Usuario",
    user: "Información del Usuario",
    userDescription:
      "Agregue sus notificaciones de configuración de correo electrónico y manténgase actualizado sobre las noticias de la aplicación Vidulum.",
    resend: "Reenviar",
    yourKeys: "Your Keys - Your Crypto",
    yourKeysDescription:
      "Exporte las claves privadas para las billeteras de su aplicación Vidulum a un archivo CSV. Le recomendamos que guarde sus claves privadas en un lugar seguro.",
    export: "Exportar todas las claves a texto",
    rateLimitToast: "Se te limita la velocidad (5 minutos)",
    confirmToast: "Código de confirmación enviado",
    issueToast: "Problema al cambiar el correo electrónico",
    codeConfirmToast: "Código de correo electrónico confirmado",
    codeIssueToast: "Problema de código de correo electrónico",
    verifyErrToast: "Verificar error de código de correo electrónico"
  },
  //Wallet View
  AssetCharts: {
    chartToastTitle: "Wallet Chart",
    chartErrorToast: "Error de Gráfico de Billetera"
  },
  AssetDetails: {
    copy: "Copiar dirección",
    load: "Importar",
    import: "Importar desde otra dirección",
    qrcode: "Mostrar la dirección como un código QR",
    copyAdd: "Copiar dirección al portapapeles",
    display: "Mostrar clave privada de moneda",
    details: "Detalles del activo",
    price: "Precio",
    value: "Valor",
    balance: "Balance",
    rewards: "V-Staking Rewards",
    rank: "Rango",
    last: "Ultimo",
    earned: "Ganado",
    qr: "Código QR",
    output: "SALIDA:",
    input: "Entrada de clave privada",
    start: "Iniciar proceso de importación",
    startImport: "Iniciar importación",
    fee: "Tarifa de Red:",
    edit: "Editar tarifa",
    close: "Cerrar importación",
    cancel: "Cancelar",
    importA: "Importar",
    now: "Ahora",
    startImportErrTitle: "Error de importación",
    startImportErr1: "No se puede obtener el saldo",
    startImportErr2: "Tipo de clave privada no reconocida",
    startImportErr3: "Error al iniciar importación",
    importConfirmErr: "No hay suficientes entradas confirmadas para realizar la transacción",
    copiedClipboard: "Copiado al Portapapeles",
    importToastTitle: "Error de saldo de importación",
    importToastContent: "No hay suficientes monedas para enviar",
    addressToastContent: "Dirección",
    manyToastContent: "Demasiadas entradas, por favor intente"
  },
  AssetScroller: {
    fav: "Favoritos",
    currentToastTitle: "Activo actual",
    currentToastContent: "Mostrando:"
  },
  TransactionHistory: {
    txHistory: "Historial de transacciones | Estado:",
    connected: "Conectado",
    disconnected: "Desconectado",
    fieldAmount: "Cantidad",
    fieldTX: "TXID",
    fieldDate: "Fecha"
  },
    // EarnPage 
    OfferContainer: {
      offerTitle: "Ofertas",
      earnVDL: "Ofertas completas para ganar VDL",
    },
    EarnInfoContainer: {
      earnInfoTitle: "Ingresos",
    },
    // NetworkPage
    MasternodeStats: {
      mnTitle: "Vidulum Masternode Network",
      activeMN: "Masternodes activos",
      colateralMN: "Masternode Colateral",
      lockedMN: "Monedas bloqueadas en Masternodes",
      monthlyMN: "Recompensas mensuales estimadas de Masternode"
    },
    CoinStats: {
      statsTitle: "Vidulum | Información de la moneda VDL",
      coinStats: "Estadísticas de monedas VDL",
      circulatingSupply: "Suministro circulante",
      maximumSupply: "Oferta máxima",
      blockHeight: "Altura del bloque",
      connectionStats: "Conexiones",
      networkHashrate: "Network Hashrate",
      blockRewards: "Block Rewards",
    },
    //Minería@
    MiningWidget: {
      downloadBtn: "Descargar GMiner ahora",
      nvidiaAMD: "(Nvidia y AMD)",
      immatureMining: "inmadura",
      pendingMining: "Pendiente",
      paidMining: "Pagado",
      availableMining: "Grupos de VDL disponibles",
      currentWorkers: "Trabajadores actuales"
    },
    MiningChart: {
      connectMessage: "Conecta un minero al grupo para ver tu historial"
    },
  Themes: {
    themesButton: "Temas"
  }
};
