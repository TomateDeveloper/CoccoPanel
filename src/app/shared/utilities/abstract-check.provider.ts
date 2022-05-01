import {Directive, EventEmitter, Input, Output} from "@angular/core";

@Directive()
export abstract class AbstractCheckProvider {

    @Output() public deleteAction: EventEmitter<void> = new EventEmitter<void>();
    @Output() public selectionUpdate: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Input() public selectedAll: boolean = false;

    public updateSelection(event: any): void {
        this.selectedAll = event;
        this.selectionUpdate.emit(this.selectedAll);
    }

}