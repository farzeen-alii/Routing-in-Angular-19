import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';
import { CookiesComponent } from "./cookies/cookies.component";

@Component({
  selector: 'app-root',
  imports: [RouterModule, RouterOutlet, FormsModule, CookiesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isDashboardRoute = false;

  userName: string = '';

  constructor(private router: Router){
    this.router.events.subscribe((event) => {
      if(event instanceof NavigationEnd){
        this.isDashboardRoute = event.url.startsWith('/dashboard');
      }
    })
  }

  gotToDashboard(){
    this.router.navigate(['/dashboard']);
  }

  navigateToGreeting(){
    if(this.userName.trim()){
      this.router.navigate(['/greeting', this.userName]);
    } else {
      alert('Please enter your name to navigate greetings page');
    }
  }

  isPageNotFound(): boolean{
    return this.router.url === '/page-not-found';
  }

}
