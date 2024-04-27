import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContantosComponent } from './contatos.component';

describe('ContantosComponent', () => {
  let component: ContantosComponent;
  let fixture: ComponentFixture<ContantosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContantosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContantosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
