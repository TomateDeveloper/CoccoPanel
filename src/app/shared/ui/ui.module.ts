import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './components/logo/logo.component';
import { SwitchComponent } from './components/switch/switch.component';
import { ProfileIndicatorComponent } from './components/profile-indicator/profile-indicator.component';



@NgModule({
    declarations: [
        LogoComponent,
        SwitchComponent,
        ProfileIndicatorComponent
    ],
    exports: [
        LogoComponent,
        SwitchComponent,
        ProfileIndicatorComponent
    ],
    imports: [
        CommonModule
    ]
})
export class UIModule { }
