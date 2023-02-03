import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadJsonFileUsingHttpclientComponent } from './read-json-file-using-httpclient.component';

describe('ReadJsonFileUsingHttpclientComponent', () => {
  let component: ReadJsonFileUsingHttpclientComponent;
  let fixture: ComponentFixture<ReadJsonFileUsingHttpclientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadJsonFileUsingHttpclientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadJsonFileUsingHttpclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
