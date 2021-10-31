import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolovoxComponent } from './holovox.component';

describe('HolovoxComponent', () => {
  let component: HolovoxComponent;
  let fixture: ComponentFixture<HolovoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HolovoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HolovoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
