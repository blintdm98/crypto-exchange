import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient} from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { CryptoModel, IconModel } from '../models/crypto.model';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  private readonly CRYPTO_LIST_URL: string = `${environment.baseUrl}/assets?apikey=${environment.apikey}`;

  private readonly CRYPTO_BY_ASSET_URL: string = `${environment.baseUrl}/assets`;

  private readonly CRYPTO_ICONS_URL: string = `${environment.baseUrl}/assets/icons?apikey=${environment.apikey}`;

  constructor(
    private http: HttpClient
  ) { }

  getCrypto(asset_id:string): Observable<CryptoModel> {
    return this.http.get<CryptoModel>(`${this.CRYPTO_BY_ASSET_URL}/${asset_id}?apikey=${environment.apikey}`);
  }

  getCryptos(): Observable<CryptoModel[]> {
    return this.http.get<CryptoModel[]>(this.CRYPTO_LIST_URL).pipe(
      map(cryptos => cryptos.filter(crypto => crypto.price_usd !== undefined && crypto.price_usd !== null))
    );
  }

  getCryptosIcons(): Observable<IconModel[]> {
    return this.http.get<IconModel[]>(this.CRYPTO_ICONS_URL);
  }
}
