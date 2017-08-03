import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mutter',
  template: `
       <div class="bs-docs-example"> <!--styles.css-->
       app-mutter!
        <app-tochter></app-tochter>
      </div>
  `,
  styles: []
})
export class MutterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
