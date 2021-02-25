import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerfomanceComponent } from './perfomance/perfomance.component';
import { ProfileComponent } from './profile/profile.component';
import { ResultsComponent } from './results/results.component';

const routes: Routes = [
  { path: '', redirectTo: '/profile', pathMatch: 'full' },
  {path: 'results', component: ResultsComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'perfomance', component: PerfomanceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
