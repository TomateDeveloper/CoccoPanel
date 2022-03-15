import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './components/logo/logo.component';
import { SwitchComponent } from './components/switch/switch.component';



@NgModule({
    declarations: [
        LogoComponent,
        SwitchComponent
    ],
    exports: [
        LogoComponent,
        SwitchComponent
    ],
    imports: [
        CommonModule
    ]
})
export class UIModule { }
