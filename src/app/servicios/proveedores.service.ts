import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {
  presURL = 'https://appcompras1214.firebaseio.com/proveedores.json';
  preURL = 'https://appcompras1214.firebaseio.com/proveedores';
  constructor(private http: Http) {}

  postProveedor( proveedor: any) {
    const newprov = JSON.stringify(proveedor);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.post( this.presURL, newprov, {headers})
    .pipe(map( res => {
      console.log(res.json());
      return res.json();
    }))
  }

  getProveedores () {
    return this.http.get( this.presURL )
    .pipe(map( res => res.json()));
  }

  getProveedor ( id$: string ){
    const url = `${ this.preURL }/${ id$ }.json`;
    return this.http.get( url )
      .pipe(map( res => res.json()));
  }

  putProveedor( proveedor: any, id$: string) {
    const newpre = JSON.stringify(proveedor);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    const url = `${ this.preURL }/${ id$ }.json`;

    return this.http.put( url, newpre, {headers})
    .pipe(map( res => {
      console.log(res.json());
      return res.json();
    }))
  }

  delProveedor ( id$: string ) {
    const url = `${ this.preURL }/${ id$ }.json`;
    return this.http.delete( url )
      .pipe(map( res => res.json()));
  }

  getProveedoresSearch(busqueda: string) {
    const url = `${ this.presURL }?orderBy="nombre"&startAt="${ busqueda}"&endAt="${ busqueda }\uf8ff"`;
    return this.http.get( url )
      .pipe(map( res => res.json()));
    }

}