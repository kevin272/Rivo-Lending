const fs = require('fs');
let c = fs.readFileSync('app/page.tsx', 'utf-8');

c = c.replace('      {/* 6. STATS STRIP */}\n      <section className=\"bg-brand-navy py-16 text-center relative overflow-hidden\">\n        <RibbonStripes position=\"left\" />', '      {/* 6. STATS STRIP */}\n      <section className=\"bg-brand-navy py-16 text-center relative overflow-hidden\">\n        <RibbonStripes position=\"right\" />');

c = c.replace('      {/* 7. TESTIMONIALS */}\n      <section className=\"py-24 bg-brand-warm border-y border-slate-100 relative\">\n        <RibbonStripes position=\"right\" />', '      {/* 7. TESTIMONIALS */}\n      <section className=\"py-24 bg-brand-warm border-y border-slate-100 relative\">\n        <RibbonStripes position=\"left\" />');

c = c.replace('      {/* 8. CONTACT FORM */}\n      <section id=\"contact\" className=\"py-24 bg-white relative\">\n        <RibbonStripes position=\"left\" />', '      {/* 8. CONTACT FORM */}\n      <section id=\"contact\" className=\"py-24 bg-white relative\">\n        <RibbonStripes position=\"right\" />');

c = c.replace('      {/* 9. FAQS */}\n      <section id=\"faq\" className=\"py-24 bg-brand-warm border-y border-slate-100 relative overflow-hidden\">\n        <RibbonStripes position=\"right\" />', '      {/* 9. FAQS */}\n      <section id=\"faq\" className=\"py-24 bg-brand-warm border-y border-slate-100 relative overflow-hidden\">\n        <RibbonStripes position=\"left\" />');

fs.writeFileSync('app/page.tsx', c, 'utf-8');
console.log('Flipped remaining ribbons');
