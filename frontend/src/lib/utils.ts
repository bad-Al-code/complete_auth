export const requirements = [
  { label: "At least 6 characters", re: /.{6,}/ },
  { label: "At least one uppercase letter", re: /[A-Z]/ },
  { label: "At least one lowercase letter", re: /[a-z]/ },
  { label: "At least one number", re: /\d/ },
  { label: "At least one special character", re: /[!@#$%^&*(),.?":{}|<>]/ },
];

export const getStrength = (password: string): number => {
  let strength = 0;
  if (/.{6,}/.test(password)) strength += 25;
  if (/[A-Z]/.test(password)) strength += 25;
  if (/[a-z]/.test(password)) strength += 25;
  if (/\d/.test(password)) strength += 25;
  if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength += 25;
  return strength > 100 ? 100 : strength;
};

export const getStrengthColor = (strength: number): string => {
  if (strength >= 75) return "bg-green-500";
  if (strength >= 50) return "bg-yellow-500";
  return "bg-red-500";
};
