import { createGlobalStyle } from "styled-components";

import { typography } from "./constants";

import nunitoRegular from "./fonts/nunito-sans/normal/nunito-sans--normal.ttf";
import nunitoRegularWoff from "./fonts/nunito-sans/normal/nunito-sans--normal.woff";

import nunitoSemiBold from "./fonts/nunito-sans/semibold/nunito-sans--semibold.ttf";
import nunitoSemiBoldWoff from "./fonts/nunito-sans/semibold/nunito-sans--semibold.woff";

import nunitoBold from "./fonts/nunito-sans/bold/nunito-sans--bold.ttf";
import nunitoBoldWoff from "./fonts/nunito-sans/bold/nunito-sans--bold.woff";

const GlobalStyle = createGlobalStyle`
	@font-face {
		font-display: swap;
		font-family: ${typography.defaultFontFamily};
		font-style:  normal;
		font-weight: ${typography.fontWeightRegular};
		src: url(${nunitoRegularWoff}) format("woff"), 
			url(${nunitoRegular}) format("truetype");
	}

	@font-face {
		font-display: swap;
		font-family: ${typography.defaultFontFamily};
		font-style:  normal;
		font-weight: ${typography.fontWeightSemibold};
		src: url(${nunitoSemiBoldWoff}) format("woff"),
			url(${nunitoSemiBold}) format("truetype");
	}

	@font-face {
		font-display: swap;
		font-family: ${typography.defaultFontFamily};
		font-style:  normal;
		font-weight: ${typography.fontWeightBold};
		src: url(${nunitoBoldWoff}) format("woff"),
			url(${nunitoBold}) format("truetype");
	}

	/* Necessary to make the svg sprite work in IE */
	/* stylelint-disable-next-line */
	_:-ms-fullscreen, :root .sprite-symbol-usage {
		display: block !important;
	}

	.js-focus-visible :focus:not(.focus-visible) {
		outline: none;
	}

	/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

	/* Document
	========================================================================== */

	/**
	* 1. Correct the line height in all browsers.
	* 2. Prevent adjustments of font size after orientation changes in iOS.
	*/

	html {
		font-size: 100%;
		height: 100%;
		line-height: 1.15; /* 1 */
		/* stylelint-disable-next-line property-no-vendor-prefix, order/properties-alphabetical-order */
		-webkit-text-size-adjust: 100%; /* 2 */
	}

	#root {
		height: 100%;
	}

	/* Sections
	========================================================================== */

	/**
	* Remove the margin in all browsers.
	*/

	body {
		font-family: ${typography.defaultFontFamily};
		height: 100%;
		margin: 0;
	}

	/**
	* Correct the font size and margin on h1 elements within section and
	* article contexts in Chrome, Firefox, and Safari.
	*/

	h1 {
		font-size: 2em;
		margin: 0.67em 0;
	}

	/* Grouping content
	========================================================================== */

	/**
	* 1. Add the correct box sizing in Firefox.
	* 2. Show the overflow in Edge and IE.
	*/

	hr {
		box-sizing: content-box; /* 1 */
		height: 0; /* 1 */
		overflow: visible; /* 2 */
	}

	/**
	* 1. Correct the inheritance and scaling of font size in all browsers.
	* 2. Correct the odd em font sizing in all browsers.
	*/

	pre {
		/* more info on the double monospace, monospace https://github.com/necolas/normalize.css/issues/519 */
		/* stylelint-disable-next-line font-family-no-duplicate-names */
		font-family: monospace, monospace; /* 1 */
		font-size: 1em; /* 2 */
	}

	/* Text-level semantics
	========================================================================== */

	/**
	* Remove the gray background on active links in IE 10.
	*/

	a {
		background-color: transparent;
	}

	/**
	* 1. Remove the bottom border in Chrome 57-
	* 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
	*/

	abbr[title] {
		border-bottom: none; /* 1 */
		text-decoration: underline; /* 2 */
		text-decoration: underline dotted; /* 2 */
	}

	/**
	* Add the correct font weight in Chrome, Edge, and Safari.
	*/

	b,
	strong {
		font-weight: bolder;
	}

	/**
	* 1. Correct the inheritance and scaling of font size in all browsers.
	* 2. Correct the odd em font sizing in all browsers.
	*/

	code,
	kbd,
	samp {
		/* more info on the double monospace, monospace https://github.com/necolas/normalize.css/issues/519 */
		/* stylelint-disable-next-line font-family-no-duplicate-names */
		font-family: monospace, monospace; /* 1 */
		font-size: 1em; /* 2 */
	}

	/**
	* Add the correct font size in all browsers.
	*/

	small {
		font-size: 80%;
	}

	/**
	* Prevent sub and sup elements from affecting the line height in
	* all browsers.
	*/

	sub,
	sup {
		font-size: 75%;
		line-height: 0;
		position: relative;
		vertical-align: baseline;
	}

	sub {
		bottom: -0.25em;
	}

	sup {
		top: -0.5em;
	}

	/* Embedded content
	========================================================================== */

	/**
	* Remove the border on images inside links in IE 10.
	*/

	img {
		border-style: none;
	}

	/* Forms
	========================================================================== */

	/**
	* 1. Change the font styles in all browsers.
	* 2. Remove the margin in Firefox and Safari.
	*/

	button,
	input,
	optgroup,
	select,
	textarea {
		font-family: inherit; /* 1 */
		font-size: 100%; /* 1 */
		line-height: 1.15; /* 1 */
		margin: 0; /* 2 */
	}

	/**
	* Show the overflow in IE.
	* 1. Show the overflow in Edge.
	*/

	button,
	input { /* 1 */
		overflow: visible;
	}

	/**
	* Remove the inheritance of text transform in Edge, Firefox, and IE.
	* 1. Remove the inheritance of text transform in Firefox.
	*/

	button,
	select { /* 1 */
		text-transform: none;
	}

	/**
	* Correct the inability to style clickable types in iOS and Safari.
	*/

	button,
	[type="button"],
	[type="reset"],
	[type="submit"] {
		/* stylelint-disable-next-line property-no-vendor-prefix */
		-webkit-appearance: button;
	}

	/**
	* Remove the inner border and padding in Firefox.
	*/

	button::-moz-focus-inner,
	[type="button"]::-moz-focus-inner,
	[type="reset"]::-moz-focus-inner,
	[type="submit"]::-moz-focus-inner {
		border-style: none;
		padding: 0;
	}

	/**
	* Restore the focus styles unset by the previous rule.
	*/

	button:-moz-focusring,
	[type="button"]:-moz-focusring,
	[type="reset"]:-moz-focusring,
	[type="submit"]:-moz-focusring {
		outline: 1px dotted ButtonText;
	}

	/**
	* Correct the padding in Firefox.
	*/

	fieldset {
		padding: 0.35em 0.75em 0.625em;
	}

	/**
	* 1. Correct the text wrapping in Edge and IE.
	* 2. Correct the color inheritance from fieldset elements in IE.
	* 3. Remove the padding so developers are not caught out when they zero out
	*    fieldset elements in all browsers.
	*/

	legend {
		box-sizing: border-box; /* 1 */
		color: inherit; /* 2 */
		display: table; /* 1 */
		max-width: 100%; /* 1 */
		padding: 0; /* 3 */
		white-space: normal; /* 1 */
	}

	/**
	* Add the correct vertical alignment in Chrome, Firefox, and Opera.
	*/

	progress {
		vertical-align: baseline;
	}

	/**
	* Remove the default vertical scrollbar in IE 10+.
	*/

	textarea {
		overflow: auto;
	}

	/**
	* 1. Add the correct box sizing in IE 10.
	* 2. Remove the padding in IE 10.
	*/

	[type="checkbox"],
	[type="radio"] {
		box-sizing: border-box; /* 1 */
		padding: 0; /* 2 */
	}

	/**
	* Correct the cursor style of increment and decrement buttons in Chrome.
	*/

	[type="number"]::-webkit-inner-spin-button,
	[type="number"]::-webkit-outer-spin-button {
		height: auto;
	}

	/**
	* 1. Correct the odd appearance in Chrome and Safari.
	* 2. Correct the outline style in Safari.
	*/

	[type="search"] {
		outline-offset: -2px; /* 2 */
		/* stylelint-disable-next-line property-no-vendor-prefix, order/properties-alphabetical-order */
		-webkit-appearance: textfield; /* 1 */
	}

	/**
	* Remove the inner padding in Chrome and Safari on macOS.
	*/

	[type="search"]::-webkit-search-decoration {
		/* stylelint-disable-next-line property-no-vendor-prefix */
		-webkit-appearance: none;
	}

	/**
	* 1. Correct the inability to style clickable types in iOS and Safari.
	* 2. Change font properties to inherit in Safari.
	*/

	/* TODO: Check if the order could be a problem */
	/* stylelint-disable-next-line no-descending-specificity */
	::-webkit-file-upload-button {
		font: inherit; /* 2 */
		/* stylelint-disable-next-line property-no-vendor-prefix, order/properties-alphabetical-order */
		-webkit-appearance: button; /* 1 */
	}

	/* Interactive
	========================================================================== */

	/**
	* Add the correct display in Edge, IE 10+, and Firefox.
	*/

	details {
		display: block;
	}

	/**
	* Add the correct display in all browsers.
	*/

	summary {
		display: list-item;
	}

	/* Misc
	========================================================================== */

	/**
	* Add the correct display in IE 10+.
	*/

	template {
		display: none;
	}

	/**
	* Add the correct display in IE 10.
	*/

	[hidden] {
		display: none;
	}

	/****** Elad Shechter's RESET *******/
	/*** box sizing border-box for all elements ***/
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	/* TODO: Check why we are declaring "a" twice in this file */
	/* stylelint-disable-next-line no-duplicate-selectors */
	a {
		color: inherit;
		cursor: pointer;
		text-decoration: none; 
	}

	/* TODO: Check if this could be a problem */
	/* stylelint-disable-next-line no-descending-specificity */
	button {
		background-color:transparent;
		border-width:0;
		color:inherit;
		cursor:pointer;
		padding:0;
	}

	figure {
		margin:0;
	}

	input::-moz-focus-inner {
		border: 0;
		margin: 0;
		padding: 0;
	}

	ul,
	ol,
	dd {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-size:inherit;
		font-weight:inherit;
		margin:0;
	}

	p {
		margin:0;
	}

	cite {
		font-style:normal;
	}

	/* TODO: Check why we are declaring "fieldset" twice in this file */
	/* stylelint-disable-next-line no-duplicate-selectors */
	fieldset {
		border-width:0;
		margin:0;
		padding:0;
	}
`;

export default GlobalStyle;
