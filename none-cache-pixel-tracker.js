(function() {
  const pixelId = document.currentScript.getAttribute('attribute-pixel-id'); 
  const currentTimeStamp = new Date().valueOf();
  const veritoneAttributeScript = document.createElement('script');
  veritoneAttributeScript.referrerpolicy = "origin";
  veritoneAttributeScript.async = true;
  veritoneAttributeScript.type = 'application/javascript';
  veritoneAttributeScript.setAttribute("attribute-pixel-id", pixelId)
  veritoneAttributeScript.src = `https://cdn.statically.io/gh/seta-trungvuong/attribute-pixel-tracker/develop/attribute-pixel-tracker.js?${currentTimeStamp}`;
  document.body.appendChild(veritoneAttributeScript);
})();
