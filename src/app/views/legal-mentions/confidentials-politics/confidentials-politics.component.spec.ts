import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfidentialsPoliticsComponent } from './confidentials-politics.component';

describe('ConfidentialsPoliticsComponent', () => {
  let component: ConfidentialsPoliticsComponent;
  let fixture: ComponentFixture<ConfidentialsPoliticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfidentialsPoliticsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfidentialsPoliticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
