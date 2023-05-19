import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IBotComponent } from './i-bot.component';

describe('IBotComponent', () => {
  let component: IBotComponent;
  let fixture: ComponentFixture<IBotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IBotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
