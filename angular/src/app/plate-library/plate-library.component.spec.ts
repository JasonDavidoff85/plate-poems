import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlateLibraryComponent } from './plate-library.component';

describe('PlateLibraryComponent', () => {
  let component: PlateLibraryComponent;
  let fixture: ComponentFixture<PlateLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlateLibraryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlateLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
