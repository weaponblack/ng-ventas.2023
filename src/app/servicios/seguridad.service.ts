import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioModel } from '../modelos/usuario.model';
import { HttpClient } from '@angular/common/http';
import { configuracionRutasBackend } from '../config/configuracion.rutas.backend';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  urlBase:string = configuracionRutasBackend.urlSeguridad;

  constructor(private http: HttpClient) { }
  /**
   * 
   * @param usuario 
   * @param clave 
   * @returns 
   */
  identificarUsuario(usuario:string,clave:string):Observable<UsuarioModel>{
    return this.http.post<UsuarioModel>(`${this.urlBase}identificar-usuario`,{
      correo: usuario,
      clave: clave
    });
  }

  RecuperarClavePorUsuario(usuario: string): Observable<UsuarioModel> {
    return this.http.post<UsuarioModel>(`${this.urlBase}recuperar-clave`, {
      correo: usuario,
    });
  }
  /**
   * Almacena los datos del usuario
   * @param datos datos del usaurio
   */
  AlmacenarUsuarioIdentificado(datos:UsuarioModel):boolean{
    let cadena = JSON.stringify(datos);
    let datosLS = localStorage.getItem("datos-usuario");
    if(datosLS){
      return false
    }
    else{
      localStorage.setItem("datos-usuario",cadena);
      return true;
    }
  }
 /**
  * Busca los datos almacenados en local storage
  * @returns 
  */
  ObtenerDatosUsuarioLS():UsuarioModel|null{
    let datosLS = localStorage.getItem("datos-usuario");
    if(datosLS){
      let datos = JSON.parse(datosLS);
      return datos
    }else{
      return null;
    }
  }
  /**
   * Validar 2fa
   * @param idUsuario 
   * @param codigo 
   * @returns 
   */
  ValidarCodigo2FA(idUsuario:string,codigo:string):Observable<object>{
    return this.http.post<object>(`${this.urlBase}identificar-usuario`,{
      usuarioId: idUsuario,
      codigo2fa: codigo
    });
  }
}
