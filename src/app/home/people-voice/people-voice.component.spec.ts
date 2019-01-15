import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleVoiceComponent } from './people-voice.component';

describe('PeopleVoiceComponent', () => {
  let component: PeopleVoiceComponent;
  let fixture: ComponentFixture<PeopleVoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleVoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleVoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
