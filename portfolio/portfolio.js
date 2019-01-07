
function closeAllTiles(tiles){
  for(var tile = 0; tile < tiles.length; tile++){
    tiles[tile].classList.add('closed')
  }
}

//TODO put your DOM manipulating 'do everyting' function in here.
document.addEventListener("DOMContentLoaded", function() {
  const projectTiles = document.getElementsByClassName("project_tile");
  closeAllTiles(projectTiles);
  for (var num = 0; num < projectTiles.length; num++){
    const tile = projectTiles[num];
    tile.getElementsByClassName("project_miniview")[0].addEventListener("click",function(event){
      if(!tile.classList.contains('closed')) tile.classList.add('closed');
      else {
        closeAllTiles(projectTiles);
        tile.classList.remove('closed');
        tile.scrollIntoView({behavior:'smooth',alignToTop:true});
      }
    });
  }
});
