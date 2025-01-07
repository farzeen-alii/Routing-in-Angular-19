import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-query-fragment',
  imports: [FormsModule, RouterModule],
  templateUrl: './query-fragment.component.html',
  styleUrl: './query-fragment.component.css'
})
export class QueryFragmentComponent implements OnInit {
  userName: string = '';
  nameFromQuery: string | null = null;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
      this,this.route.queryParamMap.subscribe((params) => {
        this.nameFromQuery = params.get('name');
      });

      this.route.fragment.subscribe((fragment) => {
        if(fragment){
          document.getElementById(fragment)?.scrollIntoView({ behavior: 'smooth'});
        }
      })
  }

  setName(){
    this.router.navigate(['/query-fragment'], {queryParams: {name: this.userName}})
  }

}
