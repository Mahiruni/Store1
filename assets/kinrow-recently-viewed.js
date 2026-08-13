class RecentlyViewed extends HTMLElement {
  connectedCallback() {
    try {
      const current = JSON.parse(this.querySelector('script[type="application/json"]').textContent);
      const key = 'kinrow-recently-viewed';
      const previous = JSON.parse(localStorage.getItem(key) || '[]').filter((item) => item.url !== current.url);
      const visible = previous.slice(0, Number(this.dataset.limit || 4));
      if (visible.length) {
        const grid = this.querySelector('.kinrow-recently-viewed__grid');
        visible.forEach((item) => {
          const card = document.createElement('a');
          card.href = item.url;
          card.setAttribute('role', 'listitem');
          const image = document.createElement('img');
          image.src = item.image;
          image.alt = item.title;
          image.loading = 'lazy';
          image.width = 700;
          image.height = 700;
          const title = document.createElement('strong');
          title.textContent = item.title;
          const price = document.createElement('span');
          price.textContent = item.price;
          card.append(image, title, price);
          grid.append(card);
        });
        this.querySelector('[data-recently-viewed-content]').hidden = false;
      }
      localStorage.setItem(key, JSON.stringify([current, ...previous].slice(0, 8)));
    } catch (error) {
      console.warn('Recently viewed is unavailable.', error);
    }
  }
}
customElements.define('recently-viewed', RecentlyViewed);
