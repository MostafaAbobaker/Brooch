import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNewReservationComponent } from './edit-new-reservation.component';

describe('EditNewReservationComponent', () => {
  let component: EditNewReservationComponent;
  let fixture: ComponentFixture<EditNewReservationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditNewReservationComponent]
    });
    fixture = TestBed.createComponent(EditNewReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
