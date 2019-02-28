// ==UserScript==
// @name         Trademe Ads/Sponsored Remover
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Remove Trademe Ads/Sponsorted Elements
// @author       author's name
// @match        https://www.trademe.co.nz/*
// @grant        none
// @require      http://code.jquery.com/jquery-latest.js
// ==/UserScript==

(function() {
    'use strict';

    //element's class name to be hidden
    hideElements(
        [
         ".HighlightMotor",
         ".motors-list-view__native-ad",
         ".ad-banner-leaderboard",
         ".skyscraper-container",
         "#google-ads.ads",
         "#ListingDetailsSecondMrec",
         ".sidebarAd",
         "#BuyersChecklist_BuyerChecklistDiv",
         ".listingCard.no-dotted-line"
        ]
    );

    function hideElements(listClass){
        listClass.forEach(lc => {
            let l = $(lc);
            [].map.call((l==null?[]:l), function(el) {
                el.style.display = "none";
            });
        });
    }

})();