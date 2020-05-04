import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {AlertService} from '../../../core/services/alert.service';
import {AdminAuthService} from '../../core/services/admin-auth.service';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})

export class LoginPageComponent implements OnInit {
  form: FormGroup;
  formSubmitted = false;
  message;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private auth: AdminAuthService,
    private alert: AlertService
  ) { }

  ngOnInit() {

    this.route.queryParams.subscribe((params: Params) => {
      if (params.isNotAuth) {
        this.message = 'Необходимо авторизоваться';
      } else {
        this.message = null;
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
        this.router.navigate(['/admin/building/create-porch']);
        this.formSubmitted = false;
        this.alert.success('Авторизация прошла успешно');
      },
      () => {
        this.formSubmitted = false;
      }
    );
  }
}
