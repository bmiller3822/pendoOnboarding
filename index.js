


// on No button click updates data mapping with "No" and dismisses guide
$(noBtn).on('click', function() {
    updateActionDataMapping('no');
    pendo.onGuideDismissed();
});

// on Yes button click updates data mapping with "interested" and advances to next step
$(yesBtn).on('click', function() {
    updatePendoDataMapping('interested');  //KRISTEN - eliminated the second function here and tweaked updatePendoDataMapping to update both fields with the value.
    // Proceeds to next step
    pendo.onGuideAdvanced();
});

// on X button click updates data mapping with "Dismissed" indicating user did not click either action button
$(xBtn).on('click', function(e){
    updateActionDataMapping('dismissed');
    pendo.onGuideDismissed();
});


    // Updates data mapping with corresponding button value on click
    function updatePendoDataMapping(value) {
        pendo.updateOptions({ 
            visitor:{
                id: pendo.visitorId
            }, 
            account:{
                id: pendo.accountId, 
                /* ------------------------------------------------------------- Change the below key to match your data mapping  --------------------------------------------------------*/
                spProtectAnswer: value,
                spProtectAction: value, //KRISTEN - I just put them both into one function down here.
                pendoSource: 'PendoMay2021'
            }
        });
    }
    function updateActionDataMapping(value) {
        pendo.updateOptions({ 
            visitor:{
                id: pendo.visitorId
            }, 
            account:{
                id: pendo.accountId, 
                /* ------------------------------------------------------------- Change the below key to match your data mapping  --------------------------------------------------------*/
                spProtectAction: value,
                pendoSource: 'PendoMay2021'
            }
        });
    }