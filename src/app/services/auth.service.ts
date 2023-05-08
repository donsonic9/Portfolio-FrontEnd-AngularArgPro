import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider } from '@angular/fire/auth';
import { getIdTokenResult } from '@firebase/auth';


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

  setToken(token: string) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    currentUser.token = token;
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
  }
  

  loginWithGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider())
      .then((result) => {
        // Refresh the user's token
        return result.user.getIdToken(true)
          .then((token) => {
            // Update user's authentication state with new token
            this.auth.currentUser?.getIdTokenResult()
              .then((idTokenResult) => {
                idTokenResult.token = token;
                localStorage.setItem('currentUser', JSON.stringify(idTokenResult));
              });
            return token;
          });
      });
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

  isUserLoggedInWithEmailAndPassword(): boolean {
    return !!(this.auth.currentUser?.email === "alexrepollo@outlook.com");
  }

  isUserLoggedInWithGoogle(): boolean {
    return !!(this.auth.currentUser?.email !== "alexrepollo@outlook.com");
  }
  

  //get info from user logged.
  getUserLogged() {
    return this.auth.currentUser;
  }
}
