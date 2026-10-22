/**
 * AUTOTEX DYE TUBES & CONES — INTERACTIVE 3D COLOUR STUDIO
 * Official Configurator Engine for Autotex Textile Machinery Components
 * Copyright © 2026 Autotex. All Rights Reserved.
 */

(function () {
  'use strict';

  // =========================================================================
  // 1. PRODUCT DEFINITIONS (From Official Autotex PDF)
  // =========================================================================
  const PRODUCTS = {
    'd-spring': {
      id: 'd-spring',
      name: 'D-SPRING',
      type: 'Compressible Dye Tube',
      categoryBadge: 'Compressible',
      baseImage: 'Image/d-spring-wt.png',
      polymer: 'Virgin Polypropylene / PA66 (HT)',
      topDia: '54 mm',
      length: '170 mm',
      bottomDia: '60 mm',
      perforation: '48% Open Lattice',
      compression: 'Up to 25% Axial',
      temp: '135°C (HT Certified)',
      description: 'Axially compressible lattice structure accommodates high yarn shrinkage under boiling dye liquor. Eliminates density gradients.'
    },
    'd-stiff': {
      id: 'd-stiff',
      name: 'D-STIFF',
      type: 'Rigid Dye Tube',
      categoryBadge: 'Rigid',
      baseImage: 'Image/d-stiff-wt.png',
      polymer: 'Heavy-Duty Copolymer PP',
      topDia: '54 mm',
      length: '170 mm',
      bottomDia: '60 mm',
      perforation: '42% Diamond Matrix',
      compression: '0% (Non-Compressible)',
      temp: '135°C (HT Certified)',
      description: 'High-rigidity engineered barrel resistant to centrifugal pressure and aggressive yarn collapse forces in dense packages.'
    },
    'd-stack': {
      id: 'd-stack',
      name: 'D-STACK',
      type: 'Stackable Dye Tube',
      categoryBadge: 'Stackable',
      baseImage: 'Image/d-stack-wt.png',
      polymer: 'Engineering Grade PP Copolymer',
      topDia: '52 mm',
      length: '170 mm',
      bottomDia: '58 mm',
      perforation: '44% Staggered Ribbed Grid',
      compression: 'Interlocking Spindle Stack',
      temp: '130°C (HT Certified)',
      description: 'Self-centering interlocking ends allow seamless column stacking on dye vessel spindles without separate intermediate separator plates.'
    },
    'd-cone': {
      id: 'd-cone',
      name: 'D-CONE',
      type: 'Perforated Dye Cone',
      categoryBadge: 'Perforated',
      baseImage: 'Image/d-cone-wt.png',
      polymer: 'Prime Virgin Polypropylene',
      topDia: '38 mm (Tapered)',
      length: '175 mm (Conical)',
      bottomDia: '68 mm',
      perforation: '46% Precision Radial Matrix',
      compression: '0% (Conical Geometry)',
      temp: '135°C (HT Certified)',
      description: 'Precision taper conical dye package with balanced radial perforations for uniform inside-to-outside flow and trouble-free unwinding.'
    },
    's-cone': {
      id: 's-cone',
      name: 'S-CONE',
      type: 'Sale Yarn Velvet Cone',
      categoryBadge: 'Sale Yarn',
      baseImage: 'Image/s-cone-wt.png',
      polymer: 'High-Impact Virgin PP / PS',
      topDia: '36 mm',
      length: '175 mm',
      bottomDia: '68 mm',
      perforation: '0% (Solid Velvet Surface)',
      compression: '0% (Rigid Conical)',
      temp: '95°C (Ambient Winding)',
      description: 'Solid engineered cone with micro-embossed velvet grip surface designed for high-speed automatic winding and smooth yarn take-off.'
    }
  };

  // =========================================================================
  // 2. MASTERBATCH COLOUR LIBRARY (Official Autotex Supply Shades from PDF)
  // =========================================================================
  const PALETTE = [
    // Row 1
    { code: 'R3020', name: 'Traffic Red', hex: '#E3000F', ral: 'RAL 3020', isRal: true, family: 'RAL Standard', fullLabel: 'R3020 | Traffic Red' },
    { code: 'R3015', name: 'Light Pink', hex: '#EDAFB5', ral: 'RAL 3015', isRal: true, family: 'RAL Standard', fullLabel: 'R3015 | Light Pink' },
    { code: 'P1777', name: 'Baby Pink', hex: '#EA506C', ral: 'Pantone 1777', isRal: false, family: 'Custom Formulation', fullLabel: 'P1777 | Baby Pink' },
    { code: 'R5002', name: 'Marine Blue', hex: '#232F81', ral: 'RAL 5002', isRal: true, family: 'RAL Standard', fullLabel: 'R5002 | Marine Blue' },

    // Row 2
    { code: 'R1016', name: 'Sulfur Yellow', hex: '#FBEC43', ral: 'RAL 1016', isRal: true, family: 'RAL Standard', fullLabel: 'R1016 | Sulfur Yellow' },
    { code: 'R1000', name: 'Green Beige', hex: '#E4D3A0', ral: 'RAL 1000', isRal: true, family: 'RAL Standard', fullLabel: 'R1000 | Green Beige' },
    { code: 'R4008', name: 'Signal Violet', hex: '#913387', ral: 'RAL 4008', isRal: true, family: 'RAL Standard', fullLabel: 'R4008 | Signal Violet' },
    { code: 'P0226', name: 'Majestic Magenta', hex: '#CE0071', ral: 'Pantone 226', isRal: false, family: 'Custom Formulation', fullLabel: 'P0226 | Majestic Magenta' },

    // Row 3
    { code: 'P0172', name: 'Red Orange', hex: '#E94D09', ral: 'Pantone 172', isRal: false, family: 'Custom Formulation', fullLabel: 'P0172 | Red Orange' },
    { code: 'P0333', name: 'Mint Green', hex: '#5EBAAA', ral: 'Pantone 333', isRal: false, family: 'Custom Formulation', fullLabel: 'P0333 | Mint Green' },
    { code: 'R3016', name: 'Coral Red', hex: '#B12A17', ral: 'RAL 3016', isRal: true, family: 'RAL Standard', fullLabel: 'R3016 | Coral Red' },
    { code: 'R9005', name: 'Jet Black', hex: '#3B3B3A', ral: 'RAL 9005', isRal: true, family: 'RAL Standard', fullLabel: 'R9005 | Jet Black' },

    // Row 4
    { code: 'P0375', name: 'Pista Green', hex: '#95C11B', ral: 'Pantone 375', isRal: false, family: 'Custom Formulation', fullLabel: 'P0375 | Pista Green' },
    { code: 'P2562', name: 'Plum Lavender', hex: '#C69DC9', ral: 'Pantone 2562', isRal: false, family: 'Custom Formulation', fullLabel: 'P2562 | Plum Lavender' },
    { code: 'R7005', name: 'Mouse Grey', hex: '#7D8680', ral: 'RAL 7005', isRal: true, family: 'RAL Standard', fullLabel: 'R7005 | Mouse Grey' },
    { code: 'R8012', name: 'Red Brown', hex: '#66220A', ral: 'RAL 8012', isRal: true, family: 'RAL Standard', fullLabel: 'R8012 | Red Brown' },

    // Row 5
    { code: 'P2975', name: 'Sky Blue', hex: '#A3D2E3', ral: 'Pantone 2975', isRal: false, family: 'Custom Formulation', fullLabel: 'P2975 | Sky Blue' },
    { code: 'P7515', name: 'Copper Brown', hex: '#BF8471', ral: 'Pantone 7515', isRal: false, family: 'Custom Formulation', fullLabel: 'P7515 | Copper Brown' },
    { code: 'R1015', name: 'Light Ivory', hex: '#F5E7D2', ral: 'RAL 1015', isRal: true, family: 'RAL Standard', fullLabel: 'R1015 | Light Ivory' },
    { code: 'R6001', name: 'Emerald Green', hex: '#387D33', ral: 'RAL 6001', isRal: true, family: 'RAL Standard', fullLabel: 'R6001 | Emerald Green' }
  ];

  // Application State
  let currentModelKey = 'd-spring';
  let primaryColorIndex = 0; // Autotex Red
  let compareColorIndex = 1; // Industrial Yellow
  let isComparing = false;
  let currentBackdrop = 'light'; // 'light', 'dark', 'black'
  let isDarkBackdrop = false;
  let userHasManualBackdrop = false;
  let activeFamilyFilter = 'All';
  let searchQuery = '';
  let customHexColor = null; // When user uses bespoke color picker
  let lastLoadedModelKey = null; // Tracks active 3D mesh model

  // DOM Elements Cache
  const el = {
    // Model Selectors
    prodTabs: document.querySelectorAll('.prod-tab'),
    // Single Viewport Elements
    stageViewport: document.getElementById('stage-viewport'),
    threeCanvas: document.getElementById('threejs-canvas'),
    stageSingle: document.getElementById('stage-single'),
    stageCompare: document.getElementById('stage-compare'),
    mainRenderStage: document.getElementById('main-render-stage'),
    stageShadow: document.getElementById('stage-shadow'),
    productGlare: document.getElementById('product-glare'),
    productDisplayImg: document.getElementById('product-display-img'),
    productCustomCanvas: document.getElementById('product-custom-canvas'),
    turntableFloorRing: document.querySelector('.turntable-floor-ring'),
    dragHint: document.getElementById('drag-hint'),
    orbitDegVal: document.getElementById('orbit-deg-val'),
    turntableSlider: document.getElementById('turntable-slider'),
    anglePresetBtns: document.querySelectorAll('.angle-preset-btn'),
    btnAutoSpin: document.getElementById('btn-auto-spin'),
    btnZoomIn: document.getElementById('btn-zoom-in'),
    btnZoomOut: document.getElementById('btn-zoom-out'),
    btnResetView: document.getElementById('btn-reset-view'),
    zoomBadge: document.getElementById('zoom-badge'),
    btnFocusTop: document.getElementById('btn-focus-top'),
    btnFocusMid: document.getElementById('btn-focus-mid'),
    btnFocusBase: document.getElementById('btn-focus-base'),
    btnCutawayView: document.getElementById('btn-cutaway-view'),
    activeModelCat: document.getElementById('active-model-category'),
    activeModelTitle: document.getElementById('active-model-title'),
    activePolymerTag: document.getElementById('active-polymer-tag'),
    // HUD Overlays
    hudTopDia: document.getElementById('hud-top-dia'),
    hudLength: document.getElementById('hud-length'),
    hudBottomDia: document.getElementById('hud-bottom-dia'),
    hudColorDot: document.getElementById('hud-color-dot'),
    hudColorName: document.getElementById('hud-color-name'),
    hudColorHex: document.getElementById('hud-color-hex'),
    hudPerforation: document.getElementById('hud-perforation'),
    hudCompression: document.getElementById('hud-compression'),
    hudTemp: document.getElementById('hud-temp'),
    // Compare Viewport Elements
    compareDisplayA: document.getElementById('compare-display-a'),
    compareNameA: document.getElementById('compare-name-a'),
    compareCodeA: document.getElementById('compare-code-a'),
    compareDisplayB: document.getElementById('compare-display-b'),
    compareNameB: document.getElementById('compare-name-b'),
    compareCodeB: document.getElementById('compare-code-b'),
    // Studio Controls
    btnToggleCompare: document.getElementById('btn-toggle-compare'),
    compareBtnText: document.getElementById('compare-btn-text'),
    btnToggleBackdrop: document.getElementById('btn-toggle-backdrop'),
    backdropBtnText: document.getElementById('backdrop-btn-text'),
    stageActionIcon: document.getElementById('backdrop-action-icon'),
    btnStageDarkToggle: document.getElementById('btn-stage-dark-toggle'),
    stageToggleIcon: document.getElementById('stage-toggle-icon'),
    stageToggleLabel: document.getElementById('stage-toggle-label'),
    stageChipBtns: document.querySelectorAll('.stage-chip-btn'),
    // Palette & Swatches
    colorSearch: document.getElementById('color-search'),
    clearSearchBtn: document.getElementById('clear-search-btn'),
    filterPills: document.querySelectorAll('.filter-pill'),
    swatchesGrid: document.getElementById('swatches-grid'),
    paletteCountBadge: document.getElementById('palette-count-badge'),
    // Custom Color Controls
    customColorPicker: document.getElementById('custom-color-picker'),
    pickerPreviewBubble: document.getElementById('picker-preview-bubble'),
    customHexInput: document.getElementById('custom-hex-input'),
    applyCustomHexBtn: document.getElementById('apply-custom-hex-btn'),
    // Summary Card
    summaryColorChip: document.getElementById('summary-color-chip'),
    summaryTitle: document.getElementById('summary-title'),
    summarySubtitle: document.getElementById('summary-subtitle'),
    summaryRalBadgeText: document.getElementById('summary-ral-badge-text'),
    summaryPdfLabel: document.getElementById('summary-pdf-label'),
    btnDownloadSpec: document.getElementById('btn-download-spec'),
    btnInquireSelection: document.getElementById('btn-inquire-selection'),
    // Fullscreen Play Controls
    btnFullscreenToggle: document.getElementById('btn-fullscreen-toggle'),
    fsIcon: document.getElementById('fs-icon'),
    fsLabel: document.getElementById('fs-label'),
    fsExitBtn: document.getElementById('fs-exit-btn'),
    fsShadeBadge: document.getElementById('fs-shade-badge'),
    fsColorDot: document.getElementById('fs-color-dot'),
    fsColorName: document.getElementById('fs-color-name'),
    fsColorCode: document.getElementById('fs-color-code'),
    fsColorRal: document.getElementById('fs-color-ral'),
    // Modal Elements
    sampleModal: document.getElementById('sample-modal'),
    openSampleModalBtn: document.getElementById('open-sample-modal-btn'),
    modalCloseBtn: document.getElementById('modal-close-btn'),
    modalCancelBtn: document.getElementById('modal-cancel-btn'),
    modalSwatchBox: document.getElementById('modal-swatch-box'),
    modalProdName: document.getElementById('modal-prod-name'),
    modalColorName: document.getElementById('modal-color-name'),
    sampleForm: document.getElementById('sample-request-form'),
    // Toast Notification
    toast: document.getElementById('toast'),
    // Mobile Drawer
    mobileToggle: document.getElementById('mobile-toggle'),
    mobileDrawer: document.getElementById('mobile-drawer')
  };

  // Cached base images for custom canvas tinting
  const baseImgCache = {};

  function preloadBaseImages() {
    Object.values(PRODUCTS).forEach(p => {
      const img = new Image();
      img.src = p.baseImage;
      baseImgCache[p.id] = img;
    });
  }
  preloadBaseImages();

  // =========================================================================
  // 3. CORE UPDATE FUNCTIONS
  // =========================================================================

  /**
   * Calculates perceptual brightness/luminance of a hex color (HSP/BT.709 formula)
   */
  function isColorLight(hex) {
    if (!hex) return false;
    const clean = hex.replace('#', '');
    if (clean.length < 6) return false;
    const r = parseInt(clean.substring(0, 2), 16) || 0;
    const g = parseInt(clean.substring(2, 4), 16) || 0;
    const b = parseInt(clean.substring(4, 6), 16) || 0;
    const lum = 0.299 * r + 0.587 * g + 0.114 * b;
    return lum > 175; // Yellows, creams, whites, pale pastels
  }

  /**
   * Sets the 360 stage backdrop mode: 'light', 'dark', or 'black'
   */
  function setBackdrop(mode, isAuto = false) {
    currentBackdrop = mode;
    if (el.stageViewport) {
      el.stageViewport.classList.remove('backdrop-dark', 'backdrop-black');
      if (mode === 'dark') {
        el.stageViewport.classList.add('backdrop-dark');
      } else if (mode === 'black') {
        el.stageViewport.classList.add('backdrop-black');
      }
    }

    const isDark = (mode !== 'light');
    isDarkBackdrop = isDark;

    if (el.btnStageDarkToggle) {
      el.btnStageDarkToggle.setAttribute('aria-pressed', isDark ? 'true' : 'false');
      if (el.stageToggleIcon) el.stageToggleIcon.textContent = isDark ? '☀️' : '🌙';
      if (el.stageToggleLabel) el.stageToggleLabel.textContent = isDark ? 'Light Stage' : 'Dark Stage';
    }

    if (el.btnToggleBackdrop) {
      el.btnToggleBackdrop.setAttribute('aria-pressed', isDark ? 'true' : 'false');
      el.btnToggleBackdrop.classList.toggle('active', isDark);
      if (el.stageActionIcon) {
        el.stageActionIcon.textContent = isDark ? '☀️' : '🌙';
      }
      if (el.backdropBtnText) {
        el.backdropBtnText.textContent = isDark ? 'Light Studio Stage' : 'Dark Mill Stage';
      }
    }

    if (el.stageChipBtns) {
      el.stageChipBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.stage === mode);
      });
    }

    if (!isAuto) {
      const label = mode === 'light' ? 'Clean Studio Light' : (mode === 'black' ? 'Deep Jet Black' : 'Dark Contrast Stage');
      showToast(`${label} active`);
    }
  }

  /**
   * Updates the stage, renders, text, dimensions, and active color
   */
  function updateStudio() {
    const prod = PRODUCTS[currentModelKey];
    const primaryColor = customHexColor 
      ? { name: 'Bespoke Mill Shade', hex: customHexColor, code: 'AT-CUSTOM', family: 'Custom' }
      : PALETTE[primaryColorIndex];
    const compareColor = PALETTE[compareColorIndex];

    // 0. Auto-Contrast: Automatically activate Dark Stage if shade is pale/light (white, yellow, etc.)
    if (isColorLight(primaryColor.hex)) {
      if (currentBackdrop === 'light') {
        setBackdrop('dark', true);
        showToast(`Dark stage automatically active for high contrast with ${primaryColor.name}`);
      }
    } else {
      if (!userHasManualBackdrop && currentBackdrop !== 'light') {
        setBackdrop('light', true);
      }
    }

    // 1. Update CSS Variables
    document.documentElement.style.setProperty('--active-color', primaryColor.hex);

    // 2. Update 3D WebGL Model & Material Color
    if (isThreeInitialized) {
      if (lastLoadedModelKey !== currentModelKey) {
        update3DProduct(currentModelKey, primaryColor.hex);
        lastLoadedModelKey = currentModelKey;
      } else {
        update3DColor(primaryColor.hex);
      }
    }

    // 2b. Update Fallback Image / Custom Canvas
    if (customHexColor) {
      renderCustomColorCanvas(prod, customHexColor);
    } else {
      el.productCustomCanvas.style.display = 'none';
      const tintPath = `Image/tints/${prod.id}_${primaryColor.code}.png`;
      el.productDisplayImg.src = tintPath;
      el.productDisplayImg.alt = `${prod.name} in ${primaryColor.name}`;
    }

    // 3. Update Breadcrumbs & Polymer Badge
    el.activeModelTitle.textContent = `${prod.name} · ${prod.categoryBadge.toUpperCase()}`;
    el.activePolymerTag.textContent = prod.polymer.toUpperCase();

    // 4. Update HUD Overlays
    el.hudTopDia.textContent = prod.topDia;
    el.hudLength.textContent = prod.length;
    el.hudBottomDia.textContent = prod.bottomDia;

    el.hudColorDot.style.backgroundColor = primaryColor.hex;
    el.hudColorName.textContent = primaryColor.name;
    el.hudColorHex.textContent = primaryColor.isRal ? `${primaryColor.code} (${primaryColor.ral})` : `${primaryColor.code}`;
    el.hudPerforation.textContent = prod.perforation;
    el.hudCompression.textContent = prod.compression;
    el.hudTemp.textContent = prod.temp;

    // 5. Update Selection Summary Card (Showing Name, RAL Code & Code as per PDF)
    el.summaryColorChip.style.backgroundColor = primaryColor.hex;
    el.summaryTitle.textContent = `${primaryColor.name} · ${primaryColor.code}`;
    if (el.summaryRalBadgeText) {
      el.summaryRalBadgeText.textContent = primaryColor.isRal ? primaryColor.ral : `${primaryColor.code} (Pantone)`;
    }
    if (el.summaryPdfLabel) {
      el.summaryPdfLabel.textContent = primaryColor.fullLabel || `${primaryColor.code} | ${primaryColor.name}`;
    }

    // Fullscreen Overlay Badge
    if (el.fsColorDot) el.fsColorDot.style.backgroundColor = primaryColor.hex;
    if (el.fsColorName) el.fsColorName.textContent = primaryColor.name;
    if (el.fsColorCode) el.fsColorCode.textContent = primaryColor.code;
    if (el.fsColorRal) {
      el.fsColorRal.textContent = primaryColor.isRal ? primaryColor.ral : `${primaryColor.code}`;
    }

    // 6. Update Comparison Mode Stages if active
    if (isComparing) {
      el.compareDisplayA.src = `Image/tints/${prod.id}_${primaryColor.code}.png`;
      el.compareNameA.textContent = primaryColor.name;
      el.compareCodeA.textContent = `${primaryColor.code} · ${primaryColor.hex}`;

      el.compareDisplayB.src = `Image/tints/${prod.id}_${compareColor.code}.png`;
      el.compareNameB.textContent = compareColor.name;
      el.compareCodeB.textContent = `${compareColor.code} · ${compareColor.hex}`;
    }

    // 7. Sync Custom Color Input Values (if present)
    if (el.pickerPreviewBubble) el.pickerPreviewBubble.style.backgroundColor = primaryColor.hex;
    if (el.customColorPicker) el.customColorPicker.value = primaryColor.hex.startsWith('#') && primaryColor.hex.length === 7 ? primaryColor.hex : '#ED1C24';
    if (el.customHexInput) el.customHexInput.value = primaryColor.hex.replace('#', '').toUpperCase();

    // 8. Update Swatches Selection Highlights
    renderSwatches();
  }

  /**
   * Renders bespoke custom color to on-screen canvas using multiply blend
   */
  function renderCustomColorCanvas(prod, hexColor) {
    el.productDisplayImg.style.display = 'none';
    el.productCustomCanvas.style.display = 'block';

    const canvas = el.productCustomCanvas;
    let baseImg = baseImgCache[prod.id];
    if (!baseImg || !baseImg.complete) {
      baseImg = new Image();
      baseImg.src = prod.baseImage;
      baseImg.onload = () => drawTintToCanvas(canvas, baseImg, hexColor);
    } else {
      drawTintToCanvas(canvas, baseImg, hexColor);
    }
  }

  function drawTintToCanvas(canvas, baseImg, hexColor) {
    canvas.width = baseImg.naturalWidth || 200;
    canvas.height = baseImg.naturalHeight || 400;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 1. Draw solid color
    ctx.fillStyle = hexColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 2. Multiply with base white shaded image
    ctx.globalCompositeOperation = 'multiply';
    ctx.drawImage(baseImg, 0, 0, canvas.width, canvas.height);

    // 3. Mask to base image alpha
    ctx.globalCompositeOperation = 'destination-in';
    ctx.drawImage(baseImg, 0, 0, canvas.width, canvas.height);

    // 4. Subtle specular highlight
    ctx.globalCompositeOperation = 'screen';
    ctx.globalAlpha = 0.22;
    ctx.drawImage(baseImg, 0, 0, canvas.width, canvas.height);
    ctx.globalAlpha = 1.0;
    ctx.globalCompositeOperation = 'source-over';
  }

  /**
   * Renders the swatch buttons for all 20 official supply shades in a single view
   */
  function renderSwatches() {
    if (el.paletteCountBadge) {
      el.paletteCountBadge.textContent = `${PALETTE.length} SHADES`;
    }
    if (!el.swatchesGrid) return;
    el.swatchesGrid.innerHTML = '';

    PALETTE.forEach((item, index) => {
      const isSelected = !customHexColor && (isComparing ? index === compareColorIndex : index === primaryColorIndex);

      const btn = document.createElement('button');
      btn.className = `swatch-btn ${isSelected ? 'selected' : ''}`;
      btn.setAttribute('role', 'radio');
      btn.setAttribute('aria-checked', isSelected ? 'true' : 'false');
      btn.setAttribute('title', `${item.fullLabel} (${item.ral}) - ${item.hex}`);

      const ralTag = item.isRal 
        ? `<span class="swatch-ral">${item.ral}</span>` 
        : `<span class="swatch-ral" style="color:#6366F1;background:rgba(99,102,241,0.08);">${item.code}</span>`;

      btn.innerHTML = `
        <span class="swatch-circle" style="background-color: ${item.hex};">
          ${isSelected ? '✓' : ''}
        </span>
        <span class="swatch-label">${item.name}</span>
        <span class="swatch-code">${item.code}</span>
        ${ralTag}
      `;

      btn.onclick = () => {
        customHexColor = null; // Clear custom color override
        if (isComparing) {
          compareColorIndex = index;
          showToast(`Candidate B: ${item.fullLabel} (${item.ral})`);
        } else {
          primaryColorIndex = index;
          showToast(`Applied: ${item.fullLabel} (${item.ral})`);
        }
        updateStudio();
      };

      el.swatchesGrid.appendChild(btn);
    });
  }

  // =========================================================================
  // 4. EVENT HANDLERS & INTERACTIONS
  // =========================================================================

  // Tab switching for 5 core products
  el.prodTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const modelKey = tab.dataset.model;
      if (PRODUCTS[modelKey]) {
        currentModelKey = modelKey;
        el.prodTabs.forEach(t => {
          const isActive = t === tab;
          t.classList.toggle('active', isActive);
          t.setAttribute('aria-selected', isActive ? 'true' : 'false');
        });
        const activeColor = customHexColor || PALETTE[primaryColorIndex].hex;
        if (isThreeInitialized) {
          update3DProduct(currentModelKey, activeColor);
        }
        updateStudio();
        showToast(`Switched to ${PRODUCTS[modelKey].name}`);
      }
    });
  });

  // Global helper to switch product from outside cards
  window.selectStudioProduct = function (modelKey) {
    if (PRODUCTS[modelKey]) {
      currentModelKey = modelKey;
      el.prodTabs.forEach(t => {
        const isActive = t.dataset.model === modelKey;
        t.classList.toggle('active', isActive);
        t.setAttribute('aria-selected', isActive ? 'true' : 'false');
      });
      updateStudio();
      
      const studioSec = document.getElementById('studio');
      if (studioSec) {
        studioSec.scrollIntoView({ behavior: 'smooth' });
      }
      showToast(`Selected ${PRODUCTS[modelKey].name} in Colour Studio`);
    }
  };

  // Toggle Comparison Mode (in place of search)
  if (el.btnToggleCompare) {
    el.btnToggleCompare.addEventListener('click', () => {
      isComparing = !isComparing;
      el.btnToggleCompare.setAttribute('aria-pressed', isComparing ? 'true' : 'false');
      el.btnToggleCompare.classList.toggle('active', isComparing);
      if (el.compareBtnText) {
        el.compareBtnText.textContent = isComparing ? 'Exit Comparison' : 'Compare Two Shades';
      }

      // Strictly toggle visibility
      if (isComparing) {
        el.stageSingle.style.display = 'none';
        el.stageCompare.style.display = 'flex';
      } else {
        el.stageSingle.style.display = 'flex';
        el.stageCompare.style.display = 'none';
      }

      updateStudio();
      showToast(isComparing ? 'Comparison mode: Select second shade to compare' : 'Returned to 360° Studio');
    });
  }

  // Toggle Backdrop Mode (Clean Studio vs Industrial Dark)
  if (el.btnToggleBackdrop) {
    el.btnToggleBackdrop.addEventListener('click', () => {
      userHasManualBackdrop = true;
      const nextMode = (currentBackdrop === 'light') ? 'dark' : 'light';
      setBackdrop(nextMode);
    });
  }

  // Floating Manual Dark Stage Toggle Button (if present)
  if (el.btnStageDarkToggle) {
    el.btnStageDarkToggle.addEventListener('click', () => {
      userHasManualBackdrop = true;
      const nextMode = (currentBackdrop === 'light') ? 'dark' : 'light';
      setBackdrop(nextMode);
    });
  }

  // Stage Backdrop Preset Chips (if present)
  if (el.stageChipBtns) {
    el.stageChipBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        userHasManualBackdrop = true;
        setBackdrop(btn.dataset.stage);
      });
    });
  }

  // Family Filter Pills (if present)
  if (el.filterPills && el.filterPills.length > 0) {
    el.filterPills.forEach(pill => {
      pill.addEventListener('click', () => {
        activeFamilyFilter = pill.dataset.family;
        el.filterPills.forEach(p => p.classList.toggle('active', p === pill));
        renderSwatches();
      });
    });
  }

  // Search Input (if present)
  if (el.colorSearch) {
    el.colorSearch.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      if (el.clearSearchBtn) el.clearSearchBtn.hidden = !searchQuery;
      renderSwatches();
    });
  }

  if (el.clearSearchBtn) {
    el.clearSearchBtn.addEventListener('click', () => {
      searchQuery = '';
      if (el.colorSearch) el.colorSearch.value = '';
      el.clearSearchBtn.hidden = true;
      renderSwatches();
    });
  }

  // Bespoke Color Picker (if present)
  if (el.customColorPicker) {
    el.customColorPicker.addEventListener('input', (e) => {
      const hex = e.target.value.toUpperCase();
      applyBespokeColor(hex);
    });
  }

  if (el.applyCustomHexBtn) {
    el.applyCustomHexBtn.addEventListener('click', () => {
      let hex = el.customHexInput ? el.customHexInput.value.trim().toUpperCase() : '';
      if (!hex.startsWith('#')) hex = '#' + hex;
      if (/^#[0-9A-F]{6}$/i.test(hex)) {
        applyBespokeColor(hex);
      } else {
        alert('Please enter a valid 6-character hex code (e.g. ED1C24).');
      }
    });
  }

  function applyBespokeColor(hex) {
    customHexColor = hex;
    updateStudio();
    showToast(`Bespoke shade ${hex} applied to ${PRODUCTS[currentModelKey].name}!`);
  }

  // =========================================================================
  // 5. TRUE 3D WEBGL ENGINE & 360° SHOWROOM CONTROLS (THREE.JS)
  // =========================================================================
  let scene, camera, renderer;
  let meshGroup = null;
  let active3DMaterials = [];
  let cachedLatticeTextures = {};
  let isThreeInitialized = false;

  let rotY = 0;              // Horizontal orbit angle (0° to 360°)
  let rotX = 0;              // Vertical tilt angle (-15° to +35°)
  let zoom = 1.0;            // Zoom scale (0.8x to 2.5x)
  let currentFocusY = 0;     // Vertical feature focus offset (-6 to +6 for Top/Lattice/Base)
  let isCutawayActive = false; // Interior cross-section cutaway mode
  let cutawayPlane = null;
  let gltfLoaderInstance = null;
  const loadedCADGeometries = {};
  let isDragging = false;
  let isDraggingSlider = false;
  let startX = 0;
  let startY = 0;
  let startRotY = 0;
  let startRotX = 0;
  let lastMoveX = 0;
  let lastMoveY = 0;
  let lastMoveTime = 0;
  let velocityRotY = 0;
  let velocityRotX = 0;
  let inertiaRafId = null;
  let isAutoSpinning = false;
  let autoSpinRafId = null;
  let isTransitioning = false;
  let initialPinchDist = null;
  let initialPinchZoom = 1.0;

  /**
   * Initializes the Three.js 3D WebGL scene with realistic studio lighting
   */
  function initThreeJS() {
    if (!window.THREE || !el.threeCanvas) return;

    // 1. Scene
    scene = new THREE.Scene();

    // 2. Camera (38° field of view for natural, non-distorted perspective)
    const rect = el.stageSingle.getBoundingClientRect();
    const width = rect.width || el.stageViewport.clientWidth || 600;
    const height = Math.max(450, rect.height || 480);

    camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 1000);
    camera.position.set(0, 0, 36);

    // 3. WebGL Renderer
    try {
      renderer = new THREE.WebGLRenderer({
        canvas: el.threeCanvas,
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance'
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.setSize(width, height);
      renderer.outputEncoding = THREE.sRGBEncoding;
      renderer.localClippingEnabled = false;

      if (window.THREE && window.THREE.GLTFLoader) {
        gltfLoaderInstance = new THREE.GLTFLoader();
      }
      cutawayPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0.2);
    } catch (e) {
      console.warn('WebGL init failed, fallback to 2D:', e);
      return;
    }

    // 4. Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.82);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.15);
    keyLight.position.set(12, 18, 15);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xbfdbfe, 0.65);
    fillLight.position.set(-14, 10, -12);
    scene.add(fillLight);

    const topSpot = new THREE.DirectionalLight(0xffffff, 0.45);
    topSpot.position.set(0, 24, 4);
    scene.add(topSpot);

    // Floor Contact Shadow Mesh
    const shadowGeo = new THREE.PlaneGeometry(14, 14);
    const shadowCanvas = document.createElement('canvas');
    shadowCanvas.width = 128;
    shadowCanvas.height = 128;
    const sCtx = shadowCanvas.getContext('2d');
    const grad = sCtx.createRadialGradient(64, 64, 0, 64, 64, 64);
    grad.addColorStop(0, 'rgba(0, 0, 0, 0.45)');
    grad.addColorStop(0.5, 'rgba(0, 0, 0, 0.18)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    sCtx.fillStyle = grad;
    sCtx.fillRect(0, 0, 128, 128);
    const shadowTex = new THREE.CanvasTexture(shadowCanvas);
    const shadowMat = new THREE.MeshBasicMaterial({
      map: shadowTex,
      transparent: true,
      depthWrite: false
    });
    const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    shadowMesh.rotation.x = -Math.PI / 2;
    shadowMesh.position.y = -9.2;
    scene.add(shadowMesh);

    // 5. Model Container
    meshGroup = new THREE.Group();
    scene.add(meshGroup);

    isThreeInitialized = true;

    // Initial Model Build
    const primaryColor = customHexColor 
      ? customHexColor 
      : PALETTE[primaryColorIndex].hex;
    update3DProduct(currentModelKey, primaryColor);

    // Render loop
    function renderLoop() {
      requestAnimationFrame(renderLoop);
      if (renderer && scene && camera) {
        renderer.render(scene, camera);
      }
    }
    renderLoop();

    window.addEventListener('resize', onWindowResize);
  }

  function onWindowResize() {
    if (!renderer || !camera || !el.stageSingle) return;
    const isFS = !!(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || (el.stageViewport && el.stageViewport.classList.contains('is-fullscreen')));
    const width = isFS ? window.innerWidth : (el.stageSingle.clientWidth || el.stageViewport.clientWidth || 600);
    const height = isFS ? window.innerHeight : Math.max(450, el.stageSingle.clientHeight || 480);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  }

  /**
   * Generates procedural lattice textures matching official Autotex catalog geometry
   */
  function getLatticeTexture(type) {
    if (cachedLatticeTextures[type]) return cachedLatticeTextures[type];

    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 2048;
    const ctx = canvas.getContext('2d');

    // Solid white background (white = solid polymer)
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Black cutouts (black = transparent open window holes)
    ctx.fillStyle = '#000000';

    if (type === 'd-spring') {
      // D-SPRING: 8 columns x 9 rows of bold open rectangular windows with rounded corners
      const rows = 9;
      const cols = 8;
      const topPadding = canvas.height * 0.04;
      const botPadding = canvas.height * 0.96;
      const colW = canvas.width / cols;
      const rowH = (botPadding - topPadding) / rows;
      const slotW = colW * 0.65;
      const slotH = rowH * 0.64;

      for (let r = 0; r < rows; r++) {
        const y = topPadding + r * rowH + (rowH - slotH) / 2;
        for (let c = 0; c < cols; c++) {
          const x = c * colW + (colW - slotW) / 2;
          drawRoundedSlot(ctx, x, y, slotW, slotH, 16);
        }
      }
    } else if (type === 'd-stiff') {
      // D-STIFF: 10 columns x 12 rows of staggered rectangular windows
      const rows = 12;
      const cols = 10;
      const topPadding = canvas.height * 0.04;
      const botPadding = canvas.height * 0.96;
      const colW = canvas.width / cols;
      const rowH = (botPadding - topPadding) / rows;
      const slotW = colW * 0.58;
      const slotH = rowH * 0.58;

      for (let r = 0; r < rows; r++) {
        const y = topPadding + r * rowH + (rowH - slotH) / 2;
        const offsetX = (r % 2 === 0) ? 0 : colW * 0.5;
        for (let c = 0; c < cols + 1; c++) {
          const x = c * colW + offsetX - slotW / 2;
          drawRoundedSlot(ctx, x, y, slotW, slotH, 12);
        }
      }
    } else if (type === 'd-stack') {
      // D-STACK: 8 columns x 10 rows of staggered oblong slots
      const rows = 10;
      const cols = 8;
      const topPadding = canvas.height * 0.03;
      const botPadding = canvas.height * 0.97;
      const colW = canvas.width / cols;
      const rowH = (botPadding - topPadding) / rows;
      const slotW = colW * 0.62;
      const slotH = rowH * 0.60;

      for (let r = 0; r < rows; r++) {
        const y = topPadding + r * rowH + (rowH - slotH) / 2;
        const offsetX = (r % 2 === 0) ? 0 : colW * 0.5;
        for (let c = 0; c < cols + 1; c++) {
          const x = c * colW + offsetX - slotW / 2;
          drawRoundedSlot(ctx, x, y, slotW, slotH, 14);
        }
      }
    } else if (type === 'd-cone') {
      // D-CONE: 14 rows of circular dye ports expanding in diameter towards base
      const rows = 14;
      const topPadding = canvas.height * 0.04;
      const botPadding = canvas.height * 0.96;
      const totalH = botPadding - topPadding;

      for (let r = 0; r < rows; r++) {
        const t = r / (rows - 1);
        const y = topPadding + t * totalH;
        const cols = Math.floor(8 + t * 6);
        const holeRadius = 12 + t * 10;
        const colW = canvas.width / cols;
        const offsetX = (r % 2 === 0) ? 0 : colW * 0.5;

        for (let c = 0; c < cols; c++) {
          const x = c * colW + offsetX;
          ctx.beginPath();
          ctx.arc(x, y, holeRadius, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    } else if (type === 's-cone') {
      // S-CONE: Velvet micro-grooves
      ctx.fillStyle = '#EAEAEA';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#FFFFFF';
      for (let y = 0; y < canvas.height; y += 4) {
        ctx.fillRect(0, y, canvas.width, 2);
      }
    }

    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.ClampToEdgeWrapping;
    tex.anisotropy = 4;
    cachedLatticeTextures[type] = tex;
    return tex;
  }

  function drawRoundedSlot(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + r);
    ctx.lineTo(x + w, y + h - r);
    ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    ctx.lineTo(x + r, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();
    ctx.fill();
  }

  function drawDiamondHole(ctx, x, y, rx, ry) {
    ctx.beginPath();
    ctx.moveTo(x, y - ry);
    ctx.lineTo(x + rx, y);
    ctx.lineTo(x, y + ry);
    ctx.lineTo(x - rx, y);
    ctx.closePath();
    ctx.fill();
  }

  /**
   * Constructs the authentic 3D cylindrical/conical mesh for the selected product
   */
  function update3DProduct(modelKey, hexColor) {
    if (!meshGroup || !window.THREE) return;

    while (meshGroup.children.length > 0) {
      const child = meshGroup.children[0];
      if (child.geometry) child.geometry.dispose();
      meshGroup.remove(child);
    }
    active3DMaterials = [];

    const color = new THREE.Color(hexColor);
    const darkInteriorColor = color.clone().multiplyScalar(0.48);

    const latticeTex = getLatticeTexture(modelKey);

    const mainMat = new THREE.MeshStandardMaterial({
      color: color,
      roughness: 0.35,
      metalness: 0.08,
      alphaMap: modelKey !== 's-cone' ? latticeTex : null,
      bumpMap: modelKey === 's-cone' ? latticeTex : null,
      bumpScale: 0.04,
      transparent: modelKey !== 's-cone',
      alphaTest: modelKey !== 's-cone' ? 0.35 : 0.0,
      side: THREE.DoubleSide
    });

    const collarMat = new THREE.MeshStandardMaterial({
      color: color,
      roughness: 0.35,
      metalness: 0.08,
      side: THREE.DoubleSide
    });

    const innerMat = new THREE.MeshStandardMaterial({
      color: darkInteriorColor,
      roughness: 0.45,
      metalness: 0.05,
      side: THREE.BackSide,
      clippingPlanes: (isCutawayActive && cutawayPlane) ? [cutawayPlane] : []
    });

    active3DMaterials = [mainMat, collarMat, innerMat];

    // Check if authentic manufacturing CAD GLB exists for this model
    const hasCAD = (modelKey === 'd-spring' || modelKey === 'd-stiff');
    const cadVersion = 'v=open_v3';
    const cadPath = (modelKey === 'd-spring') ? `models/d_spring.glb?${cadVersion}` :
                    (modelKey === 'd-stiff') ? `models/d_stiff.glb?${cadVersion}` : null;

    if (hasCAD && gltfLoaderInstance && cadPath) {
      if (loadedCADGeometries[modelKey]) {
        // CAD already loaded and cached: clone and apply dynamic masterbatch material
        const cadClone = loadedCADGeometries[modelKey].clone(true);
        cadClone.traverse((child) => {
          if (child.isMesh) {
            if (child.geometry && !child.geometry.attributes.normal) {
              child.geometry.computeVertexNormals();
            }
            child.material = new THREE.MeshStandardMaterial({
              color: color,
              roughness: 0.32,
              metalness: 0.05,
              side: THREE.DoubleSide,
              clippingPlanes: (isCutawayActive && cutawayPlane) ? [cutawayPlane] : []
            });
            active3DMaterials.push(child.material);
          }
        });
        meshGroup.add(cadClone);
        return;
      } else {
        // Load CAD model asynchronously
        gltfLoaderInstance.load(cadPath, (gltf) => {
          const cadRoot = gltf.scene || gltf.scenes[0];
          // Scale raw CAD dimensions (height ~169.0mm) to scene units (~17.0 units)
          const cadScale = 0.1006;
          cadRoot.scale.set(cadScale, cadScale, cadScale);
          cadRoot.position.set(0, 0, 0);

          cadRoot.traverse((child) => {
            if (child.isMesh && child.geometry) {
              child.geometry.computeVertexNormals();
            }
          });

          loadedCADGeometries[modelKey] = cadRoot;
          // Re-render if this is still the active model
          if (currentModelKey === modelKey) {
            update3DProduct(modelKey, hexColor);
          }
        }, undefined, (err) => {
          console.warn('CAD load error, using procedural fallback:', err);
        });
      }
    }

    if (modelKey === 'd-spring') {
      // 1. D-SPRING (Compressible Dye Tube - 54mm OD x 170mm)
      const bodyH = 14.6;
      const collarH = 1.2;

      // Outer perforated lattice cylinder - ALL OPEN ENDED (NO LIDS!)
      const body = new THREE.Mesh(new THREE.CylinderGeometry(2.7, 2.7, bodyH, 64, 24, true), mainMat);
      body.position.y = 0;

      // Inner hollow core - OPEN ENDED
      const inner = new THREE.Mesh(new THREE.CylinderGeometry(2.32, 2.32, 17, 64, 1, true), innerMat);

      // Top Collar - OPEN ENDED (NO LID!)
      const topCollar = new THREE.Mesh(new THREE.CylinderGeometry(2.73, 2.73, collarH, 64, 1, true), collarMat);
      topCollar.position.y = 8.5 - collarH / 2;

      // Bottom Collar - OPEN ENDED (NO LID!)
      const botCollar = new THREE.Mesh(new THREE.CylinderGeometry(2.76, 2.76, collarH, 64, 1, true), collarMat);
      botCollar.position.y = -8.5 + collarH / 2;

      // Hollow Top Rim Lip
      const topLip = new THREE.Mesh(new THREE.RingGeometry(2.32, 2.73, 64), collarMat);
      topLip.rotation.x = -Math.PI / 2;
      topLip.position.y = 8.5;

      // Hollow Bottom Rim Lip
      const botLip = new THREE.Mesh(new THREE.RingGeometry(2.32, 2.76, 64), collarMat);
      botLip.rotation.x = Math.PI / 2;
      botLip.position.y = -8.5;

      // 5 Axial compression spring rings across the body
      const ringsGroup = new THREE.Group();
      for (let i = -2; i <= 2; i++) {
        const ring = new THREE.Mesh(new THREE.TorusGeometry(2.71, 0.05, 12, 64), collarMat);
        ring.rotation.x = Math.PI / 2;
        ring.position.y = i * 2.6;
        ringsGroup.add(ring);
      }

      meshGroup.add(body, inner, topCollar, botCollar, topLip, botLip, ringsGroup);

    } else if (modelKey === 'd-stiff') {
      // 2. D-STIFF (Rigid Dye Tube - 54mm OD x 170mm)
      const bodyH = 14.2;
      const collarH = 1.4;

      const body = new THREE.Mesh(new THREE.CylinderGeometry(2.7, 2.7, bodyH, 64, 24, true), mainMat);
      const inner = new THREE.Mesh(new THREE.CylinderGeometry(2.35, 2.35, 17, 64, 1, true), innerMat);

      // Top Heavy-Duty Collar - OPEN ENDED (NO LID!)
      const topCollar = new THREE.Mesh(new THREE.CylinderGeometry(2.75, 2.75, collarH, 64, 1, true), collarMat);
      topCollar.position.y = 8.5 - collarH / 2;

      // Bottom Driving Collar - OPEN ENDED (NO LID!)
      const botCollar = new THREE.Mesh(new THREE.CylinderGeometry(2.78, 2.78, collarH, 64, 1, true), collarMat);
      botCollar.position.y = -8.5 + collarH / 2;

      const topLip = new THREE.Mesh(new THREE.RingGeometry(2.35, 2.75, 64), collarMat);
      topLip.rotation.x = -Math.PI / 2;
      topLip.position.y = 8.5;

      const botLip = new THREE.Mesh(new THREE.RingGeometry(2.35, 2.78, 64), collarMat);
      botLip.rotation.x = Math.PI / 2;
      botLip.position.y = -8.5;

      // 4 Longitudinal vertical reinforcing bars
      const ribGroup = new THREE.Group();
      for (let a = 0; a < 4; a++) {
        const angle = (a * Math.PI) / 2;
        const rib = new THREE.Mesh(new THREE.BoxGeometry(0.12, bodyH, 0.12), collarMat);
        rib.position.set(Math.cos(angle) * 2.7, 0, Math.sin(angle) * 2.7);
        rib.rotation.y = -angle;
        ribGroup.add(rib);
      }

      meshGroup.add(body, inner, topCollar, botCollar, topLip, botLip, ribGroup);

    } else if (modelKey === 'd-stack') {
      // 3. D-STACK (Stackable Spindle Tube)
      const bodyH = 13.8;
      const neckH = 1.6;
      const baseH = 1.6;

      const body = new THREE.Mesh(new THREE.CylinderGeometry(2.65, 2.65, bodyH, 64, 24, true), mainMat);
      const inner = new THREE.Mesh(new THREE.CylinderGeometry(2.28, 2.28, 17, 64, 1, true), innerMat);

      // Stepped male interlocking neck at top - OPEN ENDED (NO LID!)
      const maleNeck = new THREE.Mesh(new THREE.CylinderGeometry(2.44, 2.44, neckH, 64, 1, true), collarMat);
      maleNeck.position.y = 8.5 - neckH / 2;

      // Shoulder ring
      const shoulder = new THREE.Mesh(new THREE.RingGeometry(2.44, 2.65, 64), collarMat);
      shoulder.rotation.x = Math.PI / 2;
      shoulder.position.y = 8.5 - neckH;

      // Flared female interlocking socket at base - OPEN ENDED (NO LID!)
      const femaleBase = new THREE.Mesh(new THREE.CylinderGeometry(2.75, 2.85, baseH, 64, 1, true), collarMat);
      femaleBase.position.y = -8.5 + baseH / 2;

      const topLip = new THREE.Mesh(new THREE.RingGeometry(2.28, 2.44, 64), collarMat);
      topLip.rotation.x = -Math.PI / 2;
      topLip.position.y = 8.5;

      const botLip = new THREE.Mesh(new THREE.RingGeometry(2.28, 2.85, 64), collarMat);
      botLip.rotation.x = Math.PI / 2;
      botLip.position.y = -8.5;

      meshGroup.add(body, inner, maleNeck, shoulder, femaleBase, topLip, botLip);

    } else if (modelKey === 'd-cone') {
      // 4. D-CONE (Perforated Dye Cone)
      const bodyH = 15.2;
      const topH = 1.1;
      const baseH = 1.2;

      // Conical perforated body - OPEN ENDED (NO LID!)
      const body = new THREE.Mesh(new THREE.CylinderGeometry(1.95, 3.32, bodyH, 64, 32, true), mainMat);
      body.position.y = -0.05;

      // Inner cone hollow core - OPEN ENDED
      const inner = new THREE.Mesh(new THREE.CylinderGeometry(1.65, 3.12, 17.5, 64, 1, true), innerMat);

      // Top nose collar - OPEN ENDED (NO LID!)
      const topRim = new THREE.Mesh(new THREE.CylinderGeometry(1.85, 1.95, topH, 64, 1, true), collarMat);
      topRim.position.y = 8.75 - topH / 2;

      // Bottom base skirt - OPEN ENDED (NO LID!)
      const botSkirt = new THREE.Mesh(new THREE.CylinderGeometry(3.32, 3.42, baseH, 64, 1, true), collarMat);
      botSkirt.position.y = -8.75 + baseH / 2;

      // Open Top Rim Lip (Hollow ring!)
      const topLip = new THREE.Mesh(new THREE.RingGeometry(1.65, 1.85, 64), collarMat);
      topLip.rotation.x = -Math.PI / 2;
      topLip.position.y = 8.75;

      // Open Bottom Rim Lip
      const botLip = new THREE.Mesh(new THREE.RingGeometry(3.12, 3.42, 64), collarMat);
      botLip.rotation.x = Math.PI / 2;
      botLip.position.y = -8.75;

      meshGroup.add(body, inner, topRim, botSkirt, topLip, botLip);

    } else if (modelKey === 's-cone') {
      // 5. S-CONE (Sale Yarn Velvet Cone) - Approved as Perfect
      const body = new THREE.Mesh(new THREE.CylinderGeometry(1.8, 3.4, 17.5, 64, 32, true), mainMat);
      const inner = new THREE.Mesh(new THREE.CylinderGeometry(1.6, 3.15, 17.5, 64, 1, true), innerMat);
      
      const topLip = new THREE.Mesh(new THREE.RingGeometry(1.6, 1.8, 64), collarMat);
      topLip.rotation.x = -Math.PI / 2;
      topLip.position.y = 8.75;

      const botLip = new THREE.Mesh(new THREE.RingGeometry(3.15, 3.4, 64), collarMat);
      botLip.rotation.x = Math.PI / 2;
      botLip.position.y = -8.75;

      meshGroup.add(body, inner, topLip, botLip);
    }
  }

  function update3DColor(hexColor) {
    if (!window.THREE) return;
    const color = new THREE.Color(hexColor);
    const darkColor = color.clone().multiplyScalar(0.52);

    if (active3DMaterials && active3DMaterials.length) {
      active3DMaterials.forEach(m => {
        if (m.side === THREE.BackSide) {
          m.color.copy(darkColor);
        } else {
          m.color.copy(color);
        }
        m.needsUpdate = true;
      });
    }

    if (meshGroup) {
      meshGroup.traverse(child => {
        if (child.isMesh && child.material) {
          if (child.material.side === THREE.BackSide) {
            child.material.color.copy(darkColor);
          } else {
            child.material.color.copy(color);
          }
          child.material.needsUpdate = true;
        }
      });
    }
  }

  /**
   * Applies the calculated 3D transformation matrix and synchronizes all HUDs
   */
  function applyStageTransform() {
    // 1. Clamp pitch and scale limits
    rotX = Math.max(-15, Math.min(35, rotX));
    zoom = Math.max(0.8, Math.min(2.5, zoom));

    // 2. Normalize 0-360 range for display and scrubber
    const normalizedY = ((rotY % 360) + 360) % 360;

    // 3. Update REAL 3D WebGL Mesh Rotation and Camera Distance
    if (meshGroup) {
      meshGroup.rotation.y = (rotY * Math.PI) / 180;
      meshGroup.rotation.x = (rotX * Math.PI) / 180;
      meshGroup.position.y = -currentFocusY;
    }
    if (camera) {
      camera.position.z = 36 / zoom;
    }

    // 4. Realistic 3D Turntable Base Ring tilt and rotation
    if (el.turntableFloorRing) {
      el.turntableFloorRing.style.transform = `perspective(800px) rotateX(${62 + rotX * 0.35}deg) rotateZ(${-rotY}deg) scale(${Math.min(1.25, Math.max(0.85, zoom * 0.95))})`;
    }

    // 5. Synchronize 360 Orbit Degree Badge
    if (el.orbitDegVal) {
      el.orbitDegVal.textContent = `${Math.round(normalizedY)}°`;
    }

    // 6. Synchronize Turntable Range Slider
    if (el.turntableSlider && !isDraggingSlider) {
      el.turntableSlider.value = Math.round(normalizedY);
    }

    // 7. Synchronize Zoom Badge
    if (el.zoomBadge) {
      el.zoomBadge.textContent = `${Math.round(zoom * 100)}%`;
    }

    // 8. Update Active Angle Preset Button if aligned
    updateActivePresetBtn(normalizedY, rotX);
  }

  function updateActivePresetBtn(angleY, angleX) {
    if (!el.anglePresetBtns) return;
    el.anglePresetBtns.forEach(btn => {
      const target = btn.dataset.angle;
      let matches = false;
      if (target === 'top') {
        matches = angleX >= 25;
      } else {
        const val = parseInt(target, 10);
        matches = Math.abs(angleY - val) < 8 && angleX < 15;
      }
      btn.classList.toggle('active', matches);
    });
  }

  function hideDragHint() {
    if (el.dragHint && !el.dragHint.classList.contains('fade-out')) {
      el.dragHint.classList.add('fade-out');
    }
  }

  /**
   * Smoothly interpolates from current angles to target angle and zoom
   */
  function smoothTransitionTo(targetRotY, targetRotX, targetZoom = null, duration = 400, targetFocusY = null) {
    stopAutoSpin();
    cancelInertia();

    isTransitioning = true;
    const startY = rotY;
    const startX = rotX;
    const startZ = zoom;
    const endZ = targetZoom !== null ? targetZoom : zoom;

    const startFocusY = currentFocusY;
    const endFocusY = targetFocusY !== null ? targetFocusY : currentFocusY;

    // Find shortest rotational arc for Y
    let diffY = (targetRotY - (rotY % 360));
    if (diffY > 180) diffY -= 360;
    if (diffY < -180) diffY += 360;
    const endY = rotY + diffY;

    const startTime = performance.now();

    function step(now) {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / duration);
      // Cubic ease-out
      const ease = 1 - Math.pow(1 - progress, 3);

      rotY = startY + (endY - startY) * ease;
      rotX = startX + (targetRotX - startX) * ease;
      zoom = startZ + (endZ - startZ) * ease;
      currentFocusY = startFocusY + (endFocusY - startFocusY) * ease;
      applyStageTransform();

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        isTransitioning = false;
      }
    }

    requestAnimationFrame(step);
  }

  // --- Pointer (Mouse & Touch) Orbit Dragging with Inertia ---
  if (el.stageViewport) {
    el.stageViewport.addEventListener('pointerdown', (e) => {
      if (isComparing) return;
      // Ignore if clicking on floating toolbar or preset bar
      if (e.target.closest('.stage-floating-toolbar') || e.target.closest('.stage-bottom-bar')) return;

      isDragging = true;
      hideDragHint();
      stopAutoSpin();
      cancelInertia();

      startX = e.clientX;
      startY = e.clientY;
      startRotY = rotY;
      startRotX = rotX;
      lastMoveX = e.clientX;
      lastMoveY = e.clientY;
      lastMoveTime = performance.now();
      velocityRotY = 0;
      velocityRotX = 0;

      el.stageViewport.setPointerCapture(e.pointerId);
    });

    el.stageViewport.addEventListener('pointermove', (e) => {
      if (!isDragging || isComparing) return;

      const now = performance.now();
      const dt = Math.max(1, now - lastMoveTime);

      const dx = e.clientX - startX;
      const dy = e.clientY - startY;

      // Sensitivity: 0.52 deg per pixel for responsive, natural control
      const newRotY = startRotY + dx * 0.52;
      const newRotX = startRotX - dy * 0.32;

      // Instant velocity tracking for momentum release
      velocityRotY = ((e.clientX - lastMoveX) * 0.52) / (dt / 16.6);
      velocityRotX = (-(e.clientY - lastMoveY) * 0.32) / (dt / 16.6);

      lastMoveX = e.clientX;
      lastMoveY = e.clientY;
      lastMoveTime = now;

      rotY = newRotY;
      rotX = newRotX;
      applyStageTransform();
    });

    const endPointerDrag = (e) => {
      if (!isDragging) return;
      isDragging = false;
      try {
        if (el.stageViewport.hasPointerCapture(e.pointerId)) {
          el.stageViewport.releasePointerCapture(e.pointerId);
        }
      } catch (err) {}

      // Apply inertia fling decay if flung with speed
      if (Math.abs(velocityRotY) > 0.15 || Math.abs(velocityRotX) > 0.15) {
        startInertia();
      }
    };

    el.stageViewport.addEventListener('pointerup', endPointerDrag);
    el.stageViewport.addEventListener('pointercancel', endPointerDrag);

    // Mouse Wheel Zoom
    el.stageViewport.addEventListener('wheel', (e) => {
      if (isComparing) return;
      e.preventDefault();
      hideDragHint();
      stopAutoSpin();

      const delta = -e.deltaY * 0.0018;
      zoom = Math.max(0.8, Math.min(2.5, zoom + delta));
      applyStageTransform();
    }, { passive: false });

    // Multi-touch Pinch to Zoom on Mobile
    el.stageViewport.addEventListener('touchstart', (e) => {
      if (e.touches.length === 2) {
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        initialPinchDist = Math.hypot(dx, dy);
        initialPinchZoom = zoom;
      }
    }, { passive: true });

    el.stageViewport.addEventListener('touchmove', (e) => {
      if (e.touches.length === 2 && initialPinchDist) {
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        const currentDist = Math.hypot(dx, dy);
        const scaleFactor = currentDist / initialPinchDist;
        zoom = Math.max(0.8, Math.min(2.5, initialPinchZoom * scaleFactor));
        applyStageTransform();
      }
    }, { passive: true });

    el.stageViewport.addEventListener('touchend', (e) => {
      if (e.touches.length < 2) {
        initialPinchDist = null;
      }
    }, { passive: true });
  }

  // --- Momentum Inertia Decay ---
  function startInertia() {
    cancelInertia();
    function decay() {
      velocityRotY *= 0.92;
      velocityRotX *= 0.90;

      rotY += velocityRotY;
      rotX += velocityRotX;
      applyStageTransform();

      if (Math.abs(velocityRotY) > 0.02 || Math.abs(velocityRotX) > 0.02) {
        inertiaRafId = requestAnimationFrame(decay);
      } else {
        cancelInertia();
      }
    }
    inertiaRafId = requestAnimationFrame(decay);
  }

  function cancelInertia() {
    if (inertiaRafId) {
      cancelAnimationFrame(inertiaRafId);
      inertiaRafId = null;
    }
  }

  // --- Auto-Spin Turntable Showcase Mode ---
  function toggleAutoSpin() {
    if (isAutoSpinning) {
      stopAutoSpin();
    } else {
      startAutoSpin();
    }
  }

  function startAutoSpin() {
    if (isComparing) return;
    cancelInertia();
    isAutoSpinning = true;
    hideDragHint();

    if (el.btnAutoSpin) {
      el.btnAutoSpin.setAttribute('aria-pressed', 'true');
    }

    function spin() {
      if (!isAutoSpinning) return;
      rotY += 0.45; // Smooth showroom rotation
      applyStageTransform();
      autoSpinRafId = requestAnimationFrame(spin);
    }
    autoSpinRafId = requestAnimationFrame(spin);
    showToast('Turntable auto-spin activated');
  }

  function stopAutoSpin() {
    if (!isAutoSpinning) return;
    isAutoSpinning = false;
    if (autoSpinRafId) {
      cancelAnimationFrame(autoSpinRafId);
      autoSpinRafId = null;
    }
    if (el.btnAutoSpin) {
      el.btnAutoSpin.setAttribute('aria-pressed', 'false');
    }
  }

  if (el.btnAutoSpin) {
    el.btnAutoSpin.addEventListener('click', toggleAutoSpin);
  }

  // --- Floating Zoom & Reset Toolbar Buttons ---
  if (el.btnZoomIn) {
    el.btnZoomIn.addEventListener('click', () => {
      stopAutoSpin();
      zoom = Math.min(2.5, zoom + 0.25);
      applyStageTransform();
    });
  }

  if (el.btnZoomOut) {
    el.btnZoomOut.addEventListener('click', () => {
      stopAutoSpin();
      zoom = Math.max(0.8, zoom - 0.25);
      applyStageTransform();
    });
  }

  // --- CarWale-style Feature Focus Buttons ---
  if (el.btnFocusTop) {
    el.btnFocusTop.addEventListener('click', () => {
      smoothTransitionTo(rotY, 15, 2.1, 450, 5.2);
      showToast('Focusing on Top Collar & Alignment Flange');
    });
  }

  if (el.btnFocusMid) {
    el.btnFocusMid.addEventListener('click', () => {
      smoothTransitionTo(rotY, 2, 1.85, 450, 0);
      showToast('Focusing on Perforation Grid / Lattice');
    });
  }

  if (el.btnFocusBase) {
    el.btnFocusBase.addEventListener('click', () => {
      smoothTransitionTo(rotY, -10, 2.1, 450, -5.2);
      showToast('Focusing on Base Driving Ring & Stacking Grooves');
    });
  }

  // --- Interior Cutaway Toggle ---
  function toggleCutawayView() {
    isCutawayActive = !isCutawayActive;
    if (renderer) {
      renderer.localClippingEnabled = isCutawayActive;
    }
    if (el.btnCutawayView) {
      el.btnCutawayView.setAttribute('aria-pressed', isCutawayActive ? 'true' : 'false');
      el.btnCutawayView.classList.toggle('active', isCutawayActive);
    }
    active3DMaterials.forEach(m => {
      m.clippingPlanes = (isCutawayActive && cutawayPlane) ? [cutawayPlane] : [];
      m.clipShadows = true;
      m.needsUpdate = true;
    });
    showToast(isCutawayActive ? 'Interior Cutaway Mode: Core spindle & rib wall visible' : 'Full Exterior 360° Mode');
  }

  if (el.btnCutawayView) {
    el.btnCutawayView.addEventListener('click', toggleCutawayView);
  }

  if (el.btnResetView) {
    el.btnResetView.addEventListener('click', () => {
      stopAutoSpin();
      cancelInertia();
      if (isCutawayActive) {
        toggleCutawayView();
      }
      if (isComparing) {
        isComparing = false;
        el.stageSingle.style.display = 'flex';
        el.stageCompare.style.display = 'none';
        if (el.btnToggleCompare) {
          el.btnToggleCompare.setAttribute('aria-pressed', 'false');
          el.btnToggleCompare.classList.remove('active');
        }
        if (el.compareBtnText) {
          el.compareBtnText.textContent = 'Compare Two Shades';
        }
      }
      smoothTransitionTo(0, 0, 1.0, 400, 0);
      showToast('360° View & Zoom reset to default');
    });
  }

  // --- Turntable Scrubber Slider ---
  if (el.turntableSlider) {
    el.turntableSlider.addEventListener('input', (e) => {
      stopAutoSpin();
      cancelInertia();
      hideDragHint();
      isDraggingSlider = true;
      rotY = parseFloat(e.target.value);
      applyStageTransform();
    });

    el.turntableSlider.addEventListener('change', () => {
      isDraggingSlider = false;
    });
  }

  // --- Angle Preset Buttons (0°, 45°, 90°, 180°, Top Rim 35°) ---
  if (el.anglePresetBtns) {
    el.anglePresetBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const angle = btn.dataset.angle;
        hideDragHint();
        if (angle === 'top') {
          smoothTransitionTo(rotY, 32);
          showToast('Top Rim Core View (35° inspection angle)');
        } else {
          const targetY = parseInt(angle, 10);
          smoothTransitionTo(targetY, 0);
          showToast(`Rotated to ${btn.textContent.trim()}`);
        }
      });
    });
  }

  // =========================================================================
  // 4b. FULL SCREEN 3D STUDIO PLAY MODE
  // =========================================================================
  function isCurrentlyFullscreen() {
    return !!(
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.mozFullScreenElement ||
      document.msFullscreenElement ||
      (el.stageViewport && el.stageViewport.classList.contains('is-fullscreen'))
    );
  }

  function toggleFullscreen() {
    if (isCurrentlyFullscreen()) {
      exitFullscreenMode();
    } else {
      enterFullscreenMode();
    }
  }

  function enterFullscreenMode() {
    const container = el.stageViewport;
    if (!container) return;

    if (container.requestFullscreen) {
      container.requestFullscreen().catch(() => fallbackFullscreen(container, true));
    } else if (container.webkitRequestFullscreen) {
      container.webkitRequestFullscreen();
    } else if (container.mozRequestFullScreen) {
      container.mozRequestFullScreen();
    } else if (container.msRequestFullscreen) {
      container.msRequestFullscreen();
    } else {
      fallbackFullscreen(container, true);
    }
  }

  function exitFullscreenMode() {
    const container = el.stageViewport;
    if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement) {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => fallbackFullscreen(container, false));
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    } else {
      fallbackFullscreen(container, false);
    }
  }

  function fallbackFullscreen(container, enable) {
    if (!container) return;
    if (enable) {
      container.classList.add('is-fullscreen');
      document.body.style.overflow = 'hidden';
    } else {
      container.classList.remove('is-fullscreen');
      document.body.style.overflow = '';
    }
    syncFullscreenUI(enable);
  }

  function syncFullscreenUI(isFS) {
    if (el.fsIcon) el.fsIcon.textContent = isFS ? 'fullscreen_exit' : 'fullscreen';
    if (el.fsLabel) el.fsLabel.textContent = isFS ? 'Exit' : 'Full Screen';
    if (el.btnFullscreenToggle) {
      el.btnFullscreenToggle.setAttribute('aria-pressed', isFS ? 'true' : 'false');
      el.btnFullscreenToggle.classList.toggle('active', isFS);
    }
    if (isFS) {
      // Auto-spin turntable showcase ("play" mode)
      if (!isAutoSpinning) {
        startAutoSpin();
      }
      showToast('Full Screen Play: 360° dynamic showroom');
    }

    setTimeout(onWindowResize, 60);
    setTimeout(onWindowResize, 250);
  }

  function onFullscreenStateChange() {
    const isFS = isCurrentlyFullscreen();
    if (el.stageViewport) {
      if (document.fullscreenElement || document.webkitFullscreenElement) {
        el.stageViewport.classList.add('is-fullscreen');
      } else if (!isFS) {
        el.stageViewport.classList.remove('is-fullscreen');
      }
    }
    syncFullscreenUI(isFS);
  }

  if (el.btnFullscreenToggle) {
    el.btnFullscreenToggle.addEventListener('click', toggleFullscreen);
  }
  if (el.fsExitBtn) {
    el.fsExitBtn.addEventListener('click', exitFullscreenMode);
  }

  document.addEventListener('fullscreenchange', onFullscreenStateChange);
  document.addEventListener('webkitfullscreenchange', onFullscreenStateChange);
  document.addEventListener('mozfullscreenchange', onFullscreenStateChange);
  document.addEventListener('MSFullscreenChange', onFullscreenStateChange);

  // Initial stage transform
  applyStageTransform();

  // Download Specification Card (.txt formulation)
  if (el.btnDownloadSpec) {
    el.btnDownloadSpec.addEventListener('click', () => {
      const prod = PRODUCTS[currentModelKey];
      const color = customHexColor 
        ? { name: 'Bespoke Mill Shade', code: 'AT-CUSTOM', hex: customHexColor, family: 'Custom' }
        : PALETTE[primaryColorIndex];

      const content = `================================================================================
AUTOTEX — DYE TUBES & CONES SPECIFICATION CARD
Tested and Trusted, Globally... | www.autotex.net
================================================================================

DATE GENERATED: ${new Date().toLocaleDateString()}
CONFIGURED PRODUCT:
  Model Profile:         ${prod.name} (${prod.categoryBadge})
  Product Classification:${prod.type}
  Polymer Compound:      ${prod.polymer}
  Top Outer Diameter:    ${prod.topDia}
  Traverse Length:       ${prod.length}
  Bottom Inner Diameter: ${prod.bottomDia}
  Perforation Open Area: ${prod.perforation}
  Axial Compression:     ${prod.compression}
  Max Temperature Limit: ${prod.temp}

MASTERBATCH COLOUR FORMULATION:
  Colour Shade Name:     ${color.name}
  Autotex Reference:     ${color.code}
  Hex Value:             ${color.hex}
  Colour Category:       ${color.family}
  Finish Type:           High-Temperature Dyehouse Grade

MANUFACTURING STANDARDS:
  * 100% Prime Virgin Engineering Polymers
  * Radius-Smoothed Perforation Edges (Zero Yarn Snagging)
  * Certified Concentricity & High-Speed Dynamic Balance
  * ISO 9001:2015 Quality Management Certified

MANUFACTURER CONTACT:
  Autotex
  13/20, Sitra Road, Kalapatti,
  Coimbatore - 641 048, Tamil Nadu, India.
  Phone: +91 422 262 7681 / 82
  Email: info@autotex.net
  Website: https://autotex.net/
================================================================================
`;

      const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `autotex-${prod.id}-${color.code.toLowerCase()}.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setTimeout(() => URL.revokeObjectURL(url), 2000);

      showToast('Formulation Card downloaded successfully!');
    });
  }

  // =========================================================================
  // 5. SAMPLE REQUEST MODAL
  // =========================================================================
  window.openSampleModal = function () {
    const prod = PRODUCTS[currentModelKey];
    const color = customHexColor 
      ? { name: 'Bespoke Mill Shade', code: 'AT-CUSTOM', hex: customHexColor }
      : PALETTE[primaryColorIndex];

    el.modalSwatchBox.style.backgroundColor = color.hex;
    el.modalProdName.textContent = `${prod.name} (${prod.type})`;
    el.modalColorName.textContent = `Configured Formulation: ${color.name} (${color.code} · ${color.hex})`;

    el.sampleModal.classList.add('open');
    el.sampleModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  function closeSampleModal() {
    el.sampleModal.classList.remove('open');
    el.sampleModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (el.btnInquireSelection) {
    el.btnInquireSelection.addEventListener('click', window.openSampleModal);
  }
  if (el.openSampleModalBtn) {
    el.openSampleModalBtn.addEventListener('click', window.openSampleModal);
  }
  el.modalCloseBtn.addEventListener('click', closeSampleModal);
  el.modalCancelBtn.addEventListener('click', closeSampleModal);

  el.sampleModal.addEventListener('click', (e) => {
    if (e.target === el.sampleModal) {
      closeSampleModal();
    }
  });

  window.handleSampleSubmit = function (e) {
    e.preventDefault();
    const name = document.getElementById('modal-input-name').value;
    const mill = document.getElementById('modal-input-mill').value;
    const prod = PRODUCTS[currentModelKey].name;
    const color = customHexColor ? customHexColor : PALETTE[primaryColorIndex].name;

    closeSampleModal();
    showToast(`Thank you ${name}! Sample request for ${prod} in ${color} received. Our technical engineer will contact ${mill} shortly.`);
    el.sampleForm.reset();
  };

  // Mobile Drawer Toggle
  if (el.mobileToggle) {
    el.mobileToggle.addEventListener('click', () => {
      el.mobileDrawer.classList.toggle('open');
    });
  }

  // Toast Notification System
  let toastTimer = null;
  function showToast(msg) {
    if (toastTimer) clearTimeout(toastTimer);
    el.toast.textContent = msg;
    el.toast.classList.add('show');
    toastTimer = setTimeout(() => {
      el.toast.classList.remove('show');
    }, 3800);
  }

  // =========================================================================
  // 6. INITIALIZATION
  // =========================================================================
  // Ensure compare view is initially hidden
  el.stageSingle.style.display = 'flex';
  el.stageCompare.style.display = 'none';

  initThreeJS();
  updateStudio();

})();
