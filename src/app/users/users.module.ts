import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import {UsersComponent} from './components/users/users.component';
import {UsersService} from './services';
import {HttpClientModule} from '@angular/common/http';
import {UserComponent} from './components/users/user/user.component';
import { UserDetailsComponent } from './components/users/user-details/user-details.component';


@NgModule({
  declarations: [UsersComponent, UserComponent, UserDetailsComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule
  ],
  providers: [UsersService],
  exports: [HttpClientModule]
})
export class UsersModule { }
