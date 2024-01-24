// message.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private messages: string[] = [];

  constructor(private http: HttpClient) {}

  getMessages(): Observable<string[]> {
    return this.http.get<any>(`${environment.apiOpenAi}get-messages`);
  }

  sendMessage(content: string, file_ids: string[]): Observable<any> {
    return this.http.post<any>(`${environment.apiOpenAi}send-message`, {
      role: 'user',
      content,
      file_ids,
    });
  }

  run(): Observable<any> {
    return this.http.post<any>(`${environment.apiOpenAi}run`, null);
  }

  // sendFile(file: File): Observable<HttpEvent<any>> {
  //   const formData = new FormData();
  //   formData.append('file', file);
  //   const req = new HttpRequest(
  //     'POST',
  //     `${environment.apiOpenAi}upload-file`,
  //     formData,
  //     { reportProgress: true }
      
  //   );
  //   return this.http.request(req);
  // }

  sendFile(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<any>(`${environment.apiOpenAi}upload-file`, formData);
  }
}
