import { Component, OnInit } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'encryption-test';
  keyString: string;
  ivString: string;
  textToEncode: string;

  constructor () {
    this.keyString = '46428208';
    this.ivString = 'password';
    this.textToEncode = '45191735';
  }

  ngOnInit() {
    let bytes = (new TextEncoder()).encode(this.keyString);
    console.log(bytes);
    let rgbIV = (new TextEncoder()).encode(this.ivString);
    console.log(rgbIV);
    let buffer = (new TextEncoder()).encode(this.textToEncode);
    console.log(buffer);
    /* var encrypted = CryptoJS.DES.encrypt(
      rgbIV, bytes,
      {
          mode: CryptoJS.mode.CBC,
          iv: buffer,
          padding: CryptoJS.pad.Pkcs7
      });
    console.log(encrypted); */
    this.encryptedByBuffer(this.keyString, this.ivString, this.textToEncode)

  }

  encryptedByBuffer(keyString, ivString, textToEncode) {
    var key = new Buffer(keyString.substring(0, 8), 'utf8');
    var iv = new Buffer(ivString.substring(0,8), 'utf8');
    var cipher = CryptoJS.createCipheriv('des-cbc', key, iv);
    var c = cipher.update(textToEncode, 'utf8', 'base64');
    c += cipher.final('base64');
    console.log(c);
    //return c;
  }
}
