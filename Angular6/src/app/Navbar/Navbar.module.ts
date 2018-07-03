import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { RouterModule } from '@angular/router';
// import {Tooltip} from "./Tooltip.directive";
// import {TooltipComponent} from "./Tooltip.component";

// export * from "./Tooltip.directive";
// export * from "./Tooltip.component";
import { NavbarComponent } from './Navbar.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        NavbarComponent
    ],
    exports: [
        NavbarComponent
    ],
    entryComponents: [
        NavbarComponent
    ]
})
export class NavbarModule {

}
