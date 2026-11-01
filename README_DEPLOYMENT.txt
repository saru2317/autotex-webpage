================================================================================
AUTOTEX 3D COLOUR STUDIO — PRODUCTION WEB DEPLOYMENT PACKAGE
Official Dye Tubes & Cones Interactive 3D Configurator
================================================================================

This package contains the complete production-ready build of the Autotex 3D 
Colour Studio, calibrated with the official 20 Pantone shades from catalog 
at-dtc-20p-ecat.pdf.

CONTENTS:
--------------------------------------------------------------------------------
- index.html              : Main web application entry point (Clean Studio Mode)
- style.css               : CSS stylesheets with responsive mobile & laptop layout
- app.js                  : Configurator application engine & Three.js 3D WebGL core
- three.min.js            : Three.js 3D runtime library
- GLTFLoader.js           : Three.js geometry parser
- models/cad_bundle.js    : Self-contained factory 3D CAD models (Zero CORS restrictions)
- Image/                  : High-resolution official Autotex product image assets
- DEPLOYMENT_INSTRUCTIONS.html : Visual step-by-step deployment guide

--------------------------------------------------------------------------------
HOW TO DEPLOY ON AUTOTEX.NET (cPanel / Web Server):
--------------------------------------------------------------------------------

METHOD 1: DEDICATED DIRECT SUBFOLDER (Recommended)
1. Open your cPanel or Web Hosting File Manager for autotex.net.
2. Go to public_html/ (the website root).
3. Create a new folder named: shades
4. Upload all files from this package (or upload Autotex_Colour_Studio_Production.zip 
   and click Extract) into public_html/shades/
5. The 3D Colour Studio is immediately live at:
   https://autotex.net/shades/

METHOD 2: EMBEDDING INTO WORDPRESS PAGES
(e.g., https://autotex.net/dye-tubes-cones/ or https://autotex.net/textile/)
1. In WordPress Admin (wp-admin), edit the desired page.
2. Add a "Custom HTML" block.
3. Paste the following snippet:

<div style="width: 100%; max-width: 1280px; margin: 30px auto;">
  <iframe 
    src="https://autotex.net/shades/" 
    width="100%" 
    height="640px" 
    style="border: none; border-radius: 16px; box-shadow: 0 4px 25px rgba(0,0,0,0.06); width: 100%; display: block;" 
    title="Autotex Interactive 3D Colour Studio"
    allow="fullscreen"
    loading="lazy">
  </iframe>
</div>

4. Save / Update the WordPress page. The 3D Studio will appear seamlessly 
   integrated inside the company layout with no duplicate headers or footers!

================================================================================
TECHNICAL SPECIFICATIONS:
- Client-side WebGL 3D rendering (Runs directly on visitor's browser GPU)
- Zero database or backend dependencies (Fast, scalable, and secure)
- Calibrated D65 neutral studio lighting matching official Pantone swatches
================================================================================
