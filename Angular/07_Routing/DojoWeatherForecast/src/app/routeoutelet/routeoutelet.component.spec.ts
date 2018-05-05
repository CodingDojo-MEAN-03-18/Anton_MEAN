import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteouteletComponent } from './routeoutelet.component';

describe('RouteouteletComponent', () => {
  let component: RouteouteletComponent;
  let fixture: ComponentFixture<RouteouteletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteouteletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteouteletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
