import { AuthService } from './auth.service';

describe('AuthService', () => {
    let service: AuthService;

    beforeEach(() => {
        service = new AuthService();
    });

    afterEach(() => {
        service = null;
        localStorage.removeItem('token');
    });

    it('should return true from isAuthenticated when there is a token', () => {
        service.saveToken('152698');
        expect(service.isAuthenticated).toBeTruthy();
    });

    it('should saveToken() save the token', () => {
        service.saveToken('cnkdjcodc298ed2hfd982yde');
        expect(service.getToken()).toBeDefined();
    });

    it('should return the token from getToken', () => {
        localStorage.setItem('token', '123456');
        expect(service.getToken()).toBeDefined();
    });

    it('should return false from isAuthenticated when there is no token', () => {
        expect(service.isAuthenticated).toBeFalsy();
    });
});
