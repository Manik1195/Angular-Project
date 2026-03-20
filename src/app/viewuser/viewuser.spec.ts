import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewuser } from './viewuser';

describe('Viewuser', () => {
  let component: Viewuser;
  let fixture: ComponentFixture<Viewuser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Viewuser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Viewuser);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
