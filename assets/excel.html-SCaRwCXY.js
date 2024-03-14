const e=JSON.parse('{"key":"v-ec693206","path":"/practice-manual/file-processing/excel.html","title":"Excel","lang":"zh-CN","frontmatter":{"title":"Excel","author":null,"category":"File","tag":"File","description":"Excel写入 注意，Excel不支持并发写入，在并发写入时会产生很多奇怪的问题 Zip bomb detected问题 Zip炸弹\\"是一个用于攻击向量的术语，其中一个小的zip文件会扩展为一个非常大的未压缩文件，因此会引起诸如耗尽内存或磁盘空间等问题。 通常，创建此类zip的目的是在从外部来源接收zip文件的系统上引起拒绝服务攻击。 由于.xlsx文件实际上是包含XML文件的压缩文件，因此有可能在POI中引起这种zip bomb漏洞。 为了防止这种情况的发生，Apache POI内置了一些防护措施，并且默认情况下启用了这些防护措施。因此，如果您创建的文件包含异常内容，例如如果许多行/列具有相同的内容，则可以使用这些保护措施并出现zip boom异常。","head":[["meta",{"property":"og:url","content":"https://hollowlatte.github.io/Note-Book/Note-Book/practice-manual/file-processing/excel.html"}],["meta",{"property":"og:site_name","content":"Note-Book"}],["meta",{"property":"og:title","content":"Excel"}],["meta",{"property":"og:description","content":"Excel写入 注意，Excel不支持并发写入，在并发写入时会产生很多奇怪的问题 Zip bomb detected问题 Zip炸弹\\"是一个用于攻击向量的术语，其中一个小的zip文件会扩展为一个非常大的未压缩文件，因此会引起诸如耗尽内存或磁盘空间等问题。 通常，创建此类zip的目的是在从外部来源接收zip文件的系统上引起拒绝服务攻击。 由于.xlsx文件实际上是包含XML文件的压缩文件，因此有可能在POI中引起这种zip bomb漏洞。 为了防止这种情况的发生，Apache POI内置了一些防护措施，并且默认情况下启用了这些防护措施。因此，如果您创建的文件包含异常内容，例如如果许多行/列具有相同的内容，则可以使用这些保护措施并出现zip boom异常。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Hollow-Latte"}],["meta",{"property":"article:tag","content":"File"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Excel\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hollow-Latte\\",\\"url\\":\\"https://hollowlatte.github.io/Note-Book\\"}]}"]]},"headers":[{"level":2,"title":"Excel写入","slug":"excel写入","link":"#excel写入","children":[]},{"level":2,"title":"Zip bomb detected问题","slug":"zip-bomb-detected问题","link":"#zip-bomb-detected问题","children":[]}],"git":{},"readingTime":{"minutes":0.94,"words":283},"filePathRelative":"practice-manual/file-processing/excel.md","excerpt":"<h2> Excel写入</h2>\\n<p>注意，Excel不支持并发写入，在并发写入时会产生很多奇怪的问题</p>\\n<h2> Zip bomb detected问题</h2>\\n<p>Zip炸弹\\"是一个用于攻击向量的术语，其中一个小的zip文件会扩展为一个非常大的未压缩文件，因此会引起诸如耗尽内存或磁盘空间等问题。</p>\\n<p>通常，创建此类zip的目的是在从外部来源接收zip文件的系统上引起拒绝服务攻击。</p>\\n<p>由于<code>.xlsx</code>文件实际上是包含XML文件的压缩文件，因此有可能在POI中引起这种zip bomb漏洞。</p>\\n<p>为了防止这种情况的发生，Apache POI内置了一些防护措施，并且默认情况下启用了这些防护措施。因此，如果您创建的文件包含异常内容，例如如果许多行/列具有相同的内容，则可以使用这些保护措施并出现zip\\nboom异常。</p>","autoDesc":true}');export{e as data};
