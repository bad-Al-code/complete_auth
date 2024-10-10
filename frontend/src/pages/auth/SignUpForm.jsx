import { useToggle, upperFirst } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  Button,
  Divider,
  Checkbox,
  Anchor,
  Stack,
} from "@mantine/core";

import { GoogleButton } from "../../components/GoogleButton";
import { TwitterButton } from "../../components/TwitterButton";
import { PasswordStrength } from "../../components/PasswordStrngth";

export function SignUpForm(props) {
  const [type, toggle] = useToggle(["login", "register"]);
  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      password: "",
      terms: true,
    },

    validate: {
      email: (val) =>
        /^\S+@\S+$/.test(val) ? null : "Please enter a valid email address",
      password: (val) =>
        val.length < 6 ? "Password must contain at least 6 characters" : null,
    },
  });

  const handleSubmit = (values) => {
    if (type === "register") {
      console.log("Registering with values:", values);
    } else {
      console.log("Logging in with values:", values);
    }
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <Paper
        radius="md"
        p="xl"
        withBorder
        style={{
          maxWidth: "500px",
          width: "100%",
        }}
        {...props}
      >
        <Text size="lg" fw={500}>
          {type === "register"
            ? "Create Your Account and Join the Community"
            : "Welcome Back! Log in to Your Account"}
        </Text>

        <Group grow mb="md" mt="md">
          <GoogleButton radius="xl">Continue with Google</GoogleButton>
          <TwitterButton radius="xl">Continue with Twitter</TwitterButton>
        </Group>

        <Divider label="Or use your email" labelPosition="center" my="lg" />

        <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
          <Stack>
            {type === "register" && (
              <TextInput
                label="Full Name"
                placeholder="Enter your full name"
                value={form.values.name}
                onChange={(event) =>
                  form.setFieldValue("name", event.currentTarget.value)
                }
                radius="md"
              />
            )}

            <TextInput
              required
              label="Email Address"
              placeholder="Enter your email address"
              value={form.values.email}
              onChange={(event) =>
                form.setFieldValue("email", event.currentTarget.value)
              }
              error={form.errors.email && "Please enter a valid email address"}
              radius="md"
            />

            <PasswordInput
              required
              label="Password"
              placeholder="Create a password"
              value={form.values.password}
              onChange={(event) =>
                form.setFieldValue("password", event.currentTarget.value)
              }
              error={
                form.errors.password &&
                "Password must contain at least 6 characters"
              }
              radius="md"
            />

            {/* Integrate PasswordStrength component here */}
            {type === "register" && (
              <PasswordStrength value={form.values.password} />
            )}

            {type === "register" && (
              <Checkbox
                label="I agree to the terms and conditions"
                checked={form.values.terms}
                onChange={(event) =>
                  form.setFieldValue("terms", event.currentTarget.checked)
                }
              />
            )}
          </Stack>

          <Group justify="space-between" mt="xl">
            <Anchor
              component="button"
              type="button"
              c="dimmed"
              onClick={() => toggle()}
              size="xs"
            >
              {type === "register"
                ? "Already have an account? Log in"
                : "Don't have an account? Sign up"}
            </Anchor>
            <Button type="submit" radius="xl">
              {upperFirst(type)}
            </Button>
          </Group>
        </form>
      </Paper>
    </div>
  );
}
