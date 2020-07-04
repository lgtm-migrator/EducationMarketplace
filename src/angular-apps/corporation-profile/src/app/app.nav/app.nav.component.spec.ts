import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { App.NavComponent } from './app.nav.component';

describe('App.NavComponent', () => {
  let component: App.NavComponent;
  let fixture: ComponentFixture<App.NavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ App.NavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(App.NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
