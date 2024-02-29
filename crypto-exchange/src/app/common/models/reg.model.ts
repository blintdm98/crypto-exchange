import { CryptoModel } from "./crypto.model";

export interface RegModel {
    email: string;
    name: string;
    password: string;
    confirmPassword: string;
    cryptoList: CryptoModel[];
}