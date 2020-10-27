import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  //id : any[];
  title : any[];
  author : any[];
  blog : any[]

  constructor(private dataService: DataService) {}

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
  this.blog = [];

  for(let i=0; i< jsonArray.length ; i++)
  {
     let jsonObject = jsonArray[i];
     //this.id.push(jsonObject.id);
     this.title.push(jsonObject.title);
     this.author.push(jsonObject.author.name);
     this.blog.push(jsonObject.blog_entry);

  }
}
}
