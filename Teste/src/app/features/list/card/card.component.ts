import { Component, input, computed, Output, EventEmitter } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { MatButton } from '@angular/material/button';
import { Product } from '../../../shared/interfaces/product';



@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ MatCardModule, MatButton ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  product = input.required<Product>()

  @Output() edit = new EventEmitter();

  productTipo = computed(() => this.product().Tipo)
  productName = computed(() => this.product().Name);
  productQtd = computed(() => this.product().Quantidade);
  productDesc = computed(() => this.product().Descricao);
  productPreco =  computed(() => this.product().Preco);

  onEdit() {
    this.edit.emit()
  }

}
