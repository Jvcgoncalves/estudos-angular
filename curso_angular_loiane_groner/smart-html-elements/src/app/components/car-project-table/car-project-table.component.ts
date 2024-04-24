import { Component, OnInit } from '@angular/core';

import { GridModule, Smart, GridColumn,  } from "smart-webcomponents-angular/grid"
import { CarsService } from '../../services/cars.service';

@Component({
  selector: 'app-car-project-table',
  standalone: true,
  imports: [GridModule],
  templateUrl: './car-project-table.component.html',
  styleUrl: './car-project-table.component.scss'
})
export class CarProjectTableComponent implements OnInit{

  constructor(private carsService: CarsService) { }

  appearance = {
		alternationCount: 2,
		showRowHeader: true,
		showRowHeaderSelectIcon: true,
		showRowHeaderFocusIcon: true,
		showColumnIcon: true,
		allowHover: true,
		showRowNumber: true
	}

  editing = {
    enabled: true,
  }

  grouping = {
		enabled: true
	}

  behavior = { allowColumnReorder: true, rowResizeMode: 'growAndShrink', columnResizeMode: 'growAndShrink',}

  sorting = {
		enabled: true,
		mode: 'one'
	}
	
  delete = {
    enabled: true
  }

	filtering = {
		enabled: true,
    filter: [
      // ['owner', 'contains te'],
    ],
    filterRow: {
			visible: true
		}
	}

  selection = {
		enabled: true,
		allowCellSelection: true,
		allowRowHeaderSelection: true,
		allowColumnHeaderSelection: true,
		mode: 'extended'
	}

  header = {
		visible: true,
		buttons: ['columns', 'filter', 'sort'],
		// onInit(item) {
		// }
	}

  rowDetail = {
		enabled: true,
		dialog: {
			enabled: true
		}
	}

  carsSource = new Smart.DataAdapter({
    dataSource: this.carsService.generateCarData(),
    dataFields: [
      'car: string',
      'owner: string',
      'year: string',
      'price: number'
    ]
  })

  columns: GridColumn[] = [
    {
      label: "Dono", dataField: 'owner', columnGroup: "owners"
    },
    {
      label: "Carro", dataField: 'car', columnGroup: "cars"
    },
    {
      label: "Ano", dataField: 'year', columnGroup: "year", cellsFormat: 'MM/yyyy', align: "center", cellsAlign: "center"
    },
    {
      label: "Preço", dataField: 'price', columnGroup: "price", cellsFormat: 'c', align: "right", cellsAlign: "right",
      formatFunction(settings){
        const rowId = settings.row?.id;
				const columnDataField = settings.column;
				const template = settings.template;
				const cell = settings.cell!;

        if(settings.value > 1750000){
          cell.background = "green";
          cell.color = "white";
        } else {
          cell.background = "darkblue";
          cell.color = "white";
        }
        
        settings.value = "R$ " + new Number(settings.value).toFixed(2)
      }
    },
  ]

  // columnGroups = [
	//   { label: 'owners', align: 'center', name: 'cars' },
	//   { label: 'Carro', align: 'center', name: 'owners' },
	//   { label: 'Carro', align: 'center', name: 'price' },
	// ]

  ngOnInit(): void {
    console.log(this.carsService.generateCarData());
  }

}
