import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificcatComponent } from './specificcat.component';

describe('SpecificcatComponent', () => {
  let component: SpecificcatComponent;
  let fixture: ComponentFixture<SpecificcatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpecificcatComponent]
    });
    fixture = TestBed.createComponent(SpecificcatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
