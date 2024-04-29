import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  generateData(totalRows = 100){
    let data: any = [];

    const foods = [
      ["Pizza", 20.99],
      ["Hambúrguer", 15.50],
      ["Sushi", 30.75],
      ["Salada", 12.00],
      ["Macarrão", 18.25],
      ["Churrasco", 35.99],
      ["Sanduíche", 10.50],
      ["Coxinha", 3.25],
      ["Torta", 25.00],
      ["Sopa", 8.99]
    ];
    
    const drinks = [
      ["Refrigerante", 5.00],
      ["Suco", 6.50],
      ["Café", 3.00],
      ["Chá", 4.25],
      ["Água", 2.50],
      ["Cerveja", 7.99],
      ["Vinho", 20.00],
      ["Caipirinha", 12.50],
      ["Whisky", 50.00],
      ["Leite", 3.99]
    ];
    
    const accessories = [
      ["Óculos de sol", 50.00],
      ["Relógio", 100.00],
      ["Bolsa", 70.00],
      ["Chapéu", 25.00],
      ["Colar", 35.00],
      ["Pulseira", 20.00],
      ["Cinto", 15.00],
      ["Lenço", 10.00],
      ["Gravata", 30.00],
      ["Luvas", 12.00]
    ];
    

    const types = ["Comida","Bebidas","Acessorios"]
    


    for (let index = 0; index < totalRows; index++) {
      let row: any = {};
      const productTypeIndex = Math.ceil(Math.random() * 3)
      switch(productTypeIndex){
        case 1:
          const randomNumberFoods = Math.floor(Math.random() * foods.length);
          row["product_name"] = foods[randomNumberFoods][0];
          row["product_type"] = types[1 - 1] ;
          row["unit_price"] = foods[randomNumberFoods][1];
          row["purchased_quantity"] = Math.ceil(Math.random() * 100);
          row["total_cost"] = row.unit_price * row.purchased_quantity; 
          row["items_sold"] = Math.ceil(Math.random() * row.purchased_quantity + (row.purchased_quantity / 2))
          row["sell_value"] = row.unit_price * 1.25; 
          row["total_value"] = row.sell_value * row.items_sold; 
          row["profit"] = row.total_value - row.total_cost;
            if(row.items_sold > row.purchased_quantity){
            row.items_sold = row.purchased_quantity;
          }
          break;
        case 2:
          const randomNumberDrinks = Math.floor(Math.random() * drinks.length);
          row["product_name"] = drinks[randomNumberDrinks][0];
          row["product_type"] = types[2 - 1] ;
          row["unit_price"] = drinks[randomNumberDrinks][1];
          row["purchased_quantity"] = Math.ceil(Math.random() * 100);
          row["total_cost"] = row.unit_price * row.purchased_quantity; 
          row["items_sold"] = Math.ceil(Math.random() * row.purchased_quantity + (row.purchased_quantity / 4));
          row["sell_value"] = row.unit_price * 1.25; 
          row["total_value"] = row.sell_value * row.items_sold; 
          row["profit"] = row.total_value - row.total_cost;
            if(row.items_sold > row.purchased_quantity){
            row.items_sold = row.purchased_quantity;
          }
          break;
        case 3:
          const randomNumberAccessories = Math.floor(Math.random() * accessories.length);
          row["product_name"] = accessories[randomNumberAccessories][0];
          row["product_type"] = types[3 - 1] ;
          row["unit_price"] = accessories[randomNumberAccessories][1];
          row["purchased_quantity"] = Math.ceil(Math.random() * 100);
          row["total_cost"] = row.unit_price * row.purchased_quantity; 
          row["items_sold"] = Math.ceil(Math.random() * row.purchased_quantity + (row.purchased_quantity / 2))
          row["sell_value"] = row.unit_price * 1.25; 
          row["total_value"] = row.sell_value * row.items_sold; 
          row["profit"] = row.total_value - row.total_cost;
          if(row.items_sold > row.purchased_quantity){
            row.items_sold = row.purchased_quantity;
          }
          break;
        default:

      }
      data[index] = row;
    }

    return data;
  }
}
