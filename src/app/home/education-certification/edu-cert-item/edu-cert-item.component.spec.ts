import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EduCertItemComponent } from './edu-cert-item.component';

describe('EduCertItemComponent', () => {
  let component: EduCertItemComponent;
  let fixture: ComponentFixture<EduCertItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EduCertItemComponent]
    });
    fixture = TestBed.createComponent(EduCertItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
