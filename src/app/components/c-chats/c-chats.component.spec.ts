import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CChatsComponent } from './c-chats.component';

describe('CChatsComponent', () => {
  let component: CChatsComponent;
  let fixture: ComponentFixture<CChatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CChatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CChatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
