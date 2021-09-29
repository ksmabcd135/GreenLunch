import { HookConfig, HookReturnValue } from './types';
export declare type GoogleLoginHookReturnValue = HookReturnValue;
/**
 * React hook for working with the google oAuth client library.
 *
 * @param config - The configuration for your Google authentication flow.
 *
 * @returns The `GoogleUser` instance with properties to work with Google
 * client authentication.
 */
export declare const useGoogleLogin: ({ clientId, hostedDomain, redirectUri, scope, cookiePolicy, fetchBasicProfile, uxMode, persist, }: HookConfig) => HookReturnValue;
