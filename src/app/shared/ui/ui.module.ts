import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './components/logo/logo.component';
import { SwitchComponent } from './components/switch/switch.component';
import { ProfileIndicatorComponent } from './components/profile-indicator/profile-indicator.component';
import { ProfileMenuComponent } from '../layout/components/profile-menu/profile-menu.component';
import { BurgerComponent } from './components/burger/burger.component';
import { ResponsiveHeaderComponent } from '../layout/components/responsive-header/responsive-header.component';
import { IconActionableComponent } from './components/icon-actionable/icon-actionable.component';



@NgModule({
    declarations: [
        LogoComponent,
        SwitchComponent,
        ProfileIndicatorComponent,
        BurgerComponent,
        IconActionableComponent,
    ],
    exports: [
        LogoComponent,
        SwitchComponent,
        ProfileIndicatorComponent,
        BurgerComponent,
        IconActionableComponent
    ],
    imports: [
        CommonModule
    ]
})
export class UIModule { }
