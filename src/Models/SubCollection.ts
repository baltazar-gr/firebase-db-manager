import { Collection } from './Collection';
import { FirebaseReference } from '../Types/FirebaseReference';
import { isDocumentReference } from '../Types/DocumentReference';
import { isCollectionReference } from '../Types/CollectionReference';
import { IDEnabled } from '../Types';

export class SubCollection<DataType extends IDEnabled, SubCollections> extends Collection<DataType, SubCollections> {
    previousPath: string | null;

    constructor(id: string, subCollections: SubCollections) {
        super(id, subCollections);
        this.reference = null;
        this.previousPath = null;
    }

    setReference(previousPath: string | null): void {
        this.previousPath = previousPath;
        const components = this.getFullPath().split('/');
        let reference: FirebaseReference | null = null;
        components.forEach((value, index) => {
            if (this.db != null) {
                if (index === 0) {
                    reference = this.db.collection(value);
                } else if (index % 2 === 0 && isDocumentReference(reference)) {
                    reference = reference.collection(value);
                } else if (isCollectionReference(reference)) {
                    reference = reference.doc(value);
                }
            }
        });
        this.reference = reference;
    }

    getFullPath(): string {
        return `${this.previousPath}/${this.id}`;
    }
}
