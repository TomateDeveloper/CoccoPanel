export interface FirestoreDocument<T> {
    name: string;
    fields: T;
    createTime: Date;
    updateTime: Date;
}

export interface FirestoreQuery<T> {
    document: FirestoreDocument<T>;
    readTime: Date;
}