import type { SocialData } from './social';

export type AppMode = 'upcomer' | 'day';

export type AuthState =
  | { status: 'unauthenticated' }
  | { status: 'authenticated'; accessToken: string; expiresAt: string }
  | { status: 'error'; message: string };

export type DataState =
  | { status: 'idle' | 'loading' | 'success'; error?: never }
  | { status: 'error'; error: string };

export type AppState = {
  auth: AuthState;
  data: DataState;
  socialData: SocialData | null;
  currentMode: AppMode;
};
