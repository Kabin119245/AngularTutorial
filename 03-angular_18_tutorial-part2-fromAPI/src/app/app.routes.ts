import { Routes } from '@angular/router';
import { GetApiComponent } from './components/api-integration/get-api/get-api.component';
import { PostApiComponent } from './components/api-integration/post-api/post-api.component';
import { PutAndDeleteApiComponent } from './components/api-integration/put-and-delete-api/put-and-delete-api.component';
import { LifecycleEventComponent } from './components/lifecycle-event/lifecycle-event.component';
import { NgTemplateComponent } from './components/ng-template/ng-template.component';

export const routes: Routes = [
  {
    path: 'get-api',
    component: GetApiComponent,
  },

  {
    path: 'post-api',
    component: PostApiComponent,
  },

  {
    path: 'put-and-delete-api',
    component: PutAndDeleteApiComponent,
  },
  {
    path: 'lifecycle-event',
    component: LifecycleEventComponent,
  },
  {
    path: 'ng-template',
    component: NgTemplateComponent,
  },
];
