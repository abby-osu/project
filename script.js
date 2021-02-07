function openTab(event, tabName){

    var i;
    var tabcontent;
    var tablinks;

    // hide all the tabcontents, otherwise it will show up as one whole HTML doc
    tabcontent = document.getElementsByClassName("tabcontent");
    for( var i = 0; i < tabcontent.length; i++){
        tabcontent[i].style.display ="none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for(var i = 0; i < tablinks.length; i++){
        tablinks[i].className = tablinks[i].className.replace("active", "");
    }

    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";
}
