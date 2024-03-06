import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibicaoUsuariosComponent } from './exibicao-usuarios.component';

describe('ExibicaoUsuariosComponent', () => {
  let component: ExibicaoUsuariosComponent;
  let fixture: ComponentFixture<ExibicaoUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExibicaoUsuariosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExibicaoUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
