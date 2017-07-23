import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  constructor( private router:Router ) { }

  ngOnInit() {
  }

  searchHeroe( search_term:string ) {
    // console.log(search_term);
    this.router.navigate( ['/search',search_term] );
  }

}
