import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GridModule, GridColumn, DataAdapter, Smart } from "smart-webcomponents-angular/grid"

@Component({
  selector: 'app-project-tracker-table',
  standalone: true,
  imports: [CommonModule, GridModule, RouterModule],
  templateUrl: './project-tracker-table.component.html',
  styleUrl: './project-tracker-table.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ProjectTrackerTableComponent {

  editing = {
    enabled: true
  }

  dataSource = new Smart.DataAdapter(
		{
			dataSource: [{ "id": 0, "firstName": "Beate", "lastName": "Wilson", "productName": "Caramel Latte", "price": 3.8, "quantity": 6, "total": 22.799999999999997 }, { "id": 1, "firstName": "Ian", "lastName": "Nodier", "productName": "Caramel Latte", "price": 3.8, "quantity": 8, "total": 30.4 }, { "id": 2, "firstName": "Petra", "lastName": "Vileid", "productName": "Green Tea", "price": 1.5, "quantity": 2, "total": 3 }, { "id": 3, "firstName": "Mayumi", "lastName": "Ohno", "productName": "Caramel Latte", "price": 3.8, "quantity": 2, "total": 7.6 }, { "id": 4, "firstName": "Mayumi", "lastName": "Saylor", "productName": "Espresso con Panna", "price": 3.25, "quantity": 4, "total": 13 }, { "id": 5, "firstName": "Regina", "lastName": "Fuller", "productName": "Caffe Americano", "price": 2.5, "quantity": 4, "total": 10 }, { "id": 6, "firstName": "Regina", "lastName": "Burke", "productName": "Caramel Latte", "price": 3.8, "quantity": 8, "total": 30.4 }, { "id": 7, "firstName": "Andrew", "lastName": "Petersen", "productName": "Caffe Americano", "price": 2.5, "quantity": 6, "total": 15 }, { "id": 8, "firstName": "Martin", "lastName": "Ohno", "productName": "Espresso con Panna", "price": 3.25, "quantity": 3, "total": 9.75 }, { "id": 9, "firstName": "Beate", "lastName": "Devling", "productName": "Green Tea", "price": 1.5, "quantity": 9, "total": 13.5 }, { "id": 10, "firstName": "Sven", "lastName": "Devling", "productName": "Espresso Truffle", "price": 1.75, "quantity": 6, "total": 10.5 }, { "id": 11, "firstName": "Petra", "lastName": "Burke", "productName": "Peppermint Mocha Twist", "price": 4, "quantity": 11, "total": 44 }],
			dataFields:
				[
					'id: number',
					'firstName: string',
					'lastName: string',
					'productName: string',
					'quantity: number',
					'price: number',
					'total: number'
				]
		})
		
		
	columns: GridColumn[] = [
		{
			label: 'First Name', dataField: 'firstName', columnGroup: 'name'
		},
		{ label: 'Last Name', dataField: 'lastName', columnGroup: 'name' },
		{ label: 'Product', dataField: 'productName', columnGroup: 'order' },
		{ label: 'Quantity', dataField: 'quantity', columnGroup: 'order' },
		{
			label: 'Unit Price', dataField: 'price', cellsFormat: 'c2', columnGroup: 'order', formatFunction(settings) {
				const rowId = settings.row;
				const columnDataField = settings.column;
				const template = settings.template;
				const cell = settings.cell!;
				
				if (settings.value >= 4) {
					cell.background = '#00A45A';
					cell.color = '#fff';
				}
				else if (settings.value < 2) {
					cell.background = '#DF3800';
					cell.color = '#fff';
				}
				else {
					cell.background = '#FFFDE1';
					cell.color = '#333';
				}

				settings.value = '$' + new Number(settings.value).toFixed(2);
			}
		},
		{
			label: 'Total', dataField: 'total', cellsFormat: 'c2', columnGroup: 'order', formatFunction(settings) {
				const rowId = settings.row;
				const columnDataField = settings.column;
				const template = settings.template;
				const cell = settings.cell!;
			
				if (settings.value >= 20) {
					cell.background = '#00A45A';
					cell.color = '#fff';
				}
				else if (settings.value <= 5) {
					cell.background = '#DF3800';
					cell.color = '#fff';
				}
				else {
					cell.background = '#FFFDE1';
					cell.color = '#333';
				}

				settings.value = '$' + new Number(settings.value).toFixed(2);
			}
		}
	]	
}
