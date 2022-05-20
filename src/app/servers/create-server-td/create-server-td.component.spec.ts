import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateServerTdComponent } from './create-server-td.component';

describe('CreateServerTdComponent', () => {
  let component: CreateServerTdComponent;
  let fixture: ComponentFixture<CreateServerTdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateServerTdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateServerTdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
