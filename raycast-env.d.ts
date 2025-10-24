/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Language - Article language */
  "language": "default" | "en" | "es" | "fr" | "de" | "it" | "pt" | "pt-BR" | "ja" | "ko" | "zh-Hans" | "zh-Hant" | "nl" | "pl" | "ru" | "sv" | "fi" | "nb" | "tr" | "th" | "uk" | "ca" | "hi" | "ar" | "he" | "lb"
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `kagi-news` command */
  export type KagiNews = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `kagi-news` command */
  export type KagiNews = {}
}

