import { TestBed, async, fakeAsync, ComponentFixture, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { defer, Observable, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { PackageTemplateComponent } from './PackageTemplate.component';

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

const MOCK_ID = 1

describe('Package template component', () => {
  let fixture: ComponentFixture<PackageTemplateComponent>;

  const getTemplatesData = require('../Services/mock/getTemplates.json')
  const getPackageData = require('../Services/mock/getPackage.json')

  const apiService = jasmine.createSpyObj('APIService', ['getTemplates', 'getPackage'])

  let getTemplatesSpy = apiService.getTemplates.and.returnValue(asyncData(getTemplatesData))
  let getPackageSpy = apiService.getPackage.and.returnValue(asyncData(getPackageData))

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PackageTemplateComponent
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
              params: of({id: MOCK_ID})
            }
          }
        }
      ]
    }).compileComponents();
  }));

  it('should create the Package template component', async(() => {
    fixture = TestBed.createComponent(PackageTemplateComponent);
    fixture.detectChanges();
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should fetch the templates (fakeAsync)', fakeAsync(() => {
    tick()
    expect(apiService.getTemplates).toHaveBeenCalledTimes(1);
  }));

  it('should fetch the package (fakeAsync)', fakeAsync(() => {
    tick()
    expect(apiService.getPackage).toHaveBeenCalledTimes(1);
    expect(apiService.getPackage).toHaveBeenCalledWith(MOCK_ID)
  }));
});
