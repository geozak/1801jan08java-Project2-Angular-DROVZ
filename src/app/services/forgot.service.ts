import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ForgotService {

  constructor(private httpClient: HttpClient) { }

}
