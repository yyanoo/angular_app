import { Component } from '@angular/core';
import { HeaderTable } from "./header-table/header-table";
import { HeaderTableMobile } from "./header-table-mobile/header-table-mobile";

@Component({
  selector: 'app-header',
  imports: [HeaderTable, HeaderTableMobile],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

}
