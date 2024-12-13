interface ImageClipBoxProps {
  src: string;
  clipClass?: string;
}
const ImageClipBox = ({ src, clipClass = "" }: ImageClipBoxProps) => (
    <div className={clipClass}>
      <img src={src} />
    </div>
  );

  export default ImageClipBox