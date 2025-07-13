
const langSelector = document.getElementById('lang-selector');
langSelector.addEventListener('change', async function () {
  const lang = this.value;
  const response = await fetch(`${lang}.json`);
  const translations = await response.json();
  for (const [key, value] of Object.entries(translations)) {
    const elements = document.querySelectorAll(`[data-i18n="${key}"]`);
    elements.forEach(el => el.innerText = value);
  }
  document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
  document.documentElement.lang = lang;
});
