import{_ as i,c as s,o as a,ab as l}from"./chunks/framework.DCOvGndK.js";const g=JSON.parse('{"title":"智能合约开发2","description":"智能合约","frontmatter":{"title":"智能合约开发2","description":"智能合约","date":"2022-05-010","tags":["区块链"]},"headers":[],"relativePath":"posts/智能合约开发2.md","filePath":"posts/智能合约开发2.md"}'),t={name:"posts/智能合约开发2.md"},n=l(`<h3 id="合约的组成" tabindex="-1">合约的组成 <a class="header-anchor" href="#合约的组成" aria-label="Permalink to &quot;合约的组成&quot;">​</a></h3><div class="language-solidity vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">solidity</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">// SPDX-License-Identifier:  MIT //开源协议</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">pragma</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> solidity</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> ^0.8.0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> //编译器版本要大于0.8.0</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">contract</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> Counter</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  //定义合约</span></span>
<span class="line"><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">	uint</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> public</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> counter</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> //状态变量</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">	constructor</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">		counter </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">	}</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">	funtion </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">count</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">public</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> //合约函数</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">		counter</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">+</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">	}</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre></div><h3 id="solidity-语言" tabindex="-1">solidity 语言 <a class="header-anchor" href="#solidity-语言" aria-label="Permalink to &quot;solidity 语言&quot;">​</a></h3><ul><li>静态类型、编译型、高级语言</li><li>针对 EVM 专门设计 zh</li><li>受 c++、javascript 等语言影响</li><li>文档<a href="https://learnblockchain.cn/docs/solidity/" target="_blank" rel="noreferrer">中文</a>,<a href="https://docs.soliditylang.org/" target="_blank" rel="noreferrer">官方</a></li></ul><h3 id="solidity-数据类型" tabindex="-1">solidity 数据类型 <a class="header-anchor" href="#solidity-数据类型" aria-label="Permalink to &quot;solidity 数据类型&quot;">​</a></h3><ul><li>值类型 <ul><li>布尔、整型、定长浮点型、定长字节数组、枚举、函数类型、地址类型</li><li>十六进制常量、有理数和整型常量、字符串常量、地址常量</li></ul></li><li>引用类型 <ul><li>结构体</li><li>数组</li></ul></li><li>映射类型</li></ul><h4 id="整型" tabindex="-1">整型 <a class="header-anchor" href="#整型" aria-label="Permalink to &quot;整型&quot;">​</a></h4><p>int/uint,uint8...uint256</p><p>支持的运算符</p><ul><li>比较运算：&lt;=,&lt;,==,!=,&gt;=,&gt;</li><li>位运算：&amp;,|,^(异或),~(位取反)</li><li>算数运算：+,-,*,/,%（取余数）,**（幂）</li><li>移位：&lt;&lt;(左移),&gt;&gt;(右移)</li></ul><p>在使用整型时，要特别注意整型的大小及所能容纳的最大值和最小值，如 uint8 的最大值是 0xff(255),最小值是 0</p><p>从 solidity0.6.0 版本开始可以通过 Type(T).min 和 Type(T).max 获得整型的最小值和最大值</p><h4 id="地址类型" tabindex="-1">地址类型 <a class="header-anchor" href="#地址类型" aria-label="Permalink to &quot;地址类型&quot;">​</a></h4><p>solidity 使用地址类型来表示一个账号，地址类型有两种形式</p><ul><li>address:一个 20 字节的值</li><li>address payable:表示可支付地址，与 address 相同也是 20 字节，不过它有成员函数 transfer 和 send</li></ul><p>成员函数</p><ul><li><code>&lt;address&gt;balance(uint256)</code>:返回地址的余额</li><li><code>&lt;address payable&gt;transfer(uint256 amount)</code>:向地址发送以太币，失败时抛出异常</li><li><code>&lt;address payable&gt;send(uint256 amount) returns(bool)</code>:向地址发送以太币，失败时返回 false</li><li>3 个底层成员函数：call,delegatecall,staticcall 例如<code>&lt;address&gt;.call(bytes memory) returns (bool, bytes memory)</code>，通常用于合约交互，直接控制编码的方式调用合约函数</li></ul><h4 id="合约类型" tabindex="-1">合约类型 <a class="header-anchor" href="#合约类型" aria-label="Permalink to &quot;合约类型&quot;">​</a></h4><p>每个合约都是一个类型</p><p>合约可以显示地转换为 address 类型，从而可以使用地址类型的成员函数</p><p>这段时间太忙了，先学到这吧...挖坑，后面再填</p>`,21),e=[n];function h(p,r,k,d,o,c){return a(),s("div",null,e)}const u=i(t,[["render",h]]);export{g as __pageData,u as default};
