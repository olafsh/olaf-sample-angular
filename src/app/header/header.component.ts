import { Component } from "@angular/core";
import { AuthService } from "../auth.service";
import { LoginButtonComponent } from "../login-button/login-button.component";
import { LogoutButtonComponent } from "../logout-button/logout-button.component";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [LoginButtonComponent, LogoutButtonComponent, RouterLink],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss",
})
export class HeaderComponent {
  _isAuthenticated = false;

  constructor(private authService: AuthService) {
    this._isAuthenticated = this.authService._isAuthenticated;
  }
}
