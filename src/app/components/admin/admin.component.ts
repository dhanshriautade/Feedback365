import { Component, OnInit, ViewChildren, QueryList, ElementRef, AfterViewInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, FormBuilder} from '@angular/forms';
import { AuthService } from 'src/app/components/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { VirtualTimeScheduler } from 'rxjs';
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
  temp: Array<any> = [];
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
  constructor(public AuthService: AuthService,private toastr: ToastrService) {
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


  onChange(name:string, id , isChecked: boolean) {   
    if(isChecked) {
      this.DataFormArrayselect.push(name);
      this.DataIdFormArrayselect.push(id);
    } else {
      let index = this.DataFormArrayselect.indexOf(name);
      let indexid = this.DataIdFormArrayselect.indexOf(id);
      this.DataFormArrayselect.splice(index,1);
      this.DataIdFormArrayselect.splice(indexid,1);
    }  

      }

    
      onChangeRadio(name:string, id){
        console.log('from_list',this.dataInfoFrom);
         this.dataInfoFrom = this.dataInfoFrom;
        this.temp = [];
        this.EventToselect = name;
        this.EventToIdselect= id;
        


        for(var i=0;i<this.dataInfoSent.length;i++){
          if(this.id==this.dataInfoSent[i].id){
              this.dataInfoSent.splice(this.dataInfoSent[i],1);
          }
          else{

          }
        }
        
        console.log('change list', this.dataInfoSent);
     

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
       this.DataFormArrayselect = null;
       this.DataIdFormArrayselect = null;
      
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
     this.AuthService.SentEvent(this.CreateNewEvent).subscribe(res => {  
      this.spinner =false;
      this.toastr.success('Successfully Created Event !!!');
      this.EventTo = null;
      this.EventToId = null;
      this.DataFormArray = null;
      this.DataIdFormArray =  null;
           })
           this.checkboxes.forEach((element) => {
            element.nativeElement.checked = false;
          });


          this.DataFormArray=[];
          this.DataIdFormArrayselect = [];
          this.DataIdFormArray=[];
          this.DataFormArrayselect=[];
          this.DueDate = '';
         
        }

  CloseEvent(){
    this.CreateEvent= false;
    this.EventList = true;
    this.AuthService.GetEvent().subscribe(res => {
      this.data =res;
     
    })
    this.AuthService.GetTotalEvent().subscribe(res => {
      this.totalvalue = res;
      // console.log('lsist', this.totalvalue);
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

