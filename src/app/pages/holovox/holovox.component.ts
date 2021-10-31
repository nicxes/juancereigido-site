import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-holovox',
  templateUrl: './holovox.component.html',
  styleUrls: ['./holovox.component.css']
})
export class HolovoxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.location.href = '/assets/pdfs/holovox.pdf'
  }

}
