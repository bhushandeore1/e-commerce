import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from '../data';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  productData:undefined | product
  productQuantity:number=1;
  removecart: any;
  constructor(private activateroute:ActivatedRoute,private products:ProductService){
    let productId= this.activateroute.snapshot.paramMap.get(`productId`);
    // console.warn(productId);
    productId && this.products.getProduct(productId).subscribe((result)=>{
      // console.log(result);
      this.productData=result;
    })
  }
  handleQuantity(val:String){
    if(this.productQuantity<20 && val==='add' ){
      this.productQuantity=this.productQuantity+1;
    }
    else if(this.productQuantity>1 &&  val==='subtract' ) {
      this.productQuantity=this.productQuantity-1;
    }
  }
  addToCart(){
    if(this.productData){
      this.productData.quantity=this.productQuantity
      // this.products.LocalAddToCart(this.productData)
      if(localStorage.getItem('user')){
        this.products.LocalAddToCart(this.productData)
        this.removecart=true
      }
    }
    
  }

}
