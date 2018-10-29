import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Config, ConfigService } from "../config/config.service";
import { Poliza } from "../models/polizas";
import { TipoPoliza } from "../models/tipo-polizas";
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';

import { environment } from '../../environments/environment';

const API = environment.apiEndpoint;

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PolizaService {

  private handleError: HandleError;
  private config: Config;

  constructor(private httpClient: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('PolizaService');
  }

  /**
   * 
   */
  getTipoPolizas(): Observable<{} | TipoPoliza> {
    return this.httpClient.get<TipoPoliza>(API + 'v1/tipo-polizas')
      .pipe(catchError(this.handleError('getTipoPolizas')));
  }

  /**
   * 
   * @param poliza 
   */
  postPoliza(poliza: Poliza): Observable<Poliza> {
    return this.httpClient.post<Poliza>(this.config.polizaSeguroUrl, poliza, httpOptions)
      .pipe(
        catchError(this.handleError('postPoliza', poliza))
      );
  }

  /**
   * 
   * @param tipoPoliza 
   */
  postTipoPoliza(tipoPoliza: TipoPoliza): Observable<TipoPoliza> {
    return this.httpClient.post<TipoPoliza>(this.config.tipoPolizaUrl, tipoPoliza, httpOptions)
      .pipe(
        catchError(this.handleError('postTipoPoliza', tipoPoliza))
      );
  }
}
