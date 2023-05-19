import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HDevicesComponent } from './h-devices.component';

describe('HDevicesComponent', () => {
  let component: HDevicesComponent;
  let fixture: ComponentFixture<HDevicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HDevicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
