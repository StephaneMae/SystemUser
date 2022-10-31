import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'requesting',
    loadChildren: () => import('./requesting/requesting.module').then( m => m.RequestingPageModule)
  },
  {
    path: 'receipt',
    loadChildren: () => import('./receipt/receipt.module').then( m => m.ReceiptPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'clearance',
    loadChildren: () => import('./clearance/clearance.module').then( m => m.ClearancePageModule)
  },
  {
    path: 'indigency',
    loadChildren: () => import('./indigency/indigency.module').then( m => m.IndigencyPageModule)
  },
  {
    path: 'residency',
    loadChildren: () => import('./residency/residency.module').then( m => m.ResidencyPageModule)
  },
  {
    path: 'cedula',
    loadChildren: () => import('./cedula/cedula.module').then( m => m.CedulaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
