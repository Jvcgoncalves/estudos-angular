import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonsTablesComponent } from './pokemons-tables.component';

describe('PokemonsTablesComponent', () => {
  let component: PokemonsTablesComponent;
  let fixture: ComponentFixture<PokemonsTablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonsTablesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PokemonsTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
