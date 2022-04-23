import {Injectable} from "@angular/core";
import {Material} from "./material.model";
import {FirestoreService} from "../../core/service/firestore.service";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Injectable({providedIn: 'root'})
export class MaterialService extends FirestoreService<Material>{
    constructor(firestore: AngularFirestore) {
        super('materials', firestore);
    }
}