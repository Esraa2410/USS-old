import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DCompaginsComponent } from './d-compagins.component';

describe('DCompaginsComponent', () => {
  let component: DCompaginsComponent;
  let fixture: ComponentFixture<DCompaginsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DCompaginsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DCompaginsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
