(function() {
  const pixelId = document.currentScript.getAttribute('attribute-pixel-id'); 
  const currentTimeStamp = new Date().valueOf();
  const veritoneAttributeScript = document.createElement('script');
  veritoneAttributeScript.referrerpolicy = "origin";
  veritoneAttributeScript.async = true;
  veritoneAttributeScript.type = 'application/javascript';
  veritoneAttributeScript.setAttribute("attribute-pixel-id", pixelId)
  veritoneAttributeScript.src = `https://cdn.jsdelivr.net/gh/seta-trungvuong/attribute-pixel-tracker@main/attribute-pixel-tracker.min.js?v=${currentTimeStamp}`;
  document.body.appendChild(veritoneAttributeScript);
})();
