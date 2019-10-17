import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  id : any[];
  name : any[];
  constructor(private dataService: DataService) {}

ngOnInit() {

  this.dataService.getRemoteData().subscribe(data => {
    console.log("Remote Data:" + JSON.stringify(data));
   // console.log(data);
    this.parseJson(data);
  });
 }

parseJson(data)
{
   let jsonArray = data.record;

  this.id = [];
  this.name = [];

  for(let i=0; i< jsonArray.length ; i++)
  {
     let jsonObject = jsonArray[i];
     this.id.push(jsonObject.id);
     this.name.push(jsonObject.name);
  }
}
}
