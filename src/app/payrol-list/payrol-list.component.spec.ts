import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrolListComponent } from './payrol-list.component';

describe('PayrolListComponent', () => {
  let component: PayrolListComponent;
  let fixture: ComponentFixture<PayrolListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayrolListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrolListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
