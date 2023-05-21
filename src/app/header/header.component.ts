import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { product } from '../data';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  menuType: string = 'default';
  sellerName:string ='';
  searchResult:undefined| product[]
  userName: any;
  cartItems=0;

  constructor(private router: Router,private product:ProductService) {
    this.router.events.subscribe((value: any) => {
      if(value.url){
        if(localStorage.getItem('seller') && value.url.includes('seller')){
          this.menuType="seller";
          if(localStorage.getItem('seller')){
            let sellerStore=localStorage.getItem('seller');
            let sellerData=sellerStore && JSON.parse(sellerStore)[0];
            this.sellerName=sellerData.name;
          }
        }
        else if(localStorage.getItem('user')){
          this.menuType="user";
          if(localStorage.getItem('user')){
            let userStore=localStorage.getItem('user');
            let userData=userStore && JSON.parse(userStore);
            this.userName=userData.name;
          }
        }
        else{
          this.menuType='default';
        }
      }
    })

    // letCartData=localStorage.getItem("quantity");
  }


  logout(){
    alert("Want to Logout?");
    localStorage.removeItem('seller');
    this.router.navigate(['/']);
  }

  userLogout() {
    alert("Want to Logout?");
    localStorage.removeItem('user');
    this.router.navigate(['/']);
    }

  searchProd(data:KeyboardEvent){
    if(data){
      const element=data.target as HTMLInputElement;
      // console.warn(element.value);
      this.product.searchProducts(element.value).subscribe((result)=>{
        // console.warn(result);
        this.searchResult=result;
        // console.warn(this.searchResult);
      })
    }
  }

  removeSearchResult(){
    this.searchResult=undefined;
  }

  submitSearch(data:any){
    console.log(data);
    this.router.navigate([`search/${data}`]);
  }

  redirecttoDetails(id:any){
    this.router.navigate([`/product-detail/`+id])
  }

  
}
