import firebase from 'firebase/app';
import 'firebase/firestore';

export default function batch(): firebase.firestore.WriteBatch {
    return firebase.firestore().batch();
}