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

export type AmiibosResponse<T> = {
    amiibo: T[];
};

export class GameSeries {
    key: string;
    name: string;
}