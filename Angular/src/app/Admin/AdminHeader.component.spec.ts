import { TestBed, async } from '@angular/core/testing';
import { AdminHeaderComponent } from './AdminHeader.component';
import { RouterTestingModule } from '@angular/router/testing';

import { NavbarModule } from '../Components/Navbar/Navbar.module';


describe('AdminHeader', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AdminHeaderComponent
      ],
      imports: [
        RouterTestingModule,
        NavbarModule
      ],
    }).compileComponents();
  }));

  it('should create the admin header', async(() => {
    const fixture = TestBed.createComponent(AdminHeaderComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  // it(`should have a link to dashboard`, async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('app');
  // }));
  //
  it('should render an empty navbar', async(() => {
    const fixture = TestBed.createComponent(AdminHeaderComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('navbar')).toBeTruthy();
  }));

  it('should contain a router outlet', async(() => {
    const fixture = TestBed.createComponent(AdminHeaderComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('router-outlet')).toBeTruthy();
  }));
});
