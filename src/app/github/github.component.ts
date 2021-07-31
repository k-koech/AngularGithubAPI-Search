import { Component,OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../services/data.service'
import { User } from '../user';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit, OnDestroy {
  git:any;
  repos:any;
  subscription: Subscription = new Subscription;
  subs: Subscription = new Subscription;

constructor( private dataService:DataService) 
{ }

ngOnInit(): void  
{
 
  // interface ApiResponse
  //   {
  //     name:string;
  //     username:string;
  //   } 
  this.dataService.getGithubUser();
  this.subscription =  this.dataService.getGits()
  .subscribe((response: any) => {
        this.git = response;
      });
      
   this.dataService.getGithubRepo();

   this.subs =  this.dataService.getRepos()
   .subscribe((response: any) => {
         this.git = response;
       });
     
 
  }
  

  ngOnDestroy()
  {
     this.subscription.unsubscribe();
     this.subs.unsubscribe();
  }



}
