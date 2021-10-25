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
  constructor(private fastapiclient:FastapiclientService) { }

  ngOnInit(): void {
    this.details=this.fastapiclient.details[0]
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.image = reader.result;
    }, false);
    reader.readAsDataURL(this.fastapiclient.details[1]);
    console.log(this.details)

  }

}
