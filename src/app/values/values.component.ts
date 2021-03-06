import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-values',
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.css'],
})
export class ValuesComponent implements OnInit {
  values: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getValue();
  }
  getValue() {
    this.http.get('http://localhost:5000/api/Values').subscribe(
      (resp) => {
        this.values = resp;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
