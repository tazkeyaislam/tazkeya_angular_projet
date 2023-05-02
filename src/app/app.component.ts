import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'workspace';
  constructor(private snackBar: MatSnackBar) { }
  showAlert() { 
    // alert("hello");
    this.snackBar.open('This is an alert message', 'Dismiss', {
    duration: 3000,
    });
  }
}
