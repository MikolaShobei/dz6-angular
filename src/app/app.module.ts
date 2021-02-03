import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {UsersModule} from './users/users.module';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from './users/components/users/users.component';
import {PostsModule} from './posts/posts.module';

const routers: Routes = [{
  path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
  },
  {
    path: 'posts', loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule)
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UsersModule,
    PostsModule,
    RouterModule.forRoot(routers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
