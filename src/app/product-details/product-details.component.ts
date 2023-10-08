import {Component, OnInit} from '@angular/core';
import {Product, products} from "../products";
import {ActivatedRoute} from "@angular/router";
import {CartService} from "../service/cart.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{

  product: Product | undefined;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {
    // console.log(parameter)
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    this.product = products.find(product => product.id === productIdFromRoute);
    // console.log(this.product);

  }

  addToCart(product: Product){
    this.cartService.addToCArt(product);
    alert('Your product has been added to the cart!');
  }

}
