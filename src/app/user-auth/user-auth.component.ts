import { Component, OnInit } from '@angular/core';
import { signup } from '../data';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent implements OnInit {
  autherror: any;

   
  constructor(private userService:UserService){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  showLogin=false;
  signUp(data:signup){
    this.userService.userSignUp(data);
  }

  openSignup() {
    this.showLogin=false;
  }
  signIn(data: any) {
    this.userService.userLogin(data);
    this.userService.invalidUserAuth.subscribe((result)=>{
      if(result){
        this.autherror="Please Enter valid Crendentials";
      }
    })

  }
  openLogin() {
   this.showLogin=true;
  }
}
