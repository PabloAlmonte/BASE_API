import { ParameterizedContext } from "koa";
import ApiError from "./CustomError";

export default interface CustomParameterizedContext extends ParameterizedContext{
  error: (err: ApiError) => void
  success: (result: unknown) => void
}