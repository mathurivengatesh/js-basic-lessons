import { Component } from '@angular/core';

@Component({
  selector: 'my-root',//kabab-style(my-name),snake-style(my_name)
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoa-app';
  location ='theni';
  onBoxValueChange(paramData: any)
  {
    console.log("app component:"+ paramData.value);
  }
}
