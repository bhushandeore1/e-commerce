import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { login, signup } from '../data';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http:HttpClient,private router:Router) { }

  invalidUserAuth=new EventEmitter<boolean>(false)
  userSignUp(data:signup){
    this.http.post(`http://localhost:3000/user`,data,{observe:'response'}).subscribe((result)=>{
      if(result){
        localStorage.setItem('user',JSON.stringify(result.body));
        this.router.navigate(["/"]);
      }
    })
    } 

  
    userLogin(data:login){
      console.warn(data);
      this.http.get(`http://localhost:3000/user?email=${data.email}&password=${data.password}`,
      {observe:'response'}
      ).subscribe((result:any)=>{
        //console.warn(result);
        if(result && result.body && result.body.length){
          alert("login success");
          this.invalidUserAuth.emit(false);
          localStorage.setItem('user', JSON.stringify(result.body[0]))
          this.router.navigate(['/'])
        }
        else{
          alert("login failed");
          this.invalidUserAuth.emit(true);
        }
      })
  }


  userAuthReload(){
    if(localStorage.getItem('user')){
      this.router.navigate(['/']);
    }
  }
}
