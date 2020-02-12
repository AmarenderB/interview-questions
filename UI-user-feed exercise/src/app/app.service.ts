import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import * as UserFeed from '../data.json';
@Injectable({
  providedIn: 'root'
})
export class FeedService {

constructor(private http: HttpClient) {

}

getFeeds() {
  return UserFeed;
}

}