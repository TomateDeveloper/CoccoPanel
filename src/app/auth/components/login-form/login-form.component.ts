import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ValidationUtilities} from "../../../shared/abstract/validation-utilities";
import {Store} from "@ngrx/store";
import {AppState} from "../../../store/app.state";
import {AuthService} from "../../store/auth.service";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  public loginForm: FormGroup;
  public validate = ValidationUtilities.validate;

  constructor(private store: Store<AppState>, private loginService: AuthService) {
    this.loginForm = this.initializeForm();
  }

  public initializeForm(): FormGroup {
    return new FormGroup({
      email: new FormControl(
          null,
          [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]
      ),
      password: new FormControl(null, Validators.required)
    });
  }

  public login(): void {
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe(a => {
    });
    //this.store.dispatch(login({...this.loginForm.value}));
  }


}
