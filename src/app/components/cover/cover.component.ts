import { Component, OnInit } from '@angular/core';
import { NavBarServiceService } from '../../services/nav-bar-service.service';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.css']
})
export class CoverComponent implements OnInit {

  constructor(public navbarService: NavBarServiceService) { }

  ngOnInit(): void {
    this.navbarService.hide();
    document.body.classList.add('bg-img');
  }

}
