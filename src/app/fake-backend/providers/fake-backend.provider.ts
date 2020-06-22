import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { FakeBackendInterceptor } from '../interceptors/fake-backend.interceptor';

export const fakeBackendProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true
};
