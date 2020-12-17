import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from 'src/app/index/index.component';
import { MenuComponent } from './menu/menu.component';
import { ListaCompletaComponent } from 'src/app/lista-completa/lista-completa.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { NuevousrComponent } from './nuevousr/nuevousr.component';
import { UncompComponent } from './uncomp/uncomp.component';
import { UpdateComponent } from 'src/app/update/update.component';
import { UsuariopropioComponent } from './usuariopropio/usuariopropio.component';

const routes: Routes = [
  { path: '' , component: IndexComponent},
  { path: 'menu' , component: MenuComponent},
  { path: 'lista', component: ListaCompletaComponent},
  { path: 'deleteUser', component: DeleteUserComponent},
  { path: 'nuevo', component: NuevousrComponent},
  { path: 'uncomp', component: UncompComponent},
  { path: 'update', component: UpdateComponent},
  { path: 'usuarioPropio', component: UsuariopropioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
