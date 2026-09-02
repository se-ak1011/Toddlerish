import { Image, type ImageStyle, type StyleProp } from 'react-native';

import type { PoseKey } from '@/lib/mascot';

// Static requires so Metro can bundle each pose. Swap these files in place —
// /assets/mascot/{pose}.png — to re-skin Elena without touching this map.
const POSES: Record<PoseKey, number> = {
  wave: require('../assets/mascot/wave.png'),
  eat: require('../assets/mascot/eat.png'),
  blocks: require('../assets/mascot/blocks.png'),
  bunny: require('../assets/mascot/bunny.png'),
  crawl: require('../assets/mascot/crawl.png'),
  point: require('../assets/mascot/point.png'),
  sippy: require('../assets/mascot/sippy.png'),
  teddy: require('../assets/mascot/teddy.png'),
  calm: require('../assets/mascot/calm.png'),
};

type MascotProps = {
  pose: PoseKey;
  size?: number;
  style?: StyleProp<ImageStyle>;
};

export function Mascot({ pose, size = 96, style }: MascotProps) {
  return (
    <Image
      source={POSES[pose]}
      accessibilityIgnoresInvertColors
      style={[{ width: size, height: size, borderRadius: size / 2 }, style]}
      resizeMode="cover"
    />
  );
}
