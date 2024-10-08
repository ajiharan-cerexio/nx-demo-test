import { OnDestroy, OnInit } from '@angular/core';
import { AlertService } from '../services/alert.service';
import * as i0 from "@angular/core";
export declare class NxAlertComponent implements OnInit, OnDestroy {
    private alertService;
    alert: any;
    private clearTimeout;
    timer: number;
    constructor(alertService: AlertService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    close(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NxAlertComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NxAlertComponent, "nx-alert", never, { "timer": { "alias": "timer"; "required": false; }; }, {}, never, never, true, never>;
}
