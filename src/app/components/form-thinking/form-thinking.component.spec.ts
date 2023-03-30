import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormThinkingComponent } from './form-thinking.component';

describe('FormThinkingComponent', () => {
  let component: FormThinkingComponent;
  let fixture: ComponentFixture<FormThinkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormThinkingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormThinkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
