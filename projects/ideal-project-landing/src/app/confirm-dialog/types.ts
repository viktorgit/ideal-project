import { AbstractControl } from "@angular/forms";

export interface IDialogData {
    controls?: {
        [key: string]: AbstractControl;
    },
    label: string;
}