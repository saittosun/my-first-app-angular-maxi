import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-three',
  templateUrl: './assignment-three.component.html',
  styleUrls: ['./assignment-three.component.css']
})
export class AssignmentThreeComponent implements OnInit {
  showSecret: boolean;
  log = [];

  constructor() { }

  getColor() {
    this.log.map(logItem => {
      return logItem >= 5 ? 'blue' : 'transparent';
    });
  }

  onShowSecret() {
    this.showSecret = !this.showSecret;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }

  ngOnInit(): void {
  }

}
