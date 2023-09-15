import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomScrollbarComponent } from './custom-scrollbar.component';

describe('CustomScrollbarComponent', () => {
  let component: CustomScrollbarComponent;
  let fixture: ComponentFixture<CustomScrollbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomScrollbarComponent]
    });
    fixture = TestBed.createComponent(CustomScrollbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
