import { Component } from '@angular/core';
import { Background } from "./background/background";

@Component({
  selector: 'app-main-page',
  imports: [Background],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss'
})
export class MainPage {

}
