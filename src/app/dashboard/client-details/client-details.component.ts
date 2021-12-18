import { Component, OnInit } from '@angular/core';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.scss']
})
export class ClientDetailsComponent implements OnInit {
userStatus:any;
userRole:any;
courseData:any;
eventData:any;
trainingData:any;
  constructor( private userDetail:ClientsService) { }
  getDetails(){
    this.userDetail.userDetails().subscribe((data:any)=>{
      console.log(data)
      this.userStatus=data;
      console.log("details",this.userStatus);
    })
  }

  getRole(){
    this.userDetail.userTableData().subscribe((data:any)=>{
      console.log(data)
      this.userRole=data;
      console.log("role",this.userRole);
    })
  }

  getCourse(){
    this.userDetail.courseData().subscribe((data:any)=>{
      console.log(data)
      this.courseData=data;
      console.log("course",this.courseData);
    })
  }
  getEvent(){
    this.userDetail.eventData().subscribe((data:any)=>{
      console.log(data)
      this.eventData=data.data;
      
      console.log("event",this.eventData);
    })
  }

  getTraining(){
    this.userDetail.trainingData().subscribe((data:any)=>{
      console.log(data)
      this.trainingData=data;
      console.log("training",this.trainingData);
    })
  }



  ngOnInit(): void {
    this.getDetails();
    this.getRole();
    this.getEvent();
    this.getCourse();
    this.getTraining();

  }

}
