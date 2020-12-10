import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexFavoritesComponent } from './pokedex-favorites.component';

describe('PokedexFavoritesComponent', () => {
  let component: PokedexFavoritesComponent;
  let fixture: ComponentFixture<PokedexFavoritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokedexFavoritesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokedexFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
