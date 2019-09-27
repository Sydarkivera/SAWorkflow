import { TestBed, async, fakeAsync, ComponentFixture, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { defer, Observable, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { PackageListComponent } from './PackageList.component';

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

describe('Package list component', () => {
  let fixture: ComponentFixture<PackageListComponent>;

  const getPackagesData = require('../Services/mock/getPackages.json')

  const apiService = jasmine.createSpyObj('APIService', ['getPackages'])

  let getPackagesSpy = apiService.getPackages.and.returnValue(asyncData(getPackagesData))

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PackageListComponent
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
            params: of({id: 0}),
            snapshot: {
              _lastPathIndex: 0
            }
          }
        }
      ]
    }).compileComponents();
  }));

  it('should create the Package list component', async(() => {
    fixture = TestBed.createComponent(PackageListComponent);
    fixture.detectChanges();
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should fetch the packages (fakeAsync)', fakeAsync(() => {
    tick()
    expect(apiService.getPackages).toHaveBeenCalledTimes(1);
  }));

  it('should display all packages', fakeAsync(() => {
    fixture = TestBed.createComponent(PackageListComponent);
    fixture.detectChanges();
    const app = fixture.debugElement.componentInstance;
    tick()
    expect(app.packages.length).toEqual(getPackagesData.length);
  }));
});
