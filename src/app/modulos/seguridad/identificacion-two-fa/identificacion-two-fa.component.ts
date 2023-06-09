import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//import { UsuarioValidadoModel } from 'src/app/modelos/usuario.validado.model';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-identificacion-twofa',
  templateUrl: './identificacion-two-fa.component.html',
  styleUrls: ['./identificacion-two-fa.component.css']
})
export class IdentificacionTwoFAComponent {

  usuarioId: string = "";
  fGroup: FormGroup = new FormGroup({});

  constructor(
    private servicioSeguridad: SeguridadService,
    private fb: FormBuilder,
    private router: Router
  ) {

  }

  ngOnInit() {
    let datos = this.servicioSeguridad.ObtenerDatosUsuarioLS();
    if (datos != null) {
      this.usuarioId = datos._id!;
      this.ConstruirFormulario();
    }else{
      this.router.navigate(['/seguridad/identificar-usuario']);
    }
  }

  ConstruirFormulario() {
    this.fGroup = this.fb.group({
      codigo: ['', [Validators.required]]
    });
  }

  /**
   * Validación del 2fa
   */
  ValidarCodigo2fa() {
    if (this.fGroup.invalid) {
      alert("Debe ingresar el código");
    } else {
      let codigo2fa = this.ObtenerFormGroup["codigoo"].value;
      this.servicioSeguridad.ValidarCodigo2FA(this.usuarioId, codigo2fa).subscribe({
        next: (datos:object) =>{
          console.log(datos);
          this.router.navigate([""]);
        },
        error: (err) => {
          console.log(err);
        }
      });
    }
  }

  get ObtenerFormGroup() {
    return this.fGroup.controls;
  }

}