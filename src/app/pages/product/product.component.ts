import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  ngOnInit(): void {
    //this.consultaget();
    //this.ingresarProducts();
    this.actualizarProducts();
    //this.eliminarProducts()
  }
  constructor(private http:HttpClient){}
  readonly api = 'https://api.escuelajs.co/api/v1/products'
  consultaget(){
    const api = `${this.api}`
    const e = this.http.get(api).subscribe(e=>{console.log(e)})
  }
  ingresarProducts(){
    const data = {
      title: 'Cuadernos',
      price: 12,
      description:'Utiles escolares/ Santiago Castillo',
      images:['https://educacion30.b-cdn.net/wp-content/uploads/2019/02/girasoles-978x652.jpg'],
      categoryId:2
    }
    const url = 'https://api.escuelajs.co/api/v1/products'
    this.http.post(url,data).subscribe(e=>{console.log(e)})
  }
  actualizarProducts(){
    const actualizar={
      title :'Computadora',
      price:650,
      description:'Equipo electronico / Santiago'
    }
    const api = 'https://api.escuelajs.co/api/v1/products/4';
    this.http.put(api,actualizar).subscribe(e=>{console.log(e)})
  }
  eliminarProducts(){
  const api = 'https://api.escuelajs.co/api/v1/products/216';
  this.http.delete(api).subscribe(e=>{console.log(e)})

  }
}
