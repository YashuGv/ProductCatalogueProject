import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchbyproductComponent } from './searchbyproduct.component';

describe('SearchbyproductComponent', () => {
  let component: SearchbyproductComponent;
  let fixture: ComponentFixture<SearchbyproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchbyproductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchbyproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
