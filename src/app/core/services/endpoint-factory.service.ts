import {Injectable, Injector} from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable()


export class EndpointFactory {
  static readonly apiVersion: string = '1';
  static readonly appVersion: string = '1.0.0';
  private environment = environment;
  public readonly baseUrl: string = environment.api_url + `/api/v${EndpointFactory.apiVersion}`;

  constructor(protected http: HttpClient, private injector: Injector) { }

  protected getRequestHeaders(): { headers: HttpHeaders | { [header: string]: string | string[]; } } {

    const headers = new HttpHeaders({
      // 'Authorization': this.authService.accessToken,
      'Content-Type': 'application/json',
       Accept: `application/vnd.iman.v${EndpointFactory.apiVersion}+json, application/json, text/plain, */*`,
      'App-Version': EndpointFactory.appVersion
    });

    return { headers };
  }

  protected execute(obs: Observable<any>, continuation: () => Observable<any>): Observable<any> {
    return obs.pipe(
      catchError(error => {
        return this.handleError(error, continuation);
      }));
  }

  protected handleError(error, continuation: () => Observable<any>) {
    return Observable.throw(error);
  }
}
