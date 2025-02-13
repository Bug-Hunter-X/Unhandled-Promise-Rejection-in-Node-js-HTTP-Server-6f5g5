# Unhandled Promise Rejection in Node.js HTTP Server

This repository demonstrates a common error in Node.js where an unhandled promise rejection within an HTTP server request handler leads to a silent failure. The server doesn't send an error response to the client, making debugging difficult. 

The `bug.js` file contains the problematic code.  The `bugSolution.js` file provides a solution.

## Problem

The server simulates an asynchronous operation that may fail.  If it fails, the error is caught, but no error response is sent back to the client.  The client receives no indication of failure.

## Solution

The solution demonstrates proper error handling by sending an appropriate error response (e.g., 500 Internal Server Error) to the client when an asynchronous operation fails.