import { Component, OnInit } from '@angular/core';
import { FastapiclientService } from 'src/app/services/fastapiclient.service';
import { Router } from '@angular/router';
import { Observable, forkJoin } from 'rxjs'

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  constructor(private fastapiclient:FastapiclientService,private router:Router) { }
  files=[]
  ngOnInit(): void {
    this.fastapiclient.fileInfo().subscribe(data=>{
      Object.entries(data).sort((a, b) => String(b[1]).localeCompare(String(a[1])));
      for (const [key, value] of Object.entries(data)) {
        this.fastapiclient.thumbnail(key).subscribe(data2=>{

        let temp={name:null,status:null,thumb:null}
        temp.name=key
        temp.status=value
        let reader = new FileReader();
        reader.addEventListener("load", () => {
          temp.thumb = reader.result;
          this.files.push(temp)
        }, false);
        reader.readAsDataURL(data2);
        
        }
        )
      }
    })
  }
  viewdetails(id:string){
    console.log("clicked2");
    let first=this.fastapiclient.fileDetails(id)
    let second=this.fastapiclient.processedImage(id)
    forkJoin([first,second]).subscribe(data=>{this.fastapiclient.details=data;
    this.router.navigate(['details']);
    })
    

  }

}
