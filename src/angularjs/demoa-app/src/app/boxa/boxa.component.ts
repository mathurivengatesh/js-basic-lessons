import { outputAst } from '@angular/compiler';
import { Component, OnInit , Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-boxa',
  templateUrl: './boxa.component.html',
  styleUrls: ['./boxa.component.css']
})
export class BoxaComponent implements OnInit {
  @Input()
  labelValue: any = 'City';
  @Input()
  data: any;
  counter = 0;

  @Output()
  onBoxDataChange: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onchange(event: Event) {
    this.data = (event.target as HTMLInputElement).value;
    this.onBoxDataChange.emit({value: this.data});
  }
}
