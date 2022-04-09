import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'lib-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['email-form.component.scss']
})
export class EmailFormComponent implements OnInit {

  @Output() public submitEmailForm = new EventEmitter<FormGroup>();

  emailForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required]),
    text: new FormControl('', [Validators.required])
  });

  constructor() {}

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitEmailForm.emit(this.emailForm);
  }

}
