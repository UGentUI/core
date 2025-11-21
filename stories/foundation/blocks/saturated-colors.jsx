import React from 'react';

const ColorGrid = () => {
  const colorGroups = {
    primary: {
      name: 'ugent-blue',
      shades: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
      contrast: 600
    },
    warning: {
      name: 'ugent-yellow',
      shades: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
      contrast: 900
    },
    success: {
      name: 'mint',
      shades: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
      contrast: 800
    },
    danger: {
      name: 'tomato',
      shades: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
      contrast: 700
    }
  };

  return (
    <div className="color-grid">
      {Object.entries(colorGroups).map(([key, group]) => (
        <div key={key} className="color-group">
          <div className="color-column">
            {group.shades.map((shade) => (
              <div
                key={shade}
                className="color-swatch"
                style={{
                  backgroundColor: `var(--ug-color-${key}-${shade})`,
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  width: '100%'
                }}
              >
                <span
                  style={{
                    marginLeft: '10px',
                    fontSize: '12px',
                    color:
                      shade >= group.contrast
                        ? 'var(--ug-color-neutral-0)'
                        : 'var(--ug-color-neutral-1000)',
                    fontWeight: 'bold'
                  }}
                >
                  {group.name}.{shade}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
      <style>{`
        .color-grid {
          display: grid;
          grid-template-columns: repeat(${Object.keys(colorGroups).length}, 1fr);
          width: 100%;
          gap: 10px;
          margin-top: 15px;
        }
        .color-group {
          display: flex;
          flex-direction: column;
        }
        .color-column {
          display: flex;
          flex-direction: column;
        }
        .color-swatch {
          box-shadow: none !important;
        }
      `}</style>
    </div>
  );
};

export default ColorGrid;
