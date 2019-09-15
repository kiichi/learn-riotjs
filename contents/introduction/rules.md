# Rules

I set following three rules to begin with. This is not universal RiotJS rules that you have to follow; however, I often apply them in the professional environment as well. I would like to achieve our common goal to simplify our workflow either learning process or professional enviornment.

<ol>
    <li>No transpiler - This tutorial only need your browser and simple server such as live-server. If I encounter situation that I need a transpiling process, probably I use other Framework.</li>
    <li>Tag extension is .html - I know RiotJS recommends .riot as default tag extension, but this causes side effect such as text editor highlight or production web server MIME issue. This is one of point that I don't agree with main RiotJS community.</li>
    <li>ES6 - I stick with ES6, and I already mentioned that this book example might not be practical if you want to support all browsers (e.g. general shopping cart app). Most of browsers, such as Chrome, Firefox, and Safari are compatible with syntax that I use. I strongly discourage using ES5. It's not just religous war over syntax suger, but mixing two different syntax often causes serious side effects, such as lexical scoping and variable hoisting issue. By the way, if you are student, don't be bothered by those buzz words until job interview! If you are not familar with following basic keywoards, please clarify on the web before proceed.
    <ul>
    <li>Arrow operator</li>
    <li>Class</li>
    <li>module system : import / export</li>
    <li>const</li>
    <li>find, map, reduce, and other ES6 functions</li>
    <li>async / await</li>
    </ul>
    </li>
</ol>