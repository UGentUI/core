import React from 'react';

const NeutralTransparentColors = () => {
  const transparencies = [100, 300, 500, 700, 900];

  return (
    <div className="neutral-transparent-grid">
      <div className="neutral-transparent-columns">
        <div
          className="neutral-transparent-column-container"
          style={{ backgroundColor: '#f5f5f5', marginRight: '10px' }}
        >
          <div className="neutral-transparent-column" data-color-mode="light">
            {transparencies.map((level) => (
              <div key={level} className="neutral-transparent-swatch-container">
                <div className="checkerboard"></div>
                <div
                  className="neutral-transparent-swatch"
                  style={{
                    backgroundColor: `var(--ug-color-neutral-alpha-${level})`
                  }}
                >
                  <span
                    style={{
                      marginLeft: '10px',
                      fontSize: '12px',
                      color: 'var(--ug-color-neutral-1000)',
                      fontWeight: 'bold'
                    }}
                  >
                    neutral.alpha.{level}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="neutral-transparent-column-container"
          style={{ backgroundColor: 'rgb(34, 36, 37)', marginLeft: '10px' }}
        >
          <div className="neutral-transparent-column" data-color-mode="dark">
            {transparencies.map((level) => (
              <div key={level} className="neutral-transparent-swatch-container">
                <div className="checkerboard dark"></div>
                <div
                  className="neutral-transparent-swatch"
                  style={{
                    backgroundColor: `var(--ug-color-neutral-alpha-${level})`
                  }}
                >
                  <span
                    style={{
                      marginLeft: '10px',
                      fontSize: '12px',
                      color: 'var(--ug-color-neutral-1000)',
                      fontWeight: 'bold'
                    }}
                  >
                    neutral.alpha.dark.{level}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        .neutral-transparent-grid {
          width: 100%;
          margin-top: 15px;
        }
        .neutral-transparent-columns {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
        }
        .neutral-transparent-column {
          display: flex;
          flex-direction: column;
        }
        .neutral-transparent-column-container {
          padding: 50px;
        }
        .neutral-transparent-swatch-container {
          position: relative;
          height: 40px;
          width: 100%;
          overflow: hidden;
        }
        .checkerboard {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(45deg, #ddd 25%, transparent 25%),
            linear-gradient(-45deg, #ddd 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, #ddd 75%),
            linear-gradient(-45deg, transparent 75%, #ddd 75%);
          background-size: 10px 10px;
          background-position: 0 0, 0 5px, 5px -5px, -5px 0;
        }
        .checkerboard.dark {
          background-image: 
            linear-gradient(45deg, #444 25%, transparent 25%),
            linear-gradient(-45deg, #444 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, #444 75%),
            linear-gradient(-45deg, transparent 75%, #444 75%);
        }
        .neutral-transparent-swatch {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          align-items: center;
        }
      `}</style>
    </div>
  );
};

export default NeutralTransparentColors;
