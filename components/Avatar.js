const Avatar = ({ customClass, src }) => {
  return (
    <div>
      <img
        className={`h-8 rounded-full cursor-pointer ${customClass}`}
        src={src ?? `https://i.pravatar.cc/150?img=60`}
        alt="Avatar"
      />
    </div>
  );
};

export default Avatar;
