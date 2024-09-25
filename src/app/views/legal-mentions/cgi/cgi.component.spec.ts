import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CGIComponent } from './cgi.component';

describe('CGIComponent', () => {
  let component: CGIComponent;
  let fixture: ComponentFixture<CGIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CGIComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CGIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
