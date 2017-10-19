import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

let config_key_name = "config";


@Injectable()
export class ConfigProvider {

  private config = {
    showSlide: false,
    name: "",
    username: ""
  }

  constructor(public http: Http) {
    console.log('Hello ConfigProvider Provider');
  }

  //Recupera do localStorage
  getConfigData(): any{
    return localStorage.getItem(config_key_name);
  }

  // Armazena no localStorage
  setConfigData(showSlide?: boolean, name?: string, username?: string){
    let config = {
      showSlide: false,
      name: "",
      username: ""
    }

    if(showSlide){
      config.showSlide = showSlide;
    }
    
    if(name){
      config.name = name;
    }
    
    if(username){
      config.username = username;
    }

    localStorage.setItem(config_key_name, JSON.stringify(config));
  }

}
