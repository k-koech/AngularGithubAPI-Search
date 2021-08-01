import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';RepositoriesComponent
import { GithubComponent } from './github/github.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchUserComponent } from './search-user/search-user.component';
import { DateCountPipe } from './date-count.pipe';
import { ColorDirective } from './color.directive';
import { RepositoriesComponent } from './repositories/repositories.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    SearchUserComponent,
    DateCountPipe,
    ColorDirective,
    NotFoundComponent,
        
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
