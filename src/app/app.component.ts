import { Component, InjectionToken, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import {map, takeUntil, concatAll} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rxjsTest';
}
