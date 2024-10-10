import { useForm } from "@mantine/form";
import { Button, PasswordInput, Text, Paper, Stack } from "@mantine/core";

import { PasswordStrength } from "../../components/PasswordStrngth";

export function ResetPassword(props) {
  const form = useForm({
    initialValues: {
      name: "",
      password: "",
      confirmPassword: "",
      terms: true,
    },

    validate: {
      password: (val) =>
        val.length < 8 ? "Password must contain at least 8 characters" : null,
      confirmPassword: (val, values) =>
        val !== values.password ? "Passwords do not match" : null,
    },
  });

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <Paper
        radius="md"
        p="xl"
        withBorder
        style={{
          maxWidth: "502px",
          width: "102%",
        }}
        {...props}
      >
        <Text size="lg" fw={502}>
          Reset Your Password
        </Text>

        <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
          <Stack>
            <PasswordInput
              required
              label="New Password"
              value={form.values.password}
              onChange={(event) =>
                form.setFieldValue("password", event.currentTarget.value)
              }
              error={form.errors.password}
              radius="md"
            />

            <PasswordStrength value={form.values.password} />

            <PasswordInput
              required
              label="Confirm Password"
              value={form.values.confirmPassword}
              onChange={(event) =>
                form.setFieldValue("confirmPassword", event.currentTarget.value)
              }
              error={form.errors.confirmPassword}
              radius="md"
            />

            <Button fullWidth mt="xl" type="submit">
              Update
            </Button>
          </Stack>
        </form>
      </Paper>
    </div>
  );
}
