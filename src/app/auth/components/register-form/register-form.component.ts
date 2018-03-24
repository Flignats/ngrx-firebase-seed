import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { User } from '@seed-auth/models/user';
import { Messages } from '@seed-shared/resources/messages';
import { emailValid, passwordValid, valuesEqual } from '@seed-shared/validators';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  @Input()
  set pending(isPending: boolean) {
    if (isPending) {
      this.form.disable();
    } else {
      this.form.enable();
    }
  }

  @Input() errorMessage: string | null;
  @Output() submitted = new EventEmitter<User>();

  form = this.formBuilder.group({
      ['email']: ['', emailValid],
      ['password']: ['', passwordValid],
      ['confirmPassword']: ['']
  }, {
      validator: valuesEqual(
          'password',
          'confirmPassword',
          'confirmPassword'
      )(Messages.Validation.PasswordsNotEqual)
  });

  constructor(
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {}

  submit() {
    if (this.form.valid) {
      this.submitted.emit({email: this.form.value['email'], password: this.form.value['password']});
    }
  }
}
