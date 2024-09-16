import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { PayloadProduct } from '../interfaces/payload-product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  HttpClient = inject(HttpClient)
  minhaApi = "http://localhost:5283/api/produtos";

  getAll(){
    console.log(this.minhaApi)
    return this.HttpClient.get<Product[]>(this.minhaApi);
  }

  get(id:string){
    return this.HttpClient.get<Product>(`/api/Produtos/${id}`);
  }

  // post(){

  // }

  put(id:string, payload: PayloadProduct){
    return this.HttpClient.put(`/api/Products/${id}`, payload)
  }

  // delete(id:string){

  // }
  constructor() { }
}
