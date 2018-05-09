import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { AccountProvider, TokenResponse } from './account.provider';
import { AuthenticationModel } from '../models/authentication.model';

describe('LoginProvider', () => {
  let injector: TestBed;
  let service: AccountProvider;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AccountProvider]
    });
    injector = getTestBed();
    service = injector.get(AccountProvider);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should return an Observable<TokenResponse> from Authenticate()', () => {
    const dummyTokenResponse: TokenResponse = {
      access_token: 'SOD0r6ZwrZVGdOCns6zcyzQbH6ulMM_dRQ1Z6WJtokEpXQtYJaj6vDZvAb',
      token_type: 'bearer',
      expires_in: 1209599,
      userName: 'John Doe',
      issued: 'Tue, 26 Dec 2017 17:23:49 GMT',
      expires: 'Tue, 09 Jan 2018 17:23:49 GMT'
    };

    const user: AuthenticationModel = new AuthenticationModel();
    user.username = 'John Doe';
    user.password = 'Ab123456';

    service.Authenticate(user).subscribe(response => {
      expect(response).toEqual(dummyTokenResponse);
    });

    const req = httpMock.expectOne(`${service.routes.getToken}`);
    expect(req.request.method).toBe('POST');
    req.flush(dummyTokenResponse);
  });
});
