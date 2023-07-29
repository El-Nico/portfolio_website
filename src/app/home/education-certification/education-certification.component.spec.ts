import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationCertificationComponent } from './education-certification.component';

describe('EducationCertificationComponent', () => {
  let component: EducationCertificationComponent;
  let fixture: ComponentFixture<EducationCertificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EducationCertificationComponent]
    });
    fixture = TestBed.createComponent(EducationCertificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
