import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RtformComponent } from './rtform.component';

describe('RtformComponent', () => {
  let component: RtformComponent;
  let fixture: ComponentFixture<RtformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RtformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RtformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
