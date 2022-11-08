import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  public name:string|null=null;
  public quantity:number|null=null
  public select:any[] = [
    {id: 1, difficulty: 'Skubus'},
    {id: 2, difficulty: 'Rutininis'},
    {id: 3, difficulty: 'Neskubus'},
    {id: 3, difficulty: 'Ypač skubus'}
  ];

  constructor(private productService:ProductsService) { }

  ngOnInit(): void {
  }

  public addProduct(){
    if (this.name!=null && this.quantity!=null){
      this.productService.addProduct(this.name, this.quantity,this.select);
      this.name=null;
      this.quantity=null;
    }
  }

}


