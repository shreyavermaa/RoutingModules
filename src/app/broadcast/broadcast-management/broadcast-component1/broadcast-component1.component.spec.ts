import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BroadcastComponent1Component } from './broadcast-component1.component';

describe('BroadcastComponent1Component', () => {
  let component: BroadcastComponent1Component;
  let fixture: ComponentFixture<BroadcastComponent1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BroadcastComponent1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BroadcastComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
