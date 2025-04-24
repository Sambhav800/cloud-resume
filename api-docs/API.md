# Cloud Resume Visitor Counter API

This document describes the API endpoints used for the visitor counter functionality in the Cloud Resume project.

## Base URL
All API endpoints are prefixed with:
## Endpoints

### Get Visitor Count
Retrieves the current visitor count.

- **URL**: `/getVisitorCount`
- **Method**: GET
- **Response Format**: JSON

**Success Response**:
- **Code**: 200 OK
- **Content**: `{ "count": 42 }`

**Error Response**:
- **Code**: 500 Internal Server Error
- **Content**: `{ "error": "Failed to retrieve visitor count" }`

### Increment Visitor Count
Increments the visitor count by one and returns the new count.

- **URL**: `/incrementVisitorCount`
- **Method**: POST
- **Response Format**: JSON

**Success Response**:
- **Code**: 200 OK
- **Content**: `{ "count": 43 }`

**Error Response**:
- **Code**: 405 Method Not Allowed
- **Content**: `{ "error": "Method not allowed" }`
- **Code**: 500 Internal Server Error
- **Content**: `{ "error": "Failed to increment visitor count" }`
