import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { TableModule } from 'smart-webcomponents-angular/table';
import { AccordionComponent, AccordionModule } from 'smart-webcomponents-angular/accordion';
import { DataService } from './services/data.service';
import { CarsService } from './services/cars.service';
import { ProjectTrackerTableComponent } from './components/project-tracker-table/project-tracker-table.component';
import { CarProjectTableComponent } from './components/car-project-table/car-project-table.component';
import { FilterSortComponent } from './components/filter-sort/filter-sort.component';
import { PokemonsTablesComponent } from './components/pokemons-tables/pokemons-tables.component';
import { MoreFilterSortTablesComponent } from './components/more-filter-sort-tables/more-filter-sort-tables.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AccordionModule, CommonModule, TableModule, ProjectTrackerTableComponent, CarProjectTableComponent, FilterSortComponent, PokemonsTablesComponent, MoreFilterSortTablesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit, OnInit {
  title = 'smart-html-elements';
  tableData: any = [];
  carsTableData: any = [];
  @ViewChild('accordion', { read: AccordionComponent, static: false }) accordion!: AccordionComponent;

  constructor(private dataService: DataService, private carsService: CarsService) { }


  elementToShow: string = "minha_tabela_7"

  ngAfterViewInit(): void {
		const that = this;
		that.accordion.expandMode = "multiple";
		that.accordion.expand(1);  	
  }

  ngOnInit() {
    this.tableData = this.dataService.generateData();
    this.carsTableData = this.carsService.generateCarData();
  }
}
