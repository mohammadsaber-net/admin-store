import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CartsService } from '../carts.service';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-carts',
  imports: [FormsModule, DatePipe, NgxSpinnerModule],
  templateUrl: './carts.component.html',
  styleUrl: './carts.component.css'
})
export class CartsComponent implements OnInit {
  http = inject(CartsService)
  spinner = inject(NgxSpinnerService)
  toaster = inject(ToastrService)
  popup: boolean = false
  cartProduct!: any
  productsDetails: any[] = []
  ngOnInit(): void {
    this.getCarts()
  }
  getCarts() {
    this.spinner.show()
    this.http.getCarts().subscribe({
      next: data => {
        this.cartProduct = data
        this.spinner.hide()
      }
    })
  }
  details(products: any) {
    this.spinner.show()
    this.productsDetails = []
    this.popup = true
    for (let i in products) {
      this.http.getProduct(products[i].productId).subscribe({
        next: (data) => {
          this.productsDetails.push({
            prod: data,
            amount: products[i].quantity
          })
          this.spinner.hide()
        }
      }
      )
    }

  }
  delete(index: number) {
    this.http.deleteCart(index).subscribe({
      next: (data) => {
        this.toaster.success("this cart has deleted")
        console.log(data)
      },
      error: () => this.toaster.error("failed to delete this cart")
    }
    )
  }
  close() {
    this.popup = false
  }
}
