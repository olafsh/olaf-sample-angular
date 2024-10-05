import { Component } from "@angular/core";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-profile",
  standalone: true,
  imports: [],
  templateUrl: "./profile.component.html",
  styleUrl: "./profile.component.scss",
})
export class ProfileComponent {
  config: any;
  user: any;

  constructor(private authService: AuthService) {
    this.config = this.authService.config();
    this.user = this.authService._user;
  }
}
