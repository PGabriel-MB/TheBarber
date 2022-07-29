export interface Address {
    _id?: string
    fullAddress?: string;
    distrit?: string;
    city?: string;
    state?: string;
    zipCode?: string;
    complement?: string;
    typeAddress?: 'RESIDENTIAL' | 'BUSINESS' | 'BOTH';
}