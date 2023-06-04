import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByCatComponent } from './search-by-cat.component';

describe('SearchByCatComponent', () => {
  let component: SearchByCatComponent;
  let fixture: ComponentFixture<SearchByCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchByCatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchByCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
