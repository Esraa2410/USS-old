import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BMessagesComponent } from './b-messages.component';

describe('BMessagesComponent', () => {
  let component: BMessagesComponent;
  let fixture: ComponentFixture<BMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BMessagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
