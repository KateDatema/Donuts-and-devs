export interface Donuts {
    count:   number;
    results: Result[];
}

export interface Result {
    id:   number;
    ref:  string;
    name: string;
}
