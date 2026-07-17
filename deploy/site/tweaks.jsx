// Tweaks panel for the site — accent + background swatches

function SiteTweaks() {
  const { accent, bg, setAccent, setBg } = usePalette();

  const accentEntries = Object.entries(ACCENTS);
  const bgEntries = Object.entries(BACKGROUNDS);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Accent color" />
      <TweakColor
        label="Accent"
        value={ACCENTS[accent].swatch}
        options={accentEntries.map(([, p]) => p.swatch)}
        onChange={(swatch) => {
          const entry = accentEntries.find(([, p]) => p.swatch[0] === swatch[0]);
          if (entry) setAccent(entry[0]);
        }}
      />
      <div style={{
        fontFamily: '"Inter", system-ui, sans-serif', fontSize: 11,
        color: 'rgba(0,0,0,0.55)', padding: '4px 14px 12px', lineHeight: 1.5,
      }}>
        {ACCENTS[accent].label}
      </div>

      <TweakSection label="Background tone" />
      <TweakColor
        label="Background"
        value={BACKGROUNDS[bg].swatch}
        options={bgEntries.map(([, p]) => p.swatch)}
        onChange={(swatch) => {
          const entry = bgEntries.find(([, p]) => p.swatch[0] === swatch[0]);
          if (entry) setBg(entry[0]);
        }}
      />
      <div style={{
        fontFamily: '"Inter", system-ui, sans-serif', fontSize: 11,
        color: 'rgba(0,0,0,0.55)', padding: '4px 14px 12px', lineHeight: 1.5,
      }}>
        {BACKGROUNDS[bg].label} · live across home & contact
      </div>
    </TweaksPanel>
  );
}

Object.assign(window, { SiteTweaks });
