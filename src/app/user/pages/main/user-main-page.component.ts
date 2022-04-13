import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {UserDeleteComponent} from "../../components/user-delete/user-delete.component";

@Component({
  selector: 'app-main',
  templateUrl: './user-main-page.component.html',
  styleUrls: ['./user-main-page.component.scss']
})
export class UserMainPageComponent implements OnInit {

  @ViewChild(UserDeleteComponent) public userDeleteModal!: UserDeleteComponent;

  constructor(
      private router: Router
  ) { }

  ngOnInit(): void {
  }

  navigateCreation(): void {
    this.router.navigate(['/users/create']);
  }

  openDeleteConfirm(): void {
    this.userDeleteModal!.open();
  }

}


