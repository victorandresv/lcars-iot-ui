import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lcars-iot-ui';

  ngOnInit(){
    var audio = new Audio('assets/sounds/voy_bridge.mp3');
    audio.play();
  }
  
}
