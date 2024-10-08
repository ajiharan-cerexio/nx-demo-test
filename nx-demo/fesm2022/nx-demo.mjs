import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { EventEmitter, Component, Input, Output, signal, computed, Injectable, effect } from '@angular/core';

class NxButtonComponent {
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

/*
 * Public API Surface of nx-demo
 */

class AlertService {
    alertSignal = signal(null);
    alert = computed(() => this.alertSignal());
    constructor() { }
    showAlert(alert) {
        this.alertSignal.set(alert);
    }
    clear() {
        this.alertSignal.set(null);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.7", ngImport: i0, type: AlertService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.7", ngImport: i0, type: AlertService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.7", ngImport: i0, type: AlertService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });

class NxAlertComponent {
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.7", ngImport: i0, type: NxAlertComponent, deps: [{ token: AlertService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.7", type: NxAlertComponent, isStandalone: true, selector: "nx-alert", inputs: { timer: "timer" }, ngImport: i0, template: "<div *ngIf=\"alert()\" class=\"alert alert-{{ alert()?.type }}\" role=\"alert\">\r\n  {{ alert()?.message }}\r\n  <button type=\"button\" class=\"close\" (click)=\"close()\">&times;</button>\r\n</div>\r\n", styles: [".alert{position:fixed;top:20px;right:20px;max-width:350px;padding:15px 20px;border-radius:4px;box-shadow:0 4px 6px #0000001a;display:flex;align-items:center;justify-content:space-between;animation:slideIn .5s ease-out;z-index:1000}.alert-success{background-color:#d4edda;color:#155724;border:1px solid #c3e6cb}.alert-danger{background-color:#f8d7da;color:#721c24;border:1px solid #f5c6cb}.alert-warning{background-color:#fff3cd;color:#856404;border:1px solid #ffeeba}.alert .close{background:none;border:none;color:inherit;font-size:1.5rem;line-height:1;padding:0;margin-left:15px;cursor:pointer;opacity:.5;transition:opacity .2s}.alert .close:hover{opacity:1}@keyframes slideIn{0%{transform:translate(100%);opacity:0}to{transform:translate(0);opacity:1}}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.7", ngImport: i0, type: NxAlertComponent, decorators: [{
            type: Component,
            args: [{ selector: 'nx-alert', standalone: true, imports: [CommonModule], template: "<div *ngIf=\"alert()\" class=\"alert alert-{{ alert()?.type }}\" role=\"alert\">\r\n  {{ alert()?.message }}\r\n  <button type=\"button\" class=\"close\" (click)=\"close()\">&times;</button>\r\n</div>\r\n", styles: [".alert{position:fixed;top:20px;right:20px;max-width:350px;padding:15px 20px;border-radius:4px;box-shadow:0 4px 6px #0000001a;display:flex;align-items:center;justify-content:space-between;animation:slideIn .5s ease-out;z-index:1000}.alert-success{background-color:#d4edda;color:#155724;border:1px solid #c3e6cb}.alert-danger{background-color:#f8d7da;color:#721c24;border:1px solid #f5c6cb}.alert-warning{background-color:#fff3cd;color:#856404;border:1px solid #ffeeba}.alert .close{background:none;border:none;color:inherit;font-size:1.5rem;line-height:1;padding:0;margin-left:15px;cursor:pointer;opacity:.5;transition:opacity .2s}.alert .close:hover{opacity:1}@keyframes slideIn{0%{transform:translate(100%);opacity:0}to{transform:translate(0);opacity:1}}\n"] }]
        }], ctorParameters: () => [{ type: AlertService }], propDecorators: { timer: [{
                type: Input
            }] } });

/*
 * Public API Surface of nx-demo
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AlertService, NxAlertComponent, NxButtonComponent };
//# sourceMappingURL=nx-demo.mjs.map
