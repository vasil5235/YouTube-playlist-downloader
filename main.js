
let videos = document.querySelectorAll('ytd-playlist-panel-video-renderer');

function SendToBE(url)
{

    fetch('http://localhost:3000/submit', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({message: url})
    }).then(res => res.json()).then(data => {console.log(data)}).catch(err => console.log(err));
}

document.addEventListener('click', ()=>{
    videos.forEach(video => {
        let link = video.querySelector('a#wc-endpoint');
        if (link) {
            let href = link.getAttribute('href');
            href = href.slice(0,20)
            let fullUrl = 'https://www.youtube.com' + href;

            SendToBE(fullUrl);
        }
    })
});