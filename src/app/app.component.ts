import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterModule,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isDashboardRoute = false;
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
}
