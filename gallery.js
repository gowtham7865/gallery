var allImgTags=document.images
console.log(allImgTags)
for(i=0;i<=9;i++)
{
    allImgTags[i].src=``
    allImgTags[i].addEventListener("click",function()
{
    document.getElementById("bigimagecontainer").style.display="flex"
    document.getElementById("bigimage").style.backgroundImage=`url($this.src)`
});

}

function closewindow(){
    document.getElementById("bigimagecontainer").style.display="none"
}
