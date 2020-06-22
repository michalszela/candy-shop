import { Component, Inject, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-success-dialog',
  templateUrl: './success-dialog.component.html',
  styleUrls: ['./success-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SuccessDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<SuccessDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { title?: string, message?: string }
  ) {
    this.data = this.data || {};
  }

  close() {
    this.dialogRef.close();
  }
}
