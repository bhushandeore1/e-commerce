import { Component } from '@angular/core';
import { product } from '../data';
import { ProductService } from '../services/product.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  populateProduct:undefined | product[];
  popularProduct:undefined | product[]
  constructor(private product:ProductService){
    this.product.populateProducts().subscribe((data)=>{
        this.populateProduct=data;
    })
   this.product.popularProducts().subscribe((data)=>{
        this.popularProduct=data;
   })
  }

}
