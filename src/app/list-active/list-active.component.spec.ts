import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListActiveComponent } from './list-active.component';

describe('ListActiveComponent', () => {
  let component: ListActiveComponent;
  let fixture: ComponentFixture<ListActiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListActiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
