import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-tochter',
  template: `
     <div class="bs-docs-example"> <!--styles.css-->
      <h1>app-tochter!</h1>
      <p>{{aString}}</p>
      <div>
      <button (click)="onClick()">Event an Mutter übergeben!</button>
      </div>
      <hr>
        <input type="text" [value]="tstring" (keyup)="tstring = input.value" #input>
        Two-Way-Binding selber geschaffen!
        <hr>
        <input type="text" [(ngModel)]="tstring">
        Two-Way-Binding mit [(ngModel)] : import FormsModule in app-module nicht vergessen
   </div>
  `,
  styles: []
})
export class TochterComponent implements OnInit {
 @Input()  aString: string;
 @Output() clicked = new EventEmitter<string>();
 @Output() clicked2 = new EventEmitter<string>();
 tstring = 'start';
 // Ermöglicht es eigene events zu starten -> @Output() damit von aussen reagiert werden kann

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.clicked.emit('Event aus Tochter übernommen'); // Neues event los schicken!
     this.clicked2.emit(this.tstring); // Neues event los schicken!
  }
}
