import { Component, OnInit } from '@angular/core';
import { NavBarServiceService } from '../../services/nav-bar-service.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor(public navservice: NavBarServiceService) { }

  ngOnInit(): void {
    this.navservice.show();
  }

}
