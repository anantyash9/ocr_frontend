import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { FastapiclientService } from 'src/app/services/fastapiclient.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  image:any=null
  details:any=null

  board !: boolean
  university !: boolean
  grand_total !: boolean
  branch !: boolean

  constructor(private fastapiclient:FastapiclientService) { }

  ngOnInit(): void {
    
    this.details=this.fastapiclient.details[0]
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.image = reader.result;
    }, false);
    reader.readAsDataURL(this.fastapiclient.details[1]);
    console.log("text");
    console.log(this.details);
    console.log(this.details.Details);
  //   this.fastapiclient.fileDetails("").subscribe(
  //     (data)=>{
  //       this.details = data;
  //       console.log(this.details) 
  //     }
  // )
  

  if(this.details.Details.hasOwnProperty('BOARD')){
    this.board = true;
    this.university = false;
    console.log("board")
  }
  else if(this.details.Details.hasOwnProperty('Branch')){
      this.branch = true;
      this.board = false;
      console.log("dc")
  }

  else{
      this.board = false;
      this.university = true;
      console.log("univer")

      //  modify the GRAND TOTAL json response (with no spaces) key for this to work 
      if(this.details.Details.hasOwnProperty('GRAND_TOTAL')){
        this.grand_total = true;
        console.log("grand total")
      }

      else{
          this.grand_total = false;
      }

    
  }
  console.log("last"+ this.details);

}

}
