
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
var shadedWindow = "#shaded-window";
var drawer = "#drawer";
var headerLogo = "#header-logo";
var drawerLogo = "#drawer-logo";


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
    classHideShadedWindow: 'hide-shaded-window',
    classMoveDrawer: 'move-drawer',
    classCloseDrawer: 'close-drawer',
    classMoveHeaderLogoUp: 'move-logo-header-top',
    classMoveHeaderLogoDown: 'move-logo-header-bottom',
    classMoveDrawerLogoUp: 'move-logo-drawer-top',
    classMoveDrawerLogoDown: 'move-logo-drawer-bottom'
}


var PlayerCard = function(playerName, playerDate, palayerAge, playerHeight, playerPosition, playerNumber, playerJoined, playerGoals, playerImage, playerId, playerIdNo, playerKeywords) {

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
    this.playerIdNo = playerIdNo;


    this.playerKeywords = playerKeywords;

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

    dybala: new PlayerCard("Paulo Dybala", "November 15, 1993", "(age 25)", "1.77 m", "Forward", "10", "2015", "16", "img/players-position-2/forwardes/Dybala_360x700.png", "#dybala", 0, ["dybala", "paulo"]),
    cristiano: new PlayerCard("Cristiano Ronaldo", "February 5, 1985", "(age 34)", "1.87 m", "Forward", "7", "2018", "56", "img/players-position-2/forwardes/RONALDO_360x700.png", "#cristiano", 1, ["cristiano", "ronaldo"]),
    costa: new PlayerCard("Douglas Costa", "September 14, 1990", "(age 28)", "1.72 m", "Forward", "11", "2018", "1", "img/players-position-2/forwardes/Costa_360x700.png", "#costa", 2, ["costa", "douglas"])


};



// SEARCH ENGINE KEYWORDS >> VERY IMPORTANT



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
        $(drawer).toggleClass(classDOM.classMoveDrawer);
        $(headerLogo).toggleClass(classDOM.classMoveHeaderLogoUp);
        $(drawerLogo).toggleClass(classDOM.classMoveDrawerLogoDown);
        $(bodySelect).toggleClass(classDOM.classDisableScroll);

    });

    $(shadedWindow).click( function() {

        $(shadedWindow).toggleClass(classDOM.classFadeOutFast);
        $(drawer).toggleClass(classDOM.classCloseDrawer);
        $(headerLogo).toggleClass(classDOM.classMoveHeaderLogoDown);
        $(drawerLogo).toggleClass(classDOM.classMoveDrawerLogoTop);
        

        setTimeout(() => {

            $(drawer).removeClass(classDOM.classMoveDrawer);
            $(drawer).removeClass(classDOM.classCloseDrawer);
            $(shadedWindow).removeClass(classDOM.classShowShadedWindow);
            $(shadedWindow).removeClass(classDOM.classFadeInFast);
            $(shadedWindow).removeClass(classDOM.classFadeOutFast);
            $(shadedWindow).removeClass(classDOM.classShowShadedWindow);
            $(bodySelect).removeClass(classDOM.classDisableScroll);
            
        }, 200);

        setTimeout(() => {

            $(headerLogo).removeClass(classDOM.classMoveHeaderLogoUp);
            $(headerLogo).removeClass(classDOM.classMoveHeaderLogoDown);
            
        }, 500);

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


    if (window.location.href === "http://127.0.0.1:8080/" || window.location.href === "http://127.0.0.1:8080" || window.location.href === "http://127.0.0.1:8080/#" ) {

        $("#home-link").toggleClass("navigation__link--marked")
    
    }

    var scrolled;
    var currentScroll;
    var prevScroll;
    scrolled = false;

    prevScroll = window.pageYOffset;

    
    $(window).scroll(function() {

        currentScroll = window.pageYOffset;


        if (currentScroll > prevScroll && scrolled === false) {

            scrolled = true;
            $("#header").toggleClass(classDOM.classMoveHeaderLogoUp);
            $("#header").removeClass(classDOM.classMoveHeaderLogoDown);
        } 

        if (currentScroll < prevScroll && scrolled === true) {

            scrolled = false;
            $("#header").toggleClass(classDOM.classMoveHeaderLogoDown);
            $("#header").removeClass(classDOM.classMoveHeaderLogoUp);
        }

        prevScroll = window.pageYOffset;

    });

    var value, valueLength, valueLetter, limitName, name, fetchPlayerKeywords;


    $(".search-bar__input").on("change keyup paste", function() {
        

        if( $(".search-bar__input").val() === "") {
            $(".players__row").css("display", "block");

        } else {
            $(".players__row").css("display", "none");
            value = $(".search-bar__input").val();

            valueLength =  value.length;
            fetchPlayersLength = Object.values(players).length;

            for(var k = 0; k < fetchPlayersLength; k++) {
                fetchPlayerKeywords = Object.values(players)[k].playerKeywords;

                for(var c = 0; c < fetchPlayerKeywords.length; c++) {
                    valueLetter = "";

                    name = Object.values(players)[k].playerKeywords[c];


                    for(var i = 0; i < valueLength; i++) {
                        valueLetter = valueLetter +  name.charAt(i);
                    }
                    
                    limitName = value.substr(0, valueLength);


                    if (valueLetter === limitName) {
                        console.log(Object.values(players)[k].playerName);

                        $("#serach-results").text(Object.values(players)[k].playerName)
                    }
                }
            }
        }


    });

    // document.addEventListener('mousemove', logKey);
    
    // function logKey(e) {
    //     if (e.clientY >= 66 && scrolled === false) {

    //         scrolled = true;
    //         $("#header").toggleClass(classDOM.classMoveHeaderLogoUp);
    //         $("#header").removeClass(classDOM.classMoveHeaderLogoDown);
    //     } 

    //     if (e.clientY < 66 && scrolled === true) {

    //         scrolled = false;
    //         $("#header").toggleClass(classDOM.classMoveHeaderLogoDown);
    //         $("#header").removeClass(classDOM.classMoveHeaderLogoUp);
    //     }


    // }


});

