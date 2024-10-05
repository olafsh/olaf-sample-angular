import { Component } from "@angular/core";
import { AuthService } from "../auth.service";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [RouterLink],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent {
  _isAuthenticated = false;
  user: any;
  config: any;

  constructor(private authService: AuthService) {
    this.isAuthenticated().then(() => {});
    this.user = this.authService._user;
    this.config = this.authService.config();
  }

  async isAuthenticated() {
    this._isAuthenticated = await this.authService.isAuthenticated();
  }
}
