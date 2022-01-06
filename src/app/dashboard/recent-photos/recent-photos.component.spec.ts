import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentPhotosComponent } from './recent-photos.component';

describe('RecentPhotosComponent', () => {
  let component: RecentPhotosComponent;
  let fixture: ComponentFixture<RecentPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentPhotosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
