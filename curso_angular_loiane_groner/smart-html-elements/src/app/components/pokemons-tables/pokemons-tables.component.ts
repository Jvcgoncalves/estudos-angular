import { AfterViewInit, Component, OnInit } from '@angular/core';
import { GridModule, Smart, GridColumn } from 'smart-webcomponents-angular/grid';
import { PokeApiService } from '../../services/pokemons-api/poke-api.service';

@Component({
  selector: 'app-pokemons-tables',
  standalone: true,
  imports: [GridModule],
  templateUrl: './pokemons-tables.component.html',
  styleUrl: './pokemons-tables.component.scss'
})
export class PokemonsTablesComponent implements OnInit{

  constructor(private pokemonsApiService: PokeApiService) { }

  header = {
    visible: false
  }

  filter = {
    enabled: false, 
    filterRow:{
      visible: false,
    }
  }

  sort = {
    enabled: false
  }

  selection = {
    enabled: true,
    allowCellSelection: true,
    mode: "extended"
  }

  layout = {
    rowHeight: 80,
  }

  appearance = {
    alternationCount: 2,
    alternationStart: -1,
    showColumnHeaderLines: true, // habilida ou desabilita linhas
    showColumnLines: true, // habilida ou desabilita linhas 
    showRowLines: true, // habilida ou desabilita linhas  
  }

  pokemonDataSource = new Smart.DataAdapter({
    dataSource: [],
    dataFields: [
      'name: string',
      'sprites: any',
      'id: number'
    ]
  })
 
  edit = {
    enabled: false
  }

  columns: GridColumn[] = [
    {
      label: "#", dataField: "id"
    },
    {
      label: "Nome", dataField: "name", filterEditor: {
        placeholder: "Pesquise por nome",
        condition: "CONTAINS"
      }
    },
    {
      label: "Imagem", dataField: "sprites",width: 100, cellsVerticalAlign: 'middle', verticalAlign: 'middle', align: 'center', cellsAlign: 'center', template: function (formatObject: any){
        const value = formatObject.value
        console.log(value.front_default);
        
        formatObject.template = `<div><img style="width: 45px; height: 45px;" src="${value.front_default}"></div>`
      }
    },
  ]

  async ngOnInit() {
    this.pokemonDataSource.dataSource = await this.pokemonsApiService.getPokeApiData();
    console.log(await this.pokemonsApiService.getPokeApiData());
    
  }
  
}
