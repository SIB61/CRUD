import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBlogsComponent } from './create-blogs.component';

describe('CreateBlogsComponent', () => {
  let component: CreateBlogsComponent;
  let fixture: ComponentFixture<CreateBlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateBlogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
