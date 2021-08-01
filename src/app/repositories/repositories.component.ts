import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
  repos:any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  // REPOSITORIES
  public getGithubRepos()
  {
    return this.http.get(`https://api.github.com/users/k-koech/repos?access_token=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`)
    .subscribe(res=>{
      console.log("kk");
      console.log(res);
        this.repos = res;
      });
  }

}
