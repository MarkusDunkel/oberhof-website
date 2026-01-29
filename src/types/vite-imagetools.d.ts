/// <reference types="vite/client" />

// matches: ...?as=picture
declare module '*?as=picture' {
  const picture: {
    img: {
      src: string;
      w?: number;
      h?: number;
      width?: number;
      height?: number;
    };
    sources:
      | Record<string, string>
      | Array<{ srcset: string; type?: string; sizes?: string }>;
  };
  export default picture;
}

// matches: ...&as=picture   (your case)
declare module '*&as=picture' {
  const picture: {
    img: {
      src: string;
      w?: number;
      h?: number;
      width?: number;
      height?: number;
    };
    sources:
      | Record<string, string>
      | Array<{ srcset: string; type?: string; sizes?: string }>;
  };
  export default picture;
}
