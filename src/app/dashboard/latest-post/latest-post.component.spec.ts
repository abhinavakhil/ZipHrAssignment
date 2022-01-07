import { CommonModule } from '@angular/common';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CommonService } from 'src/shared/services/common.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LatestPostComponent } from './latest-post.component';
import { HttpClient } from '@angular/common/http';

describe('LatestPostComponent', () => {
  let component: LatestPostComponent;
  let fixture: ComponentFixture<LatestPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LatestPostComponent],
      imports: [RouterTestingModule, HttpClientTestingModule, CommonModule],
      providers: [
        HttpClient,
        { provide: CommonService, useClass: CommonService },
      ],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(LatestPostComponent);
        component = fixture.componentInstance;
      });
  });

  it('should have 10 posts', fakeAsync(async () => {
    const service = TestBed.get(CommonService);
    const result = await service.posts();
    fixture = TestBed.createComponent(LatestPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.ngOnInit();
    expect(component.latestPosts.length).toEqual(10);
  }));
});
