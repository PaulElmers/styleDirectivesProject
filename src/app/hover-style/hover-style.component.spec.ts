import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoverStyleComponent } from './hover-style.component';

describe('HoverStyleComponent', () => {
  let component: HoverStyleComponent;
  let fixture: ComponentFixture<HoverStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoverStyleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoverStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
