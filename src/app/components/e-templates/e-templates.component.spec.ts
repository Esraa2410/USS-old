import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ETemplatesComponent } from './e-templates.component';

describe('ETemplatesComponent', () => {
  let component: ETemplatesComponent;
  let fixture: ComponentFixture<ETemplatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ETemplatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ETemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
