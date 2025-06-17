export default {
  signup: {
    welcome: '歡迎加入！',
    subtitle: '讓我們幫助您管理任務',
    fullNamePlaceholder: '請輸入您的全名',
    emailPlaceholder: '請輸入您的電子郵件',
    passwordPlaceholder: '請設定密碼',
    confirmPasswordPlaceholder: '請確認密碼',
    submitButton: '註冊',
    haveAccount: '已經有帳號了嗎？',
    signIn: '登入'
  },
  validate: {
    name: {
      required: '請輸入全名'
    },
    email: {
      required: '請輸入電子郵件',
      error: '請輸入有效的電子郵件地址',
      already: 'Email已被註冊，請輸入其他Email',
    },
    password: {
      required: '請輸入密碼',
      min: '密碼至少需要 6 個字元',
      max: '密碼最多 8 個字元'
    },
    passwordConfirm: {
      required: '請確認密碼',
      error: '密碼必須相符'
    },
    confirm: '確定要刪除這個項目嗎？',
    success: {
      signup: '註冊成功',
      signin: '登入成功',
      signout: '登出成功',
      add: '新增成功',
    },
    error: {
      signup: '註冊失敗請聯繫廠商',
      timeout: '登入逾時請重新登入',
    },
    titleRequired: '至少需要填寫一個標題',
  }
} 