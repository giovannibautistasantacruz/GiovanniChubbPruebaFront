import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesoUsuarioComponent } from './proceso-usuario.component';

describe('ProcesoUsuarioComponent', () => {
  let component: ProcesoUsuarioComponent;
  let fixture: ComponentFixture<ProcesoUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcesoUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcesoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
