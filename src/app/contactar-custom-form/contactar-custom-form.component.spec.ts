import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactarCustomFormComponent } from './contactar-custom-form.component';

describe('ContactarCustomFormComponent', () => {
  let component: ContactarCustomFormComponent;
  let fixture: ComponentFixture<ContactarCustomFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactarCustomFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactarCustomFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
