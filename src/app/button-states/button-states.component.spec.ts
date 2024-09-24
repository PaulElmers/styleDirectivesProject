import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonStatesComponent } from './button-states.component';

describe('ButtonStatesComponent', () => {
  let component: ButtonStatesComponent;
  let fixture: ComponentFixture<ButtonStatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonStatesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonStatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
