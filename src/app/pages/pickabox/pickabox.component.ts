import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pickabox',
  templateUrl: './pickabox.component.html',
  styleUrls: ['./pickabox.component.css']
})
export class PickaboxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.location.href = '/assets/pdfs/pickabox.pdf'
  }

}
