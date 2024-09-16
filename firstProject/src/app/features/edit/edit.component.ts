import { Component, inject } from '@angular/core';
import { Product } from '../../shared/interfaces/product';
import { ProductsService } from '../../shared/services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormComponent } from '../../shared/components/form/form.component';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [ FormComponent ],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent {
  productService = inject(ProductsService)
  product: Product = inject(ActivatedRoute).snapshot.data["produtos"]
  router = inject(Router)

  onSubmit(product: Product) {
    this.productService.put(
      this.product.Id.toString(), product
    )
    this.router.navigateByUrl('/')
  }
}
