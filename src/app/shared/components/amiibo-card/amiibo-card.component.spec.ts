import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmiiboCardComponent } from './amiibo-card.component';

describe('AmiiboCardComponent', () => {
  let component: AmiiboCardComponent;
  let fixture: ComponentFixture<AmiiboCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmiiboCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmiiboCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
