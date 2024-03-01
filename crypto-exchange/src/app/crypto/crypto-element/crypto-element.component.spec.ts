import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoElementComponent } from './crypto-element.component';

describe('CryptoElementComponent', () => {
  let component: CryptoElementComponent;
  let fixture: ComponentFixture<CryptoElementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CryptoElementComponent]
    });
    fixture = TestBed.createComponent(CryptoElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
