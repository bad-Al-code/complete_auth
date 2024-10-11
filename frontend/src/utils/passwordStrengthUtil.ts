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
  if (password.length < 5) {
    return 10;
  }

  let multiplier = password.length > 5 ? 0 : 1;

  requirements.forEach((requirement) => {
    if (!requirement.re.test(password)) {
      multiplier += 1;
    }
  });

  return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 10);
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
