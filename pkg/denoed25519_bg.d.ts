/* tslint:disable */
/* eslint-disable */
export const memory: WebAssembly.Memory;
export function __wbg_ed25519keypair_free(a: number): void;
export function ed25519keypair_new(): number;
export function ed25519keypair_from_bytes(a: number, b: number): number;
export function ed25519keypair_to_bytes(a: number, b: number): void;
export function ed25519keypair_public(a: number): number;
export function ed25519keypair_sign(a: number, b: number, c: number): number;
export function __wbg_ed25519signature_free(a: number): void;
export function ed25519signature_from_bytes(a: number, b: number): number;
export function ed25519signature_to_bytes(a: number, b: number): void;
export function __wbg_ed25519publickey_free(a: number): void;
export function ed25519publickey_new(a: number, b: number): number;
export function ed25519publickey_from_bytes(a: number, b: number): number;
export function ed25519publickey_to_bytes(a: number, b: number): void;
export function ed25519publickey_verify(a: number, b: number, c: number, d: number): number;
export function ed25519signature_new(a: number, b: number): number;
export function __wbindgen_malloc(a: number): number;
export function __wbindgen_free(a: number, b: number): void;
export function __wbindgen_exn_store(a: number): void;
