/* "I passed" card: dialog + canvas renderer, shared by the cert hubs and trackers.
   Built by passed_cards.py into assets/js/passed.js (CERTS filled in there). */
(function(){
  const CERTS = {"cape":{"code":"CAPE","name":"Certified Active Directory Pentesting Expert","acc":"#e436b4","kick":"#e436b4","txt":"#eef1f8","muted":"#a8b4c6","on":"#fff"},"cdep":{"code":"CDEP","name":"Certified Detection Engineering Principal","acc":"#00eafc","kick":"#00eafc","txt":"#eef1f8","muted":"#a2aecc","on":"#0d1320"},"cdsa":{"code":"CDSA","name":"Certified Defensive Security Analyst","acc":"#00eafc","kick":"#00eafc","txt":"#eef1f8","muted":"#a8bad8","on":"#0d1320"},"cjca":{"code":"CJCA","name":"Certified Junior Cybersecurity Associate","acc":"#2f95ff","kick":"#ff3e3e","txt":"#f4f4f4","muted":"#b6bfcf","on":"#fff"},"coae":{"code":"COAE","name":"Certified Offensive AI Expert","acc":"#9d94ea","kick":"#9d94ea","txt":"#eef1f8","muted":"#a4b1cd","on":"#0d1320"},"cpts":{"code":"CPTS","name":"Certified Penetration Testing Specialist","acc":"#a34ff2","kick":"#a34ff2","txt":"#e8edf6","muted":"#acbbd7","on":"#fff"},"cwee":{"code":"CWEE","name":"Certified Web Exploitation Expert","acc":"#fcc000","kick":"#fcc000","txt":"#eef1f8","muted":"#a8b4c6","on":"#0d1320"},"cwes":{"code":"CWES","name":"Certified Web Exploitation Specialist","acc":"#ed635e","kick":"#ed635e","txt":"#eef1f8","muted":"#a4b1cd","on":"#fff"},"cwpe":{"code":"CWPE","name":"Certified Wi-Fi Pentesting Expert","acc":"#f05a1e","kick":"#f05a1e","txt":"#eef1f8","muted":"#a4b1cd","on":"#fff"}};
  const SITE = "https://cnmoseman.github.io/htb-study-trackers/", VER = "";
  const ROOT = document.currentScript && document.currentScript.src ? new URL("../../", document.currentScript.src).href : SITE;
  const FONTS_CSS = "https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@700&family=IBM+Plex+Mono:wght@500;700&family=Saira:wght@500&display=swap";
  const W = 1200, H = 630, X = 64;

  let css;  // the font stylesheet must finish loading before fonts.load() knows the faces
  function fontsReady(){
    css = css || new Promise(ok => {
      const l = document.createElement("link"); l.rel = "stylesheet"; l.href = FONTS_CSS;
      l.onload = l.onerror = ok; document.head.appendChild(l);
    });
    return css.then(() => Promise.all(["700 112px 'Chakra Petch'", "700 20px 'IBM Plex Mono'", "500 19px 'IBM Plex Mono'", "500 25px Saira"]
      .map(f => document.fonts.load(f).catch(() => {}))));
  }
  function fmtDate(iso){
    const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso || ""); if (!m) return "";
    return new Date(+m[1], m[2] - 1, +m[3]).toLocaleDateString("en-US", {month: "short", day: "numeric", year: "numeric"});
  }
  // shrink a font until the text fits; returns the size used
  function fit(ctx, text, font, size, min, max){
    for (; size > min; size--) { ctx.font = font.replace("@", size + "px"); if (ctx.measureText(text).width <= max) break; }
    ctx.font = font.replace("@", size + "px"); return size;
  }
  function spaced(ctx, px){ if ("letterSpacing" in ctx) ctx.letterSpacing = px + "px"; }

  // d: {name, date (YYYY-MM-DD), days}; bg: loaded background image
  function draw(cv, c, d, bg){
    const k = CERTS[c], ctx = cv.getContext("2d");
    cv.width = W; cv.height = H;
    ctx.drawImage(bg, 0, 0, W, H);
    const meta = [d.name && d.name.trim(), fmtDate(d.date), d.days > 0 && d.days + (d.days == 1 ? " day" : " days") + " of study"].filter(Boolean);
    // baselines relative to the block top; block is centred in the space above the URL
    const h = meta.length ? 300 : 266, T = Math.round((534 - h) / 2);
    ctx.textBaseline = "alphabetic"; ctx.textAlign = "left";
    spaced(ctx, 3.6); ctx.font = "700 20px 'IBM Plex Mono'"; ctx.fillStyle = k.kick;
    ctx.fillText("HTB " + k.code, X, T + 15);
    spaced(ctx, -1); ctx.font = "700 112px 'Chakra Petch'"; ctx.fillStyle = "#fff";
    ctx.fillText("I PASSED", X, T + 112);
    ctx.fillStyle = k.acc; ctx.shadowColor = k.acc + "88"; ctx.shadowBlur = 40;
    ctx.fillText(k.code, X, T + 215); ctx.shadowBlur = 0; ctx.fillText(k.code, X, T + 215);
    spaced(ctx, 0); ctx.fillStyle = k.txt; fit(ctx, k.name, "500 @ Saira", 25, 18, 560);
    ctx.fillText(k.name, X, T + 264);
    if (meta.length) {
      ctx.fillStyle = k.muted; let line = meta.join(" · ");
      fit(ctx, line, "500 @ 'IBM Plex Mono'", 19, 14, 560);
      while (ctx.measureText(line).width > 560 && meta[0].length > 4) { meta[0] = meta[0].slice(0, -2) + "…"; line = meta.join(" · "); }
      ctx.fillText(line, X, T + 299);
    }
    ctx.font = "500 19px 'IBM Plex Mono'"; ctx.fillStyle = k.muted;
    ctx.fillText(SITE.replace(/^https?:\/\//, "") + c + "/", X, H - 50);
  }

  const CSS = `
.hp{margin:auto;width:min(620px,calc(100vw - 32px));max-height:calc(100vh - 48px);overflow:auto;background:#182131;color:#e8edf6;border:1px solid #2b3a52;border-radius:12px;padding:0;font:500 14px/1.5 Saira,system-ui,sans-serif}
.hp::backdrop{background:rgba(3,7,14,.7)}
.hp *{box-sizing:border-box}
.hp .hh{padding:16px 18px 12px;border-bottom:1px solid #2b3a52}
.hp h3{margin:0;font:700 19px "Chakra Petch",sans-serif}.hp h3:focus{outline:none}
.hp .hh p{margin:4px 0 0;font-size:13px;color:#acbbd7}
.hp .hb{display:grid;gap:12px;padding:14px 18px}
.hp canvas{display:block;width:100%;max-width:min(100%,92vh);margin:0 auto;height:auto;aspect-ratio:1200/630;border-radius:8px;border:1px solid #2b3a52;background:#0b0f18}
.hp .row{display:grid;grid-template-columns:1.4fr 1.1fr .8fr;gap:10px}
.hp label{display:grid;gap:4px;font:700 11px "IBM Plex Mono",monospace;letter-spacing:.08em;color:#acbbd7}
.hp input,.hp textarea{width:100%;background:#111a29;color:#e8edf6;border:1px solid #2b3a52;border-radius:8px;padding:8px 10px;font:500 14px Saira,system-ui,sans-serif;color-scheme:dark}
.hp textarea{resize:vertical;line-height:1.45;min-height:4.6em}
.hp input:focus-visible,.hp textarea:focus-visible,.hp .b:focus-visible{outline:2px solid var(--hp-acc);outline-offset:1px}
.hp .b{display:inline-flex;align-items:center;justify-content:center;padding:9px 12px;border-radius:8px;border:1px solid #2b3a52;background:none;color:#e8edf6;font:700 13px "IBM Plex Mono",monospace;text-decoration:none;cursor:pointer}
.hp .b:hover{border-color:var(--hp-acc);color:var(--hp-acc)}
.hp .b.p{background:var(--hp-acc);border-color:var(--hp-acc);color:var(--hp-on)}.hp .b.p:hover{filter:brightness(1.1);color:var(--hp-on)}
.hp .plats{display:grid;grid-template-columns:repeat(4,1fr);gap:8px}
.hp .note{margin:0;font-size:12px;color:#8a9bb8}.hp .note.ok{color:#9fef00}
.hp .hf{display:flex;justify-content:flex-end;padding:12px 18px;border-top:1px solid #2b3a52}
@media(max-width:560px){.hp .row{grid-template-columns:1fr 1fr}.hp .row label:first-child{grid-column:1/-1}.hp .plats{grid-template-columns:1fr 1fr}}`;

  let dlg, cur, bgImg, prefill = "", dirty = false, link = "", busy = Promise.resolve();
  const $ = s => dlg.querySelector(s), enc = encodeURIComponent;
  function build(){
    const st = document.createElement("style"); st.textContent = CSS; document.head.appendChild(st);
    dlg = document.createElement("dialog"); dlg.className = "hp"; dlg.setAttribute("aria-labelledby", "hpTitle");
    dlg.innerHTML = `<form method="dialog">
  <div class="hh"><h3 id="hpTitle" tabindex="-1" autofocus>You passed. Share it.</h3><p>Add what you want on the card. Every field is optional.</p></div>
  <div class="hb">
    <canvas id="hpCv" width="1200" height="630" role="img" aria-label="Your I passed card"></canvas>
    <div class="row">
      <label for="hpName">NAME OR HANDLE<input id="hpName" maxlength="28" autocomplete="nickname" placeholder="Leave blank to skip"></label>
      <label for="hpDate">PASS DATE<input id="hpDate" type="date"></label>
      <label for="hpDays">DAYS OF STUDY<input id="hpDays" type="number" min="1" max="999" inputmode="numeric"></label>
    </div>
    <button type="button" class="b p" id="hpDl">Download image</button>
    <label for="hpTxt">POST TEXT<textarea id="hpTxt" rows="3"></textarea></label>
    <div class="plats">
      <a class="b" id="hpX" target="_blank" rel="noopener">X</a>
      <a class="b" id="hpReddit" target="_blank" rel="noopener">Reddit</a>
      <a class="b" id="hpLinkedIn" target="_blank" rel="noopener">LinkedIn</a>
      <button type="button" class="b" id="hpCopy">Discord / Copy</button>
    </div>
    <p class="note" id="hpNote" role="status"></p>
  </div>
  <div class="hf"><button class="b" value="cancel">Close</button></div>
</form>`;
    document.body.appendChild(dlg);
    let down = false;  // close on a backdrop click, not on a drag that ends there
    dlg.addEventListener("pointerdown", e => { down = e.target === dlg; });
    dlg.addEventListener("click", e => { if (e.target === dlg && down) dlg.close(); });
    ["#hpName", "#hpDate", "#hpDays"].forEach(s => $(s).addEventListener("input", update));
    $("#hpTxt").addEventListener("input", () => { dirty = true; hrefs(); });
    $("#hpDl").onclick = download;
    $("#hpLinkedIn").onclick = () => copy(body(), "Text copied. Paste it into your LinkedIn post, then attach your image.") || note(FAIL);
    $("#hpCopy").onclick = () => copy(body() + "\n" + link, "Copied the text and link. Paste them into Discord or anywhere else.") || note(FAIL);
  }
  const FAIL = "Couldn't copy. Select the text above and copy it.";
  const NOTE = "Shared links show the card without your details. To post the version with your name, download the image and attach it.";
  function note(msg, ok){ $("#hpNote").textContent = msg; $("#hpNote").classList.toggle("ok", !!ok); }
  function copy(text, ok){
    const ta = document.createElement("textarea"); ta.value = text; dlg.appendChild(ta); ta.select();
    let done = false; try{ done = document.execCommand("copy"); }catch(_){}
    ta.remove();
    if (done) note(ok, true);
    else if (navigator.clipboard) { navigator.clipboard.writeText(text).then(() => note(ok, true), () => note(FAIL)); return true; }
    return done;
  }
  const body = () => $("#hpTxt").value.trim();
  function details(){ return {name: $("#hpName").value, date: $("#hpDate").value, days: parseInt($("#hpDays").value, 10) || 0}; }
  function defText(){
    const k = CERTS[cur], d = details();
    return (d.days > 0 ? `I passed the HTB ${k.code}! ${d.days} ${d.days == 1 ? "day" : "days"} of study paid off.`
                       : `I passed the HTB ${k.code} (${k.name})!`) + ` #HackTheBox #${k.code}`;
  }
  function hrefs(){
    const t = body();
    $("#hpX").href = "https://x.com/intent/post?text=" + enc(t) + "&url=" + enc(link);
    $("#hpReddit").href = "https://www.reddit.com/submit?type=LINK&url=" + enc(link) + "&title=" + enc(t.replace(/\s*#\S+/g, "").slice(0, 300));
    $("#hpLinkedIn").href = "https://www.linkedin.com/sharing/share-offsite/?url=" + enc(link);
  }
  function update(){
    if (!dirty) $("#hpTxt").value = defText();
    hrefs();
    busy = busy.then(() => bgImg && draw($("#hpCv"), cur, details(), bgImg));
  }
  function download(){
    $("#hpCv").toBlob(b => {
      if (!b) return note("Couldn't make the image. Try again.");
      const a = document.createElement("a"); a.href = URL.createObjectURL(b); a.download = `htb-${cur}-passed.png`;
      document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 4000);
      note("Image saved. Attach it to your post.", true);
    }, "image/png");
  }
  function loadBg(c){
    return new Promise((ok, bad) => { const i = new Image(); i.onload = () => ok(i); i.onerror = bad;
      i.src = ROOT + "assets/share/passed/" + c + "-bg" + VER + ".jpg"; });
  }
  // opts: {days} prefilled from the tracker
  function open(c, opts){
    if (!CERTS[c]) return;
    if (!dlg) build();
    const k = CERTS[c];
    if (c !== cur) { cur = c; bgImg = null; dirty = false; $("#hpName").value = ""; $("#hpDays").value = prefill = "";
      const t = new Date(); $("#hpDate").value = `${t.getFullYear()}-${String(t.getMonth() + 1).padStart(2, "0")}-${String(t.getDate()).padStart(2, "0")}`; }
    if (opts && opts.days > 0 && $("#hpDays").value === prefill) $("#hpDays").value = prefill = String(opts.days);
    dlg.style.setProperty("--hp-acc", k.acc); dlg.style.setProperty("--hp-on", k.on);
    link = SITE + c + "/passed/";
    note(NOTE); update(); dlg.showModal();
    busy = busy.then(() => Promise.all([fontsReady(), bgImg || loadBg(c)]))
      .then(([, i]) => { bgImg = i; draw($("#hpCv"), cur, details(), bgImg); })
      .catch(() => note("Couldn't load the card. Check your connection and try again."));
  }
  window.HTBPassed = {open, draw, fontsReady};
})();
