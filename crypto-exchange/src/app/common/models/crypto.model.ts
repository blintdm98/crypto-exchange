export interface CryptoModel {
    asset_id: string;
    name: string;
    price_usd: number;
}

export interface IconModel {
    asset_id: string;
    url: string;
}

export const cryptos: CryptoModel[] = [
    {
        asset_id: "USD",
        name: "Bitcoin",
        price_usd: 20
    },
    {
        asset_id: "USD",
        name: "ETH",
        price_usd: 50
    }
]