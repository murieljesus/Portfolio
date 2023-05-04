import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent} from '../components/home/home.component'; 

export const routes: Routes = [
    { path: 'home',  component: HomeComponent, data:{title: 'Home'} },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }