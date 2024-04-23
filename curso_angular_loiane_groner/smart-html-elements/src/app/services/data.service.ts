import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  constructor() { }

  generateData(rowscount = 100): any[] {
    let data: any[] = [];

    let firstNames = [ "Andrew", "Nancy", "Shelley", "Regina", "Yoshi", "Antoni", "Mayumi", "Ian", "Peter", "Lars", "Petra",    "Martin", "Sven", "Elio", "Beate", "Cheryl", "Michael", "Guylene"];    
    let lastNames =  [ "Fuller", "Davolio", "Burke", "Murphy", "Nagase", "Saavedra", "Ohno", "Devling", "Wilson", "Peterson",   "Winkler", "Bein", "Petersen", "Rossi", "Vileid", "Saylor", "Bjorn", "Nodier"];    
    let productNames = [ "Black Tea", "Green Tea", "Caffe Espresso", "Doubleshot Espresso", "Caffe Latte", "White Chocolate     Mocha", "Caramel Latte", "Caffe Americano", "Cappuccino", "Espresso Truffle", "Espresso con Panna", "Peppermint Mocha   Twist"];    
    let priceValues = [ "2.25", "1.5", "3.0", "3.3", "4.5", "3.6", "3.8", "2.5", "5.0", "1.75", "3.25", "4.0"];

    for (let i = 0; i < rowscount; i++) {
        let row: any = {};
        let productindex = Math.floor(Math.random() * productNames.length);
        let price = parseFloat(priceValues[productindex]);
        let quantity = 1 + Math.round(Math.random() * 10);
    
        row["firstName"] = firstNames[Math.floor(Math.random() * firstNames.length)];
        row["lastName"] = lastNames[Math.floor(Math.random() * lastNames.length)];
        row["name"] = row["firstName"] + " " + row["lastName"]; 
        row["productName"] = productNames[productindex];
        row["price"] = price;
        row["quantity"] = quantity;
        row["total"] = price * quantity;
    
        data[i] = row;
    }

    return data;
  }
}