import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private snackbarService: MatSnackBar) {}

  showNotification(displayMessage: string, className: string) {
    this.snackbarService.open(displayMessage, undefined, {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: className
    });
  }
}
