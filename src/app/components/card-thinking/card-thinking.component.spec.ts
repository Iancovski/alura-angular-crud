import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardThinkingComponent } from './card-thinking.component';

describe('CardThinkingComponent', () => {
  let component: CardThinkingComponent;
  let fixture: ComponentFixture<CardThinkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardThinkingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardThinkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
