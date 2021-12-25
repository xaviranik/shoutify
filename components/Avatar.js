const Avatar = ({ customClass, src, alt }) => {
  return (
    <img
      loading="lazy"
      className={`w-10 h-10 object-cover rounded-full cursor-pointer ${
        customClass ?? ""
      }`}
      src={src ?? `https://i.pravatar.cc/150?img=60`}
      alt={alt ?? "avatar"}
    />
  );
};

export default Avatar;
