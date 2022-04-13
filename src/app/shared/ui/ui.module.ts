import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './components/logo/logo.component';
import { SwitchComponent } from './components/switch/switch.component';
import { ProfileIndicatorComponent } from './components/profile-indicator/profile-indicator.component';
import { ProfileMenuComponent } from '../layout/components/profile-menu/profile-menu.component';
import { BurgerComponent } from './components/burger/burger.component';
import { ResponsiveHeaderComponent } from '../layout/components/responsive-header/responsive-header.component';
import { IconActionableComponent } from './components/icon-actionable/icon-actionable.component';
import { FloatingMenuComponent } from './components/floating-menu/floating-menu.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { InputComponent } from './components/input/input.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { AvatarUpdateComponent } from './components/avatar-update/avatar-update.component';
import { InfoModalComponent } from './components/info-modal/info-modal.component';



@NgModule({
    declarations: [
        LogoComponent,
        SwitchComponent,
        ProfileIndicatorComponent,
        BurgerComponent,
        IconActionableComponent,
        FloatingMenuComponent,
        BreadcrumbComponent,
        InputComponent,
        CheckboxComponent,
        AvatarUpdateComponent,
        InfoModalComponent,
    ],
    exports: [
        LogoComponent,
        SwitchComponent,
        ProfileIndicatorComponent,
        BurgerComponent,
        IconActionableComponent,
        FloatingMenuComponent,
        BreadcrumbComponent,
        InputComponent,
        CheckboxComponent,
        AvatarUpdateComponent,
        InfoModalComponent
    ],
    imports: [
        CommonModule
    ]
})
export class UIModule { }
