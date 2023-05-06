import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-special-hero',
  templateUrl: './special-hero.component.html',
  styleUrls: ['./special-hero.component.css']
})
export class SpecialHeroComponent {

  currentUserIn: any;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    const userIn = this.auth.getUserLogged();
    this.currentUserIn = userIn;
  }

  toMessage() {
    document.getElementById("message")?.scrollIntoView({behavior: 'smooth'});
  }

}
