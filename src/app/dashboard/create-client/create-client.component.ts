import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CreateClientService } from 'src/app/services/create-client.service';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.scss']
})
export class CreateClientComponent implements OnInit {
  myReactiveForm:FormGroup;

  constructor(private client:CreateClientService,private toastr:ToastrService) { 
    this.myReactiveForm = new FormGroup({
      'client_name':new FormControl(null,Validators.required),
      'company_name':new FormControl(null,[Validators.required]),
      'client_code':new FormControl(null,[Validators.required]),
      'email':new FormControl(null,[Validators.required,Validators.email,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      
      'mobile':new FormControl(null,[Validators.required,Validators.minLength(10),Validators.maxLength(15),Validators.pattern('^-?[0-9]\\d*(\\.\\d{1,2})?$')]),
     
    });
  }

  onSubmit(){
    this.toastr.success("Data Inserted Successfully");
    console.log(this.myReactiveForm.value)
    this.client.createClient(this.myReactiveForm.value).subscribe((data) =>{
      console.log(data);
      // this.toastr.success(data.message);
  })
}


  onlyNumeric(event:any):boolean{
    const charcode=(event.which)?event.which:event.keycode;
    if(charcode > 31 && (charcode < 48 || charcode > 57)){
      return false;
    }
    return true;
  }

  ngOnInit(): void {
  }

}
