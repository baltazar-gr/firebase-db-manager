import { IDEnabled } from '../Types/IDEnabled';
import { CollectionHolder } from './ReservedTypes/CollectionHolder';
import { DatabaseReferenceHolder } from './ReservedTypes/DatabaseReferenceHolder';
import { CollectionData } from './ReservedTypes/CollectionData';
import { CollectionReference } from '../Types/CollectionReference';
import { Document } from './Document';
import { SortingPredicate } from '../Types/SortingPredicate';
import { FilterPredicate } from '../Types/FilterPredicate';
import { PaginationPredicate } from '../Types/PaginationPredicate';
export declare class Collection<DataType extends IDEnabled, SubCollections> implements IDEnabled, CollectionHolder<SubCollections>, DatabaseReferenceHolder, CollectionData {
    id: string;
    collections: SubCollections;
    db: firebase.firestore.Firestore | null;
    reference: CollectionReference | null;
    private subscriptions;
    private nextVisibleIndex;
    constructor(id: string, subCollections: SubCollections);
    setReference(reference: CollectionReference): void;
    createDocument(data: DataType): Promise<Document<DataType, SubCollections>>;
    getDocument(id: string): Promise<Document<DataType, SubCollections>>;
    get(sortingPredicate?: SortingPredicate, filterPredicate?: FilterPredicate, paginationPredicate?: PaginationPredicate, editQuery?: (reference: CollectionReference | firebase.firestore.Query) => firebase.firestore.Query): Promise<Array<Document<DataType, SubCollections>>>;
    updateDocument(data: DataType): Promise<Document<DataType, SubCollections>>;
    deleteDocument(id: string): Promise<void>;
    subscribeToDocument(id: string, onDataChange: (document: Document<DataType, SubCollections>) => void, onError: (error: Error) => void, onDataDoesNotExist: () => void): () => void;
    subscribe(onDataChange: (documents: Array<Document<DataType, SubCollections>>) => void, onError: (error: Error) => void, sortingPredicate?: SortingPredicate, filterPredicate?: FilterPredicate, editQuery?: (reference: CollectionReference | firebase.firestore.Query) => firebase.firestore.Query): () => void;
    subscribeWithDiffing(onDataChange: (document: Map<string, Document<DataType, SubCollections>>) => void, onError: (error: Error) => void, sortingPredicate?: SortingPredicate, filterPredicate?: FilterPredicate, editQuery?: (reference: CollectionReference | firebase.firestore.Query) => firebase.firestore.Query): () => void;
    removeAllSubscriptions(): void;
    resetPagination(): void;
    private getCollectionReference;
    private getQuery;
}
