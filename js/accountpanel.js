let accountPanel=$("#account-panel");let navBar=$("#navbar");accountPanel.on("click",toggleUserPanel);document.onscroll=closeUserPanel;document.onresize=closeUserPanel;function toggleUserPanel(){if(accountPanel.hasClass("clicked")===true){if(window.pageYOffset<window.innerHeight/2){navBar.addClass("nav-blend");}
accountPanel.removeClass("clicked");setTimeout(function(){document.onclick=null;},10);}
else{if(window.innerWidth<=685){window.location="/account";}
else{if(window.pageYOffset<window.innerHeight/2){navBar.removeClass("nav-blend");}
accountPanel.addClass("clicked");setTimeout(function(){document.onclick=closeUserPanel;},10);}}}
function closeUserPanel(){if(accountPanel.hasClass("clicked")===true){accountPanel.removeClass("clicked");setTimeout(function(){document.onclick=null;},10);}}