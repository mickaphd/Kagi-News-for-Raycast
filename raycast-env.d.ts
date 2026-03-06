/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Language - Article language */
  "language": "default" | "en" | "es" | "fr" | "de" | "it" | "pt" | "pt-BR" | "ja" | "ko" | "zh" | "zh-Hans" | "zh-Hant" | "nl" | "pl" | "ru" | "sv" | "fi" | "nb" | "tr" | "th" | "uk" | "ca" | "hi" | "ar" | "he" | "lb",
  /** Display Sections - Display business angle points and analysis */
  "showBusinessAnglePoints": boolean,
  /**  - Display business angle narrative */
  "showBusinessAngleText": boolean,
  /**  - Display culinary-related information */
  "showCulinarySignificance": boolean,
  /**  - Display design principles and concepts */
  "showDesignPrinciples": boolean,
  /**  - Display destination highlights and attractions */
  "showDestinationHighlights": boolean,
  /**  - Display the 'Did You Know' section */
  "showDidYouKnow": boolean,
  /**  - Display DIY tips and instructions */
  "showDiyTips": boolean,
  /**  - Display economic implications and impacts */
  "showEconomicImplications": boolean,
  /**  - Display future outlook and predictions */
  "showFutureOutlook": boolean,
  /**  - Display gameplay mechanics and rules */
  "showGameplayMechanics": boolean,
  /**  - Display geopolitical context and analysis */
  "showGeopoliticalContext": boolean,
  /**  - Display key talking points from the article */
  "showTalkingPoints": boolean,
  /**  - Display historical context */
  "showHistoricalBackground": boolean,
  /**  - Display humanitarian impact and concerns */
  "showHumanitarianImpact": boolean,
  /**  - Display industry-related impacts */
  "showIndustryImpact": boolean,
  /**  - Display reactions from international entities */
  "showInternationalReactions": boolean,
  /**  - Display key players and stakeholders */
  "showKeyPlayers": boolean,
  /**  - Display league standings and rankings */
  "showLeagueStandings": boolean,
  /**  - Display location information */
  "showLocation": boolean,
  /**  - Display performance statistics and metrics */
  "showPerformanceStatistics": boolean,
  /**  - Display different perspectives on the story */
  "showPerspectives": boolean,
  /**  - Display the main article image */
  "showPrimaryImage": boolean,
  /**  - Display featured quote with attribution */
  "showQuote": boolean,
  /**  - Display scientific significance and findings */
  "showScientificSignificance": boolean,
  /**  - Display the secondary article image */
  "showSecondaryImage": boolean,
  /**  - Display suggested questions and answers */
  "showSuggestedQna": boolean,
  /**  - Display technical information */
  "showTechnicalDetails": boolean,
  /**  - Display technical specifications */
  "showTechnicalSpecifications": boolean,
  /**  - Display timeline of events */
  "showTimeline": boolean,
  /**  - Display travel advisories and warnings */
  "showTravelAdvisory": boolean,
  /**  - Display recommended user action items */
  "showUserActionItems": boolean,
  /**  - Display user experience impact analysis */
  "showUserExperienceImpact": boolean
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `kagi-news` command */
  export type KagiNews = ExtensionPreferences & {}
  /** Preferences accessible in the `time-travel` command */
  export type TimeTravel = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `kagi-news` command */
  export type KagiNews = {}
  /** Arguments passed to the `time-travel` command */
  export type TimeTravel = {}
}

