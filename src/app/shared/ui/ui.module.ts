import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LogoComponent} from './components/layout/logo/logo.component';
import {SwitchComponent} from './components/button/switch/switch.component';
import {ProfileIndicatorComponent} from './components/layout/profile-indicator/profile-indicator.component';
import {BurgerComponent} from './components/layout/burger/burger.component';
import {IconActionableComponent} from './components/button/icon-actionable/icon-actionable.component';
import {FloatingMenuComponent} from './components/layout/floating-menu/floating-menu.component';
import {BreadcrumbComponent} from './components/layout/breadcrumb/breadcrumb.component';
import {InputComponent} from './components/form/input/input.component';
import {CheckboxComponent} from './components/form/checkbox/checkbox.component';
import {AvatarUpdateComponent} from './components/layout/avatar-update/avatar-update.component';
import {InfoModalComponent} from './components/modal/info-modal/info-modal.component';
import {TableFiltersComponent} from './components/table-filters/table-filters.component';
import {ModalConfirmComponent} from './components/modal/modal-confirm/modal-confirm.component';
import { BiSelectorComponent } from './components/button/bi-selector/bi-selector.component';


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
        TableFiltersComponent,
        ModalConfirmComponent,
        BiSelectorComponent,
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
        InfoModalComponent,
        TableFiltersComponent,
        ModalConfirmComponent,
        BiSelectorComponent
    ],
    imports: [
        CommonModule
    ]
})
export class UIModule { }
