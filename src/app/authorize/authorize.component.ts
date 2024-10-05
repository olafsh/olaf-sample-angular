import { Component } from "@angular/core";
import { LoaderComponent } from "../loader/loader.component";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-authorize",
  standalone: true,
  imports: [LoaderComponent],
  templateUrl: "./authorize.component.html",
  styleUrl: "./authorize.component.scss",
})
export class AuthorizeComponent {
  constructor(private authService: AuthService) {
    this.authorize().then(() => {
      window.location.href = "/";
    });
  }

  async authorize() {
    await this.authService.handleRedirectCallback().catch((err) => {
      console.log(err);
    });
  }
}
