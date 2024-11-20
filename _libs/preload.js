(() => {
  // window.__CHENGJS__.setStatistic({ platform: 'baidu', key: ''})
  // window.__CHENGJS__.setStatistic({ platform: 'google', key: ''})
  window.__CHENGJS__ = window.__CHENGJS__ || {};

  const loadScript = ({ src, async, onload }) => {
    const script = window.document.createElement("script");
    script.src = src;
    script.async = async || true;
    script.onload = onload;
    window.document.head.appendChild(script);
  };
  const createScript = (content) => {
    const script = window.document.createElement("script");
    script.innerHTML = content;
    window.document.head.appendChild(script);
  };
  const setStatistic = (config) => {
    const { platform, key } = config || {};
    switch (platform) {
      case "baidu": {
        const content = `var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?${key}";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();`;
        createScript(content);
        break;
      }

      case "google": {
        loadScript({
          src: `https://www.googletagmanager.com/gtag/js?id=${key}`,
        });
        const content = `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${key}');
          `;
        createScript(content);
        break;
      }

      default:
        break;
    }
  };

  window.__CHENGJS__.setStatistic = setStatistic;
})();
