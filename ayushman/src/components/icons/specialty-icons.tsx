import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export function GeneralSurgeryIcon({ size = 48, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M48 18L54 24L26 52L14 54L16 42L44 14L48 18Z"
        fill="currentColor" fillOpacity="0.12"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M44 14L48 10C49.5 8.5 52 8.5 53.5 10L57.5 14C59 15.5 59 18 57.5 19.5L54 23L44 14Z"
        fill="currentColor" fillOpacity="0.35"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M12 56H52"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M16 42L22 36C24 34 27 34 29 36L34 41C36 43 36 46 34 48L32 50"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function GastroenterologyIcon({ size = 48, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Stomach Outline */}
      <path
        d="M26 12C26 12 36 12 36 20C36 26 44 26 46 34C48 42 42 50 32 50C22 50 18 42 20 34C22 26 26 24 26 12Z"
        fill="currentColor" fillOpacity="0.12"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Esophagus / Intestine lines */}
      <path
        d="M26 12V22"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M32 50V56"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M26 34C28 36 34 36 36 34"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function UrologyIcon({ size = 48, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M20 20C16 20 14 24 14 28C14 34 20 36 22 32C24 28 22 20 20 20Z"
        fill="currentColor" fillOpacity="0.12"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <path
        d="M44 20C48 20 50 24 50 28C50 34 44 36 42 32C40 28 42 20 44 20Z"
        fill="currentColor" fillOpacity="0.12"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <path
        d="M21 32C21 40 28 44 28 50V54"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M43 32C43 40 36 44 36 50V54"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M26 50C26 46 38 46 38 50C38 54 26 54 26 50Z"
        fill="currentColor" fillOpacity="0.35"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

export function GynecologyIcon({ size = 48, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <circle
        cx="32"
        cy="24"
        r="14"
        fill="currentColor" fillOpacity="0.12"
        stroke="currentColor"
        strokeWidth="3"
      />
      <path
        d="M32 38V54"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M24 46H40"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function OrthopedicsIcon({ size = 48, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Bone Joint Icon */}
      <path
        d="M18 16C15 16 13 18 14 21C15 24 18 24 20 22L42 44C40 46 40 49 43 50C46 51 48 49 48 46C48 43 45 42 42 44L20 22C22 20 21 16 18 16Z"
        fill="currentColor" fillOpacity="0.12"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="20" cy="20" r="4" fill="currentColor" fillOpacity="0.35" stroke="currentColor" strokeWidth="2" />
      <circle cx="44" cy="44" r="4" fill="currentColor" fillOpacity="0.35" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function ENTIcon({ size = 48, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M22 52V42C22 36 26 30 30 26C28 22 28 16 34 12C40 8 48 12 48 20C48 26 44 30 42 34C44 40 44 48 42 52"
        fill="currentColor" fillOpacity="0.12"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M38 22C36 22 34 24 34 27C34 30 37 32 37 34"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M28 36C30 38 34 42 34 48"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ProctologyIcon({ size = 48, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Lower colon / intestine care icon */}
      <path
        d="M20 16C20 16 20 28 32 28C44 28 44 40 44 48"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M44 16C44 16 44 28 32 28C20 28 20 40 20 48"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="32" cy="28" r="7" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function OncologyIcon({ size = 48, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Awareness Ribbon / Shield Symbol */}
      <path
        d="M32 12C24 12 20 20 26 30L32 40L38 30C44 20 40 12 32 12Z"
        fill="currentColor" fillOpacity="0.12"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M24 44L18 52"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M40 44L46 52"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="32" cy="22" r="3.5" fill="currentColor" fillOpacity="0.35" />
    </svg>
  );
}

export function CardiologyIcon({ size = 48, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Heart Outline */}
      <path
        d="M32 52C32 52 14 38 14 24C14 17 19 12 26 12C30 12 32 15 32 15C32 15 34 12 38 12C45 12 50 17 50 24C50 38 32 52 32 52Z"
        fill="currentColor" fillOpacity="0.12"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* ECG Pulse Wave */}
      <path
        d="M18 28H25L28 20L32 36L36 24L39 28H46"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
