import { Component, OnInit } from '@angular/core';
import { NavBarServiceService } from '../../services/nav-bar-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public navservice: NavBarServiceService) { }

  ngOnInit(): void {
    this.navservice.show();
  }

}
