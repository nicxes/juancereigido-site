import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})

export class KeyboardComponent implements OnInit {
  modalDownload = false

  ngOnInit(): void {
  }

  toggleDownload() {
    this.modalDownload = !this.modalDownload
  }
}
