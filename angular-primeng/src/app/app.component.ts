import { Component } from '@angular/core';
import { ProductService } from './services/product.service';
import { Product } from './models/product';
import { formatCurrency, getCurrencySymbol } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-primeng';
  products: Product[] = [];
  cols: any[] = [];
  selectedProduct = '';
  isAccepted: boolean = false;
  selectedFruits: string[] = ['Orange'];
  date: Date = new Date();
  minDate: Date = new Date();
  maxDate: Date = new Date();

  constructor(private productService: ProductService) {}
  ngOnInit() {
    this.getProductList();

    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'title', header: 'Name' },
      { field: 'category', header: 'Category' },
      { field: 'price', header: 'Price' },
      { field: 'image', header: 'Picture' },
    ];

    let today = new Date();
    let month = today.getMonth();
    let prevMonth = month === 0 ? 11 : month - 1;
    // let nextMonth = month === 11 ? 0 : month + 1;
    let nextWeek = today.getDate() + 7;
    this.minDate.setMonth(prevMonth);
    this.maxDate.setDate(nextWeek);
  }

  getProductList() {
    this.productService.getProducts().subscribe(response => {
      this.products = response;
    });
  }
  termsAndConditions(event: any) {
    console.log(event);
    if (!this.isAccepted) {
      alert('You have to accept to continue!');
    }
  }
  addFruit(event: any) {
    console.log(this.selectedFruits);
  }

  protected readonly formatCurrency = formatCurrency;
  protected readonly getCurrencySymbol = getCurrencySymbol;
}
