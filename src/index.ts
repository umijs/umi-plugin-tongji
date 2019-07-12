// ref:
// - https://umijs.org/plugin/develop.html

export default function (api, opts) {
  api.log.success("insert baidu tongji");
  if (opts.judge && !opts.judge()) {
    return false;
  }
  const gaTpl = function (code) {
    return `
    (function() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?${code}";
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(hm, s);
    })();
  `;
  };
  api.addHTMLHeadScript({
    content: 'var _hmt = _hmt || [];'
  });
  if (process.env.NODE_ENV === "production") {
    api.addHTMLHeadScript({
      content: gaTpl(opts.code)
    });
  }
};
