const prettyPrintPath = (path: Array<string | number>) =>
  path.reduce<string>((acc, item) => {
    if (typeof item === "string") {
      const prefix = acc.length ? "." : "";
      return acc + prefix + item;
    } else {
      return acc + `[${item}]`;
    }
  }, "");

const createMessage = (
  failedInput: string,
  type: string,
  path: Array<string | number>
): string => {
  let message = `${failedInput} is not ${type}`;
  if (path.length) {
    message = `${message} (at ${prettyPrintPath(path)})`;
  }
  return message;
};

export default class ValidationError extends Error {
  readonly typeName: string;
  readonly path: Array<string | number>;

  constructor(
    failedInput: any,
    typeName: string,
    path: Array<string | number> = []
  ) {
    super(createMessage(failedInput, typeName, path));
    this.typeName = typeName;
    this.path = path;
    this.name = "ValidationError";
  }
}

export const getErrorProps = (error: Error) => {
  const props = error as { [key: string]: any };

  if (typeof props["typeName"] === "string" && Array.isArray(props["path"])) {
    return {
      typeName: props["typeName"] as string,
      path: props["path"] as Array<string | number>
    };
  } else {
    return {
      typeName: "UNKNOWN",
      path: []
    };
  }
};
