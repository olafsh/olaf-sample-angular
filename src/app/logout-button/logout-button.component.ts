import { Component } from "@angular/core";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-logout-button",
  standalone: true,
  imports: [],
  templateUrl: "./logout-button.component.html",
  styleUrl: "./logout-button.component.scss",
})
export class LogoutButtonComponent {
  constructor(private authService: AuthService) {}

  async logout() {
    await this.authService.logout().then(() => {
      window.location.href = "/";
    });
  }
}
