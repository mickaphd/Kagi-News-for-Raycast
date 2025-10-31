/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Language - Article language */
  "language": "default" | "en" | "es" | "fr" | "de" | "it" | "pt" | "pt-BR" | "ja" | "ko" | "zh-Hans" | "zh-Hant" | "nl" | "pl" | "ru" | "sv" | "fi" | "nb" | "tr" | "th" | "uk" | "ca" | "hi" | "ar" | "he" | "lb",
  /** Display Sections - Display the main article image */
  "showPrimaryImage": boolean,
  /**  - Display key talking points from the article */
  "showTalkingPoints": boolean,
  /**  - Display the secondary article image */
  "showSecondaryImage": boolean,
  /**  - Display different perspectives on the story */
  "showPerspectives": boolean,
  /**  - Display historical context */
  "showHistoricalBackground": boolean,
  /**  - Display technical information */
  "showTechnicalDetails": boolean,
  /**  - Display industry-related impacts */
  "showIndustryImpact": boolean,
  /**  - Display timeline of events */
  "showTimeline": boolean,
  /**  - Display reactions from international entities */
  "showInternationalReactions": boolean,
  /**  - Display the 'Did You Know' section */
  "showDidYouKnow": boolean
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

