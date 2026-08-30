import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPage } from './landing-page/landing-page';
import { Plan } from './plan/plan';
import { Signup } from './signup/signup';
import { Payment } from './payment/payment';

export const routes: Routes = [
    { path: 'Home', component: LandingPage },
    { path: 'plan', component: Plan },
    { path: 'home', component: LandingPage },
    { path: 'signup', component: Signup },
    { path: 'payment', component: Payment },
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: '**', redirectTo: '/Home' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}