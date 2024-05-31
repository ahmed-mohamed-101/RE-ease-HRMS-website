import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemlayoutComponent } from './systemlayout.component';

describe('SystemlayoutComponent', () => {
  let component: SystemlayoutComponent;
  let fixture: ComponentFixture<SystemlayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SystemlayoutComponent]
    });
    fixture = TestBed.createComponent(SystemlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
