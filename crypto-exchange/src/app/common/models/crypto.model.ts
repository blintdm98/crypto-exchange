export interface CryptoModel {
    symbol_id: string;
    asset_id_base: string;
    asset_id_quote: string;
    asset_id_quote_exchange: string;
    price: number;
}

export interface IconModel {
    asset_id: string;
    url: string;
}