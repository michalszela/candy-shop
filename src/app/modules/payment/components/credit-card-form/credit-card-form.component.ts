import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { CreditCardsData } from '../../../../core/consts/credit-card-data.const';
import { CustomValidators } from '../../../../core/validators/custom-validators';
import { untilDestroyed, UntilDestroy } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-credit-card-form',
  templateUrl: './credit-card-form.component.html',
  styleUrls: ['./credit-card-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreditCardFormComponent implements OnInit {

  @Output()
  submitted = new EventEmitter<any>();
  @Output()
  canceled = new EventEmitter<boolean>();
  form: FormGroup;
  creditCards = Object.values(CreditCardsData);

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.buildForm();

    this.form.get('type').valueChanges
    .pipe(
      untilDestroyed(this),
    )
    .subscribe(() => {
      this.form.get('cardNumber').updateValueAndValidity();
      this.form.get('cvv').updateValueAndValidity();
    });
  }

  onSubmit(): void {
    if (!this.form.valid) {
      return;
    }

    this.submitted.emit(this.form.value);
  }

  onCancel(): void {
    this.canceled.emit(true);
  }

  private buildForm(): FormGroup {
    return this.fb.group({
      type: ['',
        [
          Validators.required
        ]
      ],
      cardNumber: ['',
        [
          Validators.required,
          CustomValidators.creditCardNumber({ creditCardNameField: 'type' })
        ]
      ],
      cvv: ['',
        [
          Validators.required,
          CustomValidators.creditCardCvv({ creditCardNameField: 'type' })
        ]
      ],
      nameOnCard: ['',
        [
          Validators.required,
          Validators.maxLength(30)
        ]
      ],
      expirationDate: ['',
        [
          Validators.required,
          CustomValidators.creditCardExpirationDate()
        ]
      ],
    });
  }
}
