import { ComponentFixture, TestBed } from '@angular/core/testing';

import TestProtectedComponent from './dashboard.component';

describe('TestProtectedComponent', () => {
  let component: TestProtectedComponent;
  let fixture: ComponentFixture<TestProtectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestProtectedComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestProtectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
