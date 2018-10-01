import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'home',
    templateUrl: './quize.component.html'
    //styleUrls: ['./home.component.css'],
    //styles: ['.tbl-row-border { border: 1px solid red;}']
})

export class QuizeComponent {
    userlist: Users[];

    constructor() {
        this.userlist = [
            {
             Id: "10",
             name:"Angular",
             description:"what is angular",
             question:'Hi'
            }
            
           ];
    }

    values = '';
    onKeyUp(event: any) {
        this.values = event.target.value;
    };

    addUser(user) {
        alert(JSON.stringify(user));
    };

    updateUser(user) {
        alert(JSON.stringify(user));
    };

    deleteUser(user) {
        alert(JSON.stringify(user));
    };
}

export class Users {
    Id: String;
    name: String;
    description:String;
  question:string;
  
}
