import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SignInComponent } from "./core/components/sign-in/sign-in.component";

const routes: Routes = [
    {
        path: "sign-in",
        component: SignInComponent,
    },
    {
        path: "",
        pathMatch: "full",
        redirectTo: "sign-in",
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            enableTracing: false,
            scrollPositionRestoration: "top",
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
