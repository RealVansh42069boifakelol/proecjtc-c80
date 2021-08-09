function AddItem()
{
    var guestListItemPush = document.getElementById("addNameInput").value; 
    var guestList = []; 
    guestList.push(guestListItemPush); 
    console.log(guestList);
     document.getElementById("guestListH").style.display = "inline-block"; 
    document.getElementById("guestListH").innerHTML = guestList;
}
function sortNames()
{
    GuestList.sort();
    console.log(GuestList);
    document.getElementById("sortedNames").style.display = "inline-block";
    document.getElementById("sortednNames").innerHTML = GuestList;
}