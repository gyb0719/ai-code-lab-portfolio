interface KakaoIconProps {
  className?: string;
  size?: number;
}

export default function KakaoIcon({ className = "", size = 20 }: KakaoIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 3C6.477 3 2 6.5 2 10.75c0 2.755 1.892 5.177 4.745 6.52-.206.863-.745 3.088-.85 3.57-.132.598.22.587.463.427.19-.126 3.037-2.024 4.267-2.838.45.063.91.096 1.375.096 5.523 0 10-3.5 10-7.775S17.523 3 12 3z" />
    </svg>
  );
}