import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoListContentComponent } from './to-do-list-content.component';

describe('ToDoListContentComponent', () => {
  let component: ToDoListContentComponent;
  let fixture: ComponentFixture<ToDoListContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoListContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDoListContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
