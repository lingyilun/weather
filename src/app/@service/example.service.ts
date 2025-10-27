// --------------------------------------------
// 用來告訴系統 這隻檔案是大家共用的
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
// --------------------------------------------

export class ExampleService {

  inputData!: string;

  constructor() { }
}
