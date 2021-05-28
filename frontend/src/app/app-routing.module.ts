import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Implementación de LazyLoading
const routes: Routes = [
  {
    //Path para auth
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    //Path para cualquier otra ruta que no sea una  de las creadas
    path: '**',
    redirectTo: 'auth',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
