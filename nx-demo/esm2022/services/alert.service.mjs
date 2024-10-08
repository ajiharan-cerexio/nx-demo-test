import { computed, Injectable, signal } from '@angular/core';
import * as i0 from "@angular/core";
export class AlertService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL254LWRlbW8vc3JjL3NlcnZpY2VzL2FsZXJ0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQVU3RCxNQUFNLE9BQU8sWUFBWTtJQUNmLFdBQVcsR0FBRyxNQUFNLENBQWdCLElBQUksQ0FBQyxDQUFDO0lBRTNDLEtBQUssR0FBRyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7SUFFbEQsZ0JBQWUsQ0FBQztJQUVoQixTQUFTLENBQUMsS0FBYTtRQUNyQixJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7dUdBYlUsWUFBWTsyR0FBWixZQUFZLGNBRlgsTUFBTTs7MkZBRVAsWUFBWTtrQkFIeEIsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21wdXRlZCwgSW5qZWN0YWJsZSwgc2lnbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElBbGVydCB7XHJcbiAgdHlwZTogJ3N1Y2Nlc3MnIHwgJ2luZm8nIHwgJ3dhcm5pbmcnIHwgJ2Rhbmdlcic7XHJcbiAgbWVzc2FnZTogc3RyaW5nO1xyXG59XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWxlcnRTZXJ2aWNlIHtcclxuICBwcml2YXRlIGFsZXJ0U2lnbmFsID0gc2lnbmFsPElBbGVydCB8IG51bGw+KG51bGwpO1xyXG5cclxuICBwdWJsaWMgYWxlcnQgPSBjb21wdXRlZCgoKSA9PiB0aGlzLmFsZXJ0U2lnbmFsKCkpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIHNob3dBbGVydChhbGVydDogSUFsZXJ0KTogdm9pZCB7XHJcbiAgICB0aGlzLmFsZXJ0U2lnbmFsLnNldChhbGVydCk7XHJcbiAgfVxyXG5cclxuICBjbGVhcigpIHtcclxuICAgIHRoaXMuYWxlcnRTaWduYWwuc2V0KG51bGwpO1xyXG4gIH1cclxufVxyXG4iXX0=