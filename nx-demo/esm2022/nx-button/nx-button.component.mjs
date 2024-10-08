import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
export class NxButtonComponent {
    label;
    styleClass;
    onClick = new EventEmitter();
    constructor() { }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.7", ngImport: i0, type: NxButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.7", type: NxButtonComponent, isStandalone: true, selector: "nx-button", inputs: { label: "label", styleClass: "styleClass" }, outputs: { onClick: "onClick" }, ngImport: i0, template: "<button\r\n  (click)=\"onClick.emit()\"\r\n  [class]=\"'btn border-round-sm border-none p-2 ' + styleClass\"\r\n>\r\n  {{ label }}\r\n</button>\r\n", styles: [".btn{background-color:#5474dc;color:#fff;cursor:pointer}.danger{background-color:#e14545}.success{background-color:#43a070}.warning{background-color:#d9d245}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.7", ngImport: i0, type: NxButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'nx-button', standalone: true, imports: [CommonModule], template: "<button\r\n  (click)=\"onClick.emit()\"\r\n  [class]=\"'btn border-round-sm border-none p-2 ' + styleClass\"\r\n>\r\n  {{ label }}\r\n</button>\r\n", styles: [".btn{background-color:#5474dc;color:#fff;cursor:pointer}.danger{background-color:#e14545}.success{background-color:#43a070}.warning{background-color:#d9d245}\n"] }]
        }], ctorParameters: () => [], propDecorators: { label: [{
                type: Input
            }], styleClass: [{
                type: Input
            }], onClick: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibngtYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL254LWRlbW8vc3JjL254LWJ1dHRvbi9ueC1idXR0b24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vcHJvamVjdHMvbngtZGVtby9zcmMvbngtYnV0dG9uL254LWJ1dHRvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFTdkUsTUFBTSxPQUFPLGlCQUFpQjtJQUNuQixLQUFLLENBQVU7SUFDZixVQUFVLENBQW9DO0lBQzdDLE9BQU8sR0FBdUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUUzRCxnQkFBZSxDQUFDO3VHQUxMLGlCQUFpQjsyRkFBakIsaUJBQWlCLDRKQ1Y5QixxSkFNQSx3TkRBWSxZQUFZOzsyRkFJWCxpQkFBaUI7a0JBUDdCLFNBQVM7K0JBQ0UsV0FBVyxjQUNULElBQUksV0FDUCxDQUFDLFlBQVksQ0FBQzt3REFLZCxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csVUFBVTtzQkFBbEIsS0FBSztnQkFDSSxPQUFPO3NCQUFoQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbngtYnV0dG9uJyxcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9ueC1idXR0b24uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsOiAnLi9ueC1idXR0b24uY29tcG9uZW50LnNjc3MnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnhCdXR0b25Db21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGxhYmVsITogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHN0eWxlQ2xhc3MhOiAnZGFuZ2VyJyB8ICdzdWNjZXNzJyB8ICd3YXJuaW5nJztcclxuICBAT3V0cHV0KCkgb25DbGljazogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcbn1cclxuIiwiPGJ1dHRvblxyXG4gIChjbGljayk9XCJvbkNsaWNrLmVtaXQoKVwiXHJcbiAgW2NsYXNzXT1cIididG4gYm9yZGVyLXJvdW5kLXNtIGJvcmRlci1ub25lIHAtMiAnICsgc3R5bGVDbGFzc1wiXHJcbj5cclxuICB7eyBsYWJlbCB9fVxyXG48L2J1dHRvbj5cclxuIl19