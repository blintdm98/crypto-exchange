import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient} from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { CryptoModel, IconModel } from '../models/crypto.model';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  //a Binance tőzsdén elérhető elemek(mert túl sokat ad meg és megterhelő)
  private readonly CRYPTO_SYMBOL_URL: string = `${environment.baseUrl}/assets?apikey=${environment.apikey}`;

  private readonly CRYPTO_ICONS_URL: string = `${environment.baseUrl}/assets/icons?apikey=${environment.apikey}`;

  constructor(
    private http: HttpClient
  ) { }

  getCryptos(): Observable<CryptoModel[]> {
    return this.http.get<CryptoModel[]>(this.CRYPTO_SYMBOL_URL).pipe(
      map(cryptos => cryptos.filter(crypto => crypto.price_usd !== undefined && crypto.price_usd !== null))
    );
  }

  getCryptosIcons(): Observable<IconModel[]> {
    return this.http.get<IconModel[]>(this.CRYPTO_ICONS_URL);
  }
}
