import { describe, it } from 'node:test';
import assert from 'node:assert';
import httpStatus from '../dist/index.js';

describe('HTTP Response Library', () => {
  describe('Basic Response Objects', () => {
    it('should have correct structure for ok response', () => {
      const response = httpStatus.ok;

      assert.strictEqual(typeof response, 'object');
      assert.strictEqual(typeof response.status, 'number');
      assert.strictEqual(typeof response.code, 'string');
      assert.strictEqual(typeof response.message, 'string');

      assert.strictEqual(response.status, 200);
      assert.strictEqual(response.code, 'OK');
      assert.strictEqual(response.message, 'The request has succeeded');
    });

    it('should have correct structure for error responses', () => {
      const notFound = httpStatus.notFound;

      assert.strictEqual(notFound.status, 404);
      assert.strictEqual(notFound.code, 'NOT_FOUND');
      assert.strictEqual(
        notFound.message,
        'The requested resource could not be found',
      );

      const serverError = httpStatus.internalServerError;

      assert.strictEqual(serverError.status, 500);
      assert.strictEqual(serverError.code, 'INTERNAL_SERVER_ERROR');
      assert.strictEqual(
        serverError.message,
        'The server encountered an unexpected condition',
      );
    });

    it('should have all expected 2xx responses', () => {
      assert.strictEqual(httpStatus.ok.status, 200);
      assert.strictEqual(httpStatus.created.status, 201);
      assert.strictEqual(httpStatus.accepted.status, 202);
      assert.strictEqual(httpStatus.noContent.status, 204);
    });

    it('should have all expected 4xx responses', () => {
      assert.strictEqual(httpStatus.badRequest.status, 400);
      assert.strictEqual(httpStatus.unauthorized.status, 401);
      assert.strictEqual(httpStatus.forbidden.status, 403);
      assert.strictEqual(httpStatus.notFound.status, 404);
      assert.strictEqual(httpStatus.conflict.status, 409);
      assert.strictEqual(httpStatus.unprocessableEntity.status, 422);
      assert.strictEqual(httpStatus.tooManyRequests.status, 429);
    });

    it('should have all expected 5xx responses', () => {
      assert.strictEqual(httpStatus.internalServerError.status, 500);
      assert.strictEqual(httpStatus.notImplemented.status, 501);
      assert.strictEqual(httpStatus.badGateway.status, 502);
      assert.strictEqual(httpStatus.serviceUnavailable.status, 503);
      assert.strictEqual(httpStatus.gatewayTimeout.status, 504);
    });
  });

  describe('Alias Functionality', () => {
    it('should have working uppercase aliases', () => {
      // Test that uppercase aliases exist and point to the same objects
      assert.strictEqual(httpStatus.OK, httpStatus.ok);
      assert.strictEqual(httpStatus.FORBIDDEN, httpStatus.forbidden);
      assert.strictEqual(httpStatus.NOT_FOUND, httpStatus.notFound);
      assert.strictEqual(
        httpStatus.INTERNAL_SERVER_ERROR,
        httpStatus.internalServerError,
      );
    });

    it('should have working numeric aliases', () => {
      // Test that numeric aliases exist and point to the same objects
      assert.strictEqual(httpStatus[200], httpStatus.ok);
      assert.strictEqual(httpStatus[403], httpStatus.forbidden);
      assert.strictEqual(httpStatus[404], httpStatus.notFound);
      assert.strictEqual(httpStatus[500], httpStatus.internalServerError);
    });

    it('should have triple equality between all alias types', () => {
      // Test the main selling point: all three access methods are equivalent
      assert.strictEqual(
        httpStatus.ok === httpStatus.OK && httpStatus.OK === httpStatus[200],
        true,
        'httpStatus.ok === httpStatus.OK === httpStatus[200] should be true',
      );

      assert.strictEqual(
        httpStatus.forbidden === httpStatus.FORBIDDEN &&
          httpStatus.FORBIDDEN === httpStatus[403],
        true,
        'httpStatus.forbidden === httpStatus.FORBIDDEN === httpStatus[403] should be true',
      );

      assert.strictEqual(
        httpStatus.notFound === httpStatus.NOT_FOUND &&
          httpStatus.NOT_FOUND === httpStatus[404],
        true,
        'httpStatus.notFound === httpStatus.NOT_FOUND === httpStatus[404] should be true',
      );
    });

    it('should have all uppercase aliases for common status codes', () => {
      const testCases = [
        ['ok', 'OK'],
        ['created', 'CREATED'],
        ['accepted', 'ACCEPTED'],
        ['noContent', 'NO_CONTENT'],
        ['badRequest', 'BAD_REQUEST'],
        ['unauthorized', 'UNAUTHORIZED'],
        ['forbidden', 'FORBIDDEN'],
        ['notFound', 'NOT_FOUND'],
        ['methodNotAllowed', 'METHOD_NOT_ALLOWED'],
        ['internalServerError', 'INTERNAL_SERVER_ERROR'],
        ['notImplemented', 'NOT_IMPLEMENTED'],
        ['badGateway', 'BAD_GATEWAY'],
        ['serviceUnavailable', 'SERVICE_UNAVAILABLE'],
      ];

      testCases.forEach(([camelCase, upperCase]) => {
        assert.strictEqual(
          httpStatus[upperCase],
          httpStatus[camelCase],
          `httpStatus.${upperCase} should equal httpStatus.${camelCase}`,
        );
      });
    });

    it('should have all numeric aliases for common status codes', () => {
      const testCases = [
        [200, 'ok'],
        [201, 'created'],
        [202, 'accepted'],
        [204, 'noContent'],
        [301, 'moved'],
        [302, 'found'],
        [304, 'notModified'],
        [400, 'badRequest'],
        [401, 'unauthorized'],
        [403, 'forbidden'],
        [404, 'notFound'],
        [405, 'methodNotAllowed'],
        [409, 'conflict'],
        [410, 'gone'],
        [422, 'unprocessableEntity'],
        [429, 'tooManyRequests'],
        [500, 'internalServerError'],
        [501, 'notImplemented'],
        [502, 'badGateway'],
        [503, 'serviceUnavailable'],
        [504, 'gatewayTimeout'],
      ];

      testCases.forEach(([statusCode, camelCase]) => {
        assert.strictEqual(
          httpStatus[statusCode],
          httpStatus[camelCase],
          `httpStatus[${statusCode}] should equal httpStatus.${camelCase}`,
        );
        assert.strictEqual(
          httpStatus[statusCode].status,
          statusCode,
          `httpStatus[${statusCode}].status should equal ${statusCode}`,
        );
      });
    });
  });

  describe('Response Object Properties', () => {
    it('should have consistent response objects', () => {
      // Since response objects are shared references, let's test they have consistent properties
      const response1 = httpStatus.ok;
      const response2 = httpStatus.OK;
      const response3 = httpStatus[200];

      // All should be the same object reference
      assert.strictEqual(response1, response2);
      assert.strictEqual(response2, response3);

      // All should have the expected values
      assert.strictEqual(response1.status, 200);
      assert.strictEqual(response1.code, 'OK');
      assert.strictEqual(response1.message, 'The request has succeeded');
    });

    it('should have consistent code naming patterns', () => {
      // Test that all codes follow the UPPER_CASE pattern
      const responses = [
        httpStatus.ok,
        httpStatus.created,
        httpStatus.badRequest,
        httpStatus.notFound,
        httpStatus.internalServerError,
      ];

      responses.forEach((response) => {
        assert.match(
          response.code,
          /^[A-Z_]+$/,
          `Code "${response.code}" should be in UPPER_CASE format`,
        );
      });
    });

    it('should have non-empty messages', () => {
      const testResponses = [
        httpStatus.ok,
        httpStatus.created,
        httpStatus.badRequest,
        httpStatus.forbidden,
        httpStatus.notFound,
        httpStatus.internalServerError,
      ];

      testResponses.forEach((response) => {
        assert.ok(
          response.message && response.message.length > 0,
          `Response ${response.code} should have a non-empty message`,
        );
      });
    });
  });

  describe('Exports', () => {
    it('should export httpStatus as default export', () => {
      assert.ok(httpStatus);
      assert.strictEqual(typeof httpStatus, 'object');
      assert.ok(httpStatus.ok);
    });

    it('should export types for TypeScript', async () => {
      // This test just ensures the type exports don't cause runtime errors
      const module = await import('../dist/index.js');
      assert.ok(module.default);
    });
  });

  describe('Integration Examples', () => {
    it('should work for Express.js-style status setting', () => {
      // Simulate Express.js usage
      const mockRes = {
        status: null,
        json: null,
        statusMethod(code) {
          this.status = code;
          return this;
        },
        jsonMethod(data) {
          this.json = data;
          return this;
        },
      };

      // Create fresh references to avoid any mutation issues
      const okResponse = httpStatus.ok;
      const notFoundResponse = httpStatus.notFound;

      // Test successful response
      mockRes.statusMethod(okResponse.status).jsonMethod({
        ...okResponse,
        data: { message: 'Hello World' },
      });

      assert.strictEqual(mockRes.status, 200);
      assert.strictEqual(mockRes.json.status, 200);
      assert.strictEqual(mockRes.json.code, 'OK');
      assert.ok(mockRes.json.data);

      // Test error response
      mockRes
        .statusMethod(notFoundResponse.status)
        .jsonMethod(notFoundResponse);

      assert.strictEqual(mockRes.status, 404);
      assert.strictEqual(mockRes.json.status, 404);
      assert.strictEqual(mockRes.json.code, 'NOT_FOUND');
    });

    it('should work for status code comparison', () => {
      // Test with different status codes using fresh references
      const testCases = [
        { responseStatus: 200, expectedResponse: httpStatus.ok },
        { responseStatus: 201, expectedResponse: httpStatus.created },
        { responseStatus: 400, expectedResponse: httpStatus.badRequest },
        { responseStatus: 404, expectedResponse: httpStatus.notFound },
        {
          responseStatus: 500,
          expectedResponse: httpStatus.internalServerError,
        },
      ];

      testCases.forEach(({ responseStatus, expectedResponse }) => {
        // Simulate checking response status codes
        const mockApiResponse = { status: responseStatus };

        if (mockApiResponse.status === expectedResponse.status) {
          assert.ok(true, `Successfully matched ${responseStatus} status`);
        } else {
          assert.fail(
            `Should have matched ${responseStatus} status. Expected ${expectedResponse.status} but got ${mockApiResponse.status}`,
          );
        }

        assert.strictEqual(
          responseStatus,
          expectedResponse.status,
          `Status ${responseStatus} should match ${expectedResponse.code}`,
        );
      });
    });
  });

  describe('Locales', () => {
    it('should load Japanese locale with translated messages', async () => {
      const httpStatusJa = await import('../dist/locales/ja.js');
      const jaStatus = httpStatusJa.default;

      // Status codes and codes should remain the same
      assert.strictEqual(jaStatus.forbidden.status, 403);
      assert.strictEqual(jaStatus.forbidden.code, 'FORBIDDEN');

      // Message should be in Japanese
      assert.strictEqual(
        jaStatus.forbidden.message,
        'サーバーはリクエストを理解したが、承認を拒否した。',
      );

      // Structure should be identical to main export
      assert.strictEqual(typeof jaStatus.ok, 'object');
      assert.strictEqual(typeof jaStatus.ok.status, 'number');
      assert.strictEqual(typeof jaStatus.ok.code, 'string');
      assert.strictEqual(typeof jaStatus.ok.message, 'string');
    });

    it('should load Spanish locale with translated messages', async () => {
      const httpStatusEs = await import('../dist/locales/es.js');
      const esStatus = httpStatusEs.default;

      // Status codes and codes should remain the same
      assert.strictEqual(esStatus.forbidden.status, 403);
      assert.strictEqual(esStatus.forbidden.code, 'FORBIDDEN');

      // Message should be in Spanish
      assert.strictEqual(
        esStatus.forbidden.message,
        'El servidor entendió la solicitud pero se niega a autorizarla',
      );

      // Test another status
      assert.strictEqual(esStatus.notFound.status, 404);
      assert.strictEqual(esStatus.notFound.code, 'NOT_FOUND');
      assert.strictEqual(
        esStatus.notFound.message,
        'No se pudo encontrar el recurso solicitado',
      );
    });

    it('should load German locale with translated messages', async () => {
      const httpStatusDe = await import('../dist/locales/de.js');
      const deStatus = httpStatusDe.default;

      // Status codes and codes should remain the same
      assert.strictEqual(deStatus.forbidden.status, 403);
      assert.strictEqual(deStatus.forbidden.code, 'FORBIDDEN');

      // Message should be in German
      assert.strictEqual(
        deStatus.forbidden.message,
        'Der Server verstand die Anfrage, verweigert aber die Autorisierung',
      );
    });

    it('should maintain all access patterns in localized versions', async () => {
      const httpStatusJa = await import('../dist/locales/ja.js');
      const jaStatus = httpStatusJa.default;

      // Test camelCase, UPPERCASE, and numeric access all work and are equal
      assert.strictEqual(jaStatus.forbidden, jaStatus.FORBIDDEN);
      assert.strictEqual(jaStatus.FORBIDDEN, jaStatus[403]);
      assert.strictEqual(
        jaStatus.forbidden === jaStatus.FORBIDDEN &&
          jaStatus.FORBIDDEN === jaStatus[403],
        true,
        'All access patterns should be equal in localized versions',
      );

      // Test multiple status codes
      assert.strictEqual(jaStatus.ok, jaStatus.OK);
      assert.strictEqual(jaStatus.OK, jaStatus[200]);
      assert.strictEqual(jaStatus.notFound, jaStatus.NOT_FOUND);
      assert.strictEqual(jaStatus.NOT_FOUND, jaStatus[404]);
    });

    it('should have different messages but same structure across locales', async () => {
      const [httpStatusEn, httpStatusJa, httpStatusEs] = await Promise.all([
        import('../dist/locales/en.js'),
        import('../dist/locales/ja.js'),
        import('../dist/locales/es.js'),
      ]);

      const enStatus = httpStatusEn.default;
      const jaStatus = httpStatusJa.default;
      const esStatus = httpStatusEs.default;

      // All should have same status code and code
      assert.strictEqual(enStatus.forbidden.status, 403);
      assert.strictEqual(jaStatus.forbidden.status, 403);
      assert.strictEqual(esStatus.forbidden.status, 403);

      assert.strictEqual(enStatus.forbidden.code, 'FORBIDDEN');
      assert.strictEqual(jaStatus.forbidden.code, 'FORBIDDEN');
      assert.strictEqual(esStatus.forbidden.code, 'FORBIDDEN');

      // Messages should be different
      const enMessage = enStatus.forbidden.message;
      const jaMessage = jaStatus.forbidden.message;
      const esMessage = esStatus.forbidden.message;

      assert.notStrictEqual(enMessage, jaMessage);
      assert.notStrictEqual(enMessage, esMessage);
      assert.notStrictEqual(jaMessage, esMessage);

      // All messages should be non-empty strings
      assert.ok(enMessage && enMessage.length > 0);
      assert.ok(jaMessage && jaMessage.length > 0);
      assert.ok(esMessage && esMessage.length > 0);
    });

    it('should have all status codes available in localized versions', async () => {
      const httpStatusJa = await import('../dist/locales/ja.js');
      const jaStatus = httpStatusJa.default;

      // Test that all main status codes exist
      const statusCodes = [
        200, 201, 202, 204, 301, 302, 304, 400, 401, 403, 404, 405, 409, 410,
        422, 429, 500, 501, 502, 503, 504,
      ];

      statusCodes.forEach((code) => {
        assert.ok(
          jaStatus[code],
          `Status code ${code} should exist in Japanese locale`,
        );
        assert.strictEqual(
          jaStatus[code].status,
          code,
          `Status ${code} should have correct status value`,
        );
        assert.ok(
          jaStatus[code].message && jaStatus[code].message.length > 0,
          `Status ${code} should have a message`,
        );
      });
    });

    it('should work in Express.js-style usage with locales', async () => {
      const httpStatusEs = await import('../dist/locales/es.js');
      const esStatus = httpStatusEs.default;

      // Mock Express response
      const mockRes = {
        status: null,
        json: null,
        statusMethod(code) {
          this.status = code;
          return this;
        },
        jsonMethod(data) {
          this.json = data;
          return this;
        },
      };

      // Use Spanish locale for error response
      const notFoundResponse = esStatus.notFound;
      mockRes
        .statusMethod(notFoundResponse.status)
        .jsonMethod(notFoundResponse);

      assert.strictEqual(mockRes.status, 404);
      assert.strictEqual(mockRes.json.status, 404);
      assert.strictEqual(mockRes.json.code, 'NOT_FOUND');
      assert.strictEqual(
        mockRes.json.message,
        'No se pudo encontrar el recurso solicitado',
      );
    });
  });
});

// Custom Formatters
describe('Custom Formatters', () => {
  it('should create custom formatted objects', async () => {
    const { createCustomHttpStatus } = await import('../dist/index.js');

    // Create custom format like the user's example
    const customHttp = createCustomHttpStatus((status, code, message) => ({
      response: {
        error: code,
        message: message,
      },
      statusCode: status,
    }));

    // Test basic structure
    const internalError = customHttp.internalServerError;
    assert.strictEqual(typeof internalError, 'object');
    assert.strictEqual(typeof internalError.response, 'object');
    assert.strictEqual(internalError.response.error, 'INTERNAL_SERVER_ERROR');
    assert.strictEqual(internalError.statusCode, 500);
    assert.strictEqual(typeof internalError.response.message, 'string');
    assert.ok(internalError.response.message.length > 0);
  });

  it('should maintain alias equality in custom formatters', async () => {
    const { createCustomHttpStatus } = await import('../dist/index.js');

    const customHttp = createCustomHttpStatus((status, code, message) => ({
      status,
      code,
      message,
      custom: true,
    }));

    // All aliases should be the same object
    assert.strictEqual(customHttp.ok, customHttp.OK);
    assert.strictEqual(customHttp.OK, customHttp[200]);
    assert.strictEqual(customHttp.ok, customHttp[200]);

    // Check custom property exists
    assert.strictEqual(customHttp.ok.custom, true);
    assert.strictEqual(customHttp.ok.status, 200);
  });

  it('should work with different custom formats', async () => {
    const { createCustomHttpStatus } = await import('../dist/index.js');

    // Express-style format
    const expressFormat = createCustomHttpStatus((status, code, message) => ({
      status,
      error: {
        code: code,
        detail: message,
      },
    }));

    // Test format
    const notFound = expressFormat.notFound;
    assert.strictEqual(notFound.status, 404);
    assert.strictEqual(notFound.error.code, 'NOT_FOUND');
    assert.strictEqual(typeof notFound.error.detail, 'string');

    // Another format - minimal
    const minimalFormat = createCustomHttpStatus((status, code) => ({
      s: status,
      c: code,
    }));

    const teapot = minimalFormat.imATeapot;
    assert.strictEqual(teapot.s, 418);
    assert.strictEqual(teapot.c, 'IM_A_TEAPOT');
  });

  it('should have TypeScript-compatible return types', async () => {
    const { createCustomHttpStatus } = await import('../dist/index.js');

    // This would be type-checked at compile time
    const typedFormat = createCustomHttpStatus((status, code, message) => ({
      statusCode: status,
      errorCode: code,
      description: message,
      timestamp: new Date().toISOString(),
    }));

    const response = typedFormat.badRequest;
    assert.strictEqual(typeof response.statusCode, 'number');
    assert.strictEqual(typeof response.errorCode, 'string');
    assert.strictEqual(typeof response.description, 'string');
    assert.strictEqual(typeof response.timestamp, 'string');
  });

  it('should work with REST API format', async () => {
    const { createCustomHttpStatus } = await import('../dist/index.js');

    const apiFormat = createCustomHttpStatus((status, code, message) => ({
      success: status < 400,
      statusCode: status,
      error:
        status >= 400
          ? {
              type: code,
              message: message,
            }
          : null,
      data: null,
    }));

    // Test success response
    const successResponse = apiFormat.ok;
    assert.strictEqual(successResponse.success, true);
    assert.strictEqual(successResponse.statusCode, 200);
    assert.strictEqual(successResponse.error, null);
    assert.strictEqual(successResponse.data, null);

    // Test error response
    const errorResponse = apiFormat.badRequest;
    assert.strictEqual(errorResponse.success, false);
    assert.strictEqual(errorResponse.statusCode, 400);
    assert.strictEqual(typeof errorResponse.error, 'object');
    assert.strictEqual(errorResponse.error.type, 'BAD_REQUEST');
    assert.strictEqual(typeof errorResponse.error.message, 'string');
  });

  it('should work with all new status codes', async () => {
    const { createCustomHttpStatus } = await import('../dist/index.js');

    const customHttp = createCustomHttpStatus((status, code, message) => ({
      httpStatus: status,
      errorType: code,
      description: message,
    }));

    // Test some of the newly added status codes
    const partialContent = customHttp.partialContent;
    assert.strictEqual(partialContent.httpStatus, 206);
    assert.strictEqual(partialContent.errorType, 'PARTIAL_CONTENT');

    const teapot = customHttp.imATeapot;
    assert.strictEqual(teapot.httpStatus, 418);
    assert.strictEqual(teapot.errorType, 'IM_A_TEAPOT');
    assert.ok(teapot.description.includes('teapot'));

    const legalReasons = customHttp.unavailableForLegalReasons;
    assert.strictEqual(legalReasons.httpStatus, 451);
    assert.strictEqual(legalReasons.errorType, 'UNAVAILABLE_FOR_LEGAL_REASONS');

    const httpVersionNotSupported = customHttp.httpVersionNotSupported;
    assert.strictEqual(httpVersionNotSupported.httpStatus, 505);
    assert.strictEqual(
      httpVersionNotSupported.errorType,
      'HTTP_VERSION_NOT_SUPPORTED',
    );
  });

  it('should support enriched formats with metadata', async () => {
    const { createCustomHttpStatus } = await import('../dist/index.js');

    const enrichedFormat = createCustomHttpStatus((status, code, message) => ({
      statusCode: status,
      errorCode: code,
      description: message,
      severity: status >= 500 ? 'error' : status >= 400 ? 'warning' : 'info',
      category:
        status < 300
          ? 'success'
          : status < 400
            ? 'redirect'
            : status < 500
              ? 'client'
              : 'server',
    }));

    // Test success
    const success = enrichedFormat.created;
    assert.strictEqual(success.severity, 'info');
    assert.strictEqual(success.category, 'success');

    // Test redirect
    const redirect = enrichedFormat.moved;
    assert.strictEqual(redirect.severity, 'info');
    assert.strictEqual(redirect.category, 'redirect');

    // Test client error
    const clientError = enrichedFormat.forbidden;
    assert.strictEqual(clientError.severity, 'warning');
    assert.strictEqual(clientError.category, 'client');

    // Test server error
    const serverError = enrichedFormat.internalServerError;
    assert.strictEqual(serverError.severity, 'error');
    assert.strictEqual(serverError.category, 'server');
  });

  it('should work in practical Express.js scenario', async () => {
    const { createCustomHttpStatus } = await import('../dist/index.js');

    const expressFormat = createCustomHttpStatus((status, code, message) => ({
      status,
      error: {
        code: code,
        detail: message,
      },
    }));

    // Simulate Express error handler
    const mockRes = {
      statusCode: null,
      responseData: null,
      status: function (code) {
        this.statusCode = code;
        return this;
      },
      json: function (data) {
        this.responseData = data;
        return this;
      },
    };

    // Use the format in "Express handler"
    const errorResponse = expressFormat.internalServerError;
    mockRes.status(errorResponse.status).json(errorResponse.error);

    assert.strictEqual(mockRes.statusCode, 500);
    assert.strictEqual(mockRes.responseData.code, 'INTERNAL_SERVER_ERROR');
    assert.strictEqual(typeof mockRes.responseData.detail, 'string');
  });
});

// Custom Formatters
describe('Custom Formatters', () => {
  it('should create custom formatted objects', async () => {
    const { createCustomHttpStatus } = await import('../dist/index.js');

    // Create custom format like the user's example
    const customHttp = createCustomHttpStatus((status, code, message) => ({
      response: {
        error: code,
        message: message,
      },
      statusCode: status,
    }));

    // Test basic structure
    const internalError = customHttp.internalServerError;
    assert.strictEqual(typeof internalError, 'object');
    assert.strictEqual(typeof internalError.response, 'object');
    assert.strictEqual(internalError.response.error, 'INTERNAL_SERVER_ERROR');
    assert.strictEqual(internalError.statusCode, 500);
    assert.strictEqual(typeof internalError.response.message, 'string');
    assert.ok(internalError.response.message.length > 0);
  });

  it('should maintain alias equality in custom formatters', async () => {
    const { createCustomHttpStatus } = await import('../dist/index.js');

    const customHttp = createCustomHttpStatus((status, code, message) => ({
      status,
      code,
      message,
      custom: true,
    }));

    // All aliases should be the same object
    assert.strictEqual(customHttp.ok, customHttp.OK);
    assert.strictEqual(customHttp.OK, customHttp[200]);
    assert.strictEqual(customHttp.ok, customHttp[200]);

    // Check custom property exists
    assert.strictEqual(customHttp.ok.custom, true);
    assert.strictEqual(customHttp.ok.status, 200);
  });

  it('should work with different custom formats', async () => {
    const { createCustomHttpStatus } = await import('../dist/index.js');

    // Express-style format
    const expressFormat = createCustomHttpStatus((status, code, message) => ({
      status,
      error: {
        code: code,
        detail: message,
      },
    }));

    // Test format
    const notFound = expressFormat.notFound;
    assert.strictEqual(notFound.status, 404);
    assert.strictEqual(notFound.error.code, 'NOT_FOUND');
    assert.strictEqual(typeof notFound.error.detail, 'string');

    // Another format - minimal
    const minimalFormat = createCustomHttpStatus((status, code) => ({
      s: status,
      c: code,
    }));

    const teapot = minimalFormat.imATeapot;
    assert.strictEqual(teapot.s, 418);
    assert.strictEqual(teapot.c, 'IM_A_TEAPOT');
  });

  it('should have TypeScript-compatible return types', async () => {
    const { createCustomHttpStatus } = await import('../dist/index.js');

    // This would be type-checked at compile time
    const typedFormat = createCustomHttpStatus((status, code, message) => ({
      statusCode: status,
      errorCode: code,
      description: message,
      timestamp: new Date().toISOString(),
    }));

    const response = typedFormat.badRequest;
    assert.strictEqual(typeof response.statusCode, 'number');
    assert.strictEqual(typeof response.errorCode, 'string');
    assert.strictEqual(typeof response.description, 'string');
    assert.strictEqual(typeof response.timestamp, 'string');
  });
});
