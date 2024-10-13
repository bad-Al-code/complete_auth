export interface Requirement {
  re: RegExp;
  label: string;
}

export const requirements: Requirement[] = [
  { re: /[0-9]/, label: "Includes number" },
  { re: /[a-z]/, label: "Includes lowercase letter" },
  { re: /[A-Z]/, label: "Includes uppercase letter" },
  { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: "Includes special symbol" },
];

export function getStrength(password: string): number {
  let strength = 0;

  if (password.length >= 6) {
    strength += 20;
  }

  requirements.forEach((requirement) => {
    if (requirement.re.test(password)) {
      strength += 20;
    }
  });

  return Math.min(strength, 100);
}

export function getStrengthColor(strength: number): string {
  switch (true) {
    case strength < 30:
      return "bg-red-500";
    case strength < 50:
      return "bg-orange-500";
    case strength < 70:
      return "bg-yellow-500";
    default:
      return "bg-green-500";
  }
}
