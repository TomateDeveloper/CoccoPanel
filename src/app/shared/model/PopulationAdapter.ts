import {DatabaseReference, Model, PopulatedReferences, PopulateRegistry} from "../../core/model/model.dto";

export class PopulationAdapter {

    /**
     * Replaces all the model {@link DatabaseReference} with the populated document itself.
     * @param model to be transformed
     * @param references to be replaced
     */
    public static replaceModelReferences(model: any, references: PopulatedReferences[]): any {

        let mutableModel: any = model;

        Object.entries(mutableModel).forEach(entry => {
            if (Array.isArray(entry[1])) {
                mutableModel[entry[0]] = entry[1].flatMap(arrayItem => this.replaceModelReferences(arrayItem, references));
            } else {
                if (typeof mutableModel === "object") {
                    if (this.validateAsReference(entry[1])) {

                        const reference: DatabaseReference = entry[1] as DatabaseReference;
                        const populated = references.filter(compound => compound.objects!.id === reference.id && compound.databaseCollection === reference.databaseCollection);

                        if (populated) {
                            mutableModel[entry[0]] = {...populated, ...reference};
                        }

                    } else {
                        mutableModel[entry[0]] = this.replaceModelReferences(model, references);
                    }
                }
            }
        });

        return mutableModel;

    }


    /**
     * Generates a query involving all ids of a certain population registry
     * @param items to be listed in the query.
     */
    public static generateRawQuery(items: PopulateRegistry): any {

    }

    /**
     * Creates a {@link PopulateRegistry} where any {@link DatabaseReference} can be mapped
     * and queried for further replacement.
     * @param model to be mapped
     */
    public static getPopulateRegistry(model: Model): PopulateRegistry[] {

        let registry: PopulateRegistry[] = [];

        const references: DatabaseReference[] = this.getReferencesFromObject(model);
        references.forEach(reference => {

            if (registry.length === 0 || !registry.some(entry => entry.databaseCollection === reference.databaseCollection)) {
                registry.push({ids: [reference.id], databaseCollection: reference.databaseCollection});
            } else {
                registry = registry.map(entry => {
                    if (entry.databaseCollection === reference.databaseCollection) {
                        entry.ids.push(reference.id);
                    }
                    return entry;
                });
            }
        });

        return registry;

    }

    /**
     * Map every possible reference of an object properties and return it in a {@link DatabaseReference} format
     * @param item to be mapped
     */
    public static getReferencesFromObject(item: any): DatabaseReference[] {

        let databaseReferences: DatabaseReference[] = [];

        Object.entries(item).forEach(entry => {
            if (Array.isArray(entry[1])) {
                const arrayReferences: DatabaseReference[] = entry[1].flatMap(arrayItem => this.getReferencesFromObject(arrayItem));
                arrayReferences.forEach(reference => databaseReferences.push(reference));
            } else {
                if (typeof item === "object") {
                    if (this.validateAsReference(entry[1])) {
                        databaseReferences.push(entry[1] as DatabaseReference);
                    } else {
                        const objectReferences: DatabaseReference[] = this.getReferencesFromObject(entry[1]);
                        objectReferences.forEach(reference => databaseReferences.push(reference));
                    }
                }
            }
        });

        return databaseReferences;

    }

    /**
     * Validates if object contains required fields to be considered as a reference.
     * @param item to validate
     */
    public static validateAsReference(item: any): boolean {

        if (typeof item !== "object")
        {
            return false;
        }

        return item.id && item.databaseCollection;
    }

}