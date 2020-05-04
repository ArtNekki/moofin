import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserAuthService} from '../../core/user-auth.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {AlertService} from '../../core/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  formSubmitted = false;
  errorMessage;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private auth: UserAuthService,
    private alert: AlertService
  ) { }

  ngOnInit() {

    this.route.queryParams.subscribe((params: Params) => {
      if (params['isNotAuth']) {
        this.alert.danger('Необходимо авторизоваться');
      }
    });

    this.form = new FormGroup({
      tel: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    if (this.form.invalid) { return; }

    const user = this.form.value;
    console.log('formData', user);

    this.formSubmitted = true;

    this.auth.login(user).subscribe(
      () => {
        this.form.reset();
        this.router.navigate(['/dialogs']);
        this.formSubmitted = false;
        this.alert.success('Авторизация прошла успешно');
       },
      () => {
        this.formSubmitted = false;
      }
    );
  }
}
