import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from '../data';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  addProduct(data:product){
     return this.http.post('http://localhost:3000/products',data);
  }

  productList(){
    return this.http.get<product[]>('http://localhost:3000/products');
  }

  deleteProduct(id:product){
    return this.http.delete(`http://localhost:3000/products/${id}`)
  }

  getProduct(id:string){
    return this.http.get<product>(`http://localhost:3000/products/${id}`)
  }

  updateProduct(product:product){
    return this.http.put(`http://localhost:3000/products/${product.id}`,product);
  }

  populateProducts(){
    return this.http.get<product[]>("http://localhost:3000/products?_limit=4");
  }

  popularProducts(){
    return this.http.get<product[]>("http://localhost:3000/products?_limit=8");
  }

  searchProducts(query:string){
    return this.http.get<product[]>(`http://localhost:3000/products?q=${query}`)
  }
  LocalAddToCart(data:product) {
    let addCart=[]
    let localcart=localStorage.getItem('localcart')
    if(!localcart){
      localStorage.setItem('localcart',JSON.stringify([data]))
    }else{
      addCart=JSON.parse(localcart);
      addCart.push(data);
      localStorage.setItem('localcart',JSON.stringify(addCart))
    }

  }


}
