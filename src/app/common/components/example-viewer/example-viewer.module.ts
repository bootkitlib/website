import { NgModule } from '@angular/core';
import { ExampleViewerComponent } from './example-viewer.component';

const DECLARES = [
  ExampleViewerComponent
];

@NgModule({
  imports: DECLARES,
  exports: DECLARES,
})
export class ExampleViewerModule { }
