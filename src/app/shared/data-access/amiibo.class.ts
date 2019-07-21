export class Amiibo {
    amiiboSeries: string;
    gameSeries: string;
    head: string;
    image: string;
    name: string;
    release: string;
    tail: string;
    type: string;
}

export interface AmiibosResponse<T> {
    amiibo: T[];
}

export class AmiiboType {
    name: string;
    image: string;
}
