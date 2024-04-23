import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor() { }

  generateCarData(totalRows = 10){
    let data: any = [];

    let cars = ["corsa","prisma","cg 150", "cb 300", "corolla", "spin", "206",""];
    let owners = ["eu","lucas","leo","marcio","Claudete","Itamir","Elcio"];
    let year = [ "12/2001","10/2002","1/2003","2/2004","3/2005","4/2006","5/2007",""];
    let price = 56

    for (let index = 0; index < totalRows; index++) {
      let row: any = {};
      
      row['car'] = cars[Math.floor(Math.random() * cars.length)];
      row['owner'] = owners[Math.floor(Math.random() * owners.length)];
      row['year'] = year[Math.floor(Math.random() * year.length)];
      row['price'] = (price * Math.floor(Math.random() * 49864)).toFixed(2)
      
      data[index] = row;
    }

    return data;
  }
}
