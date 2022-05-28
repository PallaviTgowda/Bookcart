import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookdetailsService {
  constructor(private http:HttpClient) { }

getbookdetails(){
  //  const headers= new HttpHeaders()
  //   .set('ApiKey', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJQYWxsYXZpIFQiLCJ1c2VyaWQiOiI2NjIiLCJ1c2VyVHlwZUlkIjoiMiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IjIiLCJqdGkiOiJjNGRlYzY2MC1iODA2LTQ2YjMtOGFhZi1kZDRkZGI0NWFlYTUiLCJleHAiOjE2NTI1MTIzNzgsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjQ0MzY0LyIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0OjQ0MzY0LyJ9.nZHLBUOiZMUBhee4HHORey8MtRuYbpw0zFU36dcOOWg')
  //   .set('Accept','text/plain')

    return this.http.get('https://bookcart.azurewebsites.net/api/book');
  }

getOne(id: any){
  return this.http.get('https://bookcart.azurewebsites.net/api/Book/'+id);
}

getSimilarBook(id: any){
  return this.http.get('https://bookcart.azurewebsites.net/api/Book/GetSimilarBooks/'+id);
} 
 
}
