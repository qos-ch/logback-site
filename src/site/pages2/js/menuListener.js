function enableMenuEventListeners() {

    var menuButtons = $("button[id$='MenuButton']");


    if (menuButtons === null) {
        alert("no menu items");
        return;
    }

    if (menuButtons.length === 0) {
        alert("zero  menu items");
        return;
    }

    var len = menuButtons.length;
    for (i = 0; i < len; i++) {
        var menuButton = menuButtons[i];
        //alert(menuButton);
        menuButton.addEventListener("click", function () {
            menuButtonListener(menuButton);
        });
    }

    document.addEventListener("click", elem => {
        deactivateListener(elem);
    });
    window.onbeforeunload = function() {
        unconditionalMenuButtonsDeactivate();
    };


    //document.body.addEventListener("onpagehide", elem => {
    //    unconditionalMenuButtonsDeactivate();
    //});

    //document.body.addEventListener("beforeunload", elem => {
      //  unconditionalMenuButtonsDeactivate();
    //});

}

function deactivateListener(event) {
    var target = $(event.target);

    var parentDropDownParents = target.parents("div.dropdown");
    //alert("parent "+parentDropDownParent)

    if (parentDropDownParents === null || parentDropDownParents.length == 0) {
        unconditionalMenuButtonsDeactivate();
    }

}

function unconditionalMenuButtonsDeactivate() {
    var menuButtons = $("button[id$='MenuButton']");

    var len = menuButtons.length;
    for (i = 0; i < len; i++) {
        var menuButton = menuButtons[i];
        var buttonQ = $(menuButton);
        if (buttonQ.hasClass("active")) {
            buttonQ.removeClass("active")
        }
    }
}

function menuButtonListener(button) {
    //alert("clicked on "+button.id);
    //button.getClass
    var buttonQ = $(button);

    var parent = buttonQ.parent();
    if (buttonQ.hasClass("active")) {
        buttonQ.removeClass("active")
    } else {
        buttonQ.addClass("active")
    }
}