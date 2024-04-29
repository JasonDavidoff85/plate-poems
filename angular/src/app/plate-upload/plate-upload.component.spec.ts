import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlateUploadComponent } from './plate-upload.component';

describe('PlateUploadComponent', () => {
  let component: PlateUploadComponent;
  let fixture: ComponentFixture<PlateUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlateUploadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlateUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
