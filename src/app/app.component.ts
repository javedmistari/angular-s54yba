import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";

  dataArr = [{ source: "value1" }, { source: "value2" }, { source: "value3" }];
}
