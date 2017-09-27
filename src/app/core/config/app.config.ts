// export const appConfig = {
//     apiUrl: 'http://localhost:3000'
// };


// import { Injectable } from '@angular/core';
 
// @Injectable()
export class ConfigService {
     
    _apiURI : string;
 
    constructor() {
        this._apiURI = 'http://localhost:10958/api/AccountingLogin';
     }
 
     getApiURI() {
         return this._apiURI;
     }    
}