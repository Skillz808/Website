function removeMusicPlayer() {
    var elem = document.getElementById('musicplayer');
    elem.parentNode.removeChild(elem);
   }

function removeLoading() {
    var kill = document.getElementById('loading');
    kill.parentNode.removeChild(kill);
   }

function time_since_update() {

    last_update = new Date('2022-01-11')
    now = Date.now()
    difference = now-last_update
    days = difference/86400000
    days = Math.round(days)
    document.write(days) 
}   