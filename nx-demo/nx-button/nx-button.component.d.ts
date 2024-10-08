import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class NxButtonComponent {
    label: string;
    styleClass: 'danger' | 'success' | 'warning';
    onClick: EventEmitter<void>;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<NxButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NxButtonComponent, "nx-button", never, { "label": { "alias": "label"; "required": false; }; "styleClass": { "alias": "styleClass"; "required": false; }; }, { "onClick": "onClick"; }, never, never, true, never>;
}
