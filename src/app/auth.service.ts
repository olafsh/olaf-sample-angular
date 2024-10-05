import { Injectable } from "@angular/core";
import { environment } from "../environments/environment";
import { BehaviorSubject } from "rxjs";
import OLAFSDK from "@olafsh/olaf-sdk-js";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private OLAFSDK: any;

  isAuthenticated$$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  accessToken$$: BehaviorSubject<string> = new BehaviorSubject<string>("");
  user$$: BehaviorSubject<any | undefined> = new BehaviorSubject<any | undefined>(undefined);

  constructor() {
    // initialize OLAF SDK
    this.OLAFSDK = new OLAFSDK(environment.OLAF_PUBLIC_ENDPOINT);
  }

  get _isAuthenticated(): boolean {
    return this.isAuthenticated$$.value;
  }

  get _user(): any {
    return this.user$$.value;
  }

  /**
   * Fetch config
   */
  public fetchConfig() {
    return this.OLAFSDK.fetchConfig();
  }

  /**
   * Get config from localstorage
   */
  public config() {
    return this.OLAFSDK.config;
  }

  /**
   * Get access token from localstorage once user is logged in
   */
  public accessToken() {
    return this.OLAFSDK.accessToken;
  }

  /**
   * Check if user is authenticated
   */
  public async isAuthenticated() {
    return await this.OLAFSDK.isAuthenticated;
  }

  /**
   * Build authorize url and redirect user to login page
   */
  public async loginWithRedirect() {
    await this.OLAFSDK.loginWithRedirect();
  }

  /**
   * Handle redirect callback URL
   */
  public async handleRedirectCallback() {
    await this.OLAFSDK.handleRedirectCallback();
  }

  /**
   * Logout user
   */
  public async logout() {
    await this.OLAFSDK.logout();
  }

  /**
   * Retrieves the data of the logged-in user
   */
  public async me() {
    return await this.OLAFSDK.me();
  }

  /**
   * Set is authenticated
   */
  setIsAuthenticated(isAuthenticated: boolean) {
    this.isAuthenticated$$.next(isAuthenticated);
  }

  /**
   * Set access token
   */
  setAccessToken() {
    this.accessToken$$.next(this.OLAFSDK.accessToken);
  }

  /**
   * Set user
   *
   * @param user
   */
  setUser(user: any) {
    this.user$$.next(user);
  }
}

export function initializeApp(authService: AuthService) {
  return async () => {
    try {
      // fetch app config
      await authService.fetchConfig();
      // check if user is authenticated
      const isAuthenticated = await authService.isAuthenticated();
      authService.setIsAuthenticated(isAuthenticated);
      if (isAuthenticated) {
        // set access token
        authService.setAccessToken();
        // retrieves the data of the logged-in user
        await authService.me().then((user: any) => {
          authService.setUser(user);
        });
      } else {
        console.log("Authentication failed");
      }
    } catch (err) {
      console.error("Error during configuration", err);
    }
  };
}
