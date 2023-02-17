import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/auth/servise/login.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  newForm!:FormGroup
  success:boolean=true
  noSuccesss:boolean=false
  loggin:boolean=true
  constructor(private router :Router, private fb:FormBuilder, private serv:LoginService,
    private tostor:ToastrService,
    private spinner: NgxSpinnerService) { }
  ngOnInit(): void {
    this.createForm()
    }


  createForm(){
    this.newForm=this.fb.group({
  email:['',Validators.email],
  password:['',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]],
  role:['admin']
    })
  }

  login(){
    this.spinner.show()
this.serv.login(this.newForm.value).subscribe((data:any)=>{
  localStorage.setItem("token", data.token)
  this.tostor.success('Hello world!',"", {
    disableTimeOut:false,
   titleClass:"toastr_title",
   messageClass:"toastr_message",
   timeOut:800,
   closeButton:true
})

  let audio= new Audio()
  audio.src="../../../../assets/login.wav"
  audio.load()
  audio.play()
 this.success=true
this.router.navigateByUrl('/home')
this.loggin=false
this.spinner.hide()
}, error =>{
  this.spinner.hide()
this.tostor.error('The Email Or Password Is Not Valid', "", {
  disableTimeOut:false,
 titleClass:"toastr_title",
 messageClass:"toastr_message",
 timeOut:800,
 closeButton:true
})


let audio= new Audio()
  audio.src="../../../../assets/login.wav"
  audio.load()
  audio.play()
  this.success=false
  this.noSuccesss=true
})
  


}
  
    
  }
  

