class KinrowStickyAtc extends HTMLElement {
  connectedCallback() {
    this.button = this.querySelector('button');
    this.source = document.querySelector('.product-form__submit');
    if (!this.source || !this.button) return;
    this.observer = new IntersectionObserver(([entry]) => this.classList.toggle('is-visible', !entry.isIntersecting), { rootMargin: '-96px 0px 0px' });
    this.observer.observe(this.source);
    this.button.addEventListener('click', () => this.source.click());
    if (typeof subscribe === 'function') {
      this.unsubscribeVariant = subscribe(PUB_SUB_EVENTS.variantChange, (event) => {
        const variant = event?.data?.variant;
        if (!variant) return;
        const currency = window.Shopify?.currency?.active || 'USD';
        this.querySelector('[data-kinrow-sticky-price]').textContent = new Intl.NumberFormat(document.documentElement.lang, { style: 'currency', currency }).format(variant.price / 100);
        this.button.disabled = !variant.available;
        this.button.textContent = variant.available ? window.variantStrings.addToCart : window.variantStrings.soldOut;
      });
    }
  }
  disconnectedCallback() { this.observer?.disconnect(); this.unsubscribeVariant?.(); }
}
customElements.define('kinrow-sticky-atc', KinrowStickyAtc);

const kinrowOffline = document.getElementById('KinrowOffline');
const updateKinrowConnection = () => { if (kinrowOffline) kinrowOffline.hidden = navigator.onLine; };
window.addEventListener('online', updateKinrowConnection);
window.addEventListener('offline', updateKinrowConnection);
updateKinrowConnection();
