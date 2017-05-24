import { Component } from "@angular/core";

@Component({
  selector: "bs-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.css"]
})

export class WelcomeComponent {
  title: string = "Welcome Component";
}
