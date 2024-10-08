import { CommonModule } from '@angular/common';
import { Component, effect, Input, } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../services/alert.service";
import * as i2 from "@angular/common";
export class NxAlertComponent {
    alertService;
    alert;
    clearTimeout;
    timer = 5000;
    constructor(alertService) {
        this.alertService = alertService;
        this.alert = this.alertService.alert;
        effect(() => {
            if (this.alert()) {
                this.clearTimeout = setTimeout(() => this.close(), this.timer); // Auto close after 5 seconds
            }
        });
    }
    ngOnInit() { }
    ngOnDestroy() {
        if (this.clearTimeout) {
            clearTimeout(this.clearTimeout);
        }
    }
    close() {
        this.alertService.clear();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.7", ngImport: i0, type: NxAlertComponent, deps: [{ token: i1.AlertService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.7", type: NxAlertComponent, isStandalone: true, selector: "nx-alert", inputs: { timer: "timer" }, ngImport: i0, template: "<div *ngIf=\"alert()\" class=\"alert alert-{{ alert()?.type }}\" role=\"alert\">\r\n  {{ alert()?.message }}\r\n  <button type=\"button\" class=\"close\" (click)=\"close()\">&times;</button>\r\n</div>\r\n", styles: [".alert{position:fixed;top:20px;right:20px;max-width:350px;padding:15px 20px;border-radius:4px;box-shadow:0 4px 6px #0000001a;display:flex;align-items:center;justify-content:space-between;animation:slideIn .5s ease-out;z-index:1000}.alert-success{background-color:#d4edda;color:#155724;border:1px solid #c3e6cb}.alert-danger{background-color:#f8d7da;color:#721c24;border:1px solid #f5c6cb}.alert-warning{background-color:#fff3cd;color:#856404;border:1px solid #ffeeba}.alert .close{background:none;border:none;color:inherit;font-size:1.5rem;line-height:1;padding:0;margin-left:15px;cursor:pointer;opacity:.5;transition:opacity .2s}.alert .close:hover{opacity:1}@keyframes slideIn{0%{transform:translate(100%);opacity:0}to{transform:translate(0);opacity:1}}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.7", ngImport: i0, type: NxAlertComponent, decorators: [{
            type: Component,
            args: [{ selector: 'nx-alert', standalone: true, imports: [CommonModule], template: "<div *ngIf=\"alert()\" class=\"alert alert-{{ alert()?.type }}\" role=\"alert\">\r\n  {{ alert()?.message }}\r\n  <button type=\"button\" class=\"close\" (click)=\"close()\">&times;</button>\r\n</div>\r\n", styles: [".alert{position:fixed;top:20px;right:20px;max-width:350px;padding:15px 20px;border-radius:4px;box-shadow:0 4px 6px #0000001a;display:flex;align-items:center;justify-content:space-between;animation:slideIn .5s ease-out;z-index:1000}.alert-success{background-color:#d4edda;color:#155724;border:1px solid #c3e6cb}.alert-danger{background-color:#f8d7da;color:#721c24;border:1px solid #f5c6cb}.alert-warning{background-color:#fff3cd;color:#856404;border:1px solid #ffeeba}.alert .close{background:none;border:none;color:inherit;font-size:1.5rem;line-height:1;padding:0;margin-left:15px;cursor:pointer;opacity:.5;transition:opacity .2s}.alert .close:hover{opacity:1}@keyframes slideIn{0%{transform:translate(100%);opacity:0}to{transform:translate(0);opacity:1}}\n"] }]
        }], ctorParameters: () => [{ type: i1.AlertService }], propDecorators: { timer: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibngtYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbngtZGVtby9zcmMvbngtYWxlcnQvbngtYWxlcnQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vcHJvamVjdHMvbngtZGVtby9zcmMvbngtYWxlcnQvbngtYWxlcnQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFDTCxTQUFTLEVBQ1QsTUFBTSxFQUVOLEtBQUssR0FHTixNQUFNLGVBQWUsQ0FBQzs7OztBQVV2QixNQUFNLE9BQU8sZ0JBQWdCO0lBS1A7SUFKcEIsS0FBSyxDQUFNO0lBQ0gsWUFBWSxDQUFNO0lBQ2pCLEtBQUssR0FBVyxJQUFJLENBQUM7SUFFOUIsWUFBb0IsWUFBMEI7UUFBMUIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDNUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztRQUNyQyxNQUFNLENBQUMsR0FBRyxFQUFFO1lBQ1YsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQztnQkFDakIsSUFBSSxDQUFDLFlBQVksR0FBRyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLDZCQUE2QjtZQUMvRixDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsUUFBUSxLQUFJLENBQUM7SUFFYixXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDdEIsWUFBWSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNsQyxDQUFDO0lBQ0gsQ0FBQztJQUVELEtBQUs7UUFDSCxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzVCLENBQUM7dUdBeEJVLGdCQUFnQjsyRkFBaEIsZ0JBQWdCLGdHQ2xCN0IsOE1BSUEsOHlCRFVZLFlBQVk7OzJGQUlYLGdCQUFnQjtrQkFQNUIsU0FBUzsrQkFDRSxVQUFVLGNBQ1IsSUFBSSxXQUNQLENBQUMsWUFBWSxDQUFDO2lGQU9kLEtBQUs7c0JBQWIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIGVmZmVjdCxcclxuICBJbmplY3QsXHJcbiAgSW5wdXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWxlcnRTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvYWxlcnQuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ254LWFsZXJ0JyxcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9ueC1hbGVydC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmw6ICcuL254LWFsZXJ0LmNvbXBvbmVudC5zY3NzJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIE54QWxlcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgYWxlcnQ6IGFueTtcclxuICBwcml2YXRlIGNsZWFyVGltZW91dDogYW55O1xyXG4gIEBJbnB1dCgpIHRpbWVyOiBudW1iZXIgPSA1MDAwO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFsZXJ0U2VydmljZTogQWxlcnRTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLmFsZXJ0ID0gdGhpcy5hbGVydFNlcnZpY2UuYWxlcnQ7XHJcbiAgICBlZmZlY3QoKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5hbGVydCgpKSB7XHJcbiAgICAgICAgdGhpcy5jbGVhclRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMuY2xvc2UoKSwgdGhpcy50aW1lcik7IC8vIEF1dG8gY2xvc2UgYWZ0ZXIgNSBzZWNvbmRzXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7fVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIGlmICh0aGlzLmNsZWFyVGltZW91dCkge1xyXG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5jbGVhclRpbWVvdXQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2xvc2UoKSB7XHJcbiAgICB0aGlzLmFsZXJ0U2VydmljZS5jbGVhcigpO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2ICpuZ0lmPVwiYWxlcnQoKVwiIGNsYXNzPVwiYWxlcnQgYWxlcnQte3sgYWxlcnQoKT8udHlwZSB9fVwiIHJvbGU9XCJhbGVydFwiPlxyXG4gIHt7IGFsZXJ0KCk/Lm1lc3NhZ2UgfX1cclxuICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgKGNsaWNrKT1cImNsb3NlKClcIj4mdGltZXM7PC9idXR0b24+XHJcbjwvZGl2PlxyXG4iXX0=