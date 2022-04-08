import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SidebarLayoutComponent} from "./shared/layout/pages/sidebar-layout/sidebar-layout.component";

const routes: Routes = [
  {
    path: 'users',
    component: SidebarLayoutComponent,
    loadChildren: () => import('./user/user.module').then(m => m.UserModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
