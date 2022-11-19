import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { RouterLink } from "@angular/router";
import { ButtonModule } from "primeng/button";
import { CarouselModule } from "primeng/carousel";
import { CheckboxModule } from "primeng/checkbox";
import { DividerModule } from "primeng/divider";
import { InputTextModule } from "primeng/inputtext";
import { RippleModule } from "primeng/ripple";
import { CONTENT } from "./content/sign-in.content";

@Component({
    selector: "sign-in",
    standalone: true,
    imports: [
        CommonModule,
        RippleModule,
        DividerModule,
        InputTextModule,
        CheckboxModule,
        ButtonModule,
        CarouselModule,
        RouterLink,
    ],
    templateUrl: "./sign-in.component.html",
    styleUrls: ["./sign-in.component.scss"],
})
export class SignInComponent implements OnInit {
    public readonly CarouselContent = CONTENT;
    constructor() {}

    ngOnInit(): void {}
}
