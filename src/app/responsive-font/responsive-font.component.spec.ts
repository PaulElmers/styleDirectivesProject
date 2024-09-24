import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveFontComponent } from './responsive-font.component';

describe('ResponsiveFontComponent', () => {
  let component: ResponsiveFontComponent;
  let fixture: ComponentFixture<ResponsiveFontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResponsiveFontComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponsiveFontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
