import { Component } from "@angular/core";

@Component ({
    selector: 'app-hello-world',        // CSS file
    template: '<h1>{{title}}</h1>',                       // HTML template that the component uses to display information | Use URL for templates in other folders
    styles: [`
    h1
    {
        color:blue;
    }`]

})

export class HelloWorldComponent
{
    title = "";
}