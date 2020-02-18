import { TestBed, async, fakeAsync, ComponentFixture, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { defer } from 'rxjs'

import { AdminModulesComponent } from './Modules.component';

import { NavbarModule } from '../../Components/Navbar/Navbar.module';
import { ModalModule } from '../../Components/Modal/Modal.module';
import { MessageModule } from '../../Components/Message/Message.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FileBrowserModule } from '../../Components/FileBrowser/FileBrowser.module';

import { APIService } from '../../Services/api.service';

function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}

describe('AdminModules', () => {
  let fixture: ComponentFixture<AdminModulesComponent>;

  const getModulesData = require('../Services/mock/getModules.json')
  const getDockerImagesData = [];
  const apiService = jasmine.createSpyObj('APIService', ['getModules', 'getDockerImages'])

  let getModulesSpy = apiService.getModules.and.returnValue(asyncData(getModulesData))
  let getDockerImagesSpy = apiService.getDockerImages.and.returnValue(asyncData(getDockerImagesData))

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AdminModulesComponent
      ],
      imports: [
        RouterTestingModule,
        NavbarModule,
        ModalModule,
        MessageModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        FileBrowserModule
      ],
      providers: [
        { provide: APIService, useValue: apiService }
      ]
    }).compileComponents();
  }));

  it('should create the Admin modules', async(() => {
    fixture = TestBed.createComponent(AdminModulesComponent);
    fixture.detectChanges();
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should fetch the modules (fakeAsync)', fakeAsync(() => {
    tick
    expect(apiService.getModules).toHaveBeenCalledTimes(1);
  }));

  it('Should allow the user to select a module/tool', fakeAsync(() => {
    fixture = TestBed.createComponent(AdminModulesComponent);
    fixture.detectChanges();
    tick()
    let instance = fixture.debugElement.componentInstance
    expect(instance.selected_module.module_id).toEqual(-1)
    instance.setModule(instance.modules[0])
    expect(instance.selected_module.module_id).toEqual(2)

  }))
});
