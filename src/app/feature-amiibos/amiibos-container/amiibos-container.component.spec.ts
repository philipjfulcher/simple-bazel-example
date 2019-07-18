import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmiibosContainerComponent } from './amiibos-container.component';

describe('AmiibosContainerComponent', () => {
  let component: AmiibosContainerComponent;
  let fixture: ComponentFixture<AmiibosContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmiibosContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmiibosContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
