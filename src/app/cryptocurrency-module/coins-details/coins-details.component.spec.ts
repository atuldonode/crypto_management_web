import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinsDetailsComponent } from './coins-details.component';

describe('CoinsDetailsComponent', () => {
  let component: CoinsDetailsComponent;
  let fixture: ComponentFixture<CoinsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoinsDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoinsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
