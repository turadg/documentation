(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{407:function(e,t,a){"use strict";a.r(t);var s=a(42),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"ertp-introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ertp-introduction"}},[e._v("#")]),e._v(" ERTP Introduction")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Alpha status")]),e._v(" "),a("p",[e._v("The Agoric platform is at the alpha stage.\nIt has not yet been formally tested or hardened.\nDo not use for production purposes.")])]),e._v(" "),a("p",[e._v("ERTP ("),a("em",[e._v("Electronic Rights Transfer Protocol")]),e._v(") is Agoric's token\nstandard for digital assets in\nJavaScript. Using ERTP, you can easily create a wide variety of digital assets,\nall of which are transferred exactly the same way and with exactly the\nsame security properties.")]),e._v(" "),a("p",[e._v("ERTP uses object capabilities to enforce access control. If your\nprogram has a reference to an object, it can call methods on that\nobject. If it doesn't have a reference, it can't.")]),e._v(" "),a("h2",{attrs:{id:"creating-assets-with-ertp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-assets-with-ertp"}},[e._v("#")]),e._v(" Creating assets with ERTP")]),e._v(" "),a("p",[e._v("In ERTP, "),a("em",[e._v("mints")]),e._v(" create "),a("em",[e._v("digital assets")]),e._v(". Access to an asset's\n"),a("code",[e._v("mint")]),e._v(" lets you create more digital assets of that kind. You can then\nstore new assets in a "),a("em",[e._v("payment")]),e._v(" or a "),a("em",[e._v("purse")]),e._v(".")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("Payments")]),e._v(": Assets you intend to move between "),a("code",[e._v("purses")]),e._v(" or to other destinations..")]),e._v(" "),a("li",[a("code",[e._v("Purses")]),e._v(": Store assets until you withdraw them into a payment for use")])]),e._v(" "),a("p",[e._v("To send assets in ERTP:")]),e._v(" "),a("ol",[a("li",[e._v("Withdraw them from a "),a("code",[e._v("purse")]),e._v(". This creates a "),a("code",[e._v("payment")]),e._v(".")]),e._v(" "),a("li",[e._v("Send this "),a("code",[e._v("payment")]),e._v(" to a recipient object as a message.")])]),e._v(" "),a("p",[e._v("To receive assets in ERTP:")]),e._v(" "),a("ol",[a("li",[e._v("Create a "),a("code",[e._v("purse")]),e._v(" for the asset kind you'll receive. "),a("strong",[e._v("Note:")]),e._v(" You\ndo not need access to the kind's "),a("code",[e._v("mint")]),e._v(" to do this.")]),e._v(" "),a("li",[e._v("Receive the message with the "),a("code",[e._v("payment")]),e._v(" and deposit the "),a("code",[e._v("payment")]),e._v(" in\nyour "),a("code",[e._v("purse")]),e._v(".")])]),e._v(" "),a("h2",{attrs:{id:"security-properties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#security-properties"}},[e._v("#")]),e._v(" Security properties")]),e._v(" "),a("p",[e._v("An ERTP "),a("code",[e._v("purse")]),e._v(" has a "),a("code",[e._v("deposit")]),e._v(" method which takes a "),a("code",[e._v("payment")]),e._v("\nas its argument. It first checks that the "),a("code",[e._v("payment")]),e._v(" is\ngenuine and the same asset kind as the "),a("code",[e._v("purse")]),e._v(" (any individual\n"),a("code",[e._v("purse")]),e._v(" or "),a("code",[e._v("payment")]),e._v(" can only hold one kind of asset, which is set on\ntheir creation. So a "),a("code",[e._v("purse")]),e._v(" might hold Quatloos, meaning it couldn't\nhold Moola or any other non-Quatloo asset). Note: Quatloos and Moola are both\nimaginary currencies.")]),e._v(" "),a("p",[e._v("If everything passes the checks, the assets move from the "),a("code",[e._v("payment")]),e._v(" to\nthe "),a("code",[e._v("purse")]),e._v(". If there's a problem, it throws an error.")]),e._v(" "),a("p",[e._v("After a successful deposit, ERTP guarantees:")]),e._v(" "),a("ul",[a("li",[e._v("The "),a("code",[e._v("payment")]),e._v(" is burned (i.e. destroyed).")]),e._v(" "),a("li",[e._v("The "),a("code",[e._v("purse")]),e._v(" contains the total of what it held before plus the "),a("code",[e._v("payment")]),e._v("'s full content.\n"),a("ul",[a("li",[e._v("i.e. If the "),a("code",[e._v("purse")]),e._v(" had 7 Quatloos and the "),a("code",[e._v("payment")]),e._v(" had 3 Quatloos, after depositing the "),a("code",[e._v("payment")]),e._v("\nthe "),a("code",[e._v("purse")]),e._v(" has 10 Quatloos.")])])])]),e._v(" "),a("p",[e._v("When the "),a("code",[e._v("deposit()")]),e._v(" call throws an error (i.e. something went wrong),\nERTP guarantees:")]),e._v(" "),a("ul",[a("li",[e._v("The alleged "),a("code",[e._v("payment")]),e._v(" is in the same state as before the call.")]),e._v(" "),a("li",[e._v("The "),a("code",[e._v("purse")]),e._v(" is in the same state as before the call.")])]),e._v(" "),a("p",[e._v("In other words, a failed attempt to deposit a 3 Quatloo "),a("code",[e._v("payment")]),e._v("\nin a 7 Quatloo "),a("code",[e._v("purse")]),e._v(" means the "),a("code",[e._v("payment")]),e._v(" continues to exist and hold\n3 Quatloos, and the "),a("code",[e._v("purse")]),e._v(" continues to hold 7 Quatloos.")]),e._v(" "),a("h2",{attrs:{id:"issuers-and-mints"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#issuers-and-mints"}},[e._v("#")]),e._v(" Issuers and mints")]),e._v(" "),a("p",[e._v("Other key ERTP components are:")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("Mints")]),e._v(": Make new digital assets as a new "),a("code",[e._v("Payment")]),e._v(". "),a("code",[e._v("Mints")]),e._v(" only\nmake one kind of asset (these can be currencies, objects for use in games, property rights, etc.\nIn these docs, we use an imaginary currency, Quatloos, for our examples).\nWe refer to\nthat kind as a "),a("code",[e._v("mint")]),e._v("'s "),a("em",[e._v("Brand")]),e._v(". So if a "),a("code",[e._v("mint")]),e._v(" issues Quatloos, it's a\nQuatloo "),a("code",[e._v("brand")]),e._v(" "),a("code",[e._v("mint")]),e._v(".  Only "),a("code",[e._v("mints")]),e._v(" can issue new digital assets. To mint\nnew assets of a particular kind, you must have a reference to that\nkind's "),a("code",[e._v("mint")]),e._v(".")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Issuers")]),e._v(": Create empty "),a("code",[e._v("purses")]),e._v(" and manipulate and operate on\n"),a("code",[e._v("payments")]),e._v(". "),a("code",[e._v("Issuers")]),e._v(" verify and move digital assets and are\nthe authority on which "),a("code",[e._v("payments")]),e._v(" and "),a("code",[e._v("purses")]),e._v(" hold what digital assets.")])])]),e._v(" "),a("p",[e._v("An "),a("code",[e._v("issuer")]),e._v("'s special admin facet is a "),a("code",[e._v("Mint")]),e._v(", and that "),a("code",[e._v("Mint")]),e._v(" and "),a("code",[e._v("Issuer")]),e._v("\nhave a one-to-one relationship. With a reference to an "),a("code",[e._v("Issuer")]),e._v(", you can\ncheck the validity of a "),a("code",[e._v("payment")]),e._v(" in that "),a("code",[e._v("issuer")]),e._v("'s assets;\ni.e. If you have a reference to the Quatloos "),a("code",[e._v("issuer")]),e._v(", you can validate\nany "),a("code",[e._v("payment")]),e._v(" made in Quatloos. You can also claim the "),a("code",[e._v("payment")]),e._v(" either\nas a new "),a("code",[e._v("payment")]),e._v(" to yourself or a "),a("code",[e._v("purse")]),e._v(" you control.")]),e._v(" "),a("p",[a("code",[e._v("Issuers")]),e._v(" should be gotten from a trusted source\nand then relied upon as the decider of whether an untrusted "),a("code",[e._v("payment")]),e._v(" is\nvalid")]),e._v(" "),a("p",[a("strong",[e._v("Note")]),e._v(": There is a one-to-one correspondence between a "),a("code",[e._v("brand")]),e._v(", a\n"),a("code",[e._v("mint")]),e._v(", and an "),a("code",[e._v("issuer")]),e._v(". In other words:")]),e._v(" "),a("ul",[a("li",[e._v("A "),a("code",[e._v("mint")]),e._v(" associated with a Quatloos "),a("code",[e._v("brand")]),e._v(" can only create new Quatloos\nand is the only "),a("code",[e._v("mint")]),e._v(" that can create new Quatloos.")]),e._v(" "),a("li",[e._v("An "),a("code",[e._v("issuer")]),e._v(" associated with a Quatloos "),a("code",[e._v("mint")]),e._v(" can only operate on Quatloos\nasset holders. It is the only "),a("code",[e._v("issuer")]),e._v(" that can operate on them.")])]),e._v(" "),a("h2",{attrs:{id:"amounts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#amounts"}},[e._v("#")]),e._v(" Amounts")]),e._v(" "),a("p",[a("em",[e._v("Amounts")]),e._v(" describe digital assets without having any value of their own.\nAnyone can make one, and they can be sent freely to anyone since they\nconvey no underlying value. They have two parts:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Brand")]),e._v(": An unforgeable object identity for the digital asset's kind,\nsuch as an object that represents Quatloos.")]),e._v(" "),a("li",[a("strong",[e._v("Value")]),e._v(": How much/many of the asset. Fungible "),a("code",[e._v("values")]),e._v(" are natural\nnumbers. Non-fungible "),a("code",[e._v("values")]),e._v(" are strings or objects representing\nattributes of the asset (say, a theater ticket's row and seat positions).")])]),e._v(" "),a("p",[e._v("Note: "),a("em",[e._v("fungible")]),e._v(" means any item in a set can be used. For example, for\nchange for a dollar, any four quarters work. "),a("em",[e._v("Non-fungible")]),e._v(" means\nspecific items in a set must be used. For  example, theater tickets\nare not all the same, and it matters if you get third row center or\nsecond balcony far left  (and affects what you're willing to trade for\nit).")]),e._v(" "),a("h2",{attrs:{id:"amountmath"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#amountmath"}},[e._v("#")]),e._v(" AmountMath")]),e._v(" "),a("p",[a("code",[e._v("Issuers")]),e._v(" must be able to deposit and withdraw assets from a "),a("code",[e._v("purse")]),e._v(". This\nrequires being able to add and subtract digital assets. They use a set\nof "),a("code",[e._v("amountMath")]),e._v(" functions.")]),e._v(" "),a("p",[e._v("In addition to math operations, "),a("code",[e._v("amountMath")]),e._v(" functions check on their\narguments' "),a("code",[e._v("brands")]),e._v(", throwing an error if the wrong "),a("code",[e._v("brand")]),e._v(" was used.")]),e._v(" "),a("p",[e._v("An "),a("code",[e._v("amountMath")]),e._v(" only works on assets of their associated "),a("code",[e._v("brand")]),e._v(" and "),a("code",[e._v("issuer")]),e._v(".\nThere can be many copies of the "),a("code",[e._v("amountMath")]),e._v(" for a particular "),a("code",[e._v("brand")]),e._v(" and\nits "),a("code",[e._v("issuer")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"next-steps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#next-steps"}},[e._v("#")]),e._v(" Next Steps")]),e._v(" "),a("p",[e._v("If you are Getting Started, you should go to the\n"),a("RouterLink",{attrs:{to:"/getting-started/intro-zoe.html"}},[e._v("Introduction to Zoe")]),e._v(".")],1),e._v(" "),a("p",[e._v("If you've finished the Getting Started material, you should go to the\n"),a("RouterLink",{attrs:{to:"/ertp/guide/"}},[e._v("ERTP Guide")]),e._v("\nfor a fuller explanation of ERTP\nconcepts, including ones not covered in this Introduction.")],1)])}),[],!1,null,null,null);t.default=o.exports}}]);