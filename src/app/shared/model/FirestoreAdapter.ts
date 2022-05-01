import {Model} from "../../core/model/model.dto";
import {FirestoreDocument} from "./FirestoreDocument";

export class FirestoreAdapter {

    /**
     * Sanitize value to the correct format of Firestore.
     * @param item to be fixed.
     */
    public static sanitizeValue<T>(item: T): any {

        if (typeof item !== "object") {
            return this.transformValue(item);
        }

        let sanitized: any = {};

        Object.entries(item).forEach(i => {
            if (Array.isArray(i[1])) {
                sanitized[i[0]] = {
                    arrayValue: {
                        values: i[1].map(item => this.sanitizeValue(item))
                    }
                };
            } else {
                sanitized[i[0]] = this.transformValue(i[1]);
            }
        });

        return sanitized;

    }

    /**
     * Transform any value to Firestore correct notation.
     * @param value to transform
     */
    private static transformValue<T>(value: T): any {
        switch (typeof value) {
            case "string": {
                return  {
                    stringValue: value
                };
            }
            case "number": {
                return  {
                    doubleValue: value
                };
            }
            case "boolean": {
                return  {
                    booleanValue: value
                }
            }
            case "object": {
                return {
                    mapValue: {
                        fields: this.sanitizeValue(value)
                    }
                };
            }
            default: {
                throw new Error("Not serializable data provided");
            }
        }
    }

    /**
     * Transform a {@link FirestoreDocument} into a {@link Model} serialization.
     * @param value to be fixed
     */
    public static fixValue<T>(value: T): any {

        let sanitized: any = {};

        Object.entries(value).forEach(i => {

            if (
                i[0] === "stringValue" ||
                i[0] === "doubleValue" ||
                i[0] === "booleanValue" ||
                i[0] === "arrayValue" ||
                i[0] === "mapValue"
            ) {
                sanitized = this.transformFixedValue(i[0], i[1]);
            } else {
                Object.entries(i[1]).map(inner => {
                    sanitized[i[0]] = this.transformFixedValue(inner[0], inner[1])
                });
            }

        });

        return sanitized;
    }

    /**
     * Transform individually every type of {@link FirestoreDocument} field.
     * @param tag of the document
     * @param value to be fixed
     * @private
     */
    private static transformFixedValue(tag: any, value: any): any {
        switch (tag) {
            case "stringValue":
            case "doubleValue":
            case "booleanValue": {
                return value;
            }
            case "arrayValue": {
                return value.values.map((v: any) => {
                    return this.fixValue(v);
                });
            }
            case "mapValue": {
                return this.fixValue(value.fields);
            }
            default: {
                throw new Error("Not serializable data provided");
            }
        }
    }

    public static transformDocument<T extends Model>(document: FirestoreDocument<T>) {
        return {
            ...FirestoreAdapter.fixValue(document.fields),
            id: document.name.split("/").pop(),
            createTime: document.createTime,
            updatedAt: document.createTime
        }
    }

}