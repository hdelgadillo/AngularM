import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevousrComponent } from './nuevousr.component';

describe('NuevousrComponent', () => {
  let component: NuevousrComponent;
  let fixture: ComponentFixture<NuevousrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevousrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevousrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
