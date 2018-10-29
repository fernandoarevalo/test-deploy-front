import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


export interface Config {
    apiUrl: string;
    tipoPolizasUrl: string;
    tipoPolizaUrl: string;
    polizaSeguroUrl: string;
}

@Injectable()
export class ConfigService {
    configUrl = 'assets/config.json';

    constructor(private http: HttpClient) { }

    getConfig() {
        return this.http.get(this.configUrl);
    }
/*
    getConfigJSON() {
        return this.http.get(this.configUrl)
            .map(data => {
                data.json();
                console.log("I CAN SEE DATA HERE: ", data.json());
                return data.json();
            });
    }*/

}