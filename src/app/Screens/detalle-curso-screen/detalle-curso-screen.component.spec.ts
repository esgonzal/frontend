import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleCursoScreenComponent } from './detalle-curso-screen.component';

describe('DetalleCursoScreenComponent', () => {
  let component: DetalleCursoScreenComponent;
  let fixture: ComponentFixture<DetalleCursoScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleCursoScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleCursoScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
