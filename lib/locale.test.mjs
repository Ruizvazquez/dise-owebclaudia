import assert from "node:assert/strict";
import test from "node:test";
import { localeFromAcceptLanguage, localeFromLanguages } from "./locale.ts";

test("prefers Catalan whenever the browser announces it", () => {
  assert.equal(localeFromLanguages(["ca-ES", "es-ES", "en-US"]), "ca");
  assert.equal(localeFromLanguages(["es-ES", "ca-ES"]), "ca");
  assert.equal(localeFromLanguages(["fr-FR", "en-US"]), "en");
});

test("recognizes Catalan in Accept-Language and falls back to Spanish without a header", () => {
  assert.equal(localeFromAcceptLanguage("es-ES,ca-ES;q=0.9"), "ca");
  assert.equal(localeFromAcceptLanguage("es-ES;q=0.8,ca-ES;q=0.9,en;q=0.7"), "ca");
  assert.equal(localeFromAcceptLanguage("es-ES; q=0.8, ca-ES; q=0.9"), "ca");
  assert.equal(localeFromAcceptLanguage("es-ES,ca-ES;q=0,en;q=0.8"), "es");
  assert.equal(localeFromAcceptLanguage(null), "es");
});
