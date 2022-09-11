import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContainerComponent } from './containers/main-container/main-container.component';
import { MainRoutingModule } from './main-routing.module';
import { UserService } from './services/user.service';
import { AgGridModule } from 'ag-grid-angular';
import { AgGridApiComponent } from './components/ag-grid-api/ag-grid-api.component';

@NgModule({
  imports: [CommonModule, MainRoutingModule, AgGridModule],
  declarations: [MainContainerComponent, AgGridApiComponent],
  bootstrap:[MainContainerComponent],
  providers: [UserService],
})
export class MainModule {}
