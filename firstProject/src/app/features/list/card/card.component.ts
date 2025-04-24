import { Component, computed, Output, EventEmitter, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { MatButton } from '@angular/material/button';
import { Product } from '../../../shared/interfaces/product';
import { NgOptimizedImage } from '@angular/common';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ MatCardModule, MatButton, NgOptimizedImage ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() product!: Product;
  
  @Output() edit = new EventEmitter();

  onEdit() {
    this.edit.emit()
  }
}
