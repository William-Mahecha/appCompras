import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit () {
    firebase.initializeApp({
      apiKey: 'AIzaSyAPA44wOC44rFJdaS1ccWaBgKxn2m8ZInI',
      authDomain: 'appcompras1214.firebaseapp.com'
    });
  }
}
