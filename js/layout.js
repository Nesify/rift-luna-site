function setLayoutPfp(cosmetic){$("#pfp").attr("src",cosmetic.images.icon);$("#pfp").attr("class","pfp "+cosmetic.rarity.value);$("#pfp").removeAttr("hidden")
$("#big-pfp").attr("src",cosmetic.images.icon);$("#big-pfp").attr("class","pfp "+cosmetic.rarity.value);$("#big-pfp").removeAttr("hidden")
$("#small-pfp").attr("src",cosmetic.images.icon);$("#small-pfp").attr("class","pfp "+cosmetic.rarity.value);$("#small-pfp").removeAttr("hidden")}
function setDefaultPfp(id){$("#pfp").attr("src",FORTNITE_API_CDN_BASE+`${id}/icon.png`);$("#pfp").attr("class","pfp common");$("#pfp").removeAttr("hidden")
$("#big-pfp").attr("src",FORTNITE_API_CDN_BASE+`${id}/icon.png`);$("#big-pfp").attr("class","pfp common");$("#big-pfp").removeAttr("hidden")
$("#small-pfp").attr("src",FORTNITE_API_CDN_BASE+`${id}/icon.png`);$("#small-pfp").attr("class","pfp common");$("#small-pfp").removeAttr("hidden")}
function setFriendPfp(id,cosmetic){$(`#friend-${id}-preview`).attr("src",cosmetic.images.icon);$(`#friend-${id}-preview`).attr("class","pfp "+cosmetic.rarity.value);$(`#friend-${id}-preview`).removeAttr("hidden")}
function setFriendDefaultPfp(id,cosmeticId){$(`#friend-${id}-preview`).attr("src",FORTNITE_API_CDN_BASE+`${cosmeticId}/icon.png`);$(`#friend-${id}-preview`).attr("class","pfp common");$(`#friend-${id}-preview`).removeAttr("hidden")}
function setFeaturedPfp(cosmetic){cosmetic.id=cosmetic.id.toLowerCase()
$(`#featured-${cosmetic.id}-preview`).attr("src",cosmetic.images.icon);$(`#featured-${cosmetic.id}-preview`).attr("class","pfp "+cosmetic.rarity.value);$(`#featured-${cosmetic.id}-name`).text(cosmetic.name);$(`#featured-${cosmetic.id}-preview`).removeAttr("hidden")}
function setDailyPfp(cosmetic){cosmetic.id=cosmetic.id.toLowerCase()
$(`#daily-${cosmetic.id}-preview`).attr("src",cosmetic.images.icon);$(`#daily-${cosmetic.id}-preview`).attr("class","pfp "+cosmetic.rarity.value);$(`#daily-${cosmetic.id}-name`).text(cosmetic.name);$(`#daily-${cosmetic.id}-preview`).removeAttr("hidden")}