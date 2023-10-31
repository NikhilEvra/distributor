import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { POpenComplaintsPage } from './p-open-complaints.page';

describe('POpenComplaintsPage', () => {
  let component: POpenComplaintsPage;
  let fixture: ComponentFixture<POpenComplaintsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ POpenComplaintsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(POpenComplaintsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
