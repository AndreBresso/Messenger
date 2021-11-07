import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageOptionsBlockComponent } from './message-options-block.component';

describe('MessageOptionsBlockComponent', () => {
  let component: MessageOptionsBlockComponent;
  let fixture: ComponentFixture<MessageOptionsBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageOptionsBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageOptionsBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
