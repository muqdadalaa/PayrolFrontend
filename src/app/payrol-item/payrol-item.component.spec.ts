import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrolItemComponent } from './payrol-item.component';

describe('PayrolItemComponent', () => {
  let component: PayrolItemComponent;
  let fixture: ComponentFixture<PayrolItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayrolItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrolItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
