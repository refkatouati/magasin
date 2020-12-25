import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { DetailComponent } from './detail/detail.component';
import { ListeComponent } from './liste/liste.component';

const routes: Routes = [
  {path:'',component:ListeComponent},
  {path:'liste',component:ListeComponent},
  {path:'add',component:AddComponent},
  {path:'detail/:id',component:DetailComponent},
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
