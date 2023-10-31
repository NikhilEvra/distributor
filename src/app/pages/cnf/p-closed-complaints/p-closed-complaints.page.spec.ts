import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PClosedComplaintsPage } from './p-closed-complaints.page';

describe('PClosedComplaintsPage', () => {
  let component: PClosedComplaintsPage;
  let fixture: ComponentFixture<PClosedComplaintsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PClosedComplaintsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PClosedComplaintsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
