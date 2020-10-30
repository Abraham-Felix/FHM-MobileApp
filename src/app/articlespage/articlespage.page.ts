import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-articlespage',
  templateUrl: './articlespage.page.html',
  styleUrls: ['./articlespage.page.scss'],
})
export class ArticlespagePage implements OnInit {


    //id : any[];
    title : any[];
    author : any[];
    date : any[];
    content : any[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getRemoteData().subscribe(data => {
      console.log("Remote Data:" + JSON.stringify(data));
      //console.log(data);
      this.parseJson(data);
    });
  }

  parseJson(data)
  {
     let jsonArray = data;

    //this.id = [];
    this.title = [];
    this.author = [];
    this.date = [];
    this.content = [];

    for(let i=0; i< jsonArray.length ; i++)
    {
       let jsonObject = jsonArray[i];
       //this.id.push(jsonObject.id);
       this.title.push(jsonObject.title);
       this.author.push(jsonObject.author.name);
       this.date.push(jsonObject.created_at );
       this.content.push(jsonObject.blog_entry );

    }
  }



}
