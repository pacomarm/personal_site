import { Component, OnInit } from '@angular/core';
import { NavBarServiceService } from '../../../services/nav-bar-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public navbarService: NavBarServiceService) { }

  ngOnInit(): void {
  }

}
