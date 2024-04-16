(function(){
    const pixelId = document.currentScript.getAttribute('attribute-pixel-id'); 
    console.log(pixelId)
    const currentTimeStamp = new Date().valueOf();
    const pageUrl = document.URL;
    const referrer = document.referrer;
    const pixelImage = document.createElement('img')
    const imageContainer = document.getElementById("pixel-container");
    pixelImage.id = "attribute-pixel-img"
    pixelImage.referrerpolicy = "no-referrer-when-downgrade"
    pixelImage.src =`https://p.veritone-ce.com/${pixelId}?ts=${currentTimeStamp}&url=${encodeURIComponent(pageUrl)}&ref=${encodeURIComponent(referrer)}`
    document.body.appendChild(pixelImage);
    console.log(document.getElementById("attribute-pixel-img").src)
    console.log("attribute-pixel-tracker version 4")
  })()

