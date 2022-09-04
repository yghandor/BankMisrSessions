import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalStateService {
  _data: any = new Subject<any>();
  _dataStream$ = this._data.asObservable();
  _subscriptions: Map<string, Map<string, Function>> = new Map<string, Map<string, Function>>();
  static id = 0;

  constructor() {
    this._dataStream$.subscribe((data: any) => this._onEvent(data));
  }

  notifyDataChanged(event: any, value: any) {
    debugger;
    let current: any = this._data[event];
       this._data[event] = value;

      this._data.next({
        event: event,
        data: this._data[event]
      });

  }

  GlobalStatsubscribe(event: string, callback: Function): string {
    let subscribers = this._subscriptions.get(event) || new Map();
    let id = 'id_' + GlobalStateService.id;
    GlobalStateService.id++;
    subscribers.set(id, callback);
    this._subscriptions.set(event, subscribers);
    return id;
  }

  unsubscribe(event: string, id: string) {
    let subscribers = this._subscriptions.get(event) || new Map();
    if (subscribers) {
      subscribers.delete(id);
    }
  }

  _onEvent(data: any) {
    let subscribers = this._subscriptions.get(data['event']) || new Map();
    if (subscribers && subscribers.size > 0) {
      for (let key of Array.from(subscribers.keys())) {
        subscribers.get(key).call(null, data['data']);
      }
    }
  }
}
