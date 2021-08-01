import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Repository } from '../repository';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  repositories!: Repository[];

  constructor(private http: HttpClient,private dataService:DataService) { }

  ngOnInit(): void {

        
// Repo
   this.dataService.getGithubRepo();

   this.dataService.getRepos()
   .subscribe((response: any) => {
         this.repositories = response;
         console.log(this.repositories)
       });
  }

}
