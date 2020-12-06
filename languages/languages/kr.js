﻿export default {
  //Global Containers
  _default: {
    locale: "en",
    name: "한국어 (Korean)",
  },
  App: {
    toastContent: "로그인 성공",
    toastTitle: "인증",
  },
  Sidebar: {
    title: "가중",
    hub: "V-Hub",
    rewards: "보상 내역",
    masternode: "마스터 노드 모니터",
    network: "네트워크",
    mining: "VDL 마이닝",
    wallet: "월렛",
    network: "회로망",
    earn: "벌다",
    settings: "설정",
  },
  Header: {
    themeButton: "테마",
    logout: "로그 아웃",
    hub: "V-Hub",
    rewards: "보상 내역",
    masternode: "마스터 노드 모니터",
    wallet: "월렛",
    earn: "벌다",
    settings: "설정",
    headerToastTitle: "최신 거래 정보",
  },
  Login: {
    loginToastTitle: "로그인 활동",
    login: "로그인",
    authorizePKey: "개인 키 사용 권한 부여",
    appLogin: "Vidulum 앱에 로그인",
    username: "사용자 이름",
    password: "비밀번호",
    pin: "숫자 핀",
    twofa: "2FA (활성화 된 경우)",
    authorize: "인증",
    cancel: "취소",
    private: "개인 키",
    address: "주소 :",
    loading: "로드 중 ...",
    nospacesToast: "사용자 이름에 공백이 허용되지 않습니다",
    failed: "로그인 인증 실패",
    usernameError: "사용자 이름 오류",
  },
  Register: {
    defaultToastTitle: "사용자 등록",
    regEmailInvalidToast: "이메일이 유효하지 않습니다",
    regEmailInvalidTitle: "이메일 필드",
    regPasswordToastTitle: "비밀번호 필드",
    regVerifyPassToastTitle: "비밀번호 필드 확인",
    regPinCodeFailedTitle: "핀 코드 필드",
    regPinLongToast: "핀은 길고 고유해야합니다",
    regPinCodeNumOnly: "핀 코드는 숫자입니다",
    regVerifyPassToast: "길고 복잡하지만 길수록 좋습니다",
    regUseUpperToast: "대문자 사용",
    regUseLowerToast: "소문자 사용",
    regUseSymbolsToast: "기호 사용",
    regUseNumToast: "숫자를 사용하십시오",
    regSuccessToast: "이제 Vidulum에 로그인 할 수 있습니다",
    regFailedToast: "문제 CopyPasteText @가있었습니다 : support@vidulum.app",
    usernamePopover: "문자 및 숫자 만, 6-15 자",
    passwordPopover:
      "숫자, 문자, 기호를 사용하십시오. 암호가 길수록 암호 해독 시간이 더 오래 걸립니다.이 암호는 저장되지 않으며 복구 할 방법이 없습니다.",
    verifyPasswordPopover: "비밀번호를 다시 입력하십시오",
    pinPopover:
      "숫자 만; 핀이 길수록 금이가는 데 더 오래 걸립니다.이 핀을 저장하지 않고 복구 할 방법이 없습니다.",
    emailPopover:
      "설정 메뉴에서 유효한 이메일 주소를 입력하고 로그인 후 확인하십시오",
    registerbtn: "계정이 없으십니까? 등록하십시오",
    checkUsernameToastTitle: "가상 ID 필드",
    checkUsernameToast1: "이미 사용 중이거나 유효하지 않은 문자",
    checkUsernameToast2: "는 사용 가능합니다",
    create: "계정 만들기",
    noticePart1: "계정을 만들 때 사본을 만드십시오",
    noticePart2: "사용자 이름, 비밀번호 및 핀",
    noticePart3:
      "그리고 안전하게 보관하십시오. Vidulum 팀은 로그인 자격 증명을 분실하거나 잊어 버린 경우 계정을 복구 할 수 없습니다.",
    loading: "로드 중 ...",
    username: "사용자 이름-Vidulum id",
    password: "비밀번호",
    verifyPassword: "암호 확인",
    pin: "숫자 핀",
    verifyPin: "핀 코드 확인",
    email: "이메일 주소 (선택 사항)",
    termsPart1: "저는 읽고 동의합니다",
    termsPart2: "서비스 약관",
    alreadyAccount: "이미 계정이 있습니까? (닫기)",
    preVerify: "확인",
    prePin: "핀 코드",
    preEmail: "이메일",
    preID: "가상 ID",
    prePassword: "비밀번호",
  },
  Send: {
    sendToastTitle: "거래 상태",
    send: "보내기",
    tip: "팀 팁",
    address: "주소",
    amount: "금액",
    fee: "네트워크 요금",
    add: "수신자 추가",
    tipAmount: "팁 (~ 25 센트)",
    gas: "가스 가격",
    edit: "수수료 수정",
    editTX: "트랜잭션 편집",
    tipUs: "우리에게 팁을 주셔서 감사합니다",
    total: "총 거래 금액",
    auth: "거래 승인",
    editTransaction: "트랜잭션 편집",
    login: "로그인하여 보내기",
    authToast: "인증 필요",
    failedToast: "트랜잭션 실패",
    queuedToast: "트랜잭션 큐에 추가됨",
    txErrorToast: "거래 오류",
    checkAddToast: "오류, 돌아가서 주소를 확인하십시오.",
    manyInputsToast: "입력이 너무 많습니다. 시도하십시오 :",
    notEnoughToast: "확인 된 입력이 트랜잭션을 수행하기에 충분하지 않습니다.",
    sendMoreToast: "지갑에 동전을 더 보내십시오.",
    maxRecipToast: "최대 수신자 수에 도달했습니다.",
    sendErrToast: "금액 전송 오류",
    receiveErrToast: "수신자 주소 오류",
    addCoinsToast: "지갑에 동전을 넣고 다시 시도하십시오",
    addReceiverToast: "수신기 추가",
    tryAgainToast: "가격을 사용할 수 없습니다-나중에 다시 시도하십시오",
  },
  Footer: {
    copyright: "2020 저작권",
    vidulumApp: "가중 앱",
  },
  //View Containers
  //Dashboard
  NetworkStats: {
    network: "가상 네트워크",
    connections: "연결 :",
    height: "블록 높이 :",
    어려움: "난이도 :",
    version: "프로토콜 버전 :",
  },
  PortfolioOverview: {
    balance: "총 잔액",
    graph: "포트폴리오 그래프",
    other: "소액 지갑보기",
  },
  RecentTransactions: {
    recent: "최근 거래",
    date: "TX 날짜",
    noRecent: "최근 거래 없음",
    symbol: "기호",
  },
  VStatistics: {
    vstats: "V- 통계",
    users: "등록 된 사용자",
    twitter: "트위터 팔로워",
    discord: "Discord 멤버",
  },
  WalletsList: {
    wallet: "월렛",
    fav: "즐겨 찾기 우선",
    search: "검색 유형",
    clear: "지우기",
    disconnected: "연결 끊김",
    value: "값",
    price: "가격",
    change: "변경",
    hr: "24 시간",
    online: "온라인",
    explorer: "탐색기",
    offline: "오프라인",
    enabled: "사용",
    vstaking: "V-staking",
    send: "보내기",
    receive: "수신",
    loginToView: "지갑 주소를 보려면 로그인하십시오.",
    copy: "주소를 클립 보드에 복사",
    fieldAsset: "자산",
    fieldActions: "빠른 작업",
    fieldValue: "값",
    fieldPrice: "가격",
    fieldFavorite: "즐겨 찾기",
    copyToastTitle: "클립 보드에 복사",
    addressToastContent: "주소",
  },
  //Masternode Monitor
  MonitoredMNs: {
    masternodeToastTitle: "마스터 노드 모니터링",
    monitor: "모니터링 된 마스터 노드",
    vidulum: "가중",
    soon: "곧 출시 예정",
    start: "모니터링 시작",
    details: "세부 사항",
    address: "주소 :",
    ip: "IP :",
    paid: "최근 유료",
    version: "프로토콜 버전",
    id: "TXiD",
    output: "출력 ID",
    hide: "세부 정보 숨기기",
    stop: "모니터링 중지",
    mnWallet: "마스터 노드 지갑 주소",
    mnLabel: "마스터 노드 레이블",
    fieldMasternode: "마스터 노드",
    fieldActive: "활성 시간",
    fieldLast: "최근에 본 것",
    fieldDetails: "세부 사항 표시",
    fieldStatus: "상태",
  },
  //Rewards
  RewardHistory: {
    reward: "보상 내역",
    fieldAsset: "자산",
    fieldPay: "결제일",
    fieldStaked: "지분 잔액",
    fieldEarned: "Earned",
    fieldRank: "순위",
    fieldStatus: "상태",
    fieldDetails: "세부 사항 표시",
  },
  StakingWallets: {
    staking: "V-Staking 지갑",
    fieldAsset: "자산",
    fieldBalance: "균형",
  },
  StakingDescription: {
    what: "V-Staking이란 무엇입니까?",
    description:
      "Vdusta 지원 동전 100 개를 Vidulum App 지갑에 담아서 매일 V-staking 보상을 받으십시오.",
    more: "추가 정보",
  },
  //Settings
  AuthenticatorWidget: {
    authToastTitle: "보안 설정",
    security: "보안 설정",
    authentication: "2 단계 인증",
    notEnabled2faText:
      "이중 인증을 사용하여 Vidulum 앱 계정을보다 안전하게 만드십시오. 인증 자 앱을 모바일 장치 나 태블릿에 다운로드하십시오.",
    authy: "정통",
    google: "Google 인증 자",
    keyNotice: "보안 백업 비밀 키",
    enterCode: "인증 자 앱에서 생성 한 6 자리 인증 코드를 입력하십시오.",
    disable: "이 보안 기능을 비활성화하려면 2FA 코드를 입력하십시오.",
    disable2fa: "2FA 비활성화",
    activate2fa: "2FA 활성화",
    enable2fa: "2FA 활성화",
    auth2faHolder: "123 456",
    loading: "로드 중 ...",
    enterCodeToast: "지금 2FA 코드를 입력하십시오",
    disabledToast: "2FA가 비활성화되었습니다",
    failedDisableToast: "2FA 비활성화 실패",
    enabledToast: "2FA가 활성화되었습니다",
    enableFailToast: "2FA를 활성화하지 못했습니다",
    failedSetToast: "2FA 설정 실패",
  },
  SettingsContactInfo: {
    contact: "문의하기",
    bug: "버그보고",
    bugPart1: "버그를보고하려면 다음 이메일로 문의하십시오.",
    bugPart2: "자세한 설명과 가능한 경우 문제를 재현하는 단계를 포함하십시오.",
    more: "추가 정보",
    faq: "FAQ",
    history: "업데이트 기록",
    about: "Vidulum 정보",
    aboutPart1:
      "Vidulum은 여러 암호 화폐를 지원하고 최신 웹 브라우저를 통해 온라인으로 액세스 할 수있는 디지털 자산 지갑입니다. 사용 편의성과 기능에 중점을 둔 Vidulum 팀은 진입 장벽을 허물고 채택을 유도하는 데 전념하고 있습니다. Vidulum 앱은 V-Rewards 지원 암호 화폐를 보유함으로써 V-Staking 시스템을 통해 매일 보상을받을 수 있습니다. VDL은 사용자가 V-Staking 시스템을 통해받을 수있는 기본 암호 화폐입니다. VDL은 작업 증명이며 마스터 노드를 지원합니다. ",
    aboutPart2:
      "다중 자산 웹 지갑 인 사용자는 개인 키를 완전히 제어 할 수 있으며 강력한 암호, 고유 한 사용자 이름 및 핀으로 계정을 보호 할 수 있습니다. 또한 사용자는 2 단계 인증을 사용하는 것이 좋습니다. Vidulum 팀은 의도적으로 계정 자격 증명을 검색 할 수 없으므로 이는 본인 만 계정에 액세스 할 수 있으므로 자격 증명을 잃지 않고 개인 키를 백업하여 안전하게 저장하는 것이 중요합니다. ",
    exchange: "교환",
    getVDL: "Stex 또는 Crex24에서 VDL 가져 오기",
  },
  UserInfo: {
    userToastTitle: "사용자 정보",
    user: "사용자 정보",
    userDescription:
      "이메일 설정 알림을 추가하고 Vidulum 앱 뉴스를 최신 상태로 유지하십시오.",
    resend: "재전송",
    yourKeys: "귀하의 키-암호",
    yourKeysDescription:
      "Vidulum App 지갑의 개인 키를 CSV 파일로 내 보냅니다. 개인 키를 안전한 곳에 보관하는 것이 좋습니다.",
    export: "모든 키를 텍스트로 내보내기",
    rateLimitToast: "현재 속도가 제한됩니다 (5 분)",
    confirmToast: "확인 코드 전송",
    issueToast: "이메일 변경 중 문제",
    codeConfirmToast: "이메일 코드가 확인되었습니다",
    codeIssueToast: "이메일 코드 문제",
    verifyErrToast: "이메일 코드 오류 확인",
  },
  //Wallet View
  AssetCharts: {
    chartToastTitle: "월렛 차트",
    chartErrorToast: "월렛 차트 오류",
  },
  AssetDetails: {
    copy: "사본 주소",
    load: "수입",
    import: "다른 주소에서 가져 오기",
    qrcode: "주소를 QR 코드로 표시",
    copyAdd: "주소를 클립 보드에 복사",
    display: "디스플레이 코인 개인 키",
    details: "자산 정보",
    price: "가격",
    value: "값",
    balance: "균형",
    rewards: "V-Staking 보상",
    rewardsActive: "활성",
    rewardsInactive: "비활성",
    rank: "순위",
    last: "마지막",
    earned: "수입",
    qr: "QR 코드",
    output: "OUTPUT :",
    input: "입력 개인 키",
    start: "가져 오기 프로세스 시작",
    startImport: "가져 오기 시작",
    fee: "네트워크 요금 :",
    edit: "수수료 수정",
    close: "가져 오기 닫기",
    cancel: "취소",
    importA: "가져 오기",
    now: "지금",
    startImportErrTitle: "가져 오기 오류",
    startImportErr1: "균형을 얻을 수 없습니다",
    startImportErr2: "인식 할 수없는 개인 키 유형",
    startImportErr3: "가져 오기 시작 실패",
    importConfirmErr: "확인 된 입력이 트랜잭션을 수행하기에 충분하지 않습니다.",
    CopyClipboard: "클립 보드에 복사",
    importToastTitle: "가져 오기 잔액 오류",
    importToastContent: "보낼 동전이 충분하지 않습니다",
    addressToastContent: "주소",
    manyToastContent: "입력이 너무 많습니다.",
  },
  AssetScroller: {
    fav: "즐겨 찾기",
    currentToastTitle: "현재 자산",
    currentToastContent: "표시 중 :",
  },
  TransactionHistory: {
    txHistory: "거래 내역 | 상태 :",
    connected: "연결됨",
    disconnected: "연결 끊김",
    fieldAmount: "금액",
    fieldTX: "TXID",
    fieldDate: "날짜",
  },
  MasternodeStats: {
    mnTitle: "가상 마스터 노드 네트워크",
    activeMN: "활성 마스터 노드",
    collateralMN: "마스터 노드 담보",
    lockedMN: "마스터 노드에 동전이 잠김",
    monthlyMN: "예상 월별 마스터 노드 보상",
  },
  CoinStats: {
    statsTitle: "가상 | VDL 코인 정보",
    coinStats: "VDL 코인 통계",
    circulatingSupply: "순환 공급",
    maximumSupply: "최대 공급",
    blockHeight: "블록 높이",
    connectionStats: "연결",
    networkHashrate: "네트워크 해시 레이트",
    blockRewards: "블록 보상",
  }, //Mining
  MiningWidget: {
    downloadBtn: "GMiner를 지금 다운로드하십시오",
    nvidiaAMD: "(Nvidia 및 AMD)",
    immatureMining: "미성숙 한",
    pendingMining: "보류 중",
    paidMining: "유료",
    availableMining: "사용 가능한 VDL 풀",
    currentWorkers: "현재 근로자",
  },
  MiningChart: {
    connectMessage: "내 역사를 보려면 광부를 수영장에 연결하십시오",
  },
  Themes: {
    themesButton: "테마",
  },
};