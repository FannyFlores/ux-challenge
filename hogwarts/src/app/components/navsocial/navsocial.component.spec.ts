import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavsocialComponent } from './navsocial.component';

describe('NavsocialComponent', () => {
  let component: NavsocialComponent;
  let fixture: ComponentFixture<NavsocialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavsocialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavsocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
