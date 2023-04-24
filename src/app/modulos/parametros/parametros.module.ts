import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametrosRoutingModule } from './parametros-routing.module';
import { ElliminarClienteComponent } from './cliente/elliminar-cliente/elliminar-cliente.component';
import { CrearClienteComponent } from './cliente/crear-cliente/crear-cliente.component';
import { ListarClienteComponent } from './cliente/listar-cliente/listar-cliente.component';
import { EditarClienteComponent } from './cliente/editar-cliente/editar-cliente.component';
import { EditarProductoComponent } from './producto/editar-producto/editar-producto.component';
import { ListarProductoComponent } from './producto/listar-producto/listar-producto.component';
import { EliminarProductoComponent } from './producto/eliminar-producto/eliminar-producto.component';
import { CrearProductoComponent } from './producto/crear-producto/crear-producto.component';


@NgModule({
  declarations: [
    ElliminarClienteComponent,
    CrearClienteComponent,
    ListarClienteComponent,
    EditarClienteComponent,
    EditarProductoComponent,
    ListarProductoComponent,
    EliminarProductoComponent,
    CrearProductoComponent
  ],
  imports: [
    CommonModule,
    ParametrosRoutingModule
  ]
})
export class ParametrosModule { }
