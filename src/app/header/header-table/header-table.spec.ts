import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTable } from './header-table';

describe('HeaderTable', () => {
  let component: HeaderTable;
  let fixture: ComponentFixture<HeaderTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
