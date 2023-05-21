import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { signup } from '../data';
import { SellerService } from '../services/seller.service';
import { observable } from 'rxjs';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {

  showLogin=false;
  constructor(private seller:SellerService, private router:Router){
    this.seller.reloadSeller();
  }
  signup(data:any): void{
    console.log(data);
    this.seller.userSignUp(data)
  }
  signIn(data:any){
    console.warn(data);
    this.seller.userLogin(data);
  }

  openLogin() {
    this.showLogin=true;
    }

  openSignup(){
    this.showLogin=false;
  }

}
