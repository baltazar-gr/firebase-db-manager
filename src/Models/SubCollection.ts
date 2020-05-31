import { Collection } from './Collection';
import { IDEnabled } from '../Types';

export class SubCollection<DataType extends IDEnabled, SubCollections> extends Collection<DataType, SubCollections> {}