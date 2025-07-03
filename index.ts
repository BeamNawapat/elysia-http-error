import Elysia from "elysia";

export class HttpError extends Error {
  public constructor(
    public message: string,
    public statusCode: number,
    public errorData: any = undefined
  ) {
    super(message);
  }

  public static BadRequest(message?: string, errorData?: any) {
    return new HttpError(message || "Bad Request", 400, errorData);
  }

  public static Unauthorized(message?: string, errorData?: any) {
    return new HttpError(message || "Unauthorized", 401, errorData);
  }

  public static PaymentRequired(message?: string, errorData?: any) {
    return new HttpError(message || "Payment Required", 402, errorData);
  }

  public static Forbidden(message?: string, errorData?: any) {
    return new HttpError(message || "Forbidden", 403, errorData);
  }

  public static NotFound(message?: string, errorData?: any) {
    return new HttpError(message || "Not Found", 404, errorData);
  }

  public static MethodNotAllowed(message?: string, errorData?: any) {
    return new HttpError(message || "Method Not Allowed", 405, errorData);
  }

  public static NotAcceptable(message?: string, errorData?: any) {
    return new HttpError(message || "Not Acceptable", 406, errorData);
  }

  public static ProxyAuthenticationRequired(message?: string, errorData?: any) {
    return new HttpError(message || "Proxy Authentication Required", 407, errorData);
  }

  public static RequestTimeout(message?: string, errorData?: any) {
    return new HttpError(message || "Request Timeout", 408, errorData);
  }

  public static Conflict(message?: string, errorData?: any) {
    return new HttpError(message || "Conflict", 409, errorData);
  }

  public static Gone(message?: string, errorData?: any) {
    return new HttpError(message || "Gone", 410, errorData);
  }

  public static LengthRequired(message?: string, errorData?: any) {
    return new HttpError(message || "Length Required", 411, errorData);
  }

  public static PreconditionFailed(message?: string, errorData?: any) {
    return new HttpError(message || "Precondition Failed", 412, errorData);
  }

  public static PayloadTooLarge(message?: string, errorData?: any) {
    return new HttpError(message || "Payload Too Large", 413, errorData);
  }

  public static UriTooLong(message?: string, errorData?: any) {
    return new HttpError(message || "URI Too Long", 414, errorData);
  }

  public static UnsupportedMediaType(message?: string, errorData?: any) {
    return new HttpError(message || "Unsupported Media Type", 415, errorData);
  }

  public static RangeNotSatisfiable(message?: string, errorData?: any) {
    return new HttpError(message || "Range Not Satisfiable", 416, errorData);
  }

  public static ExpectationFailed(message?: string, errorData?: any) {
    return new HttpError(message || "Expectation Failed", 417, errorData);
  }

  public static IAmATeapot(message?: string, errorData?: any) {
    return new HttpError(message || "I'm a Teapot", 418, errorData);
  }

  public static MisdirectedRequest(message?: string, errorData?: any) {
    return new HttpError(message || "Misdirected Request", 421, errorData);
  }

  public static UnprocessableEntity(message?: string, errorData?: any) {
    return new HttpError(message || "Unprocessable Entity", 422, errorData);
  }

  public static Locked(message?: string, errorData?: any) {
    return new HttpError(message || "Locked", 423, errorData);
  }

  public static FailedDependency(message?: string, errorData?: any) {
    return new HttpError(message || "Failed Dependency", 424, errorData);
  }

  public static TooEarly(message?: string, errorData?: any) {
    return new HttpError(message || "Too Early", 425, errorData);
  }

  public static UpgradeRequired(message?: string, errorData?: any) {
    return new HttpError(message || "Upgrade Required", 426, errorData);
  }

  public static PreconditionRequired(message?: string, errorData?: any) {
    return new HttpError(message || "Precondition Required", 428, errorData);
  }

  public static TooManyRequests(message?: string, errorData?: any) {
    return new HttpError(message || "Too Many Requests", 429, errorData);
  }

  public static RequestHeaderFieldsTooLarge(message?: string, errorData?: any) {
    return new HttpError(message || "Request Header Fields Too Large", 431, errorData);
  }

  public static UnavailableForLegalReasons(message?: string, errorData?: any) {
    return new HttpError(message || "Unavailable For Legal Reasons", 451, errorData);
  }

  // 5xx Server Error Responses
  public static Internal(message?: string, errorData?: any) {
    return new HttpError(message || "Internal Server Error", 500, errorData);
  }

  public static NotImplemented(message?: string, errorData?: any) {
    return new HttpError(message || "Not Implemented", 501, errorData);
  }

  public static BadGateway(message?: string, errorData?: any) {
    return new HttpError(message || "Bad Gateway", 502, errorData);
  }

  public static ServiceUnavailable(message?: string, errorData?: any) {
    return new HttpError(message || "Service Unavailable", 503, errorData);
  }

  public static GatewayTimeout(message?: string, errorData?: any) {
    return new HttpError(message || "Gateway Timeout", 504, errorData);
  }

  public static HttpVersionNotSupported(message?: string, errorData?: any) {
    return new HttpError(message || "HTTP Version Not Supported", 505, errorData);
  }

  public static VariantAlsoNegotiates(message?: string, errorData?: any) {
    return new HttpError(message || "Variant Also Negotiates", 506, errorData);
  }

  public static InsufficientStorage(message?: string, errorData?: any) {
    return new HttpError(message || "Insufficient Storage", 507, errorData);
  }

  public static LoopDetected(message?: string, errorData?: any) {
    return new HttpError(message || "Loop Detected", 508, errorData);
  }

  public static NotExtended(message?: string, errorData?: any) {
    return new HttpError(message || "Not Extended", 510, errorData);
  }

  public static NetworkAuthenticationRequired(message?: string, errorData?: any) {
    return new HttpError(message || "Network Authentication Required", 511, errorData);
  }

  public static ValidationFailed(message?: string, errorData?: any) {
    return new HttpError(message || "Validation Failed", 422, errorData);
  }

  public static DatabaseError(message?: string, errorData?: any) {
    return new HttpError(message || "Database Error", 500, errorData);
  }

  public static ExternalServiceError(message?: string, errorData?: any) {
    return new HttpError(message || "External Service Error", 502, errorData);
  }

  public static MaintenanceMode(message?: string, errorData?: any) {
    return new HttpError(message || "Service Under Maintenance", 503, errorData);
  }
}
}

export const httpErrorDecorator = new Elysia({
  name: "elysia-http-error-decorator",
}).decorate("HttpError", HttpError);

interface HttpErrorConstructor {
  customFormatter?: (error: HttpError) => any;
  returnStringOnly?: boolean;
}

export const httpError = (
  params: HttpErrorConstructor = {
    customFormatter: undefined,
    returnStringOnly: false,
  }
) =>
  new Elysia({ name: "elysia-http-error" })
    .error({
      ELYSIA_HTTP_ERROR: HttpError,
    })
    .onError({ as: "global" }, ({ code, error, set }) => {
      if (code === "ELYSIA_HTTP_ERROR") {
        set.status = error.statusCode;
        if (params.customFormatter) {
          return params.customFormatter(error);
        }
        if (params.returnStringOnly) {
          return error.message;
        }
        return {
          error: true,
          code: error.statusCode,
          message: error.message,
          data: error.errorData,
        };
      }
    });
