import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

import { PresupuestosService } from './servicios/presupuestos.service';
import { ProveedoresService } from './servicios/proveedores.service';
import { LoadfileService } from './servicios/loadfile.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { ProveedoresComponent } from './proveedores/proveedores/proveedores.component';
import { InicioComponent } from './inicio/inicio.component';
import { HeaderComponent } from './header/header.component';
import { AddproveeComponent } from './proveedores/addprovee/addprovee.component';
import { AddpresComponent } from './presupuestos/addpres/addpres.component';
import { PresupuestosComponent } from './presupuestos/presupuestos/presupuestos.component';
import { EditpresComponent } from './presupuestos/editpres/editpres.component';
import { RegistroComponent } from './autenticacion/registro/registro.component';
import { AutenticacionService } from './servicios/autenticacion.service';
import { InisesComponent } from './autenticacion/inises/inises.component';
import { GuardService } from './servicios/guard.service';
import { FacturasModule } from './facturas/facturas.module';
import { FacturasComponent } from './facturas/facturas/facturas.component';
import { AddfactComponent } from './facturas/addfact/addfact.component';
import { UploadComponent } from './upload/upload.component';




const routes: Routes = [  
  { path: '', component: InicioComponent }, 
  { path: 'proveedores', component: ProveedoresComponent, canActivate:[GuardService]},
  { path: 'addprovee', component: AddproveeComponent, canActivate:[GuardService]},
  { path: 'addpres', component: AddpresComponent, canActivate:[GuardService]},
  { path: 'presupuestos', component: PresupuestosComponent, canActivate:[GuardService]},
  { path: 'editpres/:id', component: EditpresComponent, canActivate:[GuardService]},
  { path: 'registro', component: RegistroComponent },
  { path: 'iniciosesion', component: InisesComponent },
  { path: 'facturas', component: FacturasComponent },
  { path: 'addfact', component: AddfactComponent},
  { path: 'uploads', component: UploadComponent },

  { path: '**', component: InicioComponent},
  ];
  
@NgModule({
  declarations: [
    AppComponent,
    ProveedoresComponent,
    InicioComponent,
    HeaderComponent,
    AddproveeComponent,
    AddpresComponent,
    PresupuestosComponent,
    EditpresComponent,
    RegistroComponent,
    InisesComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    FacturasModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [ProveedoresService, 
    PresupuestosService,
    LoadfileService,
    AutenticacionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
