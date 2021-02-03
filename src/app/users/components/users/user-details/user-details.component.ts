import {Component, OnInit} from '@angular/core';
import {UserDetailsService} from '../../../services';
import {ActivatedRoute, Router} from '@angular/router';
import {Iuser} from '../../../interfaces';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(private userDetailsService: UserDetailsService, private activatedRoute: ActivatedRoute, private route: Router) {
  }

  user: Iuser;

  ngOnInit(): void {
    console.log(this.activatedRoute);
    this.activatedRoute.params.subscribe(value => {
      this.userDetailsService.fetchUserWithId(value.user_id).subscribe(value1 => this.user = value1);
    });
  }

}
