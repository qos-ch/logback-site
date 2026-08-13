
function openTab(evt, anId, subId) {

    var idList = `#${anId}_legacy, #${anId}_canonical, #${anId}_tyler`;
    
    var contents = $(idList);

    if(contents === null)
        return;
    
    contents.each( function(i, e) {
        $(this).css('display', 'none');
    });

    var toActivateIdStr = `#${anId}_${subId}`;

    var toActivate = $(toActivateIdStr);
    if(toActivate === null) {
        return;
    } else {
        toActivate.css('display', 'block');
    }

    var buttonListStr = `#button_${anId}_legacy, #button_${anId}_canonical, #button_${anId}_tyler`;
    var buttonList = $(buttonListStr);
    
    buttonList.each( function(i, e) {
        $(this).removeClass('active');
    });

    var buttonToActiveStr = `#button_${anId}_${subId}`;
    $(buttonToActiveStr).addClass('active');

    if(subId == 'canonical') {
        canonical(`${anId}_legacy`, `${anId}_canonical`);
    }
 
    if(subId == 'tyler') {
        tyler(`${anId}_legacy`, `${anId}_tyler`);
    }

} 

function enableLegacy() {

    var legacyContentItems = $("div[id$='legacy']");
    if(legacyContentItems === null)
        return;

    legacyContentItems.each( function(i, e) {
        $(this).css('display', 'block');
    });

    var legacyButtons = $("button[id$='legacy']");
    if(legacyButtons === null)
        return;

    legacyButtons.each( function(i, e) {
        $(this).addClass('active');
    });
    
}
