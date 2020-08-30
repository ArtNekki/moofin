import {EndpointFactory} from './endpoint-factory.service';
import {GoodsEndpointService} from './goods-service/goods-endpoint.service';
import {GoodsService} from './goods-service/goods.service';

export const SERVICES = [
  EndpointFactory,
  GoodsEndpointService,
  GoodsService
];
