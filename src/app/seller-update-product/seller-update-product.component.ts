import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { product } from '../data';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent {
  productData:undefined | product 
  constructor(private prod:ProductService,private route:ActivatedRoute,private router:Router){
    let productId=this.route.snapshot.paramMap.get('id');
    console.warn(productId);
      productId &&  this.prod.getProduct(productId).subscribe((data)=>{
          // console.warn(data);
        this.productData=data;
    })
  }
  updateProducts(data:any){
    if(this.productData){
      data.id=this.productData.id
    }
    this.prod.updateProduct(data).subscribe((result)=>{
      if(result){
        alert("product is updated");
        this.router.navigate(['/seller-home']);
      }
    })
  }
}
