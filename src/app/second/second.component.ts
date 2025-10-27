import { Component, Input, output } from '@angular/core';
import { ExampleService } from '../@service/example.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-second',
  imports: [
    FormsModule
  ],
  templateUrl: './second.component.html',
  styleUrl: './second.component.scss'
})
export class SecondComponent {
  // 告訴系統 這個全域變數的內容可能是外面傳遞進來的
  // @Input() value!: string;
  userName!: string;
  userEmail!: string;
  userAddress!: string;
  // 讓全域變數outPutEmit 等於 output這個函式
  // output<string>() 這個output的函式輸出的內容資料格式為string
  outPutEmit = output<any>();

  send() {
    let jsonData = {
      userName: this.userName,
      userEmail: this.userEmail,
      userAddress: this.userAddress
    };
    // 觸發output需要用剛剛的全域變數裡面的函式emit()
    // emit的()裡面要放入你要丟出去的內容 記得要符合你宣告的資料格式
    this.outPutEmit.emit(jsonData);
  }
}

