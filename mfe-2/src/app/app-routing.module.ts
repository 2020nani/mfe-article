import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const MFE2_ROUTES: Routes = [
  {
    path: '',
    component: AppComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(MFE2_ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
