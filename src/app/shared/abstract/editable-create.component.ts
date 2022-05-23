import {FormGroup} from "@angular/forms";

export abstract class EditableCreateComponent {

    private editMode: boolean = false;
    private readonly editPredicate: string;
    private readonly form: FormGroup;
    private editingId: string = "";

    protected constructor(editPredicate: string, form: FormGroup) {
        this.editPredicate = editPredicate;
        this.form = form;
    }

    public checkEditMode(url: string) {
        this.editMode = url.includes(this.editPredicate);
    }

    public hasEditMode(): boolean {
        return this.editMode;
    }

    public setEditingId(id: string): void {
        this.editingId = id;
    }

    public getEditingId(): string {
        return this.editingId;
    }

    public getForm(): FormGroup {
        return this.form;
    }

    public patchFormValues(editableItem: any) {
        this.getForm().patchValue(editableItem);
        this.setEditingId(editableItem.id);
    }

}