import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuilderValidationComponent } from './builder-validation.component';

describe('BuilderValidationComponent', () => {
  let component: BuilderValidationComponent;
  let fixture: ComponentFixture<BuilderValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuilderValidationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuilderValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
