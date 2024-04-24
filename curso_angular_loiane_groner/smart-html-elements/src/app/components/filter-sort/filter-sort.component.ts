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
  }

  sort = {
    enabled: true,
    mode: "one"
  }

  edit = {
    enabled: true
  }

  header = {
		visible: true,
		buttons: ['columns'],
		// onInit(item) {
		// }
	}

  dataSource = new Smart.DataAdapter({
    dataSource:  this.filterSortService.generateData(),
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
      label: "Nome", dataField:"first_name", columnGroup: "client"
    },
    {
      label: "Sobrenome", dataField:"last_name", columnGroup: "client"
    },
    {
      label: "Produto", dataField:"product", columnGroup: "product"
    },
    {
      label: "Quantidade", dataField:"quantity", columnGroup: "product"
    },
    {
      label: "Preço unitário", dataField:"unitPrice", columnGroup: "product", cellsFormat: "c2"
    },
    {
      label: "Disponível", dataField:"available", columnGroup: "product"
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
    console.log(this.filterSortService.generateData());
  }
}
