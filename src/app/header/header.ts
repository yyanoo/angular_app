import { Component } from '@angular/core';
import { HeaderTable } from "./header-table/header-table";

@Component({
  selector: 'app-header',
  imports: [HeaderTable,],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

}
