import { NgModule } from '@angular/core';
import { AddressComponent } from './address/address';
import { ProgressBarComponent } from './progress-bar/progress-bar';
@NgModule({
	declarations: [AddressComponent,
    ProgressBarComponent],
	imports: [],
	exports: [AddressComponent,
    ProgressBarComponent]
})
export class ComponentsModule {}
