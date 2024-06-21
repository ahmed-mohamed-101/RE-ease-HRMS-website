import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermanagereComponent } from './usermanagere.component';

describe('UsermanagereComponent', () => {
  let component: UsermanagereComponent;
  let fixture: ComponentFixture<UsermanagereComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsermanagereComponent]
    });
    fixture = TestBed.createComponent(UsermanagereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
