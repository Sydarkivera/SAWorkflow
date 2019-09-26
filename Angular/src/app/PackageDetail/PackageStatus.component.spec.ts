import { TestBed, async, fakeAsync, ComponentFixture, tick, discardPeriodicTasks } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { defer, Observable, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { PackageStatusComponent } from './PackageStatus.component';

import { NavbarModule } from '../Components/Navbar/Navbar.module';
import { ModalModule } from '../Components/Modal/Modal.module';
import { MessageModule } from '../Components/Message/Message.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { APIService } from '../Services/api.service';

function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}

describe('Package status component', () => {
  let fixture: ComponentFixture<PackageStatusComponent>;

  const getPackageData = require('../Services/mock/getPackage.json')

  const apiService = jasmine.createSpyObj('APIService', ['getPackage'])

  let getPackageSpy = apiService.getPackage.and.returnValue(asyncData(getPackageData))

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PackageStatusComponent
      ],
      imports: [
        RouterTestingModule,
        NavbarModule,
        ModalModule,
        MessageModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule
      ],
      providers: [
        { provide: APIService, useValue: apiService },
        {
          provide: ActivatedRoute,
          useValue: {
            parent: {
              params: of({id: 0})
            }
          }
        }
      ]
    }).compileComponents();
  }));

  it('should create the Package status component', fakeAsync(() => {
    fixture = TestBed.createComponent(PackageStatusComponent);
    fixture.detectChanges();
    discardPeriodicTasks()
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should fetch the package (fakeAsync)', fakeAsync(() => {
    tick()
    expect(apiService.getPackage).toHaveBeenCalled();
  }));
});
