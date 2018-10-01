import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Http} from '@angular/http';
@Component({
   selector: 'home',
    templateUrl: './quize.component.html'
    //styleUrls: ['./home.component.css'],
    //styles: ['.tbl-row-border { border: 1px solid red;}']
})

export class Quize1Component {
    //var users = domainObject.JSON();
   
    constructor(http:Http) {
        const user = {
            id: 229,
            name: 'John',
            email: 'john@awesome.com'
          };
          
          function replacer(key, value) {
            console.log(typeof value);
            if (key === 'email') {
              return undefined;
            }
            return value;
          }
          
          const userStr = JSON.stringify(user, replacer);
    }
    
  }
  