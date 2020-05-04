import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

export type AlertType = 'success' | 'error' | 'danger';

export interface Alert {
  type: AlertType;
  text: string;
}


@Injectable()

export class AlertService {
  public alert$ = new Subject<Alert>();

  constructor() { }

  success(text: string) {
    this.alert$.next({type: 'success', text});
  }

  error(text: string) {
    this.alert$.next({type: 'error', text});
  }

  danger(text: string) {
    this.alert$.next({type: 'danger', text});
  }
}
