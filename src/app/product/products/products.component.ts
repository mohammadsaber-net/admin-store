import { Component, OnInit } from '@angular/core';
import { products } from '../../interface';
import { ProductService } from '../product.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
// import { ToUpComponent } from '../../to-up copy/to-up.component';

@Component({
  selector: 'app-products',
  imports: [NgxSpinnerModule, FormsModule, ReactiveFormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  constructor(private http: ProductService,
    private toaster: ToastrService,
    private spinner: NgxSpinnerService) { }
  updateForm: FormGroup = new FormGroup({
    title: new FormControl(null, [Validators.required]),
    id: new FormControl(null, [Validators.required, Validators.pattern(/^[0-9]{1,}$/)]),
    price: new FormControl(null, [Validators.required, Validators.pattern(/^[0-9]{1,}(.[0-9]{1,})?$/)]),
    category: new FormControl(null, [Validators.required]),
    image: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required])
  })
  allProducts: products[] = []
  oneProduct!: products
  popup: boolean = false
  upload!: any
  base64!: any
  ngOnInit(): void {
    this.spinner.show()
    this.getProducts()
  }

  getAmount(idd: []) {


  }
  getProducts() {
    this.http.getProducts().subscribe({
      next: (data) => {
        this.allProducts = data
        this.spinner.hide()
      }
    })
  }
  getimagepath(event: any) {
    let file = event.target.files[0]
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      this.base64 = reader.result
      this.updateForm.get("image")?.setValue(this.base64)
    }
  }
  update(index: number) {
    this.upload = false
    this.updateForm.get("id")?.setValue(this.allProducts[index].id)
    this.updateForm.get("title")?.setValue(this.allProducts[index].title)
    this.updateForm.get("price")?.setValue(this.allProducts[index].price)
    this.updateForm.get("category")?.setValue(this.allProducts[index].category)
    this.updateForm.get("image")?.setValue(this.allProducts[index].image)
    this.updateForm.get("description")?.setValue(this.allProducts[index].description)
    this.base64 = this.allProducts[index].image
    this.popup = true

  }
  updateItem() {
    let id = this.updateForm.get("id")?.value
    let model = this.updateForm.value
    this.spinner.show()
    this.http.sendProduct(id, model).subscribe({
      next: () => {
        this.toaster.success("update success")
        this.popup = false
        this.spinner.hide()
      },
      error: () => this.toaster.error("update failed")
    })
  }
  addItem() {
    this.upload = true
    this.updateForm.reset(null)
    this.base64 = null
    this.popup = true
  }
  uploadItem() {
    this.spinner.show()
    this.http.uploadProduct(this.updateForm.value).subscribe({
      next: () => {
        this.toaster.success("upload success")
        this.popup = false
        this.spinner.hide()
      },
      error: () => this.toaster.error("upload failed")
    })
  }
  close() {
    this.popup = false
  }

}
