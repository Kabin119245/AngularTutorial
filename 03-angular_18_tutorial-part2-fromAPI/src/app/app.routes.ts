import { Routes } from '@angular/router';
import { GetApiComponent } from './components/api-integration/get-api/get-api.component';
import { PostApiComponent } from './components/api-integration/post-api/post-api.component';

export const routes: Routes = [
  {
    path: 'get-api',
    component: GetApiComponent,
  },

  {
    path: 'post-api',
    component: PostApiComponent,
  },
];
