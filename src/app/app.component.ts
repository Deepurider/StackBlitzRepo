import { HttpClient } from '@angular/common/http';
import { Component, OnInit, VERSION } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public usernameControl: FormControl = new FormControl(null);
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.getChanges();
  }

  getDisabled() {
    this.usernameControl.disable();
  }

  getEnabled() {
    this.usernameControl.enable();
  }
  startLoop() {
    for (var i = 0; i < 10; i++) {
      console.log(i);
      this.usernameControl.patchValue(i);
    }
  }

  getChanges() {
    this.usernameControl.valueChanges.subscribe((res) => {
      this.http.get('https://catfact.ninja/fact').subscribe();
    });
  }
}
