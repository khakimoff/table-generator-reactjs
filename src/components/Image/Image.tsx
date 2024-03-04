interface ImageProps {
  src: string;
  alt: string | undefined;
  height?: number | string;
}

export const Image = ({ src, alt, height }: ImageProps) => {
  return (
    <>
      <img src={src} alt={alt} height={height} />
    </>
  );
};
