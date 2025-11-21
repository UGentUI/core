import React from 'react';

const NeutralColorGrid = () => {
  const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

  return (
    <div className="neutral-color-grid">
      <div className="neutral-color-columns">
        <div
          className="neutral-color-column-container"
          style={{ backgroundColor: '#f5f5f5', marginRight: '10px' }}
        >
          <div className="neutral-color-column" data-color-mode="light">
            {shades.map((shade) => (
              <div
                key={shade}
                className="neutral-color-swatch"
                style={{
                  backgroundColor: `var(--ug-color-neutral-${shade})`,
                  height: '30px',
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
                      shade <= 600
                        ? 'var(--ug-color-neutral-1000)'
                        : 'var(--ug-color-neutral-0)',
                    fontWeight: 'bold'
                  }}
                >
                  neutral.{shade}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div
          className="neutral-color-column-container"
          style={{
            backgroundColor: 'rgb(34, 36, 37)',
            marginLeft: '10px'
          }}
        >
          <div className="neutral-color-column" data-color-mode="dark">
            {shades.map((shade) => (
              <div
                key={shade}
                className="neutral-color-swatch"
                style={{
                  backgroundColor: `var(--ug-color-neutral-${shade})`,
                  height: '30px',
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
                      shade <= 400
                        ? 'var(--ug-color-neutral-1000)'
                        : 'var(--ug-color-neutral-0)',
                    fontWeight: 'bold'
                  }}
                >
                  neutral.dark.{shade}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        .neutral-color-grid {
          width: 100%;
          margin-top: 15px;
        }
        .neutral-color-columns {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
        }
        .neutral-color-column {
          display: flex;
          flex-direction: column;
        }
        .neutral-color-column-container {
          padding: 50px;
        }
      `}</style>
    </div>
  );
};

export default NeutralColorGrid;
