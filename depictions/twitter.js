function showTwitter(failURL){
    var clickedAt = +new Date;
    // During tests on 3g/3gs this timeout fires immediately if less than 500ms.
    setTimeout(function(){
        // To avoid failing on return to MobileSafari, ensure freshness!
        if (+new Date - clickedAt < 2000){
            window.location = failURL;
        }
    }, 500);
}