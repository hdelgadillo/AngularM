import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariopropioComponent } from './usuariopropio.component';

describe('UsuariopropioComponent', () => {
  let component: UsuariopropioComponent;
  let fixture: ComponentFixture<UsuariopropioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuariopropioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariopropioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
