import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditreComponent } from './editre.component';

describe('EditreComponent', () => {
  let component: EditreComponent;
  let fixture: ComponentFixture<EditreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditreComponent]
    });
    fixture = TestBed.createComponent(EditreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
