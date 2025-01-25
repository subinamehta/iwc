import{L as ln,M as un,N as y,O as tn,P as X,Q as O,R as _,S as an,T as rn,V as $,W as o,X as N,Y as sn,Z as on,$ as fn}from"./B2IlNCCL.js";function cn(l){return l.innerRadius}function yn(l){return l.outerRadius}function gn(l){return l.startAngle}function dn(l){return l.endAngle}function mn(l){return l&&l.padAngle}function pn(l,h,D,S,v,R,Q,u){var E=D-l,i=S-h,n=Q-v,d=u-R,a=d*E-n*i;if(!(a*a<y))return a=(n*(h-R)-d*(l-v))/a,[l+a*E,h+a*i]}function G(l,h,D,S,v,R,Q){var u=l-D,E=h-S,i=(Q?R:-R)/$(u*u+E*E),n=i*E,d=-i*u,a=l+n,s=h+d,f=D+n,c=S+d,V=(a+f)/2,t=(s+c)/2,m=f-a,g=c-s,A=m*m+g*g,T=v-R,P=a*c-f*s,I=(g<0?-1:1)*$(fn(0,T*T*A-P*P)),L=(P*g-m*I)/A,M=(-P*m-g*I)/A,w=(P*g+m*I)/A,p=(-P*m+g*I)/A,x=L-V,e=M-t,r=w-V,W=p-t;return x*x+e*e>r*r+W*W&&(L=w,M=p),{cx:L,cy:M,x01:-n,y01:-d,x11:L*(v/T-1),y11:M*(v/T-1)}}function hn(){var l=cn,h=yn,D=N(0),S=null,v=gn,R=dn,Q=mn,u=null,E=ln(i);function i(){var n,d,a=+l.apply(this,arguments),s=+h.apply(this,arguments),f=v.apply(this,arguments)-un,c=R.apply(this,arguments)-un,V=an(c-f),t=c>f;if(u||(u=n=E()),s<a&&(d=s,s=a,a=d),!(s>y))u.moveTo(0,0);else if(V>tn-y)u.moveTo(s*X(f),s*O(f)),u.arc(0,0,s,f,c,!t),a>y&&(u.moveTo(a*X(c),a*O(c)),u.arc(0,0,a,c,f,t));else{var m=f,g=c,A=f,T=c,P=V,I=V,L=Q.apply(this,arguments)/2,M=L>y&&(S?+S.apply(this,arguments):$(a*a+s*s)),w=_(an(s-a)/2,+D.apply(this,arguments)),p=w,x=w,e,r;if(M>y){var W=sn(M/a*O(L)),j=sn(M/s*O(L));(P-=W*2)>y?(W*=t?1:-1,A+=W,T-=W):(P=0,A=T=(f+c)/2),(I-=j*2)>y?(j*=t?1:-1,m+=j,g-=j):(I=0,m=g=(f+c)/2)}var Y=s*X(m),Z=s*O(m),z=a*X(T),B=a*O(T);if(w>y){var C=s*X(g),F=s*O(g),H=a*X(A),J=a*O(A),q;if(V<rn)if(q=pn(Y,Z,H,J,C,F,z,B)){var K=Y-q[0],U=Z-q[1],k=C-q[0],b=F-q[1],nn=1/O(on((K*k+U*b)/($(K*K+U*U)*$(k*k+b*b)))/2),en=$(q[0]*q[0]+q[1]*q[1]);p=_(w,(a-en)/(nn-1)),x=_(w,(s-en)/(nn+1))}else p=x=0}I>y?x>y?(e=G(H,J,Y,Z,s,x,t),r=G(C,F,z,B,s,x,t),u.moveTo(e.cx+e.x01,e.cy+e.y01),x<w?u.arc(e.cx,e.cy,x,o(e.y01,e.x01),o(r.y01,r.x01),!t):(u.arc(e.cx,e.cy,x,o(e.y01,e.x01),o(e.y11,e.x11),!t),u.arc(0,0,s,o(e.cy+e.y11,e.cx+e.x11),o(r.cy+r.y11,r.cx+r.x11),!t),u.arc(r.cx,r.cy,x,o(r.y11,r.x11),o(r.y01,r.x01),!t))):(u.moveTo(Y,Z),u.arc(0,0,s,m,g,!t)):u.moveTo(Y,Z),!(a>y)||!(P>y)?u.lineTo(z,B):p>y?(e=G(z,B,C,F,a,-p,t),r=G(Y,Z,H,J,a,-p,t),u.lineTo(e.cx+e.x01,e.cy+e.y01),p<w?u.arc(e.cx,e.cy,p,o(e.y01,e.x01),o(r.y01,r.x01),!t):(u.arc(e.cx,e.cy,p,o(e.y01,e.x01),o(e.y11,e.x11),!t),u.arc(0,0,a,o(e.cy+e.y11,e.cx+e.x11),o(r.cy+r.y11,r.cx+r.x11),t),u.arc(r.cx,r.cy,p,o(r.y11,r.x11),o(r.y01,r.x01),!t))):u.arc(0,0,a,T,A,t)}if(u.closePath(),n)return u=null,n+""||null}return i.centroid=function(){var n=(+l.apply(this,arguments)+ +h.apply(this,arguments))/2,d=(+v.apply(this,arguments)+ +R.apply(this,arguments))/2-rn/2;return[X(d)*n,O(d)*n]},i.innerRadius=function(n){return arguments.length?(l=typeof n=="function"?n:N(+n),i):l},i.outerRadius=function(n){return arguments.length?(h=typeof n=="function"?n:N(+n),i):h},i.cornerRadius=function(n){return arguments.length?(D=typeof n=="function"?n:N(+n),i):D},i.padRadius=function(n){return arguments.length?(S=n==null?null:typeof n=="function"?n:N(+n),i):S},i.startAngle=function(n){return arguments.length?(v=typeof n=="function"?n:N(+n),i):v},i.endAngle=function(n){return arguments.length?(R=typeof n=="function"?n:N(+n),i):R},i.padAngle=function(n){return arguments.length?(Q=typeof n=="function"?n:N(+n),i):Q},i.context=function(n){return arguments.length?(u=n??null,i):u},i}export{hn as d};
