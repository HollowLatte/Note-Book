const e=JSON.parse('{"key":"v-8324ffd4","path":"/system-design/security/jwt-intro.html","title":"JWT 基础概念详解","lang":"zh-CN","frontmatter":{"title":"JWT 基础概念详解","category":"系统设计","tag":["安全"],"description":"什么是 JWT? JWT （JSON Web Token） 是目前最流行的跨域认证解决方案，是一种基于 Token 的认证授权机制。 从 JWT 的全称可以看出，JWT 本身也是 Token，一种规范化之后的 JSON 结构的 Token。 JWT 自身包含了身份验证所需要的所有信息，因此，我们的服务器不需要存储 Session 信息。这显然增加了系统的可用性和伸缩性，大大减轻了服务端的压力。 可以看出，JWT 更符合设计 RESTful API 时的「Stateless（无状态）」原则 。 并且， 使用 JWT 认证可以有效避免 CSRF 攻击，因为 JWT 一般是存在在 localStorage 中，使用 JWT 进行身份验证的过程中是不会涉及到 Cookie 的。","head":[["meta",{"property":"og:url","content":"https://hollowlatte.github.io/Note-Book/Note-Book/system-design/security/jwt-intro.html"}],["meta",{"property":"og:site_name","content":"Note-Book"}],["meta",{"property":"og:title","content":"JWT 基础概念详解"}],["meta",{"property":"og:description","content":"什么是 JWT? JWT （JSON Web Token） 是目前最流行的跨域认证解决方案，是一种基于 Token 的认证授权机制。 从 JWT 的全称可以看出，JWT 本身也是 Token，一种规范化之后的 JSON 结构的 Token。 JWT 自身包含了身份验证所需要的所有信息，因此，我们的服务器不需要存储 Session 信息。这显然增加了系统的可用性和伸缩性，大大减轻了服务端的压力。 可以看出，JWT 更符合设计 RESTful API 时的「Stateless（无状态）」原则 。 并且， 使用 JWT 认证可以有效避免 CSRF 攻击，因为 JWT 一般是存在在 localStorage 中，使用 JWT 进行身份验证的过程中是不会涉及到 Cookie 的。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Hollow-Latte"}],["meta",{"property":"article:tag","content":"安全"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JWT 基础概念详解\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hollow-Latte\\",\\"url\\":\\"https://hollowlatte.github.io/Note-Book\\"}]}"]]},"headers":[{"level":2,"title":"什么是 JWT?","slug":"什么是-jwt","link":"#什么是-jwt","children":[]},{"level":2,"title":"JWT 由哪些部分组成？","slug":"jwt-由哪些部分组成","link":"#jwt-由哪些部分组成","children":[{"level":3,"title":"Header","slug":"header","link":"#header","children":[]},{"level":3,"title":"Payload","slug":"payload","link":"#payload","children":[]},{"level":3,"title":"Signature","slug":"signature","link":"#signature","children":[]}]},{"level":2,"title":"如何基于 JWT 进行身份验证？","slug":"如何基于-jwt-进行身份验证","link":"#如何基于-jwt-进行身份验证","children":[]},{"level":2,"title":"如何防止 JWT 被篡改？","slug":"如何防止-jwt-被篡改","link":"#如何防止-jwt-被篡改","children":[]},{"level":2,"title":"如何加强 JWT 的安全性？","slug":"如何加强-jwt-的安全性","link":"#如何加强-jwt-的安全性","children":[]}],"git":{},"readingTime":{"minutes":5.48,"words":1645},"filePathRelative":"system-design/security/jwt-intro.md","excerpt":"<h2> 什么是 JWT?</h2>\\n<p>JWT （JSON Web Token） 是目前最流行的跨域认证解决方案，是一种基于 Token 的认证授权机制。 从 JWT 的全称可以看出，JWT 本身也是 Token，一种规范化之后的 JSON 结构的 Token。</p>\\n<p>JWT 自身包含了身份验证所需要的所有信息，因此，我们的服务器不需要存储 Session 信息。这显然增加了系统的可用性和伸缩性，大大减轻了服务端的压力。</p>\\n<p>可以看出，<strong>JWT 更符合设计 RESTful API 时的「Stateless（无状态）」原则</strong> 。</p>\\n<p>并且， 使用 JWT 认证可以有效避免 CSRF 攻击，因为 JWT 一般是存在在 localStorage 中，使用 JWT 进行身份验证的过程中是不会涉及到 Cookie 的。</p>","autoDesc":true}');export{e as data};
