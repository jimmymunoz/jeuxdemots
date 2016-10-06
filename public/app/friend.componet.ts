// app/friend.component.ts
import { Component } from '@angular/core'; 

@Component({
    selector: 'my-friends'
    template: `
        <h1>Hello from the {{ componentName }}!</h1>
        <div *ngFor="#f of friends">
            <h3>Name: {{ f.name }}</h3> 
            <h4>Age: {{ f.age }}</h4> 
        </div>
    `
})

export class FriendComponent {
    componentName: 'FriendComponent';
    friends = [
        { age: 40, name: 'Jordan Houston' },
    { age: 23, name: 'Josh Beh' },
    { age: 23, name: 'Joseph Canina' },
    { age: 24, name: 'Alexandra Wilkins' },
    { age: 22, name: 'Kiersten Costanzo' },
    { age: 23, name: 'Ku Sherwood' },
    { age: 25, name: 'Arta Halili' },
    { age: 21, name: 'Patrick Cooney' },
    { age: 21, name: 'Z.A. Perr' },
    { age: 18, name: 'Tyler Mulligan' },
    { age: 26, name: 'Dennis Dempsey' },
    { age: 32, name: 'Francis Yeager' },
    { age: 23, name: 'Phil Belardi' },
    { age: 25, name: 'Bryan Roman' }
    ];
} 