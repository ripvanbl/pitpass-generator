import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CanActivateViaAuthGuard } from './auth/auth.routeguard';
import { InfoComponent } from './info/info.component';
import { IntroComponent } from './intro/intro.component';
import { ThemesComponent } from './themes/themes.component';

const routes: Routes = [
  { path: 'intro', component: IntroComponent },
  { path: 'info', component: InfoComponent },
  { path: 'theme', component: ThemesComponent },
  { path: '**', redirectTo: '/intro'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
