import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuardGuard } from 'src/core/Route-Guard/guard.guard';
import { NavbarComponent } from './navbar/navbar.component';


const routes: Routes = [
{
  path:'', 
  component:NavbarComponent,
  canActivateChild:[GuardGuard],
  children: [

    {path:'home', 
    loadChildren: () => import(`./layout/layout.module`).then(m => m.LayoutModule)
    }
  ]
}, 
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DachboardRoutingModule { }
