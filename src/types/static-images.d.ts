import type { GeneratedPicture } from './images';

declare module '*.jpg' {
  const value: GeneratedPicture;
  export default value;
}

declare module '*.jpeg' {
  const value: GeneratedPicture;
  export default value;
}

declare module '*.png' {
  const value: GeneratedPicture;
  export default value;
}
