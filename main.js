var images = ["download.jpeg", "parentsultimateguide-minecraft-blog.jpeg", "download (1).jpeg", "download (2).jpeg"]
var names = ["Roblox", 'Minecraft', "Geometry Dash", "Five nights at Freddy's"]
var length_of_arrays = 3;
var i = 0;
function next(){
        i++;
        if(i > length_of_arrays){
            i=0;
        }
        var nextImage = images[i];
        var nextName = names[i];
        document.getElementById("Games").src = nextImage;
        document.getElementById("text").innerHTML = nextName;
}