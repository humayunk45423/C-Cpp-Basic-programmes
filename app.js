

    // ================================================
    // INDENT TOGGLE (IDE style ↔ Flat / no-indent)
    // ================================================
    let currentIndent = safeGet('duet-indent') || 'ide'; // 'ide' | 'flat'
 
    function flattenCode(code) {
      return code.split('\n').map(line => line.trimStart()).join('\n');
    }
 
    function applyIndentToAll() {
      const all = Array.from(document.querySelectorAll('.code-scroll code'));
      // Elite: Only highlight visible/nearby cards immediately, defer others
      all.forEach((el, i) => {
        const original = el.dataset.original;
        if (!original) return;
        el.classList.remove('hljs');
        delete el.dataset.highlighted;
        el.textContent = (currentIndent === 'flat') ? flattenCode(original) : original;
        
        // Elite: Refresh line numbers to match the new text transformation
        const lineNums = el.previousElementSibling;
        if (lineNums && lineNums.classList.contains('line-nums')) {
           const lineCount = el.textContent.split('\n').length;
           lineNums.textContent = Array.from({ length: lineCount }, (_, k) => k + 1).join('\n');
        }
        
        // Immediate highlight for the first 10 (likely visible), defer rest
        if (i < 10) {
          if (typeof hljs !== 'undefined') hljs.highlightElement(el);
        } else {
          setTimeout(() => {
            if (typeof hljs !== 'undefined') hljs.highlightElement(el);
          }, 100 + (i * 2));
        }
      });
    }
 
    function toggleIndent() {
      haptic(8);
      currentIndent = currentIndent === 'ide' ? 'flat' : 'ide';
      safeSave('duet-indent', currentIndent);
      const iconId = currentIndent === 'ide' ? '#ic-indent' : '#ic-flat';
      document.getElementById('indentIcon').innerHTML = `<use href="${iconId}"/>`;
      applyIndentToAll();
      const label = currentIndent === 'ide' ? 'IDE Style' : 'Flat Style';
      const toastIcon = currentIndent === 'ide' ? 'ic-indent' : 'ic-flat';
      showToast(T_ICON(toastIcon) + `<span>${label}</span>`);
    }

    (function initIndent() {
      const iconId = currentIndent === 'ide' ? '#ic-indent' : '#ic-flat';
      // Guard: element may not exist yet if script runs before body parse (shouldn't with defer, but safe)
      const el = document.getElementById('indentIcon');
      if (el) el.innerHTML = `<use href="${iconId}"/>`;
      else document.addEventListener('DOMContentLoaded', () => {
        const el2 = document.getElementById('indentIcon');
        if (el2) el2.innerHTML = `<use href="${iconId}"/>`;
      });
    })();

    // ================================================
    // THEME LOGIC
    // ================================================
    const ICON_SUN = '<svg width="22px" height="22px"><use href="#ic-sun"/></svg>';
    const ICON_MOON = '<svg width="22px" height="22px"><use href="#ic-moon"/></svg>';

    // Toast icon snippets (Dynamic Size, inherits current color)
    const T_ICON = (id, size = 15) => `<svg width="${size}px" height="${size}px" style="flex-shrink:0"><use href="#${id}"/></svg>`;
    const TOAST_HOME = T_ICON('ic-home') + '<span>Home</span>';
    const TOAST_DARK = T_ICON('ic-moon') + '<span>Dark Mode</span>';
    const TOAST_LIGHT = T_ICON('ic-sun') + '<span>Light Mode</span>';
    const TOAST_COPIED = T_ICON('ic-check') + '<span>Copied!</span>';
    const TOAST_COPYFAIL = T_ICON('ic-alert') + '<span>Copy failed — try long-press</span>';
    const TOAST_PDFMISS = T_ICON('ic-alert') + '<span>PDF not found — download from GitHub Releases</span>';

    // Font size toast helper
    function fontToast(label) { return T_ICON('ic-font') + '<span>Text: ' + label + '</span>'; }
    // Layout toast helper
    function layoutToast(label) { return T_ICON(label === 'Stacked' ? 'ic-stacked' : 'ic-split') + '<span>' + label + '</span>'; }

    // ===================== STORAGE HELPERS =====================
    function safeSave(key, val) {
      try { localStorage.setItem(key, val); } catch(e) { console.warn('Storage failed', e); }
    }
    function safeGet(key) {
      try { return localStorage.getItem(key); } catch(e) { return null; }
    }

    // ================================================
    // THEME PRESETS — Exactly 3 Curated Modes
    // 1. Modern Standard  2. Geek Terminal  3. Classic Monolith
    // ================================================
    const PRESETS = ['modern', 'geek', 'classic'];

    // Build and inject panel once at body level
    (function buildPresetPanel() {
      const html = `
        <div id="presetBackdrop" style="display:none;position:fixed;inset:0;z-index:2147483640;background:rgba(0,0,0,0.55);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);"></div>
        <div id="themePresetPanel" style="display:none;position:fixed;z-index:2147483647;width:min(300px,calc(100vw - 28px));background:#111827;border:1px solid #1f293d;border-radius:16px;padding:12px;box-shadow:0 20px 60px rgba(0,0,0,0.8);flex-direction:column;gap:8px;font-family:'Outfit',sans-serif;">
          <div id="presetPanelHeader" style="font-size:10px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#94a3b8;padding:0 2px 4px;border-bottom:1px solid #1f293d;">Theme Preset</div>
          <div id="presetTiles" style="display:flex;flex-direction:column;gap:6px;"></div>
        </div>`;
      document.body.insertAdjacentHTML('beforeend', html);

      // Tiles data — 3 distinct color theory & layout personalities
      const tiles = [
        { 
          key: 'modern',  
          name: 'Modern Standard',       
          desc: 'Commercial UI · Indigo & Slate · Studio UX', 
          bg: 'linear-gradient(135deg,#0b0f19,#1e293b)', 
          btnBg: '#3b82f6', 
          btnR: '8px', 
          dotBg: '#818cf8', 
          dotGlow: '0 0 6px rgba(129,140,248,0.5)' 
        },
        { 
          key: 'geek',    
          name: 'Geek Terminal',   
          desc: 'Matrix Hacker · Cyber Green · 0px Pointy',    
          bg: '#040806', 
          btnBg: '#00ff66', 
          btnR: '0',   
          dotBg: '#00ff66', 
          dotGlow: '0 0 6px #00ff66' 
        },
        { 
          key: 'classic', 
          name: 'Classic Monolith', 
          desc: 'Pure Black & White · High Contrast · 0px Pointy', 
          bg: '#000000', 
          btnBg: '#ffffff', 
          btnR: '0',   
          dotBg: '#ffffff', 
          dotGlow: '0 0 4px #ffffff' 
        },
      ];

      const tilesEl = document.getElementById('presetTiles');
      tiles.forEach(t => {
        const tile = document.createElement('div');
        tile.dataset.preset = t.key;
        tile.setAttribute('onclick', `applyPreset('${t.key}')`);
        tile.style.cssText = 'display:flex;align-items:center;gap:12px;padding:10px 12px;border-radius:12px;cursor:pointer;border:1.5px solid transparent;transition:background 0.12s,border-color 0.15s;position:relative;';
        tile.onmouseenter = () => { tile.style.background='rgba(255,255,255,0.06)'; tile.style.borderColor='#30363d'; };
        tile.onmouseleave = () => { if(!tile.classList.contains('active')){ tile.style.background=''; tile.style.borderColor='transparent'; } };
        tile.innerHTML = `
          <div style="width:44px;height:36px;border-radius:8px;flex-shrink:0;position:relative;overflow:hidden;border:1px solid rgba(255,255,255,0.1);">
            <div style="position:absolute;inset:0;background:${t.bg}"></div>
            <div style="position:absolute;bottom:5px;left:5px;right:5px;height:8px;background:${t.btnBg};border-radius:${t.btnR};${t.dotGlow?'box-shadow:'+t.dotGlow:''}"></div>
            <div style="position:absolute;top:5px;right:6px;width:6px;height:6px;border-radius:50%;background:${t.dotBg};${t.dotGlow?'box-shadow:'+t.dotGlow:''}"></div>
          </div>
          <div style="flex:1;min-width:0;">
            <div class="ptile-name" style="font-size:13px;font-weight:600;color:#e6edf3;white-space:nowrap;">${t.name}</div>
            <div style="font-size:11px;color:#8b949e;margin-top:1px;">${t.desc}</div>
          </div>
          <div class="ptile-dot" style="display:none;width:8px;height:8px;border-radius:50%;background:#58a6ff;box-shadow:0 0 6px #58a6ff;flex-shrink:0;"></div>`;
        tilesEl.appendChild(tile);
      });

      document.getElementById('presetBackdrop').addEventListener('click', closePresetPanel);
    })();

    function _updatePanelTheme() {
      const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
      const panel = document.getElementById('themePresetPanel');
      const header = document.getElementById('presetPanelHeader');
      if (!panel) return;
      if (isDark) {
        panel.style.background = '#161b22';
        panel.style.border = '1px solid #30363d';
        panel.style.boxShadow = '0 20px 60px rgba(0,0,0,0.8)';
        if (header) { header.style.color = '#8b949e'; header.style.borderBottomColor = '#30363d'; }
      } else {
        panel.style.background = '#ffffff';
        panel.style.border = '1px solid #d0d7de';
        panel.style.boxShadow = '0 8px 32px rgba(0,0,0,0.12)';
        if (header) { header.style.color = '#57606a'; header.style.borderBottomColor = '#d0d7de'; }
      }
      document.querySelectorAll('#presetTiles [data-preset]').forEach(tile => {
        tile.onmouseenter = () => {
          if (!tile.classList.contains('active')) {
            tile.style.background = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.04)';
            tile.style.borderColor = isDark ? '#30363d' : '#d0d7de';
          }
        };
        tile.onmouseleave = () => {
          if (!tile.classList.contains('active')) { tile.style.background = ''; tile.style.borderColor = 'transparent'; }
        };
      });
    }

    function _positionPanel() {
      const btn = document.getElementById('themePresetBtn');
      const panel = document.getElementById('themePresetPanel');
      if (!btn || !panel) return;
      const r = btn.getBoundingClientRect();
      const pw = Math.min(300, window.innerWidth - 28);
      panel.style.width = pw + 'px';
      panel.style.top = (r.bottom + 8) + 'px';
      if (window.innerWidth <= 480) {
        // Mobile: center horizontally
        panel.style.left = Math.round((window.innerWidth - pw) / 2) + 'px';
      } else {
        // Desktop: align right edge to button right
        let left = r.right - pw;
        if (left < 14) left = 14;
        panel.style.left = left + 'px';
      }
    }

    function togglePresetPanel(e) {
      if (e) e.stopPropagation();
      const panel = document.getElementById('themePresetPanel');
      if (!panel) return;
      if (panel.style.display === 'flex') { closePresetPanel(); return; }
      _positionPanel();
      _updatePanelTheme();
      syncPresetActiveState();
      document.getElementById('presetBackdrop').style.display = 'block';
      panel.style.display = 'flex';
      panel.style.animation = 'preset-panel-in 0.22s cubic-bezier(0.34,1.56,0.64,1) both';
    }

    function closePresetPanel() {
      const panel = document.getElementById('themePresetPanel');
      const backdrop = document.getElementById('presetBackdrop');
      if (panel) panel.style.display = 'none';
      if (backdrop) backdrop.style.display = 'none';
    }

    function syncPresetActiveState() {
      const current = document.documentElement.getAttribute('data-preset') || 'modern';
      const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
      const inactiveNameColor = isDark ? '#e6edf3' : '#1f2328';
      const accent = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim();
      const accentRgb = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim();
      document.querySelectorAll('#presetTiles [data-preset]').forEach(el => {
        const isActive = el.dataset.preset === current;
        el.classList.toggle('active', isActive);
        el.style.borderColor = isActive ? accent : 'transparent';
        el.style.background  = isActive ? `color-mix(in srgb, ${accent} 10%, transparent)` : '';
        const dot = el.querySelector('.ptile-dot');
        if (dot) { dot.style.background = accent; dot.style.boxShadow = `0 0 6px ${accent}`; dot.style.display = isActive ? 'block' : 'none'; }
        const nm  = el.querySelector('.ptile-name');
        if (nm)  nm.style.color = isActive ? accent : inactiveNameColor;
      });
    }

    function applyPreset(preset) {
      haptic(12);
      const root = document.documentElement;
      const flash = document.getElementById('theme-flash');
      closePresetPanel();
      flash.classList.add('active');
      setTimeout(() => {
        root.removeAttribute('data-preset');
        if (preset !== 'modern') root.setAttribute('data-preset', preset);
        safeSave('duet-preset', preset);
        syncPresetActiveState();
        const labels = { modern:'Modern Standard', geek:'Geek Terminal', classic:'Classic Monolith' };
        showToast(T_ICON('ic-palette') + '<span>' + (labels[preset] || preset) + '</span>', root.getAttribute('data-theme') || 'dark');
        requestAnimationFrame(() => requestAnimationFrame(() => flash.classList.remove('active')));
      }, 160);
    }

    (function initPreset() {
      const saved = safeGet('duet-preset') || 'modern';
      if (saved !== 'modern') document.documentElement.setAttribute('data-preset', saved);
      document.addEventListener('DOMContentLoaded', syncPresetActiveState);
    })();

    function toggleTheme() {
      haptic(10);
      const root = document.documentElement;
      const flash = document.getElementById('theme-flash');
      const nextTheme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';

      flash.classList.add('active');

      setTimeout(() => {
        root.setAttribute('data-theme', nextTheme);
        safeSave('duet-theme', nextTheme);
        const icon = nextTheme === 'dark' ? ICON_SUN : ICON_MOON;
        // Update icon inside a child span to preserve btn classList & ::before
        const iconSpan = document.getElementById('themeBtn').querySelector('.btn-icon');
        if (iconSpan) iconSpan.innerHTML = icon; else document.getElementById('themeBtn').innerHTML = `<span class="btn-icon">${icon}</span>`;
        document.getElementById('themeBtn').setAttribute('aria-label', nextTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
        document.getElementById('themeFab').innerHTML = icon;

        // Update any visible toast immediately to new theme colors
        const t = document.getElementById('toast');
        if (t.classList.contains('show')) {
          const isDark = nextTheme === 'dark';
          t.style.backgroundColor = isDark ? '#161b22' : '#ffffff';
          t.style.color = isDark ? '#e6edf3' : '#1f2328';
          t.style.border = isDark ? '1px solid #30363d' : '1px solid #d0d7de';
        }

        _updatePanelTheme();
        syncPresetActiveState();

        // Toast confirming theme switch
        showToast(nextTheme === 'dark' ? TOAST_DARK : TOAST_LIGHT, nextTheme);

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            flash.classList.remove('active');
          });
        });
      }, 180);
    }

    (function initTheme() {
      const saved = safeGet('duet-theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const theme = saved || (prefersDark ? 'dark' : 'light');
      document.documentElement.setAttribute('data-theme', theme);
      // Icon shows what you'll SWITCH TO: sun = currently dark (click for light), moon = currently light (click for dark)
      const icon = theme === 'dark' ? ICON_SUN : ICON_MOON;
      document.getElementById('themeBtn').innerHTML = `<span class="btn-icon">${icon}</span>`;
      document.getElementById('themeBtn').setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
      document.getElementById('themeFab').innerHTML = icon;
    })();

    // ================================================
    // FONT SIZE SCALES
    // ================================================
    const FONTS = ['sm', 'md', 'lg'];
    // Fab labels show CURRENT size clearly
    const FONT_FAB_LABELS = ['Aa·S', 'Aa·M', 'Aa·L'];
    const FONT_TOAST_LABELS = ['Small', 'Medium', 'Large'];
    let fontIdx = 1;

    function getFontFabLabel(idx) {
      return FONT_FAB_LABELS[idx];
    }

    function cycleFont() {
      haptic(8);
      fontIdx = (fontIdx + 1) % FONTS.length;
      const f = FONTS[fontIdx];
      document.documentElement.setAttribute('data-font', f);
      safeSave('duet-font', f);
      showToast(fontToast(FONT_TOAST_LABELS[fontIdx]));
      const fab = document.getElementById('fontFab');
      if (fab) fab.textContent = getFontFabLabel(fontIdx);
    }

    (function initFont() {
      const saved = safeGet('duet-font') || 'md';
      fontIdx = FONTS.indexOf(saved) >= 0 ? FONTS.indexOf(saved) : 1;
      document.documentElement.setAttribute('data-font', saved);
      // Guard: element may not exist yet if script runs before body parses
      function applyFontFab() {
        const fab = document.getElementById('fontFab');
        if (fab) fab.textContent = getFontFabLabel(fontIdx);
      }
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', applyFontFab);
      } else {
        applyFontFab();
      }
    })();

    // ================================================
    // LAYOUT TOGGLE (Compare Mode Only)
    // ================================================
    let currentLayout = 'row';

    function toggleLayout() {
      haptic(10);
      currentLayout = currentLayout === 'row' ? 'col' : 'row';
      safeSave('duet-layout', currentLayout);

      document.querySelectorAll('.panes').forEach(el => {
        el.className = `panes layout-${currentLayout}`;
      });

      // row = side-by-side (ic-split icon), col = stacked (ic-stacked icon)
      const iconId = currentLayout === 'row' ? '#ic-split' : '#ic-stacked';
      document.getElementById('layoutIcon').innerHTML = `<use href="${iconId}"/>`;

      const label = currentLayout === 'col' ? 'Stacked' : 'Side by Side';
      showToast(layoutToast(label));
    }

    // ================================================
    // NAVIGATION, HISTORY API & INTERSECTION OBSERVER
    // ================================================
    let codeObserver = null;
    let currentMode = null; // Store current mode to recreate if navigating via back button

    // Elite: Haptic feedback utility
    function haptic(ms = 12) {
      if (window.navigator && window.navigator.vibrate) {
        window.navigator.vibrate(ms);
      }
    }

    // Core UI manipulation functions
    function showHomeUI() {
      haptic(8);
      const home = document.getElementById('home');
      const app = document.getElementById('app');
      const fabs = document.getElementById('fabs');
      home.style.willChange = 'opacity, transform';
      app.style.willChange = 'opacity, transform';
      home.classList.remove('hidden');
      app.classList.remove('show');
      fabs.classList.remove('show');
      closeMenuUI();
      dismissToast();
      // Auto-collapse the FAB panel every time user returns home
      if (typeof collapseFabs === 'function') collapseFabs();
      // Show "Home" toast with icon
      const theme = document.documentElement.getAttribute('data-theme');
      showToast(TOAST_HOME, theme);
      // Clean up will-change after transition
      setTimeout(() => {
        home.style.willChange = '';
        app.style.willChange = '';
      }, 400);
    }

    function showAppUI() {
      const home = document.getElementById('home');
      const app = document.getElementById('app');
      const fabs = document.getElementById('fabs');
      home.style.willChange = 'opacity, transform';
      app.style.willChange = 'opacity, transform';
      home.classList.add('hidden');
      app.classList.add('show'); app.focus({ preventScroll: true });
      fabs.classList.add('show');
      dismissToast();
      setTimeout(() => {
        home.style.willChange = '';
        app.style.willChange = '';
      }, 400);
    }

    let _lastFocused = null;
    function openMenuUI() {
      _lastFocused = document.activeElement;
      document.getElementById('sheet').classList.add('show');
      document.getElementById('overlay').classList.add('show');
      document.body.classList.add('sheet-open');
    }

    function closeMenuUI() {
      document.getElementById('sheet').classList.remove('show');
      document.getElementById('overlay').classList.remove('show');
      document.body.classList.remove('sheet-open');
      clearMenuSearch();
      if (_lastFocused && _lastFocused.focus) _lastFocused.focus();
      // Reset sheet tab to 'all' each time sheet closes, so it's fresh next open
      _sheetTab = 'all';
      const tabAll = document.getElementById('tab-all');
      const tabBm = document.getElementById('tab-bm');
      if (tabAll) {
        tabAll.classList.add('active');
        tabAll.setAttribute('aria-selected', 'true');
      }
      if (tabBm) {
        tabBm.classList.toggle('active', _sheetTab === 'bookmarks');
        tabBm.setAttribute('aria-selected', _sheetTab === 'bookmarks' ? 'true' : 'false');
      }
    }

    // Accessibility: Focus trap for side sheet
    document.addEventListener('keydown', e => {
      const sheet = document.getElementById('sheet');
      if (!sheet.classList.contains('show') || e.key !== 'Tab') return;
      const focusable = Array.from(sheet.querySelectorAll('button, [href], input, [tabindex]:not([tabindex="-1"])')).filter(el => el.offsetParent !== null);
      if (!focusable.length) return;
      const first = focusable[0], last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault(); last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault(); first.focus();
      }
    });

    // ── Swipe-to-dismiss: bottom sheet on mobile ──
    // UX rules:
    //   • Pill → ALWAYS dismisses on swipe down, regardless of scroll position
    //   • Anywhere else on sheet → dismisses ONLY if list scrollTop === 0
    //   • Mid-list swipe down → just scrolls, never dismisses
    //   • ✕ button → closeMenu() via onclick
    (function() {
      const sheet = document.getElementById('sheet');
      const handle = sheet.querySelector('.sheet-drag-handle');
      const scrollEl = sheet.querySelector('.sheet-scroll');
      let startY = 0, dragging = false, fromHandle = false;

      function resetSheet() {
        dragging = false;
        fromHandle = false;
        sheet.style.transition = '';
        sheet.style.transform = '';
        if (handle) handle.classList.remove('grabbing');
      }

      // Single touchstart on the SHEET — use e.target to detect pill
      sheet.addEventListener('touchstart', e => {
        if (window.innerWidth >= 900) return;

        const onPill = handle && (e.target === handle || handle.contains(e.target));

        if (onPill) {
          // Pill touched — always eligible, glow it
          handle.classList.add('grabbing');
          startY = e.touches[0].clientY;
          dragging = true;
          fromHandle = true;
          sheet.style.transition = 'none';
        } else {
          // Body of sheet — only eligible if already at top
          const atTop = !scrollEl || scrollEl.scrollTop <= 0;
          if (!atTop) return;
          startY = e.touches[0].clientY;
          dragging = true;
          fromHandle = false;
          sheet.style.transition = 'none';
        }
      }, { passive: true });

      sheet.addEventListener('touchmove', e => {
        if (!dragging || window.innerWidth >= 900) return;
        const dy = e.touches[0].clientY - startY;
        if (dy > 0) {
          sheet.style.transform = `translateY(${dy}px)`;
        } else {
          // Swiped up — abort
          resetSheet();
        }
      }, { passive: true });

      sheet.addEventListener('touchend', e => {
        if (!dragging || window.innerWidth >= 900) { resetSheet(); return; }
        const dy = e.changedTouches[0].clientY - startY;
        resetSheet();
        if (dy > 90) closeMenu();
      }, { passive: true });

      sheet.addEventListener('touchcancel', resetSheet, { passive: true });
    })();

    // Intercept Physical/Browser Back Button
    window.addEventListener('popstate', (e) => {
      const state = e.state;

      if (!state || state.screen === 'home') {
        showHomeUI();
      } else if (state.screen === 'app') {
        if (state.mode && state.mode !== currentMode) {
          currentMode = state.mode;
          currentLayout = safeGet('duet-layout') || 'row';
          const iconId = currentLayout === 'row' ? '#ic-split' : '#ic-stacked';
          document.getElementById('layoutIcon').innerHTML = `<use href="${iconId}"/>`;
          buildPrograms(state.mode);
          document.getElementById('layoutFab').style.display = state.mode === 'BOTH' ? 'flex' : 'none';
        }

        // Elite: Snap to last viewed index for this mode every time we return to App UI
        const lv = getLastViewed();
        if (lv && lv.mode === (state.mode || currentMode)) {
          let attempts = 0;
          const trySnap = () => { if (!_snapTo(lv.idx) && attempts++ < 20) setTimeout(trySnap, 100); };
          trySnap();
        }

        showAppUI();
        closeMenuUI();
      } else if (state.screen === 'menu') {
        showAppUI();
        openMenuUI();
      }
    });

    // Setting the very first base state when the page loads
    history.replaceState({ screen: 'home' }, '', window.location.pathname + window.location.search);

    // Navigation Triggers
    function openMode(mode) {
      haptic(15);
      safeSave('duet-state', mode);
      // Hide first-time browse hint once user enters a mode
      const firstHint = document.getElementById('home-first-hint');
      if (firstHint) firstHint.classList.add('hidden');
      safeSave('duet-visited', '1');
      const savedLayout = safeGet('duet-layout') || 'row';
      currentLayout = savedLayout;
      currentMode = mode;
      const openIconId = currentLayout === 'row' ? '#ic-split' : '#ic-stacked';
      document.getElementById('layoutIcon').innerHTML = `<use href="${openIconId}"/>`;

      // Start the screen transition FIRST
      showAppUI();
      document.getElementById('app').scrollTop = 0;
      document.getElementById('layoutFab').style.display = mode === 'BOTH' ? 'flex' : 'none';
      history.pushState({ screen: 'app', mode: mode }, '', window.location.pathname + window.location.search);

      // Elite: Inject skeleton loader immediately for perceived speed
      const container = document.getElementById('prog-container');
      container.innerHTML = `
        <div class="skeleton-wrap">
          <div class="skeleton-card"><div class="sk-bar"></div><div class="sk-body"></div><div class="shimmer"></div></div>
          <div class="skeleton-card"><div class="sk-bar"></div><div class="sk-body"></div><div class="shimmer"></div></div>
        </div>`;

      // Yield current frame so transition paints, THEN do ONE build via _loadHljs.
      requestAnimationFrame(() => {
        window._loadHljs(mode, () => buildPrograms(mode));
      });
    }

    function goHome() {
      haptic(10);
      try { localStorage.removeItem('duet-state'); } catch(e){}
      const state = history.state;
      closeMenuUI();
      dismissToast();
      
      if (state && (state.screen === 'menu' || state.screen === 'app')) {
        // Elite: Decisive double-back for deep navigation history
        history.go(state.screen === 'menu' ? -2 : -1);
      } else {
        showHomeUI();
      }
    }

    // Generating DOM content
    // Guard against concurrent builds
    let _buildInProgress = false;
    let _pendingBuildMode = null;
    let _currentBuildId = 0;
    function buildPrograms(mode) {
      if (codeObserver) codeObserver.disconnect();
      const buildId = ++_currentBuildId;
      if (_buildInProgress && _pendingBuildMode === mode) return;
      _buildInProgress = true;
      _pendingBuildMode = mode;

      const container = document.getElementById('prog-container');
      const menuList = document.getElementById('menuList');
      container.innerHTML = '';
      menuList.innerHTML = '';

      const sheetTitles = { C: 'C Programs', CPP: 'C++ Programs', BOTH: 'C & C++ Comparison' };
      document.getElementById('sheetTitle').textContent = sheetTitles[mode];
      if (codeObserver) codeObserver.disconnect();

      // Elite: Batch Rendering (Chunking)
      // We render 15 programs at a time to keep the main thread free for animations.
      const BATCH_SIZE = 15;
      let currentIdx = 0;

      function renderBatch() {
        if (buildId !== _currentBuildId) return; // Stale build

        const fragment = document.createDocumentFragment();
        const menuFrag = document.createDocumentFragment();
        const bm = getBookmarks();
        const endIdx = Math.min(currentIdx + BATCH_SIZE, data.length);

        for (let i = currentIdx; i < endIdx; i++) {
          const prog = data[i];
          const [title, pattern, cCode, cppCode] = prog;

          // Side menu
          const li = document.createElement('li');
          li.dataset.idx = i;
          const bmEntry = bm.find(b => b.idx === i && b.mode === mode);
          if (bmEntry) li.classList.add('bookmarked');
          li.innerHTML = `<span class="prog-num">${i + 1}</span><span class="prog-title">${title}</span><span class="prog-star${bmEntry ? ' starred' : ''}">${bmEntry ? '<svg width="14" height="14"><use href="#ic-star-filled"/></svg>' : '<svg width="14" height="14"><use href="#ic-star"/></svg>'}</span>`;
          li.querySelector('.prog-star').onclick = (e) => { e.stopPropagation(); toggleBookmark(i); };
          li.onclick = () => {
            haptic(10);
            closeMenuUI();
            clearMenuSearch();
            let attempts = 0;
            const trySnap = () => {
              if (_snapTo(i)) {
                // Success
              } else if (attempts++ < 25) {
                setTimeout(trySnap, 80);
              }
            };
            trySnap();
          };
          menuFrag.appendChild(li);

          // Card
          const snap = document.createElement('div');
          snap.className = 'snap';
          snap.id = 's' + i;
          const card = document.createElement('div');
          card.className = 'card';
          const topbar = document.createElement('div');
          topbar.className = 'card-topbar';
          const isStarred = !!bmEntry;

          // Integrated Back Button
          const backBtn = document.createElement('button');
          backBtn.className = 'card-back-btn';
          backBtn.title = 'Back to home';
          backBtn.setAttribute('aria-label', 'Back to home');
          backBtn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>';
          backBtn.onclick = (e) => { e.stopPropagation(); goHome(); };
          topbar.appendChild(backBtn);

          // Card Title
          const cardTitle = document.createElement('div');
          cardTitle.className = 'card-title';
          cardTitle.textContent = title;
          topbar.appendChild(cardTitle);

          // Card Actions (Prog + Bookmark)
          const cardActions = document.createElement('div');
          cardActions.className = 'card-actions';
          const bmHtml = isStarred ? '<svg width="16" height="16"><use href="#ic-star-filled"/></svg>' : '<svg width="16" height="16"><use href="#ic-star"/></svg>';
          cardActions.innerHTML = `<div class="card-prog">${i + 1} / ${data.length}</div><button class="bm-btn${isStarred ? ' starred' : ''}" id="bm-btn-${i}" title="${isStarred ? 'Remove bookmark' : 'Bookmark'}" aria-label="${isStarred ? 'Remove bookmark' : 'Bookmark'}" aria-pressed="${isStarred}" onclick="toggleBookmark(${i})">${bmHtml}</button>`;
          topbar.appendChild(cardActions);

          card.appendChild(topbar);

          // Onboarding: Show bookmark tooltip once on the very first card
          if (i === 0 && !safeGet('duet-bm-hint')) {
            setTimeout(() => {
              const bmBtn = document.getElementById('bm-btn-0');
              if (bmBtn) {
                const tip = document.createElement('div');
                tip.className = 'bm-tip';
                tip.innerHTML = 'Save for later';
                bmBtn.appendChild(tip);
                setTimeout(() => { tip.classList.add('show'); }, 500);
                setTimeout(() => { tip.classList.remove('show'); setTimeout(() => tip.remove(), 400); }, 4500);
                safeSave('duet-bm-hint', '1');
              }
            }, 1000);
          }
          // Show explanation for ALL programs (Bangla + pattern demos)
          if (pattern && pattern.trim()) {
            const pat = document.createElement('div');
            const isVisualPattern = title.toUpperCase().includes('PATTERN') ||
                                    title.toUpperCase().includes('PYRAMID') ||
                                    title.toUpperCase().includes('TRIANGLE');
            pat.className = isVisualPattern ? 'pattern' : 'pattern bn-expl';
            const rawLines = pattern.split('\n').map(l => l.trimEnd());
            const nonEmpty = rawLines.filter(l => l.trim());
            const minIndent = nonEmpty.length
              ? Math.min(...nonEmpty.map(l => l.length - l.trimStart().length))
              : 0;
            const normalized = minIndent > 0
              ? rawLines.map(l => l.slice(minIndent)).join('\n')
              : rawLines.join('\n');
            const inner = document.createElement('span');
            // Fix: CENTERED pyramids use "X " (char+space = 2-char units) but indent
            // uses single spaces → double leading spaces ONLY for CENTERED PYRAMID patterns.
            const isCenteredPyramid = title.toUpperCase().includes('CENTERED PYRAMID');
            let displayText = normalized;
            if (isCenteredPyramid) {
              displayText = normalized.split('\n').map(line => {
                const match = line.match(/^( +)/);
                if (!match) return line;
                return '  '.repeat(match[1].length) + line.slice(match[1].length);
              }).join('\n');
            }
            inner.textContent = displayText;
            pat.appendChild(inner);
            card.appendChild(pat);
          }
          const panes = document.createElement('div');
          panes.className = `panes layout-${currentLayout}`;
          if (mode === 'C' || mode === 'BOTH') panes.appendChild(makePane('C', cCode));
          if (mode === 'CPP' || mode === 'BOTH') panes.appendChild(makePane('CPP', cppCode));
          card.appendChild(panes);
          snap.appendChild(card);
          fragment.appendChild(snap);
          codeObserver.observe(snap);
        }

        container.appendChild(fragment);
        menuList.appendChild(menuFrag);
        currentIdx = endIdx;

        if (currentIdx < data.length) {
          // Schedule next batch on next idle frame
          requestAnimationFrame(renderBatch);
        } else {
          _buildInProgress = false;
          // If menu search is active, re-run filtering to catch the newly added items
          const menuSearch = document.getElementById('menuSearch');
          if (menuSearch && menuSearch.value.trim()) {
            switchSheetTab(_sheetTab);
          }
          // First highlight for the first card
          if (typeof hljs !== 'undefined') {
            const first = container.querySelector('.snap');
            if (first) first.querySelectorAll('code:not(.hljs)').forEach(el => hljs.highlightElement(el));
          }
        }
      }

      codeObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const target = entry.target;
            if (target._hlTimer) return;
            target._hlTimer = setTimeout(() => {
              target._hlTimer = null;
              const blocks = target.querySelectorAll('code:not(.hljs)');
              if (blocks.length && typeof hljs !== 'undefined') {
                blocks.forEach((el, index) => { setTimeout(() => hljs.highlightElement(el), index * 16); });
                obs.unobserve(target);
              } else if (!blocks.length) obs.unobserve(target);
            }, 80);
          }
        });
      }, { root: document.getElementById('app'), rootMargin: '200% 0px' });

      renderBatch();
    }

    function makePane(lang, code) {
      const pane = document.createElement('div');
      pane.className = 'pane';

      const hdr = document.createElement('div');
      hdr.className = 'pane-hdr';

      const langLabel = document.createElement('div');
      langLabel.className = 'pane-lang';
      const dot = document.createElement('span');
      dot.className = 'lang-dot ' + (lang === 'C' ? 'c' : 'cpp');
      const langText = document.createElement('span');
      langText.className = 'lang-text';
      langText.textContent = lang === 'C' ? 'C Language' : 'C++ Language';
      langLabel.appendChild(dot);
      langLabel.appendChild(langText);

      const btn = document.createElement('button');
      btn.className = 'copy-btn';
      btn.setAttribute('aria-label', `Copy ${lang === 'C' ? 'C' : 'C++'} code`);
      btn.innerHTML = '<svg width="13px" height="13px"><use href="#ic-copy"/></svg>Copy';
      btn.onclick = () => { haptic(8); copyCode(code, btn); };

      hdr.appendChild(langLabel);
      hdr.appendChild(btn);
      pane.appendChild(hdr);

      const scroll = document.createElement('div');
      scroll.className = 'code-scroll';
      const pre = document.createElement('pre');
      const codeEl = document.createElement('code');
      codeEl.className = lang === 'C' ? 'language-c' : 'language-cpp';
      // Always store raw code before hljs touches the element
      codeEl.dataset.original = code;
      const displayCode = (currentIndent === 'flat') ? flattenCode(code) : code;
      codeEl.textContent = displayCode;

      // Integrated Line Numbers
      const lineCount = displayCode.split('\n').length;
      const nums = Array.from({ length: lineCount }, (_, k) => k + 1).join('\n');
      const lineNumEl = document.createElement('div');
      lineNumEl.className = 'line-nums';
      lineNumEl.textContent = nums;
      pre.appendChild(lineNumEl);

      pre.appendChild(codeEl);
      scroll.appendChild(pre);
      pane.appendChild(scroll);

      return pane;
    }

    // ================================================
    // COPY UTILITY 
    // ================================================
    function copyCode(code, btn) {
      const CHECK = T_ICON('ic-check') + '<span>Copied!</span>';
      const COPY = T_ICON('ic-copy') + '<span>Copy</span>';

      const succeed = () => {
        btn.innerHTML = CHECK;
        btn.classList.add('ok');
        setTimeout(() => { btn.innerHTML = COPY; btn.classList.remove('ok'); }, 2000);
      };

      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(code).then(succeed).catch(() => fallbackCopy(code, succeed));
      } else {
        fallbackCopy(code, succeed);
      }
    }

    function fallbackCopy(text, cb) {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.cssText = 'position:absolute;left:-9999px;opacity:0;top:0';
      document.body.appendChild(ta);
      ta.select();
      let ok = false;
      try { ok = document.execCommand('copy'); } catch (e) { }
      ta.blur();
      document.body.removeChild(ta);
      if (ok) cb(); else showToast(TOAST_COPYFAIL);
    }

    // ================================================
    // BOTTOM SHEET MENU (History Linked)
    // ================================================
    function toggleMenu() {
      const sheet = document.getElementById('sheet');
      sheet.classList.contains('show') ? closeMenu() : openMenuSheet();
    }

    // ================================================
    // FAB PANEL TOGGLE — interrupt-safe, no transitionend
    // ================================================
    (function () {
      var _fabOpen = false;   // true = expanded
      var _fabBusy = false;   // mid-animation lock
      var _fabTimer = null;    // cleanup timeout handle
      var ANIM_MS = 220;     // must match CSS transition duration on .fab-collapsible
      var HEIGHT_MS = 200;     // height animation duration
      // stagger delays (ms) for each button index 0-3
      var DELAYS_OPEN = [360, 300, 240, 180, 120, 60, 0];   // bottom-first when expanding
      var DELAYS_CLOSE = [0, 60, 120, 180, 240, 300, 360];  // top-first when collapsing (reversed)

      function getFabs() {
        return Array.from(document.querySelectorAll('#fabsCollapsible .fab-collapsible'))
          .filter(el => el.style.display !== 'none');
      }

      function setHeight(wrap, px) {
        wrap.style.transition = 'height ' + HEIGHT_MS + 'ms ease';
        wrap.style.height = px + 'px';
      }

      function clearTimers() {
        if (_fabTimer) { clearTimeout(_fabTimer); _fabTimer = null; }
      }

      function abortAnim(wrap, fabs) {
        // Snap everything to current computed position instantly, kill transitions
        var currentH = wrap.offsetHeight;
        wrap.style.transition = 'none';
        wrap.style.height = currentH + 'px';
        fabs.forEach(function (el) {
          var cs = window.getComputedStyle(el);
          el.style.transition = 'none';
          el.style.opacity = cs.opacity;
          el.style.transform = cs.transform;
        });
        // Force reflow to commit
        wrap.offsetHeight;
      }

      // Expose collapse-only function — called by showHomeUI to reset state on every home return
      window.collapseFabs = function () {
        var wrap = document.getElementById('fabsCollapsible');
        var btn = document.getElementById('fabToggle');
        var fabs = getFabs();
        if (!wrap || !_fabOpen) return; // already collapsed, nothing to do
        clearTimers();
        if (_fabBusy) abortAnim(wrap, fabs);
        _fabOpen = false;
        _fabBusy = true;
        btn.classList.remove('open');
        // Lock current height, then stagger-fade out buttons, then collapse height
        wrap.style.transition = 'none';
        wrap.style.height = wrap.scrollHeight + 'px';
        wrap.offsetHeight;
        fabs.forEach(function (el, i) {
          var delay = DELAYS_CLOSE[i] !== undefined ? DELAYS_CLOSE[i] : 0;
          setTimeout(function () {
            el.style.transition = 'opacity ' + ANIM_MS + 'ms ease, transform ' + ANIM_MS + 'ms ease';
            el.style.opacity = '0';
            el.style.transform = 'translateY(10px) scale(0.82)';
            el.style.pointerEvents = 'none';
          }, delay);
        });
        var heightDelay = DELAYS_CLOSE[0] + ANIM_MS;
        setTimeout(function () { setHeight(wrap, 0); }, heightDelay);
        var totalMs = heightDelay + HEIGHT_MS + 30;
        _fabTimer = setTimeout(function () {
          wrap.style.transition = 'none';
          wrap.style.height = '0px';
          _fabBusy = false;
        }, totalMs);
      };

      window.toggleFabs = function () {
        haptic(5);
        var wrap = document.getElementById('fabsCollapsible');
        var btn = document.getElementById('fabToggle');
        var fabs = getFabs();
        if (!wrap || !fabs.length) return;

        clearTimers();
        if (_fabBusy) abortAnim(wrap, fabs);

        _fabBusy = true;
        _fabOpen = !_fabOpen;
        btn.classList.toggle('open', _fabOpen);
        btn.setAttribute('aria-expanded', _fabOpen);
        btn.setAttribute('aria-label', _fabOpen ? 'Close settings menu' : 'Open settings menu');

        if (_fabOpen) {
          // --- EXPAND ---
          // Make sure buttons start from hidden position (no transition yet)
          fabs.forEach(function (el) {
            el.style.transition = 'none';
            el.style.opacity = '0';
            el.style.transform = 'translateY(10px) scale(0.82)';
            el.style.pointerEvents = 'none';
            el.classList.remove('fc-hidden', 'fc-visible');
          });

          // Measure full natural height
          wrap.style.transition = 'none';
          wrap.style.height = 'auto';
          var fullH = wrap.scrollHeight;
          wrap.style.height = '0px';
          wrap.offsetHeight; // reflow

          // Animate height open
          setHeight(wrap, fullH);

          // Stagger each button in
          fabs.forEach(function (el, i) {
            var delay = DELAYS_OPEN[i] !== undefined ? DELAYS_OPEN[i] : 0;
            setTimeout(function () {
              el.style.transition = 'opacity ' + ANIM_MS + 'ms ease, transform ' + ANIM_MS + 'ms ease';
              el.style.opacity = '1';
              el.style.transform = 'translateY(0) scale(1)';
              el.style.pointerEvents = 'auto';
            }, delay);
          });

          var totalMs = HEIGHT_MS + Math.max.apply(null, DELAYS_OPEN) + ANIM_MS + 30;
          _fabTimer = setTimeout(function () {
            wrap.style.transition = 'none';
            wrap.style.height = 'auto';
            _fabBusy = false;
          }, totalMs);

        } else {
          // --- COLLAPSE ---
          // Lock current height before animating
          wrap.style.transition = 'none';
          wrap.style.height = wrap.scrollHeight + 'px';
          wrap.offsetHeight; // reflow

          // Stagger each button out
          fabs.forEach(function (el, i) {
            var delay = DELAYS_CLOSE[i] !== undefined ? DELAYS_CLOSE[i] : 0;
            setTimeout(function () {
              el.style.transition = 'opacity ' + ANIM_MS + 'ms ease, transform ' + ANIM_MS + 'ms ease';
              el.style.opacity = '0';
              el.style.transform = 'translateY(10px) scale(0.82)';
              el.style.pointerEvents = 'none';
            }, delay);
          });

          // Start collapsing height after first button has started fading (add small buffer)
          var heightDelay = DELAYS_CLOSE[0] + ANIM_MS;
          setTimeout(function () { setHeight(wrap, 0); }, heightDelay);

          var totalMs = heightDelay + HEIGHT_MS + 30;
          _fabTimer = setTimeout(function () {
            wrap.style.transition = 'none';
            wrap.style.height = '0px';
            _fabBusy = false;
          }, totalMs);
        }
      };

      // Init — start collapsed, buttons hidden
      document.addEventListener('DOMContentLoaded', function () {
        var wrap = document.getElementById('fabsCollapsible');
        if (!wrap) return;
        wrap.style.transition = 'none';
        wrap.style.height = '0px';
        getFabs().forEach(function (el) {
          el.style.transition = 'none';
          el.style.opacity = '0';
          el.style.transform = 'translateY(10px) scale(0.82)';
          el.style.pointerEvents = 'none';
        });
      });
    })();

    function openMenuSheet() {
      openMenuUI();
      history.pushState({ screen: 'menu' }, '', window.location.pathname + window.location.search);
    }

    let _menuClosing = false;
    function closeMenu() {
      if (_menuClosing) return;
      if (history.state && history.state.screen === 'menu') {
        _menuClosing = true;
        history.back();
        setTimeout(() => { _menuClosing = false; }, 400);
      } else {
        closeMenuUI();
      }
    }

    // ================================================
    // PDF DOWNLOAD — no override needed; let native <a download> handle it
    // ================================================
    function handlePdfClick(e, anchor) {
      // Native anchor click handles download; only intercept if href is missing
      if (!anchor.href || anchor.href === window.location.href) {
        e.preventDefault();
        showToast(TOAST_PDFMISS);
      }
    }

    // ================================================
    // TOAST UTILITY
    // ================================================
    let toastTimer = null;
    function showToast(html, theme) {
      const t = document.getElementById('toast');
      t.classList.remove('show');
      t.innerHTML = html;
      const isDark = (theme || document.documentElement.getAttribute('data-theme')) === 'dark';
      t.style.backgroundColor = isDark ? '#161b22' : '#ffffff';
      t.style.color = isDark ? '#e6edf3' : '#1f2328';
      t.style.border = isDark ? '1px solid #30363d' : '1px solid #d0d7de';
      void t.offsetHeight;
      t.classList.add('show');
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => { t.classList.remove('show'); }, 2000);
    }
    function dismissToast() {
      clearTimeout(toastTimer);
      toastTimer = null;
      document.getElementById('toast').classList.remove('show');
    }

    // ================================================
    // BOOKMARKS — stores [{idx, mode}] with mode tracking
    // ================================================
    function _bmMigrate(raw) {
      // Migrate old format (array of numbers) to new [{idx,mode}] format
      if (!Array.isArray(raw)) return [];
      return raw.map(item => typeof item === 'object' ? item : { idx: item, mode: currentMode || 'BOTH' });
    }
    function getBookmarks() {
      try { return _bmMigrate(JSON.parse(safeGet('duet-bookmarks') || '[]')); } catch (e) { return []; }
    }
    function setBookmarks(bm) {
      safeSave('duet-bookmarks', JSON.stringify(bm));
      updateHomeBmChip();
    }
    function isBookmarked(idx, mode) {
      // If mode is provided, check for that specific index + mode combo
      // If mode is NOT provided, check if the program index is bookmarked in ANY mode
      return getBookmarks().some(b => b.idx === idx && (mode ? b.mode === mode : true));
    }
    function toggleBookmark(idx) {
      haptic(10);
      const mode = currentMode || 'BOTH';
      let bm = getBookmarks();
      const existIdx = bm.findIndex(b => b.idx === idx && b.mode === mode);
      if (existIdx !== -1) {
        bm.splice(existIdx, 1);
        showToast(T_ICON('ic-star') + '<span>Bookmark removed</span>');
      } else {
        bm.push({ idx, mode });
        showToast(T_ICON('ic-star-filled') + '<span>Bookmarked!</span>');
      }
      setBookmarks(bm);
      // Update card btn
      const btn = document.getElementById('bm-btn-' + idx);
      if (btn) updateBookmarkBtn(btn, isBookmarked(idx, mode));
      // Update sheet star if visible
      const star = document.querySelector('#menuList [data-idx="' + idx + '"] .prog-star');
      const nowStarred = isBookmarked(idx, mode);
      if (star) { star.classList.toggle('starred', nowStarred); star.innerHTML = nowStarred ? '<svg width="14" height="14"><use href="#ic-star-filled"/></svg>' : '<svg width="14" height="14"><use href="#ic-star"/></svg>'; }
      // Refresh bookmark tab if open
      if (_sheetTab === 'bookmarks') switchSheetTab('bookmarks');
    }
    function updateBookmarkBtn(btn, starred) {
      btn.classList.toggle('starred', starred);
      btn.setAttribute('aria-pressed', starred);
      btn.innerHTML = starred
        ? '<svg width="16" height="16"><use href="#ic-star-filled"/></svg>'
        : '<svg width="16" height="16"><use href="#ic-star"/></svg>';
      btn.title = starred ? 'Remove bookmark' : 'Bookmark';
      btn.setAttribute('aria-label', starred ? 'Remove bookmark' : 'Bookmark');
    }
    function updateHomeBmChip() {
      const chip = document.getElementById('home-bm-chip');
      const cnt = document.getElementById('home-bm-count');
      if (!chip) return;
      const bm = getBookmarks();
      chip.style.display = 'inline-flex';
      if (bm.length === 0) {
        cnt.textContent = '0 Bookmarks';
        chip.classList.add('chip-empty');
      } else {
        cnt.textContent = bm.length + ' Bookmark' + (bm.length === 1 ? '' : 's');
        chip.classList.remove('chip-empty');
      }
    }
    function openBookmarksSheet() {
      // Switch tab immediately before animation starts to avoid visible flicker/freeze
      _sheetTab = 'bookmarks';
      openMenuSheet();
      // Use rAF to batch the DOM updates after the sheet starts animating
      requestAnimationFrame(() => switchSheetTab('bookmarks'));
    }

    window.exportBookmarks = function() {
      const bm = getBookmarks();
      if (!bm.length) return;
      const list = bm.map((b, i) => `${i+1}. ${data[b.idx][0]} (${b.mode})`).join('\n');
      const text = `DUET Code Study List:\n${list}\n\nGenerated via DUET Code App.`;
      copyCode(text, document.querySelector('#menuList .copy-btn'));
    };

    // ================================================
    // LAST VIEWED — remember which program + mode was last open
    // ================================================
    function saveLastViewed(mode, idx) {
      safeSave('duet-last', JSON.stringify({ mode, idx }));
      updateLastViewedChip();
    }
    function getLastViewed() {
      try { return JSON.parse(safeGet('duet-last')); } catch (e) { return null; }
    }
    function updateLastViewedChip() {
      const lv = getLastViewed();
      const chip = document.getElementById('last-viewed-chip');
      const txt = document.getElementById('last-viewed-text');
      if (!chip || !txt) return;
      chip.style.display = 'inline-flex';
      if (lv && lv.idx != null && data[lv.idx]) {
        const shortTitle = data[lv.idx][0].split('.').slice(0, 2).join('.').substring(0, 28);
        txt.textContent = 'Resume: ' + shortTitle;
        chip.classList.remove('chip-empty');
      } else {
        txt.textContent = 'No Recent Programs';
        chip.classList.add('chip-empty');
      }
    }
    // ================================================
    // SNAP SCROLL HELPER — instant jump to exact snap point
    // scrollIntoView({behavior:'smooth'}) fights scroll-snap-type and
    // lands between cards. We disable scroll-behavior briefly, set
    // scrollTop directly (which snaps instantly), then restore.
    // ================================================
    function _snapTo(idx) {
      const app = document.getElementById('app');
      const el  = document.getElementById('s' + idx);
      if (!app || !el) return false;
      
      const rect = el.getBoundingClientRect();
      const offset = rect.top + app.scrollTop;
      
      app.style.scrollBehavior = 'auto';
      app.scrollTop = offset;
      requestAnimationFrame(() => { app.style.scrollBehavior = ''; });
      return true;
    }

    function resumeLastViewed() {
      const lv = getLastViewed();
      if (!lv) return;
      const mode = lv.mode;

      // ── Pre-build while hidden, then reveal at correct position ──
      // Normal openMode calls showAppUI first (starting the opacity transition)
      // then builds 111 cards — the DOM build blocks the main thread MID-transition
      // causing visible stutter. Instead we:
      //   1. Set up all state (no showAppUI yet — app stays opacity:0)
      //   2. Build programs synchronously (invisible, no stutter visible)
      //   3. After override rAFs complete (buttons/line-nums injected),
      //      instantly snap to target, THEN reveal the app
      //   → User sees app fade in already at the correct card. Zero scroll jump.

      // Step 1 — state setup (mirrors openMode minus showAppUI)
      sessionStorage.setItem('duet-state', mode);
      const savedLayout = safeGet('duet-layout') || 'row';
      currentLayout = savedLayout;
      currentMode = mode;
      const iconId = savedLayout === 'row' ? '#ic-split' : '#ic-stacked';
      document.getElementById('layoutIcon').innerHTML = `<use href="${iconId}"/>`;
      document.getElementById('layoutFab').style.display = mode === 'BOTH' ? 'flex' : 'none';
      history.pushState({ screen: 'app', mode }, '', window.location.pathname + window.location.search);
      document.getElementById('app').scrollTop = 0;

      // Step 2 — build (app still hidden)
      window._loadHljs(mode, () => {
        buildPrograms(mode);

        // Step 3 — Polling Snap: wait for target index to be rendered in batch
        let attempts = 0;
        const trySnap = () => {
          if (_snapTo(lv.idx)) {
            requestAnimationFrame(showAppUI);
          } else if (attempts++ < 25) {
            setTimeout(trySnap, 100);
          } else {
            showAppUI();
          }
        };
        trySnap();
      });
    }

    function scrollToTop() {
      haptic(10);
      const app = document.getElementById('app');
      if (app) {
        app.style.scrollBehavior = 'smooth';
        app.scrollTop = 0;
        // Restore snapping after smooth scroll ends
        setTimeout(() => { app.style.scrollBehavior = ''; }, 800);
      }
    }

    // ================================================
    // PROGRESS BAR
    // ================================================
    function initProgressBar(appEl) {
      const bar = document.getElementById('progress-bar');
      if (!bar) return;
      let ticking = false;
      function update() {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            const total = appEl.scrollHeight - appEl.clientHeight;
            if (total <= 0) { bar.style.width = '0%'; }
            else {
              const pct = Math.min(100, (appEl.scrollTop / total) * 100);
              bar.style.width = pct + '%';
            }
            ticking = false;
          });
          ticking = true;
        }
      }
      appEl.addEventListener('scroll', update, { passive: true });
    }

    // ================================================
    // LINE NUMBERS TOGGLE
    // ================================================
    (function initLineNums() {
      // Restore saved state — default is 'off'
      const saved = safeGet('duet-linenums') || 'off';
      document.documentElement.setAttribute('data-linenums', saved);
      // FAB active style if on
      document.addEventListener('DOMContentLoaded', function () {
        _updateLineNumFab(saved === 'on');
      });
    })();

    function _updateLineNumFab(isOn) {
      const fab = document.getElementById('lineNumFab');
      if (!fab) return;
      if (isOn) {
        fab.style.borderColor = 'var(--accent)';
        fab.style.color = 'var(--accent)';
      } else {
        fab.style.borderColor = '';
        fab.style.color = '';
      }
      fab.title = isOn ? 'Hide line numbers' : 'Show line numbers';
    }

    window.toggleLineNums = function () {
      haptic(8);
      const html = document.documentElement;
      const isOn = html.getAttribute('data-linenums') === 'on';
      const next = isOn ? 'off' : 'on';
      html.setAttribute('data-linenums', next);
      safeSave('duet-linenums', next);
      _updateLineNumFab(next === 'on');
      const label = next === 'on' ? 'Line numbers on' : 'Line numbers off';
      showToast(T_ICON('ic-indent') + `<span>${label}</span>`);
    };

    // ================================================
    // SWIPE HINT (show once on first visit to code view)
    // ================================================
    function showSwipeHintOnce() {
      if (safeGet('duet-swipe-seen')) return;
      const hint = document.getElementById('swipe-hint');
      if (!hint) return;
      hint.classList.add('show');
      setTimeout(() => { hint.classList.remove('show'); }, 3000);
      safeSave('duet-swipe-seen', '1');
    }

    // ================================================
    // DEBOUNCE UTILITY (Performance)
    // ================================================
    function debounce(func, wait) {
      let timeout;
      return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
      };
    }

    // Elite: Scoring Fuzzy Search
    function fuzzyMatch(text, q) {
      text = text.toLowerCase();
      q = q.toLowerCase();
      if (text.includes(q)) return 100;
      let score = 0, lastIdx = -1;
      for (let i = 0; i < q.length; i++) {
        const idx = text.indexOf(q[i], lastIdx + 1);
        if (idx === -1) return 0;
        score += (idx === lastIdx + 1) ? 10 : 5;
        lastIdx = idx;
      }
      return score;
    }

    // Elite: Visual Search Highlighting
    function highlightMatch(text, q) {
      if (!q) return text;
      // Escape for HTML rendering
      const esc = text.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
      const regex = new RegExp(`(${q.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')})`, 'gi');
      return esc.replace(regex, '<mark class="search-hl">$1</mark>');
    }

    // ================================================
    // HOME SEARCH
    // ================================================
    (function initHomeSearch() {
      const input = document.getElementById('homeSearch');
      const results = document.getElementById('home-search-results');
      if (!input || !results) return;

      function render(q) {
        if (!q) { results.innerHTML = ''; results.classList.remove('open'); return; }
        const matches = data.map((d, i) => ({ i, title: d[0], score: fuzzyMatch(d[0], q) }))
          .filter(d => d.score > 0)
          .sort((a, b) => b.score - a.score)
          .slice(0, 8);
        if (!matches.length) {
          results.innerHTML = '<div class="hsr-item" style="color:var(--muted);cursor:default" aria-live="polite">No programs found</div>';
        } else {
          results.innerHTML = matches.map(m =>
            `<div class="hsr-item" role="button" tabindex="0" onclick="homeSearchOpen(${m.i})" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();homeSearchOpen(${m.i});}" aria-label="Open program ${m.i + 1}: ${m.title.replace(/"/g, '&quot;')}">
          <span class="hsr-num">${m.i + 1}</span>
          <span>${highlightMatch(m.title, q)}</span>
          <span class="hsr-mode">Open →</span>
        </div>`
          ).join('');
        }
        results.classList.add('open');
      }

      const debouncedRender = debounce((val) => render(val), 60);
      input.addEventListener('input', () => debouncedRender(input.value.trim()));
      input.addEventListener('focus', () => { if (input.value.trim()) render(input.value.trim()); });
      input.addEventListener('keydown', e => {
        if (e.key === 'Enter') {
          const first = results.querySelector('.hsr-item');
          if (first) first.click();
        }
      });

      document.addEventListener('click', e => {
        if (!e.target.closest('.home-search-wrap')) { results.classList.remove('open'); }
      });
    })();

    window.homeSearchOpen = function (idx) {
      haptic(10);
      const input = document.getElementById('homeSearch');
      const results = document.getElementById('home-search-results');
      if (input) input.value = '';
      if (results) results.classList.remove('open');
      
      const targetMode = 'BOTH';
      openMode(targetMode);

      let attempts = 0;
      const trySnap = () => {
        if (_snapTo(idx)) {
          // Success
        } else if (attempts++ < 25) {
          setTimeout(trySnap, 80);
        }
      };
      trySnap();
    };

    // ================================================
    // SHEET TABS (All / Bookmarks)
    // ================================================
    let _sheetTab = 'all';
    window.switchSheetTab = function (tab) {
      if (_sheetTab !== tab) haptic(8);
      _sheetTab = tab;
      const tabAll = document.getElementById('tab-all');
      const tabBm = document.getElementById('tab-bm');
      if (tabAll) {
        tabAll.classList.toggle('active', tab === 'all');
        tabAll.setAttribute('aria-selected', tab === 'all' ? 'true' : 'false');
      }
      if (tabBm) {
        tabBm.classList.toggle('active', tab === 'bookmarks');
        tabBm.setAttribute('aria-selected', tab === 'bookmarks' ? 'true' : 'false');
      }
      // Update sheet title and search placeholder to reflect active tab
      const sheetTitle = document.getElementById('sheetTitle');
      const menuSearch = document.getElementById('menuSearch');
      if (tab === 'bookmarks') {
        if (sheetTitle) sheetTitle.textContent = 'Saved Programs';
        if (menuSearch) menuSearch.placeholder = 'Search bookmarks...';
      } else {
        const modeTitles = { C: 'C Programs', CPP: 'C++ Programs', BOTH: 'C & C++ Comparison' };
        if (sheetTitle) sheetTitle.textContent = modeTitles[currentMode] || 'All Programs';
        if (menuSearch) menuSearch.placeholder = 'Search programs...';
      }
      const items = document.querySelectorAll('#menuList li');
      // Reverse bookmarks so the newest one appears at the top
      const bm = getBookmarks().slice().reverse();
      const searchEl = document.getElementById('menuSearch');
      const q = searchEl ? searchEl.value.toLowerCase().trim() : '';
      let visible = 0;

      if (tab === 'bookmarks') {
        // In bookmark tab: show one entry per bookmark (may have same idx in different modes)
        items.forEach(li => { li.style.display = 'none'; });
        const listEl = document.getElementById('menuList');
        
        // Elite: Detect if we have zero search results
        let totalSearchFound = 0;

        // Remove old bm-extra entries
        listEl.querySelectorAll('[data-bm-extra]').forEach(el => el.remove());

        // Header for bookmark tab with Export button
        const hdr = document.createElement('li');
        hdr.dataset.bmExtra = '1';
        hdr.style.cssText = 'padding:12px 16px 8px;display:flex;justify-content:space-between;align-items:center;background:var(--surface);position:sticky;top:0;z-index:10;border-bottom:1px solid var(--border)';
        hdr.innerHTML = `<span style="font-size:11px;font-weight:800;color:var(--muted);text-transform:uppercase;letter-spacing:1px">${bm.length} Saved</span>
          <button class="copy-btn" style="padding:4px 8px;font-size:10px" onclick="exportBookmarks()">
            <svg width="11" height="11" style="vertical-align:-1px;margin-right:4px"><use href="#ic-copy"/></svg>Copy Study List
          </button>`;
        listEl.appendChild(hdr);

        bm.forEach((entry, bmEntryIndex) => {
          const { idx, mode } = entry;
          if (idx == null || !data[idx]) return;
          const title = data[idx][0];
          const score = q ? fuzzyMatch(title, q) : 1;
          if (q && score === 0) return;

          const li = document.createElement('li');
          li.dataset.bmExtra = '1';
          li.dataset.score = score;
          li.style.cssText = 'display:flex;align-items:center;gap:8px;padding:10px 16px;cursor:pointer;position:relative;';

          // Navigate on row click (except remove button)
          li.onclick = (e) => {
            if (e.target.closest('.bm-remove-btn')) return;
            closeMenuUI();
            clearMenuSearch();
            history.replaceState({ screen: 'home' }, '', window.location.pathname + window.location.search);
            
            setTimeout(() => {
              openMode(mode);
              let attempts = 0;
              const tryScroll = () => {
                const el = document.getElementById('s' + idx);
                if (el) {
                  requestAnimationFrame(() => requestAnimationFrame(() => _snapTo(idx)));
                } else if (attempts++ < 15) {
                  setTimeout(tryScroll, 100);
                }
              };
              setTimeout(tryScroll, 80);
            }, 400);
          };

          const modeLabel = mode === 'C' ? 'C' : mode === 'CPP' ? 'C++' : 'C&C++';

          // Remove bookmark button
          const removeBtn = document.createElement('button');
          removeBtn.className = 'bm-remove-btn';
          removeBtn.title = 'Remove bookmark';
          removeBtn.setAttribute('aria-label', 'Remove bookmark');
          removeBtn.innerHTML = '<svg width="14" height="14"><use href="#ic-trash"/></svg>';
          removeBtn.onclick = (e) => {
            e.stopPropagation();
            haptic(15);
            li.style.transition = 'opacity 0.22s ease, transform 0.22s ease, max-height 0.28s ease';
            li.style.overflow = 'hidden';
            li.style.maxHeight = li.offsetHeight + 'px';
            requestAnimationFrame(() => {
              li.style.opacity = '0';
              li.style.transform = 'translateX(24px)';
              li.style.maxHeight = '0';
              li.style.padding = '0 16px';
            });
            setTimeout(() => {
              let bmList = getBookmarks();
              const removeIdx = bmList.findIndex(b => b.idx === idx && b.mode === mode);
              if (removeIdx !== -1) bmList.splice(removeIdx, 1);
              setBookmarks(bmList);
              const btn = document.getElementById('bm-btn-' + idx);
              if (btn) updateBookmarkBtn(btn, isBookmarked(idx, mode));
              const star = document.querySelector('#menuList [data-idx="' + idx + '"] .prog-star');
              if (star) { star.classList.remove('starred'); star.innerHTML = T_ICON('ic-star', 14); }
              switchSheetTab('bookmarks');
            }, 280);
          };

          li.innerHTML = `
            <span class="prog-num" style="flex-shrink:0">${idx + 1}</span>
            <span class="prog-title" style="flex:1;font-size:13px;font-weight:600">${highlightMatch(title, q)}</span>
            <span class="bm-mode-badge">${modeLabel}</span>`;
          li.appendChild(removeBtn);
          listEl.appendChild(li);
          visible++;
        });
      } else {
        // IMPORTANT: remove bm-extra entries FIRST so they don't pollute the query
        document.querySelectorAll('#menuList [data-bm-extra]').forEach(el => el.remove());
        // Now query only the real program items using Elite fuzzy search
        document.querySelectorAll('#menuList li:not([data-bm-extra])').forEach(li => {
          const titleEl = li.querySelector('.prog-title');
          const text = titleEl ? titleEl.dataset.orig || titleEl.textContent : li.textContent;
          if (titleEl && !titleEl.dataset.orig) titleEl.dataset.orig = text; // store original title
          
          const score = q ? fuzzyMatch(text, q) : 1;
          const inSearch = score > 0;
          li.style.display = inSearch ? '' : 'none';
          if (inSearch) {
            if (titleEl) titleEl.innerHTML = highlightMatch(text, q);
            visible++;
          }
        });
      }

      const noRes = document.getElementById('menuNoResults');
      if (noRes) {
        const isEmptyBookmarks = (visible === 0 && tab === 'bookmarks' && !q);
        noRes.style.display = visible === 0 ? 'flex' : 'none';
        if (isEmptyBookmarks) {
          noRes.innerHTML = `
            <div style="text-align:center;opacity:0.8">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom:16px;display:block;margin-left:auto;margin-right:auto">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
              <div style="font-weight:600;font-size:15px;color:var(--text);margin-bottom:4px">No bookmarks yet</div>
              <div style="font-size:13px;color:var(--muted)">Tap the ★ star on any program to save it here for quick access.</div>
            </div>`;
        } else if (visible === 0) {
          noRes.innerHTML = `<div style="color:var(--muted)">No programs found</div>`;
        }
      }
    };

    // ================================================
    // INIT LAST VIEWED CHIP & PRELOADS
    // ================================================
    document.addEventListener('DOMContentLoaded', () => { 
      updateLastViewedChip(); 
      updateHomeBmChip();
      // Hide first-time hint if user has visited before
      if (safeGet('duet-visited')) {
        const firstHint = document.getElementById('home-first-hint');
        if (firstHint) firstHint.classList.add('hidden');
      }
      // Elite: Proactively start loading highlight.js while user is on Home page
      // so it's ready before they even tap a mode.
      setTimeout(() => { if (typeof _loadHljs === 'function') _loadHljs('C', () => {}); }, 1500);
    });

    // ================================================
    // KEYBOARD: Global Shortcuts & Accessibility
    // ================================================
    document.addEventListener('keydown', e => {
      // 1. Accessibility: Enter or Space key on focused mode-cards
      if (e.key === 'Enter' || e.key === ' ') {
        const active = document.activeElement;
        if (active && active.classList.contains('mode-card')) {
          if (e.key === ' ') e.preventDefault(); // prevent scroll
          active.click();
        }
      }

      // 2. B = toggle bookmark on current visible program
      if (e.key === 'b' || e.key === 'B') {
        const app = document.getElementById('app');
        if (!app.classList.contains('show')) return;
        const snaps = document.querySelectorAll('.snap');
        let visible = null;
        snaps.forEach(s => {
          const r = s.getBoundingClientRect();
          if (r.top >= -10 && r.top < window.innerHeight / 2) visible = s;
        });
        if (visible) {
          const idx = parseInt(visible.id.replace('s', ''));
          if (!isNaN(idx)) toggleBookmark(idx);
        }
      }
    });

    // Patch initProgressBar into showAppUI — run after app shows
    const _appEl = document.getElementById('app');
    if (_appEl) initProgressBar(_appEl);
    const _bar = document.getElementById('progress-bar');
    // Show/hide bar when app is shown
    if (_appEl && _bar) {
      new MutationObserver(() => {
        _bar.classList.toggle('visible', _appEl.classList.contains('show'));
      }).observe(_appEl, { attributes: true, attributeFilter: ['class'] });
    }

    // OVERRIDE buildPrograms to inject line numbers,
    // bookmark buttons, last-viewed tracking, swipe hint
    // ================================================
    const _origBuildPrograms = buildPrograms;
    buildPrograms = function (mode) {
      _origBuildPrograms(mode);

      // ── Defer ALL post-build DOM work into rAF so first paint is never blocked ──
      requestAnimationFrame(() => {
        // Restore swipe hint
        showSwipeHintOnce();

        // Track last viewed — set up once after DOM is stable
        const appEl = document.getElementById('app');
        let lvTimer = null;
        const trackLV = () => {
          clearTimeout(lvTimer);
          lvTimer = setTimeout(() => {
            const snapEls = document.querySelectorAll('.snap');
            let best = null, bestTop = Infinity;
            snapEls.forEach((s, i) => {
              const top = Math.abs(s.getBoundingClientRect().top);
              if (top < bestTop) { bestTop = top; best = i; }
            });
            if (best !== null) saveLastViewed(mode, best);
          }, 400);
        };
        // Use .onscroll to replace the previous listener (avoids leaks)
        appEl.onscroll = trackLV;

        // Show swipe hint on first visit
        showSwipeHintOnce();
      });
    };

    function setVH() {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    setVH();
    window.addEventListener('resize', setVH, { passive: true });

    // FAB init handled by toggleFabs IIFE above

    // ================================================
    // KEYBOARD NAVIGATION 
    // ================================================
    document.addEventListener('keydown', e => {
      const app = document.getElementById('app');
      if (!app.classList.contains('show')) return;
      if (e.key === 'Escape') {
        document.getElementById('sheet').classList.contains('show') ? closeMenu() : goHome();
      }
      if (e.key === 'ArrowDown' || e.key === 'PageDown') { e.preventDefault(); app.scrollBy({ top: window.innerHeight, behavior: 'smooth' }); }
      if (e.key === 'ArrowUp' || e.key === 'PageUp') { e.preventDefault(); app.scrollBy({ top: -window.innerHeight, behavior: 'smooth' }); }
      if (e.key === 'Home') { e.preventDefault(); app.scrollTo({ top: 0, behavior: 'smooth' }); }
      if (e.key === 'End') { e.preventDefault(); app.scrollTo({ top: app.scrollHeight, behavior: 'smooth' }); }
    });

    // ================================================
    // SEARCH IN JUMP MENU
    // ================================================
    (function initMenuSearch() {
      function setup() {
        const menuSearchEl = document.getElementById('menuSearch');
        if (!menuSearchEl) return;
        // Delegate to switchSheetTab — it already reads the search value internally
        // and handles both tab filter + text search together, preventing conflicts.
        const debouncedMenuSearch = debounce(function () {
          switchSheetTab(_sheetTab);
        }, 60);

        menuSearchEl.addEventListener('input', function () {
          debouncedMenuSearch();
        });
      }
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setup);
      } else {
        setup();
      }
    })();

    // Clear search when sheet closes
    function clearMenuSearch() {
      const s = document.getElementById('menuSearch');
      if (s) { s.value = ''; s.dispatchEvent(new Event('input')); }
    }


    // ── A11y: Ensure mode cards are keyboard accessible ──
    document.querySelectorAll('.mode-card').forEach(card => {
      if (!card.getAttribute('role')) card.setAttribute('role', 'button');
      if (!card.getAttribute('tabindex')) card.setAttribute('tabindex', '0');
      card.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); card.click(); }
      });
    });

    // ── A11y: Announce page transitions to screen readers ──
    function announcePageChange(msg) {
      const live = document.getElementById('sr-live');
      if (live) { live.textContent = ''; setTimeout(() => { live.textContent = msg; }, 50); }
    }
    window._announcePageChange = announcePageChange;

    // ================================================
    // PULL-TO-RELOAD — native app feel
    // ================================================
    (function () {
      const home = document.getElementById('home');
      const wrap = document.getElementById('ptr-wrap');
      const spinner = document.getElementById('ptr-spinner');

      const THRESHOLD = 72;   // px to pull before releasing triggers reload
      const MAX_PULL = 100;  // max visual travel in px
      let startY = 0, pulling = false, delta = 0, triggered = false;

      home.addEventListener('touchstart', e => {
        if (home.scrollTop > 2) return;  // only trigger at top
        startY = e.touches[0].clientY;
        pulling = true;
        triggered = false;
      }, { passive: true });

      home.addEventListener('touchmove', e => {
        if (!pulling) return;
        const raw = e.touches[0].clientY - startY;
        if (raw <= 0) { pulling = false; return; }

        // Resistance curve — feels like native rubber-band
        delta = Math.min(Math.pow(raw, 0.75) * 2.2, MAX_PULL);
        const progress = Math.min(delta / THRESHOLD, 1);

        // Move the spinner down proportionally
        spinner.style.transform = `translateY(${delta - 60}px) scale(${0.6 + 0.4 * progress})`;
        spinner.style.opacity = String(Math.min(progress * 1.5, 1));
        spinner.classList.toggle('visible', progress > 0.1);
        
        const isReleasing = progress >= 1;
        const wasReleasing = spinner.classList.contains('releasing');
        spinner.classList.toggle('releasing', isReleasing);
        
        // Elite: Tactile click when reaching threshold
        if (isReleasing && !wasReleasing) haptic(20);
      }, { passive: true });

      home.addEventListener('touchend', () => {
        if (!pulling) return;
        pulling = false;

        if (delta >= THRESHOLD && !triggered) {
          triggered = true;
          haptic(40); // Confirmative buzz
          spinner.classList.add('loading');
          spinner.style.transform = 'translateY(0) scale(1)';
          spinner.style.opacity = '1';
          // Short pause so user sees the spinner before reload
          setTimeout(() => window.location.reload(), 400);
        } else {
          // Snap back
          spinner.style.transition = 'opacity 0.25s ease, transform 0.3s cubic-bezier(0.34,1.56,0.64,1)';
          spinner.classList.remove('visible', 'releasing');
          spinner.style.transform = 'translateY(-60px) scale(0.6)';
          spinner.style.opacity = '0';
          setTimeout(() => { spinner.style.transition = ''; }, 350);
        }
        delta = 0;
      });

      // Fix: handle touch cancel (phone calls, system interrupts) to avoid stuck state
      home.addEventListener('touchcancel', () => {
        if (!pulling) return;
        pulling = false;
        delta = 0;
        spinner.style.transition = '';
        spinner.classList.remove('visible', 'releasing', 'loading');
        spinner.style.transform = 'translateY(-60px) scale(0.6)';
        spinner.style.opacity = '0';
      });
    })();

    // ================================================
    // LOADING SCREEN LOGIC
    // ================================================
    document.addEventListener('DOMContentLoaded', () => {
      try { updateHomeBmChip(); } catch (e) { }
      try { updateLastViewedChip(); } catch (e) { }

      // ── Scramble loader animation ──
      const textEl = document.getElementById('loaderScrambleText');
      const barEl = document.getElementById('loaderProgress');
      const wrapEl = document.getElementById('loaderLabelWrap');
      const loader = document.getElementById('startup-loader');

      // Skip loader on repeat visits — only show on first visit
      const LOADER_KEY = 'duet-seen';
      if (safeGet(LOADER_KEY)) {
        if (loader) { loader.classList.add('hide'); setTimeout(() => { try { loader.remove(); } catch(e){} }, 0); }
        return;
      }
      try { localStorage.setItem(LOADER_KEY, '1'); } catch(e) {}
      const TARGET = 'Initializing DUET Code...';
      const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&!';
      const TOTAL = 1100; // total ms
      const STEPS = 55;
      const DELAY = TOTAL / STEPS;
      let step = 0;

      // Sync bar width to text width
      function syncWidth() {
        if (wrapEl && textEl) wrapEl.style.width = Math.max(textEl.offsetWidth, 90) + 'px';
      }
      syncWidth();

      function scramble(progress) {
        const revealed = Math.floor(progress * TARGET.length);
        let out = '';
        for (let i = 0; i < TARGET.length; i++) {
          if (i < revealed) {
            out += TARGET[i];
          } else {
            out += TARGET[i] === ' ' ? ' ' : CHARS[Math.floor(Math.random() * CHARS.length)];
          }
        }
        return out;
      }

      function tick() {
        step++;
        const raw = Math.min(step / STEPS, 1);
        // Cubic ease-in-out
        const eased = raw < 0.5 ? 4 * raw * raw * raw : 1 - Math.pow(-2 * raw + 2, 3) / 2;
        if (textEl) textEl.textContent = scramble(eased);
        if (barEl) barEl.style.width = (eased * 100) + '%';
        if (step < STEPS) {
          setTimeout(tick, DELAY);
        } else {
          if (textEl) textEl.textContent = TARGET;
          if (barEl) barEl.style.width = '100%';
          setTimeout(() => {
            if (loader) {
              loader.classList.add('hide');
              setTimeout(() => { try { loader.remove(); } catch (e) { } }, 600);
            }
          }, 260);
        }
      }

      if (textEl) textEl.textContent = scramble(0); // start scrambled
      setTimeout(tick, 50);
    });

    // ============================================================
    // FOCUS TRAP for bottom sheet (accessibility)
    // ============================================================
    // Add .is-desktop class to body for cleaner CSS targeting
    (function () {
      function setDesktop() {
        document.body.classList.toggle('is-desktop', window.innerWidth >= 900);
      }
      setDesktop();
      window.addEventListener('resize', setDesktop, { passive: true });
    })();

    // Restore state on reload (Elite: Mode + Scroll Position)
    (function () {
      const savedMode = safeGet('duet-state');
      if (savedMode) {
        // Slight delay ensures DOM and lazy-loaders are ready
        setTimeout(() => {
          if (typeof resumeLastViewed === 'function') {
            resumeLastViewed();
          } else {
            openMode(savedMode);
          }
        }, 50);
      }
    })();
