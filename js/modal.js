let modalCount=0;function getQuery(q){return(window.location.search.match(new RegExp('[?&]'+q+'=([^&]+)'))||[,null])[1];}
function openModalOverlay(modalId,overlayId){if($(`#${modalId}`).hasClass("minimized")){console.error("Trying to show overlay for hidden modal.");return;}
$(`#${overlayId}`).removeClass("hidden");}
function closeModalOverlay(modalId,overlayId){if($(`#${modalId}`).hasClass("minimized")){console.error("Trying to hide overlay for hidden modal.");return;}
$(`#${overlayId}`).addClass("hidden");}
function openModal(modalId){$(`#${modalId}`).removeClass("minimized");modalCount++;document.body.style.overflow="hidden";}
function closeModal(modalId){$(`#${modalId}`).addClass("minimized");modalCount--;if(modalCount==0){document.body.style.overflow="visible";}}
function updateElementValues(elementIds,value){for(i=0;i<elementIds.length;i++){if(elementIds[i].value==value){return;}
else{document.getElementById(elementIds[i]).value=value;}}}