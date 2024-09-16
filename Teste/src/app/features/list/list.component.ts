import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CardComponent } from './card/card.component';
import { Product } from '../../shared/interfaces/product';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ CardComponent, RouterLink ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  products = signal<Product[]>(inject(ActivatedRoute).snapshot.data["produtos"]);
  
  router = inject(Router);

  constructor() {
    console.log(this.products()); // Log to check if the products are correctly set
  }


  onEdit(product:Product) {
    this.router.navigate(["/editar", product.Id]);
  }
}
