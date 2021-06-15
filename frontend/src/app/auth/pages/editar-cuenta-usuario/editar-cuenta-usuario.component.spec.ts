import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCuentaUsuarioComponent } from './editar-cuenta-usuario.component';

describe('EditarCuentaUsuarioComponent', () => {
  let component: EditarCuentaUsuarioComponent;
  let fixture: ComponentFixture<EditarCuentaUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarCuentaUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarCuentaUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
