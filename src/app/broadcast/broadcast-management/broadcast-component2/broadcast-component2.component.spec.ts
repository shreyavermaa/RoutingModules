import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BroadcastComponent2Component } from './broadcast-component2.component';

describe('BroadcastComponent2Component', () => {
  let component: BroadcastComponent2Component;
  let fixture: ComponentFixture<BroadcastComponent2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BroadcastComponent2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BroadcastComponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
