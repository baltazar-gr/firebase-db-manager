import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { CollectionHolder } from './reservedTypes/CollectionHolder';
import { DatabaseReferenceHolder } from './reservedTypes/DatabaseReferenceHolder';
import shareDatabaseReference from './shareDatabaseReference';

export class Database<Collections> implements CollectionHolder<Collections>, DatabaseReferenceHolder {
    db: firebase.firestore.Firestore;
    collections: Collections;

    constructor(collections: Collections) {
        this.db = firebase.firestore();
        shareDatabaseReference(collections, this.db);
        this.collections = collections;
    }
}