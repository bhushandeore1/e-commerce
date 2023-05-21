import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from '../data';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchResult:undefined | product[]
  showResult=false;
  constructor(private activatedroute:ActivatedRoute, private product:ProductService){
    let query=this.activatedroute.snapshot.paramMap.get('query')
    // console.warn(query);
    query && this.product.searchProducts(query).subscribe((result)=>{
      this.searchResult=result;
    })
    if(this.searchResult==undefined){
      this.showResult=true;
    }

  }

}
