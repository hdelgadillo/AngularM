import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UncompComponent } from './uncomp.component';

describe('UncompComponent', () => {
  let component: UncompComponent;
  let fixture: ComponentFixture<UncompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UncompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UncompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
