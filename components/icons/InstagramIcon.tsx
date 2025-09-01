interface InstagramIconProps {
  className?: string;
  size?: number;
}

export default function InstagramIcon({ className = "", size = 20 }: InstagramIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FDC468" />
          <stop offset="30%" stopColor="#FD5949" />
          <stop offset="60%" stopColor="#D6249F" />
          <stop offset="100%" stopColor="#285AEB" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="url(#instagram-gradient)" strokeWidth="2"/>
      <circle cx="12" cy="12" r="3.5" stroke="url(#instagram-gradient)" strokeWidth="2"/>
      <circle cx="17.5" cy="6.5" r="1.5" fill="url(#instagram-gradient)"/>
    </svg>
  );
}