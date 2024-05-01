import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioContatosComponent } from './formulario-contatos.component';

describe('FormularioContatosComponent', () => {
  let component: FormularioContatosComponent;
  let fixture: ComponentFixture<FormularioContatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormularioContatosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormularioContatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
