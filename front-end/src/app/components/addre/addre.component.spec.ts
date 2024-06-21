import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddreComponent } from './addre.component';

describe('AddreComponent', () => {
  let component: AddreComponent;
  let fixture: ComponentFixture<AddreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddreComponent]
    });
    fixture = TestBed.createComponent(AddreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
