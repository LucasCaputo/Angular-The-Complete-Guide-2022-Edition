import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  display = false;

  logs = []

  onToggle($event: PointerEvent ) {
    this.display = !this.display
    
    this.logs.push($event.timeStamp)
    
  }
}
