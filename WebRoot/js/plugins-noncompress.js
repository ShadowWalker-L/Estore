/*
 * touchSwipe - jQuery Plugin
 * https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
 * http://labs.skinkers.com/touchSwipe/
 * http://plugins.jquery.com/project/touchSwipe
 *
 * Copyright (c) 2010 Matt Bryson (www.skinkers.com)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * $version: 1.3.3
 */
(function(g) {
    function P(c) {
        if (c && void 0 === c.allowPageScroll && (void 0 !== c.swipe || void 0 !== c.swipeStatus)) c.allowPageScroll = G;
        c || (c = {});
        c = g.extend({}, g.fn.swipe.defaults, c);
        return this.each(function() {
            var b = g(this),
                f = b.data(w);
            f || (f = new W(this, c), b.data(w, f))
        })
    }

    function W(c, b) {
        var f, p, r, s;

        function H(a) {
            var a = a.originalEvent,
                c, Q = n ? a.touches[0] : a;
            d = R;
            n ? h = a.touches.length : a.preventDefault();
            i = 0;
            j = null;
            k = 0;
            !n || h === b.fingers || b.fingers === x ? (r = f = Q.pageX, s = p = Q.pageY, y = (new Date).getTime(), b.swipeStatus && (c = l(a, d))) : t(a);
            if (!1 === c) return d = m, l(a, d), c;
            e.bind(I, J);
            e.bind(K, L)
        }

        function J(a) {
            a = a.originalEvent;
            if (!(d === q || d === m)) {
                var c, e = n ? a.touches[0] : a;
                f = e.pageX;
                p = e.pageY;
                u = (new Date).getTime();
                j = S();
                n && (h = a.touches.length);
                d = z;
                var e = a,
                    g = j;
                if (b.allowPageScroll === G) e.preventDefault();
                else {
                    var o = b.allowPageScroll === T;
                    switch (g) {
                        case v:
                            (b.swipeLeft && o || !o && b.allowPageScroll != M) && e.preventDefault();
                            break;
                        case A:
                            (b.swipeRight && o || !o && b.allowPageScroll != M) && e.preventDefault();
                            break;
                        case B:
                            (b.swipeUp && o || !o && b.allowPageScroll != N) && e.preventDefault();
                            break;
                        case C:
                            (b.swipeDown && o || !o && b.allowPageScroll != N) && e.preventDefault()
                    }
                }
                h === b.fingers || b.fingers === x || !n ? (i = U(), k = u - y, b.swipeStatus && (c = l(a, d, j, i, k)), b.triggerOnTouchEnd || (e = !(b.maxTimeThreshold ? !(k >= b.maxTimeThreshold) : 1), !0 === D() ? (d = q, c = l(a, d)) : e && (d = m, l(a, d)))) : (d = m, l(a, d));
                !1 === c && (d = m, l(a, d))
            }
        }

        function L(a) {
            a = a.originalEvent;
            a.preventDefault();
            u = (new Date).getTime();
            i = U();
            j = S();
            k = u - y;
            if (b.triggerOnTouchEnd || !1 === b.triggerOnTouchEnd && d === z)
                if (d = q, (h === b.fingers || b.fingers === x || !n) && 0 !== f) {
                    var c = !(b.maxTimeThreshold ? !(k >= b.maxTimeThreshold) : 1);
                    if ((!0 === D() || null === D()) && !c) l(a, d);
                    else if (c || !1 === D()) d = m, l(a, d)
                } else d = m, l(a, d);
            else d === z && (d = m, l(a, d));
            e.unbind(I, J, !1);
            e.unbind(K, L, !1)
        }

        function t() {
            y = u = p = f = s = r = h = 0
        }

        function l(a, c) {
            var d = void 0;
            b.swipeStatus && (d = b.swipeStatus.call(e, a, c, j || null, i || 0, k || 0, h));
            if (c === m && b.click && (1 === h || !n) && (isNaN(i) || 0 === i)) d = b.click.call(e, a, a.target);
            if (c == q) switch (b.swipe && (d = b.swipe.call(e, a, j, i, k, h)), j) {
                case v:
                    b.swipeLeft && (d = b.swipeLeft.call(e, a, j, i, k, h));
                    break;
                case A:
                    b.swipeRight && (d = b.swipeRight.call(e, a, j, i, k, h));
                    break;
                case B:
                    b.swipeUp && (d = b.swipeUp.call(e, a, j, i, k, h));
                    break;
                case C:
                    b.swipeDown && (d = b.swipeDown.call(e, a, j, i, k, h))
            }(c === m || c === q) && t(a);
            return d
        }

        function D() {
            return null !== b.threshold ? i >= b.threshold : null
        }

        function U() {
            return Math.round(Math.sqrt(Math.pow(f - r, 2) + Math.pow(p - s, 2)))
        }

        function S() {
            var a;
            a = Math.atan2(p - s, r - f);
            a = Math.round(180 * a / Math.PI);
            0 > a && (a = 360 - Math.abs(a));
            return 45 >= a && 0 <= a ? v : 360 >= a && 315 <= a ? v : 135 <= a && 225 >= a ? A : 45 < a && 135 > a ? C : B
        }

        function V() {
            e.unbind(E, H);
            e.unbind(F, t);
            e.unbind(I, J);
            e.unbind(K, L)
        }
        var O = n || !b.fallbackToMouseEvents,
            E = O ? "touchstart" : "mousedown",
            I = O ? "touchmove" : "mousemove",
            K = O ? "touchend" : "mouseup",
            F = "touchcancel",
            i = 0,
            j = null,
            k = 0,
            e = g(c),
            d = "start",
            h = 0,
            y = p = f = s = r = 0,
            u = 0;
        try {
            e.bind(E, H), e.bind(F, t)
        } catch (P) {
            g.error("events not supported " + E + "," + F + " on jQuery.swipe")
        }
        this.enable = function() {
            e.bind(E, H);
            e.bind(F, t);
            return e
        };
        this.disable = function() {
            V();
            return e
        };
        this.destroy = function() {
            V();
            e.data(w, null);
            return e
        }
    }
    var v = "left",
        A = "right",
        B = "up",
        C = "down",
        G = "none",
        T = "auto",
        M = "horizontal",
        N = "vertical",
        x = "all",
        R = "start",
        z = "move",
        q = "end",
        m = "cancel",
        n = "ontouchstart" in window,
        w = "TouchSwipe";
    g.fn.swipe = function(c) {
        var b = g(this),
            f = b.data(w);
        if (f && "string" === typeof c) {
            if (f[c]) return f[c].apply(this, Array.prototype.slice.call(arguments, 1));
            g.error("Method " + c + " does not exist on jQuery.swipe")
        } else if (!f && ("object" === typeof c || !c)) return P.apply(this, arguments);
        return b
    };
    g.fn.swipe.defaults = {
        fingers: 1,
        threshold: 75,
        maxTimeThreshold: null,
        swipe: null,
        swipeLeft: null,
        swipeRight: null,
        swipeUp: null,
        swipeDown: null,
        swipeStatus: null,
        click: null,
        triggerOnTouchEnd: !0,
        allowPageScroll: "auto",
        fallbackToMouseEvents: !0
    };
    g.fn.swipe.phases = {
        PHASE_START: R,
        PHASE_MOVE: z,
        PHASE_END: q,
        PHASE_CANCEL: m
    };
    g.fn.swipe.directions = {
        LEFT: v,
        RIGHT: A,
        UP: B,
        DOWN: C
    };
    g.fn.swipe.pageScroll = {
        NONE: G,
        HORIZONTAL: M,
        VERTICAL: N,
        AUTO: T
    };
    g.fn.swipe.fingers = {
        ONE: 1,
        TWO: 2,
        THREE: 3,
        ALL: x
    }
})(jQuery);

// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function f() {
    log.history = log.history || [];
    log.history.push(arguments);
    if (this.console) {
        var args = arguments,
            newarr;
        args.callee = args.callee.caller;
        newarr = [].slice.call(args);
        if (typeof console.log === 'object') log.apply.call(console.log, console, newarr);
        else console.log.apply(console, newarr);
    }
};

// make it safe to use console.log always
(function(a) {
    function b() {}
    for (var c = "assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","), d; !!(d = c.pop());) {
        a[d] = a[d] || b;
    }
})
(function() {
    try {
        console.log();
        return window.console;
    } catch (a) {
        return (window.console = {});
    }
}());

/*!
 * jQzoom Evolution Library v2.3  - Javascript Image magnifier
 * http://www.mind-projects.it
 *
 * Copyright 2011, Engineer Marco Renzi
 * Licensed under the BSD license.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of the organization nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 *
 * Date: 03 May 2011 22:16:00
 */
eval(function(p, a, c, k, e, r) {
    e = function(c) {
        return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
    };
    if (!''.replace(/^/, String)) {
        while (c--) r[e(c)] = k[c] || e(c);
        k = [function(e) {
            return r[e]
        }];
        e = function() {
            return '\\w+'
        };
        c = 1
    };
    while (c--)
        if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
    return p
}('(8($){9 v=($.2f!==3D&&$.2f.3C&&$.2f.3B<7);9 w=$(1V.1X);9 y=$(y);9 z=F;$.3p.16=8(b){I 5.2e(8(){9 a=5.3n.3m();A(a==\'a\'){S 16(5,b)}})};16=8(g,h){9 j=2R;j=$(g).1T("16");A(j)I j;9 k=5;9 l=$.1A({},$.16.2H,h||{});k.48=g;g.1q=$(g).Q(\'1q\');g.1S=F;g.47=F;g.1w=F;g.1l=F;g.1c={};g.2G=2R;g.18={};g.1M=F;$(g).D({\'40-1j\':\'1v\',\'3S-4b\':\'1v\'});9 m=$("3Q:3G(0)",g);g.W=$(g).Q(\'W\');g.29=m.Q(\'W\');9 n=($.1u(g.W).Y>0)?g.W:g.29;9 p=S 2v(m);9 q=S 2s();9 r=S 2r();9 s=S 2q();9 t=S 2p();$(g).1D(\'2n\',8(e){e.2m();I F});9 u=[\'1Y\',\'1e\',\'1r\',\'1s\'];A($.3Z($.1u(l.H),u)<0){l.H=\'1Y\'}$.1A(k,{27:8(){A($(".N",g).Y==0){g.N=$(\'<12/>\').1U(\'N\');m.3R(g.N)}A($(".25",g).Y==0){q.X()}A($(".23",g).Y==0){r.X()}A($(".2z",g).Y==0){t.X()}A(l.21||l.H==\'1e\'||l.1E){k.1F()}k.2w()},2w:8(){A(l.H==\'1e\'){$(".N",g).3e(8(){g.1M=15});$(".N",g).3d(8(){g.1M=F});1V.1X.3c=8(){I F};$(".N",g).D({1L:\'1p\'});$(".25",g).D({1L:\'3I\'})}A(l.H==\'1r\'){$(".1O",g).D({1L:\'3F\'})}$(".N",g).1D(\'3A 3o\',8(a){m.Q(\'W\',\'\');$(g).Q(\'W\',\'\');g.1S=15;p.1n();A(g.1l){k.28(a)}19{k.1F()}});$(".N",g).1D(\'3N\',8(a){k.2g()});$(".N",g).1D(\'3O\',8(e){A(e.2b>p.E.r||e.2b<p.E.l||e.1Z<p.E.t||e.1Z>p.E.b){q.1W();I F}g.1S=15;A(g.1l&&!$(\'.23\',g).3j(\':2y\')){k.28(e)}A(g.1l&&(l.H!=\'1e\'||(l.H==\'1e\'&&g.1M))){q.1h(e)}});9 c=S 2x();9 i=0;9 d=S 2x();d=$(\'a\').3V(8(){9 a=S 41("3f[\\\\s]*:[\\\\s]*\'"+$.1u(g.1q)+"\'","i");9 b=$(5).Q(\'1q\');A(a.3g(b)){I 5}});A(d.Y>0){9 f=d.3l(0,1);d.3w(f)}d.2e(8(){A(l.21){9 a=$.1A({},1N("("+$.1u($(5).Q(\'1q\'))+")"));c[i]=S 20();c[i].1b=a.1x;i++}$(5).2n(8(e){d.2e(8(){$(5).3K(\'2h\')});e.2m();k.2j(5);I F})})},1F:8(){A(g.1l==F&&g.1w==F){9 a=$(g).Q(\'2k\');g.1w=15;s.2l(a)}},28:8(e){3b(g.2G);q.T();r.T()},2g:8(e){1J(l.H){1o\'1e\':U;1p:m.Q(\'W\',g.29);$(g).Q(\'W\',g.W);A(l.1E){q.1W()}19{r.P();q.P()}U}g.1S=F},2j:8(a){g.1w=F;g.1l=F;9 b=S 3h();b=$.1A({},1N("("+$.1u($(a).Q(\'1q\'))+")"));A(b.1C&&b.1x){9 c=b.1C;9 d=b.1x;$(a).1U(\'2h\');$(g).Q(\'2k\',d);m.Q(\'1b\',c);q.P();r.P();k.1F()}19{22(\'2J :: 2Q 2S 1B 1x 2V 1C.\');24\'2J :: 2Q 2S 1B 1x 2V 1C.\';}I F}});A(m[0].3J){p.1n();A($(".N",g).Y==0)k.27()}8 2v(c){9 d=5;5.6=c[0];5.2i=8(){9 a=0;a=c.D(\'26-C-K\');M=\'\';9 b=0;b=c.D(\'26-B-K\');L=\'\';A(a){1B(i=0;i<3;i++){9 x=[];x=a.1G(i,1);A(2o(x)==F){M=M+\'\'+a.1G(i,1)}19{U}}}A(b){1B(i=0;i<3;i++){A(!2o(b.1G(i,1))){L=L+b.1G(i,1)}19{U}}}d.M=(M.Y>0)?1N(M):0;d.L=(L.Y>0)?1N(L):0};5.1n=8(){d.2i();d.w=c.K();d.h=c.Z();d.1k=c.3i();d.1g=c.3k();d.E=c.1f();d.E.l=c.1f().B+d.L;d.E.t=c.1f().C+d.M;d.E.r=d.w+d.E.l;d.E.b=d.h+d.E.t;d.2t=c.1f().B+d.1k;d.3q=c.1f().C+d.1g};5.6.2u=8(){22(\'1Q 1K 1I 11.\');24\'1Q 1K 1I 11.\';};5.6.3a=8(){d.1n();A($(".N",g).Y==0)k.27()};I d};8 2p(){9 a=5;5.X=8(){5.6=$(\'<12/>\').1U(\'2z\').D(\'2a\',\'2A\').2B(l.2C);$(\'.N\',g).X(5.6)};5.T=8(){5.6.C=(p.1g-5.6.Z())/2;5.6.B=(p.1k-5.6.K())/2;5.6.D({C:5.6.C,B:5.6.B,V:\'13\',2a:\'2y\'})};5.P=8(){5.6.D(\'2a\',\'2A\')};I 5}8 2s(){9 d=5;5.6=$(\'<12/>\').1U(\'25\');5.X=8(){$(\'.N\',g).X($(5.6).P());A(l.H==\'1s\'){5.11=S 20();5.11.1b=p.6.1b;$(5.6).2E().X(5.11)}};5.2F=8(){5.6.w=(1P((l.1a)/g.1c.x)>p.w)?p.w:1P((l.1a)/g.1c.x);5.6.h=(1P((l.1d)/g.1c.y)>p.h)?p.h:1P((l.1d)/g.1c.y);5.6.C=(p.1g-5.6.h-2)/2;5.6.B=(p.1k-5.6.w-2)/2;5.6.D({C:0,B:0,K:5.6.w+\'G\',Z:5.6.h+\'G\',V:\'13\',1y:\'1v\',2I:1+\'G\'});A(l.H==\'1s\'){5.11.1b=p.6.1b;$(5.6).D({\'2c\':1});$(5.11).D({V:\'13\',B:-(5.6.B+1-p.L)+\'G\',C:-(5.6.C+1-p.M)+\'G\'})}};5.1W=8(){5.6.C=(p.1g-5.6.h-2)/2;5.6.B=(p.1k-5.6.w-2)/2;5.6.D({C:5.6.C,B:5.6.B});A(l.H==\'1s\'){$(5.11).D({V:\'13\',B:-(5.6.B+1-p.L)+\'G\',C:-(5.6.C+1-p.M)+\'G\'})}s.1h()};5.1h=8(e){g.18.x=e.2b;g.18.y=e.1Z;9 b=0;9 c=0;8 2K(a){I g.18.x-(a.w)/2<p.E.l}8 2L(a){I g.18.x+(a.w)/2>p.E.r}8 2M(a){I g.18.y-(a.h)/2<p.E.t}8 2N(a){I g.18.y+(a.h)/2>p.E.b}b=g.18.x+p.L-p.E.l-(5.6.w+2)/2;c=g.18.y+p.M-p.E.t-(5.6.h+2)/2;A(2K(5.6)){b=p.L-1}19 A(2L(5.6)){b=p.w+p.L-5.6.w-1}A(2M(5.6)){c=p.M-1}19 A(2N(5.6)){c=p.h+p.M-5.6.h-1}5.6.B=b;5.6.C=c;5.6.D({\'B\':b+\'G\',\'C\':c+\'G\'});A(l.H==\'1s\'){$(5.11).D({V:\'13\',B:-(5.6.B+1-p.L)+\'G\',C:-(5.6.C+1-p.M)+\'G\'})}s.1h()};5.P=8(){m.D({\'2c\':1});5.6.P()};5.T=8(){A(l.H!=\'1r\'&&(l.2O||l.H==\'1e\')){5.6.T()}A(l.H==\'1s\'){m.D({\'2c\':l.2P})}};5.2d=8(){9 o={};o.B=d.6.B;o.C=d.6.C;I o};I 5};8 2r(){9 b=5;5.6=$("<12 1z=\'23\'><12 1z=\'1O\'><12 1z=\'1t\'></12><12 1z=\'1H\'></12></12></12>");5.R=$(\'<2T 1z="3r" 1b="3s:\\\'\\\';" 3t="0" 3u="0" 3v="2U" 3x="3y" 3z="0" ></2T>\');5.1h=8(){5.6.1m=0;5.6.1i=0;A(l.H!=\'1r\'){1J(l.V){1o"B":5.6.1m=(p.E.l-p.L-J.O(l.14)-l.1a>0)?(0-l.1a-J.O(l.14)):(p.1k+J.O(l.14));5.6.1i=J.O(l.17);U;1o"C":5.6.1m=J.O(l.14);5.6.1i=(p.E.t-p.M-J.O(l.17)-l.1d>0)?(0-l.1d-J.O(l.17)):(p.1g+J.O(l.17));U;1o"2U":5.6.1m=J.O(l.14);5.6.1i=(p.E.t-p.M+p.1g+J.O(l.17)+l.1d<2W.Z)?(p.1g+J.O(l.17)):(0-l.1d-J.O(l.17));U;1p:5.6.1m=(p.2t+J.O(l.14)+l.1a<2W.K)?(p.1k+J.O(l.14)):(0-l.1a-J.O(l.14));5.6.1i=J.O(l.17);U}}5.6.D({\'B\':5.6.1m+\'G\',\'C\':5.6.1i+\'G\'});I 5};5.X=8(){$(\'.N\',g).X(5.6);5.6.D({V:\'13\',1y:\'1v\',2X:3H});A(l.H==\'1r\'){5.6.D({1L:\'1p\'});9 a=(p.L==0)?1:p.L;$(\'.1O\',5.6).D({K:p.w+\'G\',2I:a+\'G\'});$(\'.1H\',5.6).D({K:\'1R%\',Z:p.h+\'G\'});$(\'.1t\',5.6).D({K:\'1R%\',V:\'13\'})}19{$(\'.1O\',5.6).D({K:J.2Y(l.1a)+\'G\'});$(\'.1H\',5.6).D({K:\'1R%\',Z:J.2Y(l.1d)+\'G\'});$(\'.1t\',5.6).D({K:\'1R%\',V:\'13\'})}$(\'.1t\',5.6).P();A(l.W&&n.Y>0){$(\'.1t\',5.6).2B(n).T()}b.1h()};5.P=8(){1J(l.2Z){1o\'3L\':5.6.3M(l.30,8(){});U;1p:5.6.P();U}5.R.P()};5.T=8(){1J(l.31){1o\'3P\':5.6.32();5.6.32(l.33,8(){});U;1p:5.6.T();U}A(v&&l.H!=\'1r\'){5.R.K=5.6.K();5.R.Z=5.6.Z();5.R.B=5.6.1m;5.R.C=5.6.1i;5.R.D({1y:\'34\',V:"13",B:5.R.B,C:5.R.C,2X:3T,K:5.R.K+\'G\',Z:5.R.Z+\'G\'});$(\'.N\',g).X(5.R);5.R.T()}}};8 2q(){9 c=5;5.6=S 20();5.2l=8(a){t.T();5.3U=a;5.6.1j.V=\'13\';5.6.1j.26=\'35\';5.6.1j.1y=\'1v\';5.6.1j.B=\'-3W\';5.6.1j.C=\'35\';1V.1X.3X(5.6);5.6.1b=a};5.1n=8(){9 a=$(5.6);9 b={};5.6.1j.1y=\'34\';c.w=a.K();c.h=a.Z();c.E=a.1f();c.E.l=a.1f().B;c.E.t=a.1f().C;c.E.r=c.w+c.E.l;c.E.b=c.h+c.E.t;b.x=(c.w/p.w);b.y=(c.h/p.h);g.1c=b;1V.1X.3Y(5.6);$(\'.1H\',g).2E().X(5.6);q.2F()};5.6.2u=8(){22(\'1Q 1K 1I 36 37 11.\');24\'1Q 1K 1I 36 37 11.\';};5.6.3a=8(){c.1n();t.P();g.1w=F;g.1l=15;A(l.H==\'1e\'||l.1E){q.T();r.T();q.1W()}};5.1h=8(){9 a=-g.1c.x*(q.2d().B-p.L+1);9 b=-g.1c.y*(q.2d().C-p.M+1);$(5.6).D({\'B\':a+\'G\',\'C\':b+\'G\'})};I 5};$(g).1T("16",k)};$.16={2H:{H:\'1Y\',1a:38,1d:38,14:10,17:0,V:"42",21:15,2C:\'43 44\',W:15,2O:15,2P:0.4,1E:F,31:\'T\',2Z:\'P\',33:\'45\',30:\'46\'},39:8(a){9 b=$(a).1T(\'16\');b.39();I F},2D:8(a){9 b=$(a).1T(\'16\');b.2D();I F},49:8(a){z=15},4a:8(a){z=F}}})(3E);', 62, 260, '|||||this|node||function|var|||||||||||||||||||||||||||if|left|top|css|pos|false|px|zoomType|return|Math|width|bleft|btop|zoomPad|abs|hide|attr|ieframe|new|show|break|position|title|append|length|height||image|div|absolute|xOffset|true|jqzoom|yOffset|mousepos|else|zoomWidth|src|scale|zoomHeight|drag|offset|oh|setposition|toppos|style|ow|largeimageloaded|leftpos|fetchdata|case|default|rel|innerzoom|reverse|zoomWrapperTitle|trim|none|largeimageloading|largeimage|display|class|extend|for|smallimage|bind|alwaysOn|load|substr|zoomWrapperImage|loading|switch|while|cursor|mouseDown|eval|zoomWrapper|parseInt|Problems|100|zoom_active|data|addClass|document|setcenter|body|standard|pageY|Image|preloadImages|alert|zoomWindow|throw|zoomPup|border|create|activate|imagetitle|visibility|pageX|opacity|getoffset|each|browser|deactivate|zoomThumbActive|findborder|swapimage|href|loadimage|preventDefault|click|isNaN|Loader|Largeimage|Stage|Lens|rightlimit|onerror|Smallimage|init|Array|visible|zoomPreload|hidden|html|preloadText|enable|empty|setdimensions|timer|defaults|borderWidth|ERROR|overleft|overright|overtop|overbottom|lens|imageOpacity|Missing|null|parameter|iframe|bottom|or|screen|zIndex|round|hideEffect|fadeoutSpeed|showEffect|fadeIn|fadeinSpeed|block|0px|the|big|300|disable|onload|clearTimeout|ondragstart|mouseup|mousedown|gallery|test|Object|outerWidth|is|outerHeight|splice|toLowerCase|nodeName|mouseover|fn|bottomlimit|zoomIframe|javascript|marginwidth|marginheight|align|push|scrolling|no|frameborder|mouseenter|version|msie|undefined|jQuery|crosshair|eq|5001|move|complete|removeClass|fadeout|fadeOut|mouseleave|mousemove|fadein|img|wrap|text|99|url|filter|5000px|appendChild|removeChild|inArray|outline|RegExp|right|Loading|zoom|slow|2000|zoom_disabled|el|disableAll|enableAll|decoration'.split('|'), 0, {}));

/*!
 * SimpleModal 1.4.4 - jQuery Plugin
 * http://simplemodal.com/
 * Copyright (c) 2013 Eric Martin
 * Licensed under MIT and GPL
 * Date: Sun, Jan 20 2013 15:58:56 -0800
 */
(function(b) {
    "function" === typeof define && define.amd ? define(["jquery"], b) : b(jQuery)
})(function(b) {
    var j = [],
        n = b(document),
        k = navigator.userAgent.toLowerCase(),
        l = b(window),
        g = [],
        o = null,
        p = /msie/.test(k) && !/opera/.test(k),
        q = /opera/.test(k),
        m, r;
    m = p && /msie 6./.test(k) && "object" !== typeof window.XMLHttpRequest;
    r = p && /msie 7.0/.test(k);
    b.modal = function(a, h) {
        return b.modal.impl.init(a, h)
    };
    b.modal.close = function() {
        b.modal.impl.close()
    };
    b.modal.focus = function(a) {
        b.modal.impl.focus(a)
    };
    b.modal.setContainerDimensions =
        function() {
            b.modal.impl.setContainerDimensions()
        };
    b.modal.setPosition = function() {
        b.modal.impl.setPosition()
    };
    b.modal.update = function(a, h) {
        b.modal.impl.update(a, h)
    };
    b.fn.modal = function(a) {
        return b.modal.impl.init(this, a)
    };
    b.modal.defaults = {
        appendTo: "body",
        focus: !0,
        opacity: 50,
        overlayId: "simplemodal-overlay",
        overlayCss: {},
        containerId: "simplemodal-container",
        containerCss: {},
        dataId: "simplemodal-data",
        dataCss: {},
        minHeight: null,
        minWidth: null,
        maxHeight: null,
        maxWidth: null,
        autoResize: !1,
        autoPosition: !0,
        zIndex: 1E3,
        close: !0,
        closeHTML: '<a class="modalCloseImg" title="Close"></a>',
        closeClass: "simplemodal-close",
        escClose: !0,
        overlayClose: !1,
        fixed: !0,
        position: null,
        persist: !1,
        modal: !0,
        onOpen: null,
        onShow: null,
        onClose: null
    };
    b.modal.impl = {
        d: {},
        init: function(a, h) {
            if (this.d.data) return !1;
            o = p && !b.support.boxModel;
            this.o = b.extend({}, b.modal.defaults, h);
            this.zIndex = this.o.zIndex;
            this.occb = !1;
            if ("object" === typeof a) {
                if (a = a instanceof b ? a : b(a), this.d.placeholder = !1, 0 < a.parent().parent().size() && (a.before(b("<span></span>").attr("id",
                        "simplemodal-placeholder").css({
                        display: "none"
                    })), this.d.placeholder = !0, this.display = a.css("display"), !this.o.persist)) this.d.orig = a.clone(!0)
            } else if ("string" === typeof a || "number" === typeof a) a = b("<div></div>").html(a);
            else return alert("SimpleModal Error: Unsupported data type: " + typeof a), this;
            this.create(a);
            this.open();
            b.isFunction(this.o.onShow) && this.o.onShow.apply(this, [this.d]);
            return this
        },
        create: function(a) {
            this.getDimensions();
            if (this.o.modal && m) this.d.iframe = b('<iframe src="javascript:false;"></iframe>').css(b.extend(this.o.iframeCss, {
                display: "none",
                opacity: 0,
                position: "fixed",
                height: g[0],
                width: g[1],
                zIndex: this.o.zIndex,
                top: 0,
                left: 0
            })).appendTo(this.o.appendTo);
            this.d.overlay = b("<div></div>").attr("id", this.o.overlayId).addClass("simplemodal-overlay").css(b.extend(this.o.overlayCss, {
                display: "none",
                opacity: this.o.opacity / 100,
                height: this.o.modal ? j[0] : 0,
                width: this.o.modal ? j[1] : 0,
                position: "fixed",
                left: 0,
                top: 0,
                zIndex: this.o.zIndex + 1
            })).appendTo(this.o.appendTo);
            this.d.container = b("<div></div>").attr("id", this.o.containerId).addClass("simplemodal-container").css(b.extend({
                position: this.o.fixed ?
                    "fixed" : "absolute"
            }, this.o.containerCss, {
                display: "none",
                zIndex: this.o.zIndex + 2
            })).append(this.o.close && this.o.closeHTML ? b(this.o.closeHTML).addClass(this.o.closeClass) : "").appendTo(this.o.appendTo);
            this.d.wrap = b("<div></div>").attr("tabIndex", -1).addClass("simplemodal-wrap").css({
                height: "100%",
                outline: 0,
                width: "100%"
            }).appendTo(this.d.container);
            this.d.data = a.attr("id", a.attr("id") || this.o.dataId).addClass("simplemodal-data").css(b.extend(this.o.dataCss, {
                display: "none"
            })).appendTo("body");
            this.setContainerDimensions();
            this.d.data.appendTo(this.d.wrap);
            (m || o) && this.fixIE()
        },
        bindEvents: function() {
            var a = this;
            b("." + a.o.closeClass).bind("click.simplemodal", function(b) {
                b.preventDefault();
                a.close()
            });
            a.o.modal && a.o.close && a.o.overlayClose && a.d.overlay.bind("click.simplemodal", function(b) {
                b.preventDefault();
                a.close()
            });
            n.bind("keydown.simplemodal", function(b) {
                a.o.modal && 9 === b.keyCode ? a.watchTab(b) : a.o.close && a.o.escClose && 27 === b.keyCode && (b.preventDefault(), a.close())
            });
            l.bind("resize.simplemodal orientationchange.simplemodal",
                function() {
                    a.getDimensions();
                    a.o.autoResize ? a.setContainerDimensions() : a.o.autoPosition && a.setPosition();
                    m || o ? a.fixIE() : a.o.modal && (a.d.iframe && a.d.iframe.css({
                        height: g[0],
                        width: g[1]
                    }), a.d.overlay.css({
                        height: j[0],
                        width: j[1]
                    }))
                })
        },
        unbindEvents: function() {
            b("." + this.o.closeClass).unbind("click.simplemodal");
            n.unbind("keydown.simplemodal");
            l.unbind(".simplemodal");
            this.d.overlay.unbind("click.simplemodal")
        },
        fixIE: function() {
            var a = this.o.position;
            b.each([this.d.iframe || null, !this.o.modal ? null : this.d.overlay,
                "fixed" === this.d.container.css("position") ? this.d.container : null
            ], function(b, e) {
                if (e) {
                    var f = e[0].style;
                    f.position = "absolute";
                    if (2 > b) f.removeExpression("height"), f.removeExpression("width"), f.setExpression("height", 'document.body.scrollHeight > document.body.clientHeight ? document.body.scrollHeight : document.body.clientHeight + "px"'), f.setExpression("width", 'document.body.scrollWidth > document.body.clientWidth ? document.body.scrollWidth : document.body.clientWidth + "px"');
                    else {
                        var c, d;
                        a && a.constructor ===
                            Array ? (c = a[0] ? "number" === typeof a[0] ? a[0].toString() : a[0].replace(/px/, "") : e.css("top").replace(/px/, ""), c = -1 === c.indexOf("%") ? c + ' + (t = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"' : parseInt(c.replace(/%/, "")) + ' * ((document.documentElement.clientHeight || document.body.clientHeight) / 100) + (t = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"', a[1] && (d = "number" === typeof a[1] ?
                                a[1].toString() : a[1].replace(/px/, ""), d = -1 === d.indexOf("%") ? d + ' + (t = document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft) + "px"' : parseInt(d.replace(/%/, "")) + ' * ((document.documentElement.clientWidth || document.body.clientWidth) / 100) + (t = document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft) + "px"')) : (c = '(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (t = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"',
                                d = '(document.documentElement.clientWidth || document.body.clientWidth) / 2 - (this.offsetWidth / 2) + (t = document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft) + "px"');
                        f.removeExpression("top");
                        f.removeExpression("left");
                        f.setExpression("top", c);
                        f.setExpression("left", d)
                    }
                }
            })
        },
        focus: function(a) {
            var h = this,
                a = a && -1 !== b.inArray(a, ["first", "last"]) ? a : "first",
                e = b(":input:enabled:visible:" + a, h.d.wrap);
            setTimeout(function() {
                    0 < e.length ? e.focus() : h.d.wrap.focus()
                },
                10)
        },
        getDimensions: function() {
            var a = "undefined" === typeof window.innerHeight ? l.height() : window.innerHeight;
            j = [n.height(), n.width()];
            g = [a, l.width()]
        },
        getVal: function(a, b) {
            return a ? "number" === typeof a ? a : "auto" === a ? 0 : 0 < a.indexOf("%") ? parseInt(a.replace(/%/, "")) / 100 * ("h" === b ? g[0] : g[1]) : parseInt(a.replace(/px/, "")) : null
        },
        update: function(a, b) {
            if (!this.d.data) return !1;
            this.d.origHeight = this.getVal(a, "h");
            this.d.origWidth = this.getVal(b, "w");
            this.d.data.hide();
            a && this.d.container.css("height", a);
            b && this.d.container.css("width",
                b);
            this.setContainerDimensions();
            this.d.data.show();
            this.o.focus && this.focus();
            this.unbindEvents();
            this.bindEvents()
        },
        setContainerDimensions: function() {
            var a = m || r,
                b = this.d.origHeight ? this.d.origHeight : q ? this.d.container.height() : this.getVal(a ? this.d.container[0].currentStyle.height : this.d.container.css("height"), "h"),
                a = this.d.origWidth ? this.d.origWidth : q ? this.d.container.width() : this.getVal(a ? this.d.container[0].currentStyle.width : this.d.container.css("width"), "w"),
                e = this.d.data.outerHeight(!0),
                f =
                this.d.data.outerWidth(!0);
            this.d.origHeight = this.d.origHeight || b;
            this.d.origWidth = this.d.origWidth || a;
            var c = this.o.maxHeight ? this.getVal(this.o.maxHeight, "h") : null,
                d = this.o.maxWidth ? this.getVal(this.o.maxWidth, "w") : null,
                c = c && c < g[0] ? c : g[0],
                d = d && d < g[1] ? d : g[1],
                i = this.o.minHeight ? this.getVal(this.o.minHeight, "h") : "auto",
                b = b ? this.o.autoResize && b > c ? c : b < i ? i : b : e ? e > c ? c : this.o.minHeight && "auto" !== i && e < i ? i : e : i,
                c = this.o.minWidth ? this.getVal(this.o.minWidth, "w") : "auto",
                a = a ? this.o.autoResize && a > d ? d : a < c ? c : a : f ?
                f > d ? d : this.o.minWidth && "auto" !== c && f < c ? c : f : c;
            this.d.container.css({
                height: b,
                width: a
            });
            this.d.wrap.css({
                overflow: e > b || f > a ? "auto" : "visible"
            });
            this.o.autoPosition && this.setPosition()
        },
        setPosition: function() {
            var a, b;
            a = g[0] / 2 - this.d.container.outerHeight(!0) / 2;
            b = g[1] / 2 - this.d.container.outerWidth(!0) / 2;
            var e = "fixed" !== this.d.container.css("position") ? l.scrollTop() : 0;
            this.o.position && "[object Array]" === Object.prototype.toString.call(this.o.position) ? (a = e + (this.o.position[0] || a), b = this.o.position[1] || b) :
                a = e + a;
            this.d.container.css({
                left: b,
                top: a
            })
        },
        watchTab: function(a) {
            if (0 < b(a.target).parents(".simplemodal-container").length) {
                if (this.inputs = b(":input:enabled:visible:first, :input:enabled:visible:last", this.d.data[0]), !a.shiftKey && a.target === this.inputs[this.inputs.length - 1] || a.shiftKey && a.target === this.inputs[0] || 0 === this.inputs.length) a.preventDefault(), this.focus(a.shiftKey ? "last" : "first")
            } else a.preventDefault(), this.focus()
        },
        open: function() {
            this.d.iframe && this.d.iframe.show();
            b.isFunction(this.o.onOpen) ?
                this.o.onOpen.apply(this, [this.d]) : (this.d.overlay.show(), this.d.container.show(), this.d.data.show());
            this.o.focus && this.focus();
            this.bindEvents()
        },
        close: function() {
            if (!this.d.data) return !1;
            this.unbindEvents();
            if (b.isFunction(this.o.onClose) && !this.occb) this.occb = !0, this.o.onClose.apply(this, [this.d]);
            else {
                if (this.d.placeholder) {
                    var a = b("#simplemodal-placeholder");
                    this.o.persist ? a.replaceWith(this.d.data.removeClass("simplemodal-data").css("display", this.display)) : (this.d.data.hide().remove(), a.replaceWith(this.d.orig))
                } else this.d.data.hide().remove();
                this.d.container.hide().remove();
                this.d.overlay.hide();
                this.d.iframe && this.d.iframe.hide().remove();
                this.d.overlay.remove();
                this.d = {}
            }
        }
    }
});


// JSON2 from https://github.com/douglascrockford/JSON-js
var JSON;
JSON || (JSON = {});
(function() {
    function k(a) {
        return a < 10 ? "0" + a : a
    }

    function o(a) {
        p.lastIndex = 0;
        return p.test(a) ? '"' + a.replace(p, function(a) {
            var c = r[a];
            return typeof c === "string" ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        }) + '"' : '"' + a + '"'
    }

    function l(a, j) {
        var c, d, h, m, g = e,
            f, b = j[a];
        b && typeof b === "object" && typeof b.toJSON === "function" && (b = b.toJSON(a));
        typeof i === "function" && (b = i.call(j, a, b));
        switch (typeof b) {
            case "string":
                return o(b);
            case "number":
                return isFinite(b) ? String(b) : "null";
            case "boolean":
            case "null":
                return String(b);
            case "object":
                if (!b) return "null";
                e += n;
                f = [];
                if (Object.prototype.toString.apply(b) === "[object Array]") {
                    m = b.length;
                    for (c = 0; c < m; c += 1) f[c] = l(c, b) || "null";
                    h = f.length === 0 ? "[]" : e ? "[\n" + e + f.join(",\n" + e) + "\n" + g + "]" : "[" + f.join(",") + "]";
                    e = g;
                    return h
                }
                if (i && typeof i === "object") {
                    m = i.length;
                    for (c = 0; c < m; c += 1) typeof i[c] === "string" && (d = i[c], (h = l(d, b)) && f.push(o(d) + (e ? ": " : ":") + h))
                } else
                    for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (h = l(d, b)) && f.push(o(d) + (e ? ": " : ":") + h);
                h = f.length === 0 ? "{}" : e ? "{\n" + e + f.join(",\n" + e) + "\n" + g + "}" : "{" + f.join(",") +
                    "}";
                e = g;
                return h
        }
    }
    if (typeof Date.prototype.toJSON !== "function") Date.prototype.toJSON = function() {
        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + k(this.getUTCMonth() + 1) + "-" + k(this.getUTCDate()) + "T" + k(this.getUTCHours()) + ":" + k(this.getUTCMinutes()) + ":" + k(this.getUTCSeconds()) + "Z" : null
    }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
        return this.valueOf()
    };
    var q = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        p = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        e, n, r = {
            "\u0008": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\u000c": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        },
        i;
    if (typeof JSON.stringify !== "function") JSON.stringify = function(a, j, c) {
        var d;
        n = e = "";
        if (typeof c === "number")
            for (d = 0; d < c; d += 1) n += " ";
        else typeof c === "string" && (n = c);
        if ((i = j) && typeof j !== "function" && (typeof j !== "object" || typeof j.length !== "number")) throw Error("JSON.stringify");
        return l("", {
            "": a
        })
    };
    if (typeof JSON.parse !== "function") JSON.parse = function(a, e) {
        function c(a, d) {
            var g, f, b = a[d];
            if (b && typeof b === "object")
                for (g in b) Object.prototype.hasOwnProperty.call(b, g) && (f = c(b, g), f !== void 0 ? b[g] = f : delete b[g]);
            return e.call(a, d, b)
        }
        var d, a = String(a);
        q.lastIndex = 0;
        q.test(a) && (a = a.replace(q, function(a) {
            return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        }));
        if (/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return d = eval("(" + a + ")"), typeof e === "function" ? c({
            "": d
        }, "") : d;
        throw new SyntaxError("JSON.parse");
    }
})();

/**
 * jQuery Validation Plugin 1.9.0
 *
 * http://bassistance.de/jquery-plugins/jquery-plugin-validation/
 * http://docs.jquery.com/Plugins/Validation
 *
 * Copyright (c) 2006 - 2011 Jörn Zaefferer
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
(function(c) {
    c.extend(c.fn, {
        validate: function(a) {
            if (this.length) {
                var b = c.data(this[0], "validator");
                if (b) return b;
                this.attr("novalidate", "novalidate");
                b = new c.validator(a, this[0]);
                c.data(this[0], "validator", b);
                if (b.settings.onsubmit) {
                    a = this.find("input, button");
                    a.filter(".cancel").click(function() {
                        b.cancelSubmit = true
                    });
                    b.settings.submitHandler && a.filter(":submit").click(function() {
                        b.submitButton = this
                    });
                    this.submit(function(d) {
                        function e() {
                            if (b.settings.submitHandler) {
                                if (b.submitButton) var f = c("<input type='hidden'/>").attr("name",
                                    b.submitButton.name).val(b.submitButton.value).appendTo(b.currentForm);
                                b.settings.submitHandler.call(b, b.currentForm);
                                b.submitButton && f.remove();
                                return false
                            }
                            return true
                        }
                        b.settings.debug && d.preventDefault();
                        if (b.cancelSubmit) {
                            b.cancelSubmit = false;
                            return e()
                        }
                        if (b.form()) {
                            if (b.pendingRequest) {
                                b.formSubmitted = true;
                                return false
                            }
                            return e()
                        } else {
                            b.focusInvalid();
                            return false
                        }
                    })
                }
                return b
            } else a && a.debug && window.console && console.warn("nothing selected, can't validate, returning nothing")
        },
        valid: function() {
            if (c(this[0]).is("form")) return this.validate().form();
            else {
                var a = true,
                    b = c(this[0].form).validate();
                this.each(function() {
                    a &= b.element(this)
                });
                return a
            }
        },
        removeAttrs: function(a) {
            var b = {},
                d = this;
            c.each(a.split(/\s/), function(e, f) {
                b[f] = d.attr(f);
                d.removeAttr(f)
            });
            return b
        },
        rules: function(a, b) {
            var d = this[0];
            if (a) {
                var e = c.data(d.form, "validator").settings,
                    f = e.rules,
                    g = c.validator.staticRules(d);
                switch (a) {
                    case "add":
                        c.extend(g, c.validator.normalizeRule(b));
                        f[d.name] = g;
                        if (b.messages) e.messages[d.name] = c.extend(e.messages[d.name], b.messages);
                        break;
                    case "remove":
                        if (!b) {
                            delete f[d.name];
                            return g
                        }
                        var h = {};
                        c.each(b.split(/\s/), function(j, i) {
                            h[i] = g[i];
                            delete g[i]
                        });
                        return h
                }
            }
            d = c.validator.normalizeRules(c.extend({}, c.validator.metadataRules(d), c.validator.classRules(d), c.validator.attributeRules(d), c.validator.staticRules(d)), d);
            if (d.required) {
                e = d.required;
                delete d.required;
                d = c.extend({
                    required: e
                }, d)
            }
            return d
        }
    });
    c.extend(c.expr[":"], {
        blank: function(a) {
            return !c.trim("" + a.value)
        },
        filled: function(a) {
            return !!c.trim("" + a.value)
        },
        unchecked: function(a) {
            return !a.checked
        }
    });
    c.validator = function(a,
        b) {
        this.settings = c.extend(true, {}, c.validator.defaults, a);
        this.currentForm = b;
        this.init()
    };
    c.validator.format = function(a, b) {
        if (arguments.length == 1) return function() {
            var d = c.makeArray(arguments);
            d.unshift(a);
            return c.validator.format.apply(this, d)
        };
        if (arguments.length > 2 && b.constructor != Array) b = c.makeArray(arguments).slice(1);
        if (b.constructor != Array) b = [b];
        c.each(b, function(d, e) {
            a = a.replace(RegExp("\\{" + d + "\\}", "g"), e)
        });
        return a
    };
    c.extend(c.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            validClass: "valid",
            errorElement: "label",
            focusInvalid: true,
            errorContainer: c([]),
            errorLabelContainer: c([]),
            onsubmit: true,
            ignore: ":hidden",
            ignoreTitle: false,
            onfocusin: function(a) {
                this.lastActive = a;
                if (this.settings.focusCleanup && !this.blockFocusCleanup) {
                    this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass);
                    this.addWrapper(this.errorsFor(a)).hide()
                }
            },
            onfocusout: function(a) {
                if (!this.checkable(a) && (a.name in this.submitted || !this.optional(a))) this.element(a)
            },
            onkeyup: function(a) {
                if (a.name in this.submitted || a == this.lastElement) this.element(a)
            },
            onclick: function(a) {
                if (a.name in this.submitted) this.element(a);
                else a.parentNode.name in this.submitted && this.element(a.parentNode)
            },
            highlight: function(a, b, d) {
                a.type === "radio" ? this.findByName(a.name).addClass(b).removeClass(d) : c(a).addClass(b).removeClass(d)
            },
            unhighlight: function(a, b, d) {
                a.type === "radio" ? this.findByName(a.name).removeClass(b).addClass(d) : c(a).removeClass(b).addClass(d)
            }
        },
        setDefaults: function(a) {
            c.extend(c.validator.defaults,
                a)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            creditcard: "Please enter a valid credit card number.",
            equalTo: "Please enter the same value again.",
            accept: "Please enter a value with a valid extension.",
            maxlength: c.validator.format("Please enter no more than {0} characters."),
            minlength: c.validator.format("Please enter at least {0} characters."),
            rangelength: c.validator.format("Please enter a value between {0} and {1} characters long."),
            range: c.validator.format("Please enter a value between {0} and {1}."),
            max: c.validator.format("Please enter a value less than or equal to {0}."),
            min: c.validator.format("Please enter a value greater than or equal to {0}.")
        },
        autoCreateRanges: false,
        prototype: {
            init: function() {
                function a(e) {
                    var f = c.data(this[0].form, "validator"),
                        g = "on" + e.type.replace(/^validate/,
                            "");
                    f.settings[g] && f.settings[g].call(f, this[0], e)
                }
                this.labelContainer = c(this.settings.errorLabelContainer);
                this.errorContext = this.labelContainer.length && this.labelContainer || c(this.currentForm);
                this.containers = c(this.settings.errorContainer).add(this.settings.errorLabelContainer);
                this.submitted = {};
                this.valueCache = {};
                this.pendingRequest = 0;
                this.pending = {};
                this.invalid = {};
                this.reset();
                var b = this.groups = {};
                c.each(this.settings.groups, function(e, f) {
                    c.each(f.split(/\s/), function(g, h) {
                        b[h] = e
                    })
                });
                var d =
                    this.settings.rules;
                c.each(d, function(e, f) {
                    d[e] = c.validator.normalizeRule(f)
                });
                c(this.currentForm).validateDelegate("[type='text'], [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", a).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click",
                    a);
                this.settings.invalidHandler && c(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)
            },
            form: function() {
                this.checkForm();
                c.extend(this.submitted, this.errorMap);
                this.invalid = c.extend({}, this.errorMap);
                this.valid() || c(this.currentForm).triggerHandler("invalid-form", [this]);
                this.showErrors();
                return this.valid()
            },
            checkForm: function() {
                this.prepareForm();
                for (var a = 0, b = this.currentElements = this.elements(); b[a]; a++) this.check(b[a]);
                return this.valid()
            },
            element: function(a) {
                this.lastElement =
                    a = this.validationTargetFor(this.clean(a));
                this.prepareElement(a);
                this.currentElements = c(a);
                var b = this.check(a);
                if (b) delete this.invalid[a.name];
                else this.invalid[a.name] = true;
                if (!this.numberOfInvalids()) this.toHide = this.toHide.add(this.containers);
                this.showErrors();
                return b
            },
            showErrors: function(a) {
                if (a) {
                    c.extend(this.errorMap, a);
                    this.errorList = [];
                    for (var b in a) this.errorList.push({
                        message: a[b],
                        element: this.findByName(b)[0]
                    });
                    this.successList = c.grep(this.successList, function(d) {
                        return !(d.name in a)
                    })
                }
                this.settings.showErrors ?
                    this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() {
                c.fn.resetForm && c(this.currentForm).resetForm();
                this.submitted = {};
                this.lastElement = null;
                this.prepareForm();
                this.hideErrors();
                this.elements().removeClass(this.settings.errorClass)
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },
            objectLength: function(a) {
                var b = 0,
                    d;
                for (d in a) b++;
                return b
            },
            hideErrors: function() {
                this.addWrapper(this.toHide).hide()
            },
            valid: function() {
                return this.size() ==
                    0
            },
            size: function() {
                return this.errorList.length
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid) try {
                    c(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                } catch (a) {}
            },
            findLastActive: function() {
                var a = this.lastActive;
                return a && c.grep(this.errorList, function(b) {
                    return b.element.name == a.name
                }).length == 1 && a
            },
            elements: function() {
                var a = this,
                    b = {};
                return c(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function() {
                    !this.name &&
                        a.settings.debug && window.console && console.error("%o has no name assigned", this);
                    if (this.name in b || !a.objectLength(c(this).rules())) return false;
                    return b[this.name] = true
                })
            },
            clean: function(a) {
                return c(a)[0]
            },
            errors: function() {
                return c(this.settings.errorElement + "." + this.settings.errorClass, this.errorContext)
            },
            reset: function() {
                this.successList = [];
                this.errorList = [];
                this.errorMap = {};
                this.toShow = c([]);
                this.toHide = c([]);
                this.currentElements = c([])
            },
            prepareForm: function() {
                this.reset();
                this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function(a) {
                this.reset();
                this.toHide = this.errorsFor(a)
            },
            check: function(a) {
                a = this.validationTargetFor(this.clean(a));
                var b = c(a).rules(),
                    d = false,
                    e;
                for (e in b) {
                    var f = {
                        method: e,
                        parameters: b[e]
                    };
                    try {
                        var g = c.validator.methods[e].call(this, a.value.replace(/\r/g, ""), a, f.parameters);
                        if (g == "dependency-mismatch") d = true;
                        else {
                            d = false;
                            if (g == "pending") {
                                this.toHide = this.toHide.not(this.errorsFor(a));
                                return
                            }
                            if (!g) {
                                this.formatAndAdd(a, f);
                                return false
                            }
                        }
                    } catch (h) {
                        this.settings.debug && window.console && console.log("exception occured when checking element " +
                            a.id + ", check the '" + f.method + "' method", h);
                        throw h;
                    }
                }
                if (!d) {
                    this.objectLength(b) && this.successList.push(a);
                    return true
                }
            },
            customMetaMessage: function(a, b) {
                if (c.metadata) {
                    var d = this.settings.meta ? c(a).metadata()[this.settings.meta] : c(a).metadata();
                    return d && d.messages && d.messages[b]
                }
            },
            customMessage: function(a, b) {
                var d = this.settings.messages[a];
                return d && (d.constructor == String ? d : d[b])
            },
            findDefined: function() {
                for (var a = 0; a < arguments.length; a++)
                    if (arguments[a] !== undefined) return arguments[a]
            },
            defaultMessage: function(a,
                b) {
                return this.findDefined(this.customMessage(a.name, b), this.customMetaMessage(a, b), !this.settings.ignoreTitle && a.title || undefined, c.validator.messages[b], "<strong>Warning: No message defined for " + a.name + "</strong>")
            },
            formatAndAdd: function(a, b) {
                var d = this.defaultMessage(a, b.method),
                    e = /\$?\{(\d+)\}/g;
                if (typeof d == "function") d = d.call(this, b.parameters, a);
                else if (e.test(d)) d = jQuery.format(d.replace(e, "{$1}"), b.parameters);
                this.errorList.push({
                    message: d,
                    element: a
                });
                this.errorMap[a.name] = d;
                this.submitted[a.name] =
                    d
            },
            addWrapper: function(a) {
                if (this.settings.wrapper) a = a.add(a.parent(this.settings.wrapper));
                return a
            },
            defaultShowErrors: function() {
                for (var a = 0; this.errorList[a]; a++) {
                    var b = this.errorList[a];
                    this.settings.highlight && this.settings.highlight.call(this, b.element, this.settings.errorClass, this.settings.validClass);
                    this.showLabel(b.element, b.message)
                }
                if (this.errorList.length) this.toShow = this.toShow.add(this.containers);
                if (this.settings.success)
                    for (a = 0; this.successList[a]; a++) this.showLabel(this.successList[a]);
                if (this.settings.unhighlight) {
                    a = 0;
                    for (b = this.validElements(); b[a]; a++) this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass)
                }
                this.toHide = this.toHide.not(this.toShow);
                this.hideErrors();
                this.addWrapper(this.toShow).show()
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function() {
                return c(this.errorList).map(function() {
                    return this.element
                })
            },
            showLabel: function(a, b) {
                var d = this.errorsFor(a);
                if (d.length) {
                    d.removeClass(this.settings.validClass).addClass(this.settings.errorClass);
                    d.attr("generated") && d.html(b)
                } else {
                    d = c("<" + this.settings.errorElement + "/>").attr({
                        "for": this.idOrName(a),
                        generated: true
                    }).addClass(this.settings.errorClass).html(b || "");
                    if (this.settings.wrapper) d = d.hide().show().wrap("<" + this.settings.wrapper + "/>").parent();
                    this.labelContainer.append(d).length || (this.settings.errorPlacement ? this.settings.errorPlacement(d, c(a)) : d.insertAfter(a))
                }
                if (!b && this.settings.success) {
                    d.text("");
                    typeof this.settings.success == "string" ? d.addClass(this.settings.success) : this.settings.success(d)
                }
                this.toShow =
                    this.toShow.add(d)
            },
            errorsFor: function(a) {
                var b = this.idOrName(a);
                return this.errors().filter(function() {
                    return c(this).attr("for") == b
                })
            },
            idOrName: function(a) {
                return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name)
            },
            validationTargetFor: function(a) {
                if (this.checkable(a)) a = this.findByName(a.name).not(this.settings.ignore)[0];
                return a
            },
            checkable: function(a) {
                return /radio|checkbox/i.test(a.type)
            },
            findByName: function(a) {
                var b = this.currentForm;
                return c(document.getElementsByName(a)).map(function(d,
                    e) {
                    return e.form == b && e.name == a && e || null
                })
            },
            getLength: function(a, b) {
                switch (b.nodeName.toLowerCase()) {
                    case "select":
                        return c("option:selected", b).length;
                    case "input":
                        if (this.checkable(b)) return this.findByName(b.name).filter(":checked").length
                }
                return a.length
            },
            depend: function(a, b) {
                return this.dependTypes[typeof a] ? this.dependTypes[typeof a](a, b) : true
            },
            dependTypes: {
                "boolean": function(a) {
                    return a
                },
                string: function(a, b) {
                    return !!c(a, b.form).length
                },
                "function": function(a, b) {
                    return a(b)
                }
            },
            optional: function(a) {
                return !c.validator.methods.required.call(this,
                    c.trim(a.value), a) && "dependency-mismatch"
            },
            startRequest: function(a) {
                if (!this.pending[a.name]) {
                    this.pendingRequest++;
                    this.pending[a.name] = true
                }
            },
            stopRequest: function(a, b) {
                this.pendingRequest--;
                if (this.pendingRequest < 0) this.pendingRequest = 0;
                delete this.pending[a.name];
                if (b && this.pendingRequest == 0 && this.formSubmitted && this.form()) {
                    c(this.currentForm).submit();
                    this.formSubmitted = false
                } else if (!b && this.pendingRequest == 0 && this.formSubmitted) {
                    c(this.currentForm).triggerHandler("invalid-form", [this]);
                    this.formSubmitted =
                        false
                }
            },
            previousValue: function(a) {
                return c.data(a, "previousValue") || c.data(a, "previousValue", {
                    old: null,
                    valid: true,
                    message: this.defaultMessage(a, "remote")
                })
            }
        },
        classRuleSettings: {
            required: {
                required: true
            },
            email: {
                email: true
            },
            url: {
                url: true
            },
            date: {
                date: true
            },
            dateISO: {
                dateISO: true
            },
            dateDE: {
                dateDE: true
            },
            number: {
                number: true
            },
            numberDE: {
                numberDE: true
            },
            digits: {
                digits: true
            },
            creditcard: {
                creditcard: true
            }
        },
        addClassRules: function(a, b) {
            a.constructor == String ? this.classRuleSettings[a] = b : c.extend(this.classRuleSettings,
                a)
        },
        classRules: function(a) {
            var b = {};
            (a = c(a).attr("class")) && c.each(a.split(" "), function() {
                this in c.validator.classRuleSettings && c.extend(b, c.validator.classRuleSettings[this])
            });
            return b
        },
        attributeRules: function(a) {
            var b = {};
            a = c(a);
            for (var d in c.validator.methods) {
                var e;
                if (e = d === "required" && typeof c.fn.prop === "function" ? a.prop(d) : a.attr(d)) b[d] = e;
                else if (a[0].getAttribute("type") === d) b[d] = true
            }
            b.maxlength && /-1|2147483647|524288/.test(b.maxlength) && delete b.maxlength;
            return b
        },
        metadataRules: function(a) {
            if (!c.metadata) return {};
            var b = c.data(a.form, "validator").settings.meta;
            return b ? c(a).metadata()[b] : c(a).metadata()
        },
        staticRules: function(a) {
            var b = {},
                d = c.data(a.form, "validator");
            if (d.settings.rules) b = c.validator.normalizeRule(d.settings.rules[a.name]) || {};
            return b
        },
        normalizeRules: function(a, b) {
            c.each(a, function(d, e) {
                if (e === false) delete a[d];
                else if (e.param || e.depends) {
                    var f = true;
                    switch (typeof e.depends) {
                        case "string":
                            f = !!c(e.depends, b.form).length;
                            break;
                        case "function":
                            f = e.depends.call(b, b)
                    }
                    if (f) a[d] = e.param !== undefined ?
                        e.param : true;
                    else delete a[d]
                }
            });
            c.each(a, function(d, e) {
                a[d] = c.isFunction(e) ? e(b) : e
            });
            c.each(["minlength", "maxlength", "min", "max"], function() {
                if (a[this]) a[this] = Number(a[this])
            });
            c.each(["rangelength", "range"], function() {
                if (a[this]) a[this] = [Number(a[this][0]), Number(a[this][1])]
            });
            if (c.validator.autoCreateRanges) {
                if (a.min && a.max) {
                    a.range = [a.min, a.max];
                    delete a.min;
                    delete a.max
                }
                if (a.minlength && a.maxlength) {
                    a.rangelength = [a.minlength, a.maxlength];
                    delete a.minlength;
                    delete a.maxlength
                }
            }
            a.messages && delete a.messages;
            return a
        },
        normalizeRule: function(a) {
            if (typeof a == "string") {
                var b = {};
                c.each(a.split(/\s/), function() {
                    b[this] = true
                });
                a = b
            }
            return a
        },
        addMethod: function(a, b, d) {
            c.validator.methods[a] = b;
            c.validator.messages[a] = d != undefined ? d : c.validator.messages[a];
            b.length < 3 && c.validator.addClassRules(a, c.validator.normalizeRule(a))
        },
        methods: {
            required: function(a, b, d) {
                if (!this.depend(d, b)) return "dependency-mismatch";
                switch (b.nodeName.toLowerCase()) {
                    case "select":
                        return (a = c(b).val()) && a.length > 0;
                    case "input":
                        if (this.checkable(b)) return this.getLength(a,
                            b) > 0;
                    default:
                        return c.trim(a).length > 0
                }
            },
            remote: function(a, b, d) {
                if (this.optional(b)) return "dependency-mismatch";
                var e = this.previousValue(b);
                this.settings.messages[b.name] || (this.settings.messages[b.name] = {});
                e.originalMessage = this.settings.messages[b.name].remote;
                this.settings.messages[b.name].remote = e.message;
                d = typeof d == "string" && {
                    url: d
                } || d;
                if (this.pending[b.name]) return "pending";
                if (e.old === a) return e.valid;
                e.old = a;
                var f = this;
                this.startRequest(b);
                var g = {};
                g[b.name] = a;
                c.ajax(c.extend(true, {
                    url: d,
                    mode: "abort",
                    port: "validate" + b.name,
                    dataType: "json",
                    data: g,
                    success: function(h) {
                        f.settings.messages[b.name].remote = e.originalMessage;
                        var j = h === true;
                        if (j) {
                            var i = f.formSubmitted;
                            f.prepareElement(b);
                            f.formSubmitted = i;
                            f.successList.push(b);
                            f.showErrors()
                        } else {
                            i = {};
                            h = h || f.defaultMessage(b, "remote");
                            i[b.name] = e.message = c.isFunction(h) ? h(a) : h;
                            f.showErrors(i)
                        }
                        e.valid = j;
                        f.stopRequest(b, j)
                    }
                }, d));
                return "pending"
            },
            minlength: function(a, b, d) {
                return this.optional(b) || this.getLength(c.trim(a), b) >= d
            },
            maxlength: function(a,
                b, d) {
                return this.optional(b) || this.getLength(c.trim(a), b) <= d
            },
            rangelength: function(a, b, d) {
                a = this.getLength(c.trim(a), b);
                return this.optional(b) || a >= d[0] && a <= d[1]
            },
            min: function(a, b, d) {
                return this.optional(b) || a >= d
            },
            max: function(a, b, d) {
                return this.optional(b) || a <= d
            },
            range: function(a, b, d) {
                return this.optional(b) || a >= d[0] && a <= d[1]
            },
            email: function(a, b) {
                return this.optional(b) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(a)
            },
            url: function(a, b) {
                return this.optional(b) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a)
            },
            date: function(a, b) {
                return this.optional(b) || !/Invalid|NaN/.test(new Date(a))
            },
            dateISO: function(a, b) {
                return this.optional(b) || /^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(a)
            },
            number: function(a, b) {
                return this.optional(b) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(a)
            },
            digits: function(a, b) {
                return this.optional(b) || /^\d+$/.test(a)
            },
            creditcard: function(a, b) {
                if (this.optional(b)) return "dependency-mismatch";
                if (/[^0-9 -]+/.test(a)) return false;
                var d = 0,
                    e = 0,
                    f = false;
                a = a.replace(/\D/g, "");
                for (var g = a.length - 1; g >=
                    0; g--) {
                    e = a.charAt(g);
                    e = parseInt(e, 10);
                    if (f)
                        if ((e *= 2) > 9) e -= 9;
                    d += e;
                    f = !f
                }
                return d % 10 == 0
            },
            accept: function(a, b, d) {
                d = typeof d == "string" ? d.replace(/,/g, "|") : "png|jpe?g|gif";
                return this.optional(b) || a.match(RegExp(".(" + d + ")$", "i"))
            },
            equalTo: function(a, b, d) {
                d = c(d).unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
                    c(b).valid()
                });
                return a == d.val()
            }
        }
    });
    c.format = c.validator.format
})(jQuery);
(function(c) {
    var a = {};
    if (c.ajaxPrefilter) c.ajaxPrefilter(function(d, e, f) {
        e = d.port;
        if (d.mode == "abort") {
            a[e] && a[e].abort();
            a[e] = f
        }
    });
    else {
        var b = c.ajax;
        c.ajax = function(d) {
            var e = ("port" in d ? d : c.ajaxSettings).port;
            if (("mode" in d ? d : c.ajaxSettings).mode == "abort") {
                a[e] && a[e].abort();
                return a[e] = b.apply(this, arguments)
            }
            return b.apply(this, arguments)
        }
    }
})(jQuery);
(function(c) {
    !jQuery.event.special.focusin && !jQuery.event.special.focusout && document.addEventListener && c.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        function d(e) {
            e = c.event.fix(e);
            e.type = b;
            return c.event.handle.call(this, e)
        }
        c.event.special[b] = {
            setup: function() {
                this.addEventListener(a, d, true)
            },
            teardown: function() {
                this.removeEventListener(a, d, true)
            },
            handler: function(e) {
                arguments[0] = c.event.fix(e);
                arguments[0].type = b;
                return c.event.handle.apply(this, arguments)
            }
        }
    });
    c.extend(c.fn, {
        validateDelegate: function(a,
            b, d) {
            return this.bind(b, function(e) {
                var f = c(e.target);
                if (f.is(a)) return d.apply(f, arguments)
            })
        }
    })
})(jQuery);