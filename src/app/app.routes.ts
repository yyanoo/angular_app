import { Routes } from '@angular/router';
import { MainPage } from './main-page/main-page';

export const routes: Routes = [
    {
        path: 'main',
        component: MainPage,
    },
    {
        path: 'sub',
        loadChildren: () => import('./sub-page/sub-page.module').then(m => m.SubPageModule),
    },
    { path: '', redirectTo: 'main', pathMatch: 'full' },
];
