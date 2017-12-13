import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "angularfire2/firestore";
import {Observable} from "rxjs";

export interface Map {
  id?: string;
  address: string;
  city: string;
  miles: string;
  minutes: string;
  state: string;
  zipcode: string;
}

@Injectable()
export class DataProvider {

  mapsListRef: AngularFirestoreCollection<Map>;
  mapList: Observable<Map[]>;

  constructor(private afs: AngularFirestore) {
    this.mapsListRef = this.afs.collection<Map>('Maps');
    this.mapList = this.mapsListRef.snapshotChanges().map(actions => {
      return actions.map(action => {
        const data = action.payload.doc.data() as Map;
        const id = action.payload.doc.id;
        return {id, ...data};
      });
    });

  }

  deleteMap(map):void {
      this.mapsListRef.doc(map.id).delete();
  }

  addNewMap(mapdata){
    this.mapsListRef.add(mapdata);
  }

  updateMap(mapid, newdata ){
    this.mapsListRef.doc(mapid).update(newdata);
  }

}
