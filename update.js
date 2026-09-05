const fs = require('fs');
let c = fs.readFileSync('app/page.tsx', 'utf-8');

// Why section
let whyMatch = c.match(/<section id=\"why\"[\s\S]*?<\/section>/);
if (whyMatch) {
  let why = whyMatch[0];
  why = why.replace('bg-brand-warm text-brand-navy border-y border-slate-100', 'bg-gradient-to-b from-brand-teal-light to-brand-teal text-white border-y border-brand-teal');
  why = why.replace('text-brand-teal font-bold', 'text-white/90 font-bold');
  why = why.replace('text-brand-navy mb-6', 'text-white mb-6');
  why = why.replace('bg-brand-teal mx-auto', 'bg-white/50 mx-auto');
  why = why.replaceAll('text-brand-navy mb-4', 'text-white mb-4');
  why = why.replaceAll('text-brand-text-muted leading-relaxed', 'text-white/80 leading-relaxed');
  c = c.replace(whyMatch[0], why);
}

// Process section
let procMatch = c.match(/<section id=\"process\"[\s\S]*?<\/section>/);
if (procMatch) {
  let proc = procMatch[0];
  proc = proc.replace('bg-brand-warm relative', 'bg-gradient-to-b from-brand-teal to-brand-teal-light text-white relative');
  proc = proc.replace('text-brand-teal font-bold', 'text-white/90 font-bold');
  proc = proc.replace('text-brand-navy mb-6', 'text-white mb-6');
  proc = proc.replace('text-brand-text-muted text-lg', 'text-white/80 text-lg');
  proc = proc.replace('bg-brand-teal/20 -z-10', 'bg-white/30 -z-10');
  proc = proc.replaceAll('border-brand-warm', 'border-brand-teal-light/50');
  proc = proc.replaceAll('text-brand-navy mb-3', 'text-white mb-3');
  proc = proc.replaceAll('text-brand-text-muted leading-relaxed', 'text-white/80 leading-relaxed');
  c = c.replace(procMatch[0], proc);
}

fs.writeFileSync('app/page.tsx', c, 'utf-8');
console.log('Done');
