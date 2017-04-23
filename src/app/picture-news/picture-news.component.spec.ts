import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureNewsComponent } from './picture-news.component';

describe('PictureNewsComponent', () => {
  let component: PictureNewsComponent;
  let fixture: ComponentFixture<PictureNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PictureNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
