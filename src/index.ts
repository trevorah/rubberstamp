export { default as Validator, createValidator } from "./validator";

export { default as any } from "./basic/any";
export { default as array } from "./basic/array";
export { default as boolean } from "./basic/boolean";
export { default as null } from "./basic/null";
export { default as number } from "./basic/number";
export { default as object } from "./basic/object";
export { default as string } from "./basic/string";
export { default as undefined } from "./basic/undefined";

export { default as arrayOf } from "./higher-order/array-of";
export { default as maybeOf } from "./higher-order/maybe-of";
export { default as nullableOf } from "./higher-order/nullable-of";
export { default as objectOf } from "./higher-order/object-of";
export { default as partialOf } from "./higher-order/partial-of";
export { default as unionOf } from "./higher-order/union-of";

// // interface Validator<T> {
// //   (input: any): T;
// // }

// // const createValidator = <T>(
// //   name: string,
// //   guardFn: (guardInput: T) => guardInput is T
// // ): Validator<T> => {
// //   return input => {
// //     if (!guardFn(input)) {
// //       throw new Error(`not ${name}`);
// //     }
// //     return input;
// //   };
// // };

// const isString = (input: any): input is string => typeof input === "string";
// const isNumber = (input: any): input is number => typeof input === "number";
// const isBoolean = (input: any): input is boolean => typeof input === "boolean";

// const vString = createValidator("string", isString);
// const vNumber = createValidator("number", isNumber);
// const vBoolean = createValidator("boolean", isBoolean);

// export const nullableOf = <T>(validator: Validator<T>): Validator<T | null> =>
//   validator;
// const partialOf = <T>(validator: Validator<T>): Validator<T | undefined> =>
//   validator;

// const arrayOf = <T>(validator: Validator<T>): Validator<T[]> => {
//   return () => [];
// };

// type ObjectOfValidators = {
//   [key: string]: Validator<any>;
// };

// type ObjectOfReturnTypes<T extends ObjectOfValidators> = {
//   [K in keyof T]: ReturnType<T[K]>
// };

// const objectOf = <T extends ObjectOfValidators>(
//   validators: T
// ): Validator<ObjectOfReturnTypes<T>> => {
//   return () => ({} as ObjectOfReturnTypes<T>);
// };

// // const withCatch = (validator, ):

// interface ErrorHandler<T> {
//   (error: Error): T;
// }

// const withDefault = <T, U>(
//   validator: Validator<T>,
//   defaultFn: ErrorHandler<U>
// ): Validator<T | U> => validator;

// // interface validator<T> {
// //     (input: any): T;
// // }

// // interface Validator<T> {
// //     (input: any): T;
// // }

// // const createValidator = <T>(name: string, guardFn: (guardInput: T) => guardInput is T): Validator<T> => {
// //   return (input) => {
// //       if (!guardFn(input)) {
// //           throw new Error(`not ${name}`)
// //       }
// //       return input
// //   }
// // }

// // const stringvalidator: validator<string> = input => {
// //     if (typeof input !== "string") {
// //         throw new Error("not a string")
// //     }
// //     return input
// // }

// // const isString = (input: any): input is string => typeof input === "string"
// // const isNumber = (input: any): input is number => typeof input === "number"

// // const altStringValidator = createValidator('string', isString);
// // const vString = createValidator('string', isString);
// // const vNumber = createValidator('number', isNumber);

// // type StringKeyedObject = { [key: string]: any }

// // const isStingKeyedObject = (input: any): input is StringKeyedObject => typeof input === "object"

// // const vObject = createValidator("object", isStingKeyedObject);

// // // const or = <T>(...validators: validator<T>[]) =>

// // // const $object = ([string]: validator)

// // const xnumber = 1;

// // const p = altStringValidator(xnumber)

// // // type whatinput =

// // interface ObjectValidatorCofig {
// //     [prop: string]: Validator<any>
// // }

// // type magic<T extends ObjectValidatorCofig> = {
// //     [K in keyof T]: ReturnType<T[K]>
// // }

// // // const whatever = <V extends {[key: string]: validator<any>}>(validators: V, input: {}) => {
// // //   return Object.keys(validators).reduce((prev, curr) => {
// // //       prev[curr] = validators[curr](input[curr]);
// // //       return prev;
// // //   }, {});
// // // }

// // type ValidatorConfig = {
// //     [key: string]: Validator<any>
// // }

// // type Options = {
// //     [key: string]: Validator<any>
// // }

// // type ObjectReturnType<T extends Options> = {
// //   [K in keyof T]: ReturnType<T[K]>
// // }

// // const x: ValidatorConfig = {
// //     w: vString,
// //     y: vString
// // }

// // type Output = ObjectReturnType<ValidatorConfig>

// // const inputObject = { w: 1, y: null }
// // // const keys = Object.keys(x);

// // let o = {} as Output;
// // for (const key in x) {
// //     o[key] = "i"
// //     // x[key](inputObject[key]);
// // }

// // const xxx = <T extends Options>(input: any, validators: T): ObjectReturnType<T> => {
// //   let o = {} as ObjectReturnType<T>;

// //   return o;
// // }

// // const poopoo = xxx("sooo", { s: vString, p: vNumber })

// // // poopoo.

// // const iii = poopoo["s"];

// // // const y: Output = keys.reduce<{[key: string]: any}>((acc, key) => {
// // //     acc[key] = x[key](inputObject);
// // //     return acc;
// // // }, {})
// //     //         acc[key] = "q";
// //     //         return acc;
// //     //     }, {});

// // // const xxx = <T extends ObjectValidatorCofig>(input: any, validators: T): magic<T> => {
// // //     const inputObject = vObject(input);

// // //     const keys = Object.keys(validators);

// // //     const x = keys.reduce<{[key: string]: any}>((acc, key) => {
// // //         acc[key] = "q";
// // //         return acc;
// // //     }, {});

// // //     return Object.keys(validators).reduce((prev, curr) => {
// // //               prev[curr] = validators[curr](input[curr]);
// // //               return prev;
// // //           }, {});
// // // }
