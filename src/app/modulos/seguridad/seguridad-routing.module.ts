import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdentificacionUsuarioComponent } from './identificacion-usuario/identificacion-usuario.component';
import { CambioClaveComponent } from './cambio-clave/cambio-clave.component';
import { RecuperarClaveComponent } from './recuperar-clave/recuperar-clave.component';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';
import { IdentificacionTwoFAComponent } from './identificacion-two-fa/identificacion-two-fa.component';

const routes: Routes = [
  {
    path:"identificar-usuario",
    component: IdentificacionUsuarioComponent
  },
  {
    path:"cambiar-clave",
    component: CambioClaveComponent
  },
  {
    path:"cerrar-sesion",
    component: CerrarSesionComponent
  },
  {
    path:"recuperar-clave",
    component: RecuperarClaveComponent
  }
  ,
  {
    path:"2fa",
    component: IdentificacionTwoFAComponent 

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
