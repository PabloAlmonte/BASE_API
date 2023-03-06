import { Next, ParameterizedContext } from "koa";
import ApiError from "../shared/CustomError";

function error(ctx: ParameterizedContext, err: ApiError){
  ctx.status = err.statusCode
  ctx.body = err
}

function success(ctx: ParameterizedContext, result: unknown){
  ctx.status = 200
  ctx.body = result
}

export default function ResponseMiddleware(ctx: ParameterizedContext, next: Next) {
  ctx.success = (result: unknown) => success(ctx, result)
  ctx.error = (err: ApiError) => error(ctx, err)

  next()
}