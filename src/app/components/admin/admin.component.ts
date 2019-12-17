import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, FormBuilder} from '@angular/forms';
import { AuthService } from 'src/app/components/services/auth.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  results : string[];
  text: string;
  id;
  data;
  name;
  designation;
  empid;
  EventTo;
  DataFormArray: Array<any> = [];
  DataIdFormArray: Array<any> = [];
  config: any;
  configer: any;
  configerfrom: any;
  display: boolean = false;
  CreateEvent = false;
  contentEditable;
  EventList = true;
  EventToId;
  DueDate;
  info;
  CreateNewEvent;
  totalvalue;
  dataInfoFrom;
  dataInfoSent;
  constructor(public AuthService: AuthService) {
    this.name = localStorage.getItem('name');
    this.designation= localStorage.getItem('Designation');
    this.empid = localStorage.getItem('id');
    this.AuthService.GetTotalEvent().subscribe(res => {
      this.totalvalue = res;
      // console.log('lsist', this.totalvalue);
    })
  
    this.AuthService.GetAllEmployee().subscribe(res => {
      this.dataInfoFrom = res;
      this.dataInfoSent =res;
      this.configer = {
        itemsPerPage: 3,
        currentPage: 1,
        totalItems: this.dataInfoSent.count
      };
      this.configerfrom = {
        itemsPerPage: 3,
        currentPage: 1,
        totalItems: this.dataInfoFrom.count
      };
     
    })

   
   }
   pageChanged(event){
    this.config.currentPage = event;
  }
  pageChangedsent(event){
    this.configer.currentPage = event;
  }
  pageChangedfrom(event){
    this.configerfrom.currentPage = event;
  }
 
 
  toggleEditable(event) {
      if ( event.target.checked ) {
        this.contentEditable = true;
   }
}

  OpenEvent(){
    this.CreateEvent= true;
    this.EventList = false;

    this.AuthService.GetEvent().subscribe(res => {
      this.data =res;
       this.config = {
       itemsPerPage: 5,
       currentPage: 1,
       totalItems: this.data.count
     };
    })
    
  }


  onChange(email:string, id , isChecked: boolean) {
   
    if(isChecked) {
      this.DataFormArray.push(email);
      this.DataIdFormArray.push(id);
    } else {
      let index = this.DataFormArray.indexOf(email);
      let indexid = this.DataIdFormArray.indexOf(id);
      this.DataFormArray.splice(index,1);
      this.DataIdFormArray.splice(indexid,1);
    }  

      }

    
      onChangeRadio(name:string, id){
        this.EventTo = name;
        this.EventToId= id;
     
      }
      Add(){     
       this.CreateNewEvent = [{
            "toEmpId" : this.EventToId,
            "fromEmpId":this.DataIdFormArray,
            "dueDate" : this.DueDate,
       }];
     console.log('datasent',this.CreateNewEvent);
     this.AuthService.SentEvent(this.CreateNewEvent).subscribe(res => {  

     })

      }

  CloseEvent(){
    this.CreateEvent= false;
    this.EventList = true;
  }

  showDialog(id) {
     this.data = {
      "empId":  id
    }
    this.AuthService.ProfileInfo(this.data).subscribe(res => {  
      this.info = res;
    })
    this.display = true;
}



  ngOnInit() {
    this.AuthService.GetEvent().subscribe(res => {
      this.data =res;
     this.config = {
       itemsPerPage: 5,
       currentPage: 1,
       totalItems: this.data.count
     };
    })

    
  }

}
