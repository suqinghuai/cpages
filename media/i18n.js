/* 顺隆科技官网 中英双语切换（默认中文，不记忆选择） */
(function () {
  'use strict';

  // 中文原文 -> 英文译文（仅框架固定文案；展会/新闻等正文长文暂无译文，保留中文）
  var EN = {
    // 导航 / 面包屑
    "关于我们": "About Us",
    "展会排期": "Schedule",
    "展会搭建": "Booth Build",
    "新闻中心": "News",
    "商务考察": "Business Visit",
    "展会地接": "On-site Service",
    "联系我们": "Contact",
    "首页": "Home",

    // 详情页信息标签
    "展会名称": "Exhibition",
    "展会时间": "Date",
    "展会地点": "Venue",
    "展会周期": "Frequency",
    "届数": "Edition",
    "主办单位": "Organizer",
    "现场图片": "On-site Photos",

    // 详情页 CTA
    "咨询展位方案": "Discuss a Booth Plan",
    "返回展会排期": "Back to Schedule",
    "展位申请、展台搭建、商务考察与展会地接，专属顾问一对一对接。": "Booth application, booth construction, business visits and on-site service, with a dedicated consultant one-on-one.",

    // 首页 Hero 三套文案
    "把一场展会，": "Turn an exhibition into",
    "做成品牌的主场": "your brand's home ground",
    "展会组办、展台搭建、会议服务、商务考察与展会地接，一支团队贯穿从方案到撤展的全部环节。": "Show organization, booth construction, event services, business visits and on-site service — one team covers every stage from plan to dismantling.",
    "查看展会排期": "View Schedule",
    "从一张图纸，": "From a blueprint to",
    "到一座能用的展台": "a ready-to-use booth",
    "方案设计、报馆图审、进场施工、现场值守由同一支班组负责。": "Design, drawing approval, on-site construction and standby handled by the same crew.",
    "了解搭建": "Learn More",
    "客人落地那一刻，": "Service starts",
    "服务已经开始": "the moment you land",
    "接送机、酒店、用车、翻译、展品进馆与证件代办，按展期排班落实到每一小时。": "Airport transfers, hotels, vehicles, interpreters, freight-in and permits, scheduled hour by hour for the show.",

    // 页脚
    "网站导航": "Navigation",
    "国际展会业务 · 展台搭建 · 商务考察 · 展会地接 · 跨境商务支持。服务网络辐射俄罗斯、巴西、美国、意大利、中亚、波兰、白俄罗斯等核心市场。": "International exhibitions · Booth construction · Business visits · On-site service · Cross-border support. Our network covers Russia, Brazil, the USA, Italy, Central Asia, Poland, Belarus and other key markets.",

    // 商务考察 卡片标题
    "专属行程与市场调研": "Itinerary & Market Research",
    "标杆企业实地参访": "Benchmark Company Visits",
    "精准商务资源对接": "Targeted Business Matching",
    "展会联动与多模式定制": "Show-linked Flexible Programs",
    "高规格全链路商旅": "Premium End-to-end Travel",
    "深度联营企业强背书": "Backed by Local Partner Entities",

    // 展会地接 卡片标题
    "国际联运与专属包车": "International Transfers & Chauffeur Cars",
    "核心展区星级酒店": "Star-rated Hotels Near the Venue",
    "高规格餐饮定制": "Custom Catering",
    "资深双语翻译陪同": "Senior Bilingual Interpreters",
    "三大行程模式定制": "Three Flexible Itinerary Modes",

    // 展会搭建
    "专属设计与图纸深化": "Custom Design & Drawing Development",
    "联营企业源头直造": "Source-built by Partner Plants",
    "属地化团队合规进场": "Compliant Local Crew On-site",
    "现场搭建与展期维保": "On-site Build & Show Maintenance",
    "展台搭建案例": "Booth Build Cases",
    "河南耐火材料行业团组展台": "Henan Refractory Materials Group Booth",
    "YONGTELI 机械品牌展台": "YONGTELI Machinery Brand Booth",
    "NAR 标识品牌展台": "NAR Brand Booth",

    // 联系我们
    "联系电话": "Phone",
    "企业邮箱": "Email",
    "微信二维码 · 扫码添加微信": "WeChat QR · Scan to Add",
    "电话、邮箱或微信，任选一种方式，都能直接找到项目对接人。": "Reach your project consultant by phone, email or WeChat.",

    // 展会排期 国家标签与备注
    "俄罗斯": "Russia",
    "波兰": "Poland",
    "白俄罗斯": "Belarus",
    "中国澳门": "Macao, China",
    "哈萨克斯坦": "Kazakhstan",
    "排期依据主办方 2027 年公布信息整理，最终以主办方公告为准。": "Schedule compiled from 2027 organizer announcements; subject to the official notice.",

    // 各页副标题 lead
    "依托俄罗斯、巴西、美国深度联营企业，直连本土政企与渠道资源，量身定制高价值的跨国商务考察之旅。": "Through our deeply partnered entities in Russia, Brazil and the USA, we connect you with local government, business and channel resources to design high-value overseas business trips.",
    "依托俄罗斯、巴西、美国深度联营企业，直连本土一手资源，为您提供安全、高效、高规格的“吃住行译游”全链路保障。": "Through our deeply partnered entities in Russia, Brazil and the USA, we provide safe, efficient, high-standard end-to-end ground service covering meals, lodging, transport, interpreting and tours.",
    "俄罗斯、巴西、意大利等核心市场均建立深度联营企业。真正实现从设计到落地的全流程把控，源头控本，品质保障。": "We have partnered entities in key markets such as Russia, Brazil and Italy, controlling the full process from design to on-site delivery for cost control and assured quality.",
    "2027 年核心市场展期一览：俄罗斯、白俄罗斯、波兰、哈萨克斯坦、中国澳门等重点展会，点击展会 LOGO 可查看详细介绍，从展位申请、展台搭建到落地地接，一站对接。": "2027 key-market schedule: major shows in Russia, Belarus, Poland, Kazakhstan and Macao, China. Click a show logo for details; one-stop support from booth application to on-site service."
  };

  // 国家名映射（用于含动态国家名的 CTA 标题）
  var COUNTRY = {
    "俄罗斯": "Russia",
    "波兰": "Poland",
    "白俄罗斯": "Belarus",
    "哈萨克斯坦": "Kazakhstan",
    "中国澳门": "Macao, China"
  };
  var CTA_RE = /^计划参展\s*(.+?)市场？$/;

  function ctaMatch(zh) {
    var m = zh.match(CTA_RE);
    if (m && COUNTRY.hasOwnProperty(m[1])) return m[1];
    return null;
  }

  var lang = 'zh';
  var nodes = []; // {node, zh, country}

  function skipParent(el) {
    if (!el || !el.tagName) return false;
    var t = el.tagName.toLowerCase();
    return t === 'script' || t === 'style' || t === 'svg' || t === 'noscript';
  }

  function collect() {
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function (node) {
        var p = node.parentElement;
        if (skipParent(p)) return NodeFilter.FILTER_REJECT;
        var zh = node.textContent.trim();
        if (zh && (EN.hasOwnProperty(zh) || ctaMatch(zh))) return NodeFilter.FILTER_ACCEPT;
        return NodeFilter.FILTER_REJECT;
      }
    });
    var n;
    while ((n = walker.nextNode())) {
      var zh = n.textContent.trim();
      nodes.push({ node: n, zh: zh, country: ctaMatch(zh) });
    }
  }

  function apply() {
    var en = lang === 'en';
    document.documentElement.lang = en ? 'en' : 'zh-CN';
    nodes.forEach(function (item) {
      var zh = item.zh;
      var target;
      if (!en) {
        target = zh;
      } else if (EN.hasOwnProperty(zh)) {
        target = EN[zh];
      } else if (item.country) {
        target = 'Planning to exhibit in ' + COUNTRY[item.country] + ' market?';
      } else {
        target = zh;
      }
      // 保留文本节点内首尾空白
      var raw = item.node.textContent;
      var lead = raw.match(/^\s*/)[0];
      var trail = raw.match(/\s*$/)[0];
      item.node.textContent = lead + target + trail;
    });
    if (btn) btn.textContent = en ? '中文' : 'EN';
  }

  var btn = null;
  function injectButton() {
    var wrap = document.querySelector('.header .wrap') || document.querySelector('.header');
    if (!wrap) return;
    btn = document.createElement('button');
    btn.className = 'lang-btn';
    btn.type = 'button';
    btn.textContent = 'EN';
    btn.setAttribute('aria-label', 'Switch language');
    btn.addEventListener('click', function () {
      lang = lang === 'en' ? 'zh' : 'en';
      apply();
    });
    var anchor = wrap.querySelector('.head-phone') || wrap.querySelector('.menu-btn');
    if (anchor && anchor.parentNode === wrap) {
      wrap.insertBefore(btn, anchor.nextSibling);
    } else {
      wrap.appendChild(btn);
    }
  }

  function injectStyle() {
    var st = document.createElement('style');
    st.textContent =
      '.lang-btn{display:inline-flex;align-items:center;gap:5px;font-size:12.5px;letter-spacing:.05em;' +
      'color:#0a2b57;border:1px solid #c9d7e8;border-radius:999px;padding:5px 13px;cursor:pointer;' +
      'background:#fff;white-space:nowrap;line-height:1.2;transition:all .25s ease;}' +
      '.lang-btn:hover{border-color:#0a2b57;color:#0a2b57;}' +
      '.header.solid .lang-btn{color:#0a2b57;}' +
      'body.nav-open .lang-btn{color:#fff;border-color:rgba(255,255,255,.5);}';
    document.head.appendChild(st);
  }

  function init() {
    injectStyle();
    collect();
    injectButton();
    apply();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
