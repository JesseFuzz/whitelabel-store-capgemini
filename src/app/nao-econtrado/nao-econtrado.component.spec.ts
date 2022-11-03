import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaoEcontradoComponent } from './nao-econtrado.component';

describe('NaoEcontradoComponent', () => {
  let component: NaoEcontradoComponent;
  let fixture: ComponentFixture<NaoEcontradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaoEcontradoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NaoEcontradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
