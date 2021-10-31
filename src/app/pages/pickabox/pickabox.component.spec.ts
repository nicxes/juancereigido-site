import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickaboxComponent } from './pickabox.component';

describe('PickaboxComponent', () => {
  let component: PickaboxComponent;
  let fixture: ComponentFixture<PickaboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickaboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PickaboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
