import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-credit-card-dialog',
  templateUrl: './add-credit-card-dialog.component.html',
  styleUrls: ['./add-credit-card-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddCreditCardDialogComponent {

  constructor(private dialogRef: MatDialogRef<AddCreditCardDialogComponent>) {}

  submitted(creditCard): void {
    this.dialogRef.close( { creditCard });
  }

  canceled(): void {
    this.dialogRef.close( { creditCard: null });
  }
}
