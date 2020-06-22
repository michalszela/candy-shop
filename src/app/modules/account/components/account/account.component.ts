import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '../../interfaces/user';
import { AccountService } from '../../services/account/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountComponent {

  user$: Observable<User>;

  constructor(accountService: AccountService) {
    this.user$ = accountService.user$;
   }
}
