import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  git = new BehaviorSubject<any>([]);
  gitRepo = new BehaviorSubject<any>([]);
  public username:string = "k-koech";

  constructor(private http:HttpClient) { }

  searchGithubUser(usernames: string)
  {
    // this.username = usernames;
    // return this.http.get(`https://api.github.com/users/${this.username}?access_token=${environment.access_token}`)
    // .subscribe((response: any)=>{
    //   this.git.next(response)

    // });
    // this.getGithubUser();
    this.getGithubRepo();
  }

  public getGithubUser()
  {
    return this.http.get(`https://api.github.com/users/${this.username}?access_token=${environment.access_token}`)
      .subscribe((response: any)=>{
        this.git.next(response);
        console.log(response);
      });
      
  }
  
  getGits()
  {
    return this.git.asObservable();
  }


  getGithubRepo()
  {
    return this.http.get(`https://api.github.com/users/${this.username}/repos?access_token=${environment.access_token}`)
      .subscribe((response: any)=>{
        this.gitRepo.next(response);
         console.log(response);
      });
  }

  getRepos()
    {
      return this.gitRepo.asObservable();

    }
  

  
}

