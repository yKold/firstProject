import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Product, tipo } from '../../interfaces/product';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    ReactiveFormsModule, 
    MatFormFieldModule, 
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  @Input() product: Product | null = null;
  @Output() done = new EventEmitter<Product>;

  form!: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl<string>(this.product?.Name ?? "", 
        { nonNullable: true, validators: Validators.required}),
      tipo: new FormControl<tipo | null>(this.product?.Tipo ?? null, 
        { nonNullable: true, validators: Validators.required }),
      desc: new FormControl<string>(this.product?.Descricao ?? "", 
        { nonNullable: true, validators: Validators.required }),
      qtdd: new FormControl<number>(this.product?.Quantidade ?? 0, 
        { nonNullable: true, validators: Validators.required }),
      price: new FormControl<number>(this.product?.Preco ?? 0, 
        { nonNullable: true, validators: Validators.required })
    });
  }
  
  onSubmit() {
    const product = this.form.value as Product;
    this.done.emit(product);
  }
}
