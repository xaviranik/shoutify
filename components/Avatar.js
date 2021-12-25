const Avatar = ({ customClass, src, size, alt }) => {
  let dimensions = size ? `w-${size} h-${size}` : "w-8 h-8";

  return (
    <img
      loading="lazy"
      className={`${dimensions} object-cover rounded-full cursor-pointer ${
        customClass ?? ""
      }`}
      src={src ?? `https://i.pravatar.cc/150?img=60`}
      alt={alt ?? "avatar"}
    />
  );
};

export default Avatar;
