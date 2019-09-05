import { Component, OnInit } from '@angular/core';
import { DashService } from '../service/dash.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
name:string;
  constructor(private s: DashService) { }

  ngOnInit() {
   
      // this.name=this.s.listusers();
      
  }


}
