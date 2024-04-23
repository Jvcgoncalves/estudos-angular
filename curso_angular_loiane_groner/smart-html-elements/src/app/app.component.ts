import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { TableModule } from 'smart-webcomponents-angular/table';
import { AccordionComponent, AccordionModule } from 'smart-webcomponents-angular/accordion';
import { DataService } from './services/data.service';
import { CarsService } from './services/cars.service';
import { ProjectTrackerTableComponent } from './compnents/project-tracker-table/project-tracker-table.component';
import { CarProjectTableComponent } from './compnents/car-project-table/car-project-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AccordionModule, CommonModule, TableModule, ProjectTrackerTableComponent, CarProjectTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit, OnInit {
  title = 'smart-html-elements';
  tableData: any = [];
  carsTableData: any = [];
  @ViewChild('accordion', { read: AccordionComponent, static: false }) accordion!: AccordionComponent;

  constructor(private dataService: DataService, private carsService: CarsService) { }


  elementToShow: string = "minha_tabela_4"

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