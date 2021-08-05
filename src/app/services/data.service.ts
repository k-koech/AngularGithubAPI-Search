import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  git = new BehaviorSubject<any>([]);
  gitRepo = new BehaviorSubject<any>([]);
  repos:any;
  public username:string = "k-koech";

  constructor(private http:HttpClient) { 
    
  }
// USER
 public getGithubUser()
  {
    interface UserApiResponse
    {
      name: string;
      avatar_url: string;
      login: string;
      bio: string;
      location: string;
      followers: number;
      following: number;
      created_at: Date;
      updated_at:Date;
      public_repos:number;
    }
 
    return this.http.get<UserApiResponse>(`https://api.github.com/users/${this.username}? -d {"access_token": ${environment.key} }    `)
      .subscribe((response: any)=>{
        this.git.next(response);
        console.log(response);
      });
  }

  
  searchGithubUser(username: string)
  {
    return this.http.get(`https://api.github.com/users/${username}? -d {"access_token": ${environment.key} }`)
    .subscribe((response: any)=>{
      this.git.next(response); 
      this.searchUserRepo(username);   
    });
  
  }
  
  getGits()
  {
    return this.git.asObservable();
  }

// USER REPOSITORIES
  getGithubRepo()
  {
    interface RepoApiResponse
    {
      name: string;
      description: string;
      homepage: string;
      language: string;
      url: string;
      forks: number;
      watchers: number;
    }
    
    return this.http.get(`https://api.github.com/users/${this.username}/repos? -d {"access_token": ${environment.key} }`)
    .subscribe((response: any)=>{
      this.gitRepo.next(response);
    });
  }

  searchUserRepo(username: string)
  {
    return this.http.get(`https://api.github.com/users/${username}/repos? -d {"access_token": ${environment.key} }`)
    .subscribe((response: any)=>{
      this.gitRepo.next(response);
    });
  }

  getRepos()
  {
    return this.gitRepo.asObservable();

  }
 
  

}

