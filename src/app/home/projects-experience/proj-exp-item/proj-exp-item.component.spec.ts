import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjExpItemComponent } from './proj-exp-item.component';

describe('ProjExpItemComponent', () => {
  let component: ProjExpItemComponent;
  let fixture: ComponentFixture<ProjExpItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjExpItemComponent]
    });
    fixture = TestBed.createComponent(ProjExpItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
