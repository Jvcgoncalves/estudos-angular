import { Component } from '@angular/core';
import { DataAdapter, GridColumn, GridModule } from 'smart-webcomponents-angular/grid';
import { Smart } from 'smart-webcomponents-angular/accordion';
import { ProductsService } from '../../services/products/products.service';

@Component({
  selector: 'app-more-filter-sort-tables',
  standalone: true,
  imports: [GridModule],
  templateUrl: './more-filter-sort-tables.component.html',
  styleUrl: './more-filter-sort-tables.component.scss'
})

export class MoreFilterSortTablesComponent {

  constructor(private productsService: ProductsService) { }

  header = {
    visible: true
  }

  appearance = {
		autoShowColumnFilterButton: true,
    showRowHeaderNumber: true,
	}

  layout = {
    rowHeight: 50
  }

  sorting = {
		enabled: true,
	}
	
	filtering = {
		enabled: true,
    // filterRow:{
    //   visible: true
    // },
		// filterMenu: {
		// 	mode: 'excel'
		// }
	}

  selection = {
    enabled: true,
    allowCellSelection: true,
    allowColumnHeaderSelection: true,
    mode: "extended"
  }

  summaryRow = {
		visible: true
	}

  edit = {
    enabled: true,
    mode: 'row',
    action: 'none',
    Dialog: {
      enabled: true
    },
    commandColumn: {
        visible: true,
        position: 'far'
    }
  }

  tableData = new Smart.DataAdapter(
    <DataAdapter>{
    dataSource: this.productsService.generateData(100),
    dataFields:[
      'product_name: string',
      'product_type: string',
      'unit_price: number',
      'purchased_quantity: number',
      'total_cost: number',
      'items_sold: number',
      'sell_value: number',
      'total_value: number',
      'profit: number',
    ],

  })


  columns: GridColumn[] = [
		{ label: 'Nome do produto', dataField: 'product_name', freeze: "near", width: 150 },
		{ label: 'Tipo do produto', dataField: 'product_type', width: 150,filterEditor: {
      template: '<smart-input drop-down-button-position="left" placeholder="Todos" readonly style="border-radius: 0px; border: none; width: 100%; height:100%"></smart-input>',
      onInit(column: any, editor: any){
        const input = editor.querySelector("smart-input");
        const options = ["Todos","Comida","Bebidas","Acessorios",];

        input.dataSource = options;
        input.addEventListener("change", () =>{
          if(input.value === "Todos"){
            column.filter = ""
          } else {
            column.filter = '= "' + input.value.trim() + '"'
          }
        })
      }
    } },
		{ label: 'Preço unitário', dataField: 'unit_price', width: 140, align: "center", cellsAlign: "center", cellsFormat: "c2",filterEditor: {
      template: "<div></div>"
    }},
		{ label: 'Quantidade comprada', dataField: 'purchased_quantity',width: 175, cellsAlign: "center", filterEditor: {
      template: "<div></div>"
    }},
    { label: 'Total da compra', dataField: 'total_cost', width: 150, cellsAlign: "center", cellsFormat: "c2", filterEditor: {
      template: "<div></div>"
    }},
		{ label: 'Itens vendidos', dataField: 'items_sold', width: 150, cellsAlign: "center", filterEditor: {
      template: "<div></div>"
    }},
		{ label: 'Preço de venda', dataField: 'sell_value', width: 140, align: "center", cellsAlign: "center", cellsFormat: "c2",filterEditor: {
      template: "<input type='number' placeholder='Valor maior que' style='background: transparent; border: none; outline: none; width: 100%; height:100%;'/>",
      onInit(column: any, editor: any){
        const input = editor.querySelector("input");
        input.addEventListener('change', () => {
          if (!input.value) {
            column.filter = '';
          }
          else {
            column.filter = '>= ' + input.value;
          }
        });
      }
    }},
		{ label: 'Total das vendas', dataField: 'total_value', width: 175, cellsAlign: "center", cellsFormat: "c2", allowFilter: false, filterEditor: {
      template: "<div></div>"
    }},

		{ label: 'Lucro', dataField: 'profit', width: 150, align: "center", cellsAlign: "center", cellsFormat: "c2", summary: ['sum'], freeze: "far", formatFunction(formatObject) {
      const cellValue = formatObject.value;
      const cell = formatObject.cell!;
      if(cellValue < 0){
        cell.background = "#cb1900"
        cell.color = "#fff"
      } else if(cellValue > 0){
        cell.background = "#486623"
        cell.color = "#eee"
      }
    }, filterEditor: {
      template: '<smart-input drop-down-button-position="left" placeholder="Todos" readonly style="border-radius: 0px; border: none; width: 100%; height:100%"></smart-input>',
      onInit(column: any, editor: any) {
        const input = editor.querySelector('smart-input');
        const optionsToFilter = ["Todos","Lucro","Prejuíso"];
        input.dataSource = optionsToFilter;

        input.style.setProperty('--smart-background', 'transparent');
        
        input.addEventListener('change', () => {
          if (input.value === '' || input.value === "Todos") {
            column.filter = '';
          } else if(input.value === "Lucro") {
            column.filter = '> 0';
          } else if(input.value === "Prejuíso") {
            column.filter = '< 0';
          }
        });
      }
    }},
	]	
}
