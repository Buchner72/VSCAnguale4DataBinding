import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mutter',
  template: `
       <div class="bs-docs-example"> <!--styles.css-->
         <h1>app-mutter!</h1>
        <ng-content></ng-content>  <!--Platzhalter für übernehme aus app.component.html-->
        <hr>
        <p [innerText]="aString"></p>
        <div [ngClass]="{'roter-rahmen': IsRahmen}">
          Rahmen verschwindet in 3 Sekunden, mittels Property Binding
        </div>
        <hr>
        <button (click)="IsRahmen=true">Rahmen wieder aktiveren(Event)</button>
         <button (click)="onClick()">Rahmen wieder aktiveren(Event -Methode) für 3 Sek.</button>
         <hr>
         <p>{{aStringTochter}}</p>
         <p>{{tstring}}</p>
         <hr>
        <app-tochter
         (clicked)="aStringTochter =$event"
         (clicked2)="tstring =$event"
         [aString]="'String mittels Property Binding von Mutter zur Tochter->@Input() übergeben'">
        </app-tochter>
      </div>
  `,
  styles: [`
  .roter-rahmen{
    border: 1px solid red;
  }
  `]
})
export class MutterComponent implements OnInit {
  aString = 'Ich bin eine string [Property Binding]';
  aStringTochter = 'Ich wurde noch nicht verändert: erst In Tochter -> Event an Mutter übergeben klicken!';
  IsRahmen = true;
  tstring = 'leer';

  constructor() {
    setTimeout(() => {
      this.IsRahmen = false;
    }, 3000);
  }

  onClick(){
    this.IsRahmen = true;
     setTimeout(() => {
      this.IsRahmen = false;
    }, 3000);
  }

  ngOnInit() {
  }

}
