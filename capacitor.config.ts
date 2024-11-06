import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.msimet.googleauthpoc',
  appName: 'google-auth-poc',
  webDir: 'www',
  plugins: {
    GoogleAuth: {
      scopes: ['profile','email'],
      serverClientId: '866240789838-k3ovk5bhmusja7fi17eg63olr6n51omp.apps.googleusercontent.com', // to be removed probably
      androidClientId: '866240789838-k3ovk5bhmusja7fi17eg63olr6n51omp.apps.googleusercontent.com',
      forceCodeForRefreshToken: false,
    },
  }
};

export default config;
