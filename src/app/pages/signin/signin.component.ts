import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from './../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private router: Router, private auth: AuthService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onSubmit(f: NgForm){
    const {email, password} = f.form.value;

    this.auth.signIn(email, password).then(
      (res) => {
        console.log(res);
        this.router.navigateByUrl('');
      }
    ).catch((err) => {
      console.log(err.message);
      this.toastr.error('Signin failed!');
    });
  }
}
