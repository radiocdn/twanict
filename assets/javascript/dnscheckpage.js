    // Current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // DNS Check form logic
    const form = document.getElementById('dnsForm');
    const domainInput = document.getElementById('domainInput');
    const resultsEl = document.getElementById('results');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const domain = domainInput.value.trim();
      if (!domain) return;

      resultsEl.textContent = 'DNS records worden gecontroleerd...';
      resultsEl.style.opacity = '0.7';

      try {
        const response = await fetch(`/dns-check?domain=${encodeURIComponent(domain)}`);

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          resultsEl.textContent = `Fout: ${errorData.error || response.statusText}`;
          resultsEl.style.opacity = '1';
          return;
        }

        const data = await response.json();
        resultsEl.textContent = JSON.stringify(data, null, 2);
        resultsEl.style.opacity = '1';
      } catch (error) {
        resultsEl.textContent = `Verzoek mislukt: ${error.message}`;
        resultsEl.style.opacity = '1';
      }
    });
