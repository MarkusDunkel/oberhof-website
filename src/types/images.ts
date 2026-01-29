export type PictureSourceRecord = Record<string, string>;

export type PictureSourceArray = Array<{
  type?: string | null;
  srcset: string;
  sizes?: string;
}>;

type GeneratedImageMeta = {
  src: string;
  w?: number;
  h?: number;
  width?: number;
  height?: number;
};

export type GeneratedPicture = {
  sources: PictureSourceArray | PictureSourceRecord;
  img: GeneratedImageMeta;
};

export type SmartImageSource = GeneratedPicture | string;
