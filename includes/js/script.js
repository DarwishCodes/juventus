
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


var PlayerCard = function(playerName, playerFirstName, playerDate, palayerAge, playerHeight, playerPosition, playerNumber, playerJoined, playerGoals, playerImage, playerId, playerIdNo, playerKeywords) {

    this.playerName = playerName;
    this.playerFirstName = playerFirstName;
    this.playerDate = playerDate;
    this.palayerAge = palayerAge;
    this.playerHeight = playerHeight;
    this.playerPosition = playerPosition;
    this.playerNumber = playerNumber;
    this.playerJoined = playerJoined;
    this.playerGoals = playerGoals;
    this.playerImage = playerImage;
    this.playerId = playerId;
    this.playerIdNo = id++;


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

        // showWindow();

    };

};

var getPlayerImg1 = {
    cristiano: "img/players-position-1/forwardes/RONALDO_501x752.png",
    dybala: "img/players-position-1/forwardes/Dybala_501x752.png",
    costa: "img/players-position-1/forwardes/Costa_501x752.png"
}

var players = {

    cristiano: new PlayerCard("Cristiano Ronaldo","Cristiano", "February 5, 1985", "(age 34)", "1.87 m", "Forward", "7", "2018", "56", getPlayerImg1.cristiano, "#cristiano", id = 0, ["cristiano", "ronaldo"]),
    dybala: new PlayerCard("Paulo Dybala","Dybala", "November 15, 1993", "(age 25)", "1.77 m", "Forward", "10", "2015", "16", getPlayerImg1.dybala, "#dybala", id, ["dybala", "paulo"]),
    costa: new PlayerCard("Douglas Costa","Costa", "September 14, 1990", "(age 28)", "1.72 m", "Forward", "11", "2018", "1", getPlayerImg1.costa, "#costa", id, ["costa", "douglas"])


};


var y;
var addPlayerPosition = function(position) {

    $("#" + position).append("<div class='players__card' id='" + Object.values(players)[y].playerIdNo + "'></div>");
    $("#" + Object.values(players)[y].playerIdNo).append("<p class='players__caption'>"+ Object.values(players)[y].playerFirstName + "</p>");
    $("#" + Object.values(players)[y].playerIdNo).append("<img class='players__img' src=' " + Object.values(players)[y].playerImage + "' alt=''>");

}

var addPlayersToDOM = function() {

    for (y = 0; y < Object.values(players).length; y++) {
        

        if(Object.values(players)[y].playerPosition === "Forward") {

            addPlayerPosition("forward-container");
            
        } else if(Object.values(players)[y].playerPosition === "Midfielder") {

            addPlayerPosition("midfielder-container");

        } else if(Object.values(players)[y].playerPosition === "Defender") {

            addPlayerPosition("defender-container");

        } else if(Object.values(players)[y].playerPosition === "Goalkeeper") {

            addPlayerPosition("goalkeeper-container");
        }
        
    }
}


// Add Event Listners

var initpPlayersCard = function() {

    $(".players__card").on("click", function() {

        var x = this.id;
        Object.values(players)[x].changeContent();
        showWindow();
        
    });

}

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

var unfocusSearch = function() {

    $("#forward-container").mouseover(function() {

        $("#search-player").blur();
        
    });

    $("#search-results").mouseover(function() {

        $("#search-player").blur();
        
    });
}


$("document").ready(function () {

    addPlayersToDOM();
    initpPlayersCard();

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


    $(".search__input").on("change keyup paste", function() {
        

        if( $(".search__input").val() === "") {
            $(".section-players").css("display", "block");
            $(".search__results").css("display", "none");
            $(".players__card").remove();
            addPlayersToDOM();
            initpPlayersCard();

        } else {
            $(".section-players").css("display", "none");
            $(".search__results").css("display", "block");
            
            value = $(".search__input").val();


            // $(".players__card").remove();
            // $(".players__card").empty();


            
            valueLength =  value.length;
            fetchPlayersLength = Object.values(players).length;

            var numberOfSearchedPlayers = 0;

            for(var k = 0; k < fetchPlayersLength; k++) {
                fetchPlayerKeywords = Object.values(players)[k].playerKeywords;

                $("#" + Object.values(players)[k].playerIdNo).remove();
                $("#" + Object.values(players)[k].playerIdNo).empty();

                for(var c = 0; c < fetchPlayerKeywords.length; c++) {
                    valueLetter = "";

                    name = Object.values(players)[k].playerKeywords[c];


                    for(var i = 0; i < valueLength; i++) {
                        valueLetter = valueLetter +  name.charAt(i);
                        
                    }
                    
                    limitName = value.substr(0, valueLength);


                    if (valueLetter === limitName) {
                        console.log(Object.values(players)[k]);

                        $("#players-box").append("<div class='players__card players__card--result' id='" + Object.values(players)[k].playerIdNo + "'></div>");
                        $("#" + Object.values(players)[k].playerIdNo).append("<p class='players__caption'>"+ Object.values(players)[k].playerFirstName + "</p>");
                        $("#" + Object.values(players)[k].playerIdNo).append("<img class='players__img' src=' " + Object.values(players)[k].playerImage + "' alt=''>");

                        // Object.values(players)[k].changeContent();

                        // $("#" + Object.values(players)[k].playerIdNo).click(function() {
                        //     showWindow();
                        // });

                        $("#" + Object.values(players)[k].playerIdNo).on("click", function() {

                            var fetchPlayerID = this.id;
                            Object.values(players)[fetchPlayerID].changeContent();
                            showWindow();
                            console.log(fetchPlayerID);
                        });

                        numberOfSearchedPlayers++;

                        $("#results-null").empty();
                        $("#results-comment").text("found " + numberOfSearchedPlayers  +" player");

                    } else if(numberOfSearchedPlayers === 0) {
                        $("#results-comment").empty();
                        $("#results-null").text("Your search - " + limitName  +" - did not match any players.");
                    }


                    
                }
            }
        }
        
        unfocusSearch();

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

