import { TestBed, async, fakeAsync, ComponentFixture, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { defer } from 'rxjs'

import { AdminTemplatesComponent } from './Templates.component';

import { NavbarModule } from '@app/Components/Navbar/Navbar.module';
import { ModalModule } from '@app/Components/Modal/Modal.module';
import { MessageModule } from '@app/Components/Message/Message.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { APIService } from '@services/api.service';

function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}

describe('Admin Templates', () => {
  let fixture: ComponentFixture<AdminTemplatesComponent>;

  const getTemplatesData = require('@services/mock/getTemplates.json');
  const getModulesData = require('@services/mock/getModules.json');
  const getTemplateData = require('@services/mock/getTemplate.json');
  const apiService = jasmine.createSpyObj('APIService', ['getTemplates', 'getModules', 'getTemplate']);

  let getTemplatesSpy = apiService.getTemplates.and.returnValue(asyncData(getTemplatesData));
  let getModulesSpy = apiService.getModules.and.returnValue(asyncData(getModulesData));
  let getTemplateSpy = apiService.getTemplate.and.returnValue(asyncData(getTemplateData));

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AdminTemplatesComponent
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
    fixture = TestBed.createComponent(AdminTemplatesComponent);
    fixture.detectChanges();
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should fetch the templates (fakeAsync)', fakeAsync(() => {
    tick()
    expect(apiService.getTemplates).toHaveBeenCalledTimes(1);
  }));

  it('should fetch the modules (fakeAsync)', fakeAsync(() => {
    tick()
    expect(apiService.getModules).toHaveBeenCalledTimes(1);
  }));

  it('Should not have any template selected at start', fakeAsync(() => {
    fixture = TestBed.createComponent(AdminTemplatesComponent);
    fixture.detectChanges();
    tick()
    let instance = fixture.debugElement.componentInstance
    expect(instance.selected_template_id).toEqual(-1);
  }));

  it('Should allow the user to select a template', fakeAsync(()=> {
    fixture = TestBed.createComponent(AdminTemplatesComponent);
    fixture.detectChanges();
    tick()
    let instance = fixture.debugElement.componentInstance
    instance.selectTemplate(instance.templates[0]);
    expect(instance.selected_template_id).toEqual(0);

  }))

  // it('Should allow the user to select a module/tool', fakeAsync(() => {
    // fixture = TestBed.createComponent(AdminTemplatesComponent);
    // fixture.detectChanges();
    // tick()
    // let instance = fixture.debugElement.componentInstance
    // instance.save()
  //   expect(apiService.setVariables).toHaveBeenCalledWith(getVariablesData);
  // }))
});
