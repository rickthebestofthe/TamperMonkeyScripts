// ==UserScript==
// @name                Wikipedia to Wikiwand
// @description         Redirect Wikipedia to Wikiwand for a modern browsing experience.
// @description:zh-CN   重定向 Wikipedia 页面到 Wikiwand 以获得现代的浏览体验
// @description:zh-TW   重定向 Wikipedia 頁面到 Wikiwand 以獲得現代的瀏覽體驗
// @author              Jade Worths
// @version             1.0.3
// @namespace           https://github.com/showchi/TamperMonkeyScripts
// @icon                https://www.wikiwand.com/favicon.ico
// @include             http*://*.wikipedia.org/*/*
// @run-at              document-start
// ==/UserScript==

var language=window.location.host.split('.')[0]
window.location.replace(window.location.href.replace(/[^\s]*\.wikipedia\.org\/[\w-]+/, 'https://www.wikiwand.com/'+ language));
