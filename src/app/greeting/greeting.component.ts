import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-greeting',
  imports: [],
  templateUrl: './greeting.component.html',
  styleUrl: './greeting.component.css'
})
export class GreetingComponent implements OnInit {
  userName: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
      this.userName = this.route.snapshot.paramMap.get('name')!;
  }
}
