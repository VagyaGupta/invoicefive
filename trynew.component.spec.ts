import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrynewComponent } from './trynew.component';

describe('TrynewComponent', () => {
  let component: TrynewComponent;
  let fixture: ComponentFixture<TrynewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrynewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrynewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
