export interface Model {
    id: string;
    createTime: Date;
    updateTime: Date;
}

export interface Selectable {
    selected: boolean;
}

export interface DatabaseReference {
    id: string;
    databaseCollection: string;
}

export interface PopulateRegistry {
    ids: string[];
    databaseCollection: string;
}

export interface PopulatedReferences {
    objects: any;
    databaseCollection: string;
}