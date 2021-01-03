/**
 * Thrown when a version check on an object that uses optimistic locking through a version field fails.
 */
export class OracleReservedWordError extends Error {
    name = "OracleReservedWordError";

    constructor(columnName: string) {
        super();
        Object.setPrototypeOf(this, OracleReservedWordError.prototype);
        this.message = `Column name [${columnName}] is an Oracle reserved word and cannot be used as an identifier`;
    }

}
