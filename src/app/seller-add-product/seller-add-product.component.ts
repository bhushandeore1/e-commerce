import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { product } from '../data';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent {

  addProductMessage="";
  constructor(private prduct:ProductService,private router:Router){}
  addProducts(data:product){
      this.prduct.addProduct(data).subscribe((result) =>{
        console.log(result);
        if(result){
          this.addProductMessage="Product is added successfully"
          alert(this.addProductMessage);
          this.router.navigate(['/seller-home']);

        }
      })
  }

  

}
