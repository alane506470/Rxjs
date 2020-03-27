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
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log('ngOnInit');
    this.a();
  }

  a() {
    const dragDOM = document.getElementById('title');
    const body = document.body;

    // 對drag listen mousedown
    const mouseDown = fromEvent(dragDOM, 'mousedown');
    const mouseUp = fromEvent(body, 'mouseup');
    const mouseMove = fromEvent(body, 'mousemove');
    const source = mouseDown.pipe(
        map(event => mouseMove.pipe(takeUntil(mouseUp))),
        concatAll(),
        map((event: any) => { console.log(event); return {x: event.clientX, y: event.clientY}})
      ).subscribe(localation => {
        dragDOM.style.left = localation.x + 'px';
        dragDOM.style.top = localation.y + 'px';
        console.log(localation);
      });

  }

}


