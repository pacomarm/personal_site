import { Component, OnInit } from '@angular/core';
import { NavBarServiceService } from '../../services/nav-bar-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public navservice: NavBarServiceService) { }

  ngOnInit(): void {
    this.navservice.show();
  }

}
