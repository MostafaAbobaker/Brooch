import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewReservationComponent } from './add-new-reservation.component';

describe('AddNewReservationComponent', () => {
  let component: AddNewReservationComponent;
  let fixture: ComponentFixture<AddNewReservationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewReservationComponent]
    });
    fixture = TestBed.createComponent(AddNewReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
