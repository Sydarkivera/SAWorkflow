import { TestBed, async, fakeAsync, ComponentFixture, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { defer } from 'rxjs'

import { AdminGlobalComponent } from './AdminGlobal.component';

import { NavbarModule } from '../Navbar/Navbar.module';
import { ModalModule } from '../Modal/Modal.module';
import { MessageModule } from '../Components/Message/Message.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { APIService } from '../Services/api.service';

function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}

describe('AdminGlobal', () => {
  let fixture: ComponentFixture<AdminGlobalComponent>;

  const getVariablesData = require('../Services/mock/getVariables.json')
  const apiService = jasmine.createSpyObj('APIService', ['getVariables', 'setVariables'])

  let getVariablesSpy = apiService.getVariables.and.returnValue(asyncData(getVariablesData))
  let setVariablesSpy = apiService.setVariables.and.returnValue(asyncData({}))

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AdminGlobalComponent
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
        { provide: APIService, useValue: apiService }
      ]
    }).compileComponents();
  }));

  it('should create the Admin global', async(() => {
    fixture = TestBed.createComponent(AdminGlobalComponent);
    fixture.detectChanges();
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should fetch the variables (fakeAsync)', fakeAsync(() => {
    tick()
    expect(apiService.getVariables).toHaveBeenCalledTimes(1);
  }));

  it('Should allow the user to select a module/tool', fakeAsync(() => {
    fixture = TestBed.createComponent(AdminGlobalComponent);
    fixture.detectChanges();
    tick()
    let instance = fixture.debugElement.componentInstance
    instance.save()
    expect(apiService.setVariables).toHaveBeenCalledWith(getVariablesData);
  }))
});
