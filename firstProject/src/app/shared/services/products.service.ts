import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { PayloadProduct } from '../interfaces/payload-product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private httpClient: HttpClient) {}

  getAll(){
    return this.httpClient.get<Product[]>('/api/produtos');
  }

  get(id:string){
    return this.httpClient.get<Product>(`/api/Produtos/${id}`);
  }

  // post(){

  // }

  put(id:string, payload: PayloadProduct){
    return this.httpClient.put(`/api/Products/${id}`, payload)
  }

  // delete(id:string){

  // }
}
