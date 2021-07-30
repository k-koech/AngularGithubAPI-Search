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

  constructor(private http:HttpClient) { }

  getGithubUser()
  {
    return this.http.get(`https://api.github.com/users/k-koech?access_token=${environment.access_token}`)
      .subscribe((response: any)=>{
        this.git.next(response);

      });
  }

  searchGithubUser(User: string)
  {
    return this.http.get(`https://api.github.com/users/${User}?access_token=${environment.access_token}`)
    .subscribe((response: any)=>{
      this.git.next(response)
      return this.http.get(`https://api.github.com/users/${User}/repos?access_token=${environment.access_token}`);
    });

  }
  
  getGits()
  {
    return this.git.asObservable();
  }


  getGithubRepo()
  {
    return this.http.get(`https://api.github.com/users/k-koech/repos?access_token=${environment.access_token}`);
      // .subscribe((response: any)=>{
      //   this.gitRepo.next(response);
      //    console.log(response);
      // });
  }

  
}

