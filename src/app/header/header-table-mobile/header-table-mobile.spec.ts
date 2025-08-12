import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTableMobile } from './header-table-mobile';

describe('HeaderTableMobile', () => {
  let component: HeaderTableMobile;
  let fixture: ComponentFixture<HeaderTableMobile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderTableMobile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderTableMobile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
