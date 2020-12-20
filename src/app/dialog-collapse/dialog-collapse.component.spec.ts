import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCollapseComponent } from './dialog-collapse.component';

describe('DialogCollapseComponent', () => {
  let component: DialogCollapseComponent;
  let fixture: ComponentFixture<DialogCollapseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogCollapseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCollapseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
