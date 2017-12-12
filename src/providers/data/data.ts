import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "angularfire2/firestore";
import {Observable} from "rxjs";

export interface Card {
  id?: string;
  cardDesc: string;
  cardName: string;
}

@Injectable()
export class DataProvider {

  cardsListRef: AngularFirestoreCollection<Card>;
  cardList: Observable<Card[]>;

  constructor(private afs: AngularFirestore) {
    this.cardsListRef = this.afs.collection<Card>('Cards');
    this.cardList = this.cardsListRef.snapshotChanges().map(actions => {
      return actions.map(action => {
        const data = action.payload.doc.data() as Card;
        const id = action.payload.doc.id;
        return {id, ...data};
      });
    });

  }

  // constructor() {
  //   console.log('Hello DataProvider Provider');
  // }

}
