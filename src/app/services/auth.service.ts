import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth) { }

  register({email, password}: any) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  login({email, password}: any) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  loginWithGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  logout() {
    return signOut(this.auth);
  }

  // This method sets up an event listener that detects when the user moves the mouse, and records the timestamp of the last activity. If the time since the last activity exceeds the timeout, it logs out the user.
  autoLogoutAfterInactivity() {
    const inactivityTimeout = 30 * 60 * 1000; // 30 minutes
  
    this.auth.onAuthStateChanged(user => {
      if (user) {
        let userLastActivity = new Date().getTime();
  
        setInterval(() => {
          const timeSinceLastActivity = new Date().getTime() - userLastActivity;
          if (timeSinceLastActivity > inactivityTimeout) {
            this.logout();
          }
        }, 1000);
  
        document.addEventListener('mousemove', () => {
          userLastActivity = new Date().getTime();
        });
      }
    });
  }
  
  
}
