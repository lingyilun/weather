import { Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

export const routes: Routes = [
  // path是設定URL的網址要是什麼
  // component是設定這個網址要顯示哪個畫面的內容
  {
    path: 'first', component: FirstComponent,
    children: [
      { path: 'child-a', component: SecondComponent }
    ]
  },
  { path: 'second', component: SecondComponent },
  // { path: '', pathMatch: 'full', redirectTo: '/first' }
  // 當path內容為**時 是用來設定當使用者輸入的網址對應不上你設定的網址時要顯示的內容畫面
  // 注意!!!這個要放在最底下 否則設定在**底下的路由都會失效
  // { path: '**', component: SecondComponent }
];
