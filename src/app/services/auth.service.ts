import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    login(user: { username: string, password: string}): Promise<{ token: string }> {
        console.log('user ==>', user);
        const p = new Promise<{ token: string }>((resolve) => {
            setTimeout(() => {
                resolve({ token: `token ${Math.random() * 100}`});
            }, 1000);
        });

        return p;
    }

    isAuthenticated() {
        if (localStorage.getItem('token')) {
            return true;
        }

        return false;
    }
}