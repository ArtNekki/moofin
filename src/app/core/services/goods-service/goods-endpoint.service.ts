import {Injectable, Injector} from '@angular/core';
import {EndpointFactory} from '../endpoint-factory.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()

export class GoodsEndpointService extends EndpointFactory {
  private readonly _url: string = '/goods';

  get url() { return this.baseUrl + this._url; }

  constructor(http: HttpClient, injector: Injector) {

    super(http, injector);
  }

  getAllDataEndpoint<T>(): Observable<T> {
    return this.execute(this.http.post<T>(`${this.url}/items`, null, this.getRequestHeaders()),
      () => this.getAllDataEndpoint());
  }
}
