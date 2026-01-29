export type GeneratedPicture = {
  sources: Record<string, string>;
  img: {
    src: string;
    w?: number;
    h?: number;
  };
};

export type SmartImageSource = GeneratedPicture | string;
