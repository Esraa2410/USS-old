import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JBillingComponent } from './j-billing.component';

describe('JBillingComponent', () => {
  let component: JBillingComponent;
  let fixture: ComponentFixture<JBillingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JBillingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
