import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { CryptoModel, IconModel, SymbolModel } from '../models/crypto.model';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  private readonly CRYPTO_LIST_URL: string = `${environment.baseUrl}/assets?apikey=${environment.apikey}`;

  private readonly CRYPTO_BY_ASSET_URL: string = `${environment.baseUrl}/assets`;

  private readonly CRYPTO_ICONS_URL: string = `${environment.baseUrl}/assets/icons?apikey=${environment.apikey}`;

  private readonly CRYPTO_SYMBOLS_URL: string = `${environment.baseUrl}/symbols?apikey=${environment.apikey}`;

  constructor(
    private http: HttpClient
  ) { }

  getCrypto(asset_id:string): Observable<CryptoModel> {
    return this.http.get<CryptoModel>(`${this.CRYPTO_BY_ASSET_URL}/${asset_id}?apikey=${environment.apikey}`);
  }

  getCryptos(): Observable<CryptoModel[]> {
    return this.http.get<CryptoModel[]>(this.CRYPTO_LIST_URL).pipe(
      map(cryptos => cryptos.filter(crypto => crypto.price_usd !== undefined && crypto.price_usd !== null && crypto.type_is_crypto))
    );
  }

  getCryptosIcons(): Observable<IconModel[]> {
    return this.http.get<IconModel[]>(this.CRYPTO_ICONS_URL);
  }

  getSymbols(asset_id: string): Observable<SymbolModel[]> {
    const params = new HttpParams().set('filter_asset_id', asset_id);
    return this.http.get<SymbolModel[]>(this.CRYPTO_SYMBOLS_URL, {params})
    // .pipe(
    //   map(symbols => symbols
    //     .filter(symbol => symbol.data_start === data_start))
    // );
  }
}
