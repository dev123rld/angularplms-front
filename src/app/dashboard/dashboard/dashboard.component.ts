import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
// status:any=false;
// currentStyle:any;
// canSave:any='100%';
active:any=false;
  constructor() { }
  onClick(){
    // this.status=true;
    // this.active=true;
    if (this.active==true) { 
      this.active = false; 
    }
    else{
      this.active=true;
    }
// if (this.active = true) { this.active = false; }
  }

  ngOnInit(): void {
  }

}
