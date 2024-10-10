import { Group, Progress, Text, Stack } from "@mantine/core";

const requirements = [
  { re: /[0-9]/, label: "Includes number" },
  { re: /[a-z]/, label: "Includes lowercase letter" },
  { re: /[A-Z]/, label: "Includes uppercase letter" },
  { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: "Includes special symbol" },
];

function getStrength(password) {
  let multiplier = password.length > 5 ? 0 : 1;

  requirements.forEach((requirement) => {
    if (!requirement.re.test(password)) {
      multiplier += 1;
    }
  });

  return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 10);
}

function getStrengthColor(strength) {
  switch (true) {
    case strength < 30:
      return "red";
    case strength < 50:
      return "orange";
    case strength < 70:
      return "yellow";
    default:
      return "teal";
  }
}

export function PasswordStrength({ value }) {
  const strength = getStrength(value);
  const color = getStrengthColor(strength);

  return (
    <div>
      <Group grow gap={5} mt="xs">
        <Progress
          size="xs"
          color={color}
          value={value.length > 0 ? 100 : 0}
          transitionDuration={0}
        />
        <Progress
          size="xs"
          color={color}
          transitionDuration={0}
          value={strength < 30 ? 0 : 100}
        />
        <Progress
          size="xs"
          color={color}
          transitionDuration={0}
          value={strength < 50 ? 0 : 100}
        />
        <Progress
          size="xs"
          color={color}
          transitionDuration={0}
          value={strength < 70 ? 0 : 100}
        />
      </Group>

      <Stack spacing="xs" mt="xs">
        {requirements.map((requirement, index) => {
          const isFulfilled = requirement.re.test(value);
          return (
            <Text
              key={index}
              color={isFulfilled ? "green" : "gray"}
              size="sm"
              style={{ display: "flex", alignItems: "center" }}
            >
              {isFulfilled ? "✓" : "✗"}
              <span style={{ marginLeft: "5px" }}>{requirement.label}</span>
            </Text>
          );
        })}
      </Stack>
    </div>
  );
}
