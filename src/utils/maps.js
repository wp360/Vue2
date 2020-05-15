(function (config) {
  var ba = navigator.userAgent.toLowerCase(); var ca = window; var fa = document; var ga = fa.documentElement; function ma (a) { return ba.indexOf(a) !== -1 } var na = /([a-z0-9]*\d+[a-z0-9]*)/
  function pa () {
    var a = qa; if (!a) return null; var a = a.toLowerCase(); var b = null; if (b = a.match(/angle \((.*)\)/))a = b[1], a = a.replace(/\s*direct3d.*$/, ''); a = a.replace(/\s*\([^\)]*wddm[^\)]*\)/, ''); if (a.indexOf('intel') >= 0) {
      b = ['Intel']; a.indexOf('mobile') >= 0 && b.push('Mobile'); (a.indexOf('gma') >= 0 || a.indexOf('graphics media accelerator') >= 0) && b.push('GMA'); if (a.indexOf('haswell') >= 0)b.push('Haswell'); else if (a.indexOf('ivy') >= 0)b.push('HD 4000'); else if (a.indexOf('sandy') >= 0)b.push('HD 3000'); else if (a.indexOf('ironlake') >= 0)b.push('HD')
      else { a.indexOf('hd') >= 0 && b.push('HD'); var c = a.match(na); c && b.push(c[1].toUpperCase()) } return b = b.join(' ')
    } return a.indexOf('nvidia') >= 0 || a.indexOf('quadro') >= 0 || a.indexOf('geforce') >= 0 || a.indexOf('nvs') >= 0 ? (b = ['nVidia'], a.indexOf('geforce') >= 0 && b.push('geForce'), a.indexOf('quadro') >= 0 && b.push('Quadro'), a.indexOf('nvs') >= 0 && b.push('NVS'), a.match(/\bion\b/) && b.push('ION'), a.match(/gtx\b/) ? b.push('GTX') : a.match(/gts\b/) ? b.push('GTS') : a.match(/gt\b/) ? b.push('GT') : a.match(/gs\b/) ? b.push('GS') : a.match(/ge\b/)
      ? b.push('GE') : a.match(/fx\b/) && b.push('FX'), (c = a.match(na)) && b.push(c[1].toUpperCase().replace('GS', '')), a.indexOf('titan') >= 0 ? b.push('TITAN') : a.indexOf('ti') >= 0 && b.push('Ti'), b = b.join(' ')) : a.indexOf('amd') >= 0 || a.indexOf('ati') >= 0 || a.indexOf('radeon') >= 0 || a.indexOf('firegl') >= 0 || a.indexOf('firepro') >= 0 ? (b = ['AMD'], a.indexOf('mobil') >= 0 && b.push('Mobility'), c = a.indexOf('radeon'), c >= 0 && b.push('Radeon'), a.indexOf('firepro') >= 0 ? b.push('FirePro') : a.indexOf('firegl') >= 0 && b.push('FireGL'), a.indexOf('hd') >= 0 &&
b.push('HD'), c >= 0 && (a = a.substring(c)), (c = a.match(na)) && b.push(c[1].toUpperCase().replace('HD', '')), b = b.join(' ')) : a.substring(0, 100)
  }
  var ra = 'microsoft basic render driver;vmware svga 3d;Intel 965GM;Intel B43;Intel G41;Intel G45;Intel G965;Intel GMA 3600;Intel Mobile 4;Intel Mobile 45;Intel Mobile 965'.split(';'); var sa = 'ActiveXObject' in ca; var va = 'devicePixelRatio' in ca && ca.devicePixelRatio > 1 || sa && 'matchMedia' in ca && ca.matchMedia('(min-resolution:144dpi)') && ca.matchMedia('(min-resolution:144dpi)').matches; var wa = ma('windows nt'); var xa = ba.search(/windows nt [1-5]\./) !== -1; var ya = ba.search(/windows nt 5\.[12]/) !== -1; var za = xa && !ya; ma('windows nt 10')
  var Da = ma('windows phone'); var Ea = ma('macintosh'); var Fa = ma('Mb2345Browser'); var Ga = ma('ipad;') || ma('ipad '); var Ja = Ga && va; var Ka = ma('ipod touch;'); var La = ma('iphone;') || ma('iphone '); var Ma = La || Ga || Ka; var Na = Ma && ba.search(/ os [456]_/) !== -1; Ma && ba.search(/ os [4-8]_/); Ma && ba.search(/ os [78]_/); Ma && ma('os 8_'); var Qa = Ma && ma('os 10_'); var Ra = ma('android'); var Sa = 0; Ra && (Sa = parseInt(ba.split('android')[1]) || 0); var Ta = Ra && Sa < 4; Ra && Sa >= 5 || ba.search(/android 4.4/)
  var Ua = Ra ? 'android' : Ma ? 'ios' : wa ? 'windows' : Ea ? 'mac' : 'other'; var Va = sa && !ca.XMLHttpRequest; var Wa = sa && !fa.querySelector; var Xa = sa && !fa.addEventListener; var Ya = sa && ma('msie 9'); var Za = sa && ma('msie 10'); var $a = sa && ma('rv:11'); var ab = Xa || Ya; var bb = ma('edge'); var cb = ma('qtweb'); var db = ma('ucbrowser'); var eb = ma('alipay') || Ra && db; var fb = ma('miuibrowser'); var gb = ma('micromessenger'); var hb = ma('mqqbrowser'); var ib = ma('baidubrowser'); var chrome = (ma('chrome') || ma('crios')) && !gb && !ib && !hb && !bb && !fb; var jb = chrome && ma('chromium'); var kb = chrome && !jb && (parseInt(ba.split('chrome/')[1]) > 30 ||
parseInt(ba.split('crios/')[1]) > 30); var lb = ma('firefox'); var mb = lb && parseInt(ba.split('firefox/')[1]) > 27; var nb = (Ea || Ma) && ma('safari') && ma('version/'); var ob = Ea && nb && parseInt(ba.split('version/')[1]) > 7; var pb = Ma && ma('aliapp'); var qb = Ma && (!hb && !db && !gb && !chrome && !lb && !nb || pb && !db); var rb = Ra || Ma || Da || ma('mobile'); var sb = 'ontouchstart' in fa; var tb = ca.navigator && ca.navigator.msPointerEnabled && !!ca.navigator.msMaxTouchPoints; var ub = ca.navigator && !!ca.navigator.maxTouchPoints; var vb = !sb && (ub || tb); var wb = sb || vb; var xb = (function () {
    if (!rb) {
      return ca.devicePixelRatio ||
1
    } var a = document.getElementsByTagName('meta'); if (window.parent && window.parent !== window) try { if (window.parent.location.origin === window.location.origin)a = window.parent.document.getElementsByTagName('meta'); else return 1 } catch (b) { return 1 } for (var c = a.length - 1; c >= 0; c -= 1) {
      if (a[c].name === 'viewport') {
        var c = a[c].content; var d; c.indexOf('initial-scale') !== -1 && (d = parseFloat(c.split('initial-scale=')[1])); a = c.indexOf('minimum-scale') !== -1 ? parseFloat(c.split('minimum-scale=')[1]) : 0; c = c.indexOf('maximum-scale') !== -1
          ? parseFloat(c.split('maximum-scale=')[1]) : Infinity; if (d) { if (c >= a) return d > c ? c : d < a ? a : d } else if (c >= a) return a >= 1 ? 1 : Math.min(c, 1); console && console.log && console.log('viewport\u53c2\u6570\u4e0d\u5408\u6cd5'); return null
      }
    }
  }()); var yb = va && (!rb || !!xb && xb >= 1); var zb = sa && 'transition' in ga.style; var Ab = !!fa.createElementNS && !!fa.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect; var Bb = fa.createElement('canvas'); var Cb = !(!Bb || !Bb.getContext); var Db = window.URL || window.webkitURL; var Eb = !0 !== window.disableWorker && !sa && !bb && !(db &&
Ra) && window.Worker && Db && Db.createObjectURL && window.Blob; var Fb = ''; var qa = ''; var Gb = 0; var Jb = window.forceWebGL ? { alpha: !0, antialias: !0, depth: !0 } : { alpha: !0, antialias: !0, depth: !0, failIfMajorPerformanceCaveat: !0, preserveDrawingBuffer: !0, stencil: !0 }; var Kb = (function () {
    if (!window.forceWebGL && (!Cb || !Eb || qb && pb && !db)) return !1; for (var a = ['webgl', 'experimental-webgl', 'moz-webgl'], b = null, c = 0; c < a.length; c += 1) {
      try { b = Bb.getContext(a[c], Jb) } catch (d) {} if (b) {
        if (b.drawingBufferWidth !== Bb.width || b.drawingBufferHeight !== Bb.height) break; if (window.forceWebGL) {
          return Fb =
a[c], Gb = Infinity, !0
        } if (!b.getShaderPrecisionFormat || !b.getParameter || !b.getExtension) break; Gb = b.getParameter(b.MAX_RENDERBUFFER_SIZE); var e = b.getParameter(b.MAX_VIEWPORT_DIMS); if (!e) break; Gb = Math.min(Gb, e[0], e[1]); nb && Ua === 'mac' && (Gb = Math.min(Gb, 4096)); e = Math.max(screen.width, screen.height); yb && (e *= Math.min(2, window.devicePixelRatio || 1)); if (e > Gb) break; if (b.getShaderPrecisionFormat(35632, 36338).precision < 23 || b.getShaderPrecisionFormat(35633, 36338).precision < 23) break; qa = b.getExtension('WEBGL_debug_renderer_info')
          ? b.getParameter(37446) : null; if ((b = pa()) && ra.indexOf(b) !== -1) break; Fb = a[c]; return !0
      }
    } return !1
  }()); var Lb = Kb && (kb || mb || ob) && (Ua === 'mac' || Ua === 'windows') && !rb; var Mb = !Cb || cb || Da || rb && lb || Ya || Na || Ja || Ka || Ta || ma('gt-n710') || za; var Nb = !Mb && !Lb; var Ob = Lb ? 'vw' : Mb ? 'd' : Nb ? 'dv' : 'v'; var Pb = ma('webkit'); var Qb = 'WebKitCSSMatrix' in ca && 'm11' in new window.WebKitCSSMatrix(); var Rb = 'MozPerspective' in ga.style; var Sb = 'OTransition' in ga.style; var Tb = zb || Qb || Rb || Sb; var Ub = void 0 !== config[8] ? config[8] : !0; var Vb = void 0 !== config[9] ? config[9] : !0; var Wb = void 0 !== config[10]
    ? config[10] : !0; var Xb = void 0 !== config[11] ? config[11] : !0; var Yb = void 0 !== config[12] ? config[12] : null; var Zb = !Ab && rb && Cb; var $b = !0; try { if (typeof ca.localStorage === 'undefined')$b = !1; else { var ac = (new Date()).getTime() + ''; ca.localStorage.setItem('_test', ac); ca.localStorage.getItem('_test') !== ac && ($b = !1); ca.localStorage.removeItem('_test') } } catch (bc) { $b = !1 } var cc = parseInt(ba.split('chrome/')[1]); var dc = Ub && Cb
  config.l = {
    Ora: Ga,
    Pra: La,
    size: La ? 100 : Ra ? 200 : 500,
    oz: Ea,
    Xza: wa,
    FD: Ma,
    aFa: Qa,
    Xl: Ra,
    Zla: Ta,
    G3: eb,
    Fz: Ua,
    ZH: ib,
    $va: hb,
    AE: nb,
    y$: gb,
    Es: sa,
    Bi: Va,
    sv: Wa,
    c5: Ya,
    b5: Za,
    Ie: Xa,
    e5: ab,
    Sra: $a,
    mpa: bb,
    Vra: sa && !$a,
    Sta: Fa,
    Gv: $b,
    Ni: dc && $b && Xb && !rb && chrome,
    kf: Yb,
    geolocation: rb || sa && !Xa || bb,
    lza: db,
    uL: db && !chrome,
    chrome: chrome,
    d3: !0,
    gR: lb,
    ba: rb,
    dua: rb && Pb,
    z6: rb && Qb,
    cua: rb && ca.opera,
    Lc: va,
    CL: xb,
    ja: yb,
    Wf: wb,
    B6: tb,
    GT: ub,
    J7: vb,
    nna: chrome && cc >= 57,
    ona: !rb && chrome && cc >= 64,
    w$: Pb,
    Tra: zb,
    x$: Qb,
    cqa: Rb,
    Wua: Sb,
    VH: Tb,
    To: Ab,
    il: Cb,
    KS: Eb,
    kA: Wb,
    Pf: Lb,
    t$: Fb,
    u$: Jb,
    XR: qa,
    Qta: Gb,
    yAa: !1,
    Up: Ub && !Mb,
    L1: Ub ? Ob : 'd',
    h2: Ub ? Kb : !1,
    fL: dc,
    np: Ub && Kb,
    mFa: Ub && (!Mb || Kb),
    tq: Vb && !!ca.WebSocket && !ib,
    ZFa: Zb,
    eva: Cb || Zb ? 'c' : 'd'
  }; var ec = config; config = void 0; var fc = { overlay: ['style'], 'AMap.IndoorMap': ['AMap.CustomLayer', 'cvector'], 'AMap.IndoorMap3D': ['Map3D'], 'AMap.MarkerList': ['AMap.TplUtils'], Map3D: ['vectorlayer', 'wgl', 'AMap.CustomLayer', 'rbush'], 'AMap.Heatmap': ['AMap.CustomLayer'], 'AMap.DistrictLayer': ['MVT'], vectorForeign: ['gridmap', 'MVT'], 'AMap.GltfLoader': ['AMap.CustomLayer', 'Map3D'], 'AMap.LabelsLayer': ['rbush', 'promise'] }
  window.AMap ? (window.AMap.version = '1585826872879', window.AMap.yL = { xM: function (a) { a(ec) } }) : window.AMap = { version: '1585826872879', yL: { xM: function (a) { a(ec) } } }; ec.Fk = '1585826872879'; ec.Qu = fc
  for (var gc = document.head || document.getElementsByTagName('head')[0], hc = '.vml{behavior:url(#default#VML);display:inline-block;position:absolute}.amap-custom{top:0;left:0;position:absolute}.amap-container img{max-width:none!important;max-height:none!important}.amap-container{touch-action:none;position:relative;overflow:hidden;background:#fcf9f2 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0AgMAAAC2uDcZAAAADFBMVEX////////////////1pQ5zAAAABHRSTlMAgP/AWuZC2AAAAVhJREFUeAFiYGAQYGDEQjAB2rcDC4BiGIqiU7abdKlO2QkeIClyPsDHweMKtOPHIJ1Op6/w7Y4fdqfT6VpndzqdrnV2p9PpWmd3Oj3qWndSoKp+2J1Op7vr7E6n07XO7nQ6XevsTqfTtc7udPo4/f787E6n0911dqfT6VpndzqdrnV2p9PpWmd3Ot27Ce8m6HS6u85dR6fTtU7r6HS61mkdnU7XOrvT6XTvJuxOp9PddXan0+laZ3c6na51dDpd67SOTqd7N+HdBJ1Od9e56+h0utZpHZ1O1zq70+l0rbM7nU73bsLudDrdXWd3Ol3rtI5Op2ud1tHpdK3TOjqd7t2EdxN0Ot1dZ3c6na51dqfT6VpndzqdrnV2p9Pp3k3Q6XR3nbuOTqdrndbR6XSt0zo6na51Wken072bsDudTnfX2Z1Op2ud3el0utbZnU7XOq2j0+t0uncTD1gO4zoT5doZAAAAAElFTkSuQmCC);-ms-touch-action:none}.amap-drags,.amap-layers{width:100%;height:100%;position:absolute;overflow:hidden}.amap-layers canvas{-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.amap-layer img{pointer-events:none}.amap-e,.amap-maps{width:100%;height:100%}.amap-maps,.amap-e,.amap-layers,.amap-tile,.amap-tile-container{position:absolute;left:0;top:0;overflow:hidden}.amap-context{position:absolute;left:0;top:0}.amap-overlays,.amap-markers,.amap-marker{position:absolute;left:0;top:0}.amap-layers{z-index:0}.amap-overlays{z-index:110;cursor:default}.amap-markers{z-index:120}.amap-controls{z-index:150}.amap-copyright{position:absolute;display:block!important;left:77px;height:16px;bottom:0;padding-bottom:3px;font-size:11px;font-family:Arial,sans-serif;z-index:160}.amap-logo{position:absolute;bottom:1px;left:1px;z-index:160;height:20px}.amap-logo img{width:73px!important;height:20px!important;border:0;vertical-align:baseline!important}.amap-icon{position:relative;z-index:1}.amap-icon img{position:absolute;z-index:-1}.amap-marker-label{position:absolute;z-index:2;border:1px solid blue;background-color:white;white-space:nowrap;cursor:default;padding:3px;font-size:12px;line-height:14px}.amap-info{position:absolute;left:0;z-index:140;width:320px}.amap-menu{position:absolute;z-index:140;_width:100px}.amap-info-close{position:absolute;right:5px;_right:12px;+right:11px;top:5px;_top:2px;+top:2px;color:#c3c3c3;text-decoration:none;font:bold 16px/14px Tahoma,Verdana,sans-serif;width:14px;height:14px}.amap-info-outer,.amap-menu-outer{box-shadow:0 1px 2px rgba(0,0,0,0.1);background:none repeat scroll 0 0 white;border-radius:2px;padding:1px;text-align:left}.amap-menu-outer:hover{box-shadow:0 1px 2px rgba(0,0,0,0.3)}.amap-info-contentContainer:hover .amap-info-outer{box-shadow:0 1px 2px rgba(0,0,0,0.3)}.amap-info-content{position:relative;background:#fff;padding:10px 18px 10px 10px;line-height:1.4;overflow:auto}.amap-marker-content{position:relative}.amap-info{_width:320px}.amap-menu{_width:100px}.amap-info-sharp-old{overflow:hidden;position:absolute;background-image:url(http://webapi.amap.com/images/arrows.png)}.bottom-center .amap-info-sharp-old{height:12px;margin:0 auto;width:20px;background-position:center 12px;top:100%;margin-top:-9px;left:50%;margin-left:-10px}.bottom-left .amap-info-sharp-old{height:12px;width:13px;background-position:-16px -46px;top:100%;margin-top:-9px}.bottom-right .amap-info-sharp-old{height:12px;width:13px;top:-1px;background-position:-56px -46px;left:100%;margin-left:-13px;top:100%;margin-top:-9px}.middle-left .amap-info-sharp-old{height:20px;width:12px;background-position:left;top:50%;margin-top:-10px;margin-left:-11px}.center .amap-info-sharp-old{display:none}.middle-right .amap-info-sharp-old{height:20px;margin-right:0;width:12px;background-position:right;left:100%;margin-left:-9px;top:50%;margin-top:-10px}.top-center .amap-info-sharp-old{height:12px;margin:0 auto;width:20px;background-position:top;top:0;margin-top:-3px;left:50%;margin-left:-10px}.top-left .amap-info-sharp-old{height:12px;width:13px;background-position:-16px -3px;top:0;margin-top:-3px}.top-right .amap-info-sharp-old{height:12px;width:13px;background-position:-56px -3px;left:100%;margin-left:-13px;top:0;margin-top:-3px}.amap-info-sharp{position:absolute}.bottom-center .amap-info-sharp{bottom:0;left:50%;margin-left:-8px;border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid #fff}.bottom-center .amap-info-sharp:after{position:absolute;content:"";margin-left:-8px;margin-top:-7px;border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid rgba(0,0,0,0.3);filter:blur(2px);z-index:-1}.amap-info-contentContainer:hover.bottom-center .amap-info-sharp:after{border-top:8px solid rgba(0,0,0,0.5)}.bottom-left .amap-info-sharp{border-color:transparent #fff;border-width:0 0 10px 10px;border-style:solid}.bottom-left .amap-info-sharp:after{position:absolute;content:"";margin-left:-10px;border-color:transparent rgba(0,0,0,0.3);border-width:0 0 10px 10px;border-style:solid;filter:blur(1px);z-index:-1}.amap-info-contentContainer:hover.bottom-left .amap-info-sharp:after{border-color:transparent rgba(0,0,0,0.5)}.bottom-left .amap-info-content{border-radius:2px 2px 2px 0}.bottom-right .amap-info-sharp{right:0;border-top:10px solid #fff;border-left:10px solid transparent}.bottom-right .amap-info-sharp:after{position:absolute;margin-top:-9px;margin-left:-10px;content:"";border-top:10px solid rgba(0,0,0,0.3);border-left:10px solid transparent;filter:blur(1px);z-index:-1}.amap-info-contentContainer:hover.bottom-right .amap-info-sharp:after{border-top:10px solid rgba(0,0,0,0.5)}.bottom-right .amap-info-content{border-radius:2px 2px 0 2px}.top-center .amap-info-sharp{top:0;left:50%;margin-left:-8px;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid #fff}.top-center .amap-info-sharp:after{position:absolute;content:"";margin-top:0;margin-left:-8px;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid rgba(0,0,0,0.3);filter:blur(1px);z-index:-1}.top-left .amap-info-sharp{left:0;top:0;border-bottom:10px solid #fff;border-right:10px solid transparent}.top-left .amap-info-sharp:after{position:absolute;content:"";margin-top:0;margin-left:0;border-bottom:10px solid rgba(0,0,0,0.3);border-right:10px solid transparent;filter:blur(1px);z-index:-1}.top-right .amap-info-sharp{right:0;top:0;border-bottom:10px solid #fff;border-left:10px solid transparent}.top-right .amap-info-sharp:after{position:absolute;content:"";margin-top:0;margin-left:-10px;border-bottom:10px solid rgba(0,0,0,0.3);border-left:10px solid transparent;filter:blur(1px);z-index:-1}.middle-right .amap-info-sharp{right:0;top:50%;margin-top:-8px;border-top:8px solid transparent;border-left:8px solid #fff;border-bottom:8px solid transparent}.middle-right .amap-info-sharp:after{position:absolute;content:"";margin-top:-8px;margin-left:-8px;border-top:8px solid transparent;border-left:8px solid rgba(0,0,0,0.3);border-bottom:8px solid transparent;filter:blur(1px);z-index:-1}.amap-info-contentContainer:hover.middle-right .amap-info-sharp:after{border-left:8px solid rgba(0,0,0,0.5)}.middle-left .amap-info-sharp{left:0;top:50%;margin-top:-8px;border-top:8px solid transparent;border-right:8px solid #fff;border-bottom:8px solid transparent}.middle-left .amap-info-sharp:after{position:absolute;content:"";margin-top:-8px;margin-left:0;border-top:8px solid transparent;border-right:8px solid rgba(0,0,0,0.3);border-bottom:8px solid transparent;filter:blur(1px);z-index:-1}.amap-info-contentContainer:hover.middle-left .amap-info-sharp:after{border-right:8px solid rgba(0,0,0,0.5)}.amap-info-contentContainer.top-left,.amap-info-contentContainer.top-center,.amap-info-contentContainer.top-right{padding-top:8px}.amap-info-contentContainer.bottom-left,.amap-info-contentContainer.bottom-center,.amap-info-contentContainer.bottom-right{padding-bottom:8px}.amap-info-contentContainer.middle-right{padding-right:8px}.amap-info-contentContainer.middle-left{padding-left:8px}.amap-menu-outer{margin:0;padding:0;list-style-type:none}ul.amap-menu-outer li{cursor:pointer;height:35px;line-height:35px;word-break:break-all;padding:0 10px;font-size:12px;white-space:nowrap}ul.amap-menu-outer li a{text-decoration:none;font-size:13px;margin:0 5px;color:#000;padding:5px 5px}ul.amap-menu-outer li:hover{background-color:#f3f3ee}.amap-overlay-text-container{display:block;width:auto;word-break:keep-all;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;background:#fff;padding:2px 3px;border:1px solid #ccc;border-radius:3px}.amap-overlay-text-container.amap-overlay-text-empty{display:none}.amap-info-content-ie8{border:1px solid #9c9c9c}'.replace(/url\((['"]?)(?:\.\.\/)+/g, 'url($1' +
ec[2].split(',')[0] + '/'), ic = null, jc = 0, kc = gc.childNodes.length; jc < kc; jc++) if (gc.childNodes[jc].nodeType === 1) { ic = gc.childNodes[jc]; break } if (hc) if (gc) { var lc = document.createElement('style'); lc.setAttribute('type', 'text/css'); lc.setAttribute('class', 'AMap.style'); lc.styleSheet ? lc.styleSheet.cssText = hc : lc.innerHTML = hc; ic ? gc.insertBefore(lc, ic) : gc.appendChild(lc) } else document.write("<style type='text/css'>" + hc + '</style>'); var g = g || { Da: { Le: 0, ir: [], Gj: {} } }; var B = { o: {}, control: {}, C: {} }; g.KDa = (function (a) { var b = Function; return function () { return (new b('return ' + a))() } }()); g.CLASS_NAME = 'AMap'; g.c = g.BuryPoint = {}; g.c.add = g.BuryPoint.add = function (a, b, c) { a.p5 || a.D || !(a = a.CLASS_NAME) || (a = a.replace('AMap.', ''), g.CA.jp(a, b, c)) }; var mc = { lang: 1, baseRender: 1, overlayRender: 1, viewMode: 1 }
  g.c.ya = g.BuryPoint.addOptions = function (a, b) { if (!a.Yua) if (b && (b.innerLayer || b.innerOverlay))a.p5 = !0; else { a.Yua = !0; var c = a.CLASS_NAME; if (c) { c = c.replace('AMap.', ''); g.CA.jp(c); b = b || {}; for (var d in b)b.hasOwnProperty(d) && (c === 'Map' && d in mc ? g.CA.jp(c, d, b[d]) : g.CA.jp(c, d)) } } }; g.ca = function () {}
  g.ca.extend = g.ca.extend = function (a) {
    function b () {} function c () {
      var a = this.initialize || this.A; a && a.apply(this, arguments); if (!d && this.Mi) {
        a = document.createElement('style'); a.setAttribute('type', 'text/css'); this.CLASS_NAME && a.setAttribute('class', this.CLASS_NAME); this.Mi = this.Mi.replace(/url\((['"]?)(?:\.\.\/)*/g, 'url($1' + g.r.Gb + '/'); a.styleSheet ? a.styleSheet.cssText = this.Mi : a.innerHTML = this.Mi; for (var b = document.head || document.getElementsByTagName('head')[0], c = null, e = 0, f = b.childNodes.length; e < f; e++) {
          if (b.childNodes[e].nodeType ===
1) { c = b.childNodes[e]; break }
        }c ? b.insertBefore(a, c) : b.appendChild(a)
      }d = !0
    } var d = !1; b.prototype = this.prototype; var e = new b(); e.constructor = c; c.prototype = e; c.prototype.Gh = c.prototype.super = function (a) { return a.callee.ma.apply(this, a) }; for (var f in this) this.hasOwnProperty(f) && f !== 'prototype' && (c[f] = this[f]); a.n9 && (g.extend(c, a.n9), a.n9 = null); a.ka && (g.extend.apply(null, [e].concat(a.ka)), a.ka = null); a.w && e.w && (a.w = g.extend({}, e.w, a.w)); var h = e.constructor.ssa; var k = {}; if (void 0 !== h) {
      for (f in h) {
        h.hasOwnProperty(f) &&
(k[h[f]] = f)
      }
    } for (f in a) if (Object.prototype.hasOwnProperty.call(a, f)) { var l = f; var m = f; h && k[f] && (m = k[f]); typeof a[l] === 'function' && typeof e[m] === 'function' && (a[l].ma = e[m]) }g.extend(e, a); a.toString && (e.toString = a.toString); c.ad = this.prototype; return c
  }; g.ca.Db = g.ca.include = function (a) { g.extend(this.prototype, a) }
  g.extend = function (a) { var b = Array.prototype.slice.call(arguments, 1); var c; var d; var e; var f; d = 0; for (e = b.length; d < e; d += 1) if (f = b[d] || {}, Object.assign)Object.assign(a, f); else for (c in f)Object.prototype.hasOwnProperty.call(f, c) && (a[c] = f[c]); return a }; g.ca.Wb = function (a) { for (var b in a) if (a.hasOwnProperty(b)) { var c = a[b]; if (typeof c === 'string') this.prototype[b] && (this.prototype[c] = this.prototype[b]); else for (var d = 0, e = c.length; d < e; d++) this.prototype[b] && (this.prototype[c[d]] = this.prototype[b]) } }; g.CA = {
    Gj: {},
    getKey: function (a, b) { a = a || ''; return void 0 !== b && a ? a + '@' + b : a },
    jp: function (a, b, c) { this.Gj[a] || (this.Gj[a] = {}); b = this.getKey(b, c); void 0 == this.Gj[a][b] && (this.Gj[a][b] = 0) },
    send: function () {
      var a = []; var b; for (b in this.Gj) if (this.Gj.hasOwnProperty(b)) { var c = this.Gj[b]; var d = []; var e; for (e in c)c.hasOwnProperty(e) && c[e] == 0 && (d.push(e), c[e] = 1); d.length && a.push(b + '~' + d.join(',')) }a.length && (a = ['type=nfl', 'k=' + g.r.key, 'm=' + (g.l.ba ? 1 : 0), 'pf=' + g.l.Fz, 'v=' + g.r.uo, 'branch=JSAPI', 'log=' + a.join('!')], a = g.r.pc + '://webapi.amap.com/count?' +
a.join('&'), new g.ib.yb(a))
    }
  }; setInterval(function () { g.CA.send() }, 1E4); g.va = {
    g: function (a, b, c, d, e) { if (this.te(a, b, c || this)) return this; var f = this.mf = this.mf || {}; f[a] = f[a] || []; e ? f[a].unshift({ vb: b, cf: c || this, Dj: d }) : f[a].push({ vb: b, cf: c || this, Dj: d }); return this },
    te: function (a, b, c) { var d = this.mf; if (b && c) { if (d && a in d && d[a]) for (var e = 0; e < d[a].length; e += 1) if (d[a][e].vb === b && d[a][e].cf === c) return !0; return !1 } return d && a in d && d[a] && d[a].length > 0 },
    G: function (a, b, c) {
      if (!this.te(a)) return this; var d = this.mf; if (d && d[a]) {
        for (var e = 0; e < d[a].length; e += 1) {
          if (!(d[a][e].vb !== b && b !==
'mv' || c && d[a][e].cf !== c)) { d[a].splice(e, 1); d[a].length || (d[a] = null); break }
        }
      } return this
    },
    gK: function (a, b) { if (!this.te(a)) return this; var c = this.mf; if (c && c[a]) for (var d = 0; d < c[a].length; d += 1) if (!b || c[a][d].cf === b) { c[a].splice(d, 1); c[a].length || (c[a] = null); break } return this },
    q: function (a, b) {
      if (!this.te(a)) return this; var c = { type: a }; void 0 !== b && (b instanceof Array ? (c = b.slice(0), c.type = a) : typeof b === 'string' || typeof b === 'number' || typeof b === 'boolean' ? c.value = b : g.a.IJ(b) ? c.value = b : c = g.extend(c, b)); for (var d =
[].concat(this.mf[a]), e = 0; e < d.length; e += 1)d[e].vb && (d[e].vb.call(d[e].cf || this, c), d[e] && d[e].Dj && this.mf[a] && this.mf[a].splice(e, 1)); return this
    },
    wi: function (a) { a ? this.mf && this.mf[a] && (this.mf[a] = null) : this.mf = null; return this }
  }; g.va.on || (g.va.on = g.va.g); g.va.off || (g.va.off = g.va.G); g.va.emit || (g.va.emit = g.va.q); g.$e = {
    set: function (a, b, c) { var d = this.Il; if (d && d[a]) { var d = d[a]; var e = 'set' + this.C4(a); if (d[e]) { var f = !1; !0 == d.D ? f = !0 : d.D = !0; d[e](b, c); f || (d.D = !1); c || this.FK(a, b) } else d.set(a, b, c) } else (this.De = this.De || {})[a] = b, c || this.FK(a, b) },
    C4: (function () { var a = {}; return function (b) { a[b] || (a[b] = b[0].toUpperCase() + b.substr(1)); return a[b] } }()),
    get: function (a, b, c) {
      var d; var e = this.Il; d = 'get' + this.C4(a); if (e && e[a]) return c = e[a], c[d] ? (a = !1, !0 == c.D ? a = !0 : c.D = !0, b = c[d](b), a || (c.D = !1), b) : c.get(a, b); if (!c && this[d]) {
        return a = !1, !0 ==
this.D ? a = !0 : this.D = !0, b = this[d](b), a || (this.D = !1), b
      } if (this.De && this.De.hasOwnProperty(a)) return this.De[a]
    },
    X: function (a, b, c) { this.Il || (this.Il = {}); this.Il[a] !== b && (b.g(a, function (b) { this.FK(a, b) }, this), this.Il[a] = b, c || this.FK(a)) },
    bf: function (a, b, c) { for (var d = 0; d < a.length; d += 1) this.X(a[d], b, !c) },
    yl: function (a) { this.Il && this.Il[a] && (this.Il[a].G(a, 'mv', this), this.Il[a] = void 0) },
    zl: function () { if (this.Il) for (var a in this.Il) this.Il.hasOwnProperty(a) && this.yl(a) },
    FK: function (a, b) {
      var c = a + 'Changed'
      if (this[c]) this[c](b); this.q(a, b)
    },
    qFa: function (a, b, c) { var d = new (g.ca.extend({ ka: [g.va, g.$e] }))(); d.fQ = function () { for (var b = !0, e = 0; e < a.length; e += 1)d.get(a[e]) || (b = !1); b && (d.zl(), c()) }; for (var e = 0; e < a.length; e += 1)d.X(a[e], b) },
    hf: function (a, b) { var c, d; for (c in a)a.hasOwnProperty(c) && (d = a[c], this.set(c, d, b)) }
  }; g.r = {
    localStorage: !0,
    UH: 500,
    ze: !0,
    Ee: { dark: '#202020', blue_night: '#090d20', test: '#033447', mapv: '#000001', techblue: '#000b11', insight: '#19212a', default: '#fcf9f2' },
    hK: { normal: 'normal', dark: 'dark', light: 'light', fresh: 'fresh', test: 'blue', blue_night: 'blue', mapv: 'darkblue', insight: 'grey' },
    key: 'ab3a789432f55b2af930a86fc6200447',
    pc: 'http',
    Rd: [115.423412, 39.442759, 117.514625, 41.060816, 116.405285, 39.904989],
    Yd: 'http://restapi.amap.com',
    Gb: 'http://webapi.amap.com',
    sK: 'http://gaode.com',
    Iv: 'http://m.amap.com',
    PD: 'http://webrd0{1,2,3,4}.is.autonavi.com/appmaptile?lang=[lang]&size=1&scale=1&style=8&x=[x]&y=[y]&z=[z]',
    WJ: 'http://wprd0{1,2,3,4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=7&x=[x]&y=[y]&z=[z]&scl=1&ltype=3',
    wU: 'http://webst0{1,2,3,4}.is.autonavi.com/appmaptile?style=6&x=[x]&y=[y]&z=[z]',
    SK: 'http://webst0{1,2,3,4}.is.autonavi.com/appmaptile?x=[x]&y=[y]&z=[z]&lang=zh_cn&size=1&scale=1&style=8',
    TK: 'http://wprd0{1,2,3,4}.is.autonavi.com/appmaptile?x=[x]&y=[y]&z=[z]&lang=zh_cn&size=1&scl=1&style=8&ltype=11',
    UE: 'http://wprd0{1,2,3,4}.is.autonavi.com/appmaptile?lang=[lang]&size=1&style=7&x=[x]&y=[y]&z=[z]',
    AL: 'http://vector.amap.com',
    zL: 'vdata.amap.com',
    cAa: 'ws',
    WI: 'http://a.amap.com/jsapi/static/image/',
    rr: 0
  }
  function nc (a) {
    g.ca.Qu = a.Qu; g.l = a.l; g.Kva = a[7]; a.l = null; g.r.Gb = a[2].split(',')[0]; g.r.Fk = a.Fk; g.r.QJ = a.QJ; var b = g.r.pc = g.r.Gb.split(':')[0]; b === 'https' && (g.r.cAa = 'wss', g.r.Yd = g.r.Yd.replace('http', 'https'), g.r.PD = g.r.PD.replace('http', 'https'), g.r.WJ = g.r.WJ.replace('http', 'https'), g.r.wU = g.r.wU.replace('http', 'https'), g.r.SK = g.r.SK.replace('http', 'https'), g.r.TK = g.r.TK.replace('http', 'https'), g.r.UE = g.r.UE.replace('http', 'https'), g.r.AL = g.r.AL.replace('http', 'https'), g.r.WI = g.r.WI.replace('http',
      'https')); var c = window.location.href; c.indexOf('http') !== 0 && window.parent && window.parent !== window && (c = window.parent.location.href); g.r.Wpa = c; c = encodeURIComponent(c); g.r.Rp = c; g.r.Hi = g.r.Gb + '/theme/v1.3/markers/' + (g.l.Lc ? 'b' : 'n'); var d = document.createElement('style'); d.type = 'text/css'; g.r.uoa = 'url(' + b + '://webapi.amap.com/theme/v1.3/openhand.cur),default'; var e = '.amap-container{cursor:' + g.r.uoa + ';}.amap-drag{cursor:url(' + b + '://webapi.amap.com/theme/v1.3/closedhand.cur),default;}'; d.styleSheet ? (b = function () {
      try {
        d.styleSheet.cssText =
e
      } catch (a) {}
    }, d.styleSheet.disabled ? setTimeout(b, 10) : b()) : d.appendChild(document.createTextNode(e)); (document.head || document.getElementsByTagName('head')[0]).appendChild(d); g.r.mode = Number(a[3]); g.r.Rd = a[1]; g.r.key = a[0]; g.r.uo = a[4]; g.r.Oc = a[5]; g.r.Jla = a[6]; g.r.UQ = a[13]; oc()
  }
  function oc () { try { if (window.localStorage) for (var a = window.localStorage.length; a >= 0; a -= 1) { var b = window.localStorage.key(a); if (b && b.slice(0, 6) === '_AMap_') { var c = window.localStorage.getItem(b); var c = JSON.parse(c || {}); b === '_AMap_anole' ? c.version !== g.l.kf && window.localStorage.removeItem(b) : b === '_AMap_data.tileKeys' ? c.vdataVer === g.l.kf && c.apiVer === g.r.Fk || window.localStorage.removeItem(b) : c.version !== g.r.Fk && window.localStorage.removeItem(b) } } } catch (d) {} }window.AMap && window.AMap.yL && window.AMap.yL.xM && window.AMap.yL.xM(nc); g.Nm = { Ou: Math.PI / 180, dwa: 180 / Math.PI, SQ: 6378137 }; (function () {
    function a (a) { return typeof a === 'undefined' ? '' : a }g.ci = {
      Zqa: function (b) {
        b.name = a(b.name); var c = [b.y, b.x, b.name]; if (g.l.ba) {
          var d = [g.r.Iv + '/callAPP?', 'src=jsapi_q']; d.push('&ios=' + encodeURIComponent('viewMap?sourceApplication=jsapi_q&dev=0&poiname=' + b.name + '&lat=' + b.y + '&lon=' + b.x)); d.push('&android=' + encodeURIComponent('androidamap?action=shorturl&q=' + c.join(',') + '&sourceApplication=jsapi_q')); d.push('&wp=' + encodeURIComponent('viewMap?sourceApplication=jsapi_q&dev=0&poiname=' + b.name + '&lat=' +
b.y + '&lon=' + b.x)); d.push('&mo=' + encodeURIComponent(g.r.Iv + '?q=' + c.join(',') + '&callapp=0&sourceApplication=jsapi_q')); return d.join('')
        } return g.r.sK + '?q=' + c.join(',') + '&src=jsapi_q'
      },
      o4: function (b) {
        b.name = a(b.name); b.address = a(b.address); b.x = a(b.x); b.y = a(b.y); var c = [b.id, b.y, b.x, b.name, b.address]; if (g.l.ba) {
          var d = [g.r.Iv + '/callAPP?', 'src=jsapi_p']; d.push('&ios=' + encodeURIComponent('multiPointShow?sourceApplication=jsapi_p&dev=0&q=' + [b.y, b.x, b.name, b.address, b.id].join() + '&title=' + b.name)); d.push('&android=' +
encodeURIComponent('androidamap?action=shorturl&p=' + c.join(',') + '&sourceApplication=jsapi_p')); d.push('&wp=' + encodeURIComponent('multiPointShow?sourceApplication=jsapi_p&dev=0&q=' + [b.y, b.x, b.name, b.address, b.id].join() + '&title=' + b.name)); return d.join('')
        } return g.r.sK + '?p=' + c.join(',') + '&src=jsapi_p'
      },
      m4: function (b) {
        if (g.l.ba) {
          var c = [g.r.Iv + '/callAPP?', 'src=jsapi_detail']; c.push('&ios=' + encodeURIComponent('viewPOIDetail?sourceApplication=jsapi_detail&poiid=' + b.id)); b.name = a(b.name); b.x = a(b.x); b.y =
a(b.y); c.push('&android=' + encodeURIComponent('androidamap?action=openFeature&featureName=PoiDetail&poiid=' + b.id + '&poiname=' + b.name + '&x=' + b.x + '&y=' + b.y + '&sourceApplication=jsapi_detail')); c.push('&wp=' + encodeURIComponent('viewPOIDetail?sourceApplication=jsapi_detail&poiid=' + b.id)); c.push('&mo=' + encodeURIComponent(g.r.Iv + '/detail/index/poiid=' + b.id + '&sourceApplication=jsapi_detail')); return c.join('')
        } return g.r.sK + '/detail/' + b.id + '?src=jsapi_detail'
      },
      OR: function (b) {
        b.sname = a(b.sname); b.sname === '' &&
(b.sname = '\u8d77\u70b9'); b.dname = a(b.dname); b.dname === '' && (b.dname = '\u7ec8\u70b9'); b.mcount = a(b.mcount); b.my = a(b.my); b.mx = a(b.mx); b.mname = a(b.mname); var c = [b.sy, b.sx, b.sname, b.dy, b.dx, b.dname, b.m, b.t, b.mcount, b.my, b.mx, b.mname]; if (g.l.ba) {
          var d = [g.r.Iv + '/callAPP?', 'src=jsapi_r_' + b.t]; d.push('&ios=' + encodeURIComponent('path?sourceApplication=jsapi_r_' + b.t + '&dev=0&slat=' + b.sy + '&slon=' + b.sx + '&sname=' + b.sname + '&dlat=' + b.dy + '&dlon=' + b.dx + '&dname=' + b.dname + '&m=' + b.m + '&t=' + b.t + '&vian=0&vialons=&vialats=&vianames='))
          var e = b.t; b.t === 0 ? e = 2 : b.t === 2 && (e = 4); d.push('&android=' + encodeURIComponent('androidamap://route?sourceApplication=jsapi_r_' + b.t + '&slat=' + b.sy + '&slon=' + b.sx + '&sname=' + b.sname + '&dlat=' + b.dy + '&dlon=' + b.dx + '&dname=' + b.dname + '&dev=0&' + b.m + '&t=' + e)); d.push('&wp=' + encodeURIComponent('path?sourceApplication=jsapi_r_' + b.t + '&dev=0&slat=' + b.sy + '&slon=' + b.sx + '&sname=' + b.sname + '&dlat=' + b.dy + '&dlon=' + b.dx + '&dname=' + b.dname + '&m=' + b.m + '&t=' + b.t + '&vian=0&vialons=&vialats=&vianames=')); d.push('&mo=' + encodeURIComponent(g.r.Iv +
'/?r=' + c.join(',') + '&callapp=0&sourceApplication=jsapi_r_' + b.t)); return d.join('')
        } return g.r.sK + '?r=' + c.join(',') + 'src=jsapi_r_' + b.t
      },
      nt: function (a) { g.l.ba ? window.location.href = a : window.open(a) }
    }
  })(); typeof Object.keys !== 'function' && (Object.keys = function (a) { var b = []; var c; for (c in a)a.hasOwnProperty(c) && b.push(c); return b }); g.a = {
    CLASS_NAME: 'AMap.Util',
    gL: [],
    Fa: 268435456,
    ap: [215440491, 106744817],
    gF: (function () { var a = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split(''); return function (b, c) { var d = []; var e; c = c || a.length; if (b) for (e = 0; e < b; e++)d[e] = a[0 | Math.random() * c]; else { var f; d[8] = d[13] = d[18] = d[23] = '-'; d[14] = '4'; for (e = 0; e < 36; e++)d[e] || (f = 0 | 16 * Math.random(), d[e] = a[e === 19 ? f & 3 | 8 : f]) } return d.join('') } }()),
    lD: {
      start: function (a) {
        a.startTime = new Date(); a.lt = []; var b = (new Date()).getTime(); a.id = requestAnimationFrame(function d () {
          var e =
(new Date()).getTime(); a.lt.push(e - b); b = e; a.id = requestAnimationFrame(d)
        })
      },
      cancel: function (a) { a.id && cancelAnimationFrame(a.id) },
      stop: function (a) { a.aoa = new Date() - a.startTime; this.cancel(a); a.lD = Math.round(1E3 / (a.aoa / (a.lt.length + 1))) }
    },
    z4: function (a, b, c) {
      var d = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : !1; if (a === b) return b; switch (arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 'linear') {
        case 'ease':c = g.Kw.II(0.25, 0.1, 0.25, 1)(c); break; case 'ease-in':c = g.Kw.II(0.42, 0, 1, 1)(c); break; case 'ease-out':c =
g.Kw.II(0, 0, 0.58, 1)(c); break; case 'ease-in-out':c = g.Kw.II(0.42, 0, 0.58, 1)(c)
      } var e = a + (b - a) * c; d && (e >>= 0); return e
    },
    createObjectURL: function (a) { var b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'text/javascript; charset=utf-8'; var c = null; try { c = (window.URL || window.webkitURL).createObjectURL(new Blob([a], { type: b })) } catch (d) { c = null } return c },
    revokeObjectURL: function (a) { (window.URL || window.webkitURL).revokeObjectURL(a) },
    HCa: function (a) { for (var b = {}, c = 0, d = a.length; c < d; c++)b[a[c]] = c; return b },
    qD: function (a) {
      var b =
{}; if (g.a.jk(a, 'object')) for (var c in a)a.hasOwnProperty(c) && (b[a[c]] = c); return b
    },
    yf: function (a, b) { for (var c = 0, d = b.length; c < d; c += 1)a.push(b[c]) },
    create: typeof Object.create === 'function' ? Object.create : function (a, b) { function c () {}c.prototype = a; var d = new c(); var e; for (e in b)b.hasOwnProperty(e) && (d[e] = b[e]); return d },
    cb: function (a) {
      if (typeof a === 'object' && a !== null) {
        if (a.O6 || this.jk(a, 'Float32Array') || this.jk(a, 'Uint16Array')) return a; var b = this.isArray(a) ? [] : {}; var c; for (c in a)a.hasOwnProperty(c) && (b[c] = g.a.cb(a[c]))
        return b
      } return a
    },
    C5: function (a) { return (a | 0) === a },
    Axa: typeof Object.setPrototypeOf === 'function' ? Object.setPrototypeOf : function (a, b) { for (var c in b)a[c] = b[c] },
    Sh: function (a) { return typeof a === 'function' },
    cma: function (a) { var b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'webgl'; if (!a) return a; for (var c = [], d = 0, e = a.length; d < e; d += 2) { var f = parseInt(a.substr(d, 2), 16); if (b === 'webgl' || b === 'rgba' && d === 0)f = this.Ac(f / 255, 3); c.push(f) }c.push(c.shift()); return c },
    Rs: function () {},
    keys: typeof Object.keys === 'function'
      ? Object.keys : function (a) { var b = []; var c; for (c in a)a.hasOwnProperty(c) && b.push(c); return b },
    map: function (a, b) { var c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null; var d = []; if (a && a.length)g.a.Rb(a, function () { for (var e = arguments.length, f = Array(e), h = 0; h < e; h++)f[h] = arguments[h]; d[f[1]] = b.apply(c || a, f) }); else return a; return d },
    forEach: function (a, b) { if (a && a.length) { var c = a.length; if (c > 0 && (b(a[0], 0), c > 1)) { b(a[1], 1); for (var d = 2; d < c; d++)b(a[d], d) } } },
    Rb: function (a, b) {
      var c = arguments.length > 2 && void 0 !==
arguments[2] ? arguments[2] : null; if (a && a.length) for (var d = 0, e = a.length; d < e && !1 !== b.call(c, a[d], d, a); d++);
    },
    find: function (a, b) { for (var c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, d = 0, e = a.length; d < e; d++) if (typeof b === 'function') { if (b.call(c, a[d], d, a)) return a[d] } else if (a[d] === b) return a[d]; return null },
    IJ: function (a) { return typeof HTMLElement === 'object' ? a instanceof HTMLElement : a && typeof a === 'object' && a.nodeType === 1 && typeof a.nodeName === 'string' },
    xw: function (a, b) {
      var c = 'ASDFGHJKLQWERTYUIO!sdfghjkleiu3~yr5-P&mq9`%zCN*b=8@^xpVM'
      var d; var e; (b || 'v5') > 'v5' ? (d = c.length, e = 512) : (d = 27, c = c.substr(0, 27), e = 333); var f, h, k, l, m; h = []; k = NaN; l = 0; for (m = a.length; l < m; l++)f = a[l], f = c.indexOf(f), isNaN(k) ? k = f * d : (h.push(k + f - e), k = NaN); return h
    },
    jxa: function (a, b) { for (var c = 1, c = b.length > 512 ? Math.round(Math.pow(b.length, 0.5)) : b.length, d = Math.ceil(b.length / c), e = 0; e < d; e += 1) { var f = c * e; var h = f + c; h > b.length && (h = b.length); for (;f < h; f += 1)a(b[f]) } },
    fDa: function (a) {
      if (/^rgba\(/.test(a)) return this.Xv(a); var b = a = this.pI(a); a[0] === '#' && (a = a.substring(1), a.length === 3 && (a =
a.replace(/./g, function (a) { return a + a })), b = this.Rr(a.length === 8 ? a : 'ff' + a)); return this.Xv(b)
    },
    pI: function () {
      var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ''; var a = a.toLowerCase(); var b = {
        aliceblue: '#f0f8ff',
        antiquewhite: '#faebd7',
        aqua: '#00ffff',
        aquamarine: '#7fffd4',
        azure: '#f0ffff',
        beige: '#f5f5dc',
        bisque: '#ffe4c4',
        black: '#000000',
        blanchedalmond: '#ffebcd',
        blue: '#0000ff',
        blueviolet: '#8a2be2',
        brown: '#a52a2a',
        burlywood: '#deb887',
        cadetblue: '#5f9ea0',
        chartreuse: '#7fff00',
        chocolate: '#d2691e',
        coral: '#ff7f50',
        cornflowerblue: '#6495ed',
        cornsilk: '#fff8dc',
        crimson: '#dc143c',
        cyan: '#00ffff',
        darkblue: '#00008b',
        darkcyan: '#008b8b',
        darkgoldenrod: '#b8860b',
        darkgray: '#a9a9a9',
        darkgreen: '#006400',
        darkkhaki: '#bdb76b',
        darkmagenta: '#8b008b',
        darkolivegreen: '#556b2f',
        darkorange: '#ff8c00',
        darkorchid: '#9932cc',
        darkred: '#8b0000',
        darksalmon: '#e9967a',
        darkseagreen: '#8fbc8f',
        darkslateblue: '#483d8b',
        darkslategray: '#2f4f4f',
        darkturquoise: '#00ced1',
        darkviolet: '#9400d3',
        deeppink: '#ff1493',
        deepskyblue: '#00bfff',
        dimgray: '#696969',
        dodgerblue: '#1e90ff',
        firebrick: '#b22222',
        floralwhite: '#fffaf0',
        forestgreen: '#228b22',
        fuchsia: '#ff00ff',
        gainsboro: '#dcdcdc',
        ghostwhite: '#f8f8ff',
        gold: '#ffd700',
        goldenrod: '#daa520',
        gray: '#808080',
        green: '#008000',
        greenyellow: '#adff2f',
        honeydew: '#f0fff0',
        hotpink: '#ff69b4',
        indianred: '#cd5c5c',
        indigo: '#4b0082',
        ivory: '#fffff0',
        khaki: '#f0e68c',
        lavender: '#e6e6fa',
        lavenderblush: '#fff0f5',
        lawngreen: '#7cfc00',
        lemonchiffon: '#fffacd',
        lightblue: '#add8e6',
        lightcoral: '#f08080',
        lightcyan: '#e0ffff',
        lightgoldenrodyellow: '#fafad2',
        lightgrey: '#d3d3d3',
        lightgreen: '#90ee90',
        lightpink: '#ffb6c1',
        lightsalmon: '#ffa07a',
        lightseagreen: '#20b2aa',
        lightskyblue: '#87cefa',
        lightslategray: '#778899',
        lightsteelblue: '#b0c4de',
        lightyellow: '#ffffe0',
        lime: '#00ff00',
        limegreen: '#32cd32',
        linen: '#faf0e6',
        magenta: '#ff00ff',
        maroon: '#800000',
        mediumaquamarine: '#66cdaa',
        mediumblue: '#0000cd',
        mediumorchid: '#ba55d3',
        mediumpurple: '#9370d8',
        mediumseagreen: '#3cb371',
        mediumslateblue: '#7b68ee',
        mediumspringgreen: '#00fa9a',
        mediumturquoise: '#48d1cc',
        mediumvioletred: '#c71585',
        midnightblue: '#191970',
        mintcream: '#f5fffa',
        mistyrose: '#ffe4e1',
        moccasin: '#ffe4b5',
        navajowhite: '#ffdead',
        navy: '#000080',
        oldlace: '#fdf5e6',
        olive: '#808000',
        olivedrab: '#6b8e23',
        orange: '#ffa500',
        orangered: '#ff4500',
        orchid: '#da70d6',
        palegoldenrod: '#eee8aa',
        palegreen: '#98fb98',
        paleturquoise: '#afeeee',
        palevioletred: '#d87093',
        papayawhip: '#ffefd5',
        peachpuff: '#ffdab9',
        peru: '#cd853f',
        pink: '#ffc0cb',
        plum: '#dda0dd',
        powderblue: '#b0e0e6',
        purple: '#800080',
        rebeccapurple: '#663399',
        red: '#ff0000',
        rosybrown: '#bc8f8f',
        royalblue: '#4169e1',
        saddlebrown: '#8b4513',
        salmon: '#fa8072',
        sandybrown: '#f4a460',
        seagreen: '#2e8b57',
        seashell: '#fff5ee',
        sienna: '#a0522d',
        silver: '#c0c0c0',
        skyblue: '#87ceeb',
        slateblue: '#6a5acd',
        slategray: '#708090',
        snow: '#fffafa',
        springgreen: '#00ff7f',
        steelblue: '#4682b4',
        tan: '#d2b48c',
        teal: '#008080',
        thistle: '#d8bfd8',
        tomato: '#ff6347',
        turquoise: '#40e0d0',
        violet: '#ee82ee',
        wheat: '#f5deb3',
        white: '#ffffff',
        whitesmoke: '#f5f5f5',
        yellow: '#ffff00',
        yellowgreen: '#9acd32'
      }; return typeof a === 'string' ? b[a.toLowerCase()]
        ? b[a.toLowerCase()] : a : a
    },
    JI: function (a, b, c) { var d, e; d = Math.floor(c / 2); e = c - d; d = (1 << d) - 1 << e; e = (1 << e) - 1; return [c, a & d | b & e, b & d | a & e] },
    KI: function (a) { return a ? encodeURIComponent(a) : '' },
    Vc: function (a, b, c, d) { c = a[b].i[c]; if (typeof c === 'undefined') return null; a = a[b].s; if (typeof c === 'number') return a[c]; for (;typeof c[d.toString()] === 'undefined' && !(d -= 1, d < 3););d = c[d.toString()]; return typeof d === 'number' ? a[d] : null },
    Xv: function (a) {
      a = a.split(','); a[0] = parseFloat(a[0].split('rgba(')[1]) / 255; a[1] = parseFloat(a[1]) / 255
      a[2] = parseFloat(a[2]) / 255; a[3] = parseFloat(a[3]); return a
    },
    Xwa: function (a) { a = a.split(','); a[0] = parseFloat(a[0].split('rgb(')[1]) / 255; a[1] = parseFloat(a[1]) / 255; a[2] = parseFloat(a[2]) / 255; return a },
    rU: function (a) { return 'rgba(' + 255 * a[0] + ',' + 255 * a[1] + ',' + 255 * a[2] + ',' + a[3] + ')' },
    Ina: function (a) { return this.rU(this.Zl(a)) },
    Zl: function (a) {
      if (a instanceof Array) return a.length == 3 && a.push(1), a; a = this.pI(a); if (a.indexOf('#') == 0) {
        if (a.length === 4) return a = a.substr(1).replace(/./g, function (a) { return a + a }), this.dt(a)
        if (a.length == 7) return this.dt(a.substr(1)); if (a.length == 9) return a = a.substr(1), this.$k(a.substr(6) + a.substr(0, 6))
      } else { if (a.indexOf('rgb(') == 0) return a = this.Xwa(a), a.push(1), a; if (a.indexOf('rgba(') == 0) return this.Xv(a) }
    },
    v8: function (a) { return g.a.Rr('ff' + a) },
    Rr: function (a) { for (var b = [], c = 0, d = a.length; c < d; c += 2)b.push(parseInt(a.substr(c, 2), 16)); b.push((b.shift() / 255).toFixed(2)); return 'rgba(' + b.join(',') + ')' },
    dt: function (a) { return g.a.$k('ff' + a) },
    $k: function (a) {
      for (var b = [], c = 0, d = a.length; c < d; c += 2) {
        b.push(parseInt(a.substr(c,
          2), 16) / 255)
      }b.push(b.shift()); return b
    },
    yh: function (a) { for (var b in a) if (a.hasOwnProperty(b)) return !1; return !0 },
    Do: function (a, b) { b >= 0 && a.splice(b, 1); return a },
    Xxa: function (a, b) { return a.startsWith ? a.startsWith(b) : a.substr(0, b.length) === b },
    zy: function (a, b) { var c = g.a.indexOf(a, b); return g.a.Do(a, c) },
    filter: function (a, b, c) { var d = []; g.a.Rb(a, function (a, f) { b.call(c, a, f) && d.push(a) }); return d },
    indexOf: function (a, b) {
      if (!a || !a.length) return -1; if (a.indexOf) return a.indexOf(b); for (var c = 0; c < a.length; c += 1) {
        if (a[c] ===
b) return c
      } return -1
    },
    fD: function (a, b) { return a.endsWith ? a.endsWith(b) : a.length < b.length ? !1 : a.substr(a.length - b.length) == b ? !0 : !1 },
    bind: (function () { var a = !1; Function.prototype.bind && (a = !0); return function (b, c) { var d = arguments.length > 2 ? Array.prototype.slice.call(arguments, 2) : null; return a ? d ? (d.unshift(c), b.bind.apply(b, d)) : b.bind(c) : function () { return b.apply(c, d || arguments) } } }()),
    tb: function (a, b) { b = b || {}; a.w = g.extend({}, a.w, b); return a.w },
    Ana: function (a, b, c) {
      return typeof b === 'function' ? this.OP(a, !0, this.wma(b,
        c, 1)) : this.OP(a, !0)
    },
    OP: function (a, b, c, d, e, f, h) {
      var k; c && (k = e ? c(a, d, e) : c(a)); if (void 0 !== k) return k; if (!this.H5(a)) return a; if (d = this.isArray(a)) { if (k = this.jsa(a), !b) return this.ema(a, k) } else { var l = Object.prototype.toString.call(a); var m = l == '[object Function]'; if (l == '[object Object]' || l == '[object Arguments]' || m && !e) { if (k = this.ksa(m ? {} : a), !b) return this.nma(k, a) } else return e ? a : {} }f || (f = []); h || (h = []); for (e = f.length; e--;) if (f[e] == a) return h[e]; f.push(a); h.push(k); (d ? this.fma : this.sma)(a, function (d, e) {
        k[e] =
g.a.OP(d, b, c, e, a, f, h)
      }); return k
    },
    nma: function (a, b) { return b == null ? a : this.qma(b, Object.keys(b), a) },
    H5: function (a) { var b = typeof a; return !!a && (b == 'object' || b == 'function') },
    jFa: function (a) { return !!a && typeof a === 'object' },
    hFa: function (a) { return typeof a === 'number' && a > -1 && a % 1 == 0 && a <= 9007199254740991 },
    jsa: function (a) { var b = a.length; var c = new a.constructor(b); b && typeof a[0] === 'string' && Object.hasOwnProperty.call(a, 'index') && (c.index = a.index, c.input = a.input); return c },
    ema: function (a, b) {
      var c = -1; var d = a.length; for (b ||
(b = Array(d)); ++c < d;)b[c] = a[c]; return b
    },
    ksa: function (a) { a = a.constructor; typeof a === 'function' && a instanceof a || (a = Object); return new a() },
    wma: function (a, b, c) { if (typeof a !== 'function') return this.rv; if (void 0 === b) return a; switch (c) { case 1:return function (c) { return a.call(b, c) }; case 3:return function (c, e, f) { return a.call(b, c, e, f) }; case 4:return function (c, e, f, h) { return a.call(b, c, e, f, h) }; case 5:return function (c, e, f, h, k) { return a.call(b, c, e, f, h, k) } } return function () { return a.apply(b, arguments) } },
    fma: function (a,
      b) { for (var c = -1, d = a.length; ++c < d && !1 !== b(a[c], c, a););return a },
    rv: function (a) { return a },
    boa: function (a) { return function (b, c, d) { var e = g.a.xya(b); d = d(b); for (var f = d.length, h = a ? f : -1; a ? h-- : ++h < f;) { var k = d[h]; if (!1 === c(e[k], k, e)) break } return b } },
    sma: function (a, b) { return g.a.boa()(a, b, Object.keys) },
    xya: function (a) { return g.a.H5(a) ? a : Object(a) },
    qma: function (a, b, c) { c || (c = {}); for (var d = -1, e = b.length; ++d < e;) { var f = b[d]; c[f] = a[f] } return c },
    r3: function () { return !1 },
    join: function (a, b) {
      if (a.join) return a.join(b)
      var c = []; var d; for (d in a)a.hasOwnProperty(d) && c.push(d + '=' + (a[d] || '')); return c.join(b)
    },
    a4: function (a, b) { return (a || '') + Math.round(Math.random() * Math.pow(10, b || 6)) },
    xb: (function () { var a = 0; return function (b) { b._amap_id || (a += 1, b._amap_id = a); return b._amap_id } }()),
    qpa: 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
    fg: Date.now ? function () { return Date.now() } : function () { return (new Date()).getTime() },
    ND: function (a, b, c, d) {
      var e; if (d) {
        var f = 0; var h; var k = this.fg; e = function () {
          h = k(); if (h - f < b) return !1; f = h; a.apply(c,
            arguments)
        }
      } else { var l, m, n; n = function () { l = !1; m && (e.apply(c, m), m = !1) }; e = function () { l ? m = arguments : (l = !0, a.apply(c, arguments), setTimeout(n, b)) } } return e
    },
    Ac: function (a, b) { if (a === a << 0) return a; var c = Math.pow(10, b || 0); return Math.round(parseFloat(a) * c) / c },
    isArray: Array.isArray ? Array.isArray : function (a) { return this.jk(a, 'array') },
    jk: function (a, b) { return Object.prototype.toString.call(a).split(' ')[1].slice(0, -1).toLowerCase() === b.toLowerCase() },
    ka: typeof Array.prototype.ka === 'function' ? function (a, b) { return a.ka(b) }
      : function (a, b) { return this.indexOf(a, b) !== -1 },
    r9: function (a) { var b = 0; if (a.length === 0) return b; for (var c, d = 0, e = a.length; d < e; d += 1)c = a.charCodeAt(d), b = (b << 5) - b + c, b &= b; return b },
    sDa: function (a, b) { b = b ? Math.ceil(parseInt(b.substr(6)) / 24) : 1; for (var c = '', d = 0, e = a.length; d < e; d++)c += String.fromCharCode((a.charCodeAt(d) - 256 - b + 65535) % 65535); return c },
    xoa: function (a, b) {
      var c = (a + '').slice(-2); var d = (b + '').slice(-2); a = a.slice(0, -2); b = b.slice(0, -2); var e = parseInt((d + c).slice(1)); var f = Math.ceil(e / 250) % 2 ? 1 : -1; var d = parseInt('1' +
d) / 3E3; a -= parseInt('1' + c) / 3E3 * f; b -= d * (e / 500 > 1 ? 1 : -1); return new g.U(parseFloat(a).toFixed(5), parseFloat(b).toFixed(5))
    },
    T6: function (a) { return typeof JSON !== 'undefined' && JSON.stringify ? g.a.r9(JSON.stringify(a)) : null },
    AHa: function (a, b) { if (b || !a.hasOwnProperty('_amap_hash')) { var c = g.a.T6(a); c && (a._amap_hash = c) } return a._amap_hash },
    iepngFix: function (a) {
      function b () { for (var a; c.length;)a = c.shift(), window.DD_belatedPNG.fixPng(a); d.IS = !0 } this.G7 || (this.G7 = [], this.IS = !1); var c = this.G7; var d = this; if (a.tagName.toLowerCase() === 'img')c.push(a)
      else { a = a.getElementsByTagName('*'); for (var e = 0; e < a.length; e += 1)c.push(a[e]) }window.DD_belatedPNG && this.IS ? setTimeout(function () { b() }, 100) : this.IS || g.sb.load('AMap.FixPng', b)
    },
    Ja: function (a) { if (g.a.isArray(a)) if (g.a.isArray(a[0])) for (var b = 0; b < a.length; b += 1)a[b] = g.a.Ja(a[b]); else if (b = typeof a[0], b === 'string' || b === 'number') return new g.U(a[0], a[1]); return a },
    eAa: function (a) { for (var b = [], c = 0, d = a.length; c < d; c += 1)b[c] = [a[c].x, a[c].y]; return b },
    Iq: function (a) {
      return g.a.isArray(a) ? new g.xd(a[0], a[1])
        : a
    },
    HP: function (a) { var b = a.type; var c = a.TU; var d = a.error; a = new g.ib.XMLHttpRequest(a.url, { Ed: void 0 === b ? 'GET' : b, H2: a.data, oU: 'text/plain' }); a.g('complete', function (a) { a = JSON.parse(a.data); c && c(a) }, this); a.g('error', function () { var a = { errmsg: 'REQUEST_FAILED' }; d && d(a) }, this) }
  };
  (function () {
    function a (a) { window.clearTimeout(a) } function b (a) { var b; var c; var d = ['webkit', 'moz', 'o', 'ms']; for (b = 0; b < d.length && !c; b += 1)c = window[d[b] + a]; return c } function c (a) { var b = +new Date(); var c = Math.max(0, (g.l.Xl ? 50 : 20) - (b - d)); d = b + c; return window.setTimeout(a, c) } var d = 0; var e = window.requestAnimationFrame || b('RequestAnimationFrame') || c; var f = window.cancelAnimationFrame || b('CancelAnimationFrame') || b('CancelRequestAnimationFrame') || a; g.a.Xc = function (a, b, c, d) {
      if (c)b ? g.a.bind(a, b).call(b, d) : a(); else {
        return e(function () {
          b
            ? g.a.bind(a, b).call(b, d) : a()
        })
      }
    }; g.a.ui = function (a) { a && f.call(window, a) }
  })(); g.a.pU = window.requestIdleCallback ? function (a, b) { return window.requestIdleCallback(a, b) } : function (a) { var b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; var c = g.a.fg(); return setTimeout(function () { a({ didTimeout: !1, timeRemaining: function () { return Math.max(0, 70 - (g.a.fg() - c)) } }) }, b.timeout || 0) }; g.a.dQ = window.cancelIdleCallback ? function (a) { return window.cancelIdleCallback(a) } : function (a) { clearTimeout(a) }; (function (a) {
    var b = 1; var c = {}; a.a.yxa = function (a, b) { if (c[a]) { var f = c[a]; f.GE = 1; f.result = b; if (f.pn) { for (var h = f.pn, k = 0, l = h.length; k < l; k++)h[k].call(null, b); f.pn = null } } }; a.a.wna = function (a) { c[a] = null }; a.a.Nza = function (a, b) { if (c[a]) { var f = c[a]; f.GE > 0 ? b(null, f.result) : (f.pn || (f.pn = []), f.pn.push(b)) } else b(null, a) }; a.a.IR = function (d, e) {
      var f = navigator.geolocation; if (!a.l.FD || document.location.protocol === 'https:') return d(null, f); var h; e && e.Oza && (h = 'f' + b++, c[h] = { GE: 0 }); var k = null; var l = !1; e && e.timeout && (k = setTimeout(function () {
        k =
void 0; d({ code: 3, info: 'TIME_OUT', message: 'Get geolocation time out.' }); l = !0
      }, e.timeout)); f.getCurrentPosition(function () { l || (clearTimeout(k), k = void 0, d(null, f)) }, function (b) { l || (clearTimeout(k), k = void 0, b.code === 2 && b.message.indexOf('permission') > 0 ? a.sb.load('AMap.GeoRemoteLoc', function () { d(null, a.maa, h) }) : d(null, f)) }, { timeout: 1E3 }); return h
    }
  })(g); (function (a) { var b = a.ca.extend({ ka: [a.va], A: function () {} }); a.Mj = new b() })(g); (function (a) {
    var b = a.ca.extend({
      ka: [a.va],
      A: function () { this.hga() },
      hga: function () { a.Mj && a.Mj.g('vecTileParsed.buildings', this.Ofa, this) },
      A5: function (a) { return a.map.yZ },
      Kqa: function (a) { return this.A5(a) ? a.map.TN : null },
      vxa: function (a, b) { if (b) { var e = b.map; e && (e.TN ? e.TN.toString() : '') !== (a ? a.toString() : '') && (e.TN = a || [], e.set('display', 0)) } },
      Q8: function (a, b) { if (b) { var e = b.map; e && e.yZ !== a && (e.yZ = a, e.set('display', 0)) } },
      NBa: function () {},
      uZ: function (a, b) {
        if (a) {
          for (var e = 0, f = a.length; e < f; e++) {
            a[e] && b.indexOf(a[e]) < 0 &&
b.push(a[e])
          }
        }
      },
      v3: function (b) { if (!b) return null; b = b.map.la; for (var d = 0, e = b.length; d < e; d++) if (a.o.hi && b[d] instanceof a.o.hi && b[d].ga && b[d].ga.length && (b[d].ga.indexOf('building') !== -1 || b[d].ga.indexOf('poilabel') !== -1) && b[d].La) { var f = b[d].S.get('tiles', null, !0); if (f && f.length) return b[d] } return null },
      hqa: function (a) { if (a = this.v3(a)) { if (a = a.S.get('tiles', null, !0))a = a[0]; else return null; if (!a || !a.length) return null; for (var b = [], e = 0, f = a.length; e < f; e++) { var h = a[e]; h.me && h.me.tf && this.uZ(h.me.tf, b) } return b } },
      Ofa: function (a) { if (a.op && a.op.me) { var b = a.op.me.tf; if (b) { var e = []; this.uZ(b, e); this.q('vecTileParsed.builds.found', { e2: e, op: a.op }) } } }
    }); a.Nj = new b()
  })(g); (function (a) {
    function b () { return { checkup: function () { var a = Array.prototype.slice.call(arguments, 0); a.pop()(null, a) } } } function c (a) { return { injectCode: function (b, c) { var d = null; var e = null; try { d = (new Function('self', b))(a) } catch (f) { console.error('error', e), e = f.toString() }c(e, d) } } } function d (a) {
      function b (c, d) {
        function e (a, b, c) { a = { bA: Date.now(), Qz: h, error: a, result: b, Eq: !1, el: !1 }; if (c) for (var f in c)c.hasOwnProperty(f) && (a[f] = c[f]); d(a) } var f = c.kS; var h = c.Qz; var l = c.pQ; var m = c.EC; var n = c.dma || []; var p = a._wkHandlers[f]; p ? p[l] ? m
          ? p[l].apply(p, n.concat(e)) : e(null, p[l].apply(p, n)) : e('Unknown cmd: ' + l) : e('Can not find handler for: ' + f)
      } var c = []; var d = null; var e = null; for (d in this._wkHandlers)d.indexOf('_def_') !== -1 && (e = this._wkHandlers.UFa = d); typeof this._wkHandlers[e].A === 'function' && this._wkHandlers[e].A.call(this._wkHandlers[e]); a.xu = function (a) { c.push.apply(c, a) }; a.addEventListener('message', function (d) {
        function e (b) {
          if (t) {
            t.push(b); var d = !!b.Eq; d || n++; b = n >= h || b.el; if (d || b) {
              d = t.length > 1 ? { Rwa: t } : t[0]; d.bA = Date.now(); d.iHa = p; if (c.length) {
                try {
                  a.postMessage(d,
                    c)
                } catch (f) { a.postMessage(d), console.error(f) }c.length = 0
              } else a.postMessage(d); t.length = 0; b && (e = t = null)
            }
          } else console.error('Seemed callback already sent!!', b, b.result.mc)
        } var f = d.data; d = f.Owa || [f]; for (var h = d.length, n = 0, p = Date.now() - f.bA, t = [], f = 0; f < h; f++)b(d[f], e)
      }, !1)
    } function e (d, h) {
      this.w = a.extend({ batchSend: !0, lazy: !1, libPolyfills: null }, h); this.Np = []; this.ZA = this.w.clientId || 'w' + f++; this.w.onReady && this.oT(this.w.onReady); this.oG = this.Qea(); if (typeof d === 'function') { var m = {}; m[this.oG] = d; d = m }d[e.WR] =
c; d[this.DY()] = b; this.FG = d; this.QB(null); this.w.lazy || this.ky(); a.Bra || !1 === this.w.hostWorker || (a.Bra = this); this.jo && this.jo.A && this.jo.A.call(this.jo)
    } var f = 1; var h = 1; a.extend(e, { WR: '_g_', Jxa: function (a) { if (!a.Yba) { var b = []; a.addEventListener('message', function (a) { a = a.data; a = a.Rwa || [a]; for (var c = 0, d = a.length; c < d; c++) { var e = a[c]; var f; a: { f = e.Qz; for (var h = !e.el, k = 0, v = b.length; k < v; k++) { var w = b[k]; if (f === w.Qz) { h || b.splice(k, 1); f = w; break a } }f = void 0 }f && f.EC(e.error, e.result, !0) } }, !1); a.Mba = b; a.Yba = !0 } } }); a.extend(e.prototype,
      {
        Qea: function () { return '_def_' + this.ZA },
        DY: function () { return '_cln_' + this.ZA },
        fka: function () { var a = Array.prototype.slice.call(arguments, 0); this.r0 = a; if (this.Qx) { for (var b = 0, c = this.Qx.length; b < c; b++) this.Qx[b].apply(null, a); this.Qx.length = 0 } },
        xu: function (a) { this.Xja && this.Np.push.apply(this.Np, a) },
        oT: function (a) { this.r0 ? a.apply(null, this.r0) : (this.Qx || (this.Qx = []), this.Qx.push(a)) },
        ky: function (b) {
          var c = this; if (!c.CX) {
            c.CX = !0; var d = function (d, e) { d && a.l.KS && console.warn(d); c.fka.call(c, d, e); b && b(d, e) }
            a.l.KS ? this.Tja(function (a, b) { b ? this.oga(b, function (a, c) { a ? d(a) : (this.QB(c), this.DP = c, this.Np.length = 0, this.jo = null, d(null, { uma: b, $za: c })) }) : d('Worker start failed!') }) : d('Worker not supported!')
          }
        },
        wf: function (b, c) {
          var d = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a.a.Rs; var f = this; b = b || f.oG; var h = {}; if (a.a.jk(c, 'object')) {
            var q = 'return {'; var r; for (r in c) if (c.hasOwnProperty(r)) var s = c[r]; var q = typeof s === 'function' ? q + ('\n\t' + r + ': ' + s.toString() + ',') : typeof s === 'object' ? q + ('\n\t' + r + ': ' + JSON.stringify(s) +
',') : q + ('\n\t' + r + ': "' + s + '",'); c = new Function(q + '\n}')
          }f.hX(b, c, h); f.QB(null, h); f.oT(function (a) { a ? d(a) : f.DP ? (a = f.JY(c, f.FN(f.ZA, b), !0), f.DP.sendMessage(e.WR + ':injectCode', a, function (a, b) { a || f.QB(f.DP, h); d(a, b) })) : d('Worker msger missing!!') })
        },
        FN: function (a, b) { if (!a || !b) throw Error('clientId or ns missing!!'); return a + '_' + b },
        nfa: function (a, b, c) {
          function d () { var b = Array.prototype.slice.call(arguments, 0); c.sendMessage.apply(c, [a].concat(b)) } var e = this; if (!c) {
            return function () {
              var a = b.apply(e.jo, arguments)
              e.CX || e.w.lazy === 'untilCall' && e.ky(); return a
            }
          } d._proxy2Worker = !0; return d
        },
        Pca: function (a) { var b = {}; var c; for (c in a)a.hasOwnProperty(c) && this.hX(c, a[c], b); return b },
        hX: function (a, b, c) { b = b.call(null, !1); for (var d in b)b.hasOwnProperty(d) && (c[a + ':' + d] = b[d], a === this.oG && (c[d] = b[d])) },
        QB: function (a, b) {
          if (!b) this.jo || (this.jo = this.Pca(this.FG)), b = this.jo; else if (this.jo) for (var c in b)b.hasOwnProperty(c) && (this.jo[c] = b[c]); for (c in b) {
            if (b.hasOwnProperty(c)) {
              var d = b[c]; typeof d === 'function' && (this[c] = this.nfa(c,
                d, a))
            }
          } this.Xja = !!a
        },
        JY: function (a, b) {
          var c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : !1; var d = a.toString(); var e; var d = d.replace(/^function([^\(]*)\(/, function () { e = '_prep_h' + h++; return 'function ' + e + '(' }); return e ? '\n\t\t\t\t' + d + "\n\t\t\t\tif (self._wkHandlers['" + b + "'] && " + !c + ") {\n\t\t\t\t\tthrow new Error('" + b + " already exists!')\n\t\t\t\t} else {\n\t\t\t\t\tif (" + c + " && self._wkHandlers['" + b + "']) {\n\t\t\t\t\t\tvar handlerFunObj = " + e + ".call(null, self) || {}\n\n\t\t\t\t\t\tif (typeof Object.assign === 'function') {\n\t\t\t\t\t\t\tObject.assign(self._wkHandlers['" +
b + "'], handlerFunObj)\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tfor (var key in handlerFunObj) {\n\t\t\t\t\t\t\t\tif (handlerFunObj.hasOwnProperty(key)) {\n\t\t\t\t\t\t\t\t\tself._wkHandlers['" + b + "'][key] = handlerFunObj[key]\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t} else {\n\t\t\t\t\t\tself._wkHandlers['" + b + "'] = " + e + '.call(null, self) || {}\t\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t' + e + ' = null;\n\t\t\t' : (console.error('No function match!!'), !1)
        },
        Tja: function (a) {
          var b = this.ZA; var c = []; var d
          for (d in this.FG) if (this.FG.hasOwnProperty(d)) { var f = this.JY(this.FG[d], this.FN(b, d)); f && c.push(f) }b = this.w.libPolyfills || []; d = 0; for (f = b.length; d < f; d++)b[d] = '(' + b[d].toString() + ')(self);'; var h = b.join(';\n') + ';\n' + c.join(';\n'); var c = this.w.hostWorker; var r = this; c && c !== r ? c.oT(function (b, c) { b ? a.call(r, b) : c.$za.sendMessage(e.WR + ':injectCode', h, function (b) { b ? a.call(r, b) : a.call(r, null, c.uma) }) }) : a.call(r, null, r.jla(h))
        },
        jla: function (b) {
          b = ['self._wkHandlers={};', b, '(' + d.toString() + ')(self)'].join(''); var c; try {
            var e =
a.a.createObjectURL(b); c = new Worker(e); setTimeout(function () { a.a.revokeObjectURL(e); e = null }, 5E3)
          } catch (f) { return } return c
        },
        Ida: function (b) { var c = 1; var d = b.Mba; var e = this; var f = !!e.w.batchSend; return function (h) { var r = Array.prototype.slice.call(arguments, 1); var s = typeof r[r.length - 1] === 'function' ? r.pop() : null; var u = e.ZA; var v = h.split(':'); var w = e.oG; v.length > 1 && (h = v[1], w = v[0]); r = { bA: a.a.fg(), kS: e.FN(u, w), EC: !!s, Qz: u + '_' + c++, pQ: h, dma: r }; s && d.push({ pQ: r.pQ, kS: r.kS, bA: r.bA, Qz: r.Qz, EC: s }); f ? e.rca(b, r) : e.Ox(b, r) } },
        Ox: function (a, b) {
          if (this.Np.length) {
            try {
              a.postMessage(b,
                this.Np)
            } catch (c) { a.postMessage(b), console.error(c) } this.Np.length = 0
          } else a.postMessage(b)
        },
        rca: function (b, c) { b.zO || (b.zO = []); b.zO.push(c); if (!b.i0) { var d = this; b.i0 = setTimeout(function () { b.i0 = null; var c = b.zO; c.length && (d.Ox(b, c.length === 1 ? c[0] : { bA: a.a.fg(), Owa: c }), c.length = 0) }, 0) } },
        ala: function (a) { var b = this; a.addEventListener('error', function (a) { console.error(a); b.QB(null) }, !1); e.Jxa(a) },
        oga: function (a, b) {
          var c = this; c.ala(a); var d = this.Ida(a); if (e.nda)b.call(c, null, { sendMessage: d }); else {
            e.nda = !0
            var f = [c.DY() + ':checkup', Math.random().toFixed(5) + '', Math.round(1E3 * Math.random()), !1, function (a, e) { var h = !0; if (a || !e || e.length !== f.length - 2)h = !1; else for (var k = 0, v = e.length; k < v; k++) if (e[k] !== f[k + 1]) { h = !1; break }h ? b.call(c, null, { sendMessage: d }) : (console.error(a), b.call(c, 'Self checkup failed!!')) }]; d.apply(c, f)
          }
        }
      }); a.LA = e
  })(g); (function () {
    if (!g.Ce) {
      g.Ce = { lf: {}, az: {} }; var a = g.Ce; var b = g.Ce.lf; var c = g.a; var d = g.r; b.start = function (b) { a.az[b.id] = { K: b.K, time: { n5: c.fg() }, Tma: function () { return c.fg() - this.time.n5 } } }; b.end = function (b) { var d = a.az[b.id]; var e = d.time; var d = c.bind(d.Tma, d); var l = b.index; var m = b.key; typeof b.Oc !== 'function' && (b.Oc = function () {}); if (void 0 === e[m]) void 0 === l ? e[m] = d() : (e[m] = [], e[m][l] = d()); else if (void 0 !== l && void 0 === e[m][l])e[m][l] = d(); else return b.Oc(Error('Duplicate Invoke')); b.Oc(null) }; b.push = function (b) {
        var c = a.az[b.id].time
        var d = b.key; var e = b.Gf; typeof b.Oc !== 'function' && (b.Oc = function () {}); if (void 0 === c[d])c[d] = e; else return b.Oc(Error('Duplicate Invoke')); b.Oc(null)
      }; b.send = function (b) {
        var c = d.pc + '://webapi.amap.com/count?'; var k = g.extend(e({ K: a.az[b.id].K }), b.params || {}); var l = g.a; b.params && b.params.rs && !b.params.type && (b = a.az[b.id].time, delete b.n5, k = g.extend(k, b)); b = []; for (var m in k)l.isArray(k[m]) ? b.push([m, k[m].join('-')].join('=')) : b.push([m, k[m]].join('=')); b.push('jl=' + (d.QJ ? 1 : 0)); if (l.jk(window.performance, 'performance') &&
l.jk(window.performance.getEntriesByType, 'function')) { var n = 0; var p = ['webapi.amap.com', 'jsapi-test.amap.test', 'localhost']; var q = ['/maps', '/css']; l.Rb(window.performance.getEntriesByType('resource'), function (a) { var b = void 0; var c = void 0; a.name.match(/:\/\/([^:?#/]+)/) && (b = RegExp.$1); a.name.match(/[^\/](\/[^/?#:]+)/) && (c = RegExp.$1); b && c && l.ka(p, b) && l.ka(q, c) && (n += parseInt(a.responseEnd - a.startTime)) }); n !== 0 && b.push('sd=' + n) } new g.ib.yb(c + b.join('&'))
      }; var e = function (a) {
        var b = g.l; a = g.j.N3(a.K); return {
          type: 'q',
          resolution: a.width + '*' + a.height,
          k: d.key,
          u: d.Rp,
          iw: b.Pf ? 1 : 0,
          cw: b.h2 ? 1 : 0,
          gc: b.XR,
          m: b.ba ? 1 : 0,
          cv: b.Up ? 1 : 0,
          pf: b.Fz,
          dpr: window.devicePixelRatio,
          screenwidth: screen.width,
          scale: b.CL || 0,
          detect: b.ja ? 1 : 0,
          v: d.uo
        }
      }
    }
  })(); (function () {
    if (!g.KL) {
      var a = g.a.qD({ r: 'Conf', extend: 'extend', l: 'Browser', xw: 'uncodeCoords' }); g.KL = function () {
        var b = new g.LA(function () {
          return {
            A: function () { this.px = { ok: 0, Rv: 0 }; this.Uk = {}; this.oo = []; this.Mp = {}; this.Wj = {}; this.Qt = 0; this.XZ = 500 },
            Bh: function (a, b) { var e = a.Ld; var f = a.Ke; var h = a.ga[0] === 'building'; (f && e !== this.px.Rv && this.px.Rv || !f && !h && e !== this.px.ok && this.px.ok) && this.Hla(!!f); f ? this.px.Rv = e : h || (this.px.ok = e); this.mta(a, b) },
            Hla: function (a) {
              if (a) this.cX(); else if (!a && Object.keys(this.Uk).length) {
                for (var b in this.Uk) {
                  this.Uk.hasOwnProperty(b) &&
(a = this.Uk[b], a.Lt || a.abort())
                }
              }
            },
            Hya: function () { this.Qt > this.XZ && this.bU(Object.keys(this.Wj).slice(0, Math.floor(this.XZ / 2))) },
            bU: function (a) { for (var b = 0, e = a.length; b < e; b++) delete this.Wj[a[b]]; this.Qt -= a.length },
            AQ: function (a) { var b = a.ga; a = a.Ke; var e = new XMLHttpRequest(); e.Lq = ''; e.yE = [(new Date()).getTime() + '_' + Math.random(), a ? 1 : 0, b.join('|')].join('-'); return e },
            S4: function (a, b, e) {
              var f = this; var h = a.Eb; var k = a.Ke; var l = []; var m = h.filter(function (a) { var b = f.Wj[a.key]; if (b) { if (b.PZ) return !0; l.push(a.key) } return !1 }); var n =
!1; if (m.length && ((n = m.length === h.length) || typeof b !== 'function' || b(a, m), !k)) { var p = []; m.forEach(function (a) { a = a.key; p.push.apply(p, f.Wj[a]); delete f.Wj[a] }); this.Qt -= m.length; this.Us(this.extend({}, a, { eF: p, Ld: a.Ld, jl: n }), e) }!k && l.length && this.bU(l); this.Hya(); return n
            },
            mta: function (a, b) {
              function e (e, f) {
                var m = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : !1; if (p.Uk[q.yE] || p.dga(q)) {
                  var n = e.split('|'); f && (n[0] = f + n[0]); var t = n; var x = ''; n[n.length - 1] && (x = n[n.length - 1], t = n.splice(0, n.length - 1)); if (k) {
                    for (var n =
0, y = t.length; n < y; n++) { if (t[n]) { var F = JSON.parse(t[n]); if (F.length) { var C = F[0].split('-').slice(0, -1).join('/'); p.Wj[C] ? p.Wj[C].push(F) : (p.Wj[C] = [F], p.Qt++); m && (p.Wj[C].PZ = !0) } } }
                  } else p.Us(p.extend({}, a, { eF: t, Ld: h, jl: m, CS: !0 }), b); return x
                }r || (p.Ll(l, b), r = !0)
              } var f = this; var h = a.Ld; var k = a.Ke; var l = a.Eb; var m = a.url; if (!this.S4(a, function (a, b) { var c = a.Eb; var d = a.url; var e = d.match(/&t=([^&]+)/)[1].split(';'); b.reverse().forEach(function (a) { a = c.indexOf(a); a !== -1 && e.splice(a, 1) }); a.url = d.replace(/&t=[^&]+/, '&t=' + e.join(';')) }, b)) {
                if (this.cC() &&
(this.cX(), k)) { this.Ll(l, b); return } var n = 0; var p = this; var q = this.AQ(a); k ? this.oo.push(q) : (this.Uk[q.yE] = q, q.Eb = l, q.Oc = b); var r = !1; q.onreadystatechange = function () {
                  if (q.readyState === 4 && q.status === 0)q.Lt || (q.Lt = !0, f.Ll(l, b), q.onreadystatechange = null, k ? f.w0(q) : delete f.Uk[q.yE]), q = null; else if (!q.Lt) {
                    if (q.readyState === 3) { var h = q.responseText.substring(n); q.Lq = e(h, q.Lq); n = q.responseText.length } else {
                      q.readyState === 4 && (h = q.responseText.substring(n), a.dh && (h += '|'), e(h, q.Lq, !0), q.Lq = '', k ? f.w0(q) : delete f.Uk[q.yE],
                      q = null)
                    }
                  }
                }; q.onerror = function () {}; q.open('GET', m, !0); q.send(); k && (q.O9 = l.map(function (a) { return a.key }))
              }
            },
            aE: function (a) {
              function b (d, p, r) {
                var s = [r, d, p].join('/'); d = e.filter(function (a) { return a.key === s })[0]; k > 18 && !n && (s += '/' + k); if (d && d.status !== 'loaded' && m.indexOf(t) !== -1) {
                  if (t === 'limg')p = h[1], d.qd = p, typeof p.b === 'string' && (p.b = w.dB(p.b)), r = '', (r = typeof p.u === 'object' ? p.u.url : p.u) && (p.u = { url: r, Dk: 'limg-' + d.key + '-' + f }); else {
                    p = {
                      Lg: d.ta,
                      Oi: s,
                      Pa: h,
                      Ed: t,
                      iy: a.Cu,
                      GD: t === 'building',
                      Di: t === 'poilabel' || t ===
'roadlabel' || t === 'building' && q
                    }; if (t === 'poilabel' || t === 'roadlabel')p.qd = d.qd; t === m[m.length - 1] && (d.status = 'loaded'); l.push(p)
                  }
                }
              } var e = a.Eb; var f = a.PS; var h = a.RC; var k = a.Ld; var l = a.Qc; var m = a.ga; var n = a.Pf; var p = a.$R; var q = a.ze; var r = h[0].split('-'); var s = parseInt(r[1]); var u = parseInt(r[2]); var v = parseInt(r[0]); var w = this; var t = r[3]; var r = Math.pow(2, v); v < 10 && (s <= p && b(s + r, u, v), s >= r - p && b(s - r, u, v)); b(s, u, v)
            },
            w0: function (a) { for (var b = this.oo.length - 1; b >= 0; b--) this.oo[b] === a && this.oo.splice(b, 1) },
            dga: function (a) {
              for (var b = 0, e = this.oo.length; b < e; b++) if (this.oo[b] === a) return !0
              return !1
            },
            cC: function () { return Object.keys(this.Uk).length ? !0 : !1 },
            cX: function () { if (this.oo.length) { for (var a = this.oo.length - 1; a >= 0; a--) { var b = this.oo[a]; b.Lt || b.abort(); b.O9 && this.bU(b.O9) } this.oo.length = 0 } },
            Ll: function (a, b) { b(null, { Eb: a, I5: !0, disabled: this.disabled }, { el: !0 }) }
          }
        }, { batchSend: !1 }); b.wf(null, new Function('\n     return {\n      ' + a.Conf + ': ' + JSON.stringify(g.r) + ',\n      ' + a.extend + ': ' + g.extend.toString() + ',\n      ' + a.Browser + ': ' + JSON.stringify(g.l) + ',\n      ' + a.uncodeCoords + ': ' +
g.a.xw.toString() + '\n     }')); return b
      }
    }
  })(); g.j = {
    CLASS_NAME: 'DomUtil',
    get: function (a) { return typeof a === 'string' ? document.getElementById(a) : a },
    ID: function (a, b, c) { return a.parentNode == b ? !0 : a.parentNode && a.parentNode !== document.body && !g.j.An(a.parentNode, c) ? g.j.ID(a.parentNode, b) : !1 },
    Io: function (a) {
      if (!a) return [0, 0]; var b = a.offsetWidth; var c = a.offsetHeight; b && c || !a.childNodes[0] || (b = b || a.childNodes[0].offsetWidth, c = c || a.childNodes[0].offsetHeight); window.opera && (b = Math.max(b, a.childNodes[0].scrollWidth), c = Math.max(c, a.childNodes[0].scrollHeight))
      return [b, c]
    },
    EFa: function (a, b) { var c = document.head || document.getElementsByTagName('head')[0]; if (c) { var d = document.createElement('link'); d.setAttribute('rel', 'stylesheet'); d.setAttribute('type', 'text/css'); d.setAttribute('href', a); b ? c.appendChild(d) : c.insertBefore(d, c.firstChild) } else document.write("<link rel='stylesheet' href='" + a + "'/>") },
    Vc: function (a, b) {
      var c = a.style[b]; !c && a.currentStyle && (c = a.currentStyle[b]); c && c !== 'auto' || !document.defaultView || (c = (c = document.defaultView.getComputedStyle(a,
        null)) ? c[b] : null); c && c !== 'auto' || b !== 'height' || (c = a.clientHeight + 'px'); c && c !== 'auto' || b !== 'width' || (c = a.clientWidth + 'px'); return c === 'auto' ? null : c
    },
    qJ: function (a) { if (a) return new g.xd(a.clientWidth || document.body.clientWidth, a.clientHeight || (g.l.Es ? document.compatMode === 'CSS1Compat' ? document.documentElement.clientHeight : document.body.clientHeight : document.body.clientHeight), !0) },
    N3: function (a) { return new g.xd(a.clientWidth, a.clientHeight) },
    VR: function (a) {
      var b = 0; var c = 0; var d = a; var e = document.body; var f = document.documentElement
      var h; var k = g.l.sv; do { b += d.offsetTop || 0; c += d.offsetLeft || 0; b += parseInt(g.j.Vc(d, 'borderTopWidth'), 10) || 0; c += parseInt(g.j.Vc(d, 'borderLeftWidth'), 10) || 0; h = g.j.Vc(d, 'position'); if (d.offsetParent === e && h === 'absolute') break; if (h === 'fixed') { b += e.scrollTop || f.scrollTop || 0; c += e.scrollLeft || f.scrollLeft || 0; break }d = d.offsetParent } while (d);d = a; do {
        if (d === e) break; b -= d.scrollTop || 0; c -= d.scrollLeft || 0; g.j.Qoa() || !g.l.w$ && !k || (c += d.scrollWidth - d.clientWidth, k && g.j.Vc(d, 'overflow-y') !== 'hidden' && g.j.Vc(d, 'overflow') !== 'hidden' &&
(c += 17)); d = d.parentNode
      } while (d);return new g.H(c, b)
    },
    Qoa: function () { g.j.bea || (g.j.bea = !0, g.j.aea = g.j.Vc(document.body, 'direction') === 'ltr'); return g.j.aea },
    create: function (a, b, c, d) { a = document.createElement(a); c && (a.className = c); b && (d && d === 'before' ? b.insertBefore(a, b.firstChild) : b.appendChild(a)); return a },
    V2: function () { document.selection && document.selection.empty && document.selection.empty(); this.$ia || (this.$ia = document.onselectstart, document.onselectstart = g.a.r3) },
    j3: function () {},
    Aya: function (a,
      b, c) { c ? this.Va(a, b) : this.eb(a, b) },
    An: function (a, b) { if (a && b) return a.className.length > 0 && RegExp('(^|\\s)' + b + '(\\s|$)').test(a.className) },
    Va: function (a, b) { a && b && (a.classList && a.classList.add ? a.classList.add(b) : g.j.An(a, b) || (a.className += (a.className ? ' ' : '') + b)) },
    oxa: function (a, b) { a && (a.className = b || '') },
    eb: function (a, b) { function c (a, c) { return c === b ? '' : a }a && b && (a.classList && a.classList.remove ? a.classList.remove(b) : a.className = a.className.replace(/(\S+)\s*/g, c).replace(/(^\s+|\s+$)/, '')) },
    j4: function (a,
      b) { return b === 1 ? '' : 'opacity' in a.style ? 'opacity:' + b : document.documentMode >= 8 ? "-ms-filter:'progid:DXImageTransform.Microsoft.Alpha(opacity=" + Math.ceil(100 * b) + ")'" : 'filter:alpha(opacity=' + Math.ceil(100 * b) + ')' },
    Vq: function (a, b) { if (a.style) if ('opacity' in a.style)a.style.opacity = b; else if ('filter' in a.style) { var c = Math.round(100 * b); a.style.filter = ''; c !== 100 && (a.style.filter = ' progid:DXImageTransform.Microsoft.Alpha(opacity=' + c + ')') } },
    XU: function (a) {
      for (var b = document.documentElement.style, c = 0; c < a.length; c +=
1) if (a[c] in b) return a[c]; return !1
    },
    A4: function (a) { var b = g.l.x$; return 'translate' + (b ? '3d' : '') + '(' + a.x + 'px,' + a.y + 'px' + ((b ? ',0' : '') + ')') },
    DEa: function (a, b) { return g.j.A4(b.add(b.Md(-1 * a))) + (' scale(' + a + ') ') },
    U8: function (a, b, c) { a.aj = b; !c && g.l.VH ? (b = g.j.A4(b), c = a.style[g.j.tg].split('rotate'), c.length > 1 ? (c[0] = b, a.style[g.j.tg] = c.join('rotate')) : a.style[g.j.tg] = b, g.l.z6 && (a.style.WebkitBackfaceVisibility = 'hidden')) : (a.style.left = b.x + 'px', a.style.top = b.y + 'px') },
    Ud: function (a) {
      a.aj || (a.aj = a.style.left
        ? new g.H(parseInt(a.style.left), parseInt(a.style.top)) : new g.H(0, 0)); return a.aj
    },
    rHa: function (a, b) { a = a instanceof Array ? a : [a]; for (var c = 0; c < a.length; c += 1)a[c].style.cssText = b },
    N8: function (a, b) { b[b.length - 1] !== ';' && (b += ';'); return b.toLowerCase() !== a.style.cssText.replace(/ /g, '').toLowerCase() ? (a.style.cssText = b, !0) : !1 },
    Xa: function (a, b) { a = a instanceof Array ? a : [a]; for (var c = 0; c < a.length; c += 1) for (var d in b)b.hasOwnProperty(d) && (a[c].style[d] = b[d]); return this },
    Kz: function (a) { for (;a.childNodes.length;)a.removeChild(a.childNodes[0]) },
    remove: function (a) { a && a.parentNode && a.parentNode.removeChild(a) },
    rotate: function (a, b, c) { var d = g.j.tg; c = c || { x: a.clientWidth / 2, y: a.clientHeight / 2 }; d ? (a.style[d] = '' + (' rotate(' + b + 'deg)'), a.style[g.j.pt[d] + '-origin'] = c.x + 'px ' + c.y + 'px') : (d = Math.cos(b * Math.PI / 180), b = Math.sin(b * Math.PI / 180), a.style.filter = 'progid:DXImageTransform.Microsoft.Matrix()', a.filters.length > 0 && (a = a.filters.item(0), a.Dx = -c.x * d + c.y * b + c.x, a.Dy = -c.x * b - c.y * d + c.y, a.M11 = a.M22 = d, a.M12 = -(a.M21 = b))) },
    w4: function (a, b, c) {
      var d = g.j.tg; c = c ||
{ x: a.clientWidth / 2, y: a.clientHeight / 2 }; return d ? g.j.pt[d] + ':' + ('' + (' rotate(' + b + 'deg)')) + ';' + (g.j.pt[d] + '-origin:' + c.x + 'px ' + c.y + 'px') : ''
    },
    Am: function (a, b, c) { a.width = b; a.height = c },
    getElementsByClassName: function (a, b, c) { b = b || '*'; c = c || document; if (c.getElementsByClassName) return c.getElementsByClassName(a); b = c.getElementsByTagName(b); a = RegExp('(^|\\s)' + a + '(\\s|$)'); c = []; for (var d = 0, e; d < b.length; d++)e = b[d], a.test(e.className) && c.push(e); return c },
    fillText: function (a, b) {
      if (a) {
        return void 0 !== a.textContent
          ? a.textContent = b : void 0 !== a.innerText ? a.innerText = b : a.innerHTML = b, a
      }
    }
  };
  (function () { var a = g.j.XU(['userSelect', 'WebkitUserSelect', 'OUserSelect', 'MozUserSelect', 'msUserSelect']); var b; g.extend(g.j, { V2: function () { g.F.g(window, 'selectstart', g.F.preventDefault); if (a) { var c = document.documentElement.style; c[a] !== 'none' && (b = c[a], c[a] = 'none') } }, j3: function () { g.F.G(window, 'selectstart', g.F.preventDefault); a && b !== 'none' && (document.documentElement.style[a] = b, b = 'none') }, Ioa: function () { g.F.g(window, 'dragstart', g.F.preventDefault) }, spa: function () { g.F.G(window, 'dragstart', g.F.preventDefault) } }) })()
  g.j.tg = g.j.XU(['WebkitTransform', 'OTransform', 'MozTransform', 'msTransform', 'transform']); g.j.pt = { transform: 'transform', WebkitTransform: '-webkit-transform', OTransform: '-o-transform', MozTransform: '-moz-transform', msTransform: '-ms-transform' }; g.j.LF = g.j.XU(['webkitTransition', 'transition', 'OTransition', 'MozTransition', 'msTransition']); g.j.$Aa = g.j.LF === 'webkitTransition' || g.j.LF === 'OTransition' ? g.j.LF + 'End' : 'transitionend'; g.F = {
    g: function (a, b, c, d) {
      function e (b) { b = b || window.event; b.target = b.target || b.srcElement; return c.call(d || a, b, k) } var f = g.a.xb(a) + '_' + g.a.xb(c) + '_' + g.a.xb(d || a); var h = b + f; if (a[h]) return this; var k = b; g.l.gR && b === 'mousewheel' && (b = 'DOMMouseScroll'); if (g.l.Es && (b === 'mouseover' || b === 'mouseout')) { var l = e; b = b === 'mouseover' ? 'mouseenter' : 'mouseleave'; e = function (a) { l(a) } } if (g.l.J7 && b.indexOf('touch') === 0) return a[h] = e, this.Pla(a, b, e, f); g.l.Wf && b === 'dblclick' && this.Nla && this.Nla(a, e, f); 'addEventListener' in a ? a.addEventListener(b,
        e, !1) : 'attachEvent' in a ? a.attachEvent('on' + b, e) : a['on' + b] = e; a[h] = e; return this
    },
    Dj: function (a, b, c, d) { var e = this; this.g(a, b, function h (k) { e.G(a, b, h, d); return c.call(d || a, k || window.event, b) }, d) },
    G: function (a, b, c, d) {
      c = g.a.xb(a) + '_' + g.a.xb(c) + '_' + g.a.xb(d || a); d = b + c; var e = a[d]; g.l.gR && b === 'mousewheel' && (b = 'DOMMouseScroll'); !g.l.Es || b !== 'mouseover' && b !== 'mouseout' || (b = b === 'mouseover' ? 'mouseenter' : 'mouseleave'); g.l.J7 && b.indexOf('touch') > -1 ? this.uwa(a, b, c) : g.l.Wf && b === 'dblclick' && this.qwa ? this.qwa(a, c)
        : 'removeEventListener' in a ? a.removeEventListener(b, e, !1) : 'detachEvent' in a && b.indexOf('touch') === -1 ? e && a.detachEvent('on' + b, e) : a['on' + b] = null; a[d] = void 0; return this
    },
    xHa: function (a, b) { var c = document.createEvent('MouseEvents'); c.initMouseEvent(a, !0, !0, window, 1, b.screenX, b.screenY, b.clientX, b.clientY, !1, !1, !1, !1, 0, null); b.target.dispatchEvent(c) },
    Ula: function (a) { a.af = 'info'; g.l.Ie && g.F.stopPropagation(a) },
    stopPropagation: function (a) { a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0; return this },
    Yxa: function (a) { var b = g.F.Ula; g.l.Wf && (g.F.g(a, 'touchstart', b, this), g.F.g(a, 'touchmove', b, this), g.F.g(a, 'touchend', b, this)); g.l.ba || (g.F.g(a, 'mousedown', b, this), g.F.g(a, 'mouseup', b, this), g.F.g(a, 'mousemove', b, this), g.F.g(a, 'mousewheel', b, this)); g.l.GT && (g.F.g(a, 'pointerdown', b, this), g.F.g(a, 'pointerup', b, this), g.F.g(a, 'pointermove', b, this)); g.l.B6 && (g.F.g(a, 'MSPointerDown', b, this), g.F.g(a, 'MSPointerUp', b, this), g.F.g(a, 'MSPointerMove', b, this)) },
    preventDefault: function (a) {
      a.preventDefault ? a.preventDefault()
        : a.returnValue = !1; return this
    },
    stop: function (a) { return g.F.preventDefault(a).stopPropagation(a) },
    nxa: function (a) { return a && a.getBoundingClientRect ? (a.tM = a.getBoundingClientRect(), a.QW = [a.clientLeft, a.clientTop], !0) : !1 },
    pza: function (a) { a.tM && (a.tM = null, a.QW = null) },
    Hpa: function (a, b) { var c = b.tM || b.getBoundingClientRect(); var d = b.QW || [b.clientLeft, b.clientTop]; return new g.H(a.clientX - c.left - d[0], a.clientY - c.top - d[1]) },
    mm: function (a, b) {
      if (b && b.getBoundingClientRect) return this.Hpa(a, b); var c = document.body
      var d = document.documentElement; var c = new g.H(g.l.Wf ? a.pageX : a.clientX + (c.scrollLeft || d.scrollLeft), g.l.Wf ? a.pageY : a.clientY + (c.scrollTop || d.scrollTop)); return b ? c.$a(g.j.VR(b)) : c
    },
    F5: function (a) { return a.which === 1 || a.button === 0 || a.button === 1 }
  }; g.extend(g.F, {
    yO: [],
    a_: !1,
    Pla: function (a, b, c, d) { switch (b) { case 'touchstart':return this.Sla(a, b, c, d); case 'touchend':return this.Qla(a, b, c, d); case 'touchmove':return this.Rla(a, b, c, d) } },
    Lo: function (a) { if (g.l.GT) return a; switch (a) { case 'pointerdown':return 'MSPointerDown'; case 'pointerup':return 'MSPointerUp'; case 'pointercancel':return 'MSPointerCancel'; case 'pointermove':return 'MSPointerMove' } },
    Sla: function (a, b, c, d) {
      function e (a) {
        for (var b = !1, d = 0; d < f.length; d += 1) {
          if (f[d].pointerId === a.pointerId) {
            b = !0
            break
          }
        }b || f.push(a); a.touches = f.slice(); a.changedTouches = [a]; c(a)
      } var f = this.yO; a['_amap_touchstart' + d] = e; a.addEventListener(this.Lo('pointerdown'), e, !1); this.a_ || (a = function (a) { for (var b = 0; b < f.length; b += 1) if (f[b].pointerId === a.pointerId) { f.splice(b, 1); break } }, document.documentElement.addEventListener(this.Lo('pointerup'), a, !1), document.documentElement.addEventListener(this.Lo('pointercancel'), a, !1), this.a_ = !0); return this
    },
    Rla: function (a, b, c, d) {
      function e (a) {
        if (a.pointerType !== a.MSPOINTER_TYPE_MOUSE ||
a.buttons !== 0) { for (var b = 0; b < f.length; b += 1) if (f[b].pointerId === a.pointerId) { f[b] = a; break }a.touches = f.slice(); a.changedTouches = [a]; c(a) }
      } var f = this.yO; a['_amap_touchmove' + d] = e; a.addEventListener(this.Lo('pointermove'), e, !1); return this
    },
    Qla: function (a, b, c, d) {
      function e (a) { for (var b = 0; b < f.length; b += 1) if (f[b].pointerId === a.pointerId) { f.splice(b, 1); break }a.touches = f.slice(); a.changedTouches = [a]; c(a) } var f = this.yO; a['_amap_touchend' + d] = e; a.addEventListener(this.Lo('pointerup'), e, !1); a.addEventListener(this.Lo('pointercancel'),
        e, !1); return this
    },
    uwa: function (a, b, c) { c = a['_amap_' + b + c]; switch (b) { case 'touchstart':a.removeEventListener(this.Lo('pointerdown'), c, !1); break; case 'touchmove':a.removeEventListener(this.Lo('pointermove'), c, !1); break; case 'touchend':a.removeEventListener(this.Lo('pointerup'), c, !1), a.removeEventListener(this.Lo('pointercancel'), c, !1) } return this }
  }); (function () {
    function a (a) { var b = a.target || a.srcElement; b.ZW && f(b.ZW); b.ZW = e(function () { var c = b.yp; if (c && c.xp) for (var d = 0; d < c.xp.length; d += 1)c.xp[d].call(c, a) }) } function b () { var b = this.contentDocument.defaultView; b.yp = this.Wba; b.addEventListener('resize', a); a.call(b, { target: b }) } var c = document.attachEvent; var d = navigator.userAgent.match(/(Trident|Edge)/); var e = g.a.Xc; var f = g.a.ui; g.extend(g.F, {
      Tla: function (e, f) {
        if (!e.xp) {
          if (e.xp = [], c)e.yp = e, e.attachEvent('onresize', a); else {
            window.getComputedStyle(e).position === 'static' &&
(e.style.position = 'relative'); var l = e.yp = document.createElement('object'); l.setAttribute('style', 'display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1;'); l.Wba = e; l.onload = b; l.type = 'text/html'; d && e.appendChild(l); l.data = 'about:blank'; d || e.appendChild(l)
          }
        }e.xp.push(f)
      },
      NGa: function (b, d) {
        b.xp.splice(b.xp.indexOf(d), 1); b.xp.length || (c ? b.detachEvent('onresize', a) : (b.yp.contentDocument.defaultView.removeEventListener('resize',
          a), b.yp = !b.removeChild(b.yp)))
      },
      xna: function (a) { a.xp = null; if (a.yp) { var b = a.yp; b.parentNode === a && b.parentNode.removeChild(b); a.yp = null } }
    })
  })(); g.sb = {
    eua: g.r.Gb + '/maps',
    Qu: g.ca.Qu,
    $S: 0,
    Ez: [],
    Lu: {},
    Jg: function (a, b) { function c () { d += 1; d === e.length && b && b() }a.length || b(); for (var d = 0, e = [], f = 0; f < a.length; f += 1) { var h = this.Qu[a[f]]; if (h) for (var k = 0; k < h.length; k += 1)e.push(h[k]); e.push(a[f]) } for (f = 0; f < e.length; f += 1) this.cR(e[f], c) },
    JD: function (a) { for (var b = 0; b < a.length; b += 1) if (this.SC(a[b]).status !== 1) return !1; return !0 },
    cR: function (a, b) {
      var c = this.SC(a); if (c.status === 1)b && b(); else {
        b && c.ly.push(b); try {
          if (g.l.Gv && window.localStorage) {
            var d = window.localStorage['_AMap_' +
a]; d && (d = JSON.parse(d), d.version === g.r.Fk ? (window._jsload_(a, d.script, !0), d.css && window._cssload_(a, d.css, !0)) : window.localStorage.removeItem('_AMap_' + a))
          }
        } catch (e) {} if (c.status === 0) { this.Yva(a); var f = this; f.$S || (f.$S = 1, window.setTimeout(function () { f.$S = 0; var a = f.eua + '/modules?v=' + g.r.uo + '&key=' + g.r.key + '&m=' + f.Ez.join(',') + '&vrs=' + g.r.Fk; g.sb.Ot(f.Ez.join(',')); f.Ez = []; c.XK = f.xta(a) }, 1)); c.status = -1 }
      }
    },
    Ot: function (a) {
      a = g.r.Yd + '/v3/log/init?' + ['s=rsv3&product=JsModule&key=' + g.r.key, 'm=' + a].join('&')
      new g.ib.yb(a, { callback: 'callback' })
    },
    load: function (a, b) { var c = this.Qu[a]; if (c) { for (var d = [], e = 0; e < c.length; e += 1)d.push(c[e]); d.push(a); for (var f = 0, c = function () { f += 1; f === d.length && b && b() }, e = 0; e < d.length; e += 1) this.cR(d[e], c) } else this.cR(a, b) },
    Yva: function (a) { for (var b = 0; b < this.Ez.length; b += 1) if (this.Ez[b] === a) return; this.Ez.push(a) },
    Mn: function (a, b) { var c = this.SC(a); try { eval(b) } catch (d) { return }c.status = 1; for (var e = 0, f = c.ly.length; e < f; e += 1)c.ly[e](); c.ly = [] },
    pd: function (a, b) {
      var c = this; c.timeout = setTimeout(function () {
        c.Lu[a].status !==
1 ? (c.remove(a), c.load(a, b)) : clearTimeout(c.timeout)
      }, 5E3)
    },
    SC: function (a) { this.Lu[a] || (this.Lu[a] = {}, this.Lu[a].status = 0, this.Lu[a].ly = []); return this.Lu[a] },
    remove: function (a) { this.Lu[a] = null },
    xta: function (a) { g.r.mode && (a += '&mode=' + g.r.mode); var b = document.createElement('script'); b.charset = 'utf-8'; a && a.indexOf(g.r.Gb) === 0 && (b.crossOrigin = 'Anonymous'); b.src = a; document.body.appendChild(b); return b }
  }
  window._jsload_ = function (a, b, c) { var d = g.sb.SC(a); d.XK && g.a.indexOf(document.body.childNodes, d.XK) >= 0 && document.body.removeChild(d.XK); d.XK = null; try { if (!c && window.localStorage && b && b !== '' && g.l.Gv) { var e = window.localStorage['_AMap_' + a]; var e = e || '{}'; var e = JSON.parse(e); e.version !== g.r.Fk || e.script ? window.localStorage.setItem('_AMap_' + a, JSON.stringify({ version: g.r.Fk, script: b })) : window.localStorage.setItem('_AMap_' + a, JSON.stringify({ version: g.r.Fk, script: b, css: e.css })) } } catch (f) {}g.sb.Mn(a, b) }
  window._cssload_ = function (a, b, c) {
    try { !c && window.localStorage && b && b !== '' && g.l.Gv && window.localStorage.setItem('_AMap_' + a, JSON.stringify({ css: b, version: g.r.Fk })) } catch (d) {} var e = document.createElement('style'); e.type = 'text/css'; g.r.Gb.indexOf('webapi.amap.com') === -1 && (b = b.replace(/webapi.amap.com/gi, g.r.Gb.split('://')[1])); g.r.pc === 'https' && (b = b.replace(/http:/gi, 'https:')); e.styleSheet ? (a = function () { try { e.styleSheet.cssText = b } catch (a) {} }, e.styleSheet.disabled ? setTimeout(a, 10) : a()) : e.appendChild(document.createTextNode(b))
    a = document.head || document.getElementsByTagName('head')[0]; a.childNodes.length < 2 ? a.appendChild(e) : a.insertBefore(e, a.childNodes[1])
  }; (function (a) {
    var b = g.l; if (!g.indexedDB && b.Ni) {
      var c = a.indexedDB || a.webkitIndexedDB || a.msIndexedDB || a.mozIndexedDB; var d = a.IDBKeyRange || a.iIa || a.SFa || a.RFa; if (c) {
        var e = g.a; var f = null; a = 'amap-jsapi' + (a.AAa ? '-debug' : ''); var h = g.extend({}, g.va); var k; try {
          k = c.open(a), k.onsuccess = function () { f = this.result; h.q('dbReady', { status: 'success' }) }, k.onerror = function () { h.q('dbReady', { status: 'error' }) }, k.onblocked = function () { h.q('dbReady', { status: 'blocked' }) }, k.onupgradeneeded = function (a) {
            a.currentTarget.result.createObjectStore('tile',
              { keyPath: 'tileKey' })
          }
        } catch (l) { b.Ni = !1 } finally { if (!b.Ni) return } var b = function (a) { return function () { try { return a.apply(this, arguments) } catch (b) { var c = arguments[arguments.length - 1]; typeof c === 'function' && setTimeout(function () { c({ code: 4, LI: b }) }, 1) } } }; var m = b(function (a, b) { return f === null ? (setTimeout(function () { b && b({ code: 3 }) }, 1), null) : f.transaction('tile', a).objectStore('tile') }); g.indexedDB = {
          mC: function (a, b) {
            f ? typeof a === 'function' && a() : h.g('dbReady', function (c) {
              c.status === 'success' ? typeof a === 'function' &&
a() : typeof b === 'function' && b({ code: 3, status: status })
            })
          },
          count: b(function (a) { var b = this; var c = arguments; this.mC(function () { b.Ot.apply(b, c) }, a) }),
          Ot: b(function (a) { var b = m('readonly', a).count(); b.onsuccess = function () { a(null, b.result) }; b.onerror = function () { a({ code: 7 }) } }),
          get: b(function (a, b, c) { var d = this; var e = setTimeout(function () { e && (e = null, c && c({ code: 7 })) }, b.timeout || 1E3); this.mC(function () { d.Cea.call(d, a, function (a, b) { e && (clearTimeout(e), e = null, c(a, b)) }) }, c) }),
          Cea: b(function (a, b) {
            var c = m('readonly', b); if (e.isArray(a)) {
              var d,
                f; (function () { function e (b) { var f = c.get(a[b]); f.onsuccess = function (a) { a.target.result && (d[b] = a.target.result); h() }; f.onerror = h } function h () { f++; f === a.length && b(null, d) }d = []; for (var k = f = 0, l = a.length; k < l; k++)e(k) })()
            } else { var h = c.get(a); h.onsuccess = function (a) { b && b(null, a.target.result) }; h.onerror = function () { b && b({ code: 1 }) } }
          }),
          add: b(function (a, b) { var c = this; var d = arguments; this.mC(function () { c.$ba.apply(c, d) }, b) }),
          $ba: b(function (a, b) {
            function c () { --f === 0 && b(null) }e.isArray(a) || (a = [a]); var d = a.length; var f =
d; var h = 0; var k = Math.ceil(d / 5); var l = setInterval(function () { if (h++ < k) { var e = 5 * h; e > d && (e = d); for (var f = m('readwrite', b), s = 5 * (h - 1); s < e; s++) { var F = f.put(a[s]); F.onsuccess = F.onerror = c } } else clearInterval(l) }, 32)
          }),
          remove: b(function (a, b) { var c = this; var d = arguments; this.mC(function () { c.mka.apply(c, d) }, b) }),
          mka: b(function (a, b) {
            var c = m('readwrite', b); e.isArray(a) || (a = [a]); a = a.sort(); c.openCursor(d.bound(a[0], a[a.length - 1])).onsuccess = function (c) {
              if (c = c.target.result) {
                if (e.ka(c.value.tileKey, a))c.delete(); for (var d = -1,
                  f = 0, h = a.length; f < h; f++) if (a[f] > c.value.tileKey) { d = f; break }c.continue(a[d])
              } else b && b(null)
            }
          }),
          clear: b(function (a) { var b = this; var c = arguments; this.mC(function () { b.dG.apply(b, c) }, a) }),
          dG: b(function (a) { var b = m('readwrite', a).clear(); b.onsuccess = function () { a && a(null) }; b.onerror = function () { a && a({ code: 2 }) } })
        }
      } else b.Ni = !1
    }
  })(window); (function () {
    function a (a) { u.data.keys = u.data.keys.filter(function (b) { return !r.ka(a, b) }).concat(a) } function b (a) { var b = g.r.Fk + '|' + a.Oi.replace(/\//g, ',') + '|' + (a.Pf ? 'w' : 'v') + '|'; var c; c = a.ja; var d = a.ze; c = [c ? 1 : 0, q.ba ? 1 : 0, d ? 1 : 0].join(); return b + c + '|' + m(a.url) } function c () { u.data.keys.length >= u.XL && d() } function d () { var a = u.data.keys.length; var b = Math.floor(a / 2); a > u.XL && (b = Math.floor(a - u.XL / 2)); a = u.data.keys.slice(0, b); u.data.keys = u.data.keys.slice(b + 1); s.remove(a, function (a) { a && a.code === 3 && (q.Ni = !1) }) } function e () {
      var a =
arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r.Rs; k(); w.setItem(u.key, u.data, !0); f(a)
    } function f (a) { q.Ni && s && s.clear(function (b) { b && b.code === 3 && (q.Ni = !1); a() }) } function h () { k(); var a = w.getItem(u.key, !0); a && (a.vdataVer === u.data.vdataVer && a.apiVer === u.data.apiVer ? u.data = a : e()) } function k () { u.data = { vdataVer: q.kf, apiVer: g.r.Fk, keys: [], config: {}, fsTiles: {} }; u.qt = {} } function l (a) { a && (u.data.vdataVer = a, q.kf = a) } function m (a) { var b = 'limg'; /flds=([^&]+)/.test(a) && (b = RegExp.$1); return b } function n (a) {
      if (typeof a ===
'object' && a !== null) {
        var b = []; if (r.isArray(a)) if (Object.keys(a).length == a.length)b = a.map(function (a) { return n(a) }); else { b.push('__arrayObject'); var c = {}; var d; for (d in a)(parseInt(d) < 0 || isNaN(parseInt(d))) && a.hasOwnProperty(d) && (c[d] = n(a[d])); b.push(c); b.push(a.map(function (a) { return n(a) })) } else if (r.jk(a, 'Float32Array'))b.push('__Float32Array'), b.push(Array.prototype.slice.call(a)); else if (r.jk(a, 'Uint16Array'))b.push('__Uint16Array'), b.push(Array.prototype.slice.call(a)); else {
          for (d in b = {}, a) {
            a.hasOwnProperty(d) &&
(b[d] = n(a[d]))
          }
        } return b
      } return a
    } function p (a) { if (typeof a === 'object' && a !== null) { var b = {}; if (r.isArray(a)) if (a[0] === '__Float32Array')b = new Float32Array(a[1]); else if (a[0] === '__Uint16Array')b = new Uint16Array(a[1]); else if (a[0] === '__arrayObject') { b = p(a[2]); a = a[1]; for (var c in a)a.hasOwnProperty(c) && (b[c] = a[c]) } else b = a.map(function (a) { return p(a) }); else for (c in a)a.hasOwnProperty(c) && (b[c] = p(a[c])); return b } return a } var q = g.l; var r = g.a; if (!g.Oj && q.Ni) {
      var s = g.indexedDB; var u = { XL: 1E3, key: '_AMap_data.tileKeys' }
      var v = []; var w = { getItem: function (a, b) { var c = localStorage.getItem(a); if (c && b) { var d; try { d = JSON.parse(c) } catch (e) { d = null }c = d } return c }, setItem: function (a, b, c) { var d = b; c && (d = JSON.stringify(b), d.length / 1024 / 1024 > 1.5 && Object.keys(b.$pa).length && (b.$pa = {}, d = JSON.stringify(b))); try { localStorage.setItem(a, d) } catch (f) { e() } } }; g.Oj = {
        clear: e,
        get: function (c, d) {
          function f (a) {
            var b = { mS: l, y6: G, NFa: w, Wg: u.data.config }; a && z.length && (/\|limg/.test(z[0]) ? b.e6 = a.map(function (a) { return JSON.parse(a.data) }).filter(function (a) {
              return a &&
a.key
            }) : b.Qc = h(a)); d && d(null, b); w.length && (l = [], G = [])
          } function h (a) { var b = []; m(c.url).split(',').forEach(function (c) { a.forEach(function (a) { if (a = JSON.parse(a.data[c])) { var d = a.Lg; a.Lg = new g.mr(d.z, d.x, d.y); a.Lg.T = d.T; b.push(a) } }) }); return b } var k = c.type === 'FS'; if (!q.Gv || !(k || q.Ni && u.data.keys.length !== 0)) return d({ code: 1 }); var l = []; var w = []; var z = []; var G = []; var H = []; c.rya.forEach(function (a) {
            var d = !1; var e = b({ Oi: a.key, url: c.url, Pf: c.Pf, ja: c.o.ja, ze: c.ze }); k && (v.push(e), u.data.fsTiles[e] && (l.push(a), z.push(e), H.push({
              data: p(u.data.fsTiles[e]),
              tileKey: e
            }), d = !0)); d || (q.Ni && r.ka(u.data.keys, e) ? (z.push(e), w.push(a)) : G.push(a))
          }); if (k && w.length === 0 || z.length === 0) return f(H); k && H.length && H.forEach(function (a) { a = r.indexOf(z, a.tileKey); z.splice(a, 1) }); s.get(z, { timeout: c.timeout || 1E3 }, function (b, c) { if (b || c.length !== z.length)b && b.code === 3 ? q.Ni = !1 : e(), G = w, w = [], f(null); else { if (k) for (var d = c.length - 1; d >= 0; d--) { var h = c[d]; h && h.data ? u.data.fsTiles[h.tileKey] = n(h.data) : G.push(w.splice(d, 1)[0]) }l = w; w = []; f(c); a(z) } }); (G.length || w.length) && f(H)
        },
        yw: function (a) {
          a.Eb.forEach(function (c) {
            c =
b({ Oi: c.key, url: a.url, Pf: a.Pf, ja: a.o.ja, ze: a.ze }); u.qt[c] && delete u.qt[c]
          })
        },
        set: function (a, c) { a.kf && a.kf !== u.data.vdataVer && (l(a.kf), e(), c && c({ code: 2 })); !a.qd && a.Qc ? a.Qc.forEach(function (c) { var d = b({ Oi: c.Oi, url: a.url, Pf: a.Pf, ja: a.o.ja, ze: a.ze }); if (q.Ni || r.ka(v, d)) { var e = u.qt[d] || {}; e[c.Ed] = c.Pa; u.qt[d] = e } }) : a.data && a.data.forEach(function (c) { var d = b({ Oi: c.key, url: a.url, Pf: a.Pf, ja: a.o.ja, ze: a.ze }); if (q.Ni || r.ka(v, d))u.qt[d] = c.data }); u.data.config = { 'x-vd-v': a['x-vd-v'], tv: a.tv, bgc: a.bgc } },
        flush: (function () {
          var a =
!0; return function () { var b = this; if (a) { if (Object.keys(u.data.fsTiles).length) for (var c in u.data.fsTiles)u.data.fsTiles.hasOwnProperty(c) && !r.ka(v, c) && delete u.data.fsTiles[c]; q.Ni ? s.count(function (a, c) { a || (c !== u.data.keys.length ? (u.data.keys.length && (u.data.keys = []), f(function () { b.tG(!0) })) : b.tG(!0)) }) : b.tG(!0); a = !1 } else b.tG() }
        }()),
        tG: function () {
          var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : !1; var b = {}; var d = []; var f = Object.keys(u.qt); var h = []; f.length ? (f.forEach(function (a) {
            var c = u.qt[a]; a.split('|').pop().split(',').every(function (a) {
              return a ===
'limg' ? !0 : c && void 0 !== c[a]
            }) ? (r.ka(u.data.keys, a) || (h.push(a), d.push({ tileKey: a, data: c })), r.ka(v, a) && void 0 === u.data.fsTiles[a] && (u.data.fsTiles[a] = c)) : b[a] = c
          }), d.length && (q.Ni ? s.add(d, function (a) { a ? a.code !== 3 ? e() : q.Ni = !1 : (u.data.keys = u.data.keys.concat(h), w.setItem(u.key, u.data, !0), c()) }) : w.setItem(u.key, u.data, !0)), u.qt = b) : (a && w.setItem(u.key, u.data, !0), c())
        }
      }; h()
    }
  })(); g.U = g.ca.extend({
    A: function (a, b, c) { var d = parseFloat(b); var e = parseFloat(a); if (isNaN(a) || isNaN(b)) throw 'Invalid Object: LngLat(' + e + ', ' + d + ')'; !0 !== c && (d = Math.max(Math.min(d, 90), -90), e = (e + 180) % 360 + (e < -180 || e === 180 ? 180 : -180)); this.Q = d; this.R = e; this.lng = Math.round(1E6 * e) / 1E6; this.lat = Math.round(1E6 * d) / 1E6 },
    ER: function () { return g.a.Ac(this.R, 6) },
    BR: function () { return g.a.Ac(this.Q, 6) },
    add: function (a, b) { return new g.U(this.R + a.R, this.Q + a.Q, b) },
    $a: function (a, b) { return new g.U(this.R - a.R, this.Q - a.Q, b) },
    kd: function (a,
      b) { return new g.U(this.R / a, this.Q / a, b) },
    Md: function (a, b) { return new g.U(this.R * a, this.Q * a, b) },
    He: function (a) { return g.nr.distance(this, a) },
    offset: function (a, b) { if (isNaN(a) || isNaN(b)) return !1; var c = 2 * Math.asin(Math.sin(Math.round(a) / 12756274) / Math.cos(this.Q * Math.PI / 180)); var c = this.R + 180 * c / Math.PI; var d = 2 * Math.asin(Math.round(b) / 12756274); return new g.U(c, this.Q + 180 * d / Math.PI) },
    gb: function (a) { a = g.a.Ja(a); return a instanceof g.U ? Math.max(Math.abs(this.Q - a.Q), Math.abs(this.R - a.R)) <= 1E-9 : !1 },
    toString: function () {
      return g.a.Ac(this.R,
        6) + ',' + g.a.Ac(this.Q, 6)
    },
    xl: function () { return [this.R, this.Q] },
    cb: function () { var a = this.controlPoints; var b = new g.U(this.R, this.Q); a && (b.controlPoints = [].concat(a)); return b }
  })
  g.U.Gqa = function (a, b, c) {
    c = c + 1 || Math.round(Math.abs(a.R - b.R)); if (!c || Math.abs(a.R - b.R) < 0.001) return []; var d = []; var e = Math.PI; var f = g.Nm.Ou; var h = g.Nm.dwa; var k = Math.asin; var l = Math.sqrt; var m = Math.sin; var n = Math.pow; var p = Math.cos; var q = Math.atan2; var r = a.Q * f; a = a.R * f; var s = b.Q * f; b = b.R * f; for (var k = 2 * k(l(n(m((r - s) / 2), 2) + p(r) * p(s) * n(m((a - b) / 2), 2))), u, v, w, t, f = 1; f < c; f += 1) {
      u = 1 / c * f, v = m((1 - u) * k) / m(k), w = m(u * k) / m(k), u = v * p(r) * p(a) + w * p(s) * p(b), t = v * p(r) * m(a) + w * p(s) * m(b), v = v * m(r) + w * m(s), v = q(v, l(n(u, 2) + n(t, 2))), u = q(t, u), b > a ? (u < a && (u += 2 * e), u > b && (u -= 2 * e))
        : (u > a && (u -= 2 * e), u < b && (u += 2 * e)), d.push(new g.U(u * h, v * h, !0))
    } return d
  }; g.U.Wb({ ER: 'getLng', BR: 'getLat', add: 'add', $a: 'subtract', kd: 'divideBy', Md: 'multiplyBy', He: 'distance', offset: 'offset', gb: 'equals', toString: 'toString' }); g.le = g.ca.extend({
    A: function () {
      this.CLASS_NAME = 'AMap.Bounds'; var a = null; var b = null; if (arguments.length === 1 && arguments[0] instanceof Array)a = new g.U(arguments[0][0], arguments[0][1], !0), b = new g.U(arguments[0][2], arguments[0][3], !0); else if (arguments.length === 2)a = g.a.Ja(arguments[0]), b = g.a.Ja(arguments[1]); else if (arguments.length === 4)a = new g.U(arguments[0], arguments[1]), b = new g.U(arguments[2], arguments[3]); else if (arguments.length === 0)a = new g.U(-180, -90), b = new g.U(180, 90); else {
        throw 'Invalid Object: Bounds(' +
arguments.join(',') + ')'
      } this.xc = a; this.oc = b
    },
    iv: function () { return this.xc },
    Py: function () { return this.oc },
    dk: function () { return new g.U(this.xc.R, this.oc.Q, !0) },
    Mo: function () { return new g.U(this.oc.R, this.xc.Q, !0) },
    contains: function (a) { var b = this.xc; var c = this.oc; var d; if (a instanceof g.qp) return this.cV().contains(a); a instanceof g.le ? (d = a.xc, a = a.oc) : d = a = g.a.Ja(a); var e = d.R; var f = b.R; var h = a.R; var k = c.R; f > k && (k += 360, e < 0 && (e += 360), h < 0 && (h += 360)); return d.Q >= b.Q && a.Q <= c.Q && e >= f && h <= k },
    bh: function (a) {
      var b = this.xc; var c = this.oc
      var d = a.xc; a = a.oc; var e = a.R >= b.R && d.R <= c.R; return a.Q >= b.Q && d.Q <= c.Q && e
    },
    zi: function () { return new g.U(this.xc.R > this.oc.R ? (this.xc.R + this.oc.R + 360) / 2 % 360 : (this.xc.R + this.oc.R) / 2, (this.xc.Q + this.oc.Q) / 2) },
    extend: function (a) { this.xc.R = Math.min(this.xc.R, a.R); this.xc.Q = Math.min(this.xc.Q, a.Q); this.oc.R = Math.max(this.oc.R, a.R); this.oc.Q = Math.max(this.oc.Q, a.Q); return this },
    oza: function (a) { return this.extend(a.xc).extend(a.oc) },
    toString: function () { return this.xc.toString() + ';' + this.oc.toString() },
    cb: function () {
      return new g.le(this.xc.cb(),
        this.oc.cb())
    },
    gb: function (a) { return a instanceof g.le ? this.xc.gb(a.xc) && this.oc.gb(a.oc) : !1 },
    yj: function () { return Math.abs(this.oc.R - this.xc.R) },
    vj: function () { return Math.abs(this.xc.Q - this.oc.Q) },
    cV: function (a) { var b = [this.iv(), this.Mo(), this.Py(), this.dk()]; a && b.push(this.iv()); return new g.qp(b) },
    vya: function (a) { return new g.Yf(a.lc(this.dk(), 20), a.lc(this.Mo(), 20)) },
    wR: function (a, b) { return this.cV(b).wR(a) },
    tR: function (a) { return this.vya(a).zi() }
  })
  g.le.Wb({ iv: 'getSouthWest', Py: 'getNorthEast', dk: 'getNorthWest', Mo: 'getSouthEast', contains: 'contains', bh: 'intersects', zi: 'getCenter', extend: 'extend' }); g.H = g.ca.extend({
    A: function (a, b, c) { if (isNaN(a) || isNaN(b)) throw 'Invalid Object: Pixel(' + a + ', ' + b + ')'; this.x = c ? Math.round(a) : Number(a); this.y = c ? Math.round(b) : Number(b) },
    vf: function () { return this.x },
    se: function () { return this.y },
    add: function (a, b) { return new g.H(this.x + a.x, this.y + a.y, b) },
    $a: function (a, b) { return new g.H(this.x - a.x, this.y - a.y, b) },
    kd: function (a, b) { return new g.H(this.x / a, this.y / a, b) },
    Md: function (a, b) { return new g.H(this.x * a, this.y * a, b) },
    He: function (a) {
      var b = a.x - this.x; a = a.y - this.y; return Math.sqrt(b *
b + a * a)
    },
    floor: function () { return new g.H(Math.floor(this.x), Math.floor(this.y)) },
    round: function () { return new g.H(this.x, this.y, !0) },
    gb: function (a) { return a instanceof g.H && this.x === a.x && this.y === a.y },
    cb: function (a) { return new g.H(this.x, this.y, a) },
    toString: function () { return this.x + ',' + this.y },
    xl: function () { return [this.x, this.y] },
    length: function () { return Math.sqrt(this.x * this.x + this.y * this.y) },
    direction: function () {
      var a = this.x; var b = this.y; if (a === 0 && b === 0) return null; if (a === 0) return b > 0 ? 90 : 270; var c = 180 *
Math.atan(b / a) / Math.PI; return a < 0 && b > 0 ? c + 180 : a < 0 && b < 0 ? c + 180 : a > 0 && b < 0 ? c + 360 : c
    },
    Ku: function (a) { var b = this.length(); var c = a.length(); return b && c ? 180 * Math.acos((this.x * a.x + this.y * a.y) / c / b) / Math.PI : null },
    noa: function (a) { var b = this.length(); var c = a.length(); return b && c ? (this.x * a.x + this.y * a.y) / c / b : null },
    toFixed: function (a) { this.x = g.a.Ac(this.x, a); this.y = g.a.Ac(this.y, a); return this }
  }); g.H.Wb({ vf: 'getX', se: 'getY', add: 'add', $a: 'subtract', kd: 'divideBy', Md: 'multiplyBy', He: 'distance', gb: 'equals', toString: 'toString' }); g.xd = g.ca.extend({
    A: function (a, b, c) { if (isNaN(a) || isNaN(b)) throw 'Invalid Object: Size(' + a + ', ' + b + ')'; this.width = c ? Math.round(a) : Number(a); this.height = c ? Math.round(b) : Number(b) },
    cb: function () { return new g.xd(this.width, this.height) },
    yj: function () { return this.width },
    vj: function () { return this.height },
    QE: function () { return new g.H(this.yj(), this.vj()) },
    contains: function (a) { return Math.abs(a.x) <= Math.abs(this.width) && Math.abs(a.y) <= Math.abs(this.height) },
    gb: function (a) {
      return a instanceof g.xd && this.width ===
a.width && this.height === a.height
    },
    toString: function () { return this.yj() + ',' + this.vj() }
  }); g.xd.Wb({ yj: 'getWidth', vj: 'getHeight', toString: 'toString' }); g.qp = g.ca.extend({
    A: function (a) { this.CLASS_NAME = 'AMap.ArrayBounds'; a = g.a.Ja(a); this.path = []; for (var b = 0; b < a.length; b += 1) this.path.push([a[b].R, a[b].Q]); this.bounds = this.Rd = a },
    contains: function (a, b) { if (a instanceof g.qp) return g.nr.isRingInRing(a.path, this.path); a instanceof g.H ? a = [a.x, a.y] : a instanceof g.U && (a = [a.R, a.Q]); return g.wd.Sd(a, this.path, b) },
    toBounds: function () { for (var a = new g.le(180, 90, -180, -90), b = this.Rd.length - 1; b >= 0; b -= 1)a.extend(this.Rd[b]); return a },
    wR: function (a) {
      for (var b = [], c = 0; c <
this.path.length; c += 1)b[c] = a.lc(this.path[c], 20); return b
    },
    tR: function (a) { return this.toBounds().tR(a) },
    zi: function () { return this.toBounds().zi() },
    toString: function () { return this.path.join(';') }
  }); g.qp.Wb({ contains: 'contains', zi: 'getCenter' }); g.$$ = g.qp.extend({ A: function (a) { this.CLASS_NAME = 'AMap.CoordsBounds'; this.path = a; if (a[0] instanceof g.H) { this.path = []; for (var b = 0; b < a.length; b += 1) this.path.push([a[b].x, a[b].y]) } this.bounds = this.Rd = a }, toString: function () { return this.path.join(';') } }); g.Yf = g.ca.extend({
    A: function () { if (arguments.length === 2) this.kc = arguments[0], this.Vd = arguments[1]; else if (arguments.length === 1 && arguments[0] instanceof Array || arguments.length === 4) { var a = arguments[0] instanceof Array ? arguments[0] : arguments; this.kc = new g.H(a[0], a[1]); this.Vd = new g.H(a[2], a[3]) } else throw 'Invalid Object: PixelBounds(' + arguments.join(',') + ')' },
    zi: function (a) { return new g.H((this.kc.x + this.Vd.x) / 2, (this.kc.y + this.Vd.y) / 2, a) },
    contains: function (a) {
      var b; a instanceof g.Yf ? (b = a.kc, a = a.Vd)
        : b = a; return b.x > this.kc.x && a.x < this.Vd.x && b.y > this.kc.y && a.y < this.Vd.y
    },
    yj: function () { return this.Vd.x - this.kc.x },
    vj: function () { return this.Vd.y - this.kc.y },
    bh: function (a, b) { b || b === 0 || (b = 20); var c = this.kc; var d = this.Vd; var e = a.kc; var f = a.Vd; var h = f.y >= c.y - b && e.y <= d.y + b; return f.x >= c.x - b && e.x <= d.x + b && h },
    toString: function () { return this.kc + ';' + this.Vd },
    cb: function () { return new g.Yf(this.kc.cb(), this.Vd.cb()) }
  }); g.I = {}; g.I.UP = function (a) { for (var b = [Infinity, Infinity, -Infinity, -Infinity], c = 0, d = a.length; c < d; c += 1)g.I.MI(b, a[c]); return b }; g.I.S1 = function (a, b, c) { var d = Math.min.apply(null, a); a = Math.max.apply(null, a); var e = Math.min.apply(null, b); b = Math.max.apply(null, b); return g.I.joa(d, a, e, b, c) }; g.I.buffer = function (a, b) { a[0] -= b; a[1] -= b; a[2] += b; a[3] += b }; g.I.cb = function (a) { return a.slice() }; g.I.Sd = function (a, b) { return a[0] <= b[0] && b[0] <= a[2] && a[1] <= b[1] && b[1] <= a[3] }
  g.I.G2 = function (a, b) { return a[0] <= b[0] && b[2] <= a[2] && a[1] <= b[1] && b[3] <= a[3] }; g.I.kDa = function () { return [Infinity, Infinity, -Infinity, -Infinity] }; g.I.joa = function (a, b, c, d, e) { return typeof e !== 'undefined' ? (e[0] = a, e[2] = b, e[1] = c, e[3] = d, e) : [a, c, b, d] }; g.I.empty = function (a) { a[0] = a[1] = Infinity; a[2] = a[3] = -Infinity; return a }; g.I.gb = function (a, b) { return a[0] === b[0] && a[2] === b[2] && a[1] === b[1] && a[3] === b[3] }
  g.I.extend = function (a, b) { b[0] < a[0] && (a[0] = b[0]); b[2] > a[2] && (a[2] = b[2]); b[1] < a[1] && (a[1] = b[1]); b[3] > a[3] && (a[3] = b[3]) }; g.I.MI = function (a, b) { b[0] < a[0] && (a[0] = b[0]); b[0] > a[2] && (a[2] = b[0]); b[1] < a[1] && (a[1] = b[1]); b[1] > a[3] && (a[3] = b[1]) }; g.I.dEa = function (a) { return [a[0], a[1]] }; g.I.eEa = function (a) { return [a[2], a[1]] }; g.I.zi = function (a) { return [(a[0] + a[2]) / 2, (a[1] + a[3]) / 2] }
  g.I.qEa = function (a, b, c, d, e) { var f = b * d[0] / 2; d = b * d[1] / 2; b = Math.cos(c); c = Math.sin(c); f = [-f, -f, f, f]; d = [-d, d, -d, d]; var h, k, l; for (h = 0; h < 4; h += 1)k = f[h], l = d[h], f[h] = a[0] + k * b - l * c, d[h] = a[1] + k * c + l * b; return g.I.S1(f, d, e) }; g.I.vj = function (a) { return a[3] - a[1] }; g.I.EEa = function (a) { return [a[2] - a[0], a[3] - a[1]] }; g.I.IEa = function (a) { return [a[0], a[3]] }; g.I.JEa = function (a) { return [a[2], a[3]] }; g.I.yj = function (a) { return a[2] - a[0] }; g.I.bh = function (a, b) { return a[0] <= b[2] && a[2] >= b[0] && a[1] <= b[3] && a[3] >= b[1] }
  g.I.yh = function (a) { return a[2] < a[0] || a[3] < a[1] }; g.I.normalize = function (a, b) { return [(b[0] - a[0]) / (a[2] - a[0]), (b[1] - a[1]) / (a[3] - a[1])] }; g.I.lHa = function (a, b) { var c = (a[2] - a[0]) / 2 * (b - 1); var d = (a[3] - a[1]) / 2 * (b - 1); a[0] -= c; a[2] += c; a[1] -= d; a[3] += d }; g.I.touches = function (a, b) { return g.I.bh(a, b) && (a[0] === b[2] || a[2] === b[0] || a[1] === b[3] || a[3] === b[1]) }; g.I.transform = function (a, b, c) { a = [a[0], a[1], a[0], a[3], a[2], a[1], a[2], a[3]]; b(a, a, 2); return g.I.S1([a[0], a[2], a[4], a[6]], [a[1], a[3], a[5], a[7]], c) }; g.le.Db({ A: (function () { var a = g.le.prototype.A; return function () { a.apply(this, arguments); this.southwest = this.xc; this.northeast = this.oc } }()), extend: (function () { var a = g.le.prototype.extend; return function () { a.apply(this, arguments); this.xc.lng = this.xc.R; this.xc.lat = this.xc.Q; this.oc.lng = this.oc.R; this.oc.lat = this.oc.Q; return this } }()) }); g.MF = g.ca.extend({ A: function (a, b, c, d) { this.aX = a; this.qX = b; this.EX = c; this.$X = d }, transform: function (a, b) { return this.k1(a.cb(), b) }, k1: function (a, b) { b = b || 1; a.x = b * (this.aX * a.x + this.qX); a.y = b * (this.EX * a.y + this.$X); return a }, qza: function (a, b) { b = b || 1; return new g.H((a.x / b - this.qX) / this.aX, (a.y / b - this.$X) / this.EX) } }); g.wp = g.ca.extend({ A: function (a) { this.WL = a.MAX_LATITUDE || 85.0511287798; a.project && a.unproject && (this.lc = a.project, this.Zh = a.unproject) } }); g.wp.nW = { lc: function (a) { return new g.H(a.R, a.Q) }, Zh: function (a, b) { return new g.U(a.x, a.y, b) } }
  g.wp.kba = new g.wp({ MAX_LATITUDE: 85.0511287798, project: function (a) { var b = Math.PI / 180; var c = this.WL; var c = Math.max(Math.min(c, a.Q), -c); a = a.R * b; b = Math.log(Math.tan(Math.PI / 4 + c * b / 2)); return new g.H(a, b, !1) }, unproject: function (a, b) { var c = 180 / Math.PI; return new g.U(a.x * c, (2 * Math.atan(Math.exp(a.y)) - Math.PI / 2) * c, b) } })
  g.wp.rW = {
    WL: 85.0840591556,
    iM: 6356752.3142,
    hM: 6378137,
    lc: function (a) { var b = Math.PI / 180; var c = this.WL; var d = Math.max(Math.min(c, a.Q), -c); var e = this.hM; var c = this.iM; a = a.R * b * e; b *= d; e = c / e; e = Math.sqrt(1 - e * e); d = e * Math.sin(b); d = Math.pow((1 - d) / (1 + d), 0.5 * e); b = Math.tan(0.5 * (0.5 * Math.PI - b)) / d; b = -c * Math.log(b); return new g.H(a, b) },
    Zh: function (a, b) {
      for (var c = 180 / Math.PI, d = this.hM, e = this.iM, f = a.x * c / d, d = e / d, d = Math.sqrt(1 - d * d), e = Math.exp(-a.y / e), h = Math.PI / 2 - 2 * Math.atan(e), k = 15, l = 0.1; Math.abs(l) > 1E-7 && (k -= 1, k > 0);) {
        l = d * Math.sin(h),
        l = Math.PI / 2 - 2 * Math.atan(e * Math.pow((1 - l) / (1 + l), 0.5 * d)) - h, h += l
      } return new g.U(f, h * c, b)
    }
  }; g.bi = {}; g.bi.rF = { OD: function (a, b) { var c = this.Sf.lc(a); var d = this.scale(b); return this.VE.k1(c, d) }, mE: function (a, b, c) { b = this.scale(b); a = this.VE.qza(a, b); return this.Sf.Zh(a, c) }, lc: function (a) { return this.Sf.lc(a) }, scale: function (a) { return 256 << a }, kq: function (a) { return 12756274 * Math.PI / (256 * Math.pow(2, a)) } }; g.bi.LL = g.extend({}, g.bi.rF, { code: 'EPSG:3857', Sf: g.wp.kba, VE: new g.MF(0.5 / Math.PI, 0.5, -0.5 / Math.PI, 0.5), lc: function (a) { return this.Sf.lc(a).Md(6378137) } })
  g.bi.YV = g.extend({}, g.bi.rF, { code: 'EPSG:3395', Sf: g.wp.rW, VE: (function () { var a = g.wp.rW; return new g.MF(0.5 / (Math.PI * a.hM), 0.5, -0.5 / (Math.PI * a.iM), 0.5) }()) }); g.bi.ZV = g.extend({}, g.bi.rF, { code: 'EPSG:4326', Sf: g.wp.nW, VE: new g.MF(1 / 360, 0.5, -1 / 360, 0.25) }); g.bi.WAa = g.extend({}, g.bi.rF, { Sf: g.wp.nW, VE: new g.MF(1, 0, 1, 0) }); g.VJ = {
    lc: function (a, b) { a = g.a.Ja(a); return this.nj.OD(a, b || this.get('zoom')) },
    Zh: function (a, b, c) { return this.nj.mE(a, b || this.get('zoom'), c) },
    kta: function (a, b) { return this.lc(a, b) },
    aEa: function (a, b) { return this.Zh(a, b) },
    Xp: function (a, b, c) { g.c.add(this, 'containerToLngLat'); var d = this.get('size').QE().kd(2); if (a.gb(d) && !c) return this.get('center'); a = this.Cg(a, b, c); return this.Nd(a) },
    Ls: function (a, b) {
      g.c.add(this, 'lngLatToContainer'); var c = 0; b && (c = typeof b === 'string' ? Math.round(parseFloat(b) / 0.14929107086948487)
        : b); var d = this.zb(a); return this.ke(d, null, c)
    },
    zb: function (a) { a = g.a.Ja(a); return this.lc(a, 20) },
    Nd: function (a) { return a ? this.Zh(a, 20) : a },
    PJ: function (a) { a = g.a.Ja(a); return this.lc(a, 20).$a(g.a.dc) },
    f6: function (a, b) { b || (a = g.a.Ja(a)); var c = []; var d = !1; void 0 === a[0].length && (d = !0); for (var c = [], e = 0, f = a.length; e < f; e += 1) if (d) { var h = this.lc(a[e], 20).$a(g.a.dc); c[e] = [h.x, h.y] } else c[e] = this.f6(a[e], !0); return c },
    dqa: function (a) { return this.Zh(a.add(g.a.dc), 20) },
    bEa: function (a) { return this.ke(a.add(g.a.dc)) },
    jEa: function (a) {
      return a
        ? this.lc(this.get('center'), a) : this.get('centerPixel')
    },
    EBa: function (a) { return (new g.H(a.x + 2.0037508342789244E7, 2.0037508342789244E7 - a.y)).kd(0.14929107086948487) },
    n7: function (a) { return new g.H(0.14929107086948487 * a.x - 2.0037508342789244E7, 2.0037508342789244E7 - 0.14929107086948487 * a.y) }
  }; B.PF = g.ca.extend({ ka: [g.va, g.$e], w: { center: new g.U(116.397128, 39.916527), zoom: 13, rotation: 0, crs: 'EPSG3857' }, A: function (a) { this.CLASS_NAME = 'AMap.View2D'; g.c.ya(this, a); a = a || {}; a.center && (a.center = g.a.Ja(a.center)); this.w = a } }); B.Ob = g.ca.extend({
    ka: [g.va, g.$e, g.VJ],
    w: {
      features: 'all',
      showLabel: !0,
      dragEnable: !0,
      showIndoorMap: g.l.ba ? !1 : !0,
      lang: 'zh_cn',
      keyboardEnable: !0,
      doubleClickZoom: !0,
      scrollWheel: !0,
      zoomEnable: !0,
      jogEnable: !0,
      continuousZoomEnable: !0,
      resizeEnable: !1,
      animateEnable: !0,
      rotateEnable: !1,
      labelzIndex: 99,
      showFog: !0,
      touchZoom: !0,
      zooms: [3, g.l.ba ? g.l.Lc ? 19 : 20 : 18],
      defaultCursor: '',
      limitBounds: null,
      logoUrl: g.r.Gb + '/theme/v1.3/logo@1x.png',
      logoUrlRetina: g.r.Gb + '/theme/v1.3/logo@2x.png',
      copyright: '\x3c!--v1.4.15--\x3e &copy ' +
(new Date()).getFullYear() + ' AutoNavi ',
      isHotspot: !g.l.ba,
      baseRender: g.l.L1,
      overlayRender: g.l.eva,
      mapStyle: 'amap://styles/normal',
      showBuildingBlock: g.l.Pf,
      crs: 'EPSG3857',
      rotation: 0,
      pitch: 0,
      yaw: 0,
      scale: 1,
      center: new g.U(116.397128, 39.916527),
      zoom: 13,
      detectRetina: !0,
      pitchEnable: !1,
      buildingAnimation: !1,
      maxPitch: 83,
      turboMode: !0,
      preloadMode: !1,
      workerMode: !0
    },
    poiOnAMAP: function (a) { g.c.add(this, 'poiOnAMAP'); var b = {}; var c = g.a.Ja(a.location); b.id = a.id; c && (b.y = c.Q, b.x = c.R); b.name = a.name; b.address = a.address; g.ci.nt(g.ci.o4(b)) },
    detailOnAMAP: function (a) { g.c.add(this, 'detailOnAMAP'); var b = {}; var c = g.a.Ja(a.location); b.id = a.id; c && (b.y = c.Q, b.x = c.R); b.name = a.name; g.ci.nt(g.ci.m4(b)) },
    setLabelzIndex: function (a) { g.c.add(this, 'setLabelzIndex'); return this.set('labelzIndex', a) },
    getLabelzIndex: function () { return this.get('labelzIndex', null, !0) },
    setVectorMapForeign: function (a) {
      if (g.l.Up) {
        var b = this.S6(a); a = b[0]; var c = b[1]; this.set('name_field', c, !0); this.set('vectorMapForeign', a, !0); var d = this; var b = []; a && (b.push('gridmap'), b.push('MVT', 'vectorForeign'),
        b.push('labelcanvas')); g.sb.Jg(b, function () { d.j6(function () { d.map && (d.map.Gi = !0, d.map.HG && d.map.HG(), d.map.Te && d.map.Te instanceof g.Ob.EF && d.map.Te.de && d.map.Te.de.S && (d.map.Te.de.S.hI(), d.map.Te.de.S.D6 = c, d.map.Te.de.S.reload()), d.set('display')) }) })
      }
    },
    setMapStyle: function (a) { g.c.add(this, 'setMapStyle'); a = a || 'normal'; a.indexOf('amap://styles/') === -1 ? g.r.hK[a] ? this.set('styleUrl', 'amap://styles/' + g.r.hK[a]) : this.set('styleUrl', '') : this.set('styleUrl', a); this.bT() },
    getMapStyle: function () {
      return this.get('styleUrl') ||
this.get('mapStyle', null, !0)
    },
    getFeatures: function () { return this.get('features', null, !0) },
    setFeatures: function (a) { g.c.add(this, 'setFeatures'); this.set('features', a) },
    setLang: function (a) { g.c.add(this, 'setLang', a); a !== 'en' && a !== 'zh_cn' && a !== 'zh_en' || a === this.get('lang', null, !0) || (this.set('lang', a), this.hk && this.hk.t8(this)) },
    getLang: function () { return this.get('lang', null, !0) },
    setCity: function (a, b) {
      g.c.add(this, 'setCity'); var c = this; (new g.ib.yb(g.r.Yd + '/v3/config/district?subdistrict=0&extensions=all&key=' +
g.r.key + '&s=rsv3&output=json&keywords=' + a, { callback: 'callback' })).g('complete', function (d) { var e = d.districts; if (e && e.length) { d = e[0]; /[^\w]+/.test(a) && (e = g.a.find(e, function (b) { return b.name === a })) && e !== d && (d = e); try { var f = d.center.split(','); var h; switch (d.level) { case 'city':h = 10; break; case 'province':h = 7; break; case 'district':h = 12; break; case 'country':h = 4; break; default:h = 12 }d.name.indexOf('\u5e02') !== -1 && (h = 10); c.D = !0; c.setZoomAndCenter(h, new g.U(f[0], f[1]), !0); c.D = !1; b && b.call(c, f, h) } catch (k) {} } }, this)
    },
    getScreenShot: function (a, b) { g.c.add(this, 'getScreenShot'); return this.map && g.l.il ? this.map.y4(a, b) : '' },
    getCity: function (a, b) {
      g.c.add(this, 'getCity'); var c = g.r.Yd + '/v3/geocode/regeo?&extensions=&&key=' + g.r.key + '&s=rsv3&output=json&location=' + (b || this.get('center', null, !0)); (new g.ib.yb(c, { callback: 'callback', gy: !0, Ed: 'REGEO' })).g('complete', function (b) {
        b = b.regeocode.addressComponent; a({
          province: b.province,
          city: b.city instanceof Array ? '' : b.city,
          citycode: b.citycode instanceof Array ? '' : b.citycode,
          district: b.district instanceof
Array ? '' : b.district
        })
      }, this)
    },
    A: function (a, b) {
      b = g.extend({}, b); this.id = g.a.xb(this); this.CLASS_NAME = 'AMap.Map'; g.c.ya(this, b); this.D = !0; b = b || {}; b.mapStyle && g.r.hK[b.mapStyle] && (b.mapStyle = 'amap://styles/' + g.r.hK[b.mapStyle]); b.mapStyle && b.mapStyle.indexOf('amap://styles/') !== -1 ? (b.styleUrl = b.mapStyle, delete b.mapStyle) : b.styleUrl = 'amap://styles/normal'; b.bgColor && g.extend(g.r.Ee, b.bgColor); b.maxPitch && (b.maxPitch = Math.min(this.w.maxPitch, Math.max(b.maxPitch, 0))); b.pitch && (b.pitch = Math.min(b.maxPitch ||
this.w.maxPitch, Math.max(b.pitch, 0))); b.viewMode !== '3D' && (b.pitch = 0); g.r.Vr = b.buildingColor || null; b.mobile && (g.l.ba = !0); b.noPoi && (g.r.qua = !0); b.editEnable = g.r.UQ ? b.editEnable : !1; b.editEnable && (b.nolimg = !0, b.showIndoorMap = !1); void 0 !== b.nolimg && (b.nolimg_param = b.nolimg); b.viewMode === '3D' && g.l.np && void 0 === b.showBuildingBlock && !0 === b.showBuildingBlock; this.tq = !!b.enableSocket; b.server && (g.r.Yd = b.server); b.vdataUrl && (g.r.zL = b.vdataUrl); if (typeof a === 'string') { if (a = this.K = document.getElementById(a), !a) return } else {
        a.tagName ===
'DIV' && (this.K = a)
      } if (this.K.EM) { var c = this.K.EM; c.D = !0; c.destroy(); c.D = !1 }g.Ce.lf.start({ id: this.id, K: this.K }); this.K.EM = this; var c = this.w.zooms[1]; var d = this.w.zooms[0]; b.zooms ? (b.zooms[0] = Math.max(d, b.zooms[0]), !0 === b.expandZoomRange && (c = g.l.ba ? g.l.Lc ? 19 : 20 : 20), b.zooms[1] = Math.min(c, b.zooms[1])) : b.zooms = [d, c]; b.forceZooms && (b.zooms = b.forceZooms); b = this.dna(b); c = this.getSize(!0); b.center && (b.center = g.a.Ja(b.center)); this.nj = this.koa(b.crs || this.w.crs, b.center || this.w.center); this.jma(c, b); d = b.lang
      d !== 'en' && d !== 'zh_cn' && d !== 'zh_en' && (b.lang = 'zh_cn'); g.j.tg || (b.rotation = 0, b.pitch = 0, b.rotateEnable = !1); b.preloadMode = !1; g.l.KS ? !1 !== b.workerMode && (B.Ob.Ot ? (b.workerMode = !1, B.Ob.Ot++) : B.Ob.Ot = 1) : b.workerMode = !1; b.layers && (d = b.layers, delete b.layers, b.layers = d); b.baseRender = b.baseRender || g.l.L1; b.forceVector && (b.baseRender = g.l.Pf ? 'vw' : 'v'); b.disableVector && (b.baseRender = 'd'); b.renderer === 'dom' && (b.baseRender = 'd', b.overlayRender = 'd'); c = Math.max(c.width, c.height); g.l.ja && (c *= Math.min(2, window.devicePixelRatio ||
1)); b.baseRender === 'vw' && c > g.l.Qta && (b.baseRender = 'dv'); c = b.vectorMapForeign; b.baseRender == 'd' && c && (b.vectorMapForeign = !1); c && !g.l.Up && (b.vectorMapForeign = !1); c = this.S6(b.vectorMapForeign); b.vectorMapForeign = c[0]; b.name_field = c[1]; b.turboMode = !1; g.a.tb(this, b); this.hf(this.w); 'rotateEnable' in b || b.viewMode !== '3D' || !g.l.np || this.set('rotateEnable', !0); 'pitchEnable' in b || b.viewMode !== '3D' || !g.l.np || this.set('pitchEnable', !0); c = this.get('zoom', null, !0); this.get('viewMode') === '3D' && g.l.np || (c = Math.round(c))
      d = this.get('zooms'); c > d[1] ? c = d[1] : c < d[0] && (c = d[0]); this.set('zoom', c); this.w.zoom = c; this.moa(this.w); this.gQ(); var e = this; this.hf({ overlays: [], infos: {}, controls: {} }); var f = []; b.vectorMapForeign && f.push('gridmap'); b.vectorMapForeign && g.l.Up && f.push('MVT', 'vectorForeign'); b.forceVector && (f.push('vectorlayer'), f.push('overlay')); b.viewMode === '3D' && g.l.np && f.push('Map3D'); g.l.il && (b.vectorMapForeign || b.mapStyle || b.nolimg) && f.push('labelcanvas'); b.editEnable && f.push('edit'); g.l.il && (f.push('AMap.IndoorMap'),
      f.indexOf('Map3D') !== -1 && f.push('AMap.IndoorMap3D')); this.ja = g.l.ja && this.get('detectRetina'); this.o$(b); this.D = !1; e = this; this.Bta(function () {
        e.j6(function () {
          g.sb.Jg(f, function () {
            if (!e.get('destroy')) {
              var b = new g.Ob(a, e); if (g.Ve) { var c = (g.Ve[0] || g.Ve).stylemaps['50001:1'].browserStyle[0].split('&'); b.XF = [c[0], c[4]] }b.bf('zoom center centerCoords rotation yaw pitch resolution'.split(' '), e.view, !0); b.g('complete', function () {
                var a = {}; b.J && b.J.type == '3D' && (a.canvas = b.J.xa, a.gl = b.J.da); this.q('complete',
                  a)
              }, e, !0); b.nj = e.nj; e.bf(['zoomSlow', 'panTo', 'targetLevel', 'render'], b); b.bf(['size', 'bounds'], e); e.loaded = !0; e.q('coreMapCreated'); g.l.il && e.Lla(); e.D = !0; e.view.type === '3D' && (e.AmbientLight || (e.AmbientLight = new g.Sw.NV([1, 1, 1], 0.9)), e.DirectionLight || (e.DirectionLight = new g.Sw.XV([0, -1, 1], [1, 1, 1], 0.1))); e.D = !1
            }
          })
        })
      })
    },
    S6: function (a) {
      if (a) {
        if (typeof a === 'string' && a.substr(0, 6) === 'style_') return [a]; switch (a) {
          case !0:case 'Chinese_Simplified':return ['style_zh_cn']; case 'English':return ['style_en']; case 'Local':return ['style_local']
          case 'Chinese_Traditional':return ['style_en', ['coalesce', '{name_zh-Hant}', '{name}']]; default:return ['style_zh_cn']
        }
      } else return [!1]
    },
    j6: function (a) {
      try {
        var b = this.get('vectorMapForeign'); if (b) {
          if (g.TJ = 0, g.pz = 0, typeof b === 'string' && b.substr(0, 6) == 'style_') {
            var c = this; var d; var e = b.slice(6); e.length == 32 ? (c.js = !0, g.r.C3 = g.r.WI + 'style_local/', d = g.r.pc + '://restapi.amap.com/v4/sdk/map/styles?styleid=' + e + '&key=' + g.r.key + '&sdkType=abroad_js_json&s=rsv3', d += '&platform=JS&logversion=2.0', d += '&appname=' + g.r.Rp, d += '&csid=' +
g.a.gF(), d += '&sdkversion=' + g.r.uo) : (c.js = !1, g.r.C3 = g.r.WI + b + '/', d = g.r.pc + '://a.amap.com/jsapi/static/json/web_v8_' + b + '.json'); var f = new g.ib.XMLHttpRequest(d, { oU: 'application/json', responseType: 'json' }); f.g('complete', function (b) {
              if (b && b.data && !b.data.IDa) {
                if (b.data.style)b = b.data; else if (typeof b.data === 'string')b = JSON.parse(b.data); else { c.set('vectorMapForeign', !1); c.js = !1; a(); return } var d = b.hole; if (d) {
                  g.oy = []; for (var e = 0, f = d.length; e < f - 1; e += 2) {
                    var h = c.lc([d[e + 1], d[e]], 16); g.oy.push([h.x >> 0, h.y >>
0])
                  }
                }(d = b.style) && d.layers && (g.Jta = d.layers, b.zoomlevel && (g.TJ = b.zoomlevel[0], g.pz = b.zoomlevel[1]))
              } else c.js = !1, c.set('vectorMapForeign', !1); a()
            }, this); f.g('error', function () { c.js = !1; c.set('vectorMapForeign', !1); a() }, this)
          } else this.js = !1, this.set('vectorMapForeign', !1), a()
        } else this.js = !1, this.set('vectorMapForeign', !1), a()
      } catch (h) { this.js = !1, this.set('vectorMapForeign', !1), a() }
    },
    Bta: function (a) {
      function b () {
        var a = AMap.anole; var b = {}; var c = []; var d = 0; var e = void 0; if (a) {
          for (var a = a.replace(/\?/g, ':').replace(/\//g,
              '&'), e = a.split(''), a = 0, f = e.length; a < f; a++) void 0 === b[e[a]] && (b[e[a]] = d++, c.push(e[a])); c.reverse(); d = 0; for (a = e.length; d < a; d++)e[d] = c[b[e[d]]]; a = e.join(''); g.Ve = eval(a); delete AMap.anole
        }
      } if (g.l.Ie || g.Ve)a(); else {
        var c = !0; if (window.__AMapStyleSource)c = !1; else try { var d = JSON.parse(localStorage.getItem('_AMap_anole')); d && d.version === g.l.kf && d.script ? eval(d.script) : c = !1 } catch (e) { c = !1 } if (c)b(), a(); else {
          var f = document.createElement('script'); f.mDa = 'anonymous'; f.id = 'amap_anole_js'; f.src = window.__AMapStyleSource ||
g.r.pc + '://vdata.amap.com/style?v=' + g.r.uo + '&key=' + g.r.key + '&mapstyle=normal'; c = document; (c.head || c.getElementsByTagName('head')[0] || c.body).appendChild(f); f.onload = function () { if (!g.Ve) { if (!window.__AMapStyleSource && g.l.Gv) try { var c = { version: g.l.kf, script: "AMap['anole']=" + JSON.stringify(AMap.anole) }; localStorage.setItem('_AMap_anole', JSON.stringify(c)) } catch (d) {}b() }a(); f.parentNode.removeChild(f) }
        }
      }
    },
    getViewMode_: function () { return this.view.type },
    jqa: function (a, b, c) {
      var d = new g.U(a[4], a[5]); if ((a =
new g.le(a[0], a[1], a[2], a[3])) && b && d) { for (var e = c[1]; e > c[0]; e -= 1) { var f = this.lc(a.xc, e); var h = this.lc(a.oc, e); if (Math.abs(h.x - f.x) < b.width && Math.abs(f.y - h.y) < b.height) break } return [d, Math.min(e + 1, c[1])] } return null
    },
    jma: function (a, b) { if (!(b && b.center && b.zoom)) { var c = this.jqa(g.r.Rd, a, b.zooms); b.center = b.center || c && c[0]; typeof b.zoom !== 'number' && (b.zoom = c && c[1]) } },
    koa: function (a, b) {
      if (b instanceof g.U) {
        if (typeof a === 'string') { switch (a) { case 'EPSG3395':return g.bi.YV; case 'EPSG4326':return g.bi.ZV } return g.bi.LL } if (a.pointToLngLat &&
a.lngLatToPoint) return { mE: a.pointToLngLat, OD: a.lngLatToPoint, kq: a.getResolution }; throw 'illegal projection'
      } var c = this.get('zoom', null, !0); return { kq: function (a) { return Math.pow(2, c - a) }, OD: function () {}, mE: function () {} }
    },
    Hxa: function (a, b) {
      this.ax && this.ax.stop(); var c = ['pitch', 'rotation', 'zoom', 'center']; var d = {}; var e = !1; var f; for (f in a) if (a.hasOwnProperty(f) && g.a.indexOf(c, f) !== -1) { var h = this.get(f); void 0 === h || h === a[f] || h.gb && h.gb(a[f]) || (d[f] = this.get(f), e = !0) }e && (this.ax = new g.Lj(d, a, null, 0), this.ax.transition =
function (a, c, e) { e /= b || 300; if (e >= 1) return c; var f = {}; var h; for (h in d)d.hasOwnProperty(h) && (f[h] = h === 'center' ? a[h].add(c[h].$a(a[h]).Md(e)) : a[h] + (c[h] - a[h]) * e); return f }, this.ax.Gq = function (b) { b === a && (this.ax.stop(), this.Fd = null); for (var c in b)b.hasOwnProperty(c) && (c === 'center' ? (this.D = !0, this.setCenter(b[c], !0), this.D = !1) : this.set(c, b[c])) }, this.ax.Mn(this))
    },
    moa: function (a) { this.get('viewMode') === '3D' && g.l.np ? (this.set('baseRender', 'vw'), this.view = new g.sM(this, a)) : this.view = new g.PF(this, a); this.h5() },
    h5: function () { this.Di = this.get('baseRender') > 'd' || this.view.type === '3D' },
    featuresChanged: function () { this.gQ() },
    bT: function () { this.gQ(); this.JU() },
    JU: function () {
      if (this.sm) {
        var a = !0; this.D = !0; var b = this.getMapStyle(); if (!1 === this.get('showIndoorMap') || b !== 'normal' && b !== 'amap://styles/normal')a = !1; for (var b = this.getLayers(), c = this.D = !1, d = 0, e = b.length; d < e; d += 1) { if (b.hasOwnProperty(d) && b[d].CLASS_NAME === 'AMap.IndoorMap' && b[d] !== this.sm) { a = !1; break }b[d].sq && b[d].sq() && b[d].get('visible') && (c = !0) }(a = c &&
a) && this.sm.getMap() !== this && this.sm.setMap(this); this.sm.set('visible', a)
      }
    },
    gQ: function () { this.o$(); if (this.view && this.view.type !== '3D') { var a = this.get('baseRender'); if (a && !(a > 'dv')) { var b = this.get('features', null, !0); this.D = !0; var c = this.getMapStyle(); this.D = !1; var d = this.get('editEnable'); b && c && (g.l.Up && (d || b !== 'all' || c !== 'normal' && c !== 'amap://styles/normal') ? (this.set('baseRender', 'v'), this.wT = a) : this.wT && (this.set('baseRender', this.wT), this.wT = null)); this.h5() } } },
    Lla: function () {
      var a = this; !a.sm &&
a.K && (a.indoorMap = a.sm = new AMap.IndoorMap({ innerLayer: !0 }), a.JU(), g.a.Xc(function () { a.q('indoor_create', { target: a }); a.set('display') }))
    },
    layersChanged: function () { this.D = !0; var a = this.getLayers(); this.bK = this.D = !1; for (var b = 0; b < a.length; b += 1)a[b].D = !0, a[b].getMap() !== this && a[b].setMap(this), a[b].D = !1, a[b].bK && (this.bK = !0); this.JU() },
    getMapNumber: function () { if (this.map) return this.map.tE() },
    getAdcode: function () { g.c.add(this, 'getAdcode'); return g.r.Jla },
    o$: function () {
      function a () {
        var a = !1; g.a.Rb(b.w.layers,
          function (b) { if (b.IG && b.constructor === B.o.qb) return a = !0, !1 }, b); if (g.a.ka(['d', 'dv'], b.get('baseRender')) || !g.a.ka(['normal', 'amap://styles/normal'], b.get('mapStyle')) || b.get('viewMode') === '3D' && b.get('pitch') > 0 || b.get('features') !== 'all' || b.get('editEnable') || !b.get('turboMode'))a = !1; return a
      } if (!this.X7) {
        var b = this; var c = a(); var d = this.get('rasterLayer'); if (d && !c) this.uk(d), this.set('rasterLayer', void 0); else if (!d && c && this.get('layers')) {
          d = new B.o.qb({ innerLayer: !0, map: this, tk: !0, zIndex: 0 }); d.Dsa = !0; if (this.w.layers) {
            var e =
null; g.a.Rb(this.w.layers, function (a) { a instanceof B.o.qb && a.IG && (e === null || a.get('zIndex') > e.get('zIndex')) && (e = a) }); e && d.bf(['zIndex', 'opacity', 'zooms', 'visible'], e)
          } this.set('rasterLayer', d, !0)
        }
      }
    },
    dna: function (a) {
      a || (a = {}); if (a.hasOwnProperty('defaultLayer')) { a.layers = [a.defaultLayer]; var b = a.defaultLayer; b.KP = !0; this.set('defaultLayer', b, !0) }a.layers && a.layers.length !== 0 ? this.set('defaultLayer', a.layers[0], !0) : (b = new B.o.qb({ innerLayer: !0 }), a.layers = [b], b.KP = !0, this.set('defaultLayer', b, !0))
      if (b = a.view)b.w.rotation && (a.rotation = b.w.rotation), b.w.center && (a.center = b.w.center), b.w.zoom && (a.zoom = Math.max(a.zooms[0], Math.min(a.zooms[1], b.w.zoom))), b.w.crs && (a.crs = b.w.crs); a.level && !a.zoom && (a.zoom = a.level); return a
    },
    setLimitBounds: function (a) { g.c.add(this, 'setLimitBounds'); a instanceof g.qp && (a.D = !0, a = a.toBounds(), a.D = !1); a instanceof g.le || (a = null); this.set('limitBounds', a) },
    clearLimitBounds: function () { g.c.add(this, 'clearLimitBounds'); this.set('limitBounds', null) },
    getLimitBounds: function () {
      g.c.add(this,
        'getLimitBounds'); return this.get('limitBounds', null, !0)
    },
    TH: function (a) { var b = this.get('layers'); if (!(g.a.indexOf(b, a) >= 0) && (b.push(a), this.set('layers', b), a.zB)) { a = a.getLayers(); for (var b = -1, c = a.length; ++b < c;) { var d = a[b]; d instanceof B.o.Xb || !d.setMap || d.setMap(this) } } },
    uC: function (a) {
      var b = this.get('overlays'); g.a.indexOf(b, a) >= 0 || (a instanceof B.C.Sn ? (this.get('overlays').push(a), this.ry instanceof B.C.Sn && (this.ry.D = !0, this.ry.close(), this.ry.D = !1), this.ry = a, this.set('contextmenu', a, !0)) : (a instanceof
B.C.Ze && (this.tm instanceof B.C.Ze && this.Lz(this.tm), this.tm = a), this.get('overlays').push(a)), this.q('overlays'))
    },
    uk: function (a) { var b = this.get('layers'); var c = g.a.indexOf(b, a); if (c !== -1) { if (a.zB) for (c = b.length; --c > -1;) { var d = b[c]; d.aB !== a && d !== a || b.splice(c, 1) } else a.aB && a.aB.Pka(a), b = g.a.Do(b, c); this.set('layers', b); if (a.zB) for (a = a.getLayers(), b = -1, c = a.length; ++b < c;)d = a[b], d instanceof B.o.Xb || !d.setMap || d.setMap() } },
    getZooms: function () { return this.get('zooms', null, !0) },
    setZooms: function (a) {
      return this.set('zooms',
        a, !0)
    },
    Lz: function (a) { var b = this.get('overlays'); this.set('overlays', g.a.Do(b, g.a.indexOf(b, a))) },
    getTileCoordByLngLat: function (a, b, c) { b = b || 256; this.D = !0; c = c || Math.round(this.getZoom()); this.D = !1; a = this.lc(a, c); c = new g.mr(c, Math.floor(a.x / b), Math.floor(a.y / b)); c.dD = a.x % b; c.eD = a.y % b; return c },
    setZoom: function (a, b) {
      g.c.add(this, 'setZoom'); a = this.jD(a); var c = this.get('zooms'); a > c[1] && (a = c[1]); a < c[0] && (a = c[0]); this.get('zoomEnable') && (b || !this.loaded ? (this.set('zoom', a), this.q('zoomstart'), this.q('zoomchange'),
      this.q('zoomend')) : this.set('zoomSlow', a))
    },
    getZoom: function (a) { g.c.add(this, 'getZoom'); return a ? this.get('zoom', null, !0) : this.jD(this.get('targetLevel') || this.get('zoom', null, !0)) },
    getCenter: function () { g.c.add(this, 'getCenter'); return this.get('center', null, !0) },
    setCenter: function (a, b) { g.c.add(this, 'setCenter'); a = g.a.Ja(a); b || !this.loaded ? (this.q('movestart'), this.set('center', a), this.q('mapmove'), this.map ? this.map.q('moveend') : this.q('moveend')) : (this.D = !0, this.panTo(a), this.D = !1) },
    getCoordsBound: function () { return this.view.km() },
    getCoordsBoundByZoom: function (a) { return this.view.gqa(a) },
    setRotation: function () { var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0; g.c.add(this, 'setRotation'); !g.l.Ie && this.get('rotateEnable') && this.set('rotation', a) },
    getRotation: function () { g.c.add(this, 'getRotation'); return this.get('rotation') },
    setPitch: function (a) { g.c.add(this, 'setPitch'); a = Math.min(this.get('maxPitch'), Math.max(a, 0)); this.view.type === '3D' && this.get('pitchEnable') && this.set('pitch', a) },
    getPitch: function () {
      g.c.add(this,
        'getRotation'); return this.view.type === '3D' ? this.get('pitch') : 0
    },
    getStatus: function () { g.c.add(this, 'getStatus'); for (var a = 'isHotspot pitchEnable dragEnable zoomEnable keyboardEnable jogEnable doubleClickZoom scrollWheel resizeEnable touchZoom rotateEnable animateEnable'.split(' '), b = {}, c = 0; c < a.length; c += 1)b[a[c]] = this.get(a[c], null, !0); return b },
    setStatus: function (a) {
      g.c.add(this, 'setStatus'); for (var b in a) {
        a.hasOwnProperty(b) && 'isHotspot,pitchEnable,dragEnable,keyboardEnable,doubleClickZoom,scrollWheel,zoomEnable,jogEnable,continuousZoomEnable,resizeEnable,animateEnable,rotateEnable,touchZoom'.indexOf(b) !== -1 &&
this.set(b, a[b])
      }
    },
    getResolution: function (a, b) { g.c.add(this, 'getResolution'); var c = (a = g.a.Ja(a)) ? a.Q : this.get('center', null, !0).Q; return this.nj.kq(b || this.get('zoom')) * Math.cos(c * Math.PI / 180) },
    getScale: function (a) { g.c.add(this, 'getScale'); this.D = !0; a = this.getResolution() * (a || 96) / 0.0254; this.D = !1; return a },
    getDefaultCursor: function () { g.c.add(this, 'getDefaultCursor'); return this.get('defaultCursor', null, !0) || 'url(' + g.r.Gb + '/theme/v1.3/openhand.cur),default' },
    setDefaultCursor: function (a) {
      g.c.add(this,
        'setDefaultCursor'); return this.set('defaultCursor', a, !0)
    },
    zoomIn: function (a) { g.c.add(this, 'zoomIn'); this.D = !0; this.setZoom(this.getZoom() + 1, a); this.D = !1 },
    zoomOut: function (a) { g.c.add(this, 'zoomOut'); this.D = !0; this.setZoom(this.getZoom() - 1, a); this.D = !1 },
    jD: function (a) { return this.view && this.view.type === '3D' ? g.a.Ac(a, 4) : Math.round(a) },
    setZoomAndCenter: function (a, b, c) {
      g.c.add(this, 'setZoomAndCenter'); b = g.a.Ja(b); a = this.jD(a); var d = this.get('zooms'); a > d[1] && (a = d[1]); a < d[0] && (a = d[0]); this.D = !0; this.loaded
        ? this.set('zoomAndCenter', [a, b, c]) : (this.setZoom(a, !0), this.setCenter(b, !0)); this.D = !1
    },
    clearMap: function () { g.c.add(this, 'clearMap'); for (var a = this.get('overlays'), b = 0; b < a.length; b += 1)a[b].set('map', null, !0); this.set('overlays', []); if (this.map && this.map.la) for (a = this.map.la, b = a.length - 1; b >= 0; b -= 1) if (a[b].S instanceof B.o.PL) { var c = a[b].S; c.D = !0; c.setMap(null); c.D = !1 } },
    destroy: function () {
      g.c.add(this, 'destroy'); this.sm && (this.sm.setMap(), this.indoorMap = this.sm = null); this.set('overlays', []); this.set('defaultLayer',
        null); this.set('layers', []); var a = this.get('controls'); a.remove = []; for (var b in a.Kd)a.Kd.hasOwnProperty(b) && a.remove.push(a.Kd[b]); a.Kd = []; a.add = []; this.set('controls', a); this.set('destroy', !0); this.La = !1; this.zl(); this.w = this.K = null; this.Ic && this.Ic.zl(); this.Ic = null; this.view && this.view.zl(); this.view = null; this.wi(); B.Ob.Ot--
    },
    addControl: function (a) {
      g.c.add(this, 'addControl'); var b = g.a.xb(a); var c = this.get('controls') || {}; c.Kd = c.Kd || {}; c.Kd[b] || (c.Kd[b] = a); c.add = c.add || []; c.add.push(a); this.set('controls',
        c)
    },
    removeControl: function (a) { g.c.add(this, 'removeControl'); var b = g.a.xb(a); var c = this.get('controls') || {}; c.Kd = c.Kd || {}; c.Kd[b] && delete c.Kd[b]; c.remove = c.remove || []; c.remove.push(a); this.set('controls', c) },
    clearControl: function () { g.c.add(this, 'clearControl'); var a = this.get('controls') || {}; a.remove = a.remove || []; a.Kd = a.Kd || {}; for (var b in a.Kd)a.Kd.hasOwnProperty(b) && (a.remove.push(a.Kd[b]), delete a.Kd[b]); this.set('controls', a) },
    plugin: function (a, b) {
      g.c.add(this, 'plugin'); typeof a === 'string' && (a = [a])
      for (var c = [], d = 0; d < a.length; d += 1) { var e = a[d].split('.'); e.length > 2 || (e.length == 2 ? e[0] === 'AMap' && (window.AMap[e[1]] || c.push(a[d])) : c.push(a[d])) } if (c.length === 0) return b(), this; g.sb.Jg(c, b); return this
    },
    clearInfoWindow: function () { g.c.add(this, 'clearInfoWindow'); var a = this.get('overlays'); a && a.length !== 0 && this.tm && (this.tm.D = !0, this.tm.close(), this.tm.D = !1) },
    remove: function (a) {
      g.c.add(this, 'remove'); a instanceof Array || (a = [a]); for (var b = 0; b < a.length; b += 1) {
        var c = a[b]; c.D = !0; c.getMap && c.getMap() === this &&
(c.close ? c.close() : c.setMap && c.setMap(null)); c.D = !1
      }
    },
    add: function (a) { g.c.add(this, 'add'); a instanceof Array || (a = [a]); for (var b = 0; b < a.length; b += 1) { var c = a[b]; c.D = !0; if (c.getMap && c.getMap() !== this) if (c.open) continue; else c.setMap && c.setMap(this); c.D = !1 } },
    getAllOverlays: function (a, b) {
      g.c.add(this, 'getAllOverlays'); var c = this.get('overlays'); if (a) { for (var d = 'amap.' + a.toLowerCase(), e = [], f = 0; f < c.length; f += 1)d !== c[f].CLASS_NAME.toLowerCase() || !b && (c[f].Ca || c[f].isOfficial) || e.push(c[f]); return e } if (!b) {
        e =
[]; for (f = 0; f < c.length; f += 1)c[f].Ca || c[f].isOfficial || e.push(c[f]); c = e
      }d = this.get('layers'); e = []; if (d) for (var f = 0, h = d.length; f < h; f += 1)d[f] instanceof B.o.PL && e.push(d[f]), d[f].kb && (e = e.concat(d[f].kb)); return c.concat(e)
    },
    triggerResize: function () { this.map && this.map.$O() },
    refreshSize: function () { this.gG = this.R3() },
    R3: function () { return g.j.N3(this.K) },
    getSize: function () { g.c.add(this, 'getSize'); (!this.gG || this.gG.width * this.gG.height < 10) && this.refreshSize(); return this.gG },
    getContainer: function () {
      g.c.add(this,
        'getContainer'); return this.K
    },
    panTo: function (a) { g.c.add(this, 'panTo'); a = g.a.Ja(a); this.loaded ? this.set('panTo', a) : (this.D = !0, this.setCenter(a), this.D = !1) },
    panBy: function (a, b, c) {
      g.c.add(this, 'panBy'); this.D = !0; var d = this.get('rotation') * Math.PI / 180; var e = a * Math.cos(d) + Math.sin(d) * b; a = -Math.sin(d) * a + Math.cos(d) * b; b = this.loaded && this.map && this.map.Fd ? this.map.Fd.z9 : this.get('centerCoords'); d = Math.pow(2, 20 - this.getZoom()); e = b.add(new g.H(-e * d, -a * d)); e = this.Nd(e); !this.loaded || c ? this.setCenter(e, c) : this.set('panTo',
        e); this.D = !1
    },
    setFitView: function (a, b, c, d) { g.c.add(this, 'setFitView'); this.D = !0; var e = this.get('size'); var f = e.height; if (!e.width || !f) return !0; if (a = this.k4(a)) { if (c = this.fJ(a, 0, new g.H(40, 40), c, d))b = b || !this.getBounds().contains(a.zi()) || g.l.ba && Math.abs(c[0] + this.get('zoom', null, !0)) > 1, this.setZoomAndCenter(c[0], c[1], b); this.D = !1; return a } },
    k4: function (a) {
      if (a) if (a instanceof B.C.Ih)a = [a]; else { if (!(a instanceof Array)) return null } else this.D = !0, a = this.getAllOverlays(), this.D = !1; if (a) {
        for (var b, c = 0; c <
a.length; c += 1) { var d = a[c]; if (d.get('visible') && !(d instanceof B.C.Ze || d instanceof B.C.Sn)) { d.D = !0; var e = d.getBounds(); d.D = !1; e && (b = b ? b.oza(e) : e.cb()) } } return b
      }
    },
    getBounds: function (a) { g.c.add(this, 'getBounds'); var b = this.view.Jd(); return a && b.toBounds ? (b.D = !0, a = b.toBounds(), b.D = !1, a) : b },
    setBounds: function (a, b, c, d, e, f) { g.c.add(this, 'setBounds'); c = this.fJ(a, b, c, e, f); d = d || g.l.ba && Math.abs(c[0] + b - this.get('zoom', null, !0)) > 1; this.D = !0; this.setZoomAndCenter(c[0], c[1], d); this.D = !1; return a },
    X3: function (a,
      b, c, d, e) { a = this.k4(a); return this.fJ(a, b, c, d, e) },
    getCoordsBoundByZoomIn3D: function (a) { this.YH || (this.YH = new g.sM()); this.D = !0; var b = this.getRotation(); var c = this.getPitch(); var d = this.getSize(!0).cb(); this.D = !1; a = { size: d, zoom: a, rotation: b, pitch: c, centerCoords: this.get('centerCoords') }; this.YH.hf(a, !0); this.YH.gr(); return this.YH.km() },
    fJ: function (a, b, c, d, e) {
      b = b ? Number(b) : 0; this.D = !0; var f = this.getRotation(); var h = this.getPitch(); var k = this.getSize(!0).cb(); var l = this.view.type; this.D = !1; var m = a.tR(this); a = a.wR(this); this.yC ||
(this.yC = l === '3D' ? new g.sM() : new g.PF()); this.yC.hf({ size: k, zoom: 3, rotation: f, pitch: h, centerCoords: m }, !0); var n = h = 0; d ? (n = d[0], c = d[1], h = d[2], d = d[3], k.width -= h + d, k.height -= n + c, h = (h - d) / 2, n = (n - c) / 2) : c && (k.width -= 2 * c.x, k.height -= 2 * c.y); e = e || (g.l.ba ? 17 : 18); c = this.get('zooms'); d = c[0]; var p = Infinity; var q = Infinity; do {
        this.yC.hf({ zoom: d }, !0); l === '3D' && this.yC.gr(); for (var q = p = Infinity, r = -Infinity, s = -Infinity, u = 0; u < a.length; u += 1) var v = this.yC.ke(a[u]); var p = Math.min(p, v.x); var r = Math.max(r, v.x); var q = Math.min(q, v.y); var s = Math.max(s,
          v.y); p = r - p; q = s - q; if (p > k.width || q > k.height) { d -= 1; break }d += 1
      } while (d <= c[1]);d = Math.min(c[1], e, Math.max(c[0], d + b)); d = Math.floor(d); b = Math.pow(2, 20 - d); e = f * Math.PI / 180; f = h * Math.cos(e) + Math.sin(e) * n; e = -Math.sin(e) * h + Math.cos(e) * n; m = m.$a(new g.H(f * b, e * b)); m = this.Zh(m, 20); return [d, m]
    },
    setLayers: function (a) { g.c.add(this, 'setLayers'); for (var b = 0; b < a.length; b += 1)a[b].set('map', this, !0); this.set('layers', a) },
    getLayers: function () {
      g.c.add(this, 'getLayers'); var a = this.get('layers', null, !0); var a = a.slice(); if (this.D) {
        for (var b =
[], c = -1, d = a.length; ++c < d;) { var e = a[c]; if (e.zB) for (var e = e.getLayers(), f = -1, h = e.length; ++f < h;) { var k = e[f]; k instanceof B.o.Xb && g.a.indexOf(a, k) === -1 && b.push(k) } }a = a.concat(b)
      } else for (b = a.length; --b > -1;)a[b].aB && a.splice(b, 1); return a
    },
    getDefaultLayer: function () { g.c.add(this, 'getDefaultLayer'); return this.get('defaultLayer', null, !0) },
    setDefaultLayer: function (a) {
      g.c.add(this, 'setDefaultLayer'); this.D = !0; a.KP = !0; var b = this.get('defaultLayer'); var c = this.get('layers'); if (b) {
        if (a === b) return; b.KP = !1; c = g.a.Do(c,
          g.a.indexOf(c, b))
      } this.set('defaultLayer', a, !0); a.D = !0; a.getMap == this && c.push(a); a.D = !1; this.setLayers(c); this.D = !1
    },
    pixelToLngLat: function (a, b) { g.c.add(this, 'pixelToLngLat'); return this.Zh(a, b) },
    lnglatToPixel: function (a, b) { g.c.add(this, 'lnglatToPixel'); return this.lc(a, b) },
    drawPolyline: function (a) { g.c.add(this, 'drawPolyline'); this.set('draw', 'polyline'); this.set('drawStyle', a || { strokeColor: '#006600', ob: 0.9 }) },
    render: function (a) { g.c.add(this, 'render'); this.map && this.map.set('display', a ? 1 : 0) },
    setMask: function (a) {
      g.c.add(this,
        'setMask'); this.set('mask', a); this.map && (this.map.YJ = !0, this.map.set('display'))
    },
    drawPolygon: function (a) { g.c.add(this, 'drawPolygon'); this.set('draw', 'polygon'); this.set('drawStyle', a || { strokeColor: '#006600', ob: 0.9, fillColor: '#FFAA00', ge: 0.9 }) },
    drawCircle: function (a) { g.c.add(this, 'drawCircle'); this.set('draw', 'circle'); this.set('drawStyle', a || { strokeColor: '#006600', ob: 0.9, fillColor: '#006600', ge: 0.9 }) },
    tD: function () { return this.view.tD() },
    getCameraState: function () {
      g.c.add(this, 'getCameraState'); if (this.view &&
this.view.type == '3D') return this.view.M3()
    },
    endDraw: function () { this.set('draw', null) },
    isGoogleTileVisible: function () { return this.map.isForeignMapVisible() },
    isForeignMapVisible: function () { if (this.get('gridForeignMap') || this.get('vectorForeignMap')) return this.map && this.map.sga() },
    ke: function (a, b, c) { g.c.add(this, 'p20ToContainer'); return this.view.ke(a, b, c) },
    Cg: function (a, b, c) { g.c.add(this, 'containerToP20'); return this.view.Cg(a, b, c) },
    getObject3DByContainerPos: function (a, b, c) {
      g.c.add(this, 'getObject3DByContainerPos')
      if (this.view.type === '2D' || !this.map || !this.map.J) return null; this.D = !0; this.view.Cg(a); var d = this.view.Q3(a); var e = this.map.J.OT; var f = this.view.bc; var h = this.get('zoom', null, !0); var h = Math.pow(2, 20 - h); b = b || this.getLayers(); this.D = !1; for (var k = [], l = 0; l < b.length; l += 1) { var m = b[l]; m instanceof B.o.Pm && (m = m.ip(e, d, f, h, a)) && k.push(m) } return c ? k : k.length ? (k.sort(function (a, b) { return a.Td - b.Td }), { index: k[0].index, point: k[0].lE, distance: k[0].Td, object: k[0].object }) : null
    },
    iJ: function (a) {
      var b = this.get('layers', null, !0); var b =
b.slice(); if (this.D) { for (var c = [], d = -1, e = b.length; ++d < e;) { var f = b[d]; if (f.zB) for (var f = f.uEa(), h = -1, k = f.length; ++h < k;) { var l = f[h]; g.a.indexOf(b, l) === -1 && c.push(l) } }b = b.concat(c) } return b.filter(function (b) { return b instanceof B.o.Pm && (a ? a.indexOf(b) > -1 : !0) })
    },
    queryObjectIndexFromFboByContainerPos: function (a, b) {
      g.c.add(this, 'queryObjectIndexFromFboByContainerPos'); if (this.view.type === '2D' || !this.map || !this.map.J) return null; var c = this.diffFilterLayers(b); var d = this.iJ(b); var e = this.getSize(); if (c) {
        this.aH =
this.view.Ne.cb(), this.$G = this.view.bc.cb()
      } else if (this.aH && this.$G) { if (c = this.$G.Xu(this.view.bc), c = !(this.aH.Xu(this.view.Ne) && c)) this.aH = this.view.Ne.cb(), this.$G = this.view.bc.cb() } else this.aH = this.view.Ne.cb(), this.$G = this.view.bc.cb(); if (c) this.map.Nq(d); else { for (var f = 0; f < d.length; f += 1) { var h = d[f]; if (h instanceof B.o.Pm && h.Jra()) { c = !0; break } }c && this.map.Nq(d) } return this.map.Oy().bwa(a, e)
    },
    diffFilterLayers: function (a) {
      a = a || []; if (!this.ju || this.ju.length !== a.length) {
        return this.ju = a ? a.slice(0)
          : [], !0
      } for (var b = 0; b < this.ju.length;) { if (this.ju[b] !== a[b]) return this.ju = a ? a.slice(0) : [], !0; b++ } this.ju = a ? a.slice(0) : []
    }
  }); B.Ob.Wb({ PJ: 'lngLatToGeodeticCoord', dqa: 'geodeticCoordToLngLat', fJ: 'getFitZoomAndCenterByBounds', X3: 'getFitZoomAndCenterByOverlays', Ls: 'lnglatTocontainer', lnglatTocontainer: 'lngLatToContainer', Xp: 'containTolnglat', containTolnglat: 'containerToLngLat', zb: 'lngLatToP20', Nd: 'p20ToLngLat', ke: 'p20ToContainer', Cg: 'containerToP20', lc: 'project', Zh: 'unproject', queryObjectIndexFromFboByContainerPos: 'pickObject3DByContainerPos' }); B.Ob.Db({
    isHotspotChanged: function () { if (typeof this.wD !== 'undefined' && (this.Cna(), this.get('isHotspot'))) { var a = this.get('layers', null, !0); a && a.length && !this.wD && this.bK && this.Rua() } },
    Rua: function () { if (this.hk) this.V4(); else { var a = this; this.D = !0; this.plugin('AMap.HotSpot', function () { if (!a.wD) { if (!a.hk) { var b = new g.ei(); new B.C.Ze({ innerOverlay: !0 }); a.hk = b }a.V4() } }); this.D = !1 } },
    Cna: function () { this.hk && this.Nra() },
    f7: function (a) { a.type = 'hotspotover'; a.isIndoorPOI = !1; this.q('hotspotover', a) },
    d7: function (a) {
      a.type =
'hotspotclick'; a.isIndoorPOI = !1; this.q('hotspotclick', a)
    },
    e7: function (a) { a.type = 'hotspotout'; a.isIndoorPOI = !1; this.q('hotspotout', a) },
    V4: function () { var a = this.hk; this.hk.D = !0; this.hk.setMap(this); this.hk.D = !1; a.g('mouseover', this.f7, this); a.g('click', this.d7, this); a.g('mouseout', this.e7, this) },
    Nra: function () { var a = this.hk; a.G('mouseover', this.f7, this); a.G('click', this.d7, this); a.G('mouseout', this.e7, this); this.hk.D = !0; this.hk.setMap(null); this.hk.D = !1; this.hk = null }
  }); B.event = {
    Y: function (a, b, c, d) { g.F.g(a, b, c, d); return new g.uF(0, a, b, c, d) },
    Mla: function () {},
    addListener: function (a, b, c, d) { g.a.Sh(a.addListener) ? a.addListener(b, c, d) : (a.te || (a.te = g.va.te), g.va.g.call(a, b, c, d)); return new g.uF(1, a, b, c, d) },
    by: function (a, b, c, d) { g.a.Sh(a.by) ? a.by(b, c, d) : (a.te || (a.te = g.va.te), g.va.g.call(a, b, c, d, !0)); return new g.uF(1, a, b, c, d) },
    oI: function (a) { g.a.Sh(a.oI) ? a.oI() : g.va.wi.call(a) },
    Gu: function (a, b) { g.a.Sh(a.Gu) ? a.Gu(b) : g.va.wi.call(a, b) },
    removeListener: function (a) {
      a instanceof
g.uF && (g.a.Sh(a.Ci.removeListener) ? a.Ci.removeListener(a) : a.type === 0 ? g.F.G(a.Ci, a.YQ, a.gS, a.cf) : a.type === 1 && (a.Ci.te || (a.Ci.te = g.va.te), g.va.G.call(a.Ci, a.YQ, a.gS, a.cf)))
    },
    O: function (a, b) { var c = Array.prototype.slice.call(arguments, 1); g.a.Sh(a.O) ? a.O.apply(a, c) : (a.te || (a.te = g.va.te), g.va.q.apply(a, c)) }
  }; g.uF = g.ca.extend({ A: function (a, b, c, d, e) { this.type = a; this.Ci = b; this.YQ = c; this.gS = d; this.cf = e } })
  var pc = { Y: 'addDomListener', Mla: 'addDomListenerOnce', addListener: 'addListener', by: 'addListenerOnce', oI: 'clearInstanceListeners', Gu: 'clearListeners', removeListener: 'removeListener', O: 'trigger' }; var qc; for (qc in pc)pc.hasOwnProperty(qc) && (B.event[pc[qc]] = B.event[qc]); g.event = B.event; B.o.Xb = g.ca.extend({
    ka: [g.va, g.$e],
    A: function (a) { (new Date()).getTime(); this.CLASS_NAME = this.CLASS_NAME || 'AMap.Layer'; g.a.tb(this, a); this.w.map && (a = this.w.map, delete this.w.map, this.w.map = a); this.hf(this.w) },
    getContainer: function () { g.c.add(this, 'getContainer'); if (this.o && this.o.M) return this.o.M.wj() },
    getZooms: function () { return this.get('zooms', null, !0) },
    setOpacity: function (a) { g.c.add(this, 'setOpacity'); a !== this.get('opacity', null, !0) && this.set('opacity', a) },
    getOpacity: function () {
      return this.get('opacity',
        null, !0)
    },
    show: function () { g.c.add(this, 'show'); this.set('visible', !0); if (this.Dq) { var a = this.get('map', null, !0); a && a.set('layers', a.get('layers', null, !0)) } },
    hide: function () { g.c.add(this, 'hide'); this.set('visible', !1); if (this.Dq) { var a = this.get('map', null, !0); a && a.set('layers', a.get('layers', null, !0)) } },
    setMap: function (a) { g.c.add(this, 'setMap'); var b = this.get('map'); if (a)b && a !== b && b.uk(this), this.set('map', a); else if (b && (b.uk(this), this.set('map', null, !0), this.ti = !1, this.kg && this.kg(), this.onRemove)) this.onRemove() },
    getMap: function () { g.c.add(this, 'getMap'); return this.get('map', null, !0) },
    mapChanged: function () { var a = this.get('map'); a && a.TH(this) },
    setzIndex: function (a) { g.c.add(this, 'setzIndex'); this.set('zIndex', a) },
    getzIndex: function () { return this.get('zIndex', null, !0) }
  }); B.o.qb = B.o.Xb.extend({
    w: { tileSize: 256, visible: !0, opacity: 1, zIndex: 0, noLimg: 1, zooms: [3, 20], getTileUrl: g.l.ba ? g.r.UE : g.r.PD, errorUrl: g.a.qpa, detectRetina: !0, className: 'amap-layer', mapNumber: '', merge: !1, sort: !1, cacheSize: g.l.size },
    A: function (a) {
      this.CLASS_NAME = this.CLASS_NAME || 'AMap.TileLayer'; g.c.ya(this, a); (a = a || {}) && a.tileUrl && (a.getTileUrl = a.tileUrl); this.kna(a); var b = a.zooms; b && b[1] >= this.pl[0] ? (b[0] < this.pl[0] && (b[0] = this.pl[0]), b[1] > this.pl[1] && (b[1] = this.pl[1])) : a.zooms = [this.pl[0], this.pl[1]]
      arguments.callee.ma.call(this, a); a.tk && (this.tk = !0); this.IG = this.sq()
    },
    setTextIndex: function (a) { g.c.add(this, 'setTextIndex'); this.set('textIndex', a) },
    sq: function () { if (this.get('createTile')) return !1; var a = this.get('getTileUrl'); return a && a !== g.r.PD && a !== g.r.UE ? !1 : !0 },
    o2: function () { if (!this.sq()) return !1; var a = this.get('map'); return a && a.Di && a.get('lang') === 'zh_cn' && !this.noVector ? !0 : !1 },
    s4: function (a) {
      var b = g.r.WJ; g.l.ja && this.get('detectRetina') && (b = g.r.WJ.replace('scl=1', 'scl=2')); a && (b = b.replace('ltype=3',
        'ltype=11')); return b
    },
    dg: function (a) {
      var b = this.o2(); var c = this.get('map'); this.sq() && this.set('mapNumber', 'GS(2019)6379'); if (this.tk) return new g.o.qb(this, a, this.xr(this.s4(!0)), this.w.maxDataZoom, !0); if (b) {
        if (this.Dq = !0, g.o.hi) {
          if (c.get('baseRender') === 'dv' && !this.get('watermark')) {
            var b = c.get('showBuildingBlock'); var d = new g.o.qb(this, a, this.xr(this.s4(!b)), void 0, !0); b && (d.Ij = new g.o.od(new B.o.qb({ zooms: [16, 20], innerLayer: !0 }), a, ['building']), d.Ij.type = '\u697c\u5757\u56fe\u5c42', d.Ij.bf(['visible',
              'opacity', 'zIndex'], d, !0), d.Ij.DC(c.get('mapStyle') || 'normal')); d.type = '\u6805\u683c\u5e95\u56fe'; return d
          } if (c.get('baseRender') >= 'v' || this.get('watermark')) {
            return a.B.view.type == '3D' ? (c = new g.o.od(this, a, ['region', 'road']), c.type = '\u77e2\u91cf\u5e95\u56fe', b = new B.o.qb({ zooms: [17, 20], zIndex: 50, innerLayer: !0 }), c.Ij = new g.o.od(b, a, ['building']), c.Ij.gf = 17, c.Ij.type = '\u697c\u5757\u56fe\u5c42', c.Ij.Yy = 1, c.Ij.bf(['visible', 'merge', 'sort', 'opacity'], c, !0), b.X('rejectMapMask', this, !0)) : (c = new g.o.od(this,
              a, ['region', 'building', 'road']), c.type = '\u77e2\u91cf\u5e95\u56fe'), a.tma = c
          }
        } else return ['vectorlayer', 'overlay']
      } else return this.Dq = !1, new g.o.qb(this, a, null, this.w.maxDataZoom)
    },
    getTileUrlChanged: function () { var a = this.get('getTileUrl'); if (a === g.r.PD || a === g.r.UE || a === g.r.SK) this.bK = !0; typeof a === 'string' && (a = this.xr(a)); this.set('tileFun', a) },
    kna: function (a) {
      this.pl || (this.pl = [this.w.zooms[0], this.w.zooms[1]]); var b; a.hasOwnProperty('detectRetina') && !1 === a.detectRetina && (b = !0); g.l.ba && g.l.ja && this.w.detectRetina &&
!b && (this.pl[1] -= 1)
    },
    getTiles: function () { g.c.add(this, 'getTiles'); var a = this.get('tiles', null, !0); if (a && a.length)a = a[0]; else return []; for (var b = [], c, d = 0; d < a.length; d += 1)a[d].key && (c = a[d].key.split('/'), b.push('' + c[1] + ',' + c[2])); return b },
    reload: function () { g.c.add(this, 'reload'); this.set('reload', 1) },
    $s: function () { this.D = !0; var a = this.get('map', null, !0); this.setMap(null); this.ti = !1; this.setMap(a); this.D = !1 },
    setTileUrl: function (a) {
      g.c.add(this, 'setTileUrl'); this.o2() ? (this.set('getTileUrl', a), this.$s())
        : this.set('getTileUrl', a)
    },
    xr: function (a) { var b = this; var c; var d; var e; return function (f, h, k) { f = (f + Math.pow(2, k)) % Math.pow(2, k); if (typeof (f + h + k) !== 'number') return null; var l = b.get('map'); var m = 'zh_cn'; l && (m = l.get('lang') || 'zh_cn'); k = a.replace('[x]', f).replace('[y]', h).replace('[z]', k).replace('[lang]', m); if (!c) { if (d = a.match(/\{.*\}/))e = d.toString().replace('{', '').replace('}', ''), e = e.split(','); c = !0 }e && e.length && (k = k.replace(d, e[Math.abs(f + h) % e.length])); return k } },
    getTileUrl: function (a, b, c) {
      g.c.add(this, 'getTileUrl')
      return this.get('tileFun', null, !0)(a, b, c)
    },
    getZooms: function (a) { a || g.c.add(this, 'getZooms'); return this.get('zooms', null, !0) }
  }); B.o.qb.BW = B.o.qb.extend({ w: { getTileUrl: g.r.wU, zooms: [3, 20], zIndex: 2, maxDataZoom: 18, detectRetina: !1, mapNumber: 'GS(2019)5392', className: 'amap-layer amap-satellite', cacheSize: g.l.size }, A: function (a) { this.CLASS_NAME = 'AMap.TileLayer.Satellite'; g.c.ya(this, a); this.pl = [3, 20]; arguments.callee.ma.apply(this, arguments) } })
  B.o.qb.yW = B.o.qb.extend({
    w: { getTileUrl: g.r.SK, zooms: [3, 20], zIndex: 3, type: 'overlayer', maxDataZoom: 18, className: 'amap-layer amap-roadnet', cacheSize: g.l.size },
    A: function (a) { this.CLASS_NAME = 'AMap.TileLayer.RoadNet'; g.c.ya(this, a); this.pl = [3, 20]; arguments.callee.ma.apply(this, arguments) },
    dg: function (a) {
      if (this.get('map').Di) { this.Dq = !0; var b = g.r.TK; g.l.ja && this.get('detectRetina') && (b = g.r.TK.replace('scl=1', 'scl=2')); a = new g.o.qb(this, a, this.xr(b), this.w.maxDataZoom) } else {
        this.Dq = !1, a = new g.o.qb(this,
          a)
      } return a
    }
  })
  B.o.qb.KW = B.o.qb.extend({
    w: { getTileUrl: function (a, b, c) { return g.r.pc + '://tm.amap.com/trafficengine/mapabc/traffictile?v=1.0&t=1&zoom=' + (17 - c) + '&x=' + a + '&y=' + b }, zooms: [6, 20], zIndex: 4, type: 'overlayer', autoRefresh: !1, interval: 180, maxDataZoom: 17, alwaysRender: !g.l.d3, className: 'amap-layer amap-traffic', cacheSize: g.l.size },
    A: function (a) { this.CLASS_NAME = 'AMap.TileLayer.Traffic'; g.c.ya(this, a); this.pl = [6, 20]; arguments.callee.ma.apply(this, arguments); this.D = !0; this.startRefresh(); this.D = !1 },
    stopRefresh: function () {
      g.c.add(this,
        'stopRefresh'); this.GK && (clearInterval(this.GK), this.GK = null)
    },
    startRefresh: function () { g.c.add(this, 'startRefresh'); if (this.get('autoRefresh') && !this.GK) { var a = this; this.GK = setInterval(function () { a.D = !0; a.reload(); a.D = !1; a.q('refresh') }, Math.max(1E3 * (this.get('interval') || 180), 1E4)) } },
    reload: function () { g.c.add(this, 'reload'); g.a.Xc(function () { this.set('reload') }, this) },
    kg: function () { this.D = !0; this.stopRefresh(); this.get('map') && this.get('map').G('zoomstart', this.reload, this); this.D = !1 },
    dg: function (a) {
      var b =
this.get('map'); var b = a.B; b.g('zoomstart', this.reload, this); return b.get('baseRender') !== 'd' ? g.o.$w ? a = new g.o.$w(this, a) : ['vt'] : a = new g.o.qb(this, a, null, this.w.maxDataZoom)
    }
  })
  B.o.qb.BA = B.o.qb.extend({ w: { zooms: [3, 20], zIndex: 12, detectRetina: !1, className: 'amap-layer amap-flexible', cacheSize: g.l.size }, A: function (a) { this.CLASS_NAME = this.CLASS_NAME || 'AMap.TileLayer.Flexible'; g.c.ya(this, a); this.Esa = !0; arguments.callee.ma.call(this, a) }, setCreateTile: function (a) { g.c.add(this, 'setCreateTile'); typeof a === 'function' && a !== this.get('createTile') && this.set('createTile', a) }, getCreateTile: function () { return this.get('createTile', null, !0) } })
  B.o.qb.Cba = B.o.qb.BA.extend({
    w: { zooms: [3, 20], zIndex: 12, tileSize: 512, detectRetina: !1, className: 'amap-layer amap-wms', cacheSize: g.l.size, url: '', params: '' },
    A: function (a) {
      this.CLASS_NAME = 'AMap.TileLayer.WMS'; g.c.ya(this, a); arguments.callee.ma.call(this, a); this.zw(); var b = this; var c = this.get('tileSize'); this.set('createTile', function (a, e, f, h, k) {
        var l = Math.pow(2, 20 - f) * c; f = new g.H(l * a, l * (e + 1)); a = new g.H(l * (a + 1), l * e); e = g.VJ.n7(f); a = g.VJ.n7(a); var m = document.createElement('img'); b.If === '3D' && (m.crossOrigin = 'anonymous')
        g.F.g(m, 'load', function () { h(m) }); g.F.g(m, 'error', function () { k(m) }); m.src = this.url + '&BBOX=' + e + ',' + a
      })
    },
    zw: function () { var a = this.get('url', null, !0); var b = this.get('params', null, !0); var c = this.get('tileSize'); b.WIDTH = c; b.HEIGHT = c; b.CRS = b.CRS || 'EPSG:3857'; b.REQUEST = 'GetMap'; b.SERVICE = 'WMS'; b.FORMAT = b.FORMAT || 'image/png'; b.TRANSPARENT = void 0 === b.TRANSPARENT ? 'true' : b.TRANSPARENT; delete b.BBOX; this.url = a + '?' + g.a.join(b, '&'); this.D = !0; this.reload(); this.D = !1 },
    setUrl: function (a) {
      g.c.add(this, 'setUrl'); this.set('url',
        a, !0); this.zw()
    },
    getUrl: function () { g.c.add(this, 'getUrl'); return this.get('url', null, !0) },
    setParams: function (a) { g.c.add(this, 'setParams'); g.extend(this.get('params', null, !0), a || {}); this.zw() },
    getParams: function () { g.c.add(this, 'getParams'); return this.get('params', null, !0) }
  })
  B.o.qb.Dba = B.o.qb.BA.extend({
    w: { zooms: [3, 20], tileSize: 256, zIndex: 12, detectRetina: !1, className: 'amap-layer amap-wmts', cacheSize: g.l.size },
    A: function (a) {
      this.CLASS_NAME = 'AMap.TileLayer.WMTS'; g.c.ya(this, a); arguments.callee.ma.call(this, a); this.zw(); var b = this; this.get('tileSize'); this.set('createTile', function (a, d, e, f, h) {
        var k = document.createElement('img'); b.If === '3D' && (k.crossOrigin = 'anonymous'); g.F.g(k, 'load', function () { f(k) }); g.F.g(k, 'error', function () { h(k) }); k.src = this.url + '&TileMatrix=' + e + '&TileRow=' +
d + '&TileCol=' + a
      })
    },
    zw: function () { var a = this.get('url', null, !0); var b = this.get('params', null, !0); b.TileMatrixSet = b.TileMatrixSet || 'EPSG:3857'; b.Request = 'GetTile'; b.Service = 'WMTS'; b.Format = b.Format || 'image/png'; this.url = a + '?' + g.a.join(b, '&'); this.D = !0; this.reload(); this.D = !1 },
    setUrl: function (a) { g.c.add(this, 'setUrl'); this.set('url', a, !0); this.zw() },
    getUrl: function () { g.c.add(this, 'getUrl'); return this.get('url', null, !0) },
    setParams: function (a) {
      g.c.add(this, 'setParams'); g.extend(this.get('params', null, !0),
        a || {}); this.zw()
    },
    getParams: function () { g.c.add(this, 'getParams'); return this.get('params', null, !0) }
  })
  B.o.qb.OL = B.o.qb.BA.extend({
    w: { detectRetina: !0, zooms: [10, 18], zIndex: 2 },
    A: function (a) {
      arguments.callee.ma.apply(this, arguments); var b = this; this.set('createTile', function (a, d, e, f, h) {
        var k = b.De.map.map; k.Te.NE(a, d, e, function (l) {
          if (l)h(); else {
            var m = document.createElement('img'); b.If === '3D' && (m.crossOrigin = 'anonymous'); g.F.g(m, 'load', function () { f(m) }); g.F.g(m, 'error', function () { h(m) }); m.src = (function (a, c, d) {
              var e = 'zh_cn'; b && b.get && k && (e = k.get('lang') || 'zh_cn'); return g.r.pc + '://grid.amap.com/grid/' + d + '/' +
a + '/' + c + '?src=jsapi&key=' + g.r.key + '&lang=' + e + '&dpiType=' + (g.l.Lc ? 'wprd' : 'webrd')
            }(a, d, e))
          }
        })
      })
    }
  }); B.o.ed = B.o.Xb.extend({ w: { visible: !0, zooms: [3, 25], type: 'overlay', zIndex: 5, alwaysRender: !0 }, A: function (a) { this.p5 = !0; arguments.callee.ma.apply(this, arguments) }, dg: function (a) { return new g.o.ed(this, a) } }); B.o.S$ = B.o.Xb.extend({ w: { zooms: [14, 20], zIndex: 8, visible: !0, merge: !0, sort: !1 }, A: function (a) { this.CLASS_NAME = 'AMap.Buildings'; g.c.ya(this, a); a = a || {}; a.zooms && (a.zooms[0] = Math.max(14, a.zooms[0])); arguments.callee.ma.apply(this, arguments) }, sq: function () { return !1 }, dg: function (a) { if (g.l.Up) return a = new g.o.zba(this, a), a.Yy = this.get('heightFactor') || 1, a }, setStyle: function (a) { this.set('customStyle', a); g.c.add(this, 'setStyle') } }); B.o.HL = B.o.Xb.extend({
    w: { visible: !0, zooms: [3, g.l.ba ? 20 : 18], opacity: 1, type: 'overlay', zIndex: 6 },
    A: function (a) { arguments.callee.ma.apply(this, arguments) },
    dg: function (a) { return g.o.EA ? new g.o.EA(this, a) : ['imagelayer'] },
    getMap: function () { g.c.add(this, 'getMap'); return this.De.map },
    show: function () { g.c.add(this, 'show'); this.set('visible', !0); this.q('options') },
    getOpacity: function () { g.c.add(this, 'getOpacity'); return this.get('opacity', null, !0) },
    setOpacity: function (a) {
      g.c.add(this, 'setOpacity'); this.set('opacity',
        a)
    },
    getBounds: function () { g.c.add(this, 'getBounds'); return this.get('bounds', null, !0).cb() },
    setBounds: function (a) { g.c.add(this, 'setBounds'); this.q('bounds', a); this.D = !0; this.setOptions({ bounds: a }); this.D = !1 },
    hide: function () { g.c.add(this, 'hide'); this.set('visible', !1); this.q('options') },
    setOptions: function (a) { g.c.add(this, 'setOptions'); this.hf(a); this.q('options') },
    getOptions: function () { g.c.add(this, 'getOptions'); var a = {}; var b; for (b in this.w) this.w.hasOwnProperty(b) && (a[b] = this.get(b)); return a },
    getElement: function () {
      return this.o.M
        ? this.o.M.Lb : this.o.Cf ? this.o.Cf.Lb : null
    }
  }); B.o.EA = B.o.HL.extend({ A: function (a) { this.CLASS_NAME = 'AMap.ImageLayer'; g.c.ya(this, a); a && a.url && (a.__source__ = a.url); arguments.callee.ma.apply(this, arguments) }, getImageUrl: function () { g.c.add(this, 'getImageUrl'); return this.get('__source__') }, setImageUrl: function (a) { g.c.add(this, 'setImageUrl'); return this.set('__source__', a) } })
  B.o.Bba = B.o.HL.extend({ A: function (a) { this.CLASS_NAME = 'AMap.VideoLayer'; g.c.ya(this, a); a && a.url && (a.__source__ = a.url); arguments.callee.ma.apply(this, arguments) }, play: function () { var a = this.getElement(); a && a.play && a.play() }, pause: function () { var a = this.getElement(); a && a.pause && a.pause() }, getVideoUrl: function () { g.c.add(this, 'getVideoUrl'); return this.get('__source__') }, setVideoUrl: function (a) { g.c.add(this, 'setVideoUrl'); return this.set('__source__', a) } })
  B.o.U$ = B.o.HL.extend({ A: function (a) { this.CLASS_NAME = 'AMap.CanvasLayer'; g.c.ya(this, a); a && a.canvas && (a.__source__ = a.canvas); arguments.callee.ma.apply(this, arguments) }, getCanvas: function () { g.c.add(this, 'getCanvas'); return this.get('__source__') }, setCanvas: function (a) { g.c.add(this, 'setCanvas'); return this.set('__source__', a) }, reFresh: function () { this.o && (this.o.KE = !0, this.o.set('display')) } }); B.o.Naa = B.o.Xb.extend({
    w: { visible: !0, zooms: [3, 20], type: 'overlay', zIndex: 5, cursor: 'pointer', alwaysRender: !0, stable: !0, bubble: !0, rejectMapMask: !0, className: 'amap-mass' },
    A: function (a, b) { this.CLASS_NAME = 'AMap.MassMarks'; g.c.ya(this, b); g.l.il && (this.kk = !0, b.size && (b.size = g.a.Iq(b.size)), this.D = !0, this.setData(a), g.a.tb(this, b), b.style ? (this.hf(this.w, !0), this.setStyle(b.style)) : this.setStyle(this.w), this.D = !1) },
    clear: function () { g.c.add(this, 'clear'); this.set('dataSources', '') },
    getStyle: function () {
      g.c.add(this,
        'getStyle'); return this.Em
    },
    setStyle: function (a) {
      g.c.add(this, 'setStyle'); if (a instanceof Array) { for (var b = 0; b < a.length; b += 1)a[b].rotation_ = Math.PI * (a[b].rotation || 0) / 180, a[b].size = g.a.Iq(a[b].size), a.Bf = Math.max(a.Bf || 0, a[b].size.width + a[b].anchor.x), a.mg = Math.max(a.Bf || 0, a[b].size.height + a[b].anchor.y); this.Em = a } else {
        a.size && (a.size = g.a.Iq(a.size)), a.rotation_ = Math.PI * (a.rotation || 0) / 180, this.hf(a, !0), this.Em = { anchor: this.get('anchor'), url: this.get('url'), size: this.get('size'), rotation_: this.get('rotation_') },
        this.Em.Bf = this.Em.size.width + this.Em.anchor.x, this.Em.mg = this.Em.size.height + this.Em.anchor.y
      } this.q('style')
    },
    setData: function (a) { g.c.add(this, 'setData'); this.set('dataSources', a) },
    getData: function () { g.c.add(this, 'getData'); return this.get('datas') || this.get('dataSources') },
    setMap: function (a) { g.c.add(this, 'setMap'); g.l.il && (a ? (this.get('map') && this.get('map').uk(this), this.set('map', a)) : this.get('map') && (this.get('map').uk(this), this.set('map', null, !0), this.ti = !1, this.kg && this.kg())) },
    dg: function (a) {
      return g.sb.JD(['cvector'])
        ? (a = new g.o.ed(this, a), this.X('datas', a), a) : ['cvector']
    }
  }); B.o.Y$ = B.o.Xb.extend({
    A: function (a) { this.CLASS_NAME = 'AMap.CompositeLayer'; this.zB = !0; g.a.tb(this, a); this.Xm = []; this.hf(this.w) },
    opacityChanged: function () { for (var a = this.get('opacity', null, !0), b = -1, c = this.Xm.length; ++b < c;) this.Xm[b].setOpacity(a) },
    addLayer: function (a) { if (!this.has(a)) { a.aB = this; var b = this.get('map'); a.setMap(b); this.Xm.push(a) } return this },
    removeLayer: function (a) { this.has(a) && a.setMap(null); return this },
    Pka: function (a) {
      if (this.has(a)) {
        delete a.aB; var b = this.Xm; a = g.a.indexOf(b, a); g.a.Do(b,
          a)
      }
    },
    has: function (a) { return g.a.indexOf(this.Xm, a) !== -1 },
    show: function () { for (var a = -1, b = this.Xm.length; ++a < b;) this.Xm[a].show() },
    hide: function () { for (var a = -1, b = this.Xm.length; ++a < b;) this.Xm[a].hide() },
    setzIndex: function (a, b) { g.c.add(this, 'setzIndex'); this.set('zIndex', a); var c = this.Xm; if (typeof b === 'undefined') for (var d = -1, e = c.length; ++d < e;) { var f = c[d]; f.setzIndex(a) } else (f = c[b]) && f.setzIndex(a) },
    dg: function (a) { this.e = a },
    getLayers: function () { return this.Xm }
  }); B.o.or = B.o.Xb.extend({
    Baa: { visible: !0, zIndex: 121, opacity: 1, zooms: [3, 20], collision: !0, animation: !0, alwaysRender: !0 },
    w: { zooms: [3, 20] },
    sP: null,
    A: function (a) { this.CLASS_NAME = this.CLASS_NAME || 'AMap.LabelsLayer'; a = a || {}; g.c.ya(this, a); arguments.callee.ma.apply(this, arguments); this.w = this.Baa; g.a.tb(this, a); this.hf(this.w); this.Zf = []; this.kb = []; this.Nu = []; this.$Q = { click: 0, mouseover: 0, mousemove: 0, mouseout: 0, mousedown: 0, mouseup: 0, touchstart: 0, touchend: 0 } },
    getCollision: function () {
      return this.get('collision',
        null, !0)
    },
    setCollision: function () { var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : !0; this.set('collision', a); this.w.collision = a; this.f.tb(this.w, this.Zf) },
    getOpacity: function () { return this.get('opacity', null, !0) },
    setOpacity: function () { var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1; this.set('opacity', a); this.w.opacity = a; this.f.tb(this.w, this.Zf) },
    getzIndex: function () { return this.get('zIndex', null, !0) },
    setzIndex: function () {
      var a = arguments.length > 0 && void 0 !== arguments[0]
        ? arguments[0] : 120; this.set('zIndex', a); this.w.zIndex = a; this.f.tb(this.w, this.Zf)
    },
    getAnimation: function () { return this.get('animation', null, !0) },
    setAnimation: function () { var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : !0; this.set('animation', a); this.w.animation = a; this.f.tb(this.w, this.Zf) },
    getZooms: function () { return this.get('zooms', null, !0) },
    setZooms: function () { var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [3, 20]; this.set('zooms', a); this.w.zooms = a; this.f.tb(this.w, this.Zf) },
    add: function (a) {
      g.c.add(this, 'add'); if (a) {
        a = Object.prototype.toString.apply(a) !== '[object Array]' ? [a] : a; for (var b = 0; b < a.length; b++) {
          var c = a[b]; if (c) {
            c.f = this; var d = c.w; var e = { data: { id: c._LabelMarkerId || void 0, name: d.title || '', position: this.hfa(d.position) || void 0, rank: d.rank || void 0 }, opts: { zooms: d.zooms || void 0, opacity: typeof d.opacity === 'number' ? d.opacity : 1, zIndex: typeof d.zIndex === 'number' ? d.zIndex : 1, height: typeof d.height === 'number' ? d.height : 0, icon: {}, text: {} } }; if (d.icon) {
              var f = d.icon; var h = f.size; var k = f.clipSize
              h && (f.size = this.zG(h)); k && (f.clipSize = this.zG(k)); e.opts.icon = d.icon
            }d.text && (e.opts.text = d.text, d.text.content && (e.data.txt = d.text.content), (d = (d = e.opts.text.style) && d.padding) && (e.opts.text.style.padding = this.nha(d))); this.Zf.push(e); this.kb.push(c)
          }
        } this.Fo(); b = a.length; for (c = 0; c < b; c++)(e = a[c]) && e.K8 && e.K8()
      }
    },
    getMarkers: function () { return this.kb },
    remove: function (a) {
      g.c.add(this, 'remove'); if (a) {
        var b = void 0; var b = Object.prototype.toString.apply(a) !== '[object Array]' ? [a] : a; if (this.Zf) {
          for (a = 0; a < b.length; a++) {
            var c =
this.xn(this.Zf, b[a]); c !== -1 && (this.Zf.splice(c, 1), this.kb.splice(c, 1))
          } this.Fo()
        }
      }
    },
    clear: function () { g.c.add(this, 'clear'); this.f && this.f.clear(); this.Zf = []; this.kb = [] },
    setPosition: function () {},
    positionChanged: function () {},
    on: function (a) { g.c.add(this, 'on'); this.f ? (this.Gh(arguments), this.f.P1(a)) : this.Nu.push(arguments) },
    off: function (a) { g.c.add(this, 'off'); this.f && this.f.j$(a) },
    Fo: function () { this.f && this.f.Sz(this.Zf) },
    Sz: function (a) { this.O0(a) },
    HU: function (a, b) {
      var c = this.sP; a && (b ? (c && c._LabelMarkerId !==
a._LabelMarkerId && c.setTop(!1), this.sP = a) : this.sP = null)
    },
    AR: function (a) { if (this.f) return this.f.AR(a) },
    xn: function (a, b) { for (var c = b._LabelMarkerId || null, d = 0; d < a.length; d++) if (a[d].data.id === c) return d; return -1 },
    removeItem: function () {},
    dg: function (a) { this.get('map') || this.set('map', a.B, !0); if (g.o.or) { this.f = new g.o.or(this, a); this.Zf && this.Fo(); a = this.Nu; if (a.length) { for (var b = 0; b < a.length; b++) this.on.apply(this, a[b]); this.Nu = [] } return this.f } return ['AMap.LabelsLayer'] },
    qZ: function () {
      var a = this; return g.a.ND(function (b) {
        var c =
a.f; c ? c.Sz(b) : a.vD = b
      }, 100)
    },
    Lf: function (a) { return typeof a === 'undefined' },
    JZ: function (a) { return typeof a === 'string' },
    vga: function (a) { return typeof a === 'number' },
    zG: function () { var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []; return this.Lf(a.width) || this.Lf(a.height) ? this.JZ(a) ? a.split(',') : this.vga(a) ? [a, a] : a : [a.width, a.height] },
    hfa: function () { var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []; return this.Lf(a.R) || this.Lf(a.Q) ? this.JZ(a) ? a.split(',') : a : [a.R, a.Q] },
    nha: function (a) {
      typeof a ===
'string' && (a = a.trim(), a = a.split(' ')); if (Object.prototype.toString.apply(a) === '[object Array]') { for (var b = a.length, c = 0; c < b; c++) { var d = parseInt(a[c]); a[c] = isNaN(d) ? 3 : d } switch (b) { case 0:a = [3, 3, 3, 3]; break; case 1:a = [a[0], a[0], a[0], a[0]]; break; case 2:a = [a[0], a[1], a[0], a[1]]; break; case 3:a = [a[0], a[1], a[2], a[1]] } return a } return [3, 3, 3, 3]
    }
  }); B.o.PL = B.o.EA.extend({
    A: function (a, b, c) { this.CLASS_NAME = 'AMap.GroundImage'; g.c.ya(this, c); c = c || {}; this.eh = !0; var d = parseFloat(c.opacity); isNaN(d) && (d = 1); arguments.callee.ma.call(this, { url: a, bounds: b, clickable: c.clickable, opacity: d, map: c.map, zooms: c.zooms || [3, 20] }); this.CLASS_NAME = 'AMap.GroundImage' },
    Hua: function (a) { this.get('bounds').contains(a.lnglat) && (a.target = this, this.q('click', a)) },
    Iua: function (a) { this.get('bounds').contains(a.lnglat) && (a.target = this, this.q('dblclick', a)) },
    setMap: function (a) {
      g.c.add(this,
        'setMap'); a ? (this.get('map') && (this.get('map').uk(this), this.y2 && B.event.removeListener(this.y2), this.Q2 && B.event.removeListener(this.Q2)), this.set('map', a)) : this.get('map') && (this.get('map').uk(this), this.De.map = null)
    },
    mapChanged: function () { this.get('map') && (this.get('map').TH(this), this.get('clickable') && (this.y2 = B.event.addListener(this.get('map'), 'click', this.Hua, this), this.Q2 = B.event.addListener(this.get('map'), 'dblclick', this.Iua, this))) }
  }); B.C.Ih = g.ca.extend({
    ka: [g.va, g.$e, { Ja: g.a.Ja }],
    w: { extData: {}, bubble: !1, clickable: !0, draggable: !1 },
    A: function () { this.PG = g.a.xb(this) },
    tEa: function () { return this.PG },
    YCa: function () { this.D = !0; this.get('map', null, !0) && this.setMap(this.get('map')); this.D = !1 },
    mapChanged: function () { this.get('map', null, !0) && this.get('map', null, !0).uC(this) },
    hR: function (a) { var b = 0; a && (b = typeof a === 'string' ? Math.round(parseFloat(a) / 0.14929107086948487) : a); return b },
    setHeight: function (a) {
      this.height = a = a || 0; a = this.hR(a); this.set('altitude',
        a)
    },
    getHeight: function () { return this.height },
    show: function () { g.c.add(this, 'show'); !0 != this.get('visible', null, !0) && this.set('visible', !0) },
    hide: function () { g.c.add(this, 'hide'); !1 != this.get('visible', null, !0) && this.set('visible', !1) },
    setMap: function (a) { g.c.add(this, 'setMap'); a !== this.get('map', null, !0) && (a ? (this.get('map', null, !0) && this.get('map', null, !0).Lz(this), this.set('map', a)) : this.get('map', null, !0) && (this.get('map', null, !0).Lz(this), this.set('map', null, !0))) },
    getMap: function () {
      g.c.add(this,
        'getMap'); return this.get('map', null, !0)
    },
    setExtData: function (a) { g.c.add(this, 'setExtData'); this.set('extData', a) },
    positionChanged: function () {},
    getExtData: function () { g.c.add(this, 'getExtData'); return this.get('extData', null, !0) },
    getVisible: function () { return this.get('visible', null, !0) }
  }); B.C.ed = B.C.Ih.extend({
    A: function (a) { B.C.ed.ad.A.apply(this, arguments) },
    show: function () { g.c.add(this, 'show'); !1 == this.get('visible', null, !0) && (this.set('visible', !0), this.q('show', { type: 'show', target: this })) },
    hide: function () { g.c.add(this, 'hide'); !0 == this.get('visible', null, !0) && (this.set('visible', !1), this.q('hide', { type: 'hide', target: this })) },
    getVisible: function () { g.c.add(this, 'getVisible'); return this.get('visible', null, !0) },
    getOptions: function () {
      g.c.add(this, 'getOptions'); var a = {}; var b = 'map zIndex strokeColor strokeOpacity strokeWeight strokeStyle strokeDasharray extData bubble clickable draggable'.split(' ')
      var c = 'isOutline outlineColor geodesic path lineJoin lineCap borderWeight showDir dirColor dirImg'.split(' '); var d = ['fillColor', 'fillOpacity', 'path', 'lineJoin', 'texture']; var e = ['center', 'radius', 'texture']; var f = ['bounds', 'texture']; var h = []; this instanceof B.C.$b && (h = b.concat(c)); this instanceof B.C.Ec && (h = b.concat(d)); this instanceof B.C.kh && (h = b.concat(e).concat(d)); this instanceof B.C.Et && (h = b.concat(e).concat(d)); this instanceof B.C.Kt && (h = b.concat(d).concat(f)); for (b = 0; b < h.length; b += 1) {
        a[h[b]] = this.get(h[b], null,
          !0)
      } return a
    },
    setOptions: function (a) { g.c.add(this, 'setOptions'); a.hasOwnProperty('path') && (a.path && a.path.length || (a.path = []), a.path = this.Ja(a.path)); a.center && (a.center = this.Ja(a.center)); var b; a.hasOwnProperty('map') && (b = a.map, delete a.map); this.hf(a); void 0 !== b && (this.setMap(b), a.map = b); this.q('options'); this.q('change', { type: 'change', target: this }) },
    setzIndex: function (a) { g.c.add(this, 'setzIndex'); this.set('zIndex', a) },
    getzIndex: function () {
      g.c.add(this, 'getzIndex'); return this.get('zIndex', null,
        !0)
    },
    setDraggable: function (a) { g.c.add(this, 'setDraggable'); this.set('draggable', a) }
  }); B.C.fM = B.C.ed.extend({
    w: { visible: !0, zIndex: 10, strokeColor: '#006600', strokeOpacity: 0.9, strokeWeight: 3, strokeStyle: 'solid', strokeDasharray: [10, 5], lineJoin: 'miter', lineCap: 'butt', path: [] },
    A: function (a) { B.C.fM.ad.A.apply(this, arguments) },
    setPath: function (a, b) { g.c.add(this, 'setPath'); a && a.length || (a = []); a = this.Ja(a); this.C && this.C.get('deltaPos') && this.C.set('deltaPos', [0, 0], !0); this.set('path', a); this.q('change', { type: 'change', target: this }); b || this.q('setPath') },
    getPath: function () {
      g.c.add(this, 'getPath')
      return this.E2()
    },
    reset: function () { var a = this.E2(); this.C.set('deltaPos', [0, 0], !0); this.setPath(a) },
    E2: function () { var a = this.get('path', null, !0); this.C && this.C.get('deltaPos') && (a = this.C.St(a, this.C.get('deltaPos'))); return a }
  }); B.C.fi = g.ca.extend({ ka: [g.va, g.$e], w: { size: new g.xd(36, 36), imageOffset: new g.H(0, 0), image: g.r.Gb + '/theme/v1.3/markers/0.png', imageSize: null }, A: function (a) { this.CLASS_NAME = 'AMap.Icon'; g.c.ya(this, a); a = a || {}; a.size && (a.size = g.a.Iq(a.size)); a.imageSize && (a.imageSize = g.a.Iq(a.imageSize)); g.a.tb(this, a); this.hf(this.w) }, setImageSize: function (a) { g.c.add(this, 'setImageSize'); a = g.a.Iq(a); this.set('imageSize', a) }, getImageSize: function () { g.c.add(this, 'getImageSize'); return this.get('imageSize', null, !0) } }); B.C.Laa = g.ca.extend({ ka: [g.va, g.$e], w: { coords: [], type: '' }, A: function (a) { this.CLASS_NAME = 'AMap.MarkerShape'; g.c.ya(this, a); g.a.tb(this, a); this.hf(this.w) } }); B.C.ub = B.C.Ih.extend({
    w: { cursor: 'pointer', visible: !0, zIndex: 100, angle: 0, textAlign: 'left', verticalAlign: 'top', autoRotation: !1, opacity: 1, offset: new g.H(-9, -31), size: new g.H(19, 33), raiseOnDrag: !1, topWhenClick: !1, topWhenMouseOver: !1, animation: 'AMAP_ANIMATION_NONE' },
    A: function (a) {
      this.CLASS_NAME = this.CLASS_NAME || 'AMap.Marker'; g.c.ya(this, a); a = a || {}; this.eh = !0; this.cha = g.a.xb(this); this.D = !0; a.position && (a.position = this.Ja(a.position)); a.height && this.setHeight(a.height); g.a.tb(this, a); g.l.Ie && (this.w.angle =
0); this.hf(this.w, !0); this.mapChanged(); this.D = !1
    },
    getAnchor: function () { g.c.add(this, 'getAnchor'); return this.get('anchor', null, !0) },
    setAnchor: function (a) { g.c.add(this, 'setAnchor'); this.set('anchor', a) },
    getId: function () { g.c.add(this, 'getId'); return this.cha },
    setRaiseOnDrag: function (a) { g.c.add(this, 'setRaiseOnDrag'); this.set('raiseOnDrag', a) },
    setPosition: function (a, b) { g.c.add(this, 'setPosition'); a = this.Ja(a); void 0 !== b && (this.D = !0, this.setHeight(b), this.D = !1); this.set('position', a) },
    getPosition: function () {
      g.c.add(this,
        'getPosition'); return this.get('position', null, !0)
    },
    getBounds: function () { var a = this.get('position', null, !0).cb(); return new g.le(a, a.cb()) },
    mapChanged: function () { this.yl('zoom'); var a = this.get('map', null, !0); a && (this.get('position', null, !0) || this.set('position', a.get('center')), a.uC(this), this.X('zoom', a)) },
    getZooms: function () { g.c.add(this, 'getZooms'); return this.get('zooms', null, !0) },
    zoomChanged: function () {
      var a = this.get('zooms', null, !0); if (a) {
        var b = this.get('zoom'); b < a[0] || b > a[1] ? this.set('outOfZooms',
          !0) : this.set('outOfZooms', !1); this.C && this.C.dva()
      }
    },
    setIcon: function (a) { g.c.add(this, 'setIcon'); this.set('icon', a) },
    getIcon: function () { g.c.add(this, 'getIcon'); return this.get('icon', null, !0) },
    setContent: function (a) { g.c.add(this, 'setContent'); this.set('content', a) },
    getContent: function () { g.c.add(this, 'getContent'); return this.get('content', null, !0) },
    getContentDom: function () { return this.get('contentDom', null, !0) },
    hide: function () {
      g.c.add(this, 'hide'); !0 == this.get('visible', null, !0) && this.set('visible',
        !1)
    },
    show: function () { g.c.add(this, 'show'); !1 == this.get('visible', null, !0) && this.set('visible', !0) },
    setCursor: function (a) { g.c.add(this, 'setCursor'); this.set('cursor', a) },
    setRotation: function (a) { g.c.add(this, 'setRotation'); g.l.Ie || this.set('angle', a) },
    setAngle: function (a) { g.c.add(this, 'setAngle'); g.l.Ie || typeof a !== 'number' || this.set('angle', a) },
    getAngle: function () { g.c.add(this, 'getAngle'); return this.get('angle', null, !0) },
    setOffset: function (a) { g.c.add(this, 'setOffset'); this.set('offset', a) },
    getOffset: function () {
      g.c.add(this,
        'getOffset'); return this.get('offset', null, !0)
    },
    setTextAlign: function (a) { g.c.add(this, 'setTextAlign'); this.set('textAlign', a) },
    getTextAlign: function () { g.c.add(this, 'getTextAlign'); return this.get('textAlign', null, !0) },
    setVerticalAlign: function (a) { g.c.add(this, 'setVerticalAlign'); this.set('verticalAlign', a) },
    getVerticalAlign: function () { g.c.add(this, 'getVerticalAlign'); return this.get('verticalAlign', null, !0) },
    setzIndex: function (a) { g.c.add(this, 'setzIndex'); this.set('zIndex', a) },
    getzIndex: function () {
      g.c.add(this,
        'getzIndex'); return this.get('zIndex', null, !0)
    },
    setOpacity: function (a) { g.c.add(this, 'setOpacity'); this.set('opacity', a) },
    setDraggable: function (a) { g.c.add(this, 'setDraggable'); this.set('draggable', a) },
    getDraggable: function () { g.c.add(this, 'getDraggable'); return this.get('draggable', null, !0) },
    moveTo: function (a, b, c) { g.c.add(this, 'moveTo'); a = this.Ja(a); this.set('move', { jg: a, speed: b, vb: c }) },
    moveAlong: function (a, b, c, d) {
      g.c.add(this, 'moveAlong'); if (!(a.length < 2)) {
        a = this.Ja(a); for (var e = [a[0]], f = a[0], h = 1; h <
a.length; h += 1)f.gb(a[h]) || (e.push(a[h]), f = a[h]); this.set('move', { jg: e, speed: b, vb: c, qna: d })
      }
    },
    stopMove: function () { g.c.add(this, 'stopMove'); this.set('move', !1) },
    pauseMove: function () { g.c.add(this, 'pauseMove'); var a = this.get('move'); if (!a) return !1; a.action = 'pause'; this.set('move', a); return !0 },
    resumeMove: function () { g.c.add(this, 'resumeMove'); var a = this.get('move'); if (!a) return !1; a.action = 'resume'; this.set('move', a); return !0 },
    setShadow: function (a) { g.c.add(this, 'setShadow'); this.set('shadow', a) },
    getShadow: function () {
      g.c.add(this,
        'getShadow'); return this.get('shadow', null, !0)
    },
    setClickable: function (a) { g.c.add(this, 'setClickable'); a !== this.get('clickable', null, !0) && this.set('clickable', a) },
    getClickable: function () { g.c.add(this, 'getClickable'); return this.get('clickable', null, !0) },
    setTitle: function (a, b) { g.c.add(this, 'setTitle'); typeof a === 'string' && this.set('title', a, b) },
    getTitle: function () { g.c.add(this, 'getTitle'); return this.get('title', null, !0) },
    setLabel: function (a) {
      g.c.add(this, 'setLabel'); a && !g.a.yh(a) && (a = g.extend({}, this.get('label'),
        a)); this.set('label', a)
    },
    getLabel: function () { g.c.add(this, 'getLabel'); return this.get('label', null, !0) },
    setTop: function (a, b) { g.c.add(this, 'setTop'); this.set('isTop', a, b) },
    getTop: function () { g.c.add(this, 'getTop'); return this.get('isTop', null, !0) },
    setShape: function (a, b) { g.c.add(this, 'setShape'); this.set('shape', a, b) },
    getShape: function () { g.c.add(this, 'getShape'); return this.get('shape', null, !0) },
    setAnimation: function (a, b) { g.c.add(this, 'setAnimation'); this.set('animation', a, b) },
    getAnimation: function () {
      g.c.add(this,
        'getAnimation'); return this.get('animation', null, !0)
    },
    getMap: function () { g.c.add(this, 'getMap'); return this.get('map', null, !0) },
    markOnAMAP: function (a) { g.c.add(this, 'markOnAMAP'); a = a || {}; var b = {}; b.name = a.name || this.get('name', null, !0) || ''; a = this.Ja(a.position) || this.get('position', null, !0); b.y = a.Q; b.x = a.R; g.ci.nt(g.ci.Zqa(b)) }
  }); B.C.Eaa = B.C.Ih.extend({
    Paa: Math.pow(2, 31),
    w: { position: null, zooms: [3, 20], opacity: 1, visible: !0, zIndex: 1, rank: 1, extData: null },
    A: function (a) { a = a || {}; this.CLASS_NAME = this.CLASS_NAME || 'AMap.LabelMarker'; g.c.ya(this, a); arguments.callee.ma.apply(this, arguments); this._LabelMarkerId = g.a.xb(this); g.a.tb(this, a); this.hf(this.w, !0); this.aR = []; this.AC = {} },
    xn: function (a, b) { for (var c = b._LabelMarkerId || null, d = 0, e = a.length; d < e; d++) if (a[d].data.id === c) return d; return -1 },
    K8: function () {
      var a = this.aR || []; if (a.length) {
        for (var b =
0, c = a.length; b < c; b++) this.on.apply(this, a[b]); this.aR = []
      }
    },
    mJ: function () { var a = this.f; if (!a) return null; var a = a.Zf || []; var b = this.xn(a, this); return b !== -1 ? a[b] : null },
    getName: function () { g.c.add(this, 'getName'); return this.w.name },
    setName: function (a) { g.c.add(this, 'setName'); this.w.name = a; var b = this.mJ(); b && (b.opts.title = a) },
    getBounds: function () {
      g.c.add(this, 'getBounds'); var a = this.get('position', null, !0); try {
        return typeof a === 'string' ? a = new g.U(a.split(',')) : Object.prototype.toString.apply(a) == '[object Array]' &&
(a = new g.U(a[0], a[1])), new g.le(a, a.cb())
      } catch (b) { return null }
    },
    getPosition: function () { g.c.add(this, 'getPosition'); var a = this.f.Zf; var b = this.xn(a, this); return b !== -1 ? a[b].data.position : null },
    setPosition: function (a) { g.c.add(this, 'setPosition'); this.w.position = a; var b = this.f; if (b) { var c = b.Zf; var d = this.xn(c, this); d !== -1 && (c[d].data.position = a, b.Fo()) } },
    getZooms: function () { g.c.add(this, 'getZooms'); var a = this.f.Zf; var b = this.xn(a, this); return b !== -1 ? a[b].opts.zooms : null },
    setZooms: function (a) {
      g.c.add(this, 'setZooms')
      this.w.zooms = a; var b = this.f; if (b) { var c = b.Zf || []; var d = this.xn(c, this); d !== -1 && (c[d].opts.zooms = a, b.Fo()) }
    },
    getOpacity: function () { g.c.add(this, 'getOpacity'); var a = this.f.Zf; var b = this.xn(a, this); return b !== -1 ? a[b].opts.opacity : null },
    setOpacity: function (a) { g.c.add(this, 'setOpacity'); this.w.opacity = a; var b = this.f; if (b) { var c = b.Zf; var d = this.xn(c, this); d !== -1 && (c[d].opts.opacity = a, b.Fo()) } },
    getzIndex: function () { g.c.add(this, 'getzIndex'); if (this.mJ()) return this.w.zIndex },
    setzIndex: function (a) {
      g.c.add(this, 'setzIndex')
      this.w.zIndex = a; var b = this.mJ(); b && (b.opts.zIndex = a, this.f.Fo())
    },
    getRank: function () { g.c.add(this, 'getRank'); return this.w.rank },
    setRank: function (a) { g.c.add(this, 'setZIndex'); var b = this.mJ(); this.w.rank = a; b && (b.data.rank = a, this.f.Fo()) },
    getIcon: function () { g.c.add(this, 'getIcon'); return this.w.icon },
    setIcon: function (a) {
      g.c.add(this, 'setIcon'); this.w.icon = this.w.icon ? g.extend({}, this.w.icon, a) : a; var b = this.f; if (b) {
        var b = b.Zf; var c = this.xn(b, this); if (c !== -1) {
          var d = a.size; var e = a.clipSize; d && (a.size = this.f.zG(d))
          e && (a.clipSize = this.f.zG(e)); b[c].opts.icon = g.extend({}, b[c].opts.icon, a); this.f.Fo()
        }
      }
    },
    getText: function () { g.c.add(this, 'getText'); return this.w.text },
    setText: function (a) { g.c.add(this, 'setText'); this.w.text = this.w.text ? g.extend({}, this.w.text, a) : a; var b = this.f; if (b) { var b = b.Zf; var c = this.xn(b, this); c !== -1 && (b[c].data.txt = void 0 == a.content ? b[c].data.txt : a.content, b[c].opts.text = g.extend({}, b[c].opts.text, a), a.style && (b[c].opts.text.style = g.extend({}, b[c].opts.text.style, a.style)), this.f.Fo()) } },
    setTop: function () {
      var a =
arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : !0; g.c.add(this, 'setTop'); this.f && this.f.HU(this, a); a ? (this.sca = this.w.zIndex, this.setzIndex(this.Paa)) : this.setzIndex(this.sca || this.w.zIndex)
    },
    getVisible: function () { g.c.add(this, 'getVisible'); var a = this.w.visible; this.f && a && (a = !this.f.AR(this._LabelMarkerId)); return a },
    getExtData: function () { g.c.add(this, 'getExtData'); return this.w.extData },
    setExtData: function (a) { g.c.add(this, 'setExtData'); this.w.extData = a },
    getOptions: function () { return this.w },
    show: function () { g.c.add(this, 'show'); this.w.visible = !0; this.f && this.f.add(this); return this },
    hide: function () { g.c.add(this, 'hide'); this.w.visible = !1; this.f && this.f.remove(this); return this },
    on: function (a, b) {
      g.c.add(this, 'on'); if (this.f) {
        this.AC[a] = b; var c = this; var d = this.f; d._markerBindArray || (d._markerBindArray = {}); var e = this._LabelMarkerId; d._markerBindArray[e] || (d._markerBindArray[e] = this); d.$Q[a] ? d.$Q[a]++ : (d.$Q[a] = 1, this.f.on(a, function (a) {
          var b = a.type; if (a && a.data && a.data.data && a.data.data.id && a.data.data.id) {
            var d =
a.data.data.id; var b = (d = c.f && c.f._markerBindArray && c.f._markerBindArray[d]) && d.AC[b]; d && b && (a.target = d, typeof b === 'function' && b(a))
          }
        }))
      } else this.aR.push(arguments)
    },
    off: function (a) { g.c.add(this, 'off'); this.AC[a] && delete this.AC[a]; Object.keys(this.AC).length || delete this.f._markerBindArray[this._LabelMarkerId] }
  }); B.C.Sn = B.C.Ih.extend({
    w: { visible: !1, items: [] },
    A: function (a) { this.CLASS_NAME = 'AMap.ContextMenu'; g.c.ya(this, a); this.eh = !0; g.a.tb(this, a); this.w.items = []; this.hf(this.w) },
    addItem: function (a, b, c) { g.c.add(this, 'addItem'); this.get('items').push({ Pn: a, vb: b, nK: c }); this.q('items') },
    removeItem: function (a, b) { g.c.add(this, 'removeItem'); var c = this.get('items'); var d; var e; for (e = 0; e < c.length; e += 1) if (d = c[e], d.Pn === a && d.vb === b) { c.splice(e, 1); break } this.q('items') },
    open: function (a, b) {
      g.c.add(this, 'open'); this.D = !0; b = g.a.Ja(b)
      this.set('position', b); this.map ? this.map && this.map !== a && (this.map.Lz(this), this.map = a, this.setMap(a)) : (this.map = a, this.setMap(a)); this.q('open', { type: 'open', target: this }); this.D = !1
    },
    close: function () { g.c.add(this, 'close'); this.D = !0; this.setMap(null); this.map && (this.map = this.map.ry = null, this.q('close', { type: 'close', target: this })); this.D = !1 }
  }); B.C.Ze = B.C.Ih.extend({
    w: { visible: !0, offset: new g.H(0, 0), showShadow: !1, closeWhenClickMap: !1, retainWhenClose: !0, autoMove: !0, altitude: 0, anchor: 'bottom-center' },
    A: function (a) { this.CLASS_NAME = this.CLASS_NAME || 'AMap.InfoWindow'; g.c.ya(this, a); a = a || {}; this.eh = !0; a && a.size && (a.size = g.a.Iq(a.size)); g.a.tb(this, a); this.hf(this.w); a.position && this.set('position', g.a.Ja(a.position), !0); a.height && this.set('altitude', this.hR(a.height), !0) },
    open: function (a, b, c) {
      g.c.add(this, 'open'); b = g.a.Ja(b); if (a && !this.lL && (b =
b || this.get('position', null, !0))) { this.q('change', { type: 'change', target: this }); c = this.hR(c) || this.get('altitude'); var d = this.get('map', null, !0); d && d === a ? (this.set('altitude', c, !0), this.set('position', b)) : (this.map = a, a.tm && a.tm.close(), this.set('position', b, !0), this.set('altitude', c, !0), this.D = !0, this.setMap(a), this.D = !1); this.q('open', { type: 'open', target: this }) }
    },
    close: function () {
      g.c.add(this, 'close'); this.C && this.C.map && (this.D = !0, this.setMap(null), this.map = null, this.q('change', { type: 'change', target: this }),
      this.D = !1)
    },
    getAnchor: function () { g.c.add(this, 'getAnchor'); return this.get('anchor', null, !0) },
    setAnchor: function (a) { g.c.add(this, 'setAnchor'); this.set('anchor', a); this.q('change', { type: 'change', target: this }) },
    setContent: function (a) { g.c.add(this, 'setContent'); this.set('content', a); this.q('change', { type: 'change', target: this }) },
    getContentU: function () { g.c.add(this, 'getContentU'); return this.get('content', null, !0) },
    getContentDom: function () { return this.get('contentDom', null, !0) },
    getContent: function () {
      g.c.add(this,
        'getContent'); return this.get('content', null, !0)
    },
    setPosition: function (a) { g.c.add(this, 'setPosition'); a = g.a.Ja(a); this.set('position', a); this.q('change', { type: 'change', target: this }) },
    setOffset: function (a) { g.c.add(this, 'setOffset'); this.set('offset', a); this.q('change', { type: 'change', target: this }) },
    getPosition: function () { g.c.add(this, 'getPosition'); return this.get('position', null, !0) },
    setSize: function (a) { g.c.add(this, 'setSize'); a = g.a.Iq(a); this.set('size', a); this.q('change', { type: 'change', target: this }) },
    getSize: function (a) { g.c.add(this, 'getSize'); var b = this.get('size', null, !0); if (b) return b; if (this.C && !a) return new g.xd(this.C.th.offsetWidth, this.C.th.offsetHeight) },
    getIsOpen: function () { g.c.add(this, 'getIsOpen'); return !!this.get('map') }
  }); B.C.$b = B.C.fM.extend({
    w: { isOutline: !1, outlineColor: '#000000', geodesic: !1, dirColor: 'white', showDir: !1, borderWeight: 1 },
    A: function (a) { this.CLASS_NAME = this.CLASS_NAME || 'AMap.Polyline'; g.c.ya(this, a); this.D = !0; B.C.$b.ad.A.apply(this, arguments); this.eh = !0; a = a || {}; a.zIndex = typeof a.zIndex === 'number' ? a.zIndex : 50; a.path && (a.path = this.Ja(a.path)); g.a.tb(this, a); this.setOptions(this.w); this.D = !1 },
    getLength: function () {
      g.c.add(this, 'getLength'); for (var a = this.get('path'), b = 0, c = 0; c < a.length - 1; c += 1) {
        b += a[c].He(a[c +
1])
      } return parseFloat(b.toFixed(2))
    },
    getBounds: function () { var a = this.get('path'); if (!a || !a.length) return null; for (var b = new g.le(180, 90, -180, -90), c = a.length - 1; c >= 0; c -= 1)b.extend(a[c]); return b }
  }); (function (a) {
    function b (a, b, c, d) { if (a >= 1) return d; var e = 1 - a; return e * e * b + 2 * e * a * c + a * a * d } function c (a, b, c, d, e) { if (a >= 1) return e; var f = 3 * (c[0] - b[0]); var h = 3 * (d[0] - c[0]) - f; var s = 3 * (c[1] - b[1]); c = 3 * (d[1] - c[1]) - s; return [(e[0] - b[0] - f - h) * Math.pow(a, 3) + h * Math.pow(a, 2) + f * a + b[0], (e[1] - b[1] - s - c) * Math.pow(a, 3) + c * Math.pow(a, 2) + s * a + b[1]] } function d (a, c, d, e) { return [b(a, c[0], d[0], e[0]), b(a, c[1], d[1], e[1])] } function e (b, c) { c = a.a.Ja(c); return b.OD(c, 20).xl() } function f (b, c) {
      a.a.isArray(c) && (c = new a.H(c[0], c[1])); return b.mE(c,
        20)
    } function h (b, f, h, n, p, q) {
      var r = null; if (b && h && h.length) {
        b = [b]; b.push.apply(b, h); b.push(f); h = 0; for (r = b.length; h < r; h++)b[h] = e(n, b[h]); h = a.extend({ tolerance: 4, interpolateNumLimit: [3, 300] }, q); q = h.tolerance; h = h.interpolateNumLimit; q = Math.max(2, q); for (var s = r = 0, u = 0, v = b.length; u < v - 1; u++) var w = b[u]; var t = b[u + 1]; var r = r + Math.abs(t[0] - w[0]); var s = s + Math.abs(t[1] - w[1]); a: {
          p = Math.min(h[1], Math.max(h[0], Math.round(Math.max(r, s) / p / q))); q = null; switch (b.length) { case 3:q = d; break; case 4:q = c; break; default:r = null; break a }h = []
          r = [0].concat(b); for (s = 1; s < p - 2; s++)r[0] = s / p, h.push(q.apply(null, r)); h.push(b[b.length - 1]); r = h
        }
      } return r || [e(n, f)]
    }a.Kw = {
      HGa: d,
      nDa: c,
      II: (function () {
        function a (b, c, d) { return (((1 - 3 * d + 3 * c) * b + (3 * d - 6 * c)) * b + 3 * c) * b } function b (a) { return a } var c = {}; var d = typeof Float32Array === 'function'; return function (e, f, h, s) {
          function u (b) {
            if (b === 0)b = 0; else if (b === 1)b = 1; else {
              for (var c = 0, d = 1; d !== 10 && w[d] <= b; ++d)c += 0.1; --d; var d = c + (b - w[d]) / (w[d + 1] - w[d]) * 0.1; var l = 3 * (1 - 3 * h + 3 * e) * d * d + 2 * (3 * h - 6 * e) * d + 3 * e; if (l >= 0.001) {
                for (c = 0; c < 4; ++c) {
                  l = 3 *
(1 - 3 * h + 3 * e) * d * d + 2 * (3 * h - 6 * e) * d + 3 * e; if (l === 0) break; d -= (a(d, e, h) - b) / l
                }b = d
              } else if (l === 0)b = d; else { var d = c; var c = c + 0.1; var m; var n = 0; do m = d + (c - d) / 2, l = a(m, e, h) - b, l > 0 ? c = m : d = m; while (Math.abs(l) > 1E-7 && ++n < 10);b = m }b = a(b, f, s)
            } return b
          } if (!(e >= 0 && e <= 1 && h >= 0 && h <= 1)) throw Error('bezier x values must be in [0, 1] range'); var v = arguments.toString(); if (c[v]) return c[v]; if (e === f && h === s) return b; for (var w = d ? new Float32Array(11) : Array(11), t = 0; t < 11; ++t)w[t] = a(0.1 * t, e, h); return c[v] = u
        }
      }()),
      c4: function (a, b, c, d) {
        var e; var f; var r = []; e = 0; for (f =
a.length; e < f; e += 1)r.push.apply(r, h(a[e - 1], a[e], a[e].controlPoints, b, c, d)); return r
      },
      Lqa: function (a, b, c, d) { a = this.c4(a, b, c, d); c = []; d = 0; for (var e = a.length; d < e; d++)c.push(f(b, a[d])); return c }
    }
  })(g); B.C.vA = B.C.$b.extend({
    w: { tolerance: 4, interpolateNumLimit: [3, 300] },
    A: function (a) { this.CLASS_NAME = 'AMap.BezierCurve'; g.c.ya(this, a); B.C.vA.ad.A.apply(this, arguments) },
    getLength: function () { g.c.add(this, 'getLength'); this.get('map'); this.D = !0; var a = this.getInterpolateLngLats(); this.D = !1; return g.nr.distanceOfLine(a) },
    getInterpolateLngLats: function () { g.c.add(this, 'getInterpolateLngLats'); var a = this.get('map'); return g.Kw.Lqa(this.get('path'), a && a.nj || g.bi.LL, Math.pow(2, 2), this.w) },
    getSerializedPath: function () {
      g.c.add(this,
        'getSerializedPath'); for (var a = this.get('path', null, !0), b = [], c = 0, d = a.length; c < d; c++) { var e = a[c]; if (e instanceof g.U) { var f = []; if (e.controlPoints) for (var h = 0, k = e.controlPoints.length; h < k; h++)f.push(e.controlPoints[h].ER()), f.push(e.controlPoints[h].BR()); f.push(e.ER()); f.push(e.BR()); b.push(f) } else b.push(e) } return b
    },
    Ja: function (a) { var b = typeof a[0]; if (g.a.isArray(a) && b === 'object') { for (b = 0; b < a.length; b += 1)a[b] = this.vja(a[b]); return a } return [this.lGa(a)] },
    vja: function (a) {
      var b; if (a instanceof g.U) {
        b =
a
      } else { b = typeof a[0]; var c; var d; var e = []; if (b === 'string' || b === 'number') { d = a.length; if (d % 2) throw Error("LngLat number should be even, now it's " + d); b = new g.U(a[d - 2], a[d - 1]); c = 0; for (d -= 2; c < d; c += 2)e.push(new g.U(a[c], a[c + 1])) } else if (g.a.isArray(a[0])) for (d = a.length, b = new g.U(a[d - 1][0], a[d - 1][1]), c = 0, d -= 1; c < d; c++)e.push(new g.U(a[c][0], a[c][1])); else throw Error("AMap.LngLat expected, now it's " + a); b && e.length && (b.controlPoints = g.a.Ja(e)) } if (b.controlPoints && b.controlPoints.length > 2) throw Error('Control Points Number should be 1 or 2 !')
      return b
    }
  }); B.C.Ec = B.C.fM.extend({
    A: function (a) { this.CLASS_NAME = this.CLASS_NAME || 'AMap.Polygon'; g.c.ya(this, a); this.D = !0; B.C.Ec.ad.A.apply(this, arguments); this.eh = !0; a = a || {}; a.zIndex = typeof a.zIndex === 'number' ? a.zIndex : 10; a.path && (a.path = this.Ja(a.path)); g.a.tb(this, g.extend({ fillColor: '#FFAA00', fillOpacity: 0.9 }, a)); this.setOptions(this.w); this.D = !1 },
    q4: function (a) {
      var b = 6378137 * Math.PI / 180; var c = 0; var d = a.length; if (d < 3) return 0; for (var e = 0; e < d - 1; e += 1) var f = a[e]; var h = a[e + 1]; var k = f.R * b * Math.cos(f.Q * Math.PI / 180); var f = f.Q * b; var l = h.R *
b * Math.cos(h.Q * Math.PI / 180); var c = c + (k * h.Q * b - l * f); e = a[e]; a = a[0]; d = e.R * b * Math.cos(e.Q * Math.PI / 180); e = e.Q * b; h = a.R * b * Math.cos(a.Q * Math.PI / 180); c += d * a.Q * b - h * e; return 0.5 * Math.abs(c)
    },
    fK: function (a) { return a.length ? a[0] instanceof g.U ? [[a]] : a[0] instanceof Array && a[0][0] instanceof g.U ? [a] : a : a },
    getArea: function () { g.c.add(this, 'getArea'); for (var a = this.get('path', null, !0), a = this.fK(a), b = 0, c = 0, d = a.length; c < d; c += 1) for (var e = a[c], b = b + this.q4(e[0]), f = 1; f < e.length; f += 1)b -= this.q4(e[f]); return Number(b.toFixed(2)) },
    toString: function () { g.c.add(this, 'toString'); for (var a = this.get('path'), a = this.fK(a), b = [], c = 0, d = a.length; c < d; c += 1) { for (var e = a[c], f = [], h = 0, k = e.length; h < k; h += 1)f.push(e[h].join(';')); b.push(f.join('|')) } return b.join('^') },
    getBounds: function () { var a = this.get('path'); if (a && a.length) { for (var a = this.fK(a), b = new g.le(180, 90, -180, -90), c = 0, d = a.length; c < d; c += 1) for (var e = a[c][0], f = e.length - 1; f >= 0; f -= 1)b.extend(e[f]); return b } return null },
    contains: function (a) {
      g.c.add(this, 'contains'); a = g.a.Ja(a); var b = this.get('path')
      var b = this.fK(b); a = [a.R, a.Q]; for (var c = 0, d = b.length; c < d; c += 1) { for (var e = b[c], f = !1, h = 0, k = e.length; h < k && (f = this.Zma(e[h]), g.wd.rq(f) || f.reverse(), f = g.wd.Sd(a, f, h === 0 ? !0 : !1), h > 0 && (f = !f), f); h += 1);if (f) return !0 } return !1
    },
    Zma: function (a) { for (var b = [], c = 0; c < a.length; c += 1)b.push([a[c].R, a[c].Q]); return b }
  }); B.C.kh = B.C.ed.extend({
    w: { visible: !0, zIndex: 10, strokeColor: '#006600', strokeOpacity: 0.9, strokeWeight: 3, strokeStyle: 'solid', strokeDasharray: [10, 5], radius: 1E3, fillColor: '#006600', fillOpacity: 0.9, unit: 'miter' },
    A: function (a) {
      this.CLASS_NAME = this.CLASS_NAME || 'AMap.Circle'; g.c.ya(this, a); this.D = !0; B.C.kh.ad.A.apply(this, arguments); a = a || {}; a.center && (a.center = g.a.Ja(a.center)); a.zIndex = typeof a.zIndex === 'number' ? a.zIndex : 10; g.a.jk(a.radius, 'string') && (a.radius = parseFloat(a.radius), isNaN(a.radius) && delete a.radius)
      g.a.tb(this, a); this.eh = this.w.center ? !0 : !1; this.setOptions(this.w); this.D = !1
    },
    setCenter: function (a, b) { g.c.add(this, 'setCenter'); (a = g.a.Ja(a)) && a instanceof g.U && (this.C && this.C.get('deltaPos') && this.C.set('deltaPos', [0, 0], !0), this.set('center', a), this.q('change', { type: 'change', target: this }), this.eh || (this.eh = !0, this.get('map') && this.get('map').q('overlays')), b || this.q('setCenter')) },
    getCenter: function () {
      g.c.add(this, 'getCenter'); var a = this.get('center', null, !0); this.C && this.C.get('deltaPos') && (a =
this.C.St([a], this.C.get('deltaPos'))[0]); return a
    },
    reset: function () { var a = this.get('center', null, !0); this.C && this.C.get('deltaPos') && (a = this.C.St([a], this.C.get('deltaPos'))[0], this.C.set('deltaPos', [0, 0], !0)); this.set('center', a) },
    setRadius: function (a, b) { g.c.add(this, 'setRadius'); this.set('radius', a); this.q('change', { type: 'change', target: this }); b || this.q('setRadius') },
    getPath: function (a) {
      g.c.add(this, 'getPath'); a = a || 36; for (var b = this.get('center', null, !0), c = this.get('radius', null, !0), d = [], e = 0; e <
a; e += 1) { var f = Math.PI * e / a * 2; var h = Math.cos(f) * c; var f = Math.sin(f) * c; d.push(b.offset(h, f)) } return d
    },
    getRadius: function () { g.c.add(this, 'getRadius'); return this.get('radius', null, !0) },
    getBounds: function () { var a = this.get('center'); var b = this.get('radius'); if (!a) return null; var c = a.offset(-b, -b); var a = a.offset(b, b); return new g.le(c, a) },
    contains: function (a) { g.c.add(this, 'contains'); return this.get('center').He(a) <= this.get('radius') ? !0 : !1 }
  })
  B.C.TV = B.C.kh.extend({
    A: function (a) { this.CLASS_NAME = 'AMap.CircleMarker'; g.c.ya(this, a); a = a || {}; a.unit = 'px'; void 0 === a.radius ? a.radius = 20 : g.a.jk(a.radius, 'string') && (a.radius = parseFloat(a.radius), isNaN(a.radius) && (a.radius = 20)); B.C.TV.ad.A.apply(this, arguments) },
    getBounds: function () { this.D = !0; var a = this.getCenter(); this.D = !1; return new g.le(a, a.cb()) },
    contains: function (a) {
      g.c.add(this, 'contains'); this.D = !0; var b = this.getMap(); this.D = !1; if (!b) return !1; var c = this.get('center'); b.D = !0; var d = !1; c.He(a) <=
this.get('radius') * b.getResolution(c) && (d = !0); b.D = !1; return d
    }
  }); var rc = g.ca.extend({
    A: function (a) { var b = Array(3); var c; c = a instanceof Array ? a : a instanceof g.Gl || a instanceof g.Na ? a.elements : arguments; b[0] = c[0] || 0; b[1] = c[1] || 0; b[2] = c[2] || 0; this.elements = b },
    length: function () { return Math.sqrt(this.d6()) },
    d6: function () { var a = this.elements; return a[0] * a[0] + a[1] * a[1] + a[2] * a[2] },
    normalize: function () { var a = this.elements; var b = a[0]; var c = a[1]; var d = a[2]; var e = Math.sqrt(b * b + c * c + d * d); if (e) { if (e === 1) return this } else return a[0] = 0, a[1] = 0, a[2] = 0, this; e = 1 / e; a[0] = b * e; a[1] = c * e; a[2] = d * e; return this },
    cb: function () { return new g.Na(this) },
    copy: function (a) { var b = this.elements; a = a.elements; b[0] = a[0]; b[1] = a[1]; b[2] = a[2]; return this },
    set: function (a, b, c) { var d = this.elements; d[0] = a; d[1] = b; d[2] = c },
    gb: function (a) { var b = this.elements; a = a.elements; return b[0] === a[0] && b[1] === a[1] && b[2] === a[2] },
    Jn: function (a) { var b = this.elements; b[0] *= a; b[1] *= a; b[2] *= a; return this },
    add: function (a) { var b = this.elements; a = a.elements; b[0] += a[0]; b[1] += a[1]; b[2] += a[2]; return this },
    Wla: function (a, b) {
      var c = a.elements; var d = b.elements
      var e = this.elements; e[0] = c[0] + d[0]; e[1] = c[1] + d[1]; e[2] = c[2] + d[2]; return this
    },
    sub: function (a) { a = a.elements; var b = this.elements; b[0] -= a[0]; b[1] -= a[1]; b[2] -= a[2]; return this },
    Xz: function (a, b) { var c = a.elements; var d = b.elements; var e = this.elements; e[0] = c[0] - d[0]; e[1] = c[1] - d[1]; e[2] = c[2] - d[2]; return this },
    hs: function (a) { a = a.elements; var b = this.elements; b[0] = b[1] * a[2] - b[2] * a[1]; b[1] = b[2] * a[0] - b[0] * a[2]; b[2] = b[0] * a[1] - b[1] * a[0]; return this },
    wy: function (a, b) {
      var c = a.elements; var d = b.elements; var e = this.elements; e[0] = c[1] * d[2] -
c[2] * d[1]; e[1] = c[2] * d[0] - c[0] * d[2]; e[2] = c[0] * d[1] - c[1] * d[0]; return this
    },
    Of: function (a) { a = a.elements; var b = this.elements; return b[0] * a[0] + b[1] * a[1] + b[2] * a[2] },
    He: function (a) { return Math.sqrt(this.X2(a)) },
    X2: function (a) { var b = a.elements; var c = this.elements; a = c[0] - b[0]; var d = c[1] - b[1]; var b = c[2] - b[2]; return a * a + d * d + b * b },
    sf: function (a) {
      var b = this.elements[0]; var c = this.elements[1]; var d = this.elements[2]; a = a.elements; var e = 1 / (a[3] * b + a[7] * c + a[11] * d + a[15]); this.elements[0] = (a[0] * b + a[4] * c + a[8] * d + a[12]) * e; this.elements[1] =
(a[1] * b + a[5] * c + a[9] * d + a[13]) * e; this.elements[2] = (a[2] * b + a[6] * c + a[10] * d + a[14]) * e; return this
    }
  }); g.Na = rc; g.Na.Wb({ Of: 'dot', cb: 'clone', add: 'add', sub: 'sub', Wla: 'addVectors', Xz: 'subVectors', wy: 'crossVectors', normalize: 'normalize', length: 'length' })
  var sc = g.ca.extend({
    A: function (a) { var b = Array(4); var c; c = a instanceof Array ? a : arguments; b[0] = c[0]; b[1] = c[1]; b[2] = c[2]; b[3] = c[3] || 1; this.elements = b },
    copy: function (a) { var b = this.elements; a = a.elements; b[0] = a[0]; b[1] = a[1]; b[2] = a[2]; b[3] = void 0 !== a[3] ? a[3] : 1; return this },
    multiply: function (a) { var b = this.elements; b[0] *= a; b[1] *= a; b[2] *= a; b[3] *= a },
    sf: function (a) {
      var b = this.elements[0]; var c = this.elements[1]; var d = this.elements[2]; var e = this.elements[3]; a = a.elements; this.elements[0] = a[0] * b + a[4] * c + a[8] * d + a[12] * e; this.elements[1] =
a[1] * b + a[5] * c + a[9] * d + a[13] * e; this.elements[2] = a[2] * b + a[6] * c + a[10] * d + a[14] * e; this.elements[3] = a[3] * b + a[7] * c + a[11] * d + a[15] * e; return this
    }
  }); g.Gl = sc; function vc (a, b) { this.xz = void 0 !== a ? a : new g.Na(1, 0, 0); this.NC = void 0 !== b ? b : 0 }g.Vw = vc; vc.prototype = { set: function (a, b) { this.xz.copy(a); this.NC = b; return this }, normalize: function () { var a = 1 / this.xz.length(); this.xz.Jn(a); this.NC *= a; return this }, BI: function (a) { return this.xz.Of(a) + this.NC } }; function wc (a, b, c, d, e) { a.xz.set(b, c, d); a.NC = e; return a };function xc (a, b, c, d, e, f) { this.jE = [void 0 !== a ? a : new g.Vw(), void 0 !== b ? b : new g.Vw(), void 0 !== c ? c : new g.Vw(), void 0 !== d ? d : new g.Vw(), void 0 !== e ? e : new g.Vw(), void 0 !== f ? f : new g.Vw()] }g.cW = xc
  xc.prototype = {
    set: function (a, b, c, d, e, f) { var h = this.jE; h[0].copy(a); h[1].copy(b); h[2].copy(c); h[3].copy(d); h[4].copy(e); h[5].copy(f); return this },
    cb: function () { return (new g.cW()).copy(this) },
    copy: function (a) { for (var b = this.jE, c = 0; c < 6; c++)b[c].copy(a.jE[c]); return this },
    DJ: (function () {
      var a = new g.Na(); var b = new g.Na(); var c = a.elements; var d = b.elements; return function (e) {
        var f = this.jE; var h = e.max.elements; e = e.min.elements; for (var k = 0; k < 6; k++) {
          var l = f[k]; var m = l.xz.elements; c[0] = m[0] > 0 ? e[0] : h[0]; d[0] = m[0] > 0 ? h[0] : e[0]; c[1] = m[1] > 0
            ? e[1] : h[1]; d[1] = m[1] > 0 ? h[1] : e[1]; c[2] = m[2] > 0 ? e[2] : h[2]; d[2] = m[2] > 0 ? h[2] : e[2]; m = l.BI(a); l = l.BI(b); if (m < 0 && l < 0) return !1
        } return !0
      }
    }())
  }; (function (a) {
    function b (a) { this.elements = a || [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1] }a.eM = function (a) { this.elements = [a.elements[0], a.elements[1], a.elements[2], a.elements[4], a.elements[5], a.elements[6], a.elements[8], a.elements[9], a.elements[10]] }; b.prototype.BU = function () { var a = this.elements; a[0] = 1; a[4] = 0; a[8] = 0; a[12] = 0; a[1] = 0; a[5] = 1; a[9] = 0; a[13] = 0; a[2] = 0; a[6] = 0; a[10] = 1; a[14] = 0; a[3] = 0; a[7] = 0; a[11] = 0; a[15] = 1 }; b.prototype.set = function (a) {
      if (a.elements !== this.elements) {
        return this.elements = a.elements.slice(0),
        this
      }
    }; b.prototype.toFixed = function (b) { for (var d = this.elements, e = 0; e < 16; ++e)d[e] !== 0 && (d[e] = a.a.Ac(d[e], b)); return this }; b.prototype.concat = function (a) { var b, e, f, h, k, l, m; e = b = this.elements; f = a.elements; if (b === f) for (f = Array(16), a = 0; a < 16; ++a)f[a] = b[a]; for (a = 0; a < 4; a++)h = e[a], k = e[a + 4], l = e[a + 8], m = e[a + 12], b[a] = h * f[0] + k * f[1] + l * f[2] + m * f[3], b[a + 4] = h * f[4] + k * f[5] + l * f[6] + m * f[7], b[a + 8] = h * f[8] + k * f[9] + l * f[10] + m * f[11], b[a + 12] = h * f[12] + k * f[13] + l * f[14] + m * f[15]; return this }; b.multiply = function (b, d) {
      var e = Array(16); var f; var h
      var k; var l; var m; var n; var p; k = h = b.elements; l = d.elements; if (h === l) for (f = 0; f < 16; ++f)e[f] = h[f]; for (f = 0; f < 4; f++)h = k[f], m = k[f + 4], n = k[f + 8], p = k[f + 12], e[f] = h * l[0] + m * l[1] + n * l[2] + p * l[3], e[f + 4] = h * l[4] + m * l[5] + n * l[6] + p * l[7], e[f + 8] = h * l[8] + m * l[9] + n * l[10] + p * l[11], e[f + 12] = h * l[12] + m * l[13] + n * l[14] + p * l[15]; return new a.Dc(e)
    }; b.prototype.multiply = b.prototype.concat; b.prototype.Eh = function (b) {
      var d = this.elements; b = b.elements; var e = new a.Gl(); var f = e.elements; f[0] = b[0] * d[0] + b[1] * d[4] + b[2] * d[8] + b[3] * d[12]; f[1] = b[0] * d[1] + b[1] * d[5] + b[2] * d[9] + b[3] *
d[13]; f[2] = b[0] * d[2] + b[1] * d[6] + b[2] * d[10] + b[3] * d[14]; f[3] = b[0] * d[3] + b[1] * d[7] + b[2] * d[11] + b[3] * d[15]; return e
    }; b.prototype.dA = function () { var a, b; a = this.elements; b = a[1]; a[1] = a[4]; a[4] = b; b = a[2]; a[2] = a[8]; a[8] = b; b = a[3]; a[3] = a[12]; a[12] = b; b = a[6]; a[6] = a[9]; a[9] = b; b = a[7]; a[7] = a[13]; a[13] = b; b = a[11]; a[11] = a[14]; a[14] = b; return this }; b.prototype.wxa = function (a) {
      var b, e, f; b = a.elements; a = this.elements; e = []; e[0] = b[5] * (b[10] * b[15] - b[11] * b[14]) - b[9] * (b[6] * b[15] + b[7] * b[14]) + b[13] * (b[6] * b[11] - b[7] * b[10]); e[4] = -b[4] *
(b[10] * b[15] - b[11] * b[14]) + b[8] * (b[6] * b[15] - b[7] * b[14]) - b[12] * (b[6] * b[11] - b[7] * b[10]); e[8] = b[4] * (b[9] * b[15] - b[11] * b[13]) - b[8] * (b[5] * b[15] - b[7] * b[13]) + b[12] * (b[5] * b[11] - b[7] * b[9]); e[12] = -b[4] * (b[9] * b[14] - b[10] * b[13]) + b[8] * (b[5] * b[14] - b[6] * b[13]) - b[12] * (b[5] * b[10] - b[6] * b[9]); e[1] = -b[1] * (b[10] * b[15] - b[11] * b[14]) + b[9] * (b[2] * b[15] - b[3] * b[14]) - b[13] * (b[2] * b[11] - b[3] * b[10]); e[5] = b[0] * (b[10] * b[15] - b[11] * b[14]) - b[8] * (b[2] * b[15] - b[3] * b[14]) + b[12] * (b[2] * b[11] - b[3] * b[10]); e[9] = -b[0] * (b[9] * b[15] - b[11] * b[13]) + b[8] *
(b[1] * b[15] - b[3] * b[13]) - b[12] * (b[1] * b[11] - b[3] * b[9]); e[13] = b[0] * (b[9] * b[14] - b[10] * b[13]) - b[8] * (b[1] * b[14] - b[2] * b[13]) + b[12] * (b[1] * b[10] - b[2] * b[9]); e[2] = b[1] * (b[6] * b[15] - b[7] * b[14]) - b[5] * (b[2] * b[15] - b[3] * b[14]) + b[13] * (b[2] * b[7] - b[3] * b[6]); e[6] = -b[0] * (b[6] * b[15] - b[7] * b[14]) + b[4] * (b[2] * b[15] - b[3] * b[14]) - b[12] * (b[2] * b[7] - b[3] * b[6]); e[10] = b[0] * (b[5] * b[15] - b[7] * b[13]) - b[4] * (b[1] * b[15] - b[3] * b[13]) + b[12] * (b[1] * b[7] - b[3] * b[5]); e[14] = -b[0] * (b[5] * b[14] - b[6] * b[13]) + b[4] * (b[1] * b[14] - b[2] * b[13]) - b[12] * (b[1] * b[6] -
b[2] * b[5]); e[3] = -b[1] * (b[6] * b[11] - b[7] * b[10]) + b[5] * (b[2] * b[11] - b[3] * b[10]) - b[9] * (b[2] * b[7] - b[3] * b[6]); e[7] = b[0] * (b[6] * b[11] - b[7] * b[10]) - b[4] * (b[2] * b[11] + b[3] * b[10]) + b[8] * (b[2] * b[7] - b[3] * b[6]); e[11] = -b[0] * (b[5] * b[11] + b[7] * b[9]) + b[4] * (b[1] * b[11] - b[3] * b[9]) - b[8] * (b[1] * b[7] + b[3] * b[5]); e[15] = b[0] * (b[5] * b[10] - b[6] * b[9]) - b[4] * (b[1] * b[10] + b[2] * b[9]) + b[8] * (b[1] * b[6] - b[2] * b[5]); f = b[0] * e[0] + b[1] * e[4] + b[2] * e[8] + b[3] * e[12]; if (f === 0) return this; f = 1 / f; for (b = 0; b < 16; b++)a[b] = e[b] * f; return this
    }; b.prototype.Hg = function () { return (new b()).wxa(this) }
    b.prototype.EU = function (a, b, e, f, h, k) { var l, m, n, p; if (a === b || e === f || h === k) throw 'null frustum'; m = 1 / (b - a); n = 1 / (f - e); p = 1 / (k - h); l = this.elements; l[0] = 2 * m; l[1] = 0; l[2] = 0; l[3] = 0; l[4] = 0; l[5] = 2 * n; l[6] = 0; l[7] = 0; l[8] = 0; l[9] = 0; l[10] = -2 * p; l[11] = 0; l[12] = -(b + a) * m; l[13] = -(f + e) * n; l[14] = -(k + h) * p; l[15] = 1; return this }; b.prototype.bva = function (a, d, e, f, h, k) { return this.concat((new b()).EU(a, d, e, f, h, k)) }; b.prototype.uxa = function (a, b, e, f, h, k) {
      var l, m, n, p; if (a === b || f === e || h === k) throw 'null frustum'; if (h <= 0) throw 'near <= 0'; if (k <=
0) throw 'far <= 0'; m = 1 / (b - a); n = 1 / (f - e); p = 1 / (k - h); l = this.elements; l[0] = 2 * h * m; l[1] = 0; l[2] = 0; l[3] = 0; l[4] = 0; l[5] = 2 * h * n; l[6] = 0; l[7] = 0; l[8] = (b + a) * m; l[9] = (f + e) * n; l[10] = -(k + h) * p; l[11] = -1; l[12] = 0; l[13] = 0; l[14] = -2 * h * k * p; l[15] = 0; return this
    }; b.prototype.qR = function (a, d, e, f, h, k) { return this.concat((new b()).uxa(a, d, e, f, h, k)) }; b.prototype.T8 = function (a, b, e, f) {
      var h, k; if (e === f || b === 0) throw 'null frustum'; if (e <= 0) throw 'near <= 0'; if (f <= 0) throw 'far <= 0'; a /= 2; k = Math.sin(a); if (k === 0) throw 'null frustum'; h = 1 / (f - e); k = Math.cos(a) /
k; a = this.elements; a[0] = k / b; a[1] = 0; a[2] = 0; a[3] = 0; a[4] = 0; a[5] = k; a[6] = 0; a[7] = 0; a[8] = 0; a[9] = 0; a[10] = -(f + e) * h; a[11] = -1; a[12] = 0; a[13] = 0; a[14] = -2 * e * f * h; a[15] = 0; return this
    }; b.prototype.perspective = function (a, d, e, f) { return this.concat((new b()).T8(a, d, e, f)) }; b.prototype.bw = function (a, b, e) { var f = this.elements; f[0] = a; f[4] = 0; f[8] = 0; f[12] = 0; f[1] = 0; f[5] = b; f[9] = 0; f[13] = 0; f[2] = 0; f[6] = 0; f[10] = e; f[14] = 0; f[3] = 0; f[7] = 0; f[11] = 0; f[15] = 1; return this }; b.prototype.scale = function (a, b, e) {
      var f = this.elements; f[0] *= a; f[4] *= b
      f[8] *= e; f[1] *= a; f[5] *= b; f[9] *= e; f[2] *= a; f[6] *= b; f[10] *= e; f[3] *= a; f[7] *= b; f[11] *= e; return this
    }; b.prototype.W8 = function (a, b, e) { var f = this.elements; f[12] = a; f[13] = b; f[14] = e; return this }; b.prototype.translate = function (a, b, e) { var f = this.elements; f[12] += f[0] * a + f[4] * b + f[8] * e; f[13] += f[1] * a + f[5] * b + f[9] * e; f[14] += f[2] * a + f[6] * b + f[10] * e; f[15] += f[3] * a + f[7] * b + f[11] * e; return this }; b.prototype.Tz = function (a, b, e, f) {
      var h, k, l, m, n, p, q, r; a = Math.PI * a / 180; h = this.elements; k = Math.sin(a); a = Math.cos(a); b !== 0 && e === 0 && f === 0
        ? (b < 0 && (k = -k), h[0] = 1, h[4] = 0, h[8] = 0, h[12] = 0, h[1] = 0, h[5] = a, h[9] = -k, h[13] = 0, h[2] = 0, h[6] = k, h[10] = a, h[14] = 0, h[3] = 0, h[7] = 0, h[11] = 0) : b === 0 && e !== 0 && f === 0 ? (e < 0 && (k = -k), h[0] = a, h[4] = 0, h[8] = k, h[12] = 0, h[1] = 0, h[5] = 1, h[9] = 0, h[13] = 0, h[2] = -k, h[6] = 0, h[10] = a, h[14] = 0, h[3] = 0, h[7] = 0, h[11] = 0) : b === 0 && e === 0 && f !== 0 ? (f < 0 && (k = -k), h[0] = a, h[4] = -k, h[8] = 0, h[12] = 0, h[1] = k, h[5] = a, h[9] = 0, h[13] = 0, h[2] = 0, h[6] = 0, h[10] = 1, h[14] = 0, h[3] = 0, h[7] = 0, h[11] = 0) : (l = Math.sqrt(b * b + e * e + f * f), l !== 1 && (l = 1 / l, b *= l, e *= l, f *= l), l = 1 - a, m = b * e, n = e * f, p = f * b, q = b * k,
        r = e * k, k *= f, h[0] = b * b * l + a, h[1] = m * l + k, h[2] = p * l - r, h[3] = 0, h[4] = m * l - k, h[5] = e * e * l + a, h[6] = n * l + q, h[7] = 0, h[8] = p * l + r, h[9] = n * l - q, h[10] = f * f * l + a, h[11] = 0, h[12] = 0, h[13] = 0, h[14] = 0); h[15] = 1; return this
    }; b.prototype.rotate = function (a, d, e, f) { return this.concat((new b()).Tz(a, d, e, f)) }; b.prototype.et = function (a) { return this.rotate(a, 1, 0, 0) }; b.prototype.ft = function (a) { return this.rotate(a, 0, 1, 0) }; b.prototype.gt = function (a) { return this.rotate(a, 0, 0, 1) }; b.prototype.Xu = function (a) {
      for (var b = 0, e = this.elements.length; b < e; b++) {
        if (this.elements[b] !==
a.elements[b]) return !1
      } return !0
    }; b.prototype.cb = function () { return new b(this.elements.slice(0)) }; a.Dc = b
  })(g); B.C.Et = B.C.Ec.extend({
    w: { visible: !0, zIndex: 10, strokeColor: '#006600', strokeOpacity: 0.9, strokeWeight: 3, strokeStyle: 'solid', strokeDasharray: [10, 5], radius: [1E3, 1E3], fillColor: '#006600', fillOpacity: 0.9 },
    A: function () {
      var a = this; var b = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; this.CLASS_NAME = 'AMap.Ellipse'; g.c.ya(this, b); var b = g.extend({}, this.w, b); var c = this.Ur(b); b.path = c; B.C.Et.ad.A.call(this, b); this.set('path', c); this.get('center') && this.get('map') || (this.eh = !1); this.on('movepoly', function (b) {
        var c =
a.get('map'); b = c.Nd(c.zb(a.get('center')).add(b.uK)); c.view.type === '3D' && a.set('deltaPos', [0, 0], !0); a.set('center', b)
      })
    },
    Ur: function () {
      var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; var b = []; var c = a.center || this.get('center'); var d = a.map || this.get('map'); if (c && d) {
        for (var c = g.a.Ja(c), e = a.radius || this.get('radius'), f = d.zb(c), a = f.x, f = f.y, h = g.a.map(e, function (a) { return a / d.getResolution(c, 20) }), e = h[0], h = h[1], k = g.l.ba, l = (k ? 4 : 1) * Math.PI / 180, m = 0, k = k ? 89 : 359; m <= k; m++) {
          var n = m * l; var n = {
            x: a + e * Math.cos(n),
            y: f +
h * Math.sin(n)
          }; b.push(d.Nd(n))
        }
      } return b
    },
    mapChanged: function () { g.a.Sh(B.C.Et.ad.mapChanged) && B.C.Et.ad.mapChanged.apply(this); this.D = !0; this.setPath(this.Ur()); this.D = !1; !this.eh && this.get('map') && (this.eh = !0, this.get('map').q('overlays')) },
    setCenter: function (a, b) {
      g.c.add(this, 'setCenter'); (a = g.a.Ja(a)) && a instanceof g.U && (this.C && this.C.get('deltaPos') && this.C.set('deltaPos', [0, 0], !0), this.set('center', a), this.set('path', this.Ur()), this.eh || (this.eh = !0, this.get('map') && this.get('map').q('overlays')),
      b || (this.q('setCenter'), this.q('change', { type: 'change', target: this })))
    },
    setRadius: function (a) { var b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !1; g.c.add(this, 'setRadius'); a && a.length === 2 && (this.set('radius', a), this.set('path', this.Ur()), b || (this.q('change', { type: 'change', target: this }), this.q('setPath'))) },
    setOptions: function (a) { B.C.Et.ad.setOptions.call(this, a); this.D = !0; a.radius && this.setRadius(a.radius, !0); a.center && this.setCenter(a.center, !0); this.D = !1 },
    getRadius: function () {
      g.c.add(this,
        'getRadius'); return this.get('radius', null, !0)
    },
    getCenter: function () { g.c.add(this, 'getCenter'); var a = this.get('center', null, !0); this.C && this.C.get('deltaPos') && this.C.St([a], this.C.get('deltaPos'))[0]; return a }
  }); B.C.Kt = B.C.Ec.extend({
    w: { visible: !0, zIndex: 10, strokeColor: '#006600', strokeOpacity: 0.9, strokeWeight: 3, strokeStyle: 'solid', strokeDasharray: [10, 5], fillColor: '#006600', fillOpacity: 0.9 },
    A: function () {
      var a = this; var b = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; this.CLASS_NAME = 'AMap.Rectangle'; g.c.ya(this, b); b = g.extend({}, this.w, b); this.D = !0; var c = this.Ur(b); b.path = c; B.C.Kt.ad.A.call(this, b); this.setPath(c); this.w.bounds && this.get('map') || (this.eh = !1); this.on('movepoly', function (b) {
        var c = a.get('map')
        var f = a.get('bounds'); var h = c.Nd(c.zb(f.xc).add(b.uK)); b = c.Nd(c.zb(f.oc).add(b.uK)); c.view.type === '3D' && a.set('deltaPos', [0, 0]); a.set('bounds', new g.le(h, b))
      }); this.D = !1
    },
    Ur: function () { var a = []; var b = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).bounds || this.get('bounds'); if (b) { b.D = !0; var c = b.getSouthWest(); var d = b.getNorthEast(); b.D = !1; g.a.Rb([new g.U(c.R, c.Q, !0), new g.U(d.R, c.Q, !0), new g.U(d.R, d.Q, !0), new g.U(c.R, d.Q, !0)], function (b) { return a.push(b) }) } return a },
    mapChanged: function () {
      g.a.Sh(B.C.Kt.ad.mapChanged) &&
B.C.Kt.ad.mapChanged.apply(this); this.D = !0; this.setPath(this.Ur()); this.D = !1; !this.eh && this.get('map') && (this.eh = !0, this.get('map').q('overlays'))
    },
    setOptions: function (a) { this.D = !0; B.C.Kt.ad.setOptions.call(this, a); a.bounds && this.setBounds(a.bounds, !0); this.D = !1 },
    setBounds: function (a) {
      var b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !1; g.c.add(this, 'setBounds'); a && a instanceof g.le && (this.set('bounds', a), this.set('path', this.Ur()), this.eh || (this.eh = !0, this.get('map') && this.get('map').q('overlays')),
      b || (this.q('change', { type: 'change', target: this }), this.q('setBounds')))
    },
    getBounds: function () { g.c.add(this, 'getBounds'); return this.get('bounds', null, !0) }
  }); B.C.IW = B.C.ub.extend({
    w: { text: '', textAlign: 'center', verticalAlign: 'middle', offset: new g.H(0, 0) },
    A: function (a) { this.CLASS_NAME = 'AMap.Text'; g.c.ya(this, a); B.C.IW.ad.A.apply(this, arguments); this.gga(); this.D = !0; this.setText(this.get('text')); this.setStyle(this.get('style')); this.D = !1 },
    gga: function () { if (!this.lC) { var a = document.createElement('div'); a.className = 'amap-overlay-text-container'; this.lC = a } },
    getText: function () { g.c.add(this, 'getText'); return this.get('text', null, !0) },
    setText: function (a) {
      g.c.add(this,
        'setText'); a || a === 0 || (a = ''); g.j.Aya(this.lC, 'amap-overlay-text-empty', !a); g.c.add(this, 'setText'); this.set('text', a); this.lC.innerHTML = a; this.b8()
    },
    setStyle: function (a) { g.c.add(this, 'setStyle'); a = a || {}; for (var b in a)a.hasOwnProperty(b) && (this.lC.style[b] = a[b]); this.b8() },
    b8: function () { this.D = !0; this.setContent(this.lC); this.setShadow(this.getShadow()); this.D = !1 }
  }); g.fW = {
    find: function (a) { return g.a.find(this.fx || [], a) },
    aJ: function () { return this.fx || [] },
    Kd: function (a) { return this.find(a) !== null },
    add: function (a) { var b = this; var c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : g.a.Rs; var d = this.fx || (this.fx = []); g.a.isArray(a) ? g.a.Rb(a, function (a) { b.add(a, c) }) : this.find(a) === null && (d.push(a), c(a)); return this },
    remove: function (a) {
      var b = this; var c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : g.a.Rs; var d = this.fx; if (d) {
        if (g.a.isArray(a)) {
          g.a.Rb(a, function (a) {
            b.remove(a,
              c)
          })
        } else { var e = g.a.indexOf(d, a); e !== -1 && (c(d[e]), d.splice(e, 1)) }
      } return this
    },
    clear: function () { this.Rb(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g.a.Rs); this.fx = []; return this },
    Rb: function () { var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g.a.Rs; var b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null; g.a.Rb(this.fx || [], function () { for (var c = arguments.length, d = Array(c), e = 0; e < c; e++)d[e] = arguments[e]; c = d[0]; g.a.Sh(c.Rb) ? c.Rb(a, b) : a.apply(b || c, d) }); return this },
    Qo: function (a) {
      for (var b =
arguments.length, c = Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++)c[d - 1] = arguments[d]; this.Rb(function (b) { b && g.a.Sh(b[a]) && b[a].apply(b, c) }); return this
    },
    g: function (a) { var b = arguments; this.Rb(function (a) { a.on.apply(a, b) }); return this },
    G: function (a) { var b = arguments; this.Rb(function (a) { a.off.apply(a, b) }); return this },
    addListener: function () { this.g.apply(this, arguments) },
    by: function (a) {
      var b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : g.a.Rs; var c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null; this.Rb(function (d) {
        d.on.call(d,
          event, function () { b(); d.off(a) }, c)
      })
    },
    removeListener: function (a) { this.G(a.YQ, a.gS, a.cf) },
    O: function (a, b) { this.Rb(function (c) { c.emit(a, b) }) }
  }; B.C.Un = B.C.Ih.extend({
    ka: [g.fW],
    A: function () { var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []; this.CLASS_NAME = 'AMap.OverlayGroup'; g.c.ya(this); B.C.Un.ad.A.apply(this); this.map = null; this.add(a) },
    wc: function (a) { g.c.add(this, 'setMap'); this.Qo('setMap', a); this.Qo('setMap', a); this.set('map', a); this.map = a; return this },
    mapChanged: function () {},
    uC: function (a) { var b = this; g.c.add(this, 'addOverlay'); this.add(a, function (a) { b.map && (a.D = !0, a.setMap(b.map), a.D = !1) }); return this },
    Lz: function (a) {
      var b =
this; g.c.add(this, 'removeOverlay'); this.remove(a, function (a) { a.D = !0; a.getMap() === b.map && a.setMap(null); a.D = !1 }); return this
    },
    jd: function () { var a = this; g.c.add(this, 'clearOverlays'); this.clear(function (b) { b.D = !0; b.getMap() === a.map && b.setMap(null); b.D = !1 }); return this },
    Zy: function () { g.c.add(this, 'hide'); this.Qo('hide'); return this },
    show: function () { g.c.add(this, 'show'); this.Qo('show'); return this },
    tb: function () {
      var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; g.c.add(this, 'setOptions')
      this.Qo('setOptions', a); return this
    }
  }); B.C.Un.Wb({ find: 'getOverlay', aJ: 'getOverlays', uC: ['addOverlay', 'addOverlays'], Kd: 'hasOverlay', Lz: ['removeOverlay', 'removeOverlays'], jd: 'clearOverlays', Rb: 'eachOverlay', wc: 'setMap', tb: 'setOptions', show: 'show', Zy: 'hide', g: 'on', G: 'off' }); (function (a, b) {
    function c (a, b) { if (!a.length) return !1; for (var c = 0, d = a.length; c < d; c++) { var e = a[c]; if (!(b === '*' || e && e.geometry && e.geometry.type === b) || e && e.properties && !e.properties._isAmap) return !1 } return !0 } function d (a) { for (var b = [], c = 0, d = a.length; c < d; c++)b.push(a[c].geometry.coordinates); return b } function e (a) { if (!a || !a.length) return []; a = b.a.Ja(a); for (var c = [], d = 0, e = a.length; d < e; d++)c[d] = a[d].xl(); a[a.length - 1].gb(a[0]) || c.push(a[0].xl()); return c } function f (a) {
      if (!a) return []; a = b.a.Ja(a); b.a.isArray(a[0]) ||
(a = [a]); for (var c = [], d = 0, f = a.length; d < f; d++)c[d] = e(a[d]); return c
    }a.C.dW = a.C.Un.extend({
      A: function (c) {
        this.CLASS_NAME = 'AMap.GeoJSON'; b.c.ya(this, c); a.C.dW.ad.A.call(this, []); this.D = !0; this.w = b.extend({ getMarker: function (b, c) { return new a.C.ub({ innerOverlay: !0, position: c }) }, getPolyline: function (b, c) { return new a.C.$b({ path: c, innerOverlay: !0 }) }, getPolygon: function (b, c) { return new a.C.Ec({ path: c, innerOverlay: !0 }) }, coordsToLatLng: function (a) { return a } }, c); if (!this.w.coordsToLatLngs) {
          var d = this.w.coordsToLatLng
          this.w.coordsToLatLngs = function (a) { for (var b = [], c = 0, e = a.length; c < e; c++)b.push(d.call(null, a[c])); return b }
        } this.importData(this.w.geoJSON); this.D = !1
      },
      importData: function (a) { b.c.add(this, 'importData'); if (a && (a = this.bga(a), a.length)) { this.clearOverlays(); this.uC(a); var c = this.w.map; if (c) for (var d = 0, e = a.length; d < e; d++)a[d].D = !0, a[d].setMap(c), a[d].D = !1 } },
      toGeoJSON: function () { b.c.add(this, 'toGeoJSON'); for (var a = this.aJ(), c = [], d = 0, e = a.length; d < e; d++)a[d].D = !0, c[d] = a[d].toGeoJSON(), a[d].D = !1; return c },
      bga: function (a) { if (a) { b.a.isArray(a) || (a = [a]); for (var c = [], d = 0, e = a.length; d < e; d++) { var f = this.cga(a[d]); f && c.push(f) } return c } },
      zX: function (a) { var b = a.type === 'Feature' ? a.geometry : a; var b = this.w.coordsToLatLng(b ? b.coordinates : null); var b = this.w.getMarker(a, b); this.Lr(a, b); return b },
      Sca: function (c) {
        for (var d = c.type === 'Feature' ? c.geometry : c, d = d ? d.coordinates : null, e = [], f = 0, n = d.length; f < n; f++) {
          e.push(this.zX(b.extend({}, c, {
            type: 'Feature',
            properties: { _isAmap: !0, _pointIndex: f, _parentProperities: c.properties },
            geometry: {
              type: 'Point',
              coordinates: d[f]
            }
          })))
        }d = new a.C.Un(e); this.Lr(c, d); return d
      },
      yX: function (a) { var b = a.type === 'Feature' ? a.geometry : a; var b = this.w.coordsToLatLngs(b ? b.coordinates : null); var b = this.w.getPolyline(a, b); this.Lr(a, b); return b },
      Rca: function (c) {
        for (var d = c.type === 'Feature' ? c.geometry : c, d = d ? d.coordinates : null, e = [], f = 0, n = d.length; f < n; f++)e.push(this.yX(b.extend({}, c, { type: 'Feature', properties: { _isAmap: !0, _lineStringIndex: f, _parentProperities: c.properties }, geometry: { type: 'LineString', coordinates: d[f] } }))); d = new a.C.Un(e)
        this.Lr(c, d); return d
      },
      AX: function (a) { for (var b = a.type === 'Feature' ? a.geometry : a, b = b ? b.coordinates : null, c = [], d = 0, e = b.length; d < e; d++)c.push(this.w.coordsToLatLngs(b[d])); b = this.w.getPolygon(a, c); this.Lr(a, b); return b },
      Tca: function (c) {
        for (var d = c.type === 'Feature' ? c.geometry : c, d = d ? d.coordinates : null, e = [], f = 0, n = d.length; f < n; f++)e.push(this.AX(b.extend({}, c, { type: 'Feature', properties: { _isAmap: !0, _polygonIndex: f, _parentProperities: c.properties }, geometry: { type: 'Polygon', coordinates: d[f] } }))); d = new a.C.Un(e)
        this.Lr(c, d); return d
      },
      Lca: function (c) { for (var d = (c.type === 'Feature' ? c.geometry : c).geometries, e = [], f = 0, n = d.length; f < n; f++)e.push(this.QN(b.extend({}, c, { type: 'Feature', properties: { _isAmap: !0, _geometryIndex: f, _parentProperities: c.properties }, geometry: d[f] }))); d = new a.C.Un(e); this.Lr(c, d); return d },
      cga: function (b) {
        if (b) {
          switch (b.type) {
            case 'Feature':return this.QN(b); case 'FeatureCollection':for (var c = b.features, d = [], e = 0, f = c.length; e < f; e++) { var p = this.QN(c[e]); p && d.push(p) }c = new a.C.Un(d); this.Lr(b, c)
              return c; default:throw Error('Invalid GeoJSON object.' + b.type)
          }
        }
      },
      Lr: function (a, c) { c && a.properties && c.setExtData && (c.D = !0, c.setExtData(b.extend({}, c.getExtData() || {}, { _geoJsonProperties: a.properties })), c.D = !1) },
      QN: function (a) {
        var b = a.type === 'Feature' ? a.geometry : a; if (!(b && b.coordinates || b)) return null; switch (b.type) {
          case 'Point':return this.zX(a); case 'MultiPoint':return this.Sca(a); case 'LineString':return this.yX(a); case 'MultiLineString':return this.Rca(a); case 'Polygon':return this.AX(a); case 'MultiPolygon':return this.Tca(a)
          case 'GeometryCollection':return this.Lca(a); default:throw Error('Invalid GeoJSON geometry.' + b.type)
        }
      }
    }); a.C.Un.Db({
      toGeoJSON: function (a) {
        b.c.add(this, 'toGeoJSON'); a = a || this.aJ(); for (var e = [], f = 0, m = a.length; f < m; f++)a[f].toGeoJSON && (a[f].D = !0, e[f] = a[f].toGeoJSON(), a[f].D = !1); this.D = !0; a = this.getExtData() || {}; this.D = !1; if (c(e, 'Point'))e = { type: 'Feature', properties: a._geoJsonProperties || {}, geometry: { type: 'MultiPoint', coordinates: d(e) } }; else if (c(e, 'LineString')) {
          e = {
            type: 'Feature',
            properties: a._geoJsonProperties ||
{},
            geometry: { type: 'MultiLineString', coordinates: d(e) }
          }
        } else if (c(e, 'Polygon'))e = { type: 'Feature', properties: a._geoJsonProperties || {}, geometry: { type: 'MultiPolygon', coordinates: d(e) } }; else if (c(e, '*')) { a = a._geoJsonProperties || {}; for (var f = [], m = 0, n = e.length; m < n; m++)f.push(e[m].geometry); e = { type: 'Feature', properties: a, geometry: { type: 'GeometryCollection', geometries: f } } } else e = { type: 'FeatureCollection', properties: a._geoJsonProperties || {}, features: e }; return e
      }
    }); a.C.ub.Db({
      toGeoJSON: function () {
        b.c.add(this,
          'toGeoJSON'); this.D = !0; var a = this.getExtData() || {}; var c = this.getPosition().xl(); this.D = !1; return { type: 'Feature', properties: a._geoJsonProperties || {}, geometry: { type: 'Point', coordinates: c } }
      }
    }); a.C.$b.Db({ toGeoJSON: function () { b.c.add(this, 'toGeoJSON'); this.D = !0; var a = this.getExtData() || {}; var c = this.getPath(); this.D = !1; return { type: 'Feature', properties: a._geoJsonProperties || {}, geometry: { type: 'LineString', coordinates: e(c) } } } }); a.C.Ec.Db({
      toGeoJSON: function () {
        b.c.add(this, 'toGeoJSON'); this.D = !0; var a = this.getExtData() ||
{}; var c = this.getPath(); this.D = !1; if (b.a.isArray(c[0]) && b.a.isArray(c[0][0])) { for (var d = [], e = 0; e < c.length; e += 1)d.push(f(c[e])); return { type: 'Feature', properties: a._geoJsonProperties || {}, geometry: { type: 'MultiPolygon', coordinates: d } } } return { type: 'Feature', properties: a._geoJsonProperties || {}, geometry: { type: 'Polygon', coordinates: f(c) } }
      }
    })
  })(B, g); B.o.UL = B.o.Xb.extend({
    ka: [g.fW],
    A: function (a) { var b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; this.CLASS_NAME = 'AMap.LayerGroup'; g.c.ya(this, b); B.o.UL.ad.A.call(this, b); this.map = null; this.add(a) },
    wc: function (a) { g.c.add(this, 'setMap'); this.Qo('setMap', a); this.set('map', a); this.map = a; return this },
    mapChanged: function () {},
    TH: function (a) { var b = this; g.c.add(this, 'addLayer'); this.add(a, function (a) { b.map && (a.D = !0, a.setMap(b.map), a.D = !1) }); return this },
    uk: function (a) {
      var b = this; g.c.add(this,
        'removeLayer'); this.remove(a, function (a) { a.D = !0; a.getMap() === b.map && a.setMap(null); a.D = !1 }); return this
    },
    vna: function () { var a = this; g.c.add(this, 'clearLayers'); this.clear(function (b) { b.D = !0; b.getMap() === a.map && b.setMap(null); b.D = !1 }); return this },
    Zy: function () { g.c.add(this, 'hide'); this.Qo('hide'); return this },
    show: function () { g.c.add(this, 'show'); this.Qo('show'); return this },
    reload: function () { this.Qo('reload'); return this },
    tb: function () {
      var a = this; var b = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0]
        : {}; g.c.add(this, 'setOptions'); var c = g.a.keys(b); g.a.Rb(c, function (c) { a.Qo('set', c, b[c]) }); return this
    }
  }); B.o.UL.Wb({ find: 'getLayer', aJ: 'getLayers', TH: ['addLayer', 'addLayers'], Kd: 'hasLayer', uk: ['removeLayer', 'removeLayers'], vna: 'clearLayers', Rb: 'eachLayer', wc: 'setMap', tb: 'setOptions', show: 'show', Zy: 'hide', reload: 'reload', g: 'on', G: 'off' }); g.Vaa = B.Ob.extend({ A: function (a, b) { b && (b.center = b.position, b.zoom = 11); arguments.callee.ma.apply(this, arguments); window.console && window.console.log && window.console.log('\u9ad8\u5fb7\u5730\u56feJSAPI\u8857\u666f\u5df2\u4e0b\u7ebf\uff0c\u611f\u8c22\u60a8\u7684\u652f\u6301\u3002') } }); g.Waa = B.C.ub.extend({ A: function (a) { arguments.callee.ma.apply(this, arguments) } }); g.wd = {
    ms: function (a, b) { for (var c = Infinity, d = 0, e = 1, f = b.length; e < f; d = e, e += 1)c = Math.min(c, g.wd.Sxa(a, [b[d], b[e]])); return Math.sqrt(c) },
    Sxa: function (a, b) { return this.eL(a, this.z2(a, b)) },
    eL: function (a, b) { var c = a[0] - b[0]; var d = a[1] - b[1]; return c * c + d * d },
    CGa: function (a, b, c, d) {
      d = d || 1E-6; if (c[0] === b[0]) { var e = Math.min(b[1], c[1]); b = Math.max(b[1], c[1]); return Math.abs(a[0] - c[0]) < d && a[1] >= e && a[1] <= b } var e = Math.min(b[0], c[0]); var f = Math.max(b[0], c[0]); return Math.abs((c[1] - b[1]) / (c[0] - b[0]) * (a[0] - b[0]) + b[1] - a[1]) < d &&
a[0] >= e && a[0] <= f
    },
    z2: function (a, b) { var c = a[0]; var d = a[1]; var e = b[0]; var f = b[1]; var h = e[0]; var e = e[1]; var k = f[0]; var f = f[1]; var l = k - h; var m = f - e; var c = l === 0 && m === 0 ? 0 : (l * (c - h) + m * (d - e)) / (l * l + m * m || 0); c <= 0 || (c >= 1 ? (h = k, e = f) : (h += c * l, e += c * m)); return [h, e] },
    rq: function (a) { for (var b = a.length, c = 0, d = a[b - 1], e = d[0], d = d[1], f, h, k = 0; k < b; k += 1)h = a[k], f = h[0], h = h[1], c += (f - e) * (h + d), e = f, d = h; return c > 0 },
    Sd: function (a, b, c) {
      var d = a[0]; a = a[1]; var e = !1; var f; var h; var k; var l; var m = b.length; var n = 0; for (l = m - 1; n < m; l = n, n += 1) {
        var p = !1; f = b[n][0]; h = b[n][1]; k = b[l][0]; l = b[l][1]; if (f === d && h === a || k ===
d && l === a) return c ? !0 : !1; if (h < a === l >= a) { f = (k - f) * (a - h) / (l - h) + f; if (d === f) return c ? !0 : !1; p = d < f }p && (e = !e)
      } return e
    },
    K7: function (a, b) {
      function c (a, b, c, d) { var e = [a[0] - b[0], a[1] - b[1]]; var f = [c[0] - d[0], c[1] - d[1]]; a = a[0] * b[1] - a[1] * b[0]; c = c[0] * d[1] - c[1] * d[0]; d = 1 / (e[0] * f[1] - e[1] * f[0]); return [(a * f[0] - c * e[0]) * d, (a * f[1] - c * e[1]) * d] } function d (a, b, c) { return (c[0] - b[0]) * (a[1] - b[1]) > (c[1] - b[1]) * (a[0] - b[0]) } var e; var f; var h; var k; var l = a; e = b[b.length - 2]; for (var m = 0, n = b.length - 1; m < n; m++) {
        f = b[m]; var p = l; var l = []; h = p[p.length - 1]; for (var q = 0, r =
p.length; q < r; q++)k = p[q], d(k, e, f) ? (d(h, e, f) || l.push(c(e, f, h, k)), l.push(k)) : d(h, e, f) && l.push(c(e, f, h, k)), h = k; e = f
      } if (l.length < 3) return []; l.push(l[0]); return l
    }
  }; (function (a) {
    function b (b, c) {
      var d; a: { switch (b) { case 'EPSG3395':d = a.bi.YV; break a; case 'EPSG4326':d = a.bi.ZV; break a }d = a.bi.LL } return {
        project: function (b) { a.a.isArray(b) && (b = new a.U(b[0], b[1])); return d.OD(b, c).xl() },
        unproject: function (b) { a.a.isArray(b) && (b = new a.H(b[0], b[1])); return d.mE(b, c).xl() },
        normalizePoint: function (b) { return a.a.Ja(b) },
        distance: function (b, c) {
          c = this.normalizePoint(c); if (a.a.isArray(c)) return this.distanceToLine(b, c); b = this.normalizePoint(b); var d = a.Nm.Ou; var e = Math.cos; var f = b.Q * d; var h =
c.Q * d; var k = 2 * a.Nm.SQ; var d = c.R * d - b.R * d; var e = (1 - e(h - f) + (1 - e(d)) * e(f) * e(h)) / 2; return k * Math.asin(Math.sqrt(e))
        },
        ringArea: function (b) { b = this.normalizeLine(b); var c = a.Nm.SQ * a.Nm.Ou; var d = 0; var e = b.length; if (e < 3) return 0; for (var f = 0; f < e - 1; f += 1) var h = b[f]; var k = b[f + 1]; var u = h.R * c * Math.cos(h.Q * a.Nm.Ou); var h = h.Q * c; var v = k.R * c * Math.cos(k.Q * a.Nm.Ou); var d = d + (u * k.Q * c - v * h); f = b[f]; b = b[0]; e = f.R * c * Math.cos(f.Q * a.Nm.Ou); f = f.Q * c; k = b.R * c * Math.cos(b.Q * a.Nm.Ou); d += e * b.Q * c - k * f; return 0.5 * Math.abs(d) },
        sphericalCalotteArea: function (b) {
          var c = a.Nm.SQ; b = c - c *
Math.cos(b / c); return 2 * Math.PI * c * b
        }
      }
    } function c () { return { normalizePoint: function (a) { return a && a.x && a.y ? [a.x, a.y] : a }, distance: function (a, b) { var c = a[0] - b[0]; var d = a[1] - b[1]; return Math.sqrt(c * c + d * d) }, project: function (a) { return a }, unproject: function (a) { return a }, ringArea: function (a) { for (var b = [0, 0], c = [0, 0], d = 0, e = a[0], n = a.length, p = 2; p < n; p++) { var q = a[p - 1]; var r = a[p]; b[0] = e[0] - r[0]; b[1] = e[1] - r[1]; c[0] = e[0] - q[0]; c[1] = e[1] - q[1]; d += b[0] * c[1] - b[1] * c[0] } return d / 2 } } } function d (a) {
      for (var b = 0, c = a.length, d = 0; d < c - 1; d++) {
        var e =
a[d]
      } var n = a[d + 1]; var b = b + (n[0] - e[0]) * (n[1] + e[1]); if (a[c - 1][0] !== a[0][0] || a[c - 1][1] !== a[0][1])e = a[c - 1], n = a[0], b += (n[0] - e[0]) * (n[1] + e[1]); return b <= 0
    } function e (b) { this.CLASS_NAME = 'AMap.GeometryUtil'; this.Ub = a.extend({ onSegmentTolerance: 5, crs: 'EPSG3857', maxZoom: 20 }, b); this.setCrs(this.Ub.crs) }a.extend(e.prototype, {
      clone: function (b) { return new e(a.extend({}, this.Ub, b)) },
      isPoint: function (b) { return b && (b instanceof a.U || a.a.isArray(b) && !isNaN(b[0])) },
      normalizePoint: function (a) { return a },
      normalizeLine: function (a) {
        for (var b =
[], c = 0, d = a.length; c < d; c++)b.push(this.normalizePoint(a[c])); return b
      },
      normalizeMultiLines: function (b) { a.a.isArray(b) && this.isPoint(b[0]) && (b = [b]); for (var c = [], d = 0, e = b.length; d < e; d++)c.push(this.normalizeLine(b[d])); return c },
      setCrs: function (d) { a.extend(this, d && d.project && d.unproject ? d : d === 'plane' ? c() : b(d, this.Ub.maxZoom)) },
      distance: function () { throw Error('distance Not implemented!') },
      Fx: function (a, b) {
        a = this.normalizeLine(a); this.isPoint(a[0]) || (a = a[0]); for (var c = [], d = 0, e = a.length; d < e; d++)c.push(this.project(a[d]))
        !0 === b ? c = this.makesureClockwise(c) : !1 === b && (c = this.makesureClockwise(c), c.reverse()); return c
      },
      $ja: function (a) { for (var b = [], c = 0, d = a.length; c < d; c++)b.push(this.unproject(a[c])); return b },
      closestOnSegment: function (b, c, d) { b = a.wd.z2(this.project(b), this.Fx([c, d])); return this.unproject(b) },
      closestOnLine: function (a, b) { b = this.normalizeLine(b); for (var c = Infinity, d, e = 0, n = b.length; e < n - 1; e++) { var p = this.closestOnSegment(a, b[e], b[e + 1]); var q = this.distance(a, p); q < c && (c = q, d = p) } return d },
      distanceToSegment: function (a,
        b, c) { return this.distanceToLine(a, [b, c]) },
      distanceToLine: function (a, b) { b = this.normalizeLine(b); this.isPoint(b[0]) || (b = b[0]); for (var c = Infinity, d = 0, e = b.length; d < e - 1; d++) var n = this.closestOnSegment(a, b[d], b[d + 1]); var c = Math.min(c, this.distance(a, n)); return c },
      distanceToPolygon: function (a, b) { return this.isPointInRing(a, b) ? 0 : this.distanceToLine(a, b) },
      isPointOnSegment: function (a, b, c, d) { if (!d && d !== 0 || d < 0)d = this.Ub.onSegmentTolerance; return this.distanceToSegment(a, b, c) <= d },
      isPointOnLine: function (a, b, c) {
        b = this.normalizeLine(b)
        for (var d = 0, e = b.length; d < e - 1; d++) if (this.isPointOnSegment(a, b[d], b[d + 1], c)) return !0; return !1
      },
      isPointOnRing: function (a, b, c) { b = this.normalizeLine(b); for (var d = 0, e = b.length; d < e; d++) if (this.isPointOnSegment(a, b[d], b[d === e - 1 ? 0 : d + 1], c)) return !0; return !1 },
      isPointOnPolygon: function (a, b, c) { b = this.normalizeMultiLines(b); for (var d = 0, e = b.length; d < e; d++) if (this.isPointOnRing(a, b[d], c)) return !0; return !1 },
      makesureClockwise: function (a) { d(a) || (a = [].concat(a), a.reverse()); return a },
      makesureAntiClockwise: function (a) {
        d(a) &&
(a = [].concat(a), a.reverse()); return a
      },
      isPointInRing: function (b, c) { c = this.normalizeLine(c); var d = this.Fx(c, !0); return a.wd.Sd(this.project(b), d, !1) },
      isRingInRing: function (a, b) { for (var c = 0, d = a.length; c < d; c++) if (!this.isPointInRing(a[c], b)) return !1; c = 0; for (d = b.length; c < d; c++) if (this.isPointInRing(b[c], a)) return !1; return !0 },
      isPointInPolygon: function (a, b) { b = this.normalizeMultiLines(b); for (var c, d = 0, e = b.length; d < e && (c = this.isPointInRing(a, b[d]), d > 0 && (c = !c), c); d += 1);return c },
      doesSegmentsIntersect: function (a,
        b, c, d) { var e = this.Fx([a, b, c, d]); a = e[0]; b = e[1]; c = e[2]; d = e[3]; var e = !1; var n = (d[0] - c[0]) * (a[1] - c[1]) - (d[1] - c[1]) * (a[0] - c[0]); var p = (b[0] - a[0]) * (a[1] - c[1]) - (b[1] - a[1]) * (a[0] - c[0]); a = (d[1] - c[1]) * (b[0] - a[0]) - (d[0] - c[0]) * (b[1] - a[1]); a !== 0 && (b = n / a, p /= a, b >= 0 && b <= 1 && p >= 0 && p <= 1 && (e = !0)); return e },
      doesSegmentLineIntersect: function (a, b, c) { c = this.normalizeLine(c); for (var d = 0, e = c.length; d < e - 1; d++) if (this.doesSegmentsIntersect(a, b, c[d], c[d + 1])) return !0; return !1 },
      doesSegmentRingIntersect: function (a, b, c) {
        c = this.normalizeLine(c)
        for (var d = 0, e = c.length; d < e; d++) if (this.doesSegmentsIntersect(a, b, c[d], c[d === e - 1 ? 0 : d + 1])) return !0; return !1
      },
      doesSegmentPolygonIntersect: function (a, b, c) { c = this.normalizeMultiLines(c); for (var d = 0, e = c.length; d < e; d++) if (this.doesSegmentRingIntersect(a, b, c[d])) return !0; return !1 },
      doesLineLineIntersect: function (a, b) { a = this.normalizeLine(a); for (var c = 0, d = a.length; c < d - 1; c++) if (this.doesSegmentLineIntersect(a[c], a[c + 1], b)) return !0; return !1 },
      doesLineRingIntersect: function (a, b) {
        a = this.normalizeLine(a); for (var c =
0, d = a.length; c < d - 1; c++) if (this.doesSegmentRingIntersect(a[c], a[c + 1], b)) return !0; return !1
      },
      doesPolygonPolygonIntersect: function (a, b) { return this.doesRingRingIntersect(b, a) || this.isRingInRing(a, b) || this.isRingInRing(b, a) ? !0 : !1 },
      doesRingRingIntersect: function (a, b) { a = this.normalizeLine(a); for (var c = 0, d = a.length; c < d; c++) if (this.doesSegmentRingIntersect(a[c], a[c === d - 1 ? 0 : c + 1], b)) return !0; return !1 },
      IP: function (a, b) {
        for (var c = 0, d = 0; d < a.length - 1; d += 1) {
          var e = this.distance(a[d], a[d + 1]); if (e + c < b)c += e; else {
            return c =
(b - c) / e, [a[d][0] + c * (a[d + 1][0] - a[d][0]), a[d][1] + c * (a[d + 1][1] - a[d][1]), d]
          }
        } return null
      },
      PX: function (a, b) {
        function c () { var a = [e[0] - n[0], e[1] - n[1]]; var b = [p[0] - q[0], p[1] - q[1]]; var d = e[0] * n[1] - e[1] * n[0]; var f = p[0] * q[1] - p[1] * q[0]; var h = 1 / (a[0] * b[1] - a[1] * b[0]); return [(d * b[0] - f * a[0]) * h, (d * b[1] - f * a[1]) * h] } function d (a) { return (n[0] - e[0]) * (a[1] - e[1]) > (n[1] - e[1]) * (a[0] - e[0]) }a = this.makesureAntiClockwise(a); b = this.makesureClockwise(b); var e; var n; var p; var q; var r = a; e = b[b.length - 1]; for (var s = 0, u = b.length; s < u; s++) {
          n = b[s]; var v = r; var r = []; p = v[v.length -
1]; for (var w = 0, t = v.length; w < t; w++)q = v[w], d(q) ? (d(p) || r.push(c()), r.push(q)) : d(p) && r.push(c()), p = q; e = n
        } return r
      },
      ringRingClip: function (a, b) { a = this.Fx(a); b = this.Fx(b); var c = this.PX(a, b); c.length == 0 && (c = this.PX(b, a)); return this.$ja(c) },
      ringArea: function () { throw Error('distance Not implemented!') },
      distanceOfLine: function (a) { a = this.normalizeLine(a); for (var b = 0, c = 0, d = a.length; c < d - 1; c++)b += this.distance(a[c], a[c + 1]); return b },
      isClockwise: function (a) { a = this.Fx(a); return d(a) }
    }); a.nr = new e(); a.gi = new e(); a.gi.setCrs('plane')
  })(g); g.NL = function () {
    var a = {}; (function () { function b (a) { for (var b = 0, e = a.length, f = 0; f < e - 1; f++) var h = a[f]; var k = a[f + 1]; var b = b + (k[0] - h[0]) * (k[1] + h[1]); if (a[e - 1][0] !== a[0][0] || a[e - 1][1] !== a[0][1])h = a[e - 1], k = a[0], b += (k[0] - h[0]) * (k[1] + h[1]); return b <= 0 }a.Ita = function (a) { b(a) && (a = [].concat(a), a.reverse()); return a }; a.w5 = b })(); (function () {
      function b (a) { var b = a.length; b > 2 && a[b - 1][0] == a[0][0] && a[b - 1][1] == a[0][1] && a.pop() } function c (a, b) { for (var c = 0; c < b.length; c++)a.push(b[c][0]), a.push(b[c][1]) }a.Yh = function (a, e) {
        var f =
arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0; var h = arguments[3]; e = e || []; var k = []; var l = []; b(a); c(k, a); var m = a.length; e.forEach(b); for (var n = 0; n < e.length; n++)l.push(m), m += e[n].length, c(k, e[n]); l = (this.pL ? this.pL : g.Fc.pL)(k, l); if (h) { f = []; for (n = 0; n < l.length; n += 1)h = 2 * l[n], f.push([k[h], k[h + 1]]); return f } if (f) for (n = 0; n < l.length; n += 1)l[n] += f; return l
      }
    })(); return a
  }; (function (a) {
    a.tF = function () {
      function a (b, c, d, e, f) { for (var h, k = 0, l = c, n = d - e; l < d; l += e)k += (b[n] - b[l]) * (b[l + 1] + b[n + 1]), n = l; if (f === k > 0) for (f = c; f < d; f += e)h = r(f, b[f], b[f + 1], h); else for (f = d - e; f >= c; f -= e)h = r(f, b[f], b[f + 1], h); h && m(h, h.next) && (s(h), h = h.next); return h } function c (a, b) { if (!a) return a; b || (b = a); var c = a; var d; do if (d = !1, c.o9 || !m(c, c.next) && l(c.Ia, c, c.next) !== 0)c = c.next; else { s(c); c = b = c.Ia; if (c === c.next) break; d = !0 } while (d || c !== b);return b } function d (a, b, e, f, r, u, C) {
        if (a) {
          if (!C && u) {
            var E = a; var A = E; do {
              A.z === null &&
(A.z = h(A.x, A.y, f, r, u)), A.gp = A.Ia, A = A.ol = A.next
            } while (A !== E);A.gp.ol = null; A.gp = null; var E = A; var z; var G; var H; var I; var P; var L; var O = 1; do { A = E; H = E = null; for (I = 0; A;) { I++; G = A; for (z = P = 0; z < O && (P++, G = G.ol, G); z++);for (L = O; P > 0 || L > 0 && G;)P !== 0 && (L === 0 || !G || A.z <= G.z) ? (z = A, A = A.ol, P--) : (z = G, G = G.ol, L--), H ? H.ol = z : E = z, z.gp = H, H = z; A = G }H.ol = null; O *= 2 } while (I > 1)
          } for (E = a; a.Ia !== a.next;) {
            A = a.Ia; G = a.next; if (u) {
              a:if (H = a.Ia, I = a.next, l(H, a, I) >= 0)H = !1; else {
                P = h(H.x < a.x ? H.x < I.x ? H.x : I.x : a.x < I.x ? a.x : I.x, H.y < a.y ? H.y < I.y ? H.y : I.y : a.y < I.y ? a.y : I.y, f, r, u); O = h(H.x >
a.x ? H.x > I.x ? H.x : I.x : a.x > I.x ? a.x : I.x, H.y > a.y ? H.y > I.y ? H.y : I.y : a.y > I.y ? a.y : I.y, f, r, u); for (z = a.ol; z && z.z <= O;) { if (z !== a.Ia && z !== a.next && k(H.x, H.y, a.x, a.y, I.x, I.y, z.x, z.y) && l(z.Ia, z, z.next) >= 0) { H = !1; break a }z = z.ol } for (z = a.gp; z && z.z >= P;) { if (z !== a.Ia && z !== a.next && k(H.x, H.y, a.x, a.y, I.x, I.y, z.x, z.y) && l(z.Ia, z, z.next) >= 0) { H = !1; break a }z = z.gp }H = !0
              }
            } else a:if (H = a.Ia, I = a.next, l(H, a, I) >= 0)H = !1; else { for (P = a.next.next; P !== a.Ia;) { if (k(H.x, H.y, a.x, a.y, I.x, I.y, P.x, P.y) && l(P.Ia, P, P.next) >= 0) { H = !1; break a }P = P.next }H = !0 } if (H) {
              b.push(A.ue /
e), b.push(a.ue / e), b.push(G.ue / e), s(a), E = a = G.next
            } else if (a = G, a === E) {
              if (C) {
                if (C === 1) { C = b; E = e; A = a; do G = A.Ia, H = A.next.next, !m(G, H) && n(G, A, A.next, H) && p(G, H) && p(H, G) && (C.push(G.ue / E), C.push(A.ue / E), C.push(H.ue / E), s(A), s(A.next), A = a = H), A = A.next; while (A !== a);a = A; d(a, b, e, f, r, u, 2) } else {
                  if (C === 2) {
                    a: {
                      C = a; do {
                        for (E = C.next.next; E !== C.Ia;) {
                          if (A = C.ue !== E.ue) {
                            if (A = void 0, A = C.next.ue !== E.ue) {
                              if (A = void 0, A = C.Ia.ue !== E.ue) {
                                A = A = void 0; b: {
                                  A = C; do {
                                    if (A.ue !== C.ue && A.next.ue !== C.ue && A.ue !== E.ue && A.next.ue !== E.ue && n(A, A.next, C,
                                      E)) { A = !0; break b }A = A.next
                                  } while (A !== C);A = !1
                                } if (A = !A) if (A = void 0, A = p(C, E)) if (A = void 0, A = p(E, C)) { A = C; G = !1; H = (C.x + E.x) / 2; I = (C.y + E.y) / 2; do A.y > I !== A.next.y > I && A.next.y !== A.y && H < (A.next.x - A.x) * (I - A.y) / (A.next.y - A.y) + A.x && (G = !G), A = A.next; while (A !== C);A = G }
                              }
                            }
                          } if (A) { a = q(C, E); C = c(C, C.next); a = c(a, a.next); d(C, b, e, f, r, u); d(a, b, e, f, r, u); break a }E = E.next
                        }C = C.next
                      } while (C !== a)
                    }
                  }
                }
              } else d(c(a), b, e, f, r, u, 1); break
            }
          }
        }
      } function e (a, b) { return a.x - b.x } function f (a, b) {
        var c = b; var d = a.x; var e = a.y; var f = -Infinity; var h; do {
          if (e <= c.y && e >= c.next.y &&
c.next.y !== c.y) { var l = c.x + (e - c.y) * (c.next.x - c.x) / (c.next.y - c.y); if (l <= d && l > f) { f = l; if (l === d) { if (e === c.y) return c; if (e === c.next.y) return c.next }h = c.x < c.next.x ? c : c.next } }c = c.next
        } while (c !== b);if (!h) return null; if (d === f) return h.Ia; for (var l = h, m = h.x, n = h.y, s = Infinity, r, c = h.next; c !== l;)d >= c.x && c.x >= m && d !== c.x && k(e < n ? d : f, e, m, n, e < n ? f : d, e, c.x, c.y) && (r = Math.abs(e - c.y) / (d - c.x), (r < s || r === s && c.x > h.x) && p(c, a) && (h = c, s = r)), c = c.next; return h
      } function h (a, b, c, d, e) {
        a = 32767 * (a - c) * e; b = 32767 * (b - d) * e; a = (a | a << 8) & 16711935
        a = (a | a << 4) & 252645135; a = (a | a << 2) & 858993459; b = (b | b << 8) & 16711935; b = (b | b << 4) & 252645135; b = (b | b << 2) & 858993459; return (a | a << 1) & 1431655765 | ((b | b << 1) & 1431655765) << 1
      } function k (a, b, c, d, e, f, h, k) { return (e - h) * (b - k) - (a - h) * (f - k) >= 0 && (a - h) * (d - k) - (c - h) * (b - k) >= 0 && (c - h) * (f - k) - (e - h) * (d - k) >= 0 } function l (a, b, c) { return (b.y - a.y) * (c.x - b.x) - (b.x - a.x) * (c.y - b.y) } function m (a, b) { return a.x === b.x && a.y === b.y } function n (a, b, c, d) { return m(a, b) && m(c, d) || m(a, d) && m(c, b) ? !0 : l(a, b, c) > 0 !== l(a, b, d) > 0 && l(c, d, a) > 0 !== l(c, d, b) > 0 } function p (a,
        b) { return l(a.Ia, a, a.next) < 0 ? l(a, b, a.next) >= 0 && l(a, a.Ia, b) >= 0 : l(a, b, a.Ia) < 0 || l(a, a.next, b) < 0 } function q (a, b) { var c = new u(a.ue, a.x, a.y); var d = new u(b.ue, b.x, b.y); var e = a.next; var f = b.Ia; a.next = b; b.Ia = a; c.next = e; e.Ia = c; d.next = c; c.Ia = d; f.next = d; d.Ia = f; return d } function r (a, b, c, d) { a = new u(a, b, c); d ? (a.next = d.next, a.Ia = d, d.next.Ia = a, d.next = a) : (a.Ia = a, a.next = a); return a } function s (a) { a.next.Ia = a.Ia; a.Ia.next = a.next; a.gp && (a.gp.ol = a.ol); a.ol && (a.ol.gp = a.gp) } function u (a, b, c) {
        this.ue = a; this.x = b; this.y = c; this.ol = this.gp =
this.z = this.next = this.Ia = null; this.o9 = !1
      } return {
        pL: function (h, k, l) {
          l = l || 2; var m = k && k.length; var n = m ? k[0] * l : h.length; var p = a(h, 0, n, l, !0); var s = []; if (!p) return s; var r, u, z, G; if (m) { var H = l; var m = []; var I; var P; var L; G = 0; for (I = k.length; G < I; G++) { P = k[G] * H; L = G < I - 1 ? k[G + 1] * H : h.length; P = a(h, P, L, H, !1); P === P.next && (P.o9 = !0); var O = L = P; do L.x < O.x && (O = L), L = L.next; while (L !== P);m.push(O) }m.sort(e); for (G = 0; G < m.length; G++) { k = m[G]; H = p; if (H = f(k, H))k = q(H, k), c(k, k.next); p = c(p, p.next) } } if (h.length > 80 * l) {
            r = z = h[0]; u = m = h[1]; for (H = l; H < n; H += l) {
              G = h[H], k =
h[H + 1], G < r && (r = G), k < u && (u = k), G > z && (z = G), k > m && (m = k)
            }z = Math.max(z - r, m - u); z = z !== 0 ? 1 / z : 0
          }d(p, s, l, r, u, z); return s
        }
      }
    }; a.baa = a.tF()
  })(g); (function (a) {
    function b (a) { var b = a.length; b > 2 && a[b - 1][0] == a[0][0] && a[b - 1][1] == a[0][1] && a.pop() } function c (a, b) { for (var c = 0; c < b.length; c++)a.push(b[c][0]), a.push(b[c][1]) }a.Xn = {
      ri: function (a) { for (var b = a.length, c = 0, h = b - 1, k = 0; k < b; h = k++)c += a[h][0] * a[k][1] - a[k][0] * a[h][1]; return 0.5 * c },
      w5: function (b) { return a.Xn.ri(b) < 0 },
      normalize: function (b) {
        var c; if (b) {
          c = []; for (var f = 0, h = b.length; f < h; f += 1) {
            c[f] = b[f] instanceof Array ? this.normalize(b[f]) : b[f] instanceof a.U ? [b[f].R, b[f].Q] : b[f] instanceof a.H ? [b[f].x, b[f].y]
              : b[f]
          }
        } return c
      },
      Yh: function (d, e) { e = e || []; var f = []; var h = []; b(d); c(f, d); var k = d.length; e.forEach(b); for (var l = 0; l < e.length; l++)h.push(k), k += e[l].length, c(f, e[l]); return a.baa.pL(f, h) }
    }
  })(g); g.uI = function (a, b, c) {
    g.c.add({ CLASS_NAME: 'convertFrom' }, b); var d = g.r.Yd + '/v3/assistant/coordinate/convert'; a = g.a.Ja(a); var e = []; if (a instanceof Array) { for (var f = 0, h = a.length; f < h; f += 1)e.push(a[f] + ''); e = e.join(';') } else e = a + ''; b = ['key=' + g.r.key, 's=rsv3', 'locations=' + e, 'coordsys=' + (b || 'gps')]; d += b.length > 0 ? '?' + b.join('&') : ''; d = new g.ib.yb(d, { callback: 'callback' }); d.g('complete', function (a) {
      if (a.status === '1') {
        a = a.locations.split(';'); for (var b = 0; b < a.length; b += 1) {
          var d = a[b].split(','); a[b] = new AMap.LngLat(d[0],
            d[1])
        }c && typeof c === 'function' && c('complete', { info: 'ok', locations: a })
      } else c && typeof c === 'function' && c('error', a.info)
    }, this); d.g('error', function (a) { c && typeof c === 'function' && c('error', a.info) }, this)
  }; g.ib = g.ib || {}
  g.ib.kM = g.ca.extend({
    ka: [g.va],
    A: function (a, b) { this.w = { callback: 'cbk', type: 'json', charset: 'utf-8' }; b = b || {}; g.a.tb(this, b); this.url = a; this.send(a, b.Ed, b.H2, b.oU, b.responseType) },
    send: function (a) {
      var b = g.j.create('script'); b.type = 'text/javascript'; b.charset = this.w.charset; var c = this; g.l.Ie ? b.onreadystatechange = function () { this.readyState !== 'loaded' && this.readyState !== 'complete' || c.q('complete') } : (b.onload = function () { c.q('complete') }, b.onerror = function () { c.q('error', { status: 0, info: 'service error', url: a }) })
      b.src = a; document.getElementsByTagName('head')[0].appendChild(b)
    }
  }); g.ib.yb = g.ib.kM.extend({
    ena: function () { if (g.a.J8) return g.a.gL.push(this), !0 },
    Twa: function () { this.q('error', { info: 'TIME_OUT_A' }) },
    send: function (a, b, c, d) {
      function e () { window[f] = null; try { window[f] = null } catch (a) {}h.onerror = null; h.parentNode && h.parentNode.removeChild(h) } if (!this.w.gy || !this.ena()) {
        a = encodeURI(a); var f = this.w.fun; if (!f || window[f])f = g.a.a4('jsonp_', 6) + '_'; var h = document.createElement('script'); h.type = 'text/javascript'; h.charset = 'utf-8'; h.async = !0; var k = this; g.l.Ie || (h.onerror = function () {
          e()
          k.q('error', { info: 'REQUEST_FAILED', url: a })
        }); window[f] = function (a) { e(); if (k.w.callbackFunction)k.w.callbackFunction.call(k.w.context, a); else if (a.errcode === 3E4 && a.data)g.a.J8 = !0, g.sb.load('AMap.AntiCrabFrame', function () { g.a.gy || (g.a.gy = new g.N$()); g.a.gL.push(k); g.a.gy.open(k.w.Ed, a.data.host, k.gE || '', k.url) }); else { if (a instanceof Array || typeof a === 'string')a = { data: a }; a.$Da = f; k.q('complete', a) } }; b = '?'; a.indexOf('?') !== -1 && (b = '&'); b = a + b + this.w.callback + '=' + f; if (a.indexOf(g.r.Yd + '/v') !== -1 || a.indexOf('yuntuapi.amap.com/datasearch') !== -1 ||
a.indexOf('webapi.amap.com/') !== -1)b = b + '&platform=JS&logversion=2.0' + ('&appname=' + g.r.Rp), b += '&csid=' + g.a.gF(), b += '&sdkversion=' + g.r.uo; if (c = this.w.KI) { var l = []; var m; for (m in c)c.hasOwnProperty(m) && (l.push(m + '=' + c[m]), b += '&' + m + '=' + encodeURIComponent(c[m])); k.gE = l.join('&') }h.src = d ? b + '&rereq=true' : b; g.ib.yb.cea = document.getElementsByTagName('body')[0] || document.getElementsByTagName('head')[0]; g.ib.yb.cea.appendChild(h)
      }
    }
  }); g.ib.XMLHttpRequest = g.ib.kM.extend({
    send: function (a, b, c, d, e) {
      var f = this; if ((g.l.Ie || g.l.c5) && window.XDomainRequest) { var h = this.G$ = new XDomainRequest(); h.onerror = function (b) { f.q('error', { url: a, data: b }) }; h.onload = function () { f.q('complete', { url: a, data: h.responseText }) }; h.open(b || 'GET', a); setTimeout(function () { h.send(c || void 0) }, 0) } else {
        var k = this.G$ = new XMLHttpRequest(); k.onreadystatechange = function () {
          k.readyState === 4 && k.status === 200 ? f.q('complete', {
            url: a,
            data: k.responseType === 'arraybuffer' || k.responseType === 'json'
              ? k.response : k.responseText
          }) : k.status === 404 && (k.abort(), f.q('error', { url: a, data: '404' }))
        }; k.onerror = function (b) { k.abort(); f.q('error', { url: a, data: b }) }; k.open(b || 'GET', a); b === 'POST' && k.setRequestHeader('Content-Type', d || 'application/x-www-form-urlencoded'); e && (k.responseType = e); k.send(c || void 0)
      }
    },
    abort: function () { this.G$.abort() }
  }); for (var $ = {
      v: '1.4.15',
      Pixel: g.H,
      LngLat: g.U,
      Size: g.xd,
      Bounds: g.le,
      ArrayBounds: g.qp,
      PixelBounds: g.Yf,
      Panorama: g.Vaa,
      PanoramaMarker: g.Waa,
      Map: B.Ob,
      View2D: B.PF,
      GroundImage: B.o.PL,
      Marker: B.C.ub,
      ImageMarker: B.C.EAa,
      Text: B.C.IW,
      Icon: B.C.fi,
      MarkerShape: B.C.Laa,
      Polyline: B.C.$b,
      BezierCurve: B.C.vA,
      Polygon: B.C.Ec,
      Circle: B.C.kh,
      CircleMarker: B.C.TV,
      Ellipse: B.C.Et,
      Rectangle: B.C.Kt,
      ContextMenu: B.C.Sn,
      InfoWindow: B.C.Ze,
      Buildings: B.o.S$,
      TileLayer: B.o.qb,
      ImageLayer: B.o.EA,
      CanvasLayer: B.o.U$,
      VideoLayer: B.o.Bba,
      VectorLayer: B.o.ed,
      MassMarks: B.o.Naa,
      CompositeLayer: B.o.Y$,
      LabelsLayer: B.o.or,
      LabelMarker: B.C.Eaa,
      LayerGroup: B.o.UL,
      OverlayGroup: B.C.Un,
      GeoJSON: B.C.dW,
      CANVAS: 'canvas',
      DOM: 'dom',
      convertFrom: g.uI,
      Http: { JSONP: g.ib.yb },
      event: { CLASS_NAME: 'AMap.event' }
    }, yc = 'addDomListener addDomListenerOnce addListener addListenerOnce clearInstanceListeners clearListeners removeListener trigger'.split(' '), Ic = 0; Ic < yc.length; Ic += 1) {
    $.event[yc[Ic]] = (function () {
      var a = g.event[yc[Ic]]; var b = yc[Ic]; return function () {
        g.c.ya($.event); g.c.add($.event, b)
        return a.apply(g.event, Array.prototype.slice.call(arguments))
      }
    }())
  }$.GeometryUtil = { CLASS_NAME: 'AMap.GeometryUtil' }
  for (var Jc = 'distance ringArea isClockwise makesureClockwise makesureAntiClockwise distanceOfLine ringRingClip doesSegmentsIntersect doesSegmentLineIntersect doesSegmentRingIntersect doesSegmentPolygonIntersect doesLineLineIntersect doesLineRingIntersect doesPolygonPolygonIntersect doesRingRingIntersect isPointInRing isRingInRing isPointInPolygon isPointOnSegment isPointOnLine isPointOnRing isPointOnPolygon closestOnSegment closestOnLine distanceToSegment distanceToLine distanceToPolygon'.split(' '), Ic =
0; Ic < Jc.length; Ic += 1)$.GeometryUtil[Jc[Ic]] = (function () { var a = g.nr[Jc[Ic]]; var b = Jc[Ic]; return function () { g.c.ya($.GeometryUtil); g.c.add($.GeometryUtil, b); return a.apply(g.nr, Array.prototype.slice.call(arguments)) } }()); $.GeometryUtil.triangulateShape = function (a, b) { g.c.ya($.GeometryUtil); g.c.add($.GeometryUtil, 'triangulateShape'); a = g.Xn.normalize(a); b = g.Xn.normalize(b); return g.Xn.Yh(a, b) }; $.PlaneGeometryUtil = { CLASS_NAME: 'AMap.PlaneGeometryUtil' }
  for (Ic = 0; Ic < Jc.length; Ic += 1)$.PlaneGeometryUtil[Jc[Ic]] = (function () { var a = g.gi[Jc[Ic]]; var b = Jc[Ic]; return function () { g.c.ya($.PlaneGeometryUtil); g.c.add($.PlaneGeometryUtil, b); return a.apply(g.gi, Array.prototype.slice.call(arguments)) } }()); $.PlaneGeometryUtil.triangulateShape = function (a, b) { g.c.ya($.PlaneGeometryUtil); g.c.add($.PlaneGeometryUtil, 'triangulateShape'); a = g.Xn.normalize(a); b = g.Xn.normalize(b); return g.Xn.Yh(a, b) }; $.plugin = $.service = B.Ob.prototype.plugin; $.TileLayer.Satellite = B.o.qb.BW
  $.TileLayer.RoadNet = B.o.qb.yW; $.TileLayer.google = B.o.qb.OL; $.TileLayer.Flexible = B.o.qb.BA; $.TileLayer.WMS = B.o.qb.Cba; $.TileLayer.WMTS = B.o.qb.Dba; $.TileLayer.Traffic = B.o.qb.KW; $.Panorama.Events = B.event; $.TileLayer.PanoramaLayer = B.o.qb.MAa; $.UA = { ie: g.l.Es, ielt9: g.l.Ie, ielt11: g.l.Vra, mobile: g.l.ba, android: g.l.Xl, ios: g.l.FD }
  $.Browser = {
    ua: navigator.userAgent,
    mobile: g.l.ba,
    plat: g.l.Fz,
    mac: g.l.oz,
    windows: g.l.Xza,
    ios: g.l.FD,
    iPad: g.l.Ora,
    iPhone: g.l.Pra,
    android: g.l.Xl,
    android23: g.l.Zla,
    chrome: g.l.chrome,
    firefox: g.l.gR,
    safari: g.l.AE,
    wechat: g.l.y$,
    uc: g.l.lza,
    qq: g.l.$va,
    ie: g.l.Es,
    ie6: g.l.Bi,
    ie7: g.l.sv,
    ie8: g.l.Ie && !g.l.sv && !g.l.Bi,
    ie9: g.l.c5,
    ie10: g.l.b5,
    ie11: g.l.Sra,
    edge: g.l.mpa,
    ielt9: g.l.Ie,
    baidu: g.l.ZH,
    isLocalStorage: g.l.Gv,
    isGeolocation: !!navigator.geolocation,
    mobileWebkit: g.l.dua,
    mobileWebkit3d: g.l.z6,
    mobileOpera: !!g.l.cua,
    retina: g.l.Lc,
    touch: !!g.l.Wf,
    msPointer: !!g.l.B6,
    pointer: !!g.l.GT,
    webkit: g.l.w$,
    ie3d: g.l.Tra,
    webkit3d: g.l.x$,
    gecko3d: g.l.cqa,
    opera3d: g.l.Wua,
    any3d: g.l.VH,
    isCanvas: g.l.il,
    isSvg: g.l.To,
    isVML: g.l.Es,
    isWorker: !!window.Worker,
    isWebsocket: !!window.WebSocket,
    isWebGL: function () { for (var a = document.createElement('canvas'), b = ['webgl', 'experimental-webgl', 'moz-webgl'], c = null, d = 0; d < b.length; d += 1) { try { c = a.getContext(b[d]) } catch (e) {} if (c) if (c.drawingBufferWidth !== a.width || c.drawingBufferHeight !== a.height) break; else return !0 } return !1 }
  }
  $.Util = { CLASS_NAME: 'AMap.Util' }; var Kc = { colorNameToHex: g.a.pI, rgbHex2Rgba: g.a.v8, argbHex2Rgba: g.a.Rr, isEmpty: g.a.yh, deleteItemFromArray: g.a.zy, deleteItemFromArrayByIndex: g.a.Do, indexOf: g.a.indexOf, format: g.a.Ac, isArray: g.a.isArray, isDOM: g.a.IJ, includes: g.a.ka, requestIdleCallback: g.a.pU, cancelIdleCallback: g.a.dQ, requestAnimFrame: g.a.Xc, cancelAnimFrame: g.a.ui, color2RgbaArray: g.a.Zl, color2Rgba: g.a.Ina }
  for (Ic in Kc)Kc.hasOwnProperty(Ic) && typeof Kc[Ic] === 'function' && ($.Util[Ic] = (function () { var a = Ic; return function () { g.c.ya($.Util); g.c.add($.Util, a); return Kc[a].apply(g.a, Array.prototype.slice.call(arguments)) } }())); $.DomUtil = { CLASS_NAME: 'AMap.DomUtil' }; var Lc = { getViewport: g.j.qJ, getViewportOffset: g.j.VR, create: g.j.create, setClass: g.j.oxa, hasClass: g.j.An, addClass: g.j.Va, removeClass: g.j.eb, setOpacity: g.j.Vq, rotate: g.j.rotate, setCss: g.j.Xa, empty: g.j.Kz, remove: g.j.remove, TRANSFORM: g.j.tg, TRANSITION: g.j.LF }
  for (Ic in Lc)Lc.hasOwnProperty(Ic) && typeof Lc[Ic] === 'function' && ($.DomUtil[Ic] = (function () { var a = Ic; return function () { g.c.ya($.DomUtil); g.c.add($.DomUtil, a); return Lc[a].apply(g.j, Array.prototype.slice.call(arguments)) } }())); var Mc = g.r; $.User = { key: Mc.key }; window.AMap = $; window.AMap.BuryPoint = g.BuryPoint; window.AMap.Class = g.ca; g.Lj = g.ca.extend({
    A: function (a, b, c, d) { this.start = a; this.end = b; this.transition = c; this.precision = d || 0; this.Zv = !1; this.update = g.a.bind(this.update, this); return this },
    Mn: function (a) { this.lh = this.startTime = +new Date(); this.frames = 0; this.Zv = !0; this.wo = g.a.Xc(this.update); this.Mia = g.a.bind(this.Gq, a || this) },
    update: function () {
      this.frames += 1; var a = +new Date(); var b = a - this.startTime; var b = this.transition ? this.transition(this.start, this.end, b, this.frames, a - this.lh) : null; typeof b === 'number' && Math.abs(b - this.end) < this.precision
        ? (this.stop(), b = this.end) : this.wo = g.a.Xc(this.update); this.lh = a; this.Mia(b)
    },
    stop: function (a) { g.a.ui(this.wo); a && this.update(); this.Zv = !1 }
  }); g.Lj.Easing = { Linear: { None: function (a) { return a } }, Bounce: { In: function (a) { return 1 - (a < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375 : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375) }, Out: function (a) { return g.Lj.Easing.Bounce.In(1 - a) } }, Cubic: { In: function (a) { return 1 - a * a * a }, Out: function (a) { a = 1 - a; return 1 - a * a * a } } }; g.Ob = g.ca.extend({
    ka: [g.va, g.$e, g.VJ],
    A: function (a, b) {
      this.qc = g.a.bind(this.qc, this); this.B = b; this.nj = b.nj; this.Dm = ''; this.Tg = this.xg = this.ej = !1; this.Vm = {}; this.K = a; this.Qga(); this.psa(); this.X('zooms', b, !0); this.X('size', b, !0); this.X('limitBounds', b); this.X('view', b); this.X('nolimg', b, !0); this.X('mapNumber', b, !0); this.X('lang', b, !0); this.X('features', b, !0); this.X('styleID', b, !0); this.X('forceBig', b, !0); this.X('mode', b, !0); this.X('showBuildingBlock', b, !0); this.X('mapStyle', b); var c = this.get('mapStyle')
      this.Ee = g.r.Ee[c] || g.r.Ee.default; this.OH = '#a3ccff'; this.eC = b.get('skyColor') || '#cce0ff'; g.r.UQ && this.X('editEnable', b); g.r.UQ && this.Bd ? this.X('style', b, !0) : this.X('styleUrl', b); this.X('hightlight', b, !0); this.X('labelzIndex', b, !0); if (g.l.fL) {
        c = new B.o.qb({ innerLayer: !0, zIndex: b.get('labelzIndex'), visible: !1 }); this.Ic = new g.o.Qj(c, this, ['point', 'road']); this.Ic.type = '\u77e2\u91cf\u6807\u6ce8'; var d = this.B.get('defaultLayer'); d && c.X('rejectMapMask', d, !0); b.labelsLayer = this.Ic.S; this.Ic.S.g('complete',
          this.Ar, this, !0); this.Ic.S.g('renderComplete', this.Ar, this); this.Ic.AB = this.Ic.dh = !0
      } this.X('isHotspot', b, !0); this.X('layers', b); this.X('overlays', b); this.X('infos', b, !0); this.X('contextmenus', b, !0); this.X('controls', b); this.X('bounds', b); this.X('draw', b); this.bf('zoomAndCenter destroy defaultCursor jogEnable animateEnable baseRender overlayRender vectorMapForeign'.split(' '), b); this.bf('rotateEnable pitchEnable dragEnable keyboardEnable doubleClickZoom scrollWheel zoomEnable touchZoom'.split(' '),
        b, !0); this.get('jogEnable') ? this.vv = !0 : this.vv = !1; this.fga(); this.mga(); this.HG && this.HG(); this.X('resizeEnable', b); this.B.map = this; c = this.get('size'); c = c.width * c.height / 65536; g.l.Lc && c > 3 && (this.$H = !0); this.V = { Ad: !1 }; this.PK()
    },
    editEnableChanged: function () { this.Bd = this.get('editEnable') },
    labelzIndexChanged: function () { this.Ic && this.Ic.set('zIndex', this.get('labelzIndex')) },
    styleChanged: function () { this.Gi = !0 },
    mapStyleChanged: function () {
      if (this.B.Di) {
        this.Dm && (this.set('style', ''), this.Mu = this.Dm = '')
        var a = this.get('mapStyle'); this.Gi = !0; this.Ee = g.r.Ee[a] || g.r.Ee.default; this.tE()
      }
    },
    styleUrlChanged: function () {
      if (this.B.Di) {
        var a = this.get('styleUrl') || ''; if (a !== this.Dm) {
          var b = a.indexOf('?isPublic=true') !== -1; var a = a.substr(0, 46); var c = a.split('amap://styles/')[1]; c === 'normal' ? (this.Dm = '', this.set('nolimg', !!this.B.get('nolimg_param')), this.set('style', ''), this.Mu = '') : (this.iA = !0, this.set('nolimg', !0), b = new g.ib.yb(c.length < 32 ? g.r.pc + '://webapi.amap.com/style?name=' + c + '&key=' + g.r.key : g.r.pc + '://webapi.amap.com/v4/map/styles?styleid=' +
c + '&s=rsv3&key=' + g.r.key + (b ? '&ispublic=1' : ''), { callback: 'callback' }), b.g('complete', function (a) { a.data && a.data.content ? this.set('style', JSON.parse(a.data.content)) : this.set('style', ''); this.iA = !1 }, this), b.g('error', function () { this.iA = !1 }, this), this.Dm = a, this.tE())
        }
      }
    },
    L8: function (a) { this.K.style.background = a },
    eqa: function (a) { var b = this.get('center'); if (a.contains(b)) return null; a = g.nr.closestOnLine(b, a.cV().path); return new g.U(a[0], a[1]) },
    gna: function () {
      var a = this.get('limitBounds'); var b = this.get('bounds')
      b.xc && b.xc.R > b.oc.R && (b.oc.R += 360); if (!a.contains(b)) { if (b instanceof g.qp) return this.eqa(a, b); var c = this.get('center').cb(); a.yj() < b.yj() ? c.R = a.zi().R : (a.xc.R > b.xc.R && (c.R += a.xc.R - b.xc.R), a.oc.R < b.oc.R && (c.R += a.oc.R - b.oc.R)); a.vj() < b.vj() ? c.Q = a.zi().Q : (a.xc.Q > b.xc.Q && (c.Q += a.xc.Q - b.xc.Q), a.oc.Q < b.oc.Q && (c.Q += a.oc.Q - b.oc.Q)); return c }
    },
    $O: function () {
      var a = this.NU; this.B.refreshSize(); var b = this.get('size'); b && a && !b.gb(a) && (this.NU = b, this.it = !0, this.set('display'), this.s8(b), this.get('resizeEnable') &&
this.pa('resize', { wua: a, L6: b }))
    },
    e0: function () { var a = this; a.$O(); a.UO = setTimeout(function () { a.e0() }, 200) },
    jda: function () { this.UO && (clearTimeout(this.UO), this.UO = null) },
    Qga: function () { this.B.D = !0; this.NU = this.B.getSize(); this.B.D = !1; if (g.l.Ie || g.l.y$ && g.l.FD || g.l.Sta) this.e0(); else { var a = this; g.F.Tla(this.K, function (b) { a.$O(b) }) } },
    psa: function () {
      var a = this.K; g.j.Va(a, 'amap-container'); var b = {}; b.dd = g.j.create('div', a, 'amap-maps'); this.Ml = g.j.create('div', a); this.Ml.style.display = 'none'; b.Xr = g.j.create('div',
        b.dd, 'amap-drags'); b.o = g.j.create('div', b.Xr, 'amap-layers'); b.C = g.j.create('div', b.Xr, 'amap-overlays'); b.controls = g.j.create('div', a, 'amap-controls'); b.aT = g.j.create('a', a, 'amap-logo'); g.j.create('img', b.aT).src = g.l.Lc ? this.B.w.logoUrlRetina : this.B.w.logoUrl; b.sn = g.j.create('div', a, 'amap-copyright'); b.sn.style.display = 'none'; g.j.qJ(this.K).width > 350 && (b.sn.innerHTML = this.B.w.copyright, b.sn.o6 = g.j.create('span', b.sn, 'amap-mcode'), this.tE()); this.Wa = b
    },
    tE: function () {
      var a = this.get('layers'); if (a) {
        for (var b =
-1, c = '', d = 0; d < a.length; d += 1) { var e = a[d].get('mapNumber'); var f = a[d].get('zIndex', null, !0); e && f > b && a[d].get('visible') && (c = e, b = f) } this.set('mapNumber', c); this.B.D = !0; a = this.B.getMapStyle(); this.B.D = !1; c === 'GS(2019)6379' && a && a !== 'normal' && a !== 'amap://styles/normal' && (c = '', this.Wa.sn.style.visibility = 'hidden'); c && this.Wa.sn.o6 && (this.Wa.sn.o6.innerHTML = '- ' + c + '\u53f7', this.Wa.sn.style.visibility = 'visible'); return c
      }
    },
    uY: function () {
      var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : !1; g.Oj && (a
        ? g.Oj.flush() : this.z3 || (this.z3 = g.a.Xc(function () { g.Oj.flush(); this.z3 = null }, this)))
    },
    cU: function (a) { var b = this; var c = this.B.get('rasterLayer'); c && (this.B.set('rasterLayer', void 0), this.B.X7 = !0, this.B.tk = this.B.La, this.uj && (this.uj.xD = !1), c.o && (c.o.YD = !0), a || (this.dU = g.a.pU(function () { b.dU = null; b.B && b.B.uk(c) }))); a && this.dU && g.a.dQ(this.dU) },
    Ar: function () {
      function a () {
        for (var a = d.get('layers'), b = d.get('zoom'), c = 0; c < a.length; c += 1) {
          var e = a[c].get('zooms'); if (!(a[c].tk || a[c].l5 || !e || b > e[1] || b < e[0] || !a[c].get('visible') ||
a[c].o && a[c].o.ga && a[c].o.ga.length === 0 || a[c].o && a[c].o.YD || a[c].o && a[c].o.La)) return !1
        }a = d.B.get('features'); return (a === 'all' || g.a.ka(a, 'point')) && d.Ic && d.Ic.get('visible') && d.Ic.ga.length > 0 && !d.Ic.La && !d.Ic.no ? !1 : !0
      } function b () { var a = { id: d.B.id }; g.Ce.lf.end(g.extend(a, { key: 'rds' })); g.Ce.lf.send(g.extend(a, { params: { rs: d.get('baseRender'), viewmode: d.B.view.type, fd: d.RJ === 0 ? 1 : 0, raster: d.B.tk ? 1 : 0 } })); d.B && d.B.sm && d.B.sm.PB && d.B.sm.PB(); d.B.Q7 = 1; d.uY(); d.set('display'); d.MD = !0 } function c () {
        g.Ce.lf.end({
          id: d.B.id,
          key: 'rd'
        }); g.a.Xc(function () { this.q('complete') }, d); d.B.La = !0; d.set('display')
      } if (!this.zI) if (this.MD) this.Rt === 1 && this.get('zoom') === 13 && (g.a.lD.stop(this.uG), g.Ce.lf.send({ id: this.B.id, params: { fps: this.uG.lD, type: 'fps', rs: this.get('baseRender') } }), this.Rt = 2), this.uY(); else { var d = this; var e = this.B.get('rasterLayer'); var f = a(); e ? (e.o && e.o.La && (this.B.La || c()), f && (this.B.La || c(), this.cU(), b())) : f && (this.B.La || c(), b(), this.B.X7 = !0) }
    },
    layersChanged: function () {
      this.la = this.la || []; for (var a = this.get('layers'),
        b = this.la.length - 1; b >= 0; b -= 1) this.la[b] === this.td || this.la[b] === this.Zs || this.la[b].AB || this.la[b].S.AB || g.a.indexOf(a, this.la[b].S) !== -1 || (this.la[b].kg(), this.la[b].Ij && this.la[b].Ij.kg(), this.la[b].S.G('complete', this.Ar, this), this.la[b].S.G('renderComplete', this.Ar, this), this.la = g.a.Do(this.la, b)); for (var c = !1, d = !0, e = this.get('labelzIndex'), b = 0; b < a.length; b += 1) {
        if (!a[b].l5) {
          if (a[b].ti)g.a.indexOf(this.la, a[b].o) === -1 && this.la.push(a[b].o); else {
            var f = this.dg(a[b]); f && (this.la.push(f), a[b].ti = !0,
            a[b].o = f); a[b].g('complete', this.Ar, this, !0); a[b].g('renderComplete', this.Ar, this)
          }
        }
      } for (b = 0; b < this.la.length; b += 1)f = this.la[b].S, f.Dq && f.get('visible') && (c = !0, !1 === f.get('detectRetina') && (d = !1), e = f.get('textIndex') || e); this.Ic && (c || this.B.view.type !== '3D' ? this.Ic.no = !1 : (c = g.a.find(a, function (a) { if (B.o.Gt && a instanceof B.o.Gt && a.get('visible')) return !0 }), this.Ic.no = c = !!c)); a = g.a.indexOf(this.la, this.Ic); c && this.B.get('showLabel') ? (a === -1 && this.la.push(this.Ic), this.Ic.ja = d && g.l.ja, this.Ic.DC(this.get('mapStyle') ||
'normal'), this.Ic.set('zIndex', e), this.Ic.set('visible', !0), this.B.wD = !0, this.B.get('isHotspot') ? this.Ic.Pua() : this.Ic.mQ()) : (this.Ic && (this.Ic.set('visible', !1), this.B.wD = !1, this.Ic.mQ()), this.B.wD = !1); this.B.isHotspotChanged(); this.set('display', 0); this.tE()
    },
    isHotspotChanged: function () { this.layersChanged() },
    controlsChanged: function () {
      var a = this.get('controls'); var b; var c; if (a.add && a.add.length > 0) for (;a.add.length > 0;)b = a.add.shift(), (c = b.wu || b.addTo) && c.call(b, this.B, this.Wa.controls); else if (a.remove &&
a.remove.length) for (;a.remove.length > 0;)b = a.remove.shift(), (c = b.Uv || b.removeFrom) && c.call(b, this.B, this.Wa.controls)
    },
    r1: function () {
      if (!this.zI) {
        var a = this; this.w1 = !1; a.td || (a.td = new g.o.ed(new B.o.ed(), a), a.td.Bf = 36, a.td.mg = 36, a.td.set('zIndex', 120), a.la.push(a.td), a.td.ZC = !0); for (var b = a.get('overlays'), c = [], d = 0; d < a.Zc.length; d += 1) {
          g.a.indexOf(b, a.Zc[d].Qb) === -1 && (a.Zc[d].Qb instanceof B.C.Ze || a.Zc[d].Qb instanceof B.C.Sn ? a.Zc[d].kg() : (a.td && a.Zc[d] instanceof g.C.ub ? (a.td.fh = g.a.zy(a.td.fh, a.Zc[d].L),
          a.td.e8([a.Zc[d].L])) : a.Zs && a.Zs.e8([a.Zc[d].L]), a.Zc[d].L.fa ? (g.j.remove(a.Zc[d].L.fa), a.Zc[d].L.fa = null) : a.Zc[d].L.Za && (g.j.remove(a.Zc[d].L.Za.hg), g.j.remove(a.Zc[d].L.Za.cc), a.Zc[d].L.Za = null), a.Zc[d].Fn && a.Zc[d].Fn.stop(), a.Zc[d].Ch && a.Zc[d].Ch.stop(), a.Zc[d].Qb.ti = !1, a.Zc[d].Qb.zl(), a.Zc[d].Qb.C = null, a.Zc[d].Qb = null, a.Zc[d].L.Loa(), a.Zc[d].L = null, a.Zc[d].zl(), a.Zc[d].De = null, a.Zc[d].wi(), a.Zc[d].map = null), c.push(a.Zc[d]))
        } for (d = 0; d < c.length; d += 1)a.Zc = g.a.Do(a.Zc, g.a.indexOf(a.Zc, c[d])); var e =
[]; var f = []; g.a.jxa(function (b) { if (!b.ti && b.eh) { var c = b.C || a.Nma(b); c && (a.Zc.push(c), c instanceof g.C.Ze || c instanceof g.C.Sn ? c.Ts(a) : c instanceof g.C.ub ? e.push(c.L) : f.push(c.L), b.ti = !0) } }, b); e.length && a.td.ay(e); f.length && (a.Zs || (a.Zs = new g.o.ed(new B.o.ed(), a), a.Zs.set('zIndex', 110), a.la.push(a.Zs)), a.Zs.ay(f)); a.set('display', 0)
      }
    },
    overlaysChanged: function () { this.Zc = this.Zc || []; this.get('overlays') && this.get('overlays').length === 0 ? this.r1() : this.w1 || (g.a.Xc(this.r1, this), this.w1 = !0) },
    contextmenusChanged: function () {
      var a =
this.get('contextmenu'); if (a) { var b = this; g.sb.load('overlay', function () { b.ry = new g.C.Sn(a, b); b.set('display', 0) }) }
    },
    infosChanged: function () { var a = this.get('infos'); if (a) { this.tm = this.tm || {}; var b; var c = this; g.sb.load('overlay', function () { for (var d in a)a.hasOwnProperty(d) && (b = a[d], c.tm[d] = c.tm[d] || new g.C.Ze(b, c)) }) } },
    Nma: function (a) {
      var b = null; if (a instanceof B.C.ub)b = new g.C.ub(a, this); else if (a instanceof B.C.Sn)b = new g.C.Sn(a, this); else if (a instanceof B.C.Ze)b = new g.C.Ze(a, this); else {
        var c = ['overlay']
        this.get('overlayRender') === 'd' ? (c.push('dvector'), g.l.To ? c.push('svg') : c.push('vml')) : c.push('cvector'); if (!this.Hza && !g.sb.JD(c)) { var d = this; g.sb.Jg(c, function () { this.Hza = !0; d.overlaysChanged() }); return }a instanceof B.C.Ec ? b = new g.C.Ec(a, this) : a instanceof B.C.vA ? b = new g.C.vA(a, this) : a instanceof B.C.$b ? b = new g.C.$b(a, this) : a instanceof B.C.kh ? b = new g.C.kh(a, this) : a instanceof B.C.Et ? b = new g.C.Ec(a, this) : a instanceof B.C.Kt && (b = new g.C.Ec(a, this))
      } return b
    },
    I3: function () {
      var a = this.Ee; this.Mu &&
(!this.Te || !this.Te.Ep || this.B && this.B.js) && (a = typeof this.Mu === 'function' ? this.Mu(this.uj.P.zoom) : this.Mu); return a
    },
    FCa: function () { function a () {} var b = new g.o.ed(); var c = []; var d = new g.U(116.405467, 39.907761); new g.style.Qg.fi(); for (var e = 0; e < 100; e += 1) for (var f = 0; f < 100; f += 1) { var h = new g.U(d.R + 0.02 * f, d.Q + 0.02 * e); var h = new g.di({ name: 'point' + (100 * e + f), map: this, W: new g.Aa.Pg(this.zb(h)) }); c[100 * e + f] = h; h.g('hover', a, h) }b.ay(c); this.la.push(b) },
    nc: function () {},
    DCa: function (a) {
      var b = new g.o.ed(); var c = []; var c = (new g.naa({ map: this })).RT(a)
      b.ay(c); this.la.push(b); this.set('display', 0)
    },
    dg: function (a) { var b = this; a = a.dg(this); if (!a) return null; if (a.length && typeof a[0] === 'string')g.sb.Jg(a, function () { b.layersChanged() }); else return a; return null },
    yEa: function () { return this.Wa },
    OGa: function () { this.set('display', 0) },
    displayChanged: function (a) { this.j1 || this.PK(a) },
    PK: function (a) { if (a) if (g.a.ui(this.xE), g.l.Xl) { var b = this; setTimeout(function () { b.qc() }, 0) } else this.qc(); else this.Dw || (this.xE = g.a.Xc(this.qc), this.Dw = !0) },
    qc: function () {
      this.xE =
null; if (!this.zI) {
        this.q('render'); this.Dw = !1; var a = {}; if (this.la && (a.size = this.B.get('size'), a.size.width && a.size.height)) {
          for (var b = this.B.view.type, c = [], d = 0, e = this.la.length; d < e; d += 1) this.la[d].If && this.la[d].If !== b ? this.la[d].La = !0 : (c.push(this.la[d]), this.la[d].Ij && c.push(this.la[d].Ij)); c.sort(function (a, b) { var c = a.get('zIndex'); var d = b.get('zIndex'); return c > d ? 1 : c === d ? a.ex > b.ex ? 1 : -1 : -1 }); a.la = c; c = g.l.ja ? Math.min(window.devicePixelRatio || 1, 2) : 1; a.O1 = a.size.width * a.size.height * c * c > 15E5; a.xD = !!this.B.get('rasterLayer')
          a.ba = g.l.ba; a.lang = this.get('lang'); a.P = this.B.tD(); a.If = b; this.B.D = !0; a.T = this.B.getResolution([0, 0]); a.Aq = this.B.get('mapStyle'); a.Gi = this.Gi; this.B.D = !1; a.Ad = this.Tg; a.Roa = this.Vm; a.Ae = this.ej; a.Qf = this.xg; a.TE = this.xg && g.l.ba; a.nL = g.l.ba && this.ej; a.ot = g.l.ba && this.Tg; this.ot = a.ot; b = this.get('targetLevel') || a.P.zoom; a.pp = a.P.zoom > b; a.Jf = a.P.zoom > b ? 'zoomOut' : a.P.zoom < b ? 'zoomIn' : 'stable'; a.lua = !0; a.$H = this.$H; for (var b = !1, f, c = !1, d = 0; d < this.la.length; d += 1) {
            this.la[d].Ei && this.la[d].S.get('visible') &&
a.P.zoom <= this.la[d].S.get('zooms')[1] && (a.hU = !0), this.la[d].he().Lc && (b = !0)
          } for (d = 0; d < this.la.length; d += 1) this.la[d].S.RP && a.hU && (!this.ej && this.la[d].S.get('visible') && (f = this.la[d].S.RP(), f.fFa = 1, f.zoom = a.P.zoom), c = !0); this.nb = []; c && f && this.nb !== f && (this.nb = f); a.nb = this.nb; a.Lc = b; a.scale = Math.pow(2, a.P.zoom - a.P.je); this.uj = a; this.Pc = this.B.get('mask'); a.Pc = this.Pc; a.YJ = this.YJ; if (f = this.Oy())f.qc(a), this.Gi = this.mR = this.YJ = !1
        }
      }
    },
    Nq: function (a) {
      if (!this.zI) {
        var b = {}; if (this.la && (b.size = this.B.get('size'),
        b.size.width && b.size.height)) {
          for (var c = this.B.view.type, d = [], e = 0, f = this.la.length; e < f; e += 1) this.la[e].If && this.la[e].If !== c || !(this.la[e] instanceof g.o.Pm) || a.indexOf(this.la[e].S) < 0 || (d.push(this.la[e]), this.la[e].Ij && d.push(this.la[e].Ij)); d.sort(function (a, b) { var c = a.get('zIndex'); var d = b.get('zIndex'); return c > d ? 1 : c === d ? a.ex > b.ex ? 1 : -1 : -1 }); b.la = d; a = g.l.ja ? Math.min(window.devicePixelRatio || 1, 2) : 1; b.O1 = b.size.width * b.size.height * a * a > 15E5; b.xD = !!this.B.get('rasterLayer'); b.ba = g.l.ba; b.lang = this.get('lang')
          b.P = this.B.tD(); b.If = c; this.B.D = !0; b.T = this.B.getResolution([0, 0]); b.Aq = this.B.get('mapStyle'); b.Gi = this.Gi; this.B.D = !1; b.Ad = this.Tg; b.Roa = this.Vm; b.Ae = this.ej; b.Qf = this.xg; b.TE = this.xg && g.l.ba; b.nL = g.l.ba && this.ej; b.ot = g.l.ba && this.Tg; this.ot = b.ot; c = this.get('targetLevel') || b.P.zoom; b.pp = b.P.zoom > c; b.Jf = b.P.zoom > c ? 'zoomOut' : b.P.zoom < c ? 'zoomIn' : 'stable'; b.lua = !0; b.$H = this.$H; c = !1; for (a = 0; a < this.la.length; a += 1) this.la[a].he().Lc && (c = !0); this.nb = []; b.nb = this.nb; b.Lc = c; b.scale = Math.pow(2, b.P.zoom - b.P.je)
          this.uj = b; this.Pc = this.B.get('mask'); b.Pc = this.Pc; (c = this.Oy()) && c.Nq(b)
        }
      }
    },
    Oy: function () { if (!this.J || this.J.type !== this.B.view.type || this.J.Hta) if (this.J = null, this.B.view.type == '3D') { var a = this; g.sb.load('Map3D', function () { a.J || (a.J = new g.Ea.DF(a), a.set('display')) }) } else this.J = new g.M.canvas.Ob(this); return this.J },
    pqa: function () { var a = []; var b = this.get('controls').Kd; var c; for (c in b)b[c].Qy && b[c].Qy() && a.push(b[c].Qy()); return a },
    destroyChanged: function () {
      delete g.Ce.az[this.B._amap_id]; this.zI = 1; this.cU(!0)
      this.V = {}; this.Ic && (this.Ic.S.G('complete', this.Ar, this), this.Ic.kg(), this.la = g.a.Do(this.la, g.a.indexOf(this.la, this.Ic))); this.Te && this.Te.de && this.Te.de.S && this.Te.de.S.setMap(); this.Kka && clearTimeout(this.Kka); this.oka(); this.qha(); this.DO && this.DO(); this.ula(); this.zl(); this.B = this.B.map = null; this.K = this.K.EM = null; this.wi(); this.Je && (this.Je.stop(), this.Je = null); this.Xf && (this.Xf.stop(), this.Xf = null); this.Fd && (this.Fd.stop(), this.Fd = null); this.J && this.J.Nf && this.J.Nf(); this.J = null
    },
    ula: function () {
      var a =
this.K; this.jda(); g.F.xna(a); g.j.Kz(a); this.Ml = null; g.j.eb(a, 'amap-container'); this.Wa = null
    },
    jogEnableChanged: function () { this.get('jogEnable') ? this.vv = !0 : this.vv = !1 },
    drawChanged: function () {
      var a = this; var b; var c; var d = this.get('draw'); if (d) { this.pq || (this.pq = []); b = 0; for (c = this.pq.length; b < c; b += 1) this.pq[b].rwa(); g.sb.load('interaction', function () { var b = new g.GAa({ type: d, o: a.Zs }, a); a.pq.push(b); a.loaded = !0 }) } else if (this.pq) {
        for (b = 0, c = this.pq.length; b < c; b += 1) {
          this.pq[b].rwa(), this.pq[b].bDa(), this.G('click', this.pq[b].NEa,
            this)
        }
      }
    },
    ke: function (a, b, c) { return this.B.view.ke(a, b, c) },
    Cg: function (a, b, c) { return this.B.view.Cg(a, b, c) },
    y4: function (a, b) {
      var c = this.get('size'); var d = document.createElement('canvas'); a = a || c.width; b = b || c.height; d.width = a; d.height = b; for (var e = -(c.width - a) / 2, c = -(c.height - b) / 2, f = d.getContext('2d'), h = this.Wa.o.childNodes, k = [], l = 0; l < h.length; l += 1)k.push(h[l]); k.sort(function (a, b) { return a.style.zIndex - b.style.zIndex }); for (l = 0; l < k.length; l += 1) {
        var m = k[l]; if (g.j.An(m, 'amap-layer') || g.j.An(m, 'amap-e') || g.j.An(m,
          'amap-labels')) {
          if (m.tagName === 'CANVAS') { var h = c; var n = e; var p = parseFloat(m.style.width) || m.width; var q = parseFloat(m.style.height) || m.height; var r = 1; m.style.transform && (r = parseFloat(m.style.transform.split('(')[1])); f.drawImage(m, n, h, p * r, q * r) } else if (m.tagName === 'DIV') {
            for (var r = m.childNodes, s = parseFloat(m.style.top) || 0 + c, m = parseFloat(m.style.left) || 0 + e, u = 0; u < r.length; u += 1) {
              var v = r[u]; if (v.tagName === 'CANVAS' || v.tagName === 'IMG') {
                h = parseFloat(v.style.top) || 0, n = parseFloat(v.style.left) || 0, p = parseFloat(v.style.width) ||
v.width, q = parseFloat(v.style.height) || v.height, f.drawImage(v, n + m, h + s, p, q)
              }
            }
          }
        }
      } return d.toDataURL()
    }
  }); g.Ob.Db({
    fga: function () { this.FB = !1; g.l.Wf && (this.B.view.type === '3D' ? this.Bca() : this.zca()); g.l.ba || this.wca() },
    oka: function () { g.l.Wf && (this.B.view.type === '3D' ? this.wha() : this.vha()); g.l.ba || this.rha() },
    rotateEnableChanged: function () { this.$wa = this.get('rotateEnable'); g.l.Wf && this.Q1 && this.B.view.type !== '3D' && (this.$wa ? this.Q1() : this.vua()) },
    zoomEnableChanged: function () {
      this.get('zoomEnable') ? (g.l.Wf && this.TP && this.B.view.type !== '3D' && this.TP(), g.l.ba || this.yca()) : (g.l.Wf && this.kT && this.kT(), g.l.ba ||
this.uha())
    },
    mousewheelChanged: function () {},
    ZS: function (a) { a && (this.FB = a.ru) },
    ww: function () { this.FB = !1 },
    Li: function (a, b, c, d) {
      var e; var f = {}; a || (a = window.event); var h = g.F.mm(a, this.Wa.dd); g.l.Wf && (a.type !== 'touchend' ? this.V.Lga = h : h = this.V.Lga); f.wb = h; f.Ra = this.Cg(h); f.Ra && (f.Ra = f.Ra.toFixed(3)); f.jg = this.Nd(f.Ra); c || (c = this.FB ? this.FB ? [this.FB] : null : this.Vea(f.Ra, d)) && c.length > 0 && c[0].Ir && (e = c[0].Ir, f.ru = c[0]); e || a.af === 'info' || (e = this); f.hd = e; f.GBa = a.altKey; f.ctrlKey = a.ctrlKey; f.button = void 0 === a.button
        ? 0 : a.button; b || g.F.preventDefault(a); return f
    },
    aO: function (a) { return a && a !== this && a !== document },
    VO: function () { var a = this.V; a.ig && (a.bk.wb.x === a.ig.x && a.bk.wb.y === a.ig.y ? a.xg = !1 : (a.xg = !0, a.Bp || (a.hq.q('dragstart', a.gq), a.Bp = !0), a.hq.q('dragging', a.bk), a.ig = a.bk.wb)) },
    Qxa: function (a) { for (var b = [], c = 0; c < a.length; c += 1)a[c] && (b = b.concat(a[c])); return b },
    Ov: function (a, b, c) { return a && b && (a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y) < (c || 10) },
    Vea: function (a, b) {
      var c = this.Oy(); if (!c) return null; var d; var e = this; this.la.sort(function (a,
        b) { return a.get('zIndex') > b.get('zIndex') ? -1 : 1 }); c.fv(a, this.la, function (a) { d = a; d = e.Qxa(d) }, function () { d = [] }, b); return d
    }
  }); g.Ob.Db({
    mga: function () { this.Vm = {}; this.g('moveend', this.Z6, this); g.l.Xl && (g.l.uL || g.l.ZH) && this.g('zoomend', this.HV, this); this.g('movestart', this.a7, this); this.g('zoomstart', this.i7, this); this.g('zoomend', this.h7, this); this.JM(); this.Rt = 0; this.uG = {}; typeof window.requestAnimationFrame === 'undefined' && (this.Rt = 2) },
    i7: function () { this.Rt !== 2 && this.get('zoom') === 12 && (this.Rt = 1, g.a.lD.start(this.uG)); this.ej = !0 },
    h7: function () {
      this.Rt === 1 && this.get('zoom') !== 13 && (this.Rt = 0, g.a.lD.cancel(this.uG)); this.ej =
!1; this.set('display')
    },
    N0: function (a, b) { this.Vm.left = a > 0; this.Vm.right = a < 0; this.Vm.cF = b > 0; this.Vm.IQ = b < 0 },
    mu: function () { this.Vm.left = !1; this.Vm.right = !1; this.Vm.cF = !1; this.Vm.IQ = !1 },
    qha: function () { this.G('moveend', this.Z6, this); g.l.Xl && (g.l.uL || g.l.ZH) && this.G('zoomend', this.HV, this); this.G('movestart', this.a7, this); this.G('zoomstart', this.i7, this); this.G('zoomend', this.h7, this); this.sha() },
    Z6: function (a) {
      this.xg = !1; this.mu(); this.s8(); !a.G5 && this.B.get('limitBounds', null, !0) ? (a = this.gna()) && !a.gb(this.get('center'))
        ? this.ZK(this.get('zoom'), a, !1, !0) : this.pa('moveend') : this.pa('moveend'); this.set('display')
    },
    a7: function () { this.xg = !0; this.mu() },
    dragEnableChanged: function () { (this.$C = this.get('dragEnable')) ? this.IM() : this.CO() },
    pa: function (a, b) { if (this.B.te(a)) { var c; b && (c = b.L6 ? { type: a, newsize: b.L6, oldsize: b.wua } : { type: a, pixel: b.wb, target: this.B, lnglat: b.jg }); this.B.q(a, c) } },
    JM: function () { this.g('click', this.q_); this.g('dblclick', this.u_); g.l.Wf && this.sX(); g.l.ba || this.xca() },
    sha: function () {
      this.G('click', this.q_)
      this.G('dblclick', this.u_); g.l.Wf && this.f_(); g.l.ba || this.tha()
    },
    fH: function (a, b) { var c = this.get('targetLevel') || this.get('zoom'); var c = b > 0 ? Math.floor(c) + 1 : Math.ceil(c) - 1; var c = Math.min(Math.max(c, this.get('zooms')[0]), this.get('zooms')[1]); c === this.get('zoom') || this.Xf && this.Xf.Zv && c === this.Xf.end || this.tA(c, !1, a) },
    q_: function (a) { this.pa('click', a) },
    u_: function (a) { this.get('doubleClickZoom') && this.get('zoomEnable') && this.fH(a.Ra, 1); this.pa('dblclick', a) },
    mCa: function (a) {
      this.fH(a.GHa, a.C9); this.pa('touchend',
        a)
    },
    IM: function () { this.$C && (this.B.view.type === '3D' ? (this.g('dragstart', this.A_), this.g('dragging', this.w_), this.g('dragend', this.y_)) : (this.g('dragstart', this.z_), this.g('dragging', this.v_), this.g('dragend', this.x_))) },
    CO: function () { this.$C || (this.B.view.type === '3D' ? (this.G('dragstart', this.A_), this.G('dragging', this.w_), this.G('dragend', this.y_)) : (this.G('dragstart', this.z_), this.G('dragging', this.v_), this.G('dragend', this.x_))) },
    z_: function (a) {
      this.ZS(a); this.mu(); this.Tg = !0; this.V.Ey = a.wb.x; this.V.aD =
a.wb.y; this.Je && (this.Je.stop(), this.us(!0)); this.pa('dragstart'); this.pa('movestart'); this.q('movestart', a); this.Wxa()
    },
    v_: function () {
      var a = this.V; var b = a.bk.wb.x - a.Ey; var c = a.bk.wb.y - a.aD; if (c || b) {
        this.V.xg = !0; this.N0(b, c); a.Ey = a.bk.wb.x; a.aD = a.bk.wb.y; var a = b; var d = c; var e = this.rotation; e && (e *= Math.PI / 180, a = b * Math.cos(e) + Math.sin(e) * c, d = -Math.sin(e) * b + Math.cos(e) * c); a = this.get('centerCoords').$a((new g.H(a, d)).Md(this.T)); (d = this.q2(a)) && (c = Math.round(this.ke(d).$a(this.ke(a)).y)); this.Yo(this.Wa.Xr, b, c); a.x =
(a.x + g.a.Fa) % g.a.Fa; this.set('centerCoords', a, !0); this.set('center', this.Nd(a), !0); this.vv && (this.lh ? (a = new Date(), this.Yt = a - this.lh > 100 ? new g.H(0, 0) : new g.H(b, c), this.lh = a) : this.lh = new Date()); this.pa('dragging'); this.pa('mapmove')
      } else this.V.xg = !1, this.Yt = null, this.mu()
    },
    Yo: function (a, b, c) {
      if (a && !(Math.abs(b) < 1 && Math.abs(c) < 1)) {
        var d = parseFloat(a.style.top) || 0; var e = parseFloat(a.style.left) || 0; var f = ''; this.rotation && (f = g.j.pt[g.j.tg] + ':rotate(' + this.rotation + 'deg);overflow:visible;'); a.style.cssText = 'position:absolute;top:' +
(d + c) + 'px;left:' + (e + b) + 'px;' + f
      }
    },
    q2: function (a) { var b = this.B.view.VW(); var c = this.NU.height * this.T / 2; return a.y < b.hc + c ? (a.y = b.hc + c, a) : a.y > b.vc - c ? (a.y = b.vc - c, a) : null },
    x_: function () {
      this.ww(); new Date() - this.lh > 100 && (this.Yt = null); this.V.ig = null; this.Tg = !1; this.mu(); this.pa('dragend'); if (this.vv && this.Yt) {
        if (this.V.xg) {
          var a = this.Yt; var b = new g.H(0, 0); this.Je = new g.Lj(a, b, function (a, b, e) { return e >= 600 ? b : a.Md(1 - Math.pow(e / 600, 2)).floor() }, 1); this.Je.Gq = function (a) {
            if (Math.abs(a.x) < 2 && Math.abs(a.y) < 2) {
              this.Je.stop(),
              this.q('moveend'), this.us(), this.Yt = this.lh = null
            } else { var b = a.x; var e = a.y; var f = this.rotation; f && (f *= Math.PI / 180, b = a.x * Math.cos(f) + Math.sin(f) * a.y, e = -Math.sin(f) * a.x + Math.cos(f) * a.y); b = this.get('centerCoords').$a((new g.H(b, e)).Md(this.T)); e = this.q2(b); f = a.y; e && (f = Math.round(this.ke(e).$a(this.ke(b)).y)); this.Yo(this.Wa.Xr, a.x, f); b.x = (b.x + g.a.Fa) % g.a.Fa; this.set('centerCoords', b, !0); this.set('center', this.Nd(b), !0); this.pa('mapmove') }
          }; this.Je.Mn(this)
        } else this.q('moveend'), this.us(!0), this.Yt = this.lh = null
      } else this.q('moveend'), this.us(), this.Yt = this.lh = null
    },
    Wxa: function () { if (!this.V.refresh) { var a = this; var b = null; this.V.refresh = setInterval(function () { b !== a.V.ig && (a.set('display', 0), b = a.V.ig) }, g.l.ba ? 400 : 100) } },
    HV: function () {
      if (g.l.Xl && (g.l.uL || g.l.ZH)) {
        for (var a = this.Wa.o.childNodes, b = 0; b < a.length; b += 1) { var c = a[b]; c instanceof HTMLCanvasElement && (c.width = 0); c.className === 'amap-e' && (c.style.height = '0') } for (b = 0; b < this.la.length; b += 1) {
          c = this.la[b], typeof AMap.IndoorMap !== 'undefined' && c instanceof AMap.IndoorMap &&
(c.tu && (c.tu.width = 0), c.Wx && (c.Wx.width = 0))
        }
      }
    },
    us: function (a) { this.V.refresh && (clearInterval(this.V.refresh), this.V.refresh = null); a || (this.HV(), this.set('display', 0)) },
    s8: function (a) { this.set('refresh', a) }
  }); g.Ob.Db({
    setZoomSlow: function (a) { this.ZK(a, null, !this.get('animateEnable')) },
    setPanTo: function (a) { this.ZK(null, a, !this.get('animateEnable')) },
    zoomAndCenterChanged: function (a) { var b = a[0]; b < this.get('zooms')[0] && (b = this.get('zooms')[0]); b > this.get('zooms')[1] && (b = this.get('zooms')[1]); this.ZK(b, a[1], a[2] || !this.get('animateEnable')) },
    zoomChanged: function () { this.T = Math.pow(2, 20 - this.get('zoom')); this.q('closeOverlays'); this.set('display') },
    rotationChanged: function (a) {
      this.rotation = this.get('rotation')
      this.B.q('rotate', { rotation: this.rotation || 0 }); !0 !== a && this.set('display', 0)
    },
    pitchChanged: function () { this.pitch = this.get('pitch'); this.B.q('pitch', { pitch: this.pitch || 0 }); this.set('display', 0) },
    centerCoordsChanged: function () { this.q('closeOverlays'); this.LBa ? this.PK(!0) : this.PK(!1) }
  }); g.MW = g.ca.extend({
    ka: [g.va, g.$e],
    A: function (a, b) { this.type = '2D'; this.hf(b, !0); a && this.xma(a) },
    xma: function (a) { this.map = a; this.bf(['size', 'refresh', 'maxPitch'], a); this.centerChanged(); a.bf(['zoom', 'center', 'centerCoords', 'rotation', 'pitch'], this) },
    VW: function () { this.yM || this.Pna(); return this.yM },
    Pna: function () {
      var a; if (this.get('center') instanceof g.U) { a = new g.le(-180, -85, 180, 85); var b = this.map.zb(a.dk()); a = this.map.zb(a.Mo()); this.yM = { Kc: b.x, hc: b.y, Jc: a.x, vc: a.y } } else {
        a = this.map.get('limitBounds',
          null, !0), this.yM = { Kc: a[0], hc: a[1], Jc: a[2], vc: a[3] }
      }
    },
    tD: function () { var a = this.map; var b = this.get('zoom'); return { zoom: b, sh: this.get('center'), Ha: this.km(), lb: this.get('centerCoords'), rotation: parseInt(this.get('rotation')), Sf: a.get('crs'), T: Math.pow(2, 20 - b), je: Math.round(b), Kg: Math.pow(2, 20 - Math.round(this.get('zoom'))) } },
    centerChanged: function () { this.set('centerCoords', this.map.zb(this.get('center')).toFixed(3), !0) },
    centerCoordsChanged: function () {
      var a = this.map; a.D = !0; var b = this.VW(); var c = this.get('centerCoords')
      var d = a.getSize(); a.D = !1; var e = this.get('zoom', null, !0); var a = this.get('center', null, !0); var d = d.height * Math.pow(2, 20 - e) / 2; a instanceof g.U ? c.x = (c.x + 268435456) % 268435456 : c.x < 0 ? c.x = 0 : c.x > b.Jc && (c.x = b.Jc); c.y < b.hc + d ? c.y = b.hc + d : c.y > b.vc - d && (c.y = b.vc - d); this.set('center', this.map.Nd(c), !0)
    }
  }); g.PF = g.MW.extend({
    km: function () { var a = this.get('size'); var b = this.get('centerCoords'); var c = parseInt(this.get('rotation')) % 360; var d = this.get('zoom', null, !0); var e = Math.pow(2, 20 - d); var c = Math.PI * c / 180; var a = new g.H((Math.abs(a.width * Math.cos(c)) + Math.abs(a.height * Math.sin(c))) / 2, (Math.abs(a.width * Math.sin(c)) + Math.abs(a.height * Math.cos(c))) / 2); var e = new g.Yf(b.$a(a.Md(e)), b.add(a.Md(e))); var c = this.map.get('targetLevel'); if (c > d - 1) { var f = Math.pow(2, 20 - c); e.J$ = new g.Yf(b.$a(a.Md(f)), b.add(a.Md(f))) }e.A9 = c || d; e.Bc = a; return e },
    gqa: function (a) {
      var b =
this.get('size'); var c = this.get('centerCoords'); var d = parseInt(this.get('rotation')) % 360; var d = Math.PI * d / 180; var b = new g.H((Math.abs(b.width * Math.cos(d)) + Math.abs(b.height * Math.sin(d))) / 2, (Math.abs(b.width * Math.sin(d)) + Math.abs(b.height * Math.cos(d))) / 2); a = Math.pow(2, 20 - a); return new g.Yf(c.$a(b.Md(a)), c.add(b.Md(a)))
    },
    Jd: function () { var a = this.km(); var b = a.Vd.x; var c = a.kc.y; var a = new g.H(a.kc.x, a.Vd.y); var b = new g.H(b, c); return new g.le(this.map.Nd(a), this.map.Nd(b)) },
    zoomChanged: function () {},
    ke: function (a, b) {
      this.get('size'); var c =
a.cb(); var d = this.get('centerCoords'); var e = c.$a(d); e.x < -g.a.Fa / 2 ? e.x += g.a.Fa : e.x > g.a.Fa / 2 && (e.x -= g.a.Fa); var c = this.get('size').QE().kd(2); var f = this.get('rotation') * Math.PI / 180; var d = e.x * Math.cos(f) - Math.sin(f) * e.y; var e = Math.sin(f) * e.x + Math.cos(f) * e.y; return c.add((new g.H(d, e)).Md(Math.pow(2, (b || this.get('zoom')) - 20)))
    },
    Cg: function (a, b) {
      var c = this.get('size').QE().kd(2); var d = a.$a(c); var e = this.get('rotation') * Math.PI / 180; var c = d.x * Math.cos(e) + Math.sin(e) * d.y; var d = -Math.sin(e) * d.x + Math.cos(e) * d.y; var c = this.get('centerCoords').add((new g.H(c,
        d)).Md(Math.pow(2, 20 - (b || this.get('zoom'))))); c.x = (c.x + 268435456) % 268435456; return c
    }
  }); g.sM = g.MW.extend({
    A: function (a, b) { this.Ne = new g.Dc(); this.bc = new g.Dc([1, 0, 0, 0, 0, -1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1]); arguments.callee.ma.apply(this, arguments); this.scale = 1; this.type = '3D'; this.nA = null; this.N7 = ''; this.P = ['', 0, 0, '', 0]; this.nA = {} },
    refreshChanged: function () { this.gr() },
    zoomChanged: function (a) { this.gr(); this.P[4] = a },
    centerChanged: function (a) { arguments.callee.ma.apply(this, arguments); this.gr() },
    centerCoordsChanged: function (a) { arguments.callee.ma.apply(this, arguments); this.gr(); this.P[0] = a.toString() },
    rotationChanged: function (a) { this.gr(); this.P[2] = a },
    pitchChanged: function (a) { this.De.pitch = Math.min(this.get('maxPitch'), Math.max(a, 0)); this.gr(); this.P[1] = a },
    gr: function () { if (!this.yza() && (this.wL(), this.Moa(), this.map)) { var a = this; var b = function () { a.map.camera = a.M3(); a.map.q('camerachange', { map: a.map, camera: a.map.camera }) }; a.map.La ? b() : this.map.g('complete', b, this) } },
    M3: function () { return { height: this.qn, fov: this.Vpa, aspect: this.wC, near: this.uz, far: this.QI, position: this.Uma, rotation: this.De.rotation, pitch: this.De.pitch } },
    Moa: function () { this.Mga = g.a.fg() },
    So: function () { var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 300; return g.a.fg() - this.Mga > a },
    wL: function () {
      var a = this.get('centerCoords'); var b = this.get('pitch'); var c = this.get('rotation'); var d = (new g.Dc()).W8(-a.x + g.a.dc.x, -a.y + g.a.dc.y, 0); this.Uma = { x: a.x - g.a.dc.x, y: a.y - g.a.dc.y }; a = (new g.Dc()).Tz(180 - b, 1, 0, 0); this.C7 = (new g.Dc()).set(a); c = (new g.Dc()).Tz(c, 0, 0, 1); this.Rq = (new g.Dc()).set(c); this.Upa = d.Hg(); this.bc = (new g.Dc()).W8(0, 0, -this.qn).multiply(a.multiply(c.multiply(d))).toFixed(8)
      this.bc.ef = this.bc.Hg()
    },
    yza: function (a) {
      a = a || this.get('zoom'); var b = this.get('size'); var c = b.width; var b = b.height; if (!c || !b) return !0; this.wC = c /= b; b = b / 2 * Math.pow(2, 20 - a); a = g.a.Ac((56 - a) * Math.PI / 180, 2); var d = g.a.Ac(b / Math.tan(a / 2), 0); d < 2400 && (d = 2400, a = 2 * Math.atan(b / d)); this.Vpa = a; this.qn = d; this.uz = this.qn / 10; this.QI = 50 * this.qn; this.voa = (this.qn - this.uz) / (this.QI - this.uz); this.Ne.T8(a, c, this.uz, this.QI); this.Ne.ef = this.Ne.Hg(); a = this.Ne; var c = new g.cW(); var b = c.jE; var e = this.Ne.elements; var d = e[0]; var f = e[1]; var h = e[2]; var k = e[3]; var l =
e[4]; var m = e[5]; var n = e[6]; var p = e[7]; var q = e[8]; var r = e[9]; var s = e[10]; var u = e[11]; var v = e[12]; var w = e[13]; var t = e[14]; var e = e[15]; wc(b[0], k - d, p - l, u - q, e - v).normalize(); wc(b[1], k + d, p + l, u + q, e + v).normalize(); wc(b[2], k + f, p + m, u + r, e + w).normalize(); wc(b[3], k - f, p - m, u - r, e - w).normalize(); wc(b[4], k - h, p - n, u - s, e - t).normalize(); wc(b[5], k + h, p + n, u + s, e + t).normalize(); a.qR = c
    },
    tD: function () {
      var a = this.map; a.map.it && (this.gr(), this.P[3] = a.get('size').toString()); var b = this.P.toString(); if (b !== this.N7) {
        var c = this.get('zoom'); var d = this.nA; d.zoom = c; d.wC = this.wC; d.top =
this.top; d.Ha = this.km(); d.lb = this.get('centerCoords'); d.rotation = a.get('rotateEnable') && parseInt(this.get('rotation')) || 0; d.pitch = this.get('pitch') || 0; d.wIa = this.get('yaw'); d.Sf = a.get('crs'); d.T = Math.pow(2, 20 - c); d.je = Math.round(c); d.k7 = Math.floor(c); d.Kg = Math.pow(2, 20 - d.je); d.Xua = Math.pow(2, 20 - d.k7); d.Ne = this.Ne; d.bc = this.bc; this.N7 = d.key = b
      } this.nA.sh = this.get('center'); this.nA.er = g.a.fg(); this.nA.So = this.So(); return this.nA
    },
    km: function () {
      var a = this.get('size'); var b = a.width; var a = a.height; if (!b || !a) return null
      var c, d; d = 0; var e = new g.H(0, d); c = this.Cg(e, !0); if (this.De.pitch > 55 || !c) for (;!c;)d += a / 40, e.y = d, c = this.Cg(e, !0); this.top = d / a; e.x = b; d = this.Cg(e, !0); var f = 0; var h = this.De.zoom; this.De.pitch >= 50 && h >= 18 && (f = 0); e.y = a + f; f = this.Cg(e, !0); e.x = 0; h = this.Cg(e, !0); c = [c.xl(), d.xl(), f.xl(), h.xl(), c.xl()]; c = new g.$$(c); e.x = b / 2; e.y = a + 256; c.bQ = this.Cg(e, !0); return c
    },
    Jd: function () { var a = this.km(); if (a) { for (var b = [], c = 0; c < a.path.length; c += 1) { var d = this.map.Nd(new g.H(a.path[c][0], a.path[c][1])); b.push(d) } return new g.qp(b) } },
    ke: function (a, b, c) { a.z = c || 0; a = this.C6([a]); a = a[0]; return new g.H(a.x, a.y) },
    Q3: function (a) { var b = this.get('size'); a = new g.Gl([a.x / b.width * 2 - 1, 1 - a.y / b.height * 2, -1, 1]); a.multiply(this.uz); return this.Ne.ef.Eh(a) },
    Cg: function (a, b, c) {
      var d; this.map ? (this.map.D = !0, d = this.map.getSize(!0), this.map.D = !1) : d = this.get('size'); var e = a.x / d.width * 2 - 1; d = 1 - a.y / d.height * 2; a = new g.Gl([e, d, -1, 1]); a.multiply(this.uz); if (!this.Ne.ef) return null; a = this.Ne.ef.Eh(a); e = new g.Gl([e, d, 1, 1]); e.multiply(this.QI); d = this.Ne.ef.Eh(e)
      var f = this.bc.ef; var e = f.Eh(a).elements; a = f.Eh(d).elements; c = (e[2] - (-c || 0)) / (e[2] - a[2]); if (a[2] < 0 || c < 0 || b && c > 2.5 * this.voa) return null; b = e[0] - c * (e[0] - a[0]); c = e[1] - c * (e[1] - a[1]); return isNaN(b) || isNaN(c) ? null : (new g.H(b, c)).add(g.a.dc)
    },
    C6: function (a) {
      for (var b = this.get('centerCoords'), c = g.a.dc.x, d = g.a.dc.y, e = this.get('size'), f = g.a.Fa, h = b.x + f / 2, b = b.x - f / 2, k = [], l = new g.Gl([0, 0, 0, 1]), m = l.elements, n = new g.H(0, 0), p = g.Dc.multiply(this.Ne, this.bc), q = 0, r = a.length; q < r; q++) {
        if (a[q]) {
          a[q].concat ? (n.x = a[q][0], n.y = a[q][1],
          n.z = -a[q][2] || 0) : (n.x = a[q].x, n.y = a[q].y, n.z = -a[q].z || 0); h < n.x ? n.x -= f : b > n.x && (n.x += f); m[0] = n.x - c; m[1] = n.y - d; m[2] = n.z; var s = p.Eh(l); s.multiply(1 / s.elements[3]); k[q] = { x: (s.elements[0] + 1) / 2 * e.width, y: (-s.elements[1] + 1) / 2 * e.height, z: s.elements[2] }
        }
      } return k
    },
    aAa: function (a) { var b = this.get('size'); a = this.Ne.Eh(this.bc.Eh((new g.Gl()).copy(a))); a.multiply(1 / a.elements[3]); b = new g.H((a.elements[0] + 1) / 2 * b.width, (-a.elements[1] + 1) / 2 * b.height); b.z = a.elements[2]; return b }
  }); g.a.dc = new g.H(215440491, 106744817); g.Ob.Db({
    l2: function (a, b, c) { var d = this; d.kF ? (clearTimeout(d.kF), d.kF = null) : (d.pa('zoomstart', { zoom: a }), d.q('zoomstart')); d.kF = setTimeout(function () { d.kF = null; d.pa('zoomend', { zoom: a }); d.pa('zoomchange', { zoom: a }); d.q('zoomend') }, 150); a = g.a.Ac(a, 2); d.tA(a, !0, b, c) },
    tA: function (a, b, c, d) {
      var e = this.get('zoom'); if (e !== a) {
        var f = this.get('zooms'); this.B.view.type !== '3D' && (g.l.ba || g.l.Ie) && (b = !0); a = a || e; a = Math.min(Math.max(a, f[0]), f[1]); var h = a !== e; var k = !!c; this.Je && (this.Je.stop(), this.Je = null); c = c || this.get('centerCoords')
        var l = this.ke(c); c = function (c) { b || (c = g.a.Ac(c, 2)); var d = this.Cg(l); this.set('zoom', c); var e = this.Cg(l); var d = e && e ? e.$a(d) : new g.H(0, 0); this.set('centerCoords', this.get('centerCoords').$a(d).toFixed(3)); d.x && d.y && this.pa('mapmove'); c === a && a << 0 === a && (this.set('targetLevel', null), h && !this.kF && (this.pa('zoomchange'), this.pa('zoomend')), this.q('zoomend'), k && this.q('moveend'), this.Xf = null) }; var m; this.Fd && this.Fd.Zv && (this.Fd.stop(), this.Fd.iS && (d = !0), this.Fd.uD && (m = !0), this.Fd = null, this.set('targetLevel',
          null)); this.Xf && this.Xf.Zv && (this.Xf.stop(), d = !0, this.Xf.uD && (m = !0), this.Xf = null, this.set('targetLevel', null)); h && !d && this.pa('zoomstart'); k && !m && this.pa('movestart'); this.q('zoomstart'); b ? c.call(this, a) : (this.Xf = new g.Lj(e, a, null, 0.04), this.Xf.iS = h, this.Xf.uD = k, this.Xf.transition = function (a, b, c) { return c >= g.r.UH ? b : (b - a) * (1 - Math.pow(1 - c / g.r.UH, 4)) + a }, this.Xf.Gq = c, this.Xf.Mn(this, !0), this.set('targetLevel', a))
      }
    },
    ZK: function (a, b, c, d) {
      var e = null; a || (a = this.Fd ? this.Fd.gya : this.get('targetLevel') || this.get('zoom'))
      var e = b ? this.zb(b).toFixed(3) : this.Fd ? this.Fd.z9 : this.get('centerCoords'); var f = a !== this.get('zoom'); var h = !e.gb(this.get('centerCoords')); var k = b = !1; this.Xf && this.Xf.Zv && (this.Xf.stop(), b = !0, this.Xf.uD && (k = !0), this.Xf = null, this.set('targetLevel', null)); this.Fd && this.Fd.Zv && (this.Fd.stop(), this.Fd.iS && (b = !0), this.Fd.uD && (k = !0), this.Fd = null, this.set('targetLevel', null)); this.Je && (this.Je.stop(), this.Je = null); if (f || h) {
        if (!this.B.view.km().contains(e) || f && this.B.view.type !== '3D' && (g.l.ba || g.l.Ie))c = !0; if (c) {
          f && (b ||
(this.q('zoomstart'), this.pa('zoomstart')), this.set('zoom', a), this.pa('zoomchange'), this.pa('zoomend'), this.q('zoomend')), h && (k || d || (this.pa('movestart'), this.q('movestart')), this.set('centerCoords', e), this.pa('mapmove'), this.q('moveend', { G5: d })), this.set('targetLevel', null)
        } else {
          this.set('targetLevel', a); var l = a - this.get('zoom'); var m = e.$a(this.get('centerCoords')).toFixed(3); this.Fd = new g.Lj(1, 0, null, 0.001); this.Fd.iS = f; this.Fd.uD = h; this.Fd.z9 = e; this.Fd.gya = a; this.Fd.transition = function (a, b, c) {
            return Math.pow(1 -
Math.min(g.r.UH, c) / g.r.UH, 2)
          }; this.Fd.Gq = function (b) { b < 0.02 ? (this.Fd && (this.Fd.stop(), this.Fd = null), f && (this.set('zoom', a), this.pa('zoomchange'), this.pa('zoomend'), f = !1, this.q('zoomend')), h && (this.set('centerCoords', e), this.q('mapmove'), this.q('moveend', { G5: d })), this.set('targetLevel', null)) : (f && this.set('zoom', a - l * b), h && (b = e.$a(m.Md(b)).toFixed(3), this.set('centerCoords', b), this.pa('mapmove'))); this.set('display', 1) }; this.Fd.Mn(this); f && !b && (this.q('zoomstart'), this.pa('zoomstart')); !h || k || d || (this.q('movestart'),
          this.pa('movestart'))
        }
      }
    }
  }); g.o = {}
  g.o.Xb = g.ca.extend({
    ka: [g.va, g.$e],
    A: function (a, b) { this.S = a; this.bb = [3, 18]; this.ex = g.a.xb(this); a && this.bf(['opacity', 'visible', 'zIndex', 'zooms'], a); a.If = b.B.view.type; this.e = b; this.X('display', b) },
    kg: function () {
      this.Ei && this.mQ(); if (g.Da && g.Da.ir && g.Da.ir.length) { var a = g.a.indexOf(g.Da.ir, this); a !== -1 && (g.Da.ir = g.a.Do(g.Da.ir, a)) } if (a = this.Kb) { if (a.length) for (var b = 0; b < a.length; b += 1)a[b].parentNode && a[b].parentNode.removeChild(a[b]); else a.parentNode && a.parentNode.removeChild(a); this.Kb = null } this.S.kg && this.S.kg()
      this.S.ti = !1; this.S.o = null; this.zl(); var c; this.M && (this.M.ak(), this.M = null, c = '-' + this.mc); this.Cf && (this.Cf.ak(), this.Cf = null, c = '-' + this.mc); if (c) for (var d in g.Da.Gj)g.a.fD(d, c) && delete g.Da.Gj[d]
    },
    pa: function (a, b) { this.S.q(a, b) },
    visibleChanged: function () { this.set('display', 0) },
    zIndexChanged: function () { this.set('display', 0) },
    DU: function (a) { g.j.Vq(a, this.opacity) },
    opacityChanged: function () {
      var a = this.get('opacity'); this.opacity = Math.min(Math.max(0, a), 1); if (a = this.Kb) {
        if (a.length) {
          for (var b = 0; b < a.length; b +=
1) this.DU(a[b])
        } else this.DU(a)
      } this.e && this.e.B && this.e.B.view.type == '3D' && this.set('display', 0)
    },
    zn: function () { return this.e.Pc && !this.S.get('rejectMapMask') },
    eJ: function () {
      var a = this.get('bounds'); if (a) {
        if (a instanceof g.le) { var b = a.dk(); var a = a.Mo(); var c = this.e.zb(new g.U(180, 0)).x; var d = this.e.zb(b); var e = this.e.zb(a); var f = this.e.get('center'); b.R > a.R && (f.R > 0 ? e.x += c : d.x -= c); this.I = [d.x, d.y, e.x, e.y] } else {
          a instanceof g.Yf ? this.I = [a.kc.x, a.kc.y, a.Vd.x, a.Vd.y] : a instanceof g.QF && this.S.If === '3D' && (b = a.path[1], d =
this.e.zb(a.path[0]), e = this.e.zb(b), this.I = [d.x, d.y, e.x, e.y, a.I8, a.height])
        } return this.I
      } return null
    }
  }); var Nc = (function () { function a (a) { this.TF[g.a.xb(a)] = a; return this } function b (a) { this.TF[g.a.xb(a)] = null; return this } return function () { function c () { var a = c.TF; var b; var f = []; var h; for (h in a)a.hasOwnProperty(h) && f.push(a[h]); for (a = f.length - 1; a >= 0; a -= 1)h = f[a].apply(this, arguments), void 0 !== h && (b = h); return b }c.TF = {}; c.C1 = a; c.MGa = b; return c } }())
  g.sg = g.ca.extend({
    ka: [g.va],
    A: function (a, b) { this.Fp = a | 0; this.WF = !!b; this.count = 0; this.mK = Nc(); this.clear(); this.EB = [] },
    yh: function () { return !this.count },
    cFa: function () { return this.count >= this.Fp },
    uHa: function (a) { this.Fp !== a && (this.Fp = a | 0) && this.m1(this.Fp) },
    Kd: function (a) { return !!this.e[a] },
    get: function (a, b) { var c = this.rY(a); return c ? c.value : b },
    set: function (a, b) { var c = this.rY(a); c ? c.value = b : (c = new g.sg.sr(a, b), this.e[a] = c, this.vB(c), this.count += 1, this.count > this.Fp && this.m1(this.Fp)) },
    yw: function (a) { this.remove(a) },
    remove: function (a) { return this.e.hasOwnProperty(a) && this.VB(this.e[a]) ? !0 : !1 },
    forEach: function (a, b) { for (var c = this.bd.next; c !== this.bd; c = c.next)a.call(b, c.value, c.key, this) },
    tK: function (a, b) { return this.e.hasOwnProperty(a) ? this.e[a].value : b },
    oGa: function () { return this.bd.next.value },
    pGa: function () { return this.bd.Ia.value },
    shift: function () { return this.f0(this.bd.next) },
    v2: function () { this.EB.length = 0 },
    m6: function (a) { this.EB.push(a) },
    push: function (a) {
      a = new g.sg.sr('', a); this.count === 0 ? (this.bd.Ia = null,
      a.Ia = this.bd, this.bd.next = a) : (this.kC.next = a, a.Ia = this.kC); this.count += 1; this.kC = a
    },
    nza: function (a) { a = new g.sg.sr('', a); this.count === 0 ? (this.bd.Ia = null, a.Ia = this.bd, this.kC = this.bd.next = a) : (this.bd.next.Ia = a, a.next = this.bd.next, a.Ia = this.bd, this.bd.next = a); this.count += 1 },
    oua: function () { if (this.count) { this.count -= 1; var a = this.bd.next; a.next ? (a.next.Ia = this.bd, this.bd.next = a.next) : (this.bd.next = null, this.kC = this.bd.Ia = null); a.next = null; a.Ia = null; return a.value } return null },
    pop: function () { return this.f0(this.bd.Ia) },
    rY: function (a) { if (this.e.hasOwnProperty(a)) return a = this.e[a], this.WF && (a.remove(), this.vB(a)), a },
    vB: function (a) { this.WF ? (a.next = this.bd.next, a.Ia = this.bd, this.bd.next = a, a.next.Ia = a) : (a.Ia = this.bd.Ia, a.next = this.bd, this.bd.Ia = a, a.Ia.next = a) },
    m1: function (a) {
      if (!(this.count <= a || this.count < 2 * this.EB.length)) {
        for (var b = this.WF ? this.bd.Ia : this.bd.next, c = {}, d = 0, e = this.EB.length; d < e; d++)c[this.EB[d]] = !0; for (a = Math.ceil(2 * a / 3); b && this.count > a && (d = this.WF ? b.Ia : b.next, b.key && !c[b.key] && this.VB(b) && this.mK(b.value),
        b = d, b !== this.bd && b !== this.kC););
      }
    },
    VB: function (a) { if (this.zC && !1 == this.zC(a.value)) return !1; a.remove(); delete this.e[a.key]; this.count -= 1; return !0 },
    f0: function (a) { this.bd !== a && (this.zC && console.log('Warnning!!!'), this.VB(a)); return a.value },
    clear: function () { this.e = {}; this.bd = new g.sg.sr('', null); this.bd.Ia = this.bd.next = this.bd; this.count = 0 }
  }); g.sg.sr = function (a, b) { this.key = a; this.value = b }; g.sg.sr.prototype.Ia = null; g.sg.sr.prototype.next = null
  g.sg.sr.prototype.remove = function () { this.Ia.next = this.next; this.next.Ia = this.Ia; this.next = this.Ia = null }; function Oc (a, b, c) { this.url = a; this.Oc = b; this.lR = c; this.rn = this.QK = !1 } function Pc (a, b, c) { var d = Qc; return function () { return d.call(this, a, b, c) } } function Qc (a, b, c) { a.GDa = +new Date(); a.loaded = b; clearTimeout(a.uya); var d = a.Cta; d.Kn.remove(a.url) && d.Nga(); d = a.Isa ? a.ga : a.Ba; a.ga = null; (c || b || a.lR) && a.Oc(b ? d : null, a); a.O5 ? (a.O5.wi(), a.O5 = null) : d && (d.onload = null, d.onerror = null, d.onabort = null, a.Ba = null) }
  g.yF = g.ca.extend({
    IBa: 'assets/image/blank.gif',
    A: function (a, b, c) { this.timeout = b || 15E3; this.Mq = new g.sg(1024); this.Kn = new g.sg(1024); this.F2 = a; this.XQ = c },
    RM: function (a) { a && this.Kn.count >= this.F2 && (a = this.Kn.bd.Ia.value, a.rn && (this.Kn.remove(a.url), this.bX(a))); for (;this.Mq.count && !(this.Kn.count >= this.F2);) this.Zda(this.Mq.shift()) },
    Nga: function () { if (!this.KX) { this.KX = !0; var a = this; setTimeout(function () { a.KX = !1; a.RM() }, 0) } },
    Zda: function (a) {
      var b = document.createElement('img'); a.Xpa && (b.crossOrigin =
'anonymous'); b.src = a.url; a.Ba = b; a.Cta = this; a.startTime = +new Date(); a.QK = !0; b.complete ? Qc(a, !0) : (this.Kn.set(a.url, a), b.onload = Pc(a, !0), b.onerror = Pc(a, !1, !0), b.onabort = Pc(a, !1), a.uya = setTimeout(Pc(a, !1, !0), this.timeout))
    },
    bX: function (a) { a.QK && (Qc(a, !1), a.rn = !0, a.CCa = !0) },
    BFa: function (a, b, c) { return this.nz(a.url, b, c, !0, a.ta.z + '_' + a.ta.x + '_' + a.ta.y) },
    nz: function (a, b, c, d, e) {
      var f = this.Kn.get(a); if (f && f.rn)f.rn = !1, f.Oc = b, f.lR = c; else {
        f = new Oc(a, b, c); f.Isa = d; f.key = e; if (this.Mq.get(g.a.xb(f))) return; this.Mq.set(g.a.xb(f),
          f); this.RM(!0)
      } return f
    },
    sta: function (a, b, c) { var d = this.Kn.get(a); if (d && d.rn)d.rn = !1, d.Oc = b, d.lR = c; else { d = new Oc(a, b, c); d.Xpa = !0; if (this.Mq.get(g.a.xb(d))) return; this.Mq.set(g.a.xb(d), d); this.RM(!0) } return d },
    i2: function (a) { a.rn || (a.rn = !0, this.Mq.remove(g.a.xb(a))) },
    clear: function (a) { this.Mq.forEach(function (a) { a.rn = !0 }); this.Mq.clear(); if (a) for (;this.Kn.length > 0;)a = this.Kn.pop(), this.bX(a); else this.Kn.forEach(function (a) { a.rn = !0 }) }
  }); function Rc (a, b, c) { this.z = a; this.x = b; this.y = c }Rc.prototype.cb = function () { return new Rc(this.z, this.x, this.y) }; Rc.prototype.toString = function () { return this.z + '/' + this.x + '/' + this.y }; g.qb = function (a) { var b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !1; this.ta = a; this.key = a.toString(); this.Ke = b }; g.mr = Rc; g.o.qb = g.o.Xb.extend({
    A: function (a, b, c, d, e) {
      arguments.callee.ma.apply(this, arguments); this.X('tileSize', a); this.X('tiles', a); this.bf(['zooms', 'type', 'detectRetina', 'errorUrl'], a); a.IG && (this.X('lang', b, !0), this.X('mapStyle', b, !0), this.X('style', b, !0), this.X('features', b, !0)); var f = a.get('type') === 'overlayer' || !1 === a.get('blend'); this.Nk = !f && !g.l.ba; if (g.l.Ie || g.l.pIa) this.Nk = !1; var h = b.get('size'); var h = h.width * h.height / 65536; this.ja = g.l.ba && g.l.ja && this.get('detectRetina'); g.l.Lc && g.l.ba && h > 9 && (this.Nk =
!1); this.Yi = !f && !a.tk; this.Zi = !f && !a.tk; this.kL = c; this.X('reload', a); a.Esa ? this.X('createTile', a) : this.X('tileFun', a); this.gf = d; this.rS = e
    },
    langChanged: function () { this.set('reload'); this.S.$s() },
    styleChanged: function () { this.e.Bd || (this.set('reload'), this.S.$s()) },
    featuresChanged: function () { this.set('reload'); this.S.$s() },
    reloadChanged: function () { this.set('display', 0) },
    tileFunChanged: function () {
      var a = this.kL || this.get('tileFun'); this.zo = function (b, c, d) {
        var e = a(b.ta.x, b.ta.y, b.ta.z); if (!b.Is || b.Is.rn) {
          b.loaded =
!1, b.Is = (this.e.B.view.type === '3D' ? g.rm.sta : g.rm.nz).call(g.rm, e, function (a) { b.Is = null; a ? c(a) : d() }, !1)
        }
      }
    },
    createTileChanged: function () { this.S.D = !0; var a = this.S.getCreateTile(); this.S.D = !1; this.zo = function (b, c, d) { a.call(this.f.S, b.ta.x, b.ta.y, b.ta.z, c, d, b) }; this.set('reload') },
    he: function () {
      var a = this.S.get('zooms', null, !0); this.S.Dsa && (a = [Math.min(a[0], 18), Math.min(a[1], 18)]); return {
        Dd: this.S.get('tileSize'),
        visible: this.S.get('visible'),
        I: this.eJ(),
        bb: a,
        cI: this.Nk,
        Yi: this.Yi,
        Zi: this.Zi,
        opacity: this.S.get('opacity'),
        zo: this.S.get('createTile'),
        No: this.kL || this.S.get('tileFun'),
        Lc: this.S.Dq ? !1 : this.S.get('detectRetina') && g.l.ja && g.l.ba,
        Pc: this.zn()
      }
    },
    $l: function (a) { if (g.M.$d.Ti) return new g.M.$d.Ti(this, a) }
  }); g.rm = new g.yF(6, null); g.o.ed = g.o.Xb.extend({
    A: function (a, b) { this.Sa = Math.min(2, window.devicePixelRatio || 1); this.Lc = g.l.ja; this.map = b; this.cr = 0; this.om = !1; this.mg = this.Bf = 0; this.fh = []; arguments.callee.ma.apply(this, arguments); this.Jv = []; this.em = new g.o.haa(); a && (this.X('style', a), this.X('cursor', a, !0), this.Txa = a.get('stable') || !1, this.X('dataSources', a), this.X('bubble', a)); this.X('display', b); this.tca() },
    he: function () {
      return {
        visible: this.get('visible'),
        bb: this.get('zooms'),
        opacity: this.get('opacity'),
        zIndex: this.get('zIndex'),
        ey: this.S.get('alwaysRender') || !1,
        Pc: this.zn()
      }
    },
    dataSourcesChanged: function () { var a = this.get('dataSources'); a && a.length ? typeof a === 'string' ? (new g.ib.yb(a)).g('complete', function (a) { this.s7(a.data); this.ls = a.data; this.om = !0; this.set('display'); this.La = !0; this.S.q('complete') }, this) : a.length && (this.s7(a), this.ls = a, this.om = !0, this.set('display'), this.La = !0, this.S.q('complete')) : this.clear() },
    getDatas: function () { return this.ls },
    sza: function () { if (this.S.kk) { var a = this.Em; this.Bf = a.Bf; this.mg = a.mg } },
    pa: function (a, b) { var c = { type: a, data: a === 'mouseout' ? this.Kga || null : b.ru.hb, target: this.S }; this.Kga = a === 'mouseout' ? null : b.ru.hb; this.S.q(a, c) },
    tc: function (a) { this.pa(a.type, a) },
    tca: function () { this.g('click', this.tc); this.g('dblclick', this.tc); this.g('mousedown', this.tc); this.g('mouseup', this.tc); this.g('mouseover', this.tc); this.g('mouseout', this.tc); this.g('touchstart', this.tc); this.g('touchend', this.tc) },
    zCa: function () {
      this.G('click', this.tc); this.G('dblclick', this.tc); this.G('mousedown', this.tc)
      this.G('mouseup', this.tc); this.G('mouseover', this.tc); this.G('mouseout', this.tc); this.G('touchstart', this.tc); this.G('touchend', this.tc)
    },
    styleChanged: function () { this.Em = this.get('style'); this.sza(); this.set('display', 0) },
    s7: function (a) { if (a) { this.clear(); for (var b = 0; b < a.length; b += 1) { var c = a[b].lnglat; a[b].lnglat = g.a.Ja(c); c = this.map.zb(c); c = new g.di({ name: 'point-' + g.a.xb(this), W: new g.Aa.Pg([c.x, c.y], !0) }); c.Ir = this; c.hb = a[b]; this.SH(c) } } },
    Vqa: function (a) {
      if (a === 'geojson') return new g.naa({ map: this.map })
      if (a === 'topjson') return new g.dBa({ map: this.map }); if (a === 'subway') return new g.ZAa({ map: this.map })
    },
    Cva: function (a) {
      if (a) {
        var b = []; var b = []; var c = {}; if (a.rules) { for (var b = a.rules, d = 0, e = b.length; d < e; d += 1) { for (var f = [], h = b[d].symbolizers, k = 0, l = h.length; k < l; k += 1)h[k].fill && (f[k] = new g.style.Qg.aW(h[k].fill)), h[k].stroke && (f[k] = new g.style.Qg.FW(h[k].stroke)); h = f; b[d].hL = h; b[d] = new g.style.fba(b[d]) }c.rules = b } if (a.symbolizers) {
          b = a.symbolizers; a = 0; for (d = b.length; a < d; a += 1) {
            b[a].fill && (b[a] = new g.style.Qg.aW(b[a].fill)),
            b[a].stroke && (b[a] = new g.style.Qg.FW(b[a].stroke))
          }c.hL = b
        }a = new g.nM(c)
      } else a = new g.nM({}); this.set('style', a); return a
    },
    wCa: function (a, b) { var c = new g.ib.yb(a); c.g('complete', function (c) { c = this.ga[a] = this.Vqa(b).RT(c); this.ay(c); this.pa('complete') }, this); c.g('error', this.nc, this) },
    ewa: function (a) { a.target.get('unit') === 'px' ? (this.Bf = Math.max(a.ul, this.Bf), this.mg = Math.max(a.ul, this.mg)) : a.ul > this.Ns && (this.Ns = a.ul, this.rz = this.Ns / this.map.B.nj.kq(20)) },
    SH: function (a) {
      this.em.add(a); if (!this.ZC &&
!this.S.kk) { if (a.name.indexOf('circle') === 0 || a.name.indexOf('ellipse') === 0) { a.g('rad', this.ewa, this); var b = a.get('radius'); b.length && (b = Math.max.apply(null, b)); a.get('unit') === 'px' ? (this.Bf = Math.max(b, this.Bf), this.mg = Math.max(b, this.mg)) : this.Ns ? b > this.Ns && (this.Ns = b, this.rz = this.Ns / this.map.B.nj.kq(20)) : (this.Ns = b, this.rz = this.Ns / this.map.B.nj.kq(20)) }b = a.get('strokeWeight') || 0; if (!this.sz || b > this.sz) this.sz = b } this.Txa || a.X('feature', this, !0)
    },
    ay: function (a) {
      this.om = !0; for (var b = 0, c = a.length; b <
c; b += 1) this.SH(a[b])
    },
    clear: function () { this.om = !0; this.ls = []; this.em.clear(); this.set('display', 0) },
    yn: function (a) { var b, c; b = this.em.yn([a[0] + g.a.Fa, a[1], a[2] + g.a.Fa, a[3]]); c = this.em.yn([a[0] - g.a.Fa, a[1], a[2] - g.a.Fa, a[3]]); a = this.em.yn(a); return g.extend(a, g.extend(b, c)) },
    vEa: function (a) { var b; var c = this.get('style'); var d = a.vl; c instanceof g.nM || (c = this.Cva(c)); if (d && d.length > 0)b = c.K2(d, a); else { if (c.C8.length || c.vl.length)b = c.ioa(a); b || (b = a.xqa()) } return b },
    YR: function (a) {
      function b (a, b) { return a.fm - b.fm }
      var c = []; var d; var e; var f; var h; var k; var l = {}; for (d in a) if (a.hasOwnProperty(d)) { f = a[d]; h = f.get('zIndex'); for (e in l) if (l.hasOwnProperty(e) && (k = c[l[e]][2], k === h)) break; typeof l[h] === 'undefined' && (c.push([[], [], h]), l[h] = c.length - 1); h = c[l[h]]; h[0].push(f) }c.sort(this.Pxa); a = 0; for (d = c.length; a < d; a += 1)c[a][0].sort(b); return c
    },
    featureChanged: function (a) { this.om = !0; var b = a.target; var c = b.fc(); this.em.Cqa([g.a.xb(b)]).length !== 0 && (this.em.remove(b, a.Lv), c && !a.Boa && this.em.add(b)) },
    e8: function (a) {
      this.om = !0; for (var b, c = 0, d = a.length; c <
d; c += 1)b = a[c], b.W.Lv = null, b.ss(!0), b.yl('feature')
    },
    zHa: function (a, b) { return a[1].zIndex === b[1].zIndex ? g.a.xb(a[1]) - g.a.xb(b[1]) : a[1].zIndex - b[1].zIndex },
    Pxa: function (a, b) { return a[2] - b[2] },
    mHa: function (a) { return a.BEa() === g.o.iBa.SAa },
    $l: function (a) { return this.ZC ? new g.M.Me.Hl(this, a) : this.map.get('overlayRender') === 'c' && g.M.canvas.Hl ? new g.M.canvas.Hl(this, a) : g.M.$d.Hl && this.map.get('overlayRender') === 'd' ? new g.M.$d.Hl(this, a) : null }
  })
  g.o.ed.Db({ am: function (a) { return this.ZC ? new g.Ea.Me.Hl(this, a) : this.S.kk ? new g.Ea.Oaa(this, a) : new g.Ea.Hl(this, a) } }); g.o.haa = g.ca.extend({
    A: function () { this.clear() },
    clear: function () { this.nq = []; this.NT = new g.Mk() },
    add: function (a) { var b = g.a.xb(a); var c = a.fc(); this.nq[b] || (this.count += 1, this.nq[b] = a, c && !g.I.gb(c.Jd(), [Infinity, Infinity, -Infinity, -Infinity]) && this.NT.Gs(c.Jd(), a)) },
    pEa: function () { return this.nq },
    yn: function (a) { return this.NT.cxa(a) },
    Cqa: function (a) { var b = a.length; var c = []; var d; for (d = 0; d < b; d += 1) this.nq[a[d]] && c.push(this.nq[a[d]]); return c },
    remove: function (a, b) {
      var c = g.a.xb(a).toString(); var d = a.fc(); this.nq[c] && (this.nq[c] =
null, d && (c = typeof b !== 'undefined' ? b : d.Jd(), this.NT.remove(c, a)))
    }
  }); g.Mk = g.ca.extend({
    A: function (a) { this.s6 = typeof a !== 'undefined' ? a : 6; this.ZJ = Math.floor(this.s6 / 2); this.UK = { I: [Infinity, Infinity, -Infinity, -Infinity], Hb: [] }; this.count = 0 },
    mna: function (a, b) {
      var c = -1; var d = []; var e; d.push(b); var f = b.Hb; do {
        c !== -1 && (d.push(f[c]), f = f[c].Hb, c = -1); for (var h = f.length - 1; h >= 0; h -= 1) {
          var k = f[h]; if (typeof k.We !== 'undefined') { c = -1; break } var l = g.Mk.Vz(k.I[2] - k.I[0], k.I[3] - k.I[1], k.Hb.length + 1); var k = g.Mk.Vz((k.I[2] > a.I[2] ? k.I[2] : a.I[2]) - (k.I[0] < a.I[0] ? k.I[0] : a.I[0]), (k.I[3] > a.I[3] ? k.I[3] : a.I[3]) -
(k.I[1] < a.I[1] ? k.I[1] : a.I[1]), k.Hb.length + 2); if (c < 0 || Math.abs(k - l) < e)e = Math.abs(k - l), c = h
        }
      } while (c !== -1);return d
    },
    Gs: function (a, b, c) { a = { I: a, We: b }; typeof c !== 'undefined' && (a.type = c); this.q5(a, this.UK); this.count += 1 },
    q5: function (a, b) {
      var c; if (b.Hb.length === 0)b.I = g.I.cb(a.I), b.Hb.push(a); else {
        var d = this.mna(a, b); var e = a; do {
          if (c && typeof c.Hb !== 'undefined' && c.Hb.length === 0) { var f = c; c = d.pop(); for (var h = 0, k = c.Hb.length; h < k; h += 1) if (c.Hb[h] === f || c.Hb[h].Hb.length === 0) { c.Hb.splice(h, 1); break } } else c = d.pop(); f =
e instanceof Array; if (typeof e.We !== 'undefined' || typeof e.Hb !== 'undefined' || f) { if (f) { f = 0; for (h = e.length; f < h; f += 1)g.I.extend(c.I, e[f].I); c.Hb = c.Hb.concat(e) } else g.I.extend(c.I, e.I), c.Hb.push(e); if (c.Hb.length <= this.s6) if (d.length > 0)e = { I: g.I.cb(c.I) }; else break; else e = f = this.hta(c.Hb), d.length < 1 && (c.Hb.push(f[0]), d.push(c), e = f[1]) } else g.I.extend(c.I, e.I), e = { I: g.I.cb(c.I) }
        } while (d.length > 0)
      }
    },
    hta: function (a) { for (var b = this.Hva(a); a.length > 0;) this.Iva(a, b[0], b[1]); return b },
    Hva: function (a) {
      for (var b =
a.length - 1, c = 0, d = a.length - 1, e = 0, f = a.length - 2; f >= 0; f -= 1) { var h = a[f]; h.I[0] > a[c].I[0] ? c = f : h.I[2] < a[b].I[1] && (b = f); h.I[1] > a[e].I[1] ? e = f : h.I[3] < a[d].I[3] && (d = f) }Math.abs(a[b].I[2] - a[c].I[0]) > Math.abs(a[d].I[3] - a[e].I[1]) ? b > c ? (b = a.splice(b, 1)[0], c = a.splice(c, 1)[0]) : (c = a.splice(c, 1)[0], b = a.splice(b, 1)[0]) : d > e ? (b = a.splice(d, 1)[0], c = a.splice(e, 1)[0]) : (c = a.splice(e, 1)[0], b = a.splice(d, 1)[0]); return [{ I: g.I.cb(b.I), Hb: [b] }, { I: g.I.cb(c.I), Hb: [c] }]
    },
    Iva: function (a, b, c) {
      for (var d = g.Mk.Vz(b.I[2] - b.I[0], b.I[3] - b.I[1],
          b.Hb.length + 1), e = g.Mk.Vz(c.I[2] - c.I[0], c.I[3] - c.I[1], c.Hb.length + 1), f, h, k, l = a.length - 1; l >= 0; l -= 1) {
        var m = a[l]; var n = [b.I[0] < m.I[0] ? b.I[0] : m.I[0], b.I[2] > m.I[2] ? b.I[2] : m.I[2], b.I[1] < m.I[1] ? b.I[1] : m.I[1], b.I[3] > m.I[3] ? b.I[3] : m.I[3]]; var n = Math.abs(g.Mk.Vz(n[1] - n[0], n[3] - n[2], b.Hb.length + 2) - d); var m = [c.I[0] < m.I[0] ? c.I[0] : m.I[0], c.I[2] > m.I[2] ? c.I[2] : m.I[2], c.I[1] < m.I[1] ? c.I[1] : m.I[1], c.I[3] > m.I[3] ? c.I[3] : m.I[3]]; var m = Math.abs(g.Mk.Vz(m[1] - m[0], m[3] - m[2], c.Hb.length + 2) - e); var p = Math.abs(m - n); if (!h || !f || p < f) {
          h = l, f = p, k = m < n ? c
            : b
        }
      }d = a.splice(h, 1)[0]; b.Hb.length + a.length + 1 <= this.ZJ ? (b.Hb.push(d), g.I.extend(b.I, d.I)) : c.Hb.length + a.length + 1 <= this.ZJ ? (c.Hb.push(d), g.I.extend(c.I, d.I)) : (k.Hb.push(d), g.I.extend(k.I, d.I))
    },
    remove: function (a, b) { var c = []; c[0] = { I: a }; (c[1] = b) || (c[1] = !1); c[2] = this.UK; this.count -= 1; if (!1 === c[1]) { var d = 0; var e = []; do d = e.length, e = e.concat(this.h8.apply(this, c)); while (d !== e.length);return e } return this.h8.apply(this, c) },
    h8: function (a, b, c) {
      var d = []; var e = []; var f = []; if (!a || !g.I.bh(a.I, c.I)) return f; a = g.I.cb(a.I); var h
      e.push(c.Hb.length); d.push(c); do {
        c = d.pop(); var k = e.pop() - 1; if (typeof b !== 'undefined') for (;k >= 0;) { var l = c.Hb[k]; if (g.I.bh(a, l.I)) if (b && typeof l.We !== 'undefined' && l.We === b || !b && (typeof l.We !== 'undefined' || g.I.G2(a, l.I))) { typeof l.Hb !== 'undefined' ? (f = this.Pz(l, !0, [], l), c.Hb.splice(k, 1)) : f = c.Hb.splice(k, 1); g.Mk.XT(c); b = void 0; c.Hb.length < this.ZJ && (h = this.Pz(c, !0, [], c)); break } else typeof l.Hb !== 'undefined' && (e.push(k), d.push(c), c = l, k = l.Hb.length); k -= 1 } else if (typeof h !== 'undefined') {
          c.Hb.splice(k + 1, 1)
          c.Hb.length > 0 && g.Mk.XT(c); k = 0; for (l = h.length; k < l; k += 1) this.q5(h[k], c); h.length = 0; d.length === 0 && c.Hb.length <= 1 ? (h = this.Pz(c, !0, h, c), c.Hb.length = 0, d.push(c), e.push(1)) : d.length > 0 && c.Hb.length < this.ZJ ? (h = this.Pz(c, !0, h, c), c.Hb.length = 0) : h = void 0
        } else g.Mk.XT(c)
      } while (d.length > 0);return f
    },
    search: function (a, b) { return this.Pz({ I: a }, !1, [], this.UK, b) },
    cxa: function (a, b) { return this.Pz({ I: a }, !1, [], this.UK, b, !0) },
    Pz: function (a, b, c, d, e, f) {
      var h = {}; var k = []; if (!g.I.bh(a.I, d.I)) return f ? h : c; k.push(d.Hb); do {
        d = k.pop()
        for (var l = d.length - 1; l >= 0; l -= 1) { var m = d[l]; if (g.I.bh(a.I, m.I)) if (typeof m.Hb !== 'undefined')k.push(m.Hb); else if (typeof m.We !== 'undefined') if (b)c.push(m); else if (typeof e === 'undefined' || m.type === e)m = m.We, typeof f !== 'undefined' ? h[g.a.xb(m)] = m : c.push(m) }
      } while (k.length > 0);return typeof f !== 'undefined' ? h : c
    }
  }); g.Mk.XT = function (a) { var b = a.Hb.length; var c = a.I; if (b === 0)g.I.empty(c); else { var d = a.Hb[0].I; c[0] = d[0]; c[2] = d[2]; c[1] = d[1]; c[3] = d[3]; for (d = 1; d < b; d += 1)g.I.extend(c, a.Hb[d].I) } }
  g.Mk.Vz = function (a, b, c) { var d = (a + b) / 2; a *= b; return a * c / (a / (d * d)) }; g.C = g.C || {}
  g.C.Ih = g.ca.extend({
    ka: [g.va, g.$e],
    mva: ['position', 'altitude', 'visible', 'clickable', 'bubble'],
    A: function (a, b) { this.map = b; this.bf(this.mva, a); this.X('zIndex', a); this.X('draggable', a); g.l.Wf && this.Aca(); g.l.ba || this.JM(); this.Qb = a; this.Qb.C = this },
    draggableChanged: function () { this.get('draggable') ? this.IM() : this.CO() },
    pa: function (a, b) { var c; c = b ? { type: a, pixel: b.wb, target: this.Qb, lnglat: b.jg } : { type: a }; this.Qb && this.Qb.q(a, c) },
    tc: function (a) {
      (a.type !== 'click' && a.type !== 'rightclick' && a.type !== 'dblclick' &&
a.type !== 'longclick' || this.get('clickable')) && this.pa(a.type, a)
    },
    HM: function () { this.g('click', this.tc); this.g('rightclick', this.tc); this.g('longclick', this.tc); this.g('longpress', this.tc); this.g('dblclick', this.tc) },
    o1: function () { this.G('click', this.tc); this.G('rightclick', this.tc); this.G('longclick', this.tc); this.G('longpress', this.tc); this.G('dblclick', this.tc) },
    JM: function () {
      this.get('clickable') && this.HM(); this.g('mousemove', this.tc); this.g('mouseout', this.tc); this.g('mouseover', this.tc); this.g('mousedown',
        this.tc); this.g('mouseup', this.tc)
    },
    ACa: function () { this.o1(); this.G('mousemove', this.tc); this.G('mouseout', this.tc); this.G('mouseover', this.tc); this.G('mousedown', this.tc); this.G('mouseup', this.tc) },
    clickableChanged: function () { this.get('clickable') ? this.HM() : this.o1() },
    Aca: function () { this.get('clickable') && this.HM(); this.g('touchstart', this.tc, this); this.g('touchmove', this.tc, this); this.g('touchend', this.tc, this) },
    IM: function () {
      this.g('dragstart', this.eu); this.g('dragging', this.cu); this.g('dragend',
        this.du)
    },
    eu: function (a) { this.map.ZS(a); this.ig = a.wb; this.S5 = a.Ra; this.R5 = a.jg; this.pa('dragstart', a) },
    cu: function (a) {
      var b = this.map.B.view.type; if (b == '2D') { var c = a.wb.$a(this.ig); var b = c.x; var c = c.y; this.ig = a.wb; var d = this.map.get('rotation') * Math.PI / 180; var e = b * Math.cos(d) + Math.sin(d) * c; var b = -Math.sin(d) * b + Math.cos(d) * c; this.Yo(new g.H(e, b)); this.pa('dragging', a) } else {
        b == '3D' && a.Ra && (c = a.wb.$a(this.ig), b = c.x, c = c.y, e = a.Ra.$a(this.S5), a.jg.$a(this.R5), this.ig = a.wb, typeof this.tz === 'function' && this.tz(b, c, e), this.S5 =
a.Ra, this.R5 = a.jg, this.pa('dragging', a))
      }
    },
    du: function (a) { this.map.ww(); this.map.B.view.type == '3D' && this.Qb.reset && this.Qb.reset(); this.pa('dragend', a) },
    CO: function () { this.G('dragstart', this.eu); this.G('dragging', this.cu); this.G('dragend', this.du) },
    CN: function (a) { var b; var c; var d = []; if (a) for (b = 0, c = a.length; b < c; b += 1)d.push(this.DN(a[b])); return d },
    DN: function (a) { a = this.map.zb(a); return [a.x, a.y] },
    lg: function (a) {
      var b = this.L.mb || this.map.get('centerCoords'); var c = Math.pow(2, 20 - this.map.get('zoom')); return [(a[0] -
b.x) / c, (a[1] - b.y) / c]
    },
    St: function (a, b) { var c = this.map.B; var d = []; var e = !1; a[0] instanceof Array && typeof a[0][0] !== 'number' && (e = !0); if (e) for (var e = 0, f = a.length; e < f; e++) { for (var h = [], k = 0, l = a[e].length; k < l; k++) { var m = c.zb(a[e][k]); m.x += b[0]; m.y += b[1]; h.push(c.Nd(m)) }d.push(h) } else for (e = 0, f = a.length; e < f; e++)h = c.zb(a[e]), h.x += b[0], h.y += b[1], d.push(c.Nd(h)); return d }
  }); g.C.ub = g.C.Ih.extend({
    gE: 'content contentDom icon opacity angle autoRotation offset textAlign verticalAlign shadow title label isTop shape topWhenClick topWhenMouseOver noSelect anchor'.split(' '),
    $la: { AMAP_ANIMATION_NONE: !1, AMAP_ANIMATION_DROP: g.Lj.Easing.Bounce, AMAP_ANIMATION_BOUNCE: g.Lj.Easing.Cubic },
    A: function (a, b) {
      arguments.callee.ma.apply(this, arguments); this.bf(this.gE, a); this.X('move', a); this.Pma(); this.Eu(); this.set('AnimationOffset', new g.H(0, 0), !0); this.X('raiseOnDrag', a); this.X('animation',
        a)
    },
    UN: function (a, b, c) { var d = this.get('animation'); if (d && d !== 'AMAP_ANIMATION_NONE') { var e = this; this.Fn = new g.Lj(); this.Fn.transition = function (c, h, k) { if (d === 'AMAP_ANIMATION_NONE') return 0; if (a && k >= 600) return e.Fn.stop(), 0; c = Math.floor(k / 600) % 2 === 0 ? 'Out' : 'In'; b === 'out' ? c = 'Out' : b === 'in' && (c = 'In'); return e.$la[d][c](k % 600 / 600) }; c = c || 40; this.Fn.Gq = function (a) { e.set('AnimationOffset', e.FO.add(new g.H(0, -1 * c * a))) }; this.FO = new g.H(0, 0); this.Fn.Mn() } },
    AnimationOffsetChanged: function () { this.positionChanged() },
    q0: function () { this.Fn && (this.Fn.stop(), this.set('AnimationOffset', this.FO)); this.set('AnimationOffset', new g.H(0, -40)); if (this.kr) this.kr.set('position', this.get('position')); else { var a = new B.C.ub({ zIndex: this.get('zIndex') - 1, icon: new B.C.fi({ image: g.r.Gb + '/theme/v1.3/dragCross.png', size: new g.xd(14, 11), innerOverlay: !0 }), offset: new g.H(-4, -5), position: this.get('position'), innerOverlay: !0 }); a.Ca = !0; this.kr = a } this.kr.D = !0; this.kr.setMap(this.map.B); this.kr.D = !1 },
    fY: function () {
      this.set('animation', 'AMAP_ANIMATION_DROP',
        !0); this.UN(!0, 'in'); this.kr.D = !0; this.kr.D = !1
    },
    animationChanged: function () { this.Fn && (this.Fn.stop(), this.set('AnimationOffset', this.FO), this.Fn = null); var a = this.get('animation'); a && a !== 'AMAP_ANIMATION_NONE' && (a === 'AMAP_ANIMATION_DROP' ? this.UN(!0, 'in', 100) : this.UN()) },
    Tg: function () { this.kr && this.kr.set('position', this.get('position')) },
    raiseOnDragChanged: function () {
      this.get('raiseOnDrag') ? (this.g('dragstart', this.q0, this), this.g('dragging', this.Tg, this), this.g('dragend', this.fY, this)) : (this.G('dragstart',
        this.q0, this), this.G('dragging', this.Tg, this), this.G('dragend', this.fY, this))
    },
    Yo: function (a) { var b = this.get('position'); a = this.map.zb(b).add(a.Md(Math.pow(2, 20 - this.map.get('zoom')))); b instanceof g.U ? this.set('position', this.map.Nd(a)) : this.set('position', a) },
    tz: function (a, b) { var c = this.get('position'); var d = this.get('altitude'); var c = this.map.Ls(c, d); var d = this.map.Xp(new g.H(c.x + a, c.y + b), null, d); this.set('position', d) },
    Pma: function () {
      var a = this.get('content'); var b = this.get('shadow'); var c = this.get('offset'); var d = this.get('label')
      var e; var f = this; e = a ? this.V1(a, c) : this.XP(this.get('icon'), function () { f.L && f.L.fa ? (g.l.Bi && g.a.iepngFix(e), f.offsetChanged(), f.vL()) : f.map && f.map.set('display') }); this.set('contentDom', e, !0); b && (a = this.b2(b, c), this.set('shadowDom', a, !0)); d && d.content && this.set('labelDom', this.YP(d.content), !0)
    },
    YP: function (a) { var b = document.createElement('div'); b.className = 'amap-marker-label'; b.innerHTML = a; return b },
    Eu: function () {
      var a = this.get('position'); if (this.map && a && !this.L) {
        var b = this.map; var a = this.map.zb(a); var a = this.L =
new g.di({ name: 'marker-' + g.a.xb(this), map: b, W: new g.Aa.Pg([a.x, a.y]) }); a.Qp = this.Qb.CLASS_NAME; a.Ir = this; this.X('coords', a, !0); a.bf('offset textAlign verticalAlign isTop zIndex params noSelect'.split(' '), this)
      }
    },
    getParams: function () {
      return {
        zIndex: this.get('zIndex'),
        Op: this.get('angle'),
        Xg: this.get('contentDom'),
        MJ: this.get('labelDom'),
        Y8: this.get('shadowDom'),
        opacity: this.get('opacity'),
        altitude: this.get('altitude'),
        title: this.get('title'),
        label: this.get('label'),
        pF: this.get('AnimationOffset'),
        verticalAlign: this.get('verticalAlign'),
        textAlign: this.get('textAlign'),
        offset: this.get('offset'),
        L5: this.get('isTop'),
        shape: this.get('shape'),
        visible: this.get('visible') && !this.Qb.get('outOfZooms'),
        anchor: this.get('anchor')
      }
    },
    offsetChanged: function () {
      function a (a) {
        var c = b.get('offset'); var f = b.get('AnimationOffset'); var h = b.get('verticalAlign'); var k = b.get('textAlign'); var l = Math.round(a.x) + c.x + f.x; a = Math.round(a.y) + c.y + f.y; var f = b.get('anchor'); var m = b.L.Xj || g.j.Io(b.L.Xg); b.L.Xj = m; c = m[0]; m = m[1]; f && (f = f.split('-'), f.length === 2 ? (k = f[1], h = f[0]) : f.length === 1 &&
f[0] === 'center' && (k = 'center', h = 'middle')); switch (k) { case 'center':l -= c / 2; break; case 'right':l -= c } switch (h) { case 'middle':a -= m / 2; break; case 'bottom':a -= m }b.L.fa.style.left = l + 'px'; b.L.fa.style.top = a + 'px'
      } if (this.map) {
        if (this.L && this.L.fa) {
          var b = this; var c = this.map.B.view.type; c == '2D' ? (c = this.map.zb(this.get('position')), c = c.$a(this.L.Ma).kd(Math.pow(2, 20 - this.map.get('zoom'))), this.L.fa && (this.L.fa.MB && this.L.fa.parentNode !== this.L.fa.MB ? this.map.set('display') : a(c))) : c == '3D' && (c = this.get('position'), c =
this.map.Ls(c, this.get('altitude')), this.L.fa && (this.L.fa.MB && this.L.fa.parentNode !== this.L.fa.MB ? this.map.set('display') : a(c)))
        } else this.map.set('display')
      }
    },
    altitudeChanged: function () { this.offsetChanged() },
    positionChanged: function () { if (this.L) { var a = this.map.zb(this.get('position')); this.set('coords', [a.x, a.y]); this.map && (this.L.Zaa = !0, this.offsetChanged()) } },
    anchorChanged: function () { this.UF() },
    textAlignChanged: function () { this.UF() },
    verticalAlignChanged: function () { this.UF() },
    UF: function () {
      this.L &&
(this.L.Xj = null, this.L.pe = !0, this.map && (this.map.td.nm = !0, this.map.set('display')))
    },
    contentChanged: function () {
      if (this.L) {
        this.L.Xj = null; this.map.td.nm = !0; g.a.indexOf(this.map.td.fh, this.L) === -1 && this.map.td.fh.push(this.L); var a = this.get('contentDom'); this.L.fa && this.L.fa === a.parentNode && this.L.fa.removeChild(a); var a = this.get('content'); var b = this.get('offset'); var a = this.V1(a, b); this.set('contentDom', a); this.L.fa ? (g.l.Bi && g.a.iepngFix(a), this.L.fa.appendChild(a), this.L.Xg = a, this.offsetChanged(), this.vL())
          : this.map && this.map.set('display'); this.titleChanged()
      }
    },
    iconChanged: function () {
      if (this.L && !this.get('content')) {
        this.L.Xj = null; this.map.td.nm = !0; g.a.indexOf(this.map.td.fh, this.L) === -1 && this.map.td.fh.push(this.L); this.L.fa && this.get('contentDom') && this.L.fa.removeChild(this.get('contentDom')); var a = this.get('icon'); this.get('offset'); var b = this; var c = this.XP(a, function () { b.L && b.L.fa ? (g.l.Bi && g.a.iepngFix(c), b.offsetChanged(), b.vL()) : b.map && b.map.set('display') }); this.set('contentDom', c); this.L.fa && (this.L.fa.appendChild(c),
        this.L.Xg = c); this.titleChanged()
      }
    },
    shadowChanged: function () { if (this.L) { var a = this.get('shadowDom'); this.L.fa && a && a.parentNode === this.L.fa && this.L.fa.removeChild(a); if (a = this.get('shadow')) { var b = this.get('offset'); var a = this.b2(a, b); this.set('shadowDom', a); this.L.fa && this.L.fa.appendChild(a) } } },
    titleChanged: function () { this.L && this.L.Xg && typeof this.get('title') === 'string' && this.L.Xg && this.get('title') && (this.L.Xg.title = this.get('title')) },
    vL: function (a, b) {
      a = a || this.get('label'); b = b || this.get('labelDom')
      if (a && b) { var c = a.direction; var d = this.L.Xj || g.j.Io(this.L.Xg); var e = d[0]; var d = d[1]; var f = g.j.Io(b); var h = f[0]; var k = f[1]; this.L.Cv = f; var l = f = 0; switch (c) { case 'top':f = -k; l = (e - h) / 2; break; case 'right':f = (d - k) / 2; l = e; break; case 'bottom':f = d; l = (e - h) / 2; break; case 'left':f = (d - k) / 2; l = -h; break; case 'center':f = (d - k) / 2, l = (e - h) / 2 }a.offset && (f += a.offset.y, l += a.offset.x); b.style.top = f + 'px'; b.style.left = l + 'px' }
    },
    labelChanged: function (a) {
      a = a || this.get('label'); if (this.L && this.L.fa) {
        this.L.Cv = null; var b = this.L.fa; var c = this.get('labelDom')
        c && c.parentNode === b && b.removeChild(c); a && a.content && (c = '', a.content && (c = this.YP(a.content), b.appendChild(c), this.vL(a, c)), this.set('labelDom', c))
      } else a && a.content ? this.set('labelDom', this.YP(a.content), !0) : this.set('labelDom', null)
    },
    isTopChanged: function () {
      var a = this.map.td.mL; var b = this.get('isTop'); var c = this.get('zIndex'); a ? a === this ? this.L && this.L.fa && (this.L.fa.style.zIndex = b ? this.map.td.cr + 10 : c, this.map.td.mL = b ? this : null) : (a.L && a.L.fa && (a.L.fa.style.zIndex = b ? a.get('zIndex') : this.map.td.cr + 10), this.L &&
this.L.fa && (this.L.fa.style.zIndex = b ? this.map.td.cr + 10 : c), this.map.td.mL = b ? this : a) : (this.map.td.mL = this, this.L && this.L.fa && (this.L.fa.style.zIndex = b ? this.map.td.cr + 10 : c))
    },
    visibleChanged: function () { this.L && this.L.fa && (this.get('visible') && !this.Qb.get('outOfZooms') ? this.L.fa.style.display = 'block' : this.L.fa.style.display = 'none') },
    dva: function () { this.visibleChanged() },
    angleChanged: function () {
      if (!g.l.Ie && this.L && this.L.fa) {
        var a = this.L; var b = a.get('params'); var c = b.textAlign; var d = b.verticalAlign; var e = b.offset; var b = e.x
        var e = e.y; this.UF(); if (a.Qp == 'AMap.Text') { var e = b = 0; var f = a.Xj || g.j.Io(a.Xg); var h = f[0]; var k = f[1]; a.Xj = f; switch (c) { case 'center':b = h / 2; break; case 'right':b = h } switch (d) { case 'middle':e = k / 2; break; case 'bottom':e = k } } else b = -b, e = -e; g.j.rotate(this.L.fa, this.get('angle') || 0, { x: b, y: e })
      }
    },
    zIndexChanged: function () { var a = this.get('zIndex'); if (a > this.map.td.cr) { this.map.td.cr = a; var b = this.map.td.mL; b && b.L && b.L.fa && (b.L.fa.style.zIndex = a + 10) } this.L && this.L.fa && (this.L.fa.style.zIndex = this.get('isTop') ? this.map.td.cr + 10 : this.get('zIndex')) },
    opacityChanged: function () { var a = this.get('contentDom'); var b = this.get('shadowDom'); a && g.j.Vq(a, this.get('opacity')); b && g.j.Vq(b, this.get('opacity')) },
    V1: function (a) { var b; b = document.createElement('div'); b.className = 'amap-marker-content'; typeof a !== 'string' ? b.appendChild(a) : (b.innerHTML = a, b.childNodes[0] && !b.childNodes[0].style && (b.style['white-space'] = 'pre')); g.j.Vq(b, this.get('opacity')); return b },
    XP: function (a, b) {
      var c; var d = 0; var e = 0; var f; var h; var k; var l; var m; var n; a ? (typeof a === 'string' ? (c = a, n = !0) : (c = a.get('image'), e = a.get('size'),
      f = a.get('imageSize'), d = e.width, e = e.height, f && (l = f.width, m = f.height)), f = typeof a !== 'string' ? a.get('imageOffset') : { x: 0, y: 0 }) : (c = g.r.Hi + '/mark_bs.png', f = { x: 0, y: 0 }, d = 19, e = 33, l = 19, m = 33); h = document.createElement('div'); h.className = 'amap-icon'; h.style.position = 'absolute'; h.style.overflow = n ? 'inherit' : 'hidden'; d && (h.style.width = d + 'px'); e && (h.style.height = e + 'px'); k = document.createElement('img'); l && m && (k.style.width = l + 'px', k.style.height = m + 'px'); k.style.top = f.y + 'px'; k.style.left = f.x + 'px'; h.appendChild(k); g.j.Vq(g.l.Ie &&
n ? k : h, this.get('opacity')); d && e || (h.AM = !1); g.F.g(k, 'load', function q () { this.L && (this.L.Xj = null); this.map && this.map.td && (this.map.td.nm = !0); g.F.G(k, 'load', q, this); if (this.L && this.L.fa) { var a = this.get('labelDom'); a && this.L.fa.appendChild(a) }h.AM = !0; b && b() }, this); k.src = c; return h
    },
    b2: function (a) { a = this.XP(a); a.style.zIndex = -1; return a },
    moveChanged: function () {
      var a = this.get('move'); if (!1 === a) return this.$xa(); void 0 !== a && (a.action === 'pause' ? this.Fva() : Object.prototype.toString.call(a.jg) === '[object Array]'
        ? a.jg && (a.action === 'resume' && this.QG ? this.moveTo(a.jg[a.jg.Hp || 0], a.speed, a.vb) : (this.QG && this.q('movestop'), a.jg.Hp = 0, this.set('position', a.jg[0]), this.hua(a.jg, a.speed, a.vb, a.qna))) : this.moveTo(a.jg, a.speed, a.vb, !0))
    },
    moveTo: function (a, b, c, d) {
      if (!(b <= 0)) {
        var e = this.get('position'); a.$a(e); var f = Math.round(a.He(e) / 1E3 / b * 36E5); if (f === 0) return this.q('moveend'); this.Ch && (this.Ch.stop(), this.Ch = null); this.Ch = new g.Lj(e, a); c = c || function (a) { return a }; this.Ch.transition = function (a, b, d) {
          if (d >= f) return b
          var e = (b.R - a.R) * c(d / f) + a.R; a = (b.Q - a.Q) * c(d / f) + a.Q; return new g.U(e, a)
        }; this.Ch.Gq = function (b) { this.set('position', b); d && this.Qb.q('moving', { target: this.Qb, passedPath: [this.Ch.start, this.get('position')] }); this.q('moving'); b.gb(a) && (this.Ch && (this.Ch.stop(), this.Ch = null), this.Qb.q('moveend', { target: this.Qb }), this.q('moveend')) }; this.get('autoRotation') && !g.l.Ie && (b = (this.map.B.view.type || '2D') == '2D' ? this.Sea(e, a) : this.Tea(e, a), this.set('angle', b)); this.Ch.Mn(this)
      }
    },
    $xa: function () {
      this.Ch && (this.Ch.stop(),
      this.Ch = null, this.q('movestop'))
    },
    Fva: function () { this.Ch && (this.Ch.stop(), this.Ch = null, this.q('movepause')) },
    hua: function (a, b, c, d) {
      function e () { var b = a.slice(0, a.Hp || 0); b.push(this.get('position')); this.Qb.q('moving', { target: this.Qb, passedPath: b }) } function f () { a.Hp < a.length - 1 ? (a.Hp += 1, this.moveTo(a[a.Hp], b, c)) : (this.pa('movealong'), d ? (a.Hp = 0, this.set('position', a[0]), this.moveTo(a[a.Hp], b, c)) : this.q('movestop')) } var h = Math.min(a.Hp || 0, a.length - 1); this.QG || (this.QG = !0, this.g('moving', e, this), this.g('moveend',
        f, this), this.g('movestop', function l () { this.QG = !1; this.G('moveend', f, this); this.G('moving', e, this); this.G('movestop', l, this) }, this)); this.moveTo(a[h], b, c)
    },
    Tea: function (a, b) { var c = this.map; var d = c.Ls(a); var c = c.Ls(b); var e = 0; c.He(d); var f = c.y - d.y; var h = c.x - d.x; c.x - d.x !== 0 ? (e = Math.atan((c.y - d.y) / (c.x - d.x)), f >= 0 && h < 0 ? e = Math.PI + e : f < 0 && h <= 0 ? e = Math.PI + e : f < 0 && h >= 0 && (e = 2 * Math.PI + e)) : e = c.y > d.y ? Math.PI / 2 : 3 * Math.PI / 2; return g.a.Ac(180 * e / Math.PI, 1) },
    Sea: function (a, b) {
      var c = this.map; var d = c.zb(a); var c = c.zb(b); var e = 0; c.He(d); var f = c.y -
d.y; var h = c.x - d.x; c.x - d.x !== 0 ? (e = Math.atan((c.y - d.y) / (c.x - d.x)), f >= 0 && h < 0 ? e = Math.PI + e : f < 0 && h <= 0 ? e = Math.PI + e : f < 0 && h >= 0 && (e = 2 * Math.PI + e)) : e = c.y > d.y ? Math.PI / 2 : 3 * Math.PI / 2; return g.a.Ac(180 * e / Math.PI, 1)
    }
  }); g.C.Sn = g.C.Ih.extend({
    A: function (a, b) { arguments.callee.ma.apply(this, arguments); this.X('items', a, !0); this.X('content', a, !0); this.X('resolution', b); this.X('centerCoords', b); this.Pp = a },
    Ts: function (a) {
      this.ah(); this.ut(); this.Gm(); this.yl('resolution'); this.yl('centerCoords'); this.yl('render'); this.X('resolution', a); this.X('centerCoords', a); this.X('render', a); this.map.g('movestart', this.bn, this); this.map.g('mapmove', this.bn, this); this.map.g('zoomstart', this.bn, this); this.map.g('click', this.bn, this)
      this.map.g('closeOverlays', this.bn, this); this.map.g('rotate', this.bn, this)
    },
    bn: function () { this.Pp.map && (this.Pp.D = !0, this.Pp.close(), this.Pp.D = !1) },
    mapChanged: function () {},
    positionChanged: function () { this.Gm() },
    renderChanged: function () { this.Gm() },
    ah: function () { this.K && (this.K.parentNode && this.K.parentNode.removeChild(this.K), this.K = null); var a = g.j.create('div', null, 'amap-menu'); g.F.g(a, 'mousedown', function (a) { g.F.stopPropagation(a) }, this); this.K = a; this.map.Wa.C.appendChild(this.K) },
    ut: function () {
      var a =
this; var b = this.K; b.innerHTML = ''; var c = this.get('content'); if (typeof c === 'object')b.appendChild(c); else if (typeof c === 'string')b.innerHTML = c; else if ((c = this.get('items')) && c.length) { var d = g.j.create('ul', b, 'amap-menu-outer'); c.sort(function (a, b) { return isNaN(a.nK) || isNaN(b.nK) ? 0 : a.nK - b.nK }); for (b = 0; b < c.length; b += 1)(function (b) { var c = b.Pn; var h = b.vb; var k = g.j.create('li', d); k.innerHTML = c; g.F.g(k, 'click', function () { h.call(k); a.Pp.D = !0; a.Pp.close(); a.Pp.D = !1 }, k) })(c[b]) } else this.K.innerHTML = ''
    },
    Gm: function () {
      var a =
this.map; var b = this.K; a && b && (this.map.get('zoom'), b = this.get('position'), b = a.Ls(b), a = b.y, b = b.x, this.K.style.right = '', this.K.style.bottom = '', this.K.style.left = b + 'px', this.K.style.top = a + 'px')
    },
    kg: function () { this.K && (this.map.G('click', this.OBa, this), this.map.Wa.C.removeChild(this.K), this.Pp.ti = !1, this.K = this.Pp.De.map = null, this.map.G('movestart', this.bn, this), this.map.G('zoomstart', this.bn, this), this.map.G('click', this.bn, this), this.map.G('closeOverlays', this.bn, this), this.map.G('rotate', this.bn, this)) },
    visibleChanged: function () { this.K && (this.get('visible') ? this.K.style.display = 'block' : this.K.style.display = 'none') },
    itemsChanged: function () { this.K && this.ut() }
  }); g.C.Ze = g.C.Ih.extend({
    A: function (a, b) { arguments.callee.ma.apply(this, arguments); this.bf('content contentDom position contentU altitude isCustom autoMove showShadow closeWhenClickMap size offset anchor'.split(' '), a); this.X('retainWhenClose', a, !0); a.X('toBeClose', this); this.rf = a },
    Ts: function (a) {
      this.Sna || (this.ah(), this.ut()); this.yl('resolution'); this.yl('centerCoords'); this.yl('render'); this.X('resolution', a); this.X('centerCoords', a); this.X('render', a); this.map = a; a.Wa.C.appendChild(this.cc); this.yV()
      this.Gm(); this.jX(); this.Sna = !0; this.Hna(); this.Qb.q('onAdd', { type: 'onAdd', target: this.Qb })
    },
    ah: function () {
      var a = g.j.create('div'); a.className = 'amap-info'; var b = g.j.create('div', a, 'amap-info-shadowContainer'); var c = g.j.create('div', a); var d = this.get('anchor'); var e = 'amap-info-contentContainer'; d && (e = d + ' amap-info-contentContainer'); d = g.j.create('div', c, e); a.style.position = 'absolute'; c.style.position = 'absolute'; c.style.bottom = '0px'; c.style.left = '0px'; b.style.position = 'absolute'; this.cc = a; this.hg = c; this.IU = b; this.th =
d; this.set('contentDom', this.th, !0)
    },
    ut: function () {
      var a = this.get('contentU'); if (a) {
        var b = this.get('isCustom'); var c = this.th; var d = this.IU; c.innerHTML = ''; var e = null; if (b) { if (typeof a === 'string')c.innerHTML = a; else if (a instanceof Array) for (e = 0; e < a.length; e += 1)c.appendChild(a[e]); else c.appendChild(a); e = c; d.parentNode && d.parentNode.removeChild(d) } else {
          e = 'amap-info-content amap-info-outer'; g.l.Ie && (e += ' amap-info-content-ie8'); e = this.gsa = d = g.j.create('div', c, e); typeof a === 'string' ? d.innerHTML = a : d.appendChild(a)
          this.Una = d; a = g.j.create('a', this.gsa, 'amap-info-close'); a.innerHTML = '\u00d7'; this.lQ = a; a.href = 'javascript: void(0)'; g.l.Wf && (g.F.g(a, 'touchstart', function (a) { g.F.stop(a) }, this), g.F.g(a, 'touchend', function (a) { g.F.stop(a); this.rf.D = !0; this.rf.close(); this.rf.D = !1 }, this), g.F.g(a, 'click', function (a) { g.F.stop(a); this.rf.D = !0; this.rf.close(); this.rf.D = !1 }, this)); g.l.ba || (g.F.g(a, 'mousedown', function (a) { g.F.stop(a) }, this), g.F.g(a, 'click', function (a) { g.F.stop(a); this.rf.D = !0; this.rf.close(); this.rf.D = !1 },
            this)); if (a = this.get('size', !0))a.width !== 0 && (d.style.width = a.width + 'px'), a.height !== 0 && (d.style.height = a.height + 'px'); this.get('anchor'); g.j.create('div', c, g.l.Ie ? 'amap-info-sharp-old' : 'amap-info-sharp'); this.IU.style.display = 'block'
        }g.F.Yxa(e)
      }
    },
    yV: function () {
      var a = this.get('isCustom'); var b = this.get('showShadow'); if (!a && b) {
        var a = this.IU; var b = g.j.qJ(this.th); var c = b.height - 23; var d = b.width; if (g.l.Bi || g.l.sv)c = this.th.childNodes[0].offsetHeight, d = this.th.childNodes[0].offsetWidth + 26; b = 'background-image:url(' + g.r.Gb +
(g.l.Bi ? '/theme/v1.3/iws.gif);' : '/theme/v1.3/iws.png);'); a.innerHTML = ''; var e = []; var f; f = e[1] = {}; f.height = 0.5 * c + 4; f.width = d; f.offsetX = 400; f.offsetY = 16; f.top = -f.height - 10 - 15; f.left = 23; f = e[2] = {}; f.height = e[1].height; f.width = e[1].height; f.offsetX = 1075 - f.width; f.offsetY = e[1].offsetY; f.top = e[1].top; f.left = 23 + e[1].width; f = e[3] = {}; f.height = 10; f.width = 22; f.offsetX = 30; f.offsetY = 445; f.top = -25; f.left = 23 + (g.l.sv || g.l.Bi ? 5 : 0); f = e[4] = {}; f.height = 10; f.width = d / 2 - 15 - e[3].left - e[3].width; f.offsetX = 132; f.offsetY = 445; f.top =
-25; f.left = e[3].left + e[3].width; f = e[5] = {}; f.height = 10; f.width = 70; f.offsetX = 80; f.offsetY = 445; f.top = -25; f.left = e[4].left + e[4].width; f = e[6] = {}; f.height = 10; f.width = d - e[5].left - e[5].width; f.offsetX = 132; f.offsetY = 445; f.top = -25; f.left = e[5].left + e[5].width; f = e[7] = {}; f.height = 10; f.width = 30; f.offsetX = 621; f.offsetY = 445; f.top = -25; f.left = d; f = e[8] = {}; f.height = 15; f.width = 70; f.offsetX = 47; f.offsetY = 470; f.top = -15; f.left = d / 2 - 15; for (c = 1; c <= 8; c += 1) {
          d = g.j.create('div', a), f = [], f.push('position:absolute;'), f.push(b), f.push('top:' +
e[c].top + 'px;'), f.push('left:' + e[c].left + 'px;'), f.push('width:' + e[c].width + 'px;'), f.push('height:' + e[c].height + 'px;'), f.push('background-position:' + -e[c].offsetX + 'px ' + -e[c].offsetY + 'px;'), d.style.cssText = f.join('')
        }
      }
    },
    bIa: function () {},
    Gm: function () {
      var a = this.map; var b = this.cc; var c = this.get('position'); var d = this.get('anchor'); if (a && b && c) {
        a = a.Ls(c, this.get('altitude')); d && (this.th.className = d + ' amap-info-contentContainer'); var e = g.j.qJ(this.th); if (g.l.Bi || g.l.sv)e.width = this.th.childNodes[0].offsetWidth + 14
        b = e.height; c = this.get('offset'); this.get('isCustom'); e = e.width; this.cc.style.left = Math.round(a.x - e / 2 + (c.x || 0)) + 'px'; this.cc.style.top = Math.round(a.y + (c.y || 0)) + 'px'; if (d) {
          var f; d == 'center' ? (d = 'center', f = 'middle') : (f = d.split('-'), d = f[1], f = f[0]); switch (f) { case 'middle':this.cc.style.top = Math.round(a.y + b / 2 + (c.y || 0)) + 'px'; break; case 'top':this.cc.style.top = Math.round(a.y + b + (c.y || 0)) + 'px' } switch (d) {
            case 'left':this.cc.style.left = Math.round(a.x + (c.x || 0)) + 'px'; break; case 'right':this.cc.style.left = Math.round(a.x -
e + (c.x || 0)) + 'px'
          }
        }d = this.Una; if (this.lQ && d.childNodes[0]) { for (b = a = 0; b < d.childNodes.length; b += 1)a += d.childNodes[0].clientHeight || 0; a > (this.get('size').height || d.clientHeight) ? this.lQ.style.right = '20px' : this.lQ.style.right = '5px' }
      }
    },
    vda: function () {
      var a = new g.H(2 - this.th.offsetWidth / 2, 2 - this.th.offsetHeight); var b = this.get('offset') || new g.H(0, 0); var c = this.get('anchor'); if (c) {
        var a = this.th.offsetWidth; var d = this.th.offsetHeight; var e; var f; var h = 2 - a / 2; var k = 2 - d; c && (c = c.split('-'), c.length === 2 ? (e = c[1], f = c[0]) : c.length === 1 && c[0] ===
'center' && (e = 'center', f = 'middle')); switch (e) { case 'left':h = 2; break; case 'right':h = -a } switch (f) { case 'middle':k = -d / 2; break; case 'top':k = -2 }a = new g.H(h, k)
      } this.get('isCustom') || (a = a.add(new g.H(0, -23))); return a.add(b)
    },
    altitudeChanged: function () { this.Gm() },
    jX: function () {
      if (this.get('position') && this.get('autoMove') && this.th) {
        for (var a = this.map, b = new g.xd(this.th.offsetWidth, this.th.offsetHeight), c = a.Ls(this.get('position'), this.get('altitude')).add(this.vda()), d = c.add(b.QE()), e = a.get('size'), f = a.pqa(),
          h = 0, k = 0, l = 0; l < f.length; l += 1) { var m = f[l]; var n = 0; var p = 0; m[1] === 0 && m[2] === 0 ? (n = m[3] - (c.x + h), p = m[0] - (c.y + k), n > 0 && p > 0 && (Math.abs(n) < Math.abs(p) ? h += n : k += p)) : m[2] === 0 && m[3] === 0 ? (n = e.yj() - m[1] - (d.x + h), p = m[0] - (c.y + k), n < 0 && p > 0 && (Math.abs(n) < Math.abs(p) ? h += n : k += p)) : m[0] === 0 && m[3] === 0 ? (n = e.yj() - m[1] - (d.x + h), p = e.vj() - m[2] - (d.y + k), n < 0 && p < 0 && (Math.abs(n) < Math.abs(p) ? h += n : k += p)) : m[0] === 0 && m[1] === 0 && (n = m[3] - (c.x + h), p = e.vj() - m[2] - (d.y + k), n > 0 && p < 0 && (Math.abs(n) < Math.abs(p) ? h += n : k += p)) }c = c.add(new g.H(h, k)); d = d.add(new g.H(h,
          k)); l = f = 0; c.x < 0 || b.yj() > e.yj() ? f = 20 - c.x : e.yj() < d.x && (f = e.yj() - d.x - 25); c.y < 0 || b.vj() > e.vj() ? l = 5 - c.y : e.vj() < d.y && (l = e.vj() - d.y - 15); f += h; l += k; if (f || l)a.B.D = !0, a.B.panBy(f, l), a.B.D = !1
      }
    },
    Hna: function () { this.get('closeWhenClickMap') && (this.map.g('clickstart', this.s_, this, !1), this.map.g('clickend', this.r_, this, !1)) },
    s_: function () { this.rf.ti && (this.rf.D = !0, this.rf.getIsOpen() && (this.rf.lL = !0), this.rf.D = !1) },
    r_: function () { this.rf.ti && (this.rf.lL && (this.rf.D = !0, this.rf.close(), this.rf.D = !1), this.rf.lL = !1) },
    kg: function () { this.cc && this.map && (this.rf.lL = !1, this.get('closeWhenClickMap') && (this.map.G('clickstart', this.s_, this), this.map.G('clickend', this.r_, this)), this.get('retainWhenClose') ? this.map.Ml.appendChild(this.cc) : (this.cc.parentNode === this.map.Wa.C && this.map.Wa.C.removeChild(this.cc), this.rf.C = null), this.map = null, this.rf.ti = !1, this.Qb.q('close', { type: 'close', target: this.Qb })) },
    YBa: function () {
      if (!this.get('isCustom')) return this.th.offsetWidth; for (var a = this.ji, b = a.firstChild, c = a.lastChild; b && c &&
b.style && c.style && b === c;)a = b, b = a.firstChild, c = a.lastChild; a = g.j.Vc(a, 'width'); return a = parseInt(a.replace('px', ''), 10)
    },
    renderChanged: function () { this.Gm() },
    positionChanged: function () { this.map && this.cc && (this.Gm(), this.jX()) },
    anchorChanged: function () { this.positionChanged() },
    offsetChanged: function () { this.positionChanged() },
    contentChanged: function () { this.ut(); this.yV(); this.Gm() },
    sizeChanged: function () { this.ut(); this.yV(); this.Gm() }
  }); g.Aa = {}
  g.Aa.Qe = g.ca.extend({
    ka: [g.va, g.$e],
    A: function () {},
    dv: function () { var a = this.Jd(); a.sh || (a.sh = g.I.zi(a)); return a.sh },
    cb: function () { return new this.A(this.za) },
    vR: function () { return this.za },
    setCoords: function (a) { this.M8(a) },
    M8: function (a) {
      this.Lv = this.Jd(); this.Bg = null; if (g.Aa.up && this instanceof g.Aa.up) { var b = a.length; this.ee = this.ee.slice(0, b); for (var c = 0; c < b; c += 1) if (this.ee[c]) this.ee[c].M8(a[c]); else { var d = new g.Aa.Ec(a[c]); this.ee[c] = d } } else if (g.Aa.Ec && this instanceof g.Aa.Ec) {
        b = a.length; this.Tf =
Array(b); for (var e, c = 0; c < b; c += 1) if (d = a[c], e = new g.Aa.VL(d), this.Tf[c] = e, c === 0) { if (d.length === 0) break; e.rq(d) || d.reverse() } else d.length !== 0 && e.rq(d) && d.reverse()
      } else this.za = a
    }
  }); g.Aa.Re = g.extend({}, { Uw: 'point', RL: 'linestring', mW: 'linearring', GF: 'polygon', bM: 'multipoint', aM: 'multilinestring', CF: 'multipolygon', CAa: 'geometrycollection' }); g.di = g.ca.extend({
    ka: [g.va, g.$e],
    A: function (a) { a = a || {}; a.yB && (this.yB = a.yB); a.WN && (this.WN = a.WN); a.CZ && (this.CZ = a.CZ); this.map = a.map; this.fm = a.xN || g.a.xb(this); this.name = a.name || ''; this.pe = !1; this.set('visible', !0, !0); this.AU(a.W); this.vl = a.hL; this.style = a.style },
    Loa: function () { this.name = this.map = null; this.style = this.vl = this.Ir = this.Z5 = this.W = this.W.Pa = null; this.zl(); this.wi() },
    kra: function () { return this.vl },
    Dxa: function (a) { this.vl = a; this.zIndex = this.vl[0].Jk || this.zIndex },
    fc: function () { return this.W },
    AU: function (a) { a && (this.W = a, this.X('coords', a, !0), this.yB || this.WN) && (a.X('radius', this), a.X('center', this), a.X('resolution', this), a.X('strokeWeight', this)) },
    setStyle: function (a) { this.Dxa(a); this.ss() },
    coordsChanged: function () { this.ss() },
    radiusChanged: function () { this.W.Lv = this.W.Jd(); this.W.Bg = null; this.ss() },
    ss: function (a) { this.set('feature', { target: this, Boa: a, Lv: this.W.Lv || this.W.Jd(), nua: this.W.Jd() }); this.W.Lv = this.W.Jd() },
    visibleChanged: function () { this.ss() },
    GEa: function (a) {
      for (var b = 0; b < this.vl.length; b +=
1) { var c = this.vl[b]; if (a.gb(c.ty(this))) return c }
    },
    xqa: function () {
      var a = this.fc(); var b = []; a.Ai() === g.Aa.Re.GF || a.Ai() === g.Aa.Re.CF ? b.push(new g.style.Be.Ec({ fillColor: '#78cdd1', ge: 0.2, strokeColor: '#122e29', ob: 0.5, rc: 1 })) : a.Ai() === g.Aa.Re.RL || a.Ai() === g.Aa.Re.mW || a.Ai() === g.Aa.Re.aM ? b.push(new g.style.Be.tp({ color: '#888888', width: 1, zIndex: 10 })) : a.Ai() !== g.Aa.Re.Uw && a.Ai() !== g.Aa.Re.bM || b.push(new g.style.Be.fi({ url: g.r.Gb + '/theme/v1.3/markers/0.png', width: 36, height: 36, rotation: 0, tIa: -12, vIa: -36, zIndex: 100 }))
      return b
    }
  }); g.di.xAa = 'geometry'; g.Aa.Pg = g.Aa.Qe.extend({ A: function (a, b) { this.za = a; this.kk = b; this.Bg = null }, Jd: function () { if (!this.Bg) { var a = this.za[0]; var b = this.za[1]; if (this.kk) this.Bg = [a, b, a, b]; else { var c = this.get('radius'); var d = this.get('resolution') * this.get('strokeWeight') || 0; var c = c ? c / Math.cos(Math.PI * this.get('center').Q / 180) : 0; this.Bg = [a - c - d, b - c - d, a + c + d, b + c + d] } } return this.Bg }, Ai: function () { return g.Aa.Re.Uw } }); g.M = { canvas: {}, $d: {}, Ye: {}, Me: {} }; g.M.Xb = g.ca.extend({
    ka: [g.va, g.$e],
    A: function (a, b) { this.f = a; this.kk = a.S.kk; this.J = b; this.e = b.e; this.X('display', b) },
    ak: function () { this.Fq && this.Fq(); this.zl(); this.e = this.J = this.f = null },
    fv: function (a, b, c, d) {
      var e = this.zoom; c = []; var f = this.f; if (Math.floor(e) !== e)b(c, f); else {
        a = [a.x, a.y]; if (f.nm) {
          for (var e = f.fh, h = !0, k = [], l = 0; l < e.length; l += 1) {
            var m = e[l].Xg; if (m) {
              if (m.parentNode && m.parentNode.parentNode && this.J && m.parentNode.parentNode !== this.J.Ml && m.parentNode.style.display !== 'none') {
                var n = g.j.Io(m); var m =
n[0]; var n = n[1]; if (m && n) { var p = Math.max(Math.abs(e[l].get('offset').x), Math.abs(e[l].get('offset').y)) + Math.max(m, n); f.Bf = Math.max(f.Bf, p); f.mg = Math.max(f.mg, p); e[l].width = m; e[l].height = n } else h = !1, k.push(e[l])
              } else h = !1, k.push(e[l])
            }
          }h ? (f.nm = !1, f.fh = []) : f.fh = k
        }e = Math.max(f.Bf, f.sz || 0) * this.T; h = Math.max(f.mg, f.sz || 0) * this.T; k = 0; f.rz && (k = f.rz / Math.cos(Math.PI * this.e.get('center').Q / 180)); h = Math.max(h, k || 0); e = Math.max(e, k || 0); if (e = f.yn([a[0] - e, a[1] - h, a[0] + e, a[1] + h])) {
          for (var q in e) {
            if (e.hasOwnProperty(q) &&
(h = e[q], h.get('visible') && !h.get('noSelect'))) {
              if (k = h.fc(), k instanceof g.Aa.Pg) {
                if (this.kk) {
                  l = this.f.Em; l instanceof Array && (l = typeof h.hb.style === 'number' && l[h.hb.style] ? l[h.hb.style] : l[0]); var m = l.size.width * this.T; var n = l.size.height * this.T; var p = l.anchor.x * this.T; var r = l.anchor.y * this.T; var k = k.za; var s = l.rotation_; var u = [a[0], a[1]]; if (s) { var v = (a[0] - k[0]) / this.T; var w = (a[1] - k[1]) / this.T; var t = s; var s = Math.cos(-t); var x = Math.sin(-t); var t = v * s - w * x; var v = v * x + w * s; u[0] = k[0] + t * this.T; u[1] = k[1] + v * this.T }m = g.I.UP([[u[0] - m + p, u[1] - n + r], [u[0] + p, u[1] +
r]]); g.I.Sd(m, k) && c.push(h)
                } else if (typeof k.get('radius') !== 'undefined')l = k.za, l = new g.H(l[0], l[1]), m = new g.H(a[0], a[1]), k = k.get('radius'), h.get('unit') === 'px' ? m.He(l) / Math.pow(2, 20 - this.zoom) < k && c.push(h) : m.He(l) * Math.cos(h.get('center').Q * Math.PI / 180) <= k / this.zq * Math.pow(2, 20 - this.zoom) && c.push(h); else if (h.Qp == 'AMap.Text')l = h.get('params'), l.visible && h.fa && g.j.ID(d, h.fa, 'amap-markers') && c.push(h); else {
                  if (l = h.get('params'), l.visible && h.fa) {
                    if (l.shape) {
                      for (k = k.za, s = l.Op % 360, u = [a[0], a[1]], s && (v = (a[0] -
k[0]) / this.T, w = (a[1] - k[1]) / this.T, t = Math.PI * s / 180, s = Math.cos(-t), x = Math.sin(-t), t = v * s - w * x, v = v * x + w * s, u[0] = k[0] + t * this.T, u[1] = k[1] + v * this.T), m = h.width * this.T, n = h.height * this.T, p = l.offset.x * this.T, r = l.offset.y * this.T, m = g.I.UP([[u[0] - m - p, u[1] - n - r], [u[0] - p, u[1] - r]]), k[0] instanceof Array || (k = [k]), n = k.length - 1; n >= 0; n -= 1) { if (g.I.Sd(m, k[n])) { l.shape ? this.HD(h, u, k) && c.push(h) : c.push(h); break } }
                    } else g.j.ID(d, h.fa, 'amap-markers') && c.push(h)
                  }
                }
              } else {
                k.Sd ? k.Sd(a) && c.push(h) : k.By && 1.8 * k.By(a) <= h.get('strokeWeight') *
this.T && c.push(h)
              }
            }
          } this.kk ? c.sort(function (a, b) { return a.fm > b.fm ? -1 : 1 }) : c.sort(function (a, b) { return a.get('isTop') ? -1 : b.get('isTop') ? 1 : a.get('zIndex') > b.get('zIndex') || a.get('zIndex') === b.get('zIndex') && a.fm > b.fm ? -1 : 1 }); b(c, f)
        } else b([], f)
      }
    },
    HD: function (a, b, c) {
      var d = (b[0] - c[0][0]) / this.T; b = (b[1] - c[0][1]) / this.T; a = a.get('params'); c = a.offset; var d = [d - c.x, b - c.y]; var e; a = a.shape; if (a.w.type === 'circle') { if (b = a.w.coords[0], c = a.w.coords[1], Math.sqrt((d[0] - b) * (d[0] - b) + (d[1] - c) * (d[1] - c)) <= a.w.coords[2]) return !0 } else {
        if (a.w.type ===
'poly') return e = a.w.coords, e = this.kI(e), g.wd.Sd(d, e); if (a.w.type === 'rect') return e = a.w.coords, a = e[0], b = e[1], c = e[2], e = e[3], e = [[a, b], [c, b], [c, e], [a, e]], g.wd.Sd(d, e)
      } return !1
    },
    kI: function (a) { for (var b = [], c = 0; c / 2 < a.length / 2; c += 2)b.push([a[c], a[c + 1]]); return b },
    b4: function (a, b, c, d, e, f, h) {
      var k = ['position:absolute;']; k.push('top:' + Math.round(c) + 'px;'); k.push('left:' + Math.round(b) + 'px;'); k.push('width:' + Math.round(d) + 'px;'); k.push('height:' + Math.round(e) + 'px;'); f < 1 && ('opacity' in a.style ? (k.push('opacity'),
      k.push(':'), k.push(f), k.push(';')) : document.documentMode >= 8 ? (k.push("-ms-filter:'progid:DXImageTransform.Microsoft.Alpha(opacity="), k.push(Math.ceil(100 * f)), k.push(")';")) : (k.push('filter:alpha(opacity='), k.push(Math.ceil(100 * f)), k.push(');'))); k.push('z-index:' + h + ';'); k.join(''); g.j.N8(a, k.join(''))
    }
  }); g.M.Ob = g.ca.extend({
    ka: [g.va, g.$e],
    A: function (a) { this.e = a; this.type = '2D'; this.Hj = g.a.Ac(a.get('zoom'), 1); this.Ml = a.Ml; this.K = a.Wa.o; this.X('display', a); this.X('rotateEnable', a); this.X('style', a); this.X('zoom', a); this.X('hightlight', a) },
    mT: function (a) { this.Ee = a || g.a.$k('ff' + this.e.Ee.slice(1)) },
    fv: function (a, b, c, d, e) {
      function f (a, d) { a.length && (k[g.a.indexOf(b, d)] = a); l -= 1; l <= 0 && (c(k), l = 0) } for (var h = b.length, k = [], l = 0, m, n = [], p = 0; p < h; p += 1) {
        m = b[p], m instanceof g.o.ed && m.get('visible') && (n.push(this.zs(m)),
        l += 1)
      } for (h = 0; h < n.length; h += 1)n[h].fv(a, f, d, e)
    }
  }); g.N2 = {
    oD: function (a, b, c) { for (var d = null, e = null, f = 0, h = 0, k = 0, l = b.length; k < l; k++) { var m = b[k]; if (m < a)d = c[m], f = m; else { e = c[m]; h = m; break } }d === null ? (d = e, f = h) : e === null && (e = d, h = f); return { Iz: f, eK: h, Kq: d, XD: e } },
    nra: function (a) { var b = this; var c = g.a; var d = []; var e = {}; c.Rb(a.nodes, function (a) { !1 !== a.value && a.value !== null && (e[a.zoom] = g.r.pc + '://' + a.value, d.push(a.zoom)) }); return function (a) { a = c.Ac(a, 1); void 0 === e[a] && (e[a] = b.oD(a, d, e).Kq); return e[a] } },
    Uqa: function (a) {
      var b = this; var c = g.a; var d = []; var e = {}; var f = a.transitional; c.Rb(a.nodes,
        function (a) { a.value !== null && !1 !== a.value && (e[a.zoom] = a.value, d.push(a.zoom)) }); return function (a) { a = c.Ac(a, 1); if (void 0 === e[a]) { var k = b.oD(a, d, e); e[a] = f && f !== 'none' && k.eK !== k.Iz && k.Kq !== k.XD ? c.z4(k.Kq, k.XD, (a - k.Iz) / (k.eK - k.Iz), f) : k.Kq } return e[a] }
    },
    fqa: function (a) { var b = this; var c = g.a; var d = []; var e = {}; c.Rb(a.nodes, function (a) { a.value !== null && (e[a.zoom] = a.value, d.push(a.zoom)) }); return function (a) { a = c.Ac(a, 1); void 0 === e[a] && (e[a] = b.oD(a, d, e).Kq); return e[a] } },
    h4: function (a) {
      var b = this; var c = g.a; var d = []; var e = {}; c.Rb(a.nodes,
        function (a) { a.value !== null && (e[a.zoom] = a.value, d.push(a.zoom)) }); return function (a) { a = c.Ac(a, 1); void 0 === e[a] && (e[a] = b.oD(a, d, e).Kq); return e[a] }
    },
    nqa: function (a, b, c) {
      var d = this; var e = g.a; var f = []; var h = {}; var k = a.transitional; e.Rb(a.nodes, function (a) { a.value && (h[a.zoom] = e.cma(a.value, c ? 'rgba' : 'webgl'), f.push(a.zoom)) }); return function (a) {
        var b = null; a = e.Ac(a, 1); if (void 0 === h[a]) {
          var b = d.oD(a, f, h); var n = b.Kq; if (k && k !== 'none' && b.Iz !== b.eK && b.Kq.join('') !== b.XD.join('')) {
            for (var n = n.slice(0), p = (a - b.Iz) / (b.eK - b.Iz), q = 0, r =
b.XD.length; q < r; q++)n[q] = e.z4(b.Kq[q], b.XD[q], p, k)
          } h[a] = n
        }b = h[a]; return c && b ? 'rgba(' + b.join(',') + ')' : b || ''
      }
    },
    Dz: function (a, b, c, d) { var e = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}; var f; for (f in c) if (c.hasOwnProperty(f)) { var h = c[f]; void 0 !== b[h] ? (b[h].nodes && b[h].nodes.length > 1 && b[h].nodes.sort(function (a, b) { return a.zoom - b.zoom }), a[f] = e.ysa ? { Ye: d.call(this, b[h], c[f]), canvas: d.call(this, b[h], c[f], !0) } : d.call(this, b[h], c[f])) : e.xsa && (a[f] = !0) } },
    Rr: function (a, b) {
      for (var c = [], d = 0, e = a.length; d <
e; d += 2) { var f = 0; var f = b === 'str' ? g.a.Ac(parseInt(a.substr(d, 2), 16) / (d === 0 ? 255 : 1), 3) : g.a.Ac(parseInt(a.substr(d, 2), 16) / 255, 3); c.push(f) } return c.length ? (c.push(c.shift()), b === 'str' ? 'rgba(' + c.join(',') + ')' : c) : ''
    },
    v7: function (a, b, c) {
      if (b[c])console.log('customType repeat!!', c); else {
        var d = {}; var e = { visible: 'visible', KU: 'showLabel', xk: 'showIcon' }; var f = [['color', { color: 'color' }, { opacity: 'opacity' }], ['fillColor', { fillColor: 'fillColor' }, { ge: 'fillOpacity' }], ['strokeColor', { strokeColor: 'strokeColor' }, { ob: 'strokeOpacity' }],
          ['textFillColor', { jya: 'textFillColor' }, { kya: 'textFillOpacity' }], ['textStrokeColor', { mya: 'textStrokeColor' }, { nya: 'textStrokeOpacity' }], ['backgroundColor', { backgroundColor: 'backgroundColor' }, { lma: 'backgroundOpacity' }]]; var h = { fontSize: 'fontSize' }; var k = { fillWidth: 'fillWidth', strokeWidth: 'strokeWidth' }; if (a.styles) {
          a = a.styles; this.Dz(d, a, e, this.fqa, { xsa: !0 }); this.Dz(d, a, h, this.h4, { Msa: !0 }); this.Dz(d, a, k, this.h4, { Msa: !0 }); h = 0; for (k = f.length; h < k; h++) {
            var l = f[h]; a[l[0]] ? this.Dz(d, a, l[1], this.nqa, { ysa: !0 }) : this.Dz(d,
              a, l[2], this.Uqa)
          }a.texture && (this.Dz(d, a, { Ta: 'texture' }, this.nra), d.nd = [], g.a.Rb(a.texture.nodes, function (a) { a.value && d.nd.push(g.r.pc + '://' + a.value) }))
        } else {
          for (var m in e) if (e.hasOwnProperty(m)) { var n = e[m]; d[m] = void 0 === a[n] ? !0 : a[n] }e = 0; for (m = f.length; e < m; e++) { var p = f[e]; var n = g.a.keys(p[1])[0]; var q = p[1][n]; var r = g.a.keys(p[2])[0]; var p = p[2][r]; void 0 !== a[q] ? d[n] = { canvas: this.Rr(a[q], 'str'), Ye: this.Rr(a[q]) } : d[r] = a[p] } for (l in h)h.hasOwnProperty(l) && void 0 !== a[l] && (d[l] = a[l]); for (var s in k) {
            k.hasOwnProperty(s) &&
void 0 !== a[s] && (d[s] = a[s])
          }a.texture && (d.Ta = g.r.pc + '://' + a.texture)
        }b[c] = d
      }
    },
    BT: function (a, b, c, d) { if (a) for (var e in a) if (a.hasOwnProperty(e) && g.a.jk(a[e], 'object')) { var f = a[e]; var h = e; c && (h = c + ':' + e); if (f.detailedType) this.v7(f, b, h), this.BT(f.detailedType, b, h, f); else if (f.subType) this.BT(f.subType, b, h); else { if (void 0 !== f.code) { for (var k in d)d.hasOwnProperty(k) && !g.a.ka(['isDetailed', 'detailedType', 'styles'], k) && void 0 === f[k] && void 0 !== d[k] && (f[k] = d[k]); h = c + ':' + f.code } this.v7(f, b, h) } } },
    vV: function (a) {
      if (!this.cq ||
this.cq.zoom != a) { var b = g.a.Sh; var c = { zoom: a }; var d; for (d in this.Mf) if (this.Mf.hasOwnProperty(d)) { var e = this.Mf[d]; c[d] = {}; for (var f in e) if (e.hasOwnProperty(f)) { var h = e[f]; h ? h.Ye ? (c[d][f] = {}, b(h.Ye) ? c[d][f].Ye = h.Ye(a) : c[d][f].Ye = h.Ye, b(h.canvas) ? c[d][f].canvas = h.canvas(a) : c[d][f].canvas = h.canvas) : b(h) ? c[d][f] = h(a) : c[d][f] = h : c[d][f] = h } } this.cq = c }
    },
    styleChanged: function () {
      if (this.e.B.Di) {
        var a = this.get('style'); this.lm.TA || (this.lm = g.a.bind(this.lm, this), this.iq = g.a.bind(this.iq, this), this.lm.TA = !0); var b =
g.a; if (a) { var c = {}; this.BT(a, c); this.Mf = c } else this.Mf = null; var d, e, f, h; this.Mf && (d = this.Mf['regions:land'], e = this.Mf.water, f = this.Mf.sky, h = this.Mf.buildings); var k; var l; var m; var n; var p; var a = this.Hj; if (d) { c = 'rgba(0, 0, 0, 0)'; if (d.visible) { var q = this.iq(b.v8(this.e.Ee.substr(1)), d.opacity, d.color, !0, a); q && (c = this.qA(q, d.visible, 'rgba(0, 0, 0, 0)'), q = this.lm(b.dt(this.e.Ee.substr(1)), d.opacity, d.color, !0, a), k = this.qA(q, d.visible)) } this.e.Mu = c } else this.e.Mu = ''; e && e.visible && (l = this.lm(b.dt(this.e.OH.substr(1)), e.opacity,
          e.color, !0, a), l = this.qA(l, e.visible)); f && f.visible && (m = this.lm(b.dt(this.e.eC.substr(1)), void 0, f.color, !0, a), m = this.qA(m, f.visible)); h && (h.visible ? (n = this.lm(b.$k(this.e.XF[0]), void 0, h.fillColor, !0, a), n = this.qA(n, h.visible), p = this.lm(b.$k(this.e.XF[1]), void 0, h.strokeColor, !0, a), p = this.qA(p, h.visible)) : (n = [1, 1, 1, 0], p = [1, 1, 1, 0])); this.mT && this.mT(k, l, m, [n, p]); this.m$ ? this.m$(this.Mf) : this.set('display'); delete this.cq; this.vV(a)
      }
    },
    qA: function (a, b) {
      var c = arguments.length > 2 && void 0 !== arguments[2]
        ? arguments[2] : [0, 0, 0, 0]; var d = g.a.Sh; if (d(a) && d(b)) { var e = a; a = function (a) { return b(a) ? e(a) : c } } return a
    },
    iq: function (a, b, c, d, e) { if (a) { if (void 0 !== b) return a = a.split(','), c = b, typeof b === 'function' && (c = b(e)), a[3] = g.a.Ac(c, 3) + ')', a.join(','); if (c) return typeof c.canvas === 'function' ? d ? c.canvas : c.canvas(e) : c.canvas } return a },
    lm: function (a, b, c, d, e) { if (a) { if (b) return c = b, typeof b === 'function' && (c = b(e)), [a[0], a[1], a[2], g.a.Ac(c, 3)]; if (c) return typeof c.Ye === 'function' ? d ? c.Ye : c.Ye(e) : c.Ye } return a },
    lJ: function (a,
      b, c) { var d = this.Mf; if (d) { this.cq && c && c == this.cq.zoom && (d = this.cq); if (b || b === 0) if (b = d[a + ':' + b]) return b; return d[a] } },
    jm: function (a, b, c, d, e) {
      var f = null; var h = a; d = d ? this.iq : this.lm; e = e || this.Hj; if (f = this.lJ(b, void 0, e)) {
        if (typeof f.visible === 'function' && !f.visible(e) || !1 === f.visible)h = ''; else {
          var h = 1; var k = ''; if (c) if (f.fillColor || f.ge)h = f.ge, k = f.fillColor; else { if (f.color || f.opacity)h = f.opacity, k = f.color } else if (f.strokeColor || f.ob)h = f.ob, k = f.strokeColor; else if (f.color || f.opacity)h = f.opacity, k = f.color; h = d(a,
            h, k, !1, e)
        }
      } this.Cs === b && (h = this.gv(h || a)); return h
    },
    Vc: function (a, b, c) { var d = this.Mf; if (d) { this.cq && c && c == this.cq.zoom && (d = this.cq); if (b || b === 0) if (b = d[a + ':' + b]) return b; return d[a] } },
    kv: function (a, b) { var c = null; return c = this.Vc(a, void 0, b || this.Hj) },
    xs: function (a, b, c, d) { c = c ? this.iq : this.lm; var e = null; var f = a; d = d || this.Hj; (e = this.lJ(b, void 0, d)) && (f = typeof e.visible === 'function' && !e.visible(d) || !1 === e.visible ? '' : c(a, e.opacity, e.color, !1, d)); this.Cs === b && (f = this.gv(f || a)); return f },
    My: function (a, b, c, d, e,
      f) {
      var h = a; var k = b; var l = c; var m = !0; var n = !0; var p; var q = 1; f = f || this.Hj; var r = this.lJ(d, e, f); r && (typeof r.visible === 'function' && !r.visible(f) || !1 === r.visible || typeof r.KU === 'function' && !r.KU(f) || !1 === r.KU ? (n = m = !1, h = k = l = '') : (h = this.iq(a, r.kya, r.jya, !1, f), k = this.iq(b, r.nya, r.mya, !1, f), l = this.iq(c, r.lma, r.backgroundColor, !1, f), m = typeof r.xk === 'function' ? r.xk(f) : r.xk, r.fontSize && (p = typeof r.fontSize === 'function' ? r.fontSize(f) : r.fontSize, p = p >= 12 ? p : 12, p = p <= 22 ? p : 22), p && g.l.Lc && (p *= 2))); f = !1; this.Cs === d ? f = !0 : void 0 !== e && this.Cs ===
d + '-' + e && (f = !0); f && (h = this.gv(h || a), k = this.gv(k || b), l = this.gv(l || c), q = 1 - 1.6 * this.AD, n = m = !0); return [h, k, l, m, n, q, p]
    },
    Ly: function (a, b, c, d, e) { var f = null; var h = a; var k = b; d = d ? this.iq : this.lm; var l = e || this.Hj; if (f = this.lJ(c, void 0, e)) typeof f.visible === 'function' && !f.visible(l) || !1 === f.visible ? h = k = '' : (h = d(a, f.ge, f.fillColor, !1, l), k = d(b, f.ob, f.strokeColor, !1, l)); this.Cs === c && (b = k || b, h = this.gv(h || a), k = this.gv(b)); return [h, k] }
  }; g.M.Ob.Db(g.N2); g.M.canvas.Ob = g.M.Ob.extend({
    A: function (a) { arguments.callee.ma.apply(this, arguments) },
    zs: function (a) { if (!a.M) { var b = a.$l(this); b && !b.eoa && (a.M = b) } return a.M },
    qc: function (a) {
      var b = this.e.I3(); b && this.VT !== b && this.e.B.Di && (this.e.L8(b), this.VT = b); this.e.Wa.Xr.style.cssText = ''; var c = a.la; var b = a.P; var d = this.e.B.get('features'); var e = a.size.width; var f = a.size.height; this.Hj = this.e.B.De.baseRender === 'vw' ? g.a.Ac(b.zoom, 1) : a.P.je; this.T = b.T; if (!this.Ma || Math.abs(b.lb.x - this.Ma.x) / this.T > 1E4 || Math.abs(b.lb.y - this.Ma.y) /
this.T > 1E4) this.Ma = b.lb; this.Ma.x - b.lb.x < -g.a.Fa / 2 ? this.Ma = new g.H(this.Ma.x + g.a.Fa, this.Ma.y) : this.Ma.x - b.lb.x > g.a.Fa / 2 && (this.Ma = new g.H(this.Ma.x - g.a.Fa, this.Ma.y)); for (var h = 0; h < c.length; h += 1) {
        var k = c[h]; var l = this.zs(k); var m = c[h].he(); if (l && l.f) {
          if (!m.visible || k.YD || m.bb[0] > b.zoom || m.bb[1] < b.zoom || k.ga && k.ga.length === 0) { if (l = l.wj()) if (l.length) for (m = 0; m < l.length; m += 1)l[m].parentNode === this.K && this.K.removeChild(l[m]); else l.parentNode === this.K && this.K.removeChild(l) } else if (this.KJ(k, d)) {
            l.qc(a, m); l.um &&
(a.re = l.re); var k = l.wj(); var n; var p; var q = l.transform; if (!q || !k || l.dh && !this.e.B.La)c[h].Aj && k.parentNode !== this.K && (this.K.appendChild(k), c[h].Kb = k); else {
              c[h].Kb = k; k.length || (k = [k], q = [q]); for (var r = 0; r < k.length; r += 1) {
                if (n = k[r], p = q[r], !p.Zy) {
                  var s = p.translate.x; var u = p.translate.y; c[h].JJ || (s = g.a.Ac(s, 2), u = g.a.Ac(u, 2)); var v = p.scale; Math.abs(s) < 1E-5 && (s = 0); Math.abs(u) < 1E-5 && (u = 0); var w = []; w.push('position:absolute'); w.push('z-index:' + (p.Jk || c[h].get('zIndex'))); c[h].ZC ? (w.push('top:' + Math.floor(f / 2 + u) + 'px'), w.push('left:' +
Math.floor(e / 2 + s) + 'px')) : n.E5 ? (w.push('height:' + n.height * v + 'px'), w.push('width:' + n.width * v + 'px'), w.push('top:' + (f / 2 - u * v) + 'px'), w.push('left:' + (e / 2 - s * v) + 'px')) : (v !== 1 && (w.push(g.j.pt[g.j.tg] + '-origin:' + s + 'px ' + u + 'px'), w.push(g.j.pt[g.j.tg] + ':scale3d(' + v + ',' + v + ',1)')), w.push('top:' + Math.floor(f / 2 - u) + 'px'), w.push('left:' + Math.floor(e / 2 - s) + 'px'), l.mk && (w.push('height:' + n.height + 'px'), w.push('width:' + n.width + 'px'))); l.JJ || m.opacity === 1 || typeof m.opacity !== 'number' || w.push(g.j.j4(n, m.opacity)); n.parentNode !==
this.K && this.K.appendChild(n); g.j.N8(n, w.join(';'))
                }
              }
            }
          }
        }
      }a = this.e.Wa.Xr; k = this.e.Wa.o; c = this.e.Wa.C; g.j.tg && typeof b.rotation === 'number' && b.rotation !== 0 ? (a.style[g.j.tg + 'Origin'] = e / 2 + 'px ' + f / 2 + 'px', a.style[g.j.tg] = 'rotate(' + b.rotation + 'deg)', a.style.overflow = 'visible', k.style.overflow = 'visible', c.style.overflow = 'visible') : (a.style.cssText = '', k.style.cssText = '-webkit-transform: translateZ(0);', c.style.cssText = ''); this.e.it = !1
    },
    KJ: function (a, b) {
      if (b === 'all' || void 0 === a.Wl) return !0; for (var c = 0, d = a.Wl.length; c <
d; c++) if (g.a.ka(b, a.Wl[c] === 'region' ? 'bg' : a.Wl[c])) return !0; return !1
    },
    zoomChanged: function () { var a = this.e.get('zoom'); this.Hj = this.e.B.De.baseRender === 'vw' ? g.a.Ac(a, 1) : Math.round(a); this.Mf && this.vV(this.Hj) }
  }); g.M.Ti = g.M.Xb.extend({
    A: function (a, b) { arguments.callee.ma.apply(this, arguments); this.X('reload', a, !0); var c = a.S.get('cacheSize'); if (this.e && this.e.B) { var d = this.e.B.get('tileCacheSize'); d && d > 0 && (c = d) } this.oa = new g.sg(c); var e = this; this.oa.mK.C1(function (a) { e.eB(a) }); this.oa.zC = function (a) { return a.Nb ? (a.Nb.ij -= 1, a.Nb.ij == 0 && (a.zv = !1), delete a.Nb, !0) : a.zv ? a.ij ? !1 : !0 : !0 }; this.gd = 1; this.Yn = 50; this.lX = !0; this.f.oa = this.oa; this.rm = new g.yF(6, null, a.XQ); new g.yF(5, null, a.XQ) },
    Fq: function () {
      this.clear()
      this.Mg = null; this.oa.clear(); this.oa.zC = null; this.oa = this.oa.mK.TF = null; this.Mc && (this.Mc.G('tiles', this.cE, this), this.Mc.G('ack', this.bE, this), this.Mc.G('disable', this.$D, this), this.Mc = null); this.e.G('zoomend', this.ck, this); this.e.G('moveend', this.ck, this)
    },
    reloadChanged: function () { this.f && (this.f.La = !1); this.oa.clear(); this.reload = !0; this.set('display') },
    Bh: function (a, b, c) {
      function d (b) { a.loaded = !0; e.f && (a.status = 'loaded', a.Ba = !0, a.Ge = b, e.set('display', 0), typeof c === 'function' && c()) } var e = this
      a.status = 'loading'; this.f.zo && this.f.zo.call(this, a, d, function () { a.loaded = !0; e.f && (a.status = 'loaded', a.Ba = !0, typeof c === 'function' && c()) })
    },
    UHa: function (a, b, c, d) { var e = []; c = c || 18; b = Math.pow(2, b - c); for (var f = 0; f < a.length; f += 1) { var h = a[f].ta; var k = Math.floor(h.x / b); var h = Math.floor(h.y / b); if (d) { if (k = c + '/' + k + '/' + h, (h = this.oa.get(k)) && h.status == 'loaded') continue } else h = new g.mr(c, k, h), k = h + '', h = new g.qb(h); !e[k] && h && (e.push(h), e[k] = 1) } return e },
    RI: function (a, b) {
      var c = this; var d = this; if (this.f.yH) {
        var e; var f; var h; var k; var l; var m
        var n; var p = (function () { var p = 0; for (e = a.length - 1; e >= 0; e -= 1)f = a[e], p += f.length; if (p == 0) return b.call(c, a), { xL: void 0 }; d.dV = a; for (e = a.length - 1; e >= 0; e -= 1) for (f = a[e], h = [], k = [], f.WT = h, f.Kv = k, l = f.length - 1; l >= 0; l -= 1)m = f[l], n = m.ta, c.f.e.Te.NE(n.x, n.y, n.z, (function () { var c = l; return function (e) { e ? h.push(f[c]) : k.push(f[c]); p -= 1; if (p == 0) { for (e = a.length - 1; e >= 0; e -= 1) { var l = a[e]; a[e] = l.WT; if (l.Kv) for (var m = l.Kv.length - 1; m >= 0; m -= 1) { var n = l.Kv[m]; n.status = 'loaded'; n.loaded = !0; n.Ba = !0 } }b.call(d, a) } } }())) }()); if (typeof p === 'object') return p.xL
      } else {
        b.call(this,
          a)
      }
    },
    qw: function (a, b, c) { if (a = this.oa.get(a + '/' + b + '/' + c)) { if (a.zv) return a; if (a.Nb) return a.Nb; a.zv = !0; a.ij = 0; return a } },
    oJ: function (a) { var b = a.ta; a = b.x; var c = b.y; var b = b.z; var d = Math.pow(2, b); var e = (a + d) % d; var f = e + d; var d = e - d; var h = null; e !== a && (h = this.qw(b, e, c)); h || d === a || (h = this.qw(b, d, c)); h || f === a || (h = this.qw(b, f, c)); return h },
    En: function (a) {
      var b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !1; if (a.length) {
        if (this.LK) this.cK = !0; else {
          for (var c = a.length - 1; c >= 0; c -= 1) {
            var d = a[c]; if (d.length) {
              for (var e = Math.pow(2, 20 -
d[0].ta.z), c = d.length - 1; c >= 0; c--) { var f = d[c]; var h = f.ta; h.T = e; f.ra = {}; f.tn = 0; if (h.z < 10) { var k = this.oJ(f); k && (f.Nb = k, f.status = 'loaded', f.Ba = !0, k.ij += 1, f.tn = (h.x - k.ta.x) / Math.pow(2, h.z), d.splice(c, 1), this.set('display', 0)) } this.oa.set(f.key, f); !b && f.Ke ? f.Ke = !1 : f.status = 'loading' }
            }
          } var l = this; this.RI(a, function (a) {
            for (var c = a.length - 1; c >= 0; c -= 1) {
              var d = a[c]; if (d.length) {
                if (l.Ei) { if (l.e.iA) break; var e = d[0].ta.z; l.ew(d, l.mk ? 1 : 0); for (var f = 0, h = 0; f < d.length;)l.YS(d.slice(10 * h, 10 * h + 10), e, b), f += 10, h += 1 } else {
                  for (e =
(function () { var a = d.length; return function () { if (--a === 0) { var b = { key: 'rb', index: 0, id: l.e.B.id }; l.f.S.tk || (g.Ce.lf.end(b), g.Ce.lf.end(g.extend(b, { index: 1 }))) } } }()), l.ew(d), l.wq += d.length, f = d.length - 1; f >= 0; f -= 1)l.Bh(d[f], l.rm, e)
                }
              }
            }
          })
        }
      }
    },
    Sy: function (a, b) { var c = this.oa.get(a + ''); c || b || (c = new g.qb(a.cb())); return c },
    cL: function (a, b) { return this.Dd * Math.pow(2, a - b) },
    eB: function (a) { a.Is && this.rm.i2(a.Is); a.QK = !1; a.loaded = !1; this.Nf && this.Nf(a) },
    qy: function (a, b) {
      var c = (arguments.length > 2 && void 0 !== arguments[2]
        ? arguments[2] : 0) || this.fb; var d = a.Vd.x; var e = a.Vd.y; var f = a.kc.x; var h = a.kc.y; new g.H(0, 0); var k = this.cL(20, c); b && (f = Math.max(b[0], f) - b[0], h = Math.max(b[1], h) - b[1], d = Math.min(b[2], d) - b[0], e = Math.min(b[3], e) - b[1], new g.H(Math.floor(b[0] / k), Math.floor(b[1] / k))); d /= k; e /= k; d = { Jc: d % 1 === 0 ? d - 1 : Math.floor(d), vc: e % 1 === 0 ? e - 1 : Math.floor(e), Kc: Math.floor(f / k), hc: Math.floor(h / k) }; d.rE = d.Jc - d.Kc + 1; d.DK = d.vc - d.hc + 1; d.z = c; d.T = this.T * Math.pow(2, this.zoom - c); d.Uy = Math.ceil(d.rE / 2); return d
    },
    uv: function (a, b, c) {
      return b < a.Kc || b > a.Jc ||
c < a.hc || c > a.vc ? !1 : !0
    },
    ew: function (a, b) { if (a.length) { var c = this.lb.kd(this.Dd << 20 - a[0].ta.z); var d = Math.floor(c.x); var e = Math.floor(c.y); a.sort(function (a, c) { var k = a.ta; var l = c.ta; var m = k.x - d; var k = k.y - e; var n = l.x - d; var l = l.y - e; return (b ? -1 : 1) * (n * n + l * l - (m * m + k * k)) }) } },
    clear: function () { this.rm.clear() },
    ep: function (a, b) {
      this.zg = !1; this.clear(); this.Zi = b.Zi; this.Yi = b.Yi; this.Dd = b.Dd; var c = a.P; this.Sf = b.Sf || a.P.Sf; this.sh = c.sh; this.size = a.size; this.rotation = c.rotation; this.lb = c.lb; this.Ha = a.P.Ha; this.Jf = a.Jf; this.Ae = a.Ae; this.Qf = a.Qf
      this.zoom = c.zoom; this.je = c.je; this.fb = this.f.S.CLASS_NAME == 'AMap.MapBox' ? Math.max(2, this.je - g.r.rr) : !1 === this.Ei && !this.f.rS && this.f.ja ? this.je + 1 : this.je; this.gf && this.fb > this.gf && (this.fb = this.gf); this.Xo && this.fb < this.Xo && (this.fb = this.Xo); this.T = c.T; this.Kg = c.Kg; c = a.P.Ha; this.qk = this.qy(c, b.I); this.Gw = c.J$ ? this.qy(c.J$, b.I) : null; var c = this.qk; var d = this.Ha.A9; var e = null; var e = d < this.zoom && this.Gw ? this.Gw : c; var f = []; var h = []; var k; var l = []; var m = []; var n = []; var p = new g.mr(0, 0, 0); var q; var r = this.zoom; var m = this.Qk || ''; var s = {}; var u = {}; var v; var w; var t; var x; var y; var F; this.be =
1E6 * Math.random() << 0; for (q = m.length - 1; q >= 0; q -= 1) {
        if (k = m[q], !(k.hx < b.opacity)) {
          if (p.z = k.ta.z, p.x = k.ta.x, p.y = k.ta.y, p.z === this.fb)s[p + ''] |= 16; else if (p.z < this.fb) { if (s[p + ''] |= 64, this.Zi) for (x = this.fb - p.z, v = Math.max(c.Kc, p.x << x), r = Math.min(c.Jc, (p.x + 1 << x) - 1), w = Math.max(c.hc, p.y << x), t = Math.min(c.vc, (p.y + 1 << x) - 1), p.z = this.fb, x = v; x <= r; x += 1) for (p.x = x, y = w; y <= t; y += 1)p.y = y, F = p + '', s[F] |= 32, u[F] = u[F] ? Math.max(k.ta.z, u[F]) : k.ta.z } else if (this.Yi) {
            for (v = 1; p.z >= this.fb;) {
              s[p + ''] |= v; v = p.x >> 1; w = p.y >> 1; r = v << 1; t = w << 1
              k = 0; for (x = 2; x > 0; x -= 1) for (p.x = r + x, y = 2; y > 0; y -= 1)p.y = t + y, s[p + ''] & 5 && (k += 1); p.z -= 1; p.x = v; p.y = w; v = k === 4 ? 4 : 2
            }
          }
        }
      }m = []; p.z = this.fb; q = !0; this.oa.v2(); for (x = e.Kc; x <= e.Jc; x += 1) for (p.x = x, y = e.hc; y <= e.vc; y += 1)p.y = y, k = this.Sy(p), this.au(k), v = !1, k.Ba ? (k.be = this.be, this.uv(c, x, y) && (m.push(k), this.Nk && (k.gd !== this.gd || k.hx < 1) && (v = !0))) : (q = !1, this.uv(c, x, y) && (v = !0), k.status && !k.Ke || this.je !== d || this.Gw && !this.uv(this.Gw, x, y) || l.push(k)), v && n.push(k); q ? (this.iD || (this.iD = !0), this.f.La || (k = {
        key: this.f.dh ? 'rl' : 'rb',
        index: 1,
        id: this.e.B.id
      }, this.f.S.tk || (g.Ce.lf.end(k), g.Ce.lf.push({ key: 'ftc', Gf: m.length, id: this.e.B.id })))) : this.f.La = !1; this.zg = q; m.length && this.iD && (f.push(m), m.zg = q); h.push(l); d = !1; if (this.Yi) {
        n = n.slice(0); e = []; for (q = n.length - 1; q >= 0; q -= 1)k = n[q], s[k.key] & 4 || e.push(k); k = b.bb[1]; for (r = this.fb + 1; n.length && r <= k; r += 1) {
          m = []; l = n; n = []; p.z = r; for (q = l.length - 1; q >= 0; q -= 1) {
            if (x = l[q], v = s[x.key], v & 7) {
              for (v = x.ta.x << 1, w = x.ta.y << 1, x = 1; x >= 0; x -= 1) {
                for (p.x = v + x, y = 1; y >= 0; y -= 1) {
                  p.y = w + y, F = p + '', t = this.oa.tK(F), s[F] & 5 && t && t.Ba ? (t.JB =
!0, t.be = this.be, m.push(t), this.au(t)) : n.push(new g.qb(p.cb()))
                }
              }
            }
          }m.length && (d = !0, f.push(m))
        }n = e
      } if (!d && this.Zi) {
        for (x = !f.length || this.mk ? b.bb[0] : Math.max(b.bb[0], this.fb - 2), Math.max(x, this.fb - this.Yga), r = this.fb - 1; n.length && r >= x; r -= 1) {
          m = []; y = {}; l = n; n = []; for (q = l.length - 1; q >= 0; q -= 1) {
            k = l[q], p.z = r, p.x = k.ta.x >> 1, p.y = k.ta.y >> 1, k = this.Sy(p), y[k.key] || (y[k.key] = 1, v = !1, k.Ba && (!this.Zia || s[k.key] & 64) ? (p.x = Math.min(c.Jc, Math.max(c.Kc, p.x << this.fb - r)), p.y = Math.min(c.vc, Math.max(c.hc, p.y << this.fb - r)), p.z = this.fb,
            F = p + '', typeof u[F] === 'number' && k.ta.z > u[F] ? v = !0 : k.JB = !0, k.be = this.be, m.push(k), this.au(k)) : v = !0, v && n.push(k))
          }m.length && f.push(m)
        }
      } this.dV = h; this.Fv = this.wq = 0; this.En(h); this.Mg = f; this.f.set('tiles', f); this.Rv(a, b)
    },
    au: function (a) { this.oa.m6(a.xFa) },
    LR: function (a, b) { for (var c = [], d = this.e.B.getCoordsBoundByZoom(a), d = this.qy(d, b, a), e = d.Kc; e < d.Jc; e++) for (var f = d.hc; f < d.vc; f++) { var h = [a, e, f].join('/'); this.oa.Kd(h) || c.push(new g.qb(new g.mr(a, e, f), !0)) } return c },
    OM: function () {
      var a = this.e.B; return a.Q7 &&
a.get('preloadMode') && this.oa.Fp >= 200 && this.f.S.sq() && this.Jf != 'stable' && this.Yx && this.Yx() && this.zoom !== this.fb
    },
    Rv: function (a, b) { var c = b.I; var d = b.bb; if (this.OM() && this.fb >= d[0] + 1) { var d = []; var e = null; var e = this.Jf === 'zoomOut' ? Math.floor(this.zoom) : Math.ceil(this.zoom); var e = this.LR(e, c); e.length && d.push(e); d.length && this.En(d, !0) } }
  }); g.M.$d.Ti = g.M.Ti.extend({
    A: function (a, b) { arguments.callee.ma.apply(this, arguments); this.Yn = 120; this.Ei = !1; this.ah(); this.gf = a.gf; this.Xo = a.Xo },
    wj: function () { return this.Kb },
    ah: function () { this.Kb = document.createElement('div'); this.Kb.className = this.f.S.get('className') || 'amap-layer'; this.av = document.createDocumentFragment() },
    Wv: function (a) { var b = Math.pow(2, a.P.zoom - this.Df); var c = a.P.lb.$a(this.Js).kd(this.zm); this.transform = { translate: this.transform.translate.add(c), scale: b, rotate: 0 }; this.lb = a.P.lb },
    SP: function (a, b) { this.Ma = this.J.Ma; this.Df = this.je; this.zm = this.Kg; this.xe = !1; this.currentTime = +new Date(); this.AV = b.AV; var c = this.qk; this.Nk = this.Yn && b.cI; var d = this.Mg; var e = 256 * c.rE; var c = 256 * c.DK; this.Ae = this.zoom << 0 !== this.zoom; var f = this.lb.$a(this.Ma); f.x < -g.a.Fa / 2 ? f.x += g.a.Fa : f.x > g.a.Fa / 2 && (f.x -= g.a.Fa); this.eQ = f.kd(this.Kg); return [d, e, c, b] },
    Nz: function (a, b) {
      var c = this.SP(a, b); this.at.apply(this, c); this.Pe(a); this.zg && !this.f.La && (c = this.f, c.S.tk || g.Ce.lf.end({ key: 'rb', index: 2, id: this.e.B.id }), c.La =
!0, c.Id ? c.pa('renderComplete') : (c.Id = !0, c.pa('complete')))
    },
    qc: function (a, b) { this.pp = a.pp; this.Qf = a.Qf; this.ep(a, b); this.Js && g.l.Xl && (a.Ae || a.Qf) ? this.Wv(a, b) : this.Nz(a, b); this.Js = this.lb; this.xe && this.set('display', 0) },
    Vv: function () { for (var a = this.Kb.childNodes, b = a.length - 1; b >= 0; b -= 1)a[b] && a[b].gd !== this.gd && this.Kb.removeChild(a[b]) },
    qE: function (a, b) { return a.hc === b.hc && a.Kc === b.Kc && a.vc === b.vc && a.Jc === b.Jc },
    at: function (a) {
      var b = this.gd; this.gd += 1; var c = !1; var d; var e; var f; e = !1; var h = []; var k; var l; for (d = a.length -
1; d >= 0; d -= 1) {
        if (f = a[d], f.length) {
          e = f[0].ta.z; var m; var n; var p = this.cL(this.je, e); var q = !1; this.um && f.zg && f[0].ta.z == this.fb && (k = [], l = [], q = !0); for (var r = f.length - 1; r >= 0; r -= 1) {
            n = f[r]; q && n.ga && (k.push.apply(k, n.ga), l.push(n.ta + '')); this.mU(n); if (this.Ma === n.Ma && n.Df === this.Df) { var s = n.Ge; if (s && s.parentNode === this.Kb && n.hx === 1) { h.push(n); s.gd = this.gd; n.gd = this.gd; continue } }n.Ma = this.Ma; n.Df = this.Df; m = n.ta; var c = !0; var u = (new g.H((m.x << 20 - e) * this.Dd, (m.y << 20 - e) * this.Dd)).$a(this.Ma); var u = u.kd(this.Kg); u.x = g.a.Ac(u.x, 1)
            u.y = g.a.Ac(u.y, 1); var v = 1; if (!n.gY || this.lX && n.gd !== b)n.gY = this.currentTime; this.Nk && !n.JB ? (s = Math.max(0, Math.abs(m.z - this.zoom) - 1), v = Math.min(1, (this.currentTime - n.gY) / (1 / Math.pow(1.32, s) * this.Yn)), v !== 1 && (this.xe = !0)) : n.JB = !1; n.gd = this.gd; n.hx = v; n.Ba ? (s = n.Ge, !s && n.Nb && n.Nb.Ge && (s = n.Nb.Ge), v !== 0 && s && (this.b4(s, u.x, u.y, p, p, v, m.z), s.parentNode !== this.Kb && (g.l.Bi && this.f.get('type') === 'overlayer' && (s.style.display = 'none'), this.av.appendChild(s)), s.gd = this.gd, n.je = this.je, h.push(n))) : n.be = null
          }e = !0
        }
      } this.um &&
k && (r = l.sort().join(';'), k.LS = r, r !== this.re.LS && (this.re = k)); a.length > 1 && (this.xe = !0); this.Qk = h; this.Vv(); this.Kb.appendChild(this.av); return c || !e
    },
    mU: function () {},
    Pe: function () { this.transform = { translate: this.eQ, scale: Math.pow(2, this.zoom - this.je), rotate: 0 } }
  }); window.CanvasRenderingContext2D && (window.CanvasRenderingContext2D.prototype.DQ = function (a, b, c, d, e) {
    typeof e === 'undefined' && (e = [10, 10]); this.moveTo(a, b); var f = c - a; var h = d - b; var k = Math.floor(Math.sqrt(f * f + h * h)); d = f / k; c = h / k; e.Ig = 0; for (var l = [], f = this.wI, m = 0, n = 0, p = !1, q = h = 0; q < e.length; q += 1)e.Ig += e[q], l[q] = { dD: e[q] * d, eD: e[q] * c, fz: h += e[q] }, f -= e[q], f < 0 && !p && (m = q, n = -f, p = !0); for (p = 0; n + p <= k;) {
      n < e[m] ? (f = n * d, h = n * c) : (f = l[m].dD, h = l[m].eD), a += f, b += h, this.HE ? this.moveTo(a, b) : this.lineTo(a, b), p += n, this.HE = !this.HE, n = e[(m + 1) %
e.length], m = (m + 1) % e.length
    }k -= p; a += k * d; b += k * c; this.HE ? this.moveTo(a, b) : this.lineTo(a, b); this.wI = (this.wI + p + k) % e.Ig
  }, window.CanvasRenderingContext2D.prototype.roa = function (a, b, c, d) { typeof d === 'undefined' && (d = [10, 10]); var e = 2 * Math.PI * c; var f = d <= 0 ? e : Math.round(e / (d[0] + d[1])); var h = (d[0] + d[1]) / e * 2 * Math.PI; d = d[0] / e * 2 * Math.PI; for (e = 0; e < f; e += 1) this.beginPath(), this.arc(a, b, c, e * h, e * h + d), this.stroke() }); g.M.Me.Hl = g.M.Ti.extend({
    A: function (a, b) { arguments.callee.ma.apply(this, arguments); this.ah() },
    PR: function () { return this.Ya.VU },
    wj: function () { return this.Kb },
    ah: function () { this.Kb = document.createElement('div'); this.Kb.className = 'amap-markers'; this.Ya = new g.M.Me.ed(this.Kb); this.Ya.f = this.f; this.J.K.appendChild(this.Kb) },
    vt: function (a, b) {
      this.av = b.av; this.iz = b; this.Sf = a.P.Sf; this.T = a.P.T; this.zoom = a.P.zoom; this.size = a.size; this.Ha = a.P.Ha; this.zq = a.T; this.mb = a.P.lb; this.sh = a.P.sh; var c = !1; if (!this.Ma ||
Math.abs(this.mb.x - this.Ma.x) / this.T > 500 || Math.abs(this.mb.y - this.Ma.y) / this.T > 500)c = !0; if (c || this.zoom << 0 !== this.zoom || this.Df !== this.zoom) this.Ma = this.mb, this.Df = this.zoom
    },
    jv: function (a) { var b = a.P.Ha.Bc.y * this.T; a = a.P.Ha.Bc.x * this.T; return [this.mb.x - a, this.mb.y - b, this.mb.x + a, this.mb.y + b] },
    Vv: function () { if (this.Vh && this.Vh) for (var a in this.Vh) if (this.Vh.hasOwnProperty(a)) { var b = this.Vh[a]; b.be !== this.be && b.fa && this.J.Ml.appendChild(b.fa) } },
    qc: function (a, b) {
      this.be = 1E6 * Math.random() << 0; this.vt(a,
        b); this.P = a.P; this.size = a.size; var c = this.f; this.Dd = 256; var d, e; e = this.jv(a); var f = 0; c.nm && (f = 50 * this.T); e[0] -= this.f.Bf * this.T + f; e[1] -= this.f.mg * this.T + f; e[2] += this.f.Bf * this.T + f; e[3] += this.f.mg * this.T + f; c = c.yn(e); for (d in c)c.hasOwnProperty(d) && (c[d].be = this.be, c[d].Z5 = this); this.Vv(c); this.vt.call(this.Ya, a, b); this.Ya.wE(c); this.Vh = c; this.Pe(a)
    },
    Pe: function () { var a = Math.pow(2, this.zoom - this.je); this.transform = { translate: this.Ma.$a(this.mb).kd(this.T), scale: a, rotate: 0 } }
  }); g.M.Me.ed = g.ca.extend({
    A: function (a) { this.ql = a },
    wE: function (a, b) {
      var c = document.createDocumentFragment(); var d = b && b.DS ? null : {}; var e = !0; var f; for (f in a) {
        if (a.hasOwnProperty(f)) {
          var h = a[f]; var k; var l = h.get('params'); if (h.fa)k = h.fa; else { k = g.j.create('div'); k.className = 'amap-marker'; var m = l.Xg; var n = l.Y8; var p = l.MJ; m && k.appendChild(m); n && k.appendChild(n); p && !1 !== m.AM && k.appendChild(p); h.fa = k; h.Xg = m; if (n = l.title)m.title = n; this.f.nm = !0; g.a.indexOf(this.f.fh, h) === -1 && this.f.fh.push(h); h.pe = !0 } var p = l.offset; var q = p.x; var r = p.y; var s = l.textAlign
          var u = l.verticalAlign; var n = l.anchor; var m = !1; var v; var w; n && (n = n.split('-'), n.length === 2 ? (s = n[1], u = n[0]) : n.length === 1 && n[0] === 'center' && (s = 'center', u = 'middle')); var t; var n = t = 0; if (h.Qp == 'AMap.Text' || h.Qp == 'AMap.Marker') { if (w = v = 0, k.parentNode !== this.ql && d && (m = !0, d[f] = h, e = !1), !m) { h.pe || !h.Xj ? (t = g.j.Io(h.Xg), h.Xj = t) : t = h.Xj; n = t[0]; t = t[1]; switch (s) { case 'center':v = n / 2; break; case 'right':v = n } switch (u) { case 'middle':w = t / 2; break; case 'bottom':w = t }q -= v; r -= w } } else v = -q, w = -r; var x, y; if (!m) {
            if (h.pe) {
              var F = []; x = this.Ju(h.W.za); h.Ma =
this.Ma; y = l.pF; r = Math.round(x[1] + r + y.y); q = Math.round(x[0] + q + y.x); F.push('top:' + r + 'px'); F.push('left:' + q + 'px'); F.push('z-index:' + (l.L5 ? this.f.cr + 10 : l.zIndex)); if (!g.l.Ie) { r = v; q = w; if (h.Qp == 'AMap.Marker') { r = -p.x; q = -p.y; switch (s) { case 'center':r = -p.x + n / 2; q = -p.y + t / 2; break; case 'right':r = -p.x + n } switch (u) { case 'middle':q = -p.y + t / 2; break; case 'bottom':q = -p.y + t } }F.push(g.j.w4(k, l.Op, { x: r, y: q })) }F.push('display:' + (l.visible ? 'block' : 'none') + ';'); k.style.cssText = F.join(';'); if ((p = l.label) && p.content) {
                l = l.MJ; s =
p.direction; r = null; h.Cv || (r = g.j.Io(l), h.Cv = r); u = (r = h.Cv) && r[0]; w = r && r[1]; q = r = 0; if (s && u && w) switch (s) { case 'top':r = -w; q = (n - u) / 2; break; case 'right':r = (t - w) / 2; q = n; break; case 'bottom':r = t; q = (n - u) / 2; break; case 'left':r = (t - w) / 2; q = -u; break; case 'center':r = (t - w) / 2, q = (n - u) / 2 }p.offset ? (r = r + p.offset.y + 'px', q = q + p.offset.x + 'px') : (r += 'px', q += 'px'); l.style.top = r; l.style.left = q
              }
            } else if (h.Zaa || this.zoom << 0 !== this.zoom || h.zoom !== this.zoom || k.parentNode !== this.ql || h.Ma !== this.Ma) {
              x = this.Ju(h.W.za), h.Ma = this.Ma, y = l.pF,
              r = Math.round(x[1] + r + y.y), q = Math.round(x[0] + q + y.x), k.style.top = r + 'px', k.style.left = q + 'px'
            }
          } h.zoom = this.zoom; k.parentNode !== this.ql && (g.l.Bi && g.a.iepngFix(k), c.appendChild(k)); h.pe = m; k.MB = this.ql
        }
      } this.ql.appendChild(c); e || this.wE(d, { DS: !0 })
    },
    Ju: function (a) { var b = a[0] - this.Ma.x; b > g.a.Fa / 2 ? b -= g.a.Fa : b < -g.a.Fa / 2 && (b += g.a.Fa); return [b / this.T, (a[1] - this.Ma.y) / this.T] }
  }); var Mc = g.r; var Sc = g.l; var fc = g.ca.Qu; var Tc = g.Kva; var fa = document; var Uc = !0; var Vc = []; Sc.Wf && Vc.push('touch'); Sc.ba || Vc.push('mouse'); Sc.fL && (Vc.push('vectorlayer', 'overlay'), Sc.np ? Vc.push('wgl') : Vc.push('cgl')); if (Tc) { for (var Wc = [], Xc = Tc.split(','), Ic = 0; Ic < Xc.length; Ic += 1) { var Yc = Xc[Ic]; fc[Yc] && Wc.push.apply(Wc, fc[Yc]); Wc.push(Yc) }Vc = Vc.concat(Wc) }Vc.push('sync')
  if (Sc.Gv) { var Zc = !0; var $c = []; var ad = []; try { for (var Ic = 0, bd = Vc.length; Ic < bd; Ic++) { var cd = JSON.parse(localStorage.getItem('_AMap_' + Vc[Ic])); if (cd && cd.version === Mc.Fk)$c.push(cd.script), cd.css && ad.push(cd.css); else { $c = void 0; Zc = !1; break } } } catch (dd) { $c = ad = void 0, Zc = !1 } if (Zc) try { ad.length && ed(); var fd = $c.join(';'); eval(fd) } catch (gd) { Uc = !1 } else Uc = !1 } else Uc = !1; if (Uc) for (Ic = 0; Ic < Vc.length; Ic += 1)g.sb.SC(Vc[Ic]).status = 1; else Mc.QJ = !1, hd()
  function id () { for (var a = fa.getElementsByTagName('script'), b, c = 0; c < a.length; c += 1) if (a[c].src.indexOf(Mc.Gb + '/maps?') === 0) { b = a[c]; break } return Mc.Oc || b && b.async } function hd () { var a = Mc.Gb + '/maps/modules?v=' + Mc.uo + '&key=' + Mc.key + '&vrs=' + Mc.Fk + '&m=' + Vc.join(','); id() ? jd(a) : (fa.write('<script crossorigin="anonymous" id="amap_plus_js" src="' + a + '" type="text/javascript">\x3c/script>'), setTimeout(function () { fa.getElementById('amap_plus_js') || jd(a) }, 1)) }
  function jd (a) { var b = fa.createElement('script'); b.charset = 'utf-8'; b.src = a; b.id = 'amap_plus_js'; (a = fa.head || fa.getElementsByTagName('head')[0] || fa.body) && a.appendChild(b) }
  function ed () { var a = ad.join('\n'); var b = fa.createElement('style'); b.type = 'text/css'; Mc.Gb.indexOf('webapi.amap.com') === -1 && (a = a.replace(/webapi.amap.com/gi, Mc.Gb.split('://')[1])); Mc.pc === 'https' && (a = a.replace(/http:/gi, 'https:')); if (b.styleSheet) { var c = function () { try { b.styleSheet.cssText = a } catch (c) {} }; b.styleSheet.disabled ? setTimeout(c, 10) : c() } else b.appendChild(fa.createTextNode(a)); c = fa.head || fa.getElementsByTagName('head')[0]; c.childNodes.length < 2 ? c.appendChild(b) : c.insertBefore(b, c.childNodes[1]) }
  ;
  (typeof _cssload_ === 'function') && _cssload_('logo', '.amap-logo{display:block!important;pointer-events:none;}', true)
})(['ab3a789432f55b2af930a86fc6200447', [120.856804, 30.675593, 122.247149, 31.872716, 121.472644, 31.231706], 'https://webapi.amap.com', 1, '1.4.15', null, '310000', '', true, false, false, true, '1588092692-20200422-1', false])
