import { Component,OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { Repository } from '../repository';
import { DataService } from '../services/data.service'
import { User } from '../user';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit, OnDestroy {
  git:any;
  subscription: Subscription = new Subscription;
  subs: Subscription = new Subscription;
  user!:User;
  // repos!:Repository;
  repos! :any;

constructor( private dataService:DataService) 
{ }

ngOnInit(): void  
{   
  this.dataService.getGithubUser();
 
  this.subscription =  this.dataService.getGits()
  .subscribe((response: any) => {
        this.user = new User(response.name, response.avatar_url, response.login, response.bio,response.location, response.followers, response.following,
          response.created_at, response.updated_at,response.public_repos
          
        );
      });
      

   this.dataService.getGithubRepo();

   this.subs =  this.dataService.getRepos()
   .subscribe((response: any) => {
        
         this.repos = response;
       });
     
 
  }
  

  ngOnDestroy()
  {
     this.subscription.unsubscribe();
  }



}
