import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentContentComponent } from './department-content.component';

describe('DepartmentContentComponent', () => {
  let component: DepartmentContentComponent;
  let fixture: ComponentFixture<DepartmentContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
