import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StocksproductsComponent } from './stocksproducts.component';

describe('StocksproductsComponent', () => {
  let component: StocksproductsComponent;
  let fixture: ComponentFixture<StocksproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StocksproductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StocksproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
