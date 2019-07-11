
var popupSelect = '#pop-up';
var popupContainerSelect = '#pop-up-container';
var cardSelect = '#card';
var popupCloseSelect = "#pop-up-close";
var imgaeSelect = "#pop-up-image";
var headingName = "#heading-name";
var headerSelect = "#header";
var bodySelect = "#body";
var DOMSelect = "html"
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
    classMoveDrawerLogoDown: 'move-logo-drawer-bottom',
    classRemoveHeaderShadow: 'remove-shadow-header',
    classAddHeaderShadow: 'add-shadow-header'
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


// ALSO USED IN ORDERING THE PLAYERS CARDS
var getPlayerImg1 = {
    cristiano: "img/players-position-1/forwardes/RONALDO_501x752.png",
    dybala: "img/players-position-1/forwardes/Dybala_501x752.png",
    costa: "img/players-position-1/forwardes/Costa_501x752.png",
    bernardeschi: "img/players-position-1/forwardes/Bernardeschi_501x752.png",
    mandzukic: "img/players-position-1/forwardes/MANDZUKIC_501x752.png",
    cuadrado: "img/players-position-1/forwardes/Cuadrado_501x752.png",
    kean: "img/players-position-1/forwardes/KEAN_501x752.png",
    bentancur: "img/players-position-1/midfielders/BENTANCUR_501x752.png",
    khedira: "img/players-position-1/midfielders/KHEDIRA_501x752.png",
    can: "img/players-position-1/midfielders/EmreCan_501x752.png",
    matuidi: "img/players-position-1/midfielders/Matuidi_501x752.png",
    pjanic: "img/players-position-1/midfielders/PJANIC_501x752.png",
    chiellini: "img/players-position-1/defenders/Chiellini_501x752.png",
    bonucci: "img/players-position-1/defenders/Bonucci_501x752.png",
    barzagli: "img/players-position-1/defenders/Barzagli_501x752.png",
    caceres: "img/players-position-1/defenders/Caceres_501x752.png",
    sandro: "img/players-position-1/defenders/SANDRO_501x752.png",
    cancelo: "img/players-position-1/defenders/Cancelo_501x752.png",
    desciglio: "img/players-position-1/defenders/DeSciglio_501x752.png",
    spinazzola: "img/players-position-1/defenders/Spinazzola_501x752.png",
    rugani: "img/players-position-1/defenders/RUGANI_501x752.png",
    szczesny: "img/players-position-1/goalkeepers/SZCZESNY_501x752.png",
    perin: "img/players-position-1/goalkeepers/Perin_501x752.png",
    pinsoglio: "img/players-position-1/goalkeepers/PINSOGLIO_501x752.png"
}

var players = {

    // FORWARDERS
    cristiano: new PlayerCard("Cristiano Ronaldo","Cristiano", "February 5, 1985", "(age 34)", "1.87 m", "Forward", "7", "2018", "56", getPlayerImg1.cristiano, "#cristiano", id = 0, ["cristiano", "ronaldo", "cristiano ronaldo"]),
    dybala: new PlayerCard("Paulo Dybala","Dybala", "November 15, 1993", "(age 25)", "1.77 m", "Forward", "10", "2015", "16", getPlayerImg1.dybala, "#dybala", id, ["dybala", "paulo", "paulo dybala"]),
    costa: new PlayerCard("Douglas Costa","Costa", "September 14, 1990", "(age 28)", "1.72 m", "Forward", "11", "2018", "1", getPlayerImg1.costa, "#costa", id, ["costa", "douglas", "douglas costa"]),
    bernardeschi: new PlayerCard("Federico Bernardeschi","Bernardeschi", "February 16, 1994", "(age 25)", "1.85 m", "Forward", "33", "2017", "6", getPlayerImg1.bernardeschi, "#bernardeschi", id, ["federico", "bernardeschi", "federico bernardeschi"]),
    mandzukic: new PlayerCard("Mario Mandžukić","Mandzukic", "May 26, 1988", "(age 32)", "1.90 m", "Forward", "17", "2015", "30", getPlayerImg1.mandzukic, "#mandzukic", id, ["mario", "mandzukic", "mario mandzukic"]),
    cuadrado: new PlayerCard("Juan Cuadrado","Cuadrado", "May 21, 1986", "(age 30)", "1.76 m", "Forward", "17", "2015", "5", getPlayerImg1.cuadrado, "#cuadrado", id, ["juan", "cuadrado", "juan cuadrado"]),
    kean: new PlayerCard("Moise Kean","Kean", "June 25, 1997", "(age 18)", "1.82 m", "Forward", "18", "2015", "4", getPlayerImg1.kean, "#kean", id, ["moise", "kean", "moise kean"]),

    // MIDFIELDERS
    bentancur: new PlayerCard("Rodrigo Bentancur","Bentancur", "June 25, 1997", "(age 21)", "1.82 m", "Midfielder", "30", "2015", "2", getPlayerImg1.bentancur, "#bentancur", id, ["rodrigo", "bentancur", "rodrigo bentancur"]),
    khedira: new PlayerCard("Sami Khedira","Khedira", "April 4, 1987", "(age 31)", "1.89 m", "Midfielder", "6", "2015", "21", getPlayerImg1.khedira, "#khedira", id, ["sami", "khedira", "sami khedira"]),
    can: new PlayerCard("Emre Can","Can", "April 4, 1987", "(age 25)", "1.84 m", "Midfielder", "23", "2015", "4", getPlayerImg1.can, "#can", id, ["emere", "can", "emere can"]),
    matuidi: new PlayerCard("Blaise Matuidi","Matuidi", "April 4, 1987", "(age 31)", "1.8 m", "Midfielder", "14", "2017", "6", getPlayerImg1.matuidi, "#matuidi", id, ["blaise", "matuidi", "blaise matuidi"]),
    pjanic: new PlayerCard("Miralem Pjanic","Pjanic", "April 2, 1990", "(age 28)", "1.8 m", "Midfielder", "5", "2015", "18", getPlayerImg1.pjanic, "#pjanic", id, ["miralem", "pjanic", "miralem pjanic"]),

    // DEFENDERS
    chiellini: new PlayerCard("Giorgio Chiellini","Chiellini", "April 2, 1990", "(age 34)", "1.8 m", "Defender", "5", "2005", "18", getPlayerImg1.chiellini, "#chiellini", id, ["giorgio", "chiellini", "giorgio chiellini"]),
    bonucci: new PlayerCard("Leonardo Bonucci","Bonucci", "May 1, 1987", "(age 31)", "1.9 m", "Defender", "19", "2010. 2018", "15", getPlayerImg1.bonucci, "#bonucci", id, ["leonardo", "bonucci", "leonardo bonucci"]),
    barzagli: new PlayerCard("Andrea Barzagli","Barzagli", "May 8, 1981", "(age 37)", "1.87 m", "Defender", "15", "2011", "2", getPlayerImg1.barzagli, "#barzagli", id, ["andrea", "barzagli", "andrea barzagli"]),
    caceres: new PlayerCard("Martín Cáceres","Cáceres", "May 8, 1981", "(age 31)", "1.78 m", "Defender", "4", "2009. 2012. 2019", "3", getPlayerImg1.caceres, "#caceres", id, ["martin", "caceres", "martin caceres"]),
    sandro: new PlayerCard("Alex Sandro","Alex Sandro", "January 26, 1991", "(age 28)", "1.8 m", "Defender", "12", "2015", "9", getPlayerImg1.sandro, "#sandro", id, ["alex", "sandro", "alex sandro"]),
    desciglio: new PlayerCard("Mattia De Sciglio","De Sciglio", "October 20, 1992", "(age 26)", "1.82 m", "Defender", "2", "2018", "Zero", getPlayerImg1.desciglio, "#desciglio", id, ["joao", "desciglio", "joao desciglio"]),
    spinazzola: new PlayerCard("Leonardo Spinazzola","Spinazzola", "March 25, 1993", "(age 25)", "1.86 m", "Defender", "37", "2018", "Zero", getPlayerImg1.spinazzola, "#spinazzola", id, ["leonardo", "spinazzola", "leonardo spinazzola"]),
    rugani: new PlayerCard("Daniele Rugani","Rugani", "July 29, 1994", "(age 24)", "1.86 m", "Defender", "24", "2013", "6", getPlayerImg1.rugani, "#rugani", id, ["leonardo", "rugani", "leonardo rugani"]),

    // GOALKEEPRS
    szczesny: new PlayerCard("Wojciech Szczęsny","Szczęsny", "April 18, 1990", "(age 28)", "1.95 m", "Goalkeeper", "1", "2013", "Zero", getPlayerImg1.szczesny, "#szczesny", id, ["leonardo", "szczesny", "leonardo szczesny"]),
    perin: new PlayerCard("Mattia Perin","Perin", "November 10, 1992", "(age 26)", "1.88 m", "Goalkeeper", "22", "2018", "Zero", getPlayerImg1.perin, "#perin", id, ["mattia", "perin", "mattia perin"]),
    pinsoglio: new PlayerCard("Carlo Pinsoglio","Pinsoglio", "March 16, 1990", "(age 28)", "1.94 m", "Goalkeeper", "22", "2000", "Zero", getPlayerImg1.pinsoglio, "#pinsoglio", id, ["carlo", "pinsoglio", "carlo pinsoglio"])
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

    document.querySelector('#header').style = 'top: 0';

    if($(headerSelect).hasClass(classDOM.classMoveHeaderLogoUp)) {

        $(headerSelect).toggleClass(classDOM.classMoveHeaderLogoDown);

    }


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
    
    document.querySelector('#header').style = 'top: -8rem';

    if($(headerSelect).hasClass(classDOM.classMoveHeaderLogoDown)) {

        
        $(headerSelect).removeClass(classDOM.classMoveHeaderLogoDown);


    }


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

    document.addEventListener("keypress", function(e) {
        
        console.log(e);
    })

    $(menuIcon).click( function() {

        $(shadedWindow).toggleClass(classDOM.classShowShadedWindow);
        $(shadedWindow).toggleClass(classDOM.classFadeInFast);
        $(drawer).toggleClass(classDOM.classMoveDrawer);
        $(headerLogo).toggleClass(classDOM.classMoveHeaderLogoUp);
        $(drawerLogo).toggleClass(classDOM.classMoveDrawerLogoDown);
        $(DOMSelect).toggleClass(classDOM.classDisableScroll);

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
            $(DOMSelect).removeClass(classDOM.classDisableScroll);
            
        }, 200);

        setTimeout(() => {

            $(headerLogo).removeClass(classDOM.classMoveHeaderLogoUp);
            $(headerLogo).removeClass(classDOM.classMoveHeaderLogoDown);
            
        }, 500);

    });

    //////////////////////////////
    /// PlAYERS SLIDER //////////
    ////////////////////////////

    var CreateSlider = function(position) {
        this.sliderVars = {
            scrollLength: 30,
            slideLeft: 0,
            slideRight: 0,
            position: position
        }

        initSlider(this.sliderVars.scrollLength,this.sliderVars.slideLeft,this.sliderVars.slideRight,this.sliderVars.position);
    }

    var initSlider = function(scrlLength,sldLeft,sldRight,position) {
        document.querySelector('#arr-left-' + position).addEventListener('mouseenter', function(e){
            sldLeft = setInterval(function(){
            if(scrlLength > 0) {
                scrlLength -= 30;
                document.querySelector('#arr-left-' + position).style.opacity = null;
            } else if (calcSlideWidth('#slide-' + position) === 0) {
                document.querySelector('#arr-left-' + position).style.opacity = '0';
            }
            document.querySelector('#' + position + '-container').style = 'transform: translateX(-' + scrlLength + 'px)';
            if(scrlLength > 0) {
                scrlLength -= 30;
            }
            console.log('left ' +scrlLength)
            }, 300);
        });

        document.querySelector('#arr-left-' + position).addEventListener('mouseleave', function(e){
            clearInterval(sldLeft);
        });

        document.querySelector('#arr-right-' + position).addEventListener('mouseenter', function(e){
            sldRight = setInterval(function(){
                if(scrlLength < calcSlideWidth('#slide-' + position)) {
                    scrlLength += 30;
                    document.querySelector('#arr-right-' + position).style.opacity = null;
                } else if (calcSlideWidth('#slide-' + position) === 0) {
                    document.querySelector('#arr-right-' + position).style.opacity = '0';
                }
                document.querySelector('#' + position + '-container').style = 'transform: translateX(-' + scrlLength + 'px)';
                if(scrlLength < calcSlideWidth('#slide-'+ position)) {
                    scrlLength += 30;
                }
                console.log('right '+ scrlLength);


            }, 300);
        });

        document.querySelector('#arr-right-' + position).addEventListener('mouseleave', function(e){
            clearInterval(sldRight);
        });
    }
    
    // Creating slider by passing the ID of players container
    new CreateSlider('forward');
    new CreateSlider('defender');
    

    // var scrollLength = 30;
    // var slideLeft;
    // var slideRight;

    // document.querySelector('#arr-left-forward').addEventListener('mouseenter', function(e){
        
    //     slideLeft = setInterval(function(){
    //         if(scrollLength > 0) {
    //             scrollLength -= 30;
    //         }
    //         document.querySelector('#forward-container').style = 'transform: translateX(-' + scrollLength +'px)';
    //         if(scrollLength > 0) {
    //             scrollLength -= 30;
    //         }
    //         console.log('left ' +scrollLength)
    //     }, 300);
    // });

    // document.querySelector('#arr-left-forward').addEventListener('mouseleave', function(e){
    //     clearInterval(slideLeft);
    // });

    // document.querySelector('#arr-right-forward').addEventListener('mouseenter', function(e){
    //     slideRight = setInterval(function(){
    //         if(scrollLength < calcSlideWidth('#slide-forward')) {
    //             scrollLength += 30;
    //         }
    //         document.querySelector('#forward-container').style = 'transform: translateX(-' + scrollLength +'px)';
    //         if(scrollLength < calcSlideWidth('#slide-forward')) {
    //             scrollLength += 30;
    //         }
    //         console.log('right '+ scrollLength)
    //     }, 300);
    // });

    // document.querySelector('#arr-right-forward').addEventListener('mouseleave', function(e){
    //     clearInterval(slideRight);
    // });

    var calcSlideWidth = function(slideId) {
        return document.querySelector(slideId).scrollWidth - document.querySelector(slideId).clientWidth;
    }


    if (window.location.href === "http://127.0.0.1:8080/" || window.location.href === "http://127.0.0.1:8080" || window.location.href === "http://127.0.0.1:8080/#" ) {

        $("#home-link").toggleClass("navigation__link--marked")
    
    }

    var posScrlOld;
    
    window.addEventListener('scroll', function(e){
        var posScrlY = [window.pageYOffset, 0]
        
        if(posScrlY[0] > posScrlOld) {
            document.querySelector('#header').style = 'top: -8rem';
        } else if (posScrlY[0] < posScrlOld) {
            document.querySelector('#header').style = 'top: 0;box-shadow: 0rem 0.1rem 3rem rgba(0,0,0, 0.3)';
        }
        
        if(posScrlY[0] === 0) {
            document.querySelector('#header').style = 'box-shadow: 0rem 0.1rem 3rem rgba(0,0,0, 0)';
        }

        posScrlOld = posScrlY[0];
        
    });

    // $(headerSelect).toggleClass(classDOM.classAddHeaderShadow);

    // var scrolled;
    // var currentScroll;
    // var prevScroll;
    // scrolled = false;
    // scrolled2 = false;

    // prevScroll = window.pageYOffset;

    
    // $(window).scroll(function() {

    //     currentScroll = window.pageYOffset;


    //     if (currentScroll > prevScroll && scrolled === false) {

    //         scrolled = true;
    //         $("#header").toggleClass(classDOM.classMoveHeaderLogoUp);
    //         $("#header").removeClass(classDOM.classMoveHeaderLogoDown);


    //         $(".search__header").toggleClass(classDOM.classFadeOut);
            
    //         setTimeout(function() {
    //             $(".search__header").removeClass(classDOM.classFadeOut);
    //             $(".search__header").removeClass(classDOM.classFadeIn);
    //             $(".search__header").css("display", "none");
    //         }, 300)
            
    //     } else if(currentScroll < prevScroll && scrolled === true) {

    //         scrolled = false;
    //         $("#header").toggleClass(classDOM.classMoveHeaderLogoDown);
    //         $("#header").removeClass(classDOM.classMoveHeaderLogoUp);


    //             $(".search__header").css("display", "block");
    //             $(".search__header").toggleClass(classDOM.classFadeIn);

    //     }


    //     if(currentScroll === 0) {
    //         $(".search__header").toggleClass(classDOM.classFadeOut);
    //         setTimeout(function() {
    //             $("#header").removeClass(classDOM.classMoveHeaderLogoUp);
    //             $("#header").removeClass(classDOM.classMoveHeaderLogoDown);
    //             $(headerSelect).toggleClass(classDOM.classRemoveHeaderShadow);
    //             $(".search__header").removeClass(classDOM.classFadeOut);
    //             $(".search__header").removeClass(classDOM.classFadeIn);
    //             $(".search__header").css("display", "none");
    //         }, 300)


    //     }

    //     prevScroll = window.pageYOffset;

    // });

    var value, valueLength, valueLetter, limitName, limitKeyword, name, fetchPlayerKeywords;

    $("#search-icon").click(function() {
        $("#search-player").focus();
        window.scrollTo(0, 0);
    });

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
            value = value.toLowerCase();


            $(".players__card").remove();



            
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

                        limitFirstKeyword = Object.values(players)[k].playerKeywords[0].substr(0, valueLength);
                        limitSecondKeyword = Object.values(players)[k].playerKeywords[1].substr(0, valueLength);
                        limitThirdKeyword = Object.values(players)[k].playerKeywords[2].substr(0, valueLength);
                        if(limitFirstKeyword ===  limitSecondKeyword) {
                            break;
                        } else if(limitFirstKeyword === limitThirdKeyword) {
                            break;
                        } else if(limitSecondKeyword === limitThirdKeyword) {
                            break;
                        }

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