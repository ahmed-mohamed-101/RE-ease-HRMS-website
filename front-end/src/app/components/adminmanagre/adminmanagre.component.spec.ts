import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminmanagreComponent } from './adminmanagre.component';

describe('AdminmanagreComponent', () => {
  let component: AdminmanagreComponent;
  let fixture: ComponentFixture<AdminmanagreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminmanagreComponent]
    });
    fixture = TestBed.createComponent(AdminmanagreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
