import * as i0 from "@angular/core";
export interface IAlert {
    type: 'success' | 'info' | 'warning' | 'danger';
    message: string;
}
export declare class AlertService {
    private alertSignal;
    alert: import("@angular/core").Signal<IAlert | null>;
    constructor();
    showAlert(alert: IAlert): void;
    clear(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlertService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AlertService>;
}
