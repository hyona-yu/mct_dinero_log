// assets/img/profile.b64: jpg/png 를 base64 로 인코딩한 텍스트 파일. 순수 base64 문자열이든 data URL 이든 둘 다 돼요.
(function () {
  var img = document.getElementById("avatar-img");
  fetch("assets/img/profile.b64", { cache: "no-cache" })
    .then(function (r) { if (!r.ok) throw new Error(r.status); return r.text(); })
    .then(function (t) {
      t = t.replace(/\s+/g, "");
      if (!t) return;
      if (t.indexOf("data:") !== 0) {
        var mime = t.indexOf("iVBOR") === 0 ? "image/png" : t.indexOf("UklGR") === 0 ? "image/webp" : "image/jpeg";
        t = "data:" + mime + ";base64," + t;
      }
      img.onload = function () { img.hidden = false; };
      img.src = t;
    })
    .catch(function () { /* 파일이 없으면 모노그램 유지 */ });
})();
