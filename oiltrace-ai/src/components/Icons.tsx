import React from "react";

interface IconProps {
  size?: number;
  color?: string;
  className?: string;
}

export const LogoIcon: React.FC<IconProps> = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Oil Drum Symbol inside Cargo Hull */}
    <path d="M4 18L7 26H25L28 18H4Z" stroke={color} strokeWidth="2.2" strokeLinejoin="round" />
    <path d="M7 26C7 26 11 29 16 29C21 29 25 26 25 26" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <path d="M11 6C11 4.89543 13.2386 4 16 4C18.7614 4 21 4.89543 21 6V15C21 16.1046 18.7614 17 16 17C13.2386 17 11 16.1046 11 15V6Z" fill={color} fillOpacity="0.2" stroke={color} strokeWidth="2" />
    <ellipse cx="16" cy="6" rx="5" ry="2" stroke={color} strokeWidth="1.8" />
    <path d="M11 10.5C11 11.6046 13.2386 12.5 16 12.5C18.7614 12.5 21 11.6046 21 10.5" stroke={color} strokeWidth="1.5" />
    <line x1="16" y1="18" x2="16" y2="23" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const SatelliteIcon: React.FC<IconProps> = ({ size = 18, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 7 9 3 5 7l4 4" />
    <path d="m17 11 4 4-4 4-4-4" />
    <path d="m8 12 4 4" />
    <path d="m11 9 4 4" />
    <path d="M13 13 4 22" />
    <path d="M18 18h.01" />
  </svg>
);

export const OilDrumIcon: React.FC<IconProps> = ({ size = 18, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="8" ry="3" />
    <path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
    <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
  </svg>
);

export const LocationIcon: React.FC<IconProps> = ({ size = 18, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-10a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const ClockIcon: React.FC<IconProps> = ({ size = 18, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

export const VesselIcon: React.FC<IconProps> = ({ size = 18, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
    <path d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76" />
    <path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6" />
    <line x1="12" y1="2" x2="12" y2="5" />
  </svg>
);

export const SignalIcon: React.FC<IconProps> = ({ size = 18, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 20h.01" />
    <path d="M7 20v-4" />
    <path d="M12 20v-8" />
    <path d="M17 20v-12" />
    <path d="M22 20V4" />
  </svg>
);

export const ChartIcon: React.FC<IconProps> = ({ size = 18, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3v18h18" />
    <path d="m19 9-5 5-4-4-3 3" />
  </svg>
);

export const ZapIcon: React.FC<IconProps> = ({ size = 18, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

export const WindIcon: React.FC<IconProps> = ({ size = 18, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
    <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
    <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
  </svg>
);