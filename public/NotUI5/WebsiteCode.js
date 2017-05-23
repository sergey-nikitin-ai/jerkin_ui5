    "use strict";

    var sText = "Number of lemmings saved: ";
    var iNumSavedLemmings = 0;

    var aLemmingNames = ["Alice", "Bob", "Charlie", "David", "Elektra", "Felicia",
        "Georgia", "Holly", "Idris", "Julien", "Kevin", "Lucia", "Michael", "Nancy",
        "Oscar", "Peter", "Qubert", "Rascal", "Susan", "Terry", "Ursula", "Vicky",
        "Walter", "Xavier", "Yolanda", "Zelda"
    ];

    function onSaveLemingPress() {
        
        document.getElementById("lemming-website-saved").innerHTML = sText + iNumSavedLemmings++
        
        // documents.getElementById("lemming-website-saved")
        //         var oNewLabel = new sap.m.Label({
        //     id: "lemming-name-" + iNumSavedLemmings,
        //     text: aLemmingNames[(iNumSavedLemmings - 1) % aLemmingNames.length]
        // });
    }