import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsUploadComponent } from './forms-upload.component';

describe('FormsUploadComponent', () => {
  let component: FormsUploadComponent;
  let fixture: ComponentFixture<FormsUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
