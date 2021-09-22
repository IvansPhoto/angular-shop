import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutViewComponent } from './produt-view.component';

describe('ProdutViewComponent', () => {
  let component: ProdutViewComponent;
  let fixture: ComponentFixture<ProdutViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
