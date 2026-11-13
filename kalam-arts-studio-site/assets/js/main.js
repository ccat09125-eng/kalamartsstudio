/* KALAM ARTS STUDIO interactions */
document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
  // Site-wide light/dark mode: remember the visitor's preference on this device.
  const themeButtons = document.querySelectorAll('.theme-toggle');
  const storedTheme = (()=>{try{return localStorage.getItem('kalam-theme');}catch(_){return null;}})();
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const applyTheme = theme => {
    const dark = theme === 'dark';
    document.body.dataset.theme = dark ? 'dark' : 'light';
    themeButtons.forEach(button=>{
      button.setAttribute('aria-pressed',String(dark));
      button.setAttribute('aria-label',dark?'Switch to light mode':'Switch to dark mode');
      const icon=button.querySelector('.theme-toggle-icon');
      const label=button.querySelector('.theme-toggle-label');
      if(icon)icon.textContent=dark?'☀':'☾';
      if(label)label.textContent=dark?'Light mode':'Dark mode';
    });
    const themeColor=document.querySelector('meta[name="theme-color"]');
    if(themeColor)themeColor.setAttribute('content',dark?'#111820':'#fbfaf7');
  };
  applyTheme(storedTheme==='dark'||(!storedTheme&&prefersDark)?'dark':'light');
  themeButtons.forEach(button=>button.addEventListener('click',()=>{
    const next=document.body.dataset.theme==='dark'?'light':'dark';
    applyTheme(next);
    try{localStorage.setItem('kalam-theme',next);}catch(_){}
  }));

  const toggle=document.querySelector('.menu-toggle');
  const nav=document.querySelector('.nav');
  if(toggle&&nav){toggle.addEventListener('click',()=>{const opened=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(opened));toggle.setAttribute('aria-label',opened?'Close navigation':'Open navigation');toggle.textContent=opened?'×':'☰';});}
  document.querySelectorAll('.filter-btn').forEach(btn=>btn.addEventListener('click',()=>{
    const group=btn.closest('.container')||document;
    const filter=btn.dataset.filter;
    group.querySelectorAll('.filter-btn').forEach(b=>b.classList.toggle('active',b===btn));
    group.querySelectorAll('.gallery-item').forEach(item=>{item.hidden=filter!=='all'&&item.dataset.category!==filter;});
  }));
  document.querySelectorAll('.faq-q').forEach(btn=>btn.addEventListener('click',()=>{
    const item=btn.closest('.faq-item');const expanded=btn.getAttribute('aria-expanded')==='true';
    btn.setAttribute('aria-expanded',String(!expanded));item.classList.toggle('open',!expanded);
  }));
  document.querySelectorAll('form[data-whatsapp-form]').forEach(form=>form.addEventListener('submit',event=>{
    event.preventDefault();if(!form.reportValidity())return;
    const data=new FormData(form);const lines=[
      'Hello KALAM ARTS STUDIO, I would like to discuss a project.',
      '',`Name: ${data.get('name')||''}`,
      `Email: ${data.get('email')||'Not provided'}`,
      `Service: ${data.get('service')||'Not specified'}`,
      `Timeframe: ${data.get('timeframe')||'Not specified'}`,
      '',`Project details: ${data.get('brief')||''}`
    ];
    const url='https://wa.me/971564692102?text='+encodeURIComponent(lines.join('\n'));
    window.open(url,'_blank','noopener');
    const note=form.querySelector('.success-note');if(note)note.classList.add('show');
  }));
});
