import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class HttpClientService {

  // 將HttpClient套件相依注入 讓下面的程式可以透過全域變數名稱使用該套件
  constructor(private httpClient: HttpClient) { }

  // 呼叫Api總共有四種方法
  // GET     獲取
  // POST    新增(需要傳遞內容)
  // PUT     更新 (需要傳遞內容)
  // DELETE  刪除

  getApi(url: string): any {
    // 將httpClien的get函式丟出去
    return this.httpClient.get(url);
  }

  postApi(url: string, postData: any) {
    // 將httpClien的post函式丟出去
    return this.httpClient.post(url, postData);
  }

  putApi(url: string, postData: any) {
    // 將httpClien的put函式丟出去
    return this.httpClient.put(url, postData);
  }

  delApi(url: string) {
    // 將httpClien的delete函式丟出去
    return this.httpClient.delete(url);
  }
}
