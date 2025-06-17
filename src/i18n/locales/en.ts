export default {
  signup: {
    welcome: 'Welcome Onboard!',
    subtitle: "Let's help you meet up your task",
    fullNamePlaceholder: 'Enter your Full Name',
    emailPlaceholder: 'Enter your Email address',
    passwordPlaceholder: 'Create a Password',
    confirmPasswordPlaceholder: 'Confirm your Password',
    submitButton: 'Sign Up',
    haveAccount: 'Already have an account ?',
    signIn: 'Sign In'
  },
  validate: {
    name: {
      required: 'Full name is required'
    },
    email: {
      required: 'Email is required',
      error: 'Please enter a valid email address',
      already: 'Email already registered',
    },
    password: {
      required: 'Password is required',
      "min": "Password must be at least 6 characters",
      "max": "Password cannot exceed 8 characters"
    },
    passwordConfirm: {
      required: 'Please confirm your password',
      error: 'Passwords must match'
    },
    success: {
      signup: 'Registration successful!',
      signin: 'Login successful',
      add: 'Added successful',
    },
    error: {
      signup: 'Registration failed. Please contact the vendor.',
      timeout: 'Login expired. Please re-login.',
    },
    titleRequired: 'Please enter at least one title.',
  }
} 