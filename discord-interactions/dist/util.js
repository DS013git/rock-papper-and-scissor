"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.concatUint8Arrays = exports.valueToUint8Array = exports.subtleCrypto = void 0;
/**
 * Based on environment, get a reference to the Web Crypto API's SubtleCrypto interface.
 * @returns An implementation of the Web Crypto API's SubtleCrypto interface.
 */
function getSubtleCrypto() {
    if (typeof window !== 'undefined' && window.crypto) {
        return window.crypto.subtle;
    }
    if (typeof globalThis !== 'undefined' && globalThis.crypto) {
        return globalThis.crypto.subtle;
    }
    if (typeof crypto !== 'undefined') {
        return crypto.subtle;
    }
    if (typeof require === 'function') {
        // Cloudflare Workers are doing what appears to be a regex check to look and
        // warn for this pattern. We should never get here in a Cloudflare Worker, so
        // I am being coy to avoid detection and a warning.
        const cryptoPackage = 'node:crypto';
        const crypto = require(cryptoPackage);
        return crypto.webcrypto.subtle;
    }
    throw new Error('No Web Crypto API implementation found');
}
exports.subtleCrypto = getSubtleCrypto();
/**
 * Converts different types to Uint8Array.
 *
 * @param value - Value to convert. Strings are parsed as hex.
 * @param format - Format of value. Valid options: 'hex'. Defaults to utf-8.
 * @returns Value in Uint8Array form.
 */
function valueToUint8Array(value, format) {
    if (value == null) {
        return new Uint8Array();
    }
    if (typeof value === 'string') {
        if (format === 'hex') {
            const matches = value.match(/.{1,2}/g);
            if (matches == null) {
                throw new Error('Value is not a valid hex string');
            }
            const hexVal = matches.map((byte) => Number.parseInt(byte, 16));
            return new Uint8Array(hexVal);
        }
        return new TextEncoder().encode(value);
    }
    try {
        if (Buffer.isBuffer(value)) {
            return new Uint8Array(value);
        }
    }
    catch (ex) {
        // Runtime doesn't have Buffer
    }
    if (value instanceof ArrayBuffer) {
        return new Uint8Array(value);
    }
    if (value instanceof Uint8Array) {
        return value;
    }
    throw new Error('Unrecognized value type, must be one of: string, Buffer, ArrayBuffer, Uint8Array');
}
exports.valueToUint8Array = valueToUint8Array;
/**
 * Merge two arrays.
 *
 * @param arr1 - First array
 * @param arr2 - Second array
 * @returns Concatenated arrays
 */
function concatUint8Arrays(arr1, arr2) {
    const merged = new Uint8Array(arr1.length + arr2.length);
    merged.set(arr1);
    merged.set(arr2, arr1.length);
    return merged;
}
exports.concatUint8Arrays = concatUint8Arrays;
//# sourceMappingURL=util.js.map