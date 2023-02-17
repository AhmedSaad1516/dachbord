import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router, private toster:ToastrService ) { }

  ngOnInit(): void {
  }
  Logout(){

this.router.navigateByUrl('/login')

localStorage.removeItem('token')
this.toster.success('Signed out successfully', "", {
  disableTimeOut:false,
 titleClass:"toastr_title",
 messageClass:"toastr_message",
 timeOut:800,
 closeButton:true
})

let audio= new Audio()
  audio.src="../../../../assets/cartoon-fx-light-anvil.wav"
  audio.load()
  audio.play()

  }
  
}
