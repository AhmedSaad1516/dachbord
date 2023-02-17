import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/auth/component/login/login.component';
import { HomeComponent } from 'src/dachboard/layout/home/home.component';


const routes: Routes = [
 {path:'',
loadChildren: () => import(`../dachboard/dachboard.module`).then(m => m.DachboardModule)

},
{path:'login',
loadChildren: () => import(`../auth/auth.module`).then(m => m.AuthModule)

},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
