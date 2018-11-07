import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProveedoresService } from '../../servicios/proveedores.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addprovee',
  templateUrl: './addprovee.component.html',
  styleUrls: ['./addprovee.component.css']
})
export class AddproveeComponent implements OnInit {

  proveedorForm: FormGroup;
  proveedor: any;
  nombre: any;
  direccion: any;
  ciudad: any;
  telefono: any;

  constructor(private pf: FormBuilder, 
  private proveedorService: ProveedoresService){
    
  }

  ngOnInit() {
    this.proveedorForm = this.pf.group({
      nombre:['', Validators.required ],
      direccion:['', Validators.required ],
      ciudad:['', Validators.required ],
      telefono:['', Validators.required ],
      email:['', Validators.required ],
    });
  }

  onSubmit(){
    this.proveedor = this.saveProveedor();
    this.proveedorService.postProveedor( this.proveedor ).subscribe(newpres => {})
    this.proveedorForm.reset();
  }

  saveProveedor() {
    const saveProveedor = {
      nombre: this.proveedorForm.get('nombre').value,
      direccion: this. proveedorForm.get('direccion').value,
      ciudad: this.proveedorForm.get('ciudad').value,
      telefono: this.proveedorForm.get('telefono').value,
      email: this.proveedorForm.get('email').value,
    };
    return saveProveedor;
  }

}
