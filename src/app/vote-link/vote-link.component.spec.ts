import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteLinkComponent } from './vote-link.component';

describe('VoteLinkComponent', () => {
  let component: VoteLinkComponent;
  let fixture: ComponentFixture<VoteLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
