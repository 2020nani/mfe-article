import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const MFE1_ROUTES: Routes = [
  {
    path: '',
    component: AppComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(MFE1_ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
