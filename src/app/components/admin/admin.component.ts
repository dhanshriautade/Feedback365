import { Component, OnInit, ViewChildren, QueryList, ElementRef, AfterViewInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, FormBuilder} from '@angular/forms';
import { AuthService } from 'src/app/components/services/auth.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  @ViewChildren("checkboxes") checkboxes: QueryList<ElementRef>;

  results : string[];
  text: string;
  id;
  data;
  name;
  term;
  designation;
  empid;
  EventTo;
  DataFormArray: Array<any> = [];
  DataIdFormArray: Array<any> = [];
  DataFormArrayselect: Array<any> = [];
  DataIdFormArrayselect: Array<any> = [];
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
  spinner = false;
  EventToselect;
  adminForm: any;
  optradio=null;
  submitted: boolean;
 EventToIdselect;
 dataInfoFromcopy;
 isActive;
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
      this.DataFormArrayselect.push(email);
      this.DataIdFormArrayselect.push(id);
    } else {
      let index = this.DataFormArrayselect.indexOf(email);
      let indexid = this.DataIdFormArrayselect.indexOf(id);
      this.DataFormArrayselect.splice(index,1);
      this.DataIdFormArrayselect.splice(indexid,1);
    }  

      }

    
      onChangeRadio(name:string, id){
        this.EventToselect = name;
        this.EventToIdselect= id;
     
      }
      Reset(){
       this.isActive = null;
       this.checkboxes.forEach((element) => {
        element.nativeElement.checked = false;
      });
      this.EventTo = null;
      this.EventToId = null;
      this.DataFormArray = null;
      this.DataIdFormArray =  null;
     this.EventToselect = null;
      this.EventToIdselect =null;
      // this.DataFormArrayselect = null;
      // this.DataIdFormArrayselect = null;
      
      }

      AddMenu(){
        this.EventTo = null;
        this.EventTo = this.EventToselect;
        this.EventToId = this.EventToIdselect;
        this.DataFormArray = this.DataFormArrayselect;
        this.DataIdFormArray =  this.DataIdFormArrayselect;
      }
      Resetform(){
        this.EventTo = null;
        this.EventToId = null;
        this.DataFormArray = null;
        this.DataIdFormArray =  null;
     
      }
      Add(){ 
        this.spinner =true;    
       this.CreateNewEvent = [{
            "toEmpId" : this.EventToId,
            "fromEmpId":this.DataIdFormArray,
            "dueDate" : this.DueDate,
            "formStatus" : "Completed"
       }];
     console.log('datasent',this.CreateNewEvent);
     this.AuthService.SentEvent(this.CreateNewEvent).subscribe(res => {  
      this.spinner =false;
     })
        }

  CloseEvent(){
    this.CreateEvent= false;
    this.EventList = true;
    this.AuthService.GetEvent().subscribe(res => {
      this.data =res;
     
    })
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

