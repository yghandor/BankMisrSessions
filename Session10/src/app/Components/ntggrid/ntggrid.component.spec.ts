import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NTGGridComponent } from './ntggrid.component';

describe('NTGGridComponent', () => {
  let component: NTGGridComponent;
  let fixture: ComponentFixture<NTGGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NTGGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NTGGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
