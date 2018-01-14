import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInsertFormComponent } from './user-insert-form.component';

describe('UserInsertFormComponent', () => {
  let component: UserInsertFormComponent;
  let fixture: ComponentFixture<UserInsertFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserInsertFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInsertFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
