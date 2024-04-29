import { Component, OnInit } from '@angular/core';
import { GridColumn, GridColumnGroup, GridModule } from 'smart-webcomponents-angular/grid';
import { FilterSortService } from '../../services/filter-sort.service';
import { Smart } from 'smart-webcomponents-angular/accordion';

@Component({
  selector: 'app-filter-sort',
  standalone: true,
  imports: [GridModule],
  templateUrl: './filter-sort.component.html',
  styleUrl: './filter-sort.component.scss'
})
export class FilterSortComponent implements OnInit {

  constructor(private filterSortService: FilterSortService) { }

  filter = {
    enabled: true,
    filterRow: {
      visible: true
    },
    // filterMenu: {
		// 	mode: 'excel'
		// }

  }

  sort = {
    enabled: true,
    mode: "one"
  }

  edit = {
    enabled: false
  }

  header = {
		visible: false,
		buttons: ['columns',"filter"], // se não colocar nada ele coloca buttons padrao
		// onInit(item) {
		// }
	}

  dataSource = new Smart.DataAdapter({
    dataSource: this.filterSortService.generateData(),
    dataFields:[
      'first_name: string',
      'last_name: string',
      'product: string',
      'quantity: number',
      'unitPrice: number',
      'available: boolean'
    ]
  })

  columns: GridColumn[] = [
    {
      label: "Nome", dataField:"first_name", columnGroup: "client", filterEditor:{
        placeholder: "Pesquise por nome",
        condition: "CONTAINS"
      }
    },
    {
      label: "Sobrenome", dataField:"last_name", columnGroup: "client"
    },
    {
      label: "Produto", dataField:"product", columnGroup: "product", filterEditor: {
				template: '<smart-input drop-down-button-position="left" placeholder="Todos" readonly style="border-radius: 0px; border: none; width: 100%; height:100%"></smart-input',
				onInit(column: any, editor: any) {
					const input = editor.querySelector('smart-input');
					const productNames = ["Todos","Café","Pão","Macarrão","Paçoca","Mandioca","Cachaça","Empadinha","Arroz","Feijão","Chocolate",];
					input.dataSource = productNames;
					input.style.setProperty('--smart-background', 'transparent');
					input.onkeyup = (event: any) => {
						if (event.key === 'a' && event.ctrlKey) {
							input.select();
						}
					};
					input.addEventListener('change', () => {
						if (input.value === '' || input.value === "Todos") {
							column.filter = '';
						}
						else {
							column.filter = 'equal "' + input.value.trim() + '"';
						}
					});
				}
			}
    },
    {
      label: "Quantidade", dataField:"quantity", columnGroup: "product",align: "center", filterEditor: {
				template: '<smart-input drop-down-button-position="left" placeholder="Igual à" readonly style="border-radius: 0px; border: none; width: 100%; height:100%"></smart-input>',
        
				onInit(column: any, editor: any) {
					const input = editor.querySelector('smart-input');
          
          const productQuantities = [ "Nenhum","0",1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
          // so da para filtrar pelo zero se for como string, se não buga o filtro e ele não funciona
          input.dataSource = productQuantities;
					input.addEventListener('change', () => {
						if (input.value === '' || input.value === "Nenhum") {
							column.filter = '';
						}
						else {
							column.filter = 'equal "' + input.value.trim() + '"';
						}
					});
				}
			}
    },
    {
      label: "Preço unitário", dataField:"unitPrice", columnGroup: "product", cellsFormat: "c2", formatFunction(settings){
        const value = settings.value;
        const cell = settings.cell!;

        if(value <= 2.25){
          cell.background = "#7b0000";
          cell.color = "#fff";
        } else if (value > 7){
          cell.background = "#22300b";
          cell.color = "#fff";
        } else {
          cell.background = '#3524ff';
          cell.color = "#fff";
        }

      }
    },
    {
      label: "Disponível", dataField:"available", columnGroup: "product", align: "center"
    },
  ]

  columnGroup: GridColumnGroup[] = [
    {
      label: "Cliente", name: "client", align: "center"
    },
    {
      label: "Produto", name: "product", align: "center"
    }
  ]

  ngOnInit(): void {
    // console.log(this.dataSource.dataSource);
  }
}
