import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    isAuthenticated: boolean;

    constructor() {
        this.isAuthenticated = !!this.getToken();
    }

    saveToken(token: string): void {
        localStorage.setItem('token', token);
        this.isAuthenticated = (!!token);
    }

    getToken(): string {
        const token = localStorage.getItem('token');
        this.isAuthenticated = (!!token);

        return token;
    }

    logout(): void {
        this.isAuthenticated = false;
        localStorage.removeItem('token');
    }
}
