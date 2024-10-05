import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ProfileComponent } from "./profile/profile.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AuthorizeComponent } from "./authorize/authorize.component";
import { CanActivate } from "./auth.guard";

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "profile",
    component: ProfileComponent,
    canActivate: [CanActivate],
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [CanActivate],
  },
  {
    path: "authorize",
    component: AuthorizeComponent,
  },
];
