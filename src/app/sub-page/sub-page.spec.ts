import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubPage } from './sub-page';

describe('SubPage', () => {
  let component: SubPage;
  let fixture: ComponentFixture<SubPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
