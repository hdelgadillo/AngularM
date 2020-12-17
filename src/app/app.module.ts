import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { MenuComponent } from './menu/menu.component';
import { ListaCompletaComponent } from './lista-completa/lista-completa.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { NuevousrComponent } from './nuevousr/nuevousr.component';
import { UncompComponent } from './uncomp/uncomp.component';
import { UpdateComponent } from './update/update.component';
import { UsuariopropioComponent } from './usuariopropio/usuariopropio.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    MenuComponent,
    ListaCompletaComponent,
    DeleteUserComponent,
    NuevousrComponent,
    UncompComponent,
    UpdateComponent,
    UsuariopropioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
