import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { AppVersion } from '../model/appverson';

@Injectable()
export class VersionService {

  constructor(
    private apiService: ApiService
  ) { }

  getVersion(): Observable<AppVersion> {
    return this.apiService.post('api/version');
  }
}
