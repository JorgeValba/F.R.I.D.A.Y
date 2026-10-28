const fs=require('fs'),vm=require('vm'),assert=require('assert');
const html=fs.readFileSync('dist/index.html','utf8'),source=html.match(/<script>([\s\S]*?)<\/script>/)[1];
const nodes=new Map();function node(id){if(!nodes.has(id))nodes.set(id,{value:'',innerHTML:'',textContent:'',add(){},addEventListener(){},scrollIntoView(){},replaceChildren(){},append(){}});return nodes.get(id)}
const context={document:{getElementById:node,querySelector:()=>null,createElement:()=>({}),body:{append(){}}},Option:function(){},console,URL,Blob,setTimeout,customElements:{get:()=>true}};
vm.createContext(context);vm.runInContext(source.replace('render();loadVoice();','render();'),context);
const run=s=>vm.runInContext(s,context);
assert.equal(run('data.length'),180);assert.equal(run('new Set(data.map(d=>d.id)).size'),180);
assert.deepEqual(Array.from(run('[1,2,5,6,10,11,15,16,20,21].map(vacation)')),[12,14,20,22,22,24,24,26,26,28]);
assert(run('data.every(d=>d.gap>=0&&Number.isFinite(d.gap)&&d.vac>=12-2)'));
assert.equal(run('current.length'),180);node('area').value='Operaciones';run('render()');assert(run('current.every(d=>d.area==="Operaciones")'));
node('signal').value='none';run('render()');assert(run('current.every(d=>!d.flags.length)'));
node('search').value='NO-EXISTE';run('render()');assert.equal(run('current.length'),0);assert(node('rows').innerHTML.includes('Sin resultados'));
node('reset').onclick();assert.equal(run('current.length'),180);
const records=run('data.map(d=>({autor:"Jorge Valencia",corte:"2026-10-27",...d,flags:d.flags.join("|")}))');
const keys=Object.keys(records[0]);fs.writeFileSync('datos_sinteticos_Jorge_Valencia.csv','\uFEFF'+[keys,...records.map(d=>keys.map(k=>d[k]))].map(r=>r.map(v=>'"'+String(v).replaceAll('"','""')+'"').join(',')).join('\r\n'));
console.log(JSON.stringify({checks:'OK: generación, IDs únicos, vacaciones por tramo, brechas, filtros, vacío y restablecimiento',personas:180,alertas:run('data.filter(d=>d.flags.length).length'),brecha:run('data.reduce((s,d)=>s+d.gap,0)')}));
