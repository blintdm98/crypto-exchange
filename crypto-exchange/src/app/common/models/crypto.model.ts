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
        asset_id: "USD1",
        name: "Bitcoin",
        price_usd: 20
    },
    {
        asset_id: "USD2",
        name: "ETH",
        price_usd: 50
    },
    {
        asset_id: "USD3",
        name: "DOG",
        price_usd: 30
    }
]