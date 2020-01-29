import { Injectable } from '@angular/core';
import { EnvironmentService } from './environment.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {

  constructor(
    private http: HttpClient,
    private environment: EnvironmentService
  ) { }

  post(url: string, body?: any): Observable<any> {
    if (this.environment.isProduction()) {
      return this.http.post(url, body);
    } else {
      return this.mockApi(url);
    }
  }

  private mockApi(url: string) {
    url = `http://localhost:3004/${url}`;
    return this.http.get(url, {});
  }
}
