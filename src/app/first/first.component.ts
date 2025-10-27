import { Component } from '@angular/core';
import { SecondComponent } from '../second/second.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-first',
  imports: [
    SecondComponent,
    FormsModule
  ],
  templateUrl: './first.component.html',
  styleUrl: './first.component.scss'
})
export class FirstComponent {

  arrayData = [
    {
      userName: '玩家A',
      lev: 10,
      props: [
        {
          propsName: '蘑菇',
          amount: 5
        },
        {
          propsName: '金幣',
          amount: 15
        }
      ]
    },
    {
      userName: '玩家B',
      lev: 15,
      props: [
        {
          propsName: '龜殼',
          amount: 1
        },
        {
          propsName: '砲彈',
          amount: 15
        }
      ]
    }
  ];

  ngOnInit(): void {
  }
}
