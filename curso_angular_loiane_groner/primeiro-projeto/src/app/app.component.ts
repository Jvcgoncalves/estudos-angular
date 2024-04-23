import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OutputPropertyComponent } from './output-property/output-property.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, OutputPropertyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'primeiro-projeto';

  onMudouValor(event: any){
    console.log(event);
    
  }
}
