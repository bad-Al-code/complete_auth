import {
  Paper,
  Title,
  Text,
  TextInput,
  Button,
  Container,
  Group,
  Anchor,
  Center,
  Box,
} from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { useForm } from "@mantine/form";

export function ForgotPassword() {
  const form = useForm({
    initialValues: {
      email: "",
    },

    validate: {
      email: (value) =>
        /^\S+@\S+$/.test(value) ? null : "Invalid email address",
    },
  });

  const handleSubmit = (values) => {
    console.log("Reset link sent to:", values.email);
  };

  return (
    <Container size={460} my={30}>
      <Title className="text-center text-3xl font-bold">
        Forgot your password?
      </Title>
      <Text className="text-gray-500 text-sm text-center">
        Enter your email to get a reset link
      </Text>

      <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
        <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
          <TextInput
            label="Your email"
            placeholder="email@email.com"
            required
            {...form.getInputProps("email")}
          />
          <Group justify="space-between" mt="lg">
            <Anchor className="text-gray-500 text-sm" size="sm">
              <Center inline>
                <IconArrowLeft
                  style={{ width: "1rem", height: "1rem" }}
                  stroke={1.5}
                />
                <Box ml={5}>Back to the login page</Box>
              </Center>
            </Anchor>
            <Button type="submit" className="bg-blue-600 text-white">
              Reset password
            </Button>
          </Group>
        </form>
      </Paper>
    </Container>
  );
}
