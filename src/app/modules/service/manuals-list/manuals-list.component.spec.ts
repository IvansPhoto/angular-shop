import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualsListComponent } from './manuals-list.component';

describe('ManualsListComponent', () => {
  let component: ManualsListComponent;
  let fixture: ComponentFixture<ManualsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManualsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
