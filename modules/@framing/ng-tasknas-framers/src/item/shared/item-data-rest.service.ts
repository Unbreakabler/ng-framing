import { Inject, Injectable } from '@angular/core';

import { Http } from '@angular/http';

import { Observable } from 'rxjs';

import { ItemDataProvider } from '../types/item-data-provider';

import { ItemModel } from '../item.model';

@Injectable()
export class ItemDataRestService extends ItemDataProvider {
  public constructor(
    private http: Http,
    @Inject('itemModel') public itemModel: ItemModel,
  ) {
    super();
  }

  public queryItems(params: any): Observable<any> {
    return this.http.request(this.url(this.itemModel.endpoint, { params }));
  }

  public getItem(id: any): Observable<any> {
    return this.http.request(this.url(this.itemModel.endpoint, { id }));
  }

  public saveItem(item: any): Observable<any> {
    return item.id ? this.updateItem(item) : this.createItem(item);
  }

  public createItem(item: any): Observable<any> {
    return this.http.request(this.url(this.itemModel.endpoint), { body: item });
  }

  public updateItem(item: any): Observable<any> {
    return this.http.request(this.url(this.itemModel.endpoint, item), { body: item });
  }

  public deleteItem(item: any): Observable<any> {
    return this.http.request(this.url(this.itemModel.endpoint, item), { method: 'delete' });
  }

  private url(url: string, data?: any): string {
    return url;
  }
}
