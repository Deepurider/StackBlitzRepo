import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgGridApiComponent } from './components/ag-grid-api/ag-grid-api.component';

const routes: Routes = [
  {path:'ag-grid-api' , component:AgGridApiComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
