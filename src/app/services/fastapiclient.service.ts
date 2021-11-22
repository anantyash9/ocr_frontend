import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FastapiclientService {
  uploadURL="/api/upload"
  fileinfoURL="/api/fileinfo"
  thumbnailURL="/api/thumbnail?fileid="
  processedImageURL="/api/processed?fileid="
  filedetailsURL="/api/filedetails?fileid="

  // filedetailsURL = "http://localhost:3000/Details"  -> for json-server
  details={}
  constructor(private http: HttpClient) { }

upload(file:any):Observable<any>{
  let headers = new HttpHeaders({
    'Content-Type': 'application/json',})
  let formData:FormData = new FormData();
  formData.append('uploaded_file', file,file.name);
  return this.http.post(this.uploadURL, formData)
}
fileInfo():Observable<any>{
  return this.http.get(this.fileinfoURL,{observe:"body",responseType:"json"})
}
fileDetails(id:any):Observable<any>{
  return this.http.get(this.filedetailsURL+id,{observe:"body",responseType:"json"})
}
thumbnail(id:any):Observable<Blob>{
  return this.http.post(this.thumbnailURL+id,{},{observe:"body",responseType:"blob"})
}
processedImage(id:any):Observable<Blob>{
  return this.http.post(this.processedImageURL+id,{},{observe:"body",responseType:"blob"})
}

}





