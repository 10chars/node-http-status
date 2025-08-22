<p align="center">
  <img src="./assets/icon-full.svg" alt="node-http-status" height="164">
</p>

[![npm version](https://badge.fury.io/js/node-http-status.svg)](https://badge.fury.io/js/node-http-status)
[![npm downloads](https://img.shields.io/npm/dm/node-http-status.svg)](https://www.npmjs.com/package/node-http-status)
[![license](https://img.shields.io/npm/l/node-http-status.svg)](https://github.com/10chars/node-http-status/blob/main/LICENSE)

> A simple and intuitive HTTP response status code library for Node.js.

## Why choose node-http-status?

**Zero dependencies.** **Zero runtime overhead.** Just plain objects.

✅ **Simple**: No complex APIs to learn - just import and use  
✅ **Lightweight**: Under 3KB minified, zero dependencies  
✅ **Flexible**: Multiple access patterns (camelCase, UPPERCASE, numeric)  
✅ **Localized**: Built-in support for multiple languages (EN, JA, ES, DE)  
✅ **TypeScript-first**: Full type safety out of the box  
✅ **Framework-agnostic**: Works with Express, Fastify, Next.js, or any Node.js app

## Installation

```bash
npm install node-http-status
```

## Usage

```javascript
import httpStatus from 'node-http-status'

// Get status information - multiple ways to access the same response
console.log(httpStatus.ok)
console.log(httpStatus.OK)        // UPPERCASE alias
console.log(httpStatus[200])      // Numeric alias
// All output: { status: 200, code: 'OK', message: 'The request has succeeded' }

// All three are the same object
console.log(httpStatus.OK === httpStatus.ok === httpStatus[200])
// Output: true

console.log(httpStatus.forbidden)
console.log(httpStatus.FORBIDDEN)
console.log(httpStatus[403])
// All output: { status: 403, code: 'FORBIDDEN', message: 'The server understood the request but refuses to authorize it' }

// Access just the status code
console.log(httpStatus.ok.status)
// Output: 200

// Use in Express.js
app.get('/api/users', (req, res) => {
  const users = getUsersFromDatabase()
  res.status(httpStatus.ok.status).json({
    ...httpStatus.ok,
    data: users
  })
})

// Handle errors
app.get('/api/users/:id', (req, res) => {
  const user = findUser(req.params.id)
  if (!user) {
    return res.status(httpStatus.notFound.status).json(httpStatus.notFound)
  }
  res.json({ ...httpStatus.ok, data: user })
})
```

## Available Status Codes

### 2xx Success
- `ok` - 200 OK
- `created` - 201 Created
- `accepted` - 202 Accepted  
- `noContent` - 204 No Content

### 3xx Redirection
- `moved` - 301 Moved Permanently
- `found` - 302 Found
- `notModified` - 304 Not Modified

### 4xx Client Error
- `badRequest` - 400 Bad Request
- `unauthorized` - 401 Unauthorized
- `forbidden` - 403 Forbidden
- `notFound` - 404 Not Found
- `methodNotAllowed` - 405 Method Not Allowed
- `conflict` - 409 Conflict
- `gone` - 410 Gone
- `unprocessableEntity` - 422 Unprocessable Entity
- `tooManyRequests` - 429 Too Many Requests

### 5xx Server Error
- `internalServerError` - 500 Internal Server Error
- `notImplemented` - 501 Not Implemented
- `badGateway` - 502 Bad Gateway
- `serviceUnavailable` - 503 Service Unavailable
- `gatewayTimeout` - 504 Gateway Timeout

## Localization

The library supports multiple languages for status code messages. Import locale-specific versions to get translated messages while keeping the same API.

### Available Locales

- **English** (default): `node-http-status`
- **Japanese**: `node-http-status/locale/ja`  
- **Spanish**: `node-http-status/locale/es`
- **German**: `node-http-status/locale/de`

### Usage

```javascript
// Default English
import httpStatus from 'node-http-status'
console.log(httpStatus.FORBIDDEN.message)
// "The server understood the request but refuses to authorize it"

// Japanese
import httpStatus from 'node-http-status/locale/ja'
console.log(httpStatus.FORBIDDEN.message)
// "サーバーはリクエストを理解したが、承認を拒否した。"

// Spanish  
import httpStatus from 'node-http-status/locale/es'
console.log(httpStatus.FORBIDDEN.message)
// "El servidor entendió la solicitud pero se niega a autorizarla"

// German
import httpStatus from 'node-http-status/locale/de'
console.log(httpStatus.FORBIDDEN.message)
// "Der Server verstand die Anfrage, verweigert aber die Autorisierung"
```

### Locale API

Each locale provides the exact same API as the default English version:

```javascript
import httpStatus from 'node-http-status/locale/ja'

// All access patterns work the same
console.log(httpStatus.forbidden.message)  // camelCase
console.log(httpStatus.FORBIDDEN.message)  // UPPERCASE  
console.log(httpStatus[403].message)       // numeric

// Status codes and code names remain unchanged
console.log(httpStatus.FORBIDDEN.status)  // 403
console.log(httpStatus.FORBIDDEN.code)    // "FORBIDDEN"
```

### Express.js with Locales

```javascript
import express from 'express'
import httpStatus from 'node-http-status/locale/es'

const app = express()

app.get('/api/data', (req, res) => {
  // Send Spanish error messages to Spanish-speaking users
  res.status(httpStatus.notFound.status).json(httpStatus.notFound)
  // Response: { status: 404, code: 'NOT_FOUND', message: 'No se pudo encontrar el recurso solicitado' }
})
```

## API Reference

Each status code returns a consistent object structure:

```typescript
interface HttpStatus {
  status: number;    // The numeric HTTP status code
  code: string;      // The standard HTTP status phrase  
  message: string;   // A human-readable description
}
```

## TypeScript Support

Built with TypeScript and includes complete type definitions out of the box.

```typescript
import httpStatus from 'node-http-status'

const response: HttpStatus = httpStatus.ok
// response.status is typed as number
// response.code is typed as string  
// response.message is typed as string

// The httpStatus object is typed as HttpStatusObject which includes all aliases
const statusHandler = (httpCodes: HttpStatusObject) => {
  console.log(httpCodes.OK === httpCodes.ok === httpCodes[200])  // true
}
statusHandler(httpStatus)
```

## Examples

### Express.js API

```javascript
import express from 'express'
import httpStatus from 'node-http-status'

const app = express()

// Success response
app.get('/health', (req, res) => {
  res.status(httpStatus.ok.status).json({
    ...httpStatus.ok,
    timestamp: new Date().toISOString()
  })
})

// Error handling
app.use((err, req, res, next) => {
  console.error(err)
  res.status(httpStatus.internalServerError.status).json(httpStatus.internalServerError)
})
```

### Fetch API

```javascript
import httpStatus from 'node-http-status'

const response = await fetch('/api/data')

if (response.status === httpStatus.notFound.status) {
  console.log('Resource not found')
} else if (response.status === httpStatus.ok.status) {
  const data = await response.json()
  // Handle success
}
```

## License

MIT