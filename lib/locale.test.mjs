import assert from "node:assert/strict";
import test from "node:test";
import { localeFromAcceptLanguage, localeFromLanguages } from "./locale.ts";

test("uses the first supported browser language", () => {
  assert.equal(localeFromLanguages(["ca-ES", "es-ES", "en-US"]), "ca");
  assert.equal(localeFromLanguages(["es-ES", "ca-ES"]), "es");
  assert.equal(localeFromLanguages(["fr-FR", "en-US"]), "en");
});

test("honors Accept-Language quality and falls back to Spanish without a header", () => {
  assert.equal(localeFromAcceptLanguage("es-ES,ca-ES;q=0.9"), "es");
  assert.equal(localeFromAcceptLanguage("es-ES;q=0.8,ca-ES;q=0.9,en;q=0.7"), "ca");
  assert.equal(localeFromAcceptLanguage("es-ES; q=0.8, ca-ES; q=0.9"), "ca");
  assert.equal(localeFromAcceptLanguage(null), "es");
});
