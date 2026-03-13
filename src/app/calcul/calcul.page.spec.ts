import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalculPage } from './calcul.page';

describe('CalculPage', () => {
  let component: CalculPage;
  let fixture: ComponentFixture<CalculPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
