import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from '../auth.guard';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router: Router, private authGuard: AuthGuard){}

  login(){
    this.authGuard.toggleLogin();
    this.router.navigate(['/personal']);
  }
}
