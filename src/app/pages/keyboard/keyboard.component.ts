import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})

export class KeyboardComponent implements OnInit {
  modalDownload = false
  alertSuccess = false
  fileSelected: string = '75mm'

  ngOnInit(): void {
  }

  toggleDownload() {
    this.modalDownload = !this.modalDownload
  }

  toggleAlert() {
    this.alertSuccess = !this.alertSuccess
  }

  downloadFile() {
    if (this.fileSelected === '75mm') {
      window.open('/assets/downloads/keyboard-holder-75mm.zip', '_blank')
    } else {
      window.open('/assets/downloads/keyboard-holder-100mm.zip', '_blank')
    }
    this.alertSuccess = true
  }

  onSelected(e: any) {
    this.fileSelected = e.target.value
  }
}
