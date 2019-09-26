import { TestBed, async, fakeAsync, ComponentFixture, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { defer, Observable, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { PackageComponent } from './Package.component';

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

describe('Package component', () => {
  let fixture: ComponentFixture<PackageComponent>;

  const getModulesData = require('../Services/mock/getModules.json')
  const getPackageData = require('../Services/mock/getPackage.json')

  const apiService = jasmine.createSpyObj('APIService', ['getModules', 'getPackage'])

  let getModulesSpy = apiService.getModules.and.returnValue(asyncData(getModulesData))
  let getPackageSpy = apiService.getPackage.and.returnValue(asyncData(getPackageData))

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PackageComponent
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

  it('should create the Package component', async(() => {
    fixture = TestBed.createComponent(PackageComponent);
    fixture.detectChanges();
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should fetch the modules/tools (fakeAsync)', fakeAsync(() => {
    tick()
    expect(apiService.getModules).toHaveBeenCalledTimes(1);
  }));

  it('should fetch the package (fakeAsync)', fakeAsync(() => {
    tick()
    expect(apiService.getPackage).toHaveBeenCalledTimes(1);
  }));
  //
  // it('Should allow the user to select a module/tool', fakeAsync(() => {
  //   fixture = TestBed.createComponent(PackageComponent);
  //   fixture.detectChanges();
  //   tick()
  //   let instance = fixture.debugElement.componentInstance
  //   instance.save()
  //   expect(apiService.setVariables).toHaveBeenCalledWith(getVariablesData);
  // }))
});
