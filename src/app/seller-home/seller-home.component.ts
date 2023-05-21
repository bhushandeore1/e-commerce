import { Component } from '@angular/core';
import { product } from '../data';
import { ProductService } from '../services/product.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent {
  productList: product[] | undefined;
  constructor(private list:ProductService){
    this.showList();
  }

  showList(){
    this.list.productList().subscribe((result) =>{
      console.warn(result);
      this.productList=result;
    })
  }
  deleteProducts(id:any){
      this.list.deleteProduct(id).subscribe((result)=>{
        if(result){
          alert("Product deleted successfully");
          this.showList();

        }
      })
  }
}
