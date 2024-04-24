import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterSortService {

  constructor() { }

  generateData(totalRows = 100){
    let data: any = [];

    let first_name: string[] = ["Joao","Pedro","Marcos","Carlos","Silvio","Ana","Mariana","Manuele","Sandro","Renekton","Bruna","Davi","Eduardo","Zyra","Yasmin","Wanessa"];
    let last_name: string[] = ["Gonçalves","Costa","Santos","Pozzobon","Colman","Vetorazzi","Orlandini","Campos","Lobo","Pereira",];
    let product: string[] = ["Café","Pão","Macarrão","Paçoca","Mandioca","Cachaça","Empadinha","Arroz","Feijão","Chocolate",];
    let available: boolean[] = [true, false];


    for (let index = 0; index < totalRows; index++) {
      let row: any = {};
      row['first_name'] = first_name[Math.floor(Math.random() * first_name.length)];
      row['last_name'] = last_name[Math.floor(Math.random() * last_name.length)];
      row['product'] = product[Math.floor(Math.random() * product.length)];
      row['quantity'] = Math.ceil(Math.random() * 11);
      row['unitPrice'] = (Math.random() * 10).toFixed(2)
      row['available'] = available[Math.floor(Math.random() * available.length)];
      
      data[index] = row;
    }

    return data;
  }
}
