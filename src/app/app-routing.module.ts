import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SidebarLayoutComponent} from "./shared/layout/pages/sidebar-layout/sidebar-layout.component";

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/authentication.module').then(m => m.AuthenticationModule),
  },
  {
    path: 'users',
    component: SidebarLayoutComponent,
    loadChildren: () => import('./user/user.module').then(m => m.UserModule),
  },
  {
    path: 'contacts',
    component: SidebarLayoutComponent,
    loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule),
  },
  {
    path: 'groups',
    component: SidebarLayoutComponent,
    loadChildren: () => import('./group/group.module').then(m => m.GroupModule),
  },
  {
    path: 'materials',
    component: SidebarLayoutComponent,
    loadChildren: () => import('./material/material.module').then(m => m.MaterialModule),
  },
  {
    path: 'products',
    component: SidebarLayoutComponent,
    loadChildren: () => import('./product/product.module').then(m => m.ProductModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
