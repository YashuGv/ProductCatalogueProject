import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetcatagoryComponent } from './getcatagory.component';

describe('GetcatagoryComponent', () => {
  let component: GetcatagoryComponent;
  let fixture: ComponentFixture<GetcatagoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetcatagoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetcatagoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
