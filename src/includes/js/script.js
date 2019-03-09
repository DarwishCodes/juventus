
var popupSelect = '#pop-up';
var popupContainerSelect = '#pop-up-container';
var cardSelect = '#card';
var popupCloseSelect = "#pop-up-close";
var imgaeSelect = "#pop-up-image";
var headingName = "#heading-name";
var headerSelect = "#header";
var bodySelect = "#body";
var infoboxBorn = "#infobox-born";
var infoboxHeight = "#infobox-height";
var infoboxPosition = "#infobox-position";
var infoboxNumber = "#infobox-number";
var infoboxJoined = "#infobox-joined";
var infoboxGoals = "#infobox-goals";
var infoboxAge = "#infobox-age";
var infobox = "#infobox";
var menuIcon ="#menu-icon";
var shadedWindow = "#shaded-window"


var classDOM = {
    classFadeIn: 'fade-in',
    classFadeInFast: 'fade-in-fast',
    classFadeOut: 'fade-out',
    classFadeOutFast: 'fade-out-fast',
    classHidePopUp: 'hide-pop-up',
    classShowPopUp: 'show-pop-up',
    classAnimateImage: 'move-to-left',
    classFillToRight: 'fill-to-right',
    classFadeToTop: 'fade-to-top',
    classFullShadow: 'full-shadow',
    classDisableScroll: 'disable-scroll',
    classShowShadedWindow: 'show-shaded-window',
    classHideShadedWindow: 'hide-shaded-window'
}


var PlayerCard = function(playerName, playerDate, palayerAge, playerHeight, playerPosition, playerNumber, playerJoined, playerGoals, playerImage, playerId) {

    this.playerName = playerName;
    this.playerDate = playerDate;
    this.palayerAge = palayerAge;
    this.playerHeight = playerHeight;
    this.playerPosition = playerPosition;
    this.playerNumber = playerNumber;
    this.playerJoined = playerJoined;
    this.playerGoals = playerGoals;
    this.playerImage = playerImage;
    this.playerId = playerId;

    this.changeContent = function() {

        $(imgaeSelect).attr("src", this.playerImage);
        $(headingName).text(this.playerName);
        $(infoboxBorn).text(this.playerDate);
        $(infoboxAge).text(this.playerAge);
        $(infoboxHeight).text(this.playerHeight);
        $(infoboxPosition).text(this.playerPosition);
        $(infoboxNumber).text(this.playerNumber);
        $(infoboxJoined).text(this.playerJoined);
        $(infoboxGoals).text(this.playerGoals);
        showWindow();

    };

};


var players = {

    dybala: new PlayerCard("Paulo Dybala", "November 15, 1993", "(age 25)", "1.77 m", "Forward", "10", "2015", "16", "img/players-position-2/forwardes/Dybala_360x700.png", "#dybala"),
    cristiano: new PlayerCard("Cristiano Ronaldo", "February 5, 1985", "(age 34)", "1.87 m", "Forward", "7", "2018", "56", "img/players-position-2/forwardes/RONALDO_360x700.png", "#cristiano"),
    costa: new PlayerCard("Douglas Costa", "September 14, 1990", "(age 28)", "1.72 m", "Forward", "11", "2018", "1", "img/players-position-2/forwardes/Costa_360x700.png", "#costa")


};

var showHideInfoBox = function(value) {

    for(var i = 1; i <= 8; i++) {

        $(infobox + "-" + i).css("opacity", value);

    }
}

var addClassInfoBox = function() {

    for(var i = 1; i <= 8; i++) {

        $(infobox + "-" + i).toggleClass(classDOM.classFadeToTop + "-" + i);

    }
}

var removeClassInfoBox = function() {

    for(var i = 1; i <= 8; i++) {

        $(infobox + "-" + i).removeClass(classDOM.classFadeToTop + "-" + i);

    }


}

var showWindow = function() {

    $(popupSelect).toggleClass(classDOM.classShowPopUp);
    $(popupSelect).toggleClass(classDOM.classFadeIn);

    $(bodySelect).toggleClass(classDOM.classDisableScroll);

    addClassInfoBox();

    setTimeout( function () {

        showHideInfoBox("1");
        removeClassInfoBox();

    }, 2000);


    $(popupSelect).css("opacity", "1");
    $(imgaeSelect).toggleClass(classDOM.classFullShadow);

    $(headingName).toggleClass(classDOM.classFillToRight);

}


var closeWindow = function() {

    $(popupSelect).removeClass(classDOM.classFadeIn);
    $(popupSelect).toggleClass(classDOM.classFadeOut);

    $(bodySelect).removeClass(classDOM.classDisableScroll);
    
    setTimeout( function () {
        $(popupSelect).toggleClass(classDOM.classHidePopUp);
        $(popupSelect).removeClass(classDOM.classFadeIn);
        $(popupSelect).removeClass(classDOM.classFadeOut);
        $(popupSelect).removeClass(classDOM.classHidePopUp);
        $(popupSelect).removeClass(classDOM.classShowPopUp);
        $(imgaeSelect).removeClass(classDOM.classAnimateImage);
        $(headingName).removeClass(classDOM.classFillToRight);
        $(imgaeSelect).removeClass(classDOM.classFullShadow);


        showHideInfoBox("0");
        removeClassInfoBox();
    }, 400);

}




$("document").ready(function () {

    $(cardSelect).click(showWindow);
    $(popupCloseSelect).click(closeWindow);

    $(menuIcon).click( function() {

        $(shadedWindow).toggleClass(classDOM.classShowShadedWindow);
        $(shadedWindow).toggleClass(classDOM.classFadeInFast);

    });

    $(shadedWindow).click( function() {

        $(shadedWindow).toggleClass(classDOM.classFadeOutFast);

        setTimeout(() => {

            $(shadedWindow).removeClass(classDOM.classShowShadedWindow);
            $(shadedWindow).removeClass(classDOM.classFadeInFast);
            $(shadedWindow).removeClass(classDOM.classFadeOutFast);
            $(shadedWindow).removeClass(classDOM.classShowShadedWindow);
            
        }, 200);

    });


    $(players.dybala.playerId).click( function() {

        players.dybala.changeContent();
        
    });

    $(players.cristiano.playerId).click( function() {

        players.cristiano.changeContent();
    });

    $(players.costa.playerId).click( function() {

        players.costa.changeContent();
    });
    
    
});