import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FManageContactsComponent } from './f-manage-contacts.component';

describe('FManageContactsComponent', () => {
  let component: FManageContactsComponent;
  let fixture: ComponentFixture<FManageContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FManageContactsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FManageContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
