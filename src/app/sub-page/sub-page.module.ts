import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SubPage } from './sub-page';

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild([
            { path: '', component: SubPage }
        ])
    ]
})
export class SubPageModule { }