import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RepositoriesComponent } from './repositories/repositories.component';

const routes: Routes = [
  { path: '', component: GithubComponent },
  { path: 'repos', component:RepositoriesComponent },
  { path:'**', component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
