import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NaturalComponent } from './natural/natural.component';
import { CloseComponent } from './close/close.component';
import { CityComponent } from './city/city.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RuralComponent } from './rural/rural.component';
import { DetailviewComponent } from './detailview/detailview.component';

const routes: Routes = [
  {path:'' , redirectTo:'home', pathMatch:'full'},
  {path:'home' , component:HomeComponent},
  {path:'natural' , component:NaturalComponent},
  {path:'closenatural' , component:CloseComponent},
  {path:'citylife' , component:CityComponent},
  {path:'rural' , component:RuralComponent},
  {path:'details/:id' , component:DetailviewComponent},
  {path:'**' , component:NotfoundComponent},

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
