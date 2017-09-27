// extractMsCerts.js
// ------------------------------------------------------------------

var r = JSON.parse(context.getVariable('msCerts.content'));
var i,j,k="";

for (i in r.keys) {
//    k=r.keys[i].x5t;
//    for (j in r.keys[i].x5c) {
//        context.setVariable('mscerts.' + k, r.keys[i].x5c[j]);
//    }
    k=r.keys[i].kid;
    context.setVariable('mscerts.n.' + k, r.keys[i].n);
    context.setVariable('mscerts.e.' + k, r.keys[i].e);
} 