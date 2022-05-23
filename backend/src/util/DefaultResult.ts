import ValidationError from "./ValidationError";

interface DefaultResult {
  hasError: boolean;
  exception?: any;
  errorMessage?: string;
  result?: number | string | object
}

function newResult(): DefaultResult {
  return { hasError: false };
}

export { DefaultResult, newResult };