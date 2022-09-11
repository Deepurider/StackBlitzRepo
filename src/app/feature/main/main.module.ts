import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContainerComponent } from './containers/main-container/main-container.component';
import { MainRoutingModule } from './main-routing.module';

@NgModule({
  imports: [CommonModule, MainRoutingModule],
  declarations: [MainContainerComponent],
  bootstrap: [MainContainerComponent],
})
export class MainModule {}
