import { Injectable } from '@angular/core';
import {GoodsEndpointService} from './goods-endpoint.service';

@Injectable()

export class GoodsService {

  constructor(private endpoint: GoodsEndpointService) { }

  getAllData() {
    return this.endpoint.getAllDataEndpoint();
  }
}
