import './grainyBackground.css'; // make sure to create this CSS file

const GrainyBackground = () => {
  return (
    <>
      <div className="grainy-background">
        <div className="blob-cont">
          <div className="yellow blob"></div>
          <div className="red blob"></div>
          <div className="green blob"></div>
        </div>
        <svg className="noise-svg">
          <filter id='noiseFilter'>
            <feTurbulence 
              type='fractalNoise' 
              baseFrequency='0.6' 
              stitchTiles='stitch'/>
            <feColorMatrix type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
            <feComposite operator="in" in2="SourceGraphic" result="monoNoise"/>
            <feBlend in="SourceGraphic" in2="monoNoise" mode="screen" />
          </filter>
        </svg>
      </div>
    </>
  );
};

export default GrainyBackground;