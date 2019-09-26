import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Tooltip} from "./Tooltip.directive";
import {TooltipComponent} from "./Tooltip.component";

export * from "./Tooltip.directive";
export * from "./Tooltip.component";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        Tooltip,
        TooltipComponent,
    ],
    exports: [
        Tooltip,
        TooltipComponent,
    ],
    entryComponents: [
        TooltipComponent
    ]
})
export class TooltipModule {

}
