import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AlertService, NxAlertComponent, NxButtonComponent } from 'nx-demo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NxButtonComponent, NxAlertComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [AlertService],
})
export class AppComponent {
  title = 'nx-demo-test';

  constructor(private alertService: AlertService) {}

  onClick(): void {
    this.alertService.showAlert({
      type: 'success',
      message: 'Success ful',
    });
  }
}
