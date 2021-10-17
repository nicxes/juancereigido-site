import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {
  loading = true
  options: AnimationOptions = {
    path: '/assets/lotties/loading.json',
  };

  fakeLoading() {
    setTimeout(() => {
      this.loading = !this.loading
    }, 1500);
  }

  ngOnInit(): void {
    this.fakeLoading()
  }

}
