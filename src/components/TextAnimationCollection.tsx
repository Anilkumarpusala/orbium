import React, { useMemo } from 'react';
import creatorStudioIntroSource from '../shaders/neuform-isolated/sources/creator-studio-intro.html?raw';

export interface TextAnimationCollectionProps {
  variant?: 'threeui-intro' | 'particle-wordmark' | 'audio-wordmark';
  brightness?: number | string;
  hue?: number | string;
  saturation?: number | string;
  mode?: 'light' | 'dark';
  className?: string;
}

export const TextAnimationCollection: React.FC<TextAnimationCollectionProps> = ({
  brightness = 1.0,
  hue = 0,
  saturation = 1.0,
  mode = 'dark',
  className = '',
}) => {
  const bVal = typeof brightness === 'string' ? parseFloat(brightness) || 1.0 : brightness;
  const hVal = typeof hue === 'string' ? parseFloat(hue) || 0 : hue;
  const sVal = typeof saturation === 'string' ? parseFloat(saturation) || 1.0 : saturation;

  const filterStyle = useMemo(() => {
    const filters: string[] = [];
    if (bVal !== 1.0) filters.push(`brightness(${bVal})`);
    if (hVal !== 0) filters.push(`hue-rotate(${hVal}deg)`);
    if (sVal !== 1.0) filters.push(`saturate(${sVal})`);
    return filters.join(' ');
  }, [bVal, hVal, sVal]);

  return (
    <div className={`relative w-full h-full overflow-hidden flex items-center justify-center ${className}`}>
      <iframe
        title="ORBIUM Signature Kinetic Wordmark"
        srcDoc={creatorStudioIntroSource}
        sandbox="allow-scripts allow-same-origin"
        loading="eager"
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
          border: 0,
          background: 'transparent',
          filter: filterStyle || undefined,
          pointerEvents: 'none',
        }}
      />
    </div>
  );
};

export default TextAnimationCollection;
