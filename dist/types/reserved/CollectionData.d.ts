import { CollectionReference, IDEnabled } from '../';
export interface CollectionData extends IDEnabled {
    reference: CollectionReference | null;
    setReference: (reference: CollectionReference) => void;
}
export declare function isCollectionData(value: unknown): value is CollectionData;
