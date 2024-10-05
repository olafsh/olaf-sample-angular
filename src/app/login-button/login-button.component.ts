import { Component } from "@angular/core";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-login-button",
  standalone: true,
  imports: [],
  templateUrl: "./login-button.component.html",
  styleUrl: "./login-button.component.scss",
})
export class LoginButtonComponent {
  constructor(private authService: AuthService) {}

  async login() {
    await this.authService.loginWithRedirect();
  }
}
