import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonsTableComponent } from './pokemons-table.component';

describe('PokemonsTableComponent', () => {
  let component: PokemonsTableComponent;
  let fixture: ComponentFixture<PokemonsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
