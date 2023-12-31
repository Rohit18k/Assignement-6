// demo.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
    <div>
      <label for="myTextField">Enter Text:</label>
      <input type="text" id="myTextField" [(ngModel)]="inputText" />
      <br />
      <p class="blue-text">Static Text: Marvellous Infosystems</p>
    </div>
  `,
 styles: [`
 .blue-text {
   color: blue;
 }
`],
})
export class DemoComponent {
  inputText: string = '';
}
