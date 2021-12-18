import { Component, OnInit } from '@angular/core';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
clientDetails:any={}
  constructor(private details:ClientsService) { }

  getDetails(){
    this.details.clientDetails().subscribe((data:any)=>{
      console.log(data)
      this.clientDetails=data;
      console.log("address::",this.clientDetails);
    })
  }

  ngOnInit(): void {
    this.getDetails();
  }

}
