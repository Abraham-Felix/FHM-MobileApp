import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  data : any[];
  author : any [];
  constructor(private dataService: DataService) {}

ngOnInit() {

  this.dataService.getRemoteData().subscribe(data => {
    console.log("Remote Data:");
    console.log(data);
    this.parseJson(data);
  });
 }

parseJson(data)
{
   let jsonArray = data.data.children;

  this.data = [];
  this.author = [];

  for(let i=0; i< jsonArray.length ; i++)
  {
     let jsonObject = jsonArray[i];
     this.data.push(jsonObject.data);
     this.author.push(jsonObject.author);
  }
}
}
