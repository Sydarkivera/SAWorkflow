import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { defer } from 'rxjs';

import { AdminGlobalComponent } from './global-variables.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import getVariablesData from '@services/mock/getVariables.json';
import { MessageModule } from '../../Components/Message/Message.module';
import { ModalModule } from '../../Components/Modal/Modal.module';
import { NavbarModule } from '../../Components/Navbar/Navbar.module';

import { APIService } from '../../Services/api.service';

const asyncData = <T>(data: T) => (defer(() => Promise.resolve(data)));

describe('AdminGlobal', () => {
  let fixture: ComponentFixture<AdminGlobalComponent>;

  const apiService = jasmine.createSpyObj('APIService', ['getVariables', 'setVariables']);

  const getVariablesSpy = apiService.getVariables.and.returnValue(asyncData(getVariablesData));
  const setVariablesSpy = apiService.setVariables.and.returnValue(asyncData({}));

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
    })
    .compileComponents()
    .catch();
  }));

  it('should create the Admin global', async(() => {
    fixture = TestBed.createComponent(AdminGlobalComponent);
    fixture.detectChanges();
    const app = fixture.debugElement.componentInstance;
    expect(app)
    .toBeTruthy()
    .catch();
  }));

  it('should fetch the variables (fakeAsync)', fakeAsync(() => {
    tick();
    expect(apiService.getVariables)
    .toHaveBeenCalledTimes(1)
    .catch();
  }));

  it('Should allow the user to select a module/tool', fakeAsync(() => {
    fixture = TestBed.createComponent(AdminGlobalComponent);
    fixture.detectChanges();
    tick();
    const instance = fixture.debugElement.componentInstance;
    instance.save();
    expect(apiService.setVariables)
    .toHaveBeenCalledWith(getVariablesData)
    .catch();
  }));
});
