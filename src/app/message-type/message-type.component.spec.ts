import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageTypeComponent } from './message-type.component';

describe('MessageTypeComponent', () => {
  let component: MessageTypeComponent;
  let fixture: ComponentFixture<MessageTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessageTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
