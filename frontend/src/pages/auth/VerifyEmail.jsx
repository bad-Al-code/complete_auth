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
  Transition,
} from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { useForm } from "@mantine/form";
import { useState } from "react";

export function VerifyEmail() {
  const [showSuccess, setShowSuccess] = useState(false); // State to control the transition
  const form = useForm({
    initialValues: {
      otp: "",
    },

    validate: {
      otp: (val) => (val.length === 6 ? null : "OTP must be 6 digits long"),
    },
  });

  const handleSubmit = (values) => {
    console.log("OTP", values.otp);
    // Show success animation if OTP is valid
    if (values.otp.length === 6) {
      setShowSuccess(true);
    }
  };

  return (
    <Container size={460} my={30}>
      <Title className="text-center text-3xl font-bold">
        Check your email for the OTP
      </Title>
      <Text className="text-gray-500 text-sm text-center">Enter OTP</Text>

      <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
        <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
          <TextInput label="OTP" required {...form.getInputProps("otp")} />
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
              Submit
            </Button>
          </Group>
        </form>

        <Transition transition="fade-up" mounted={showSuccess}>
          {(styles) => (
            <Text style={styles} mt="md" color="green" align="center">
              OTP Verified Successfully!
            </Text>
          )}
        </Transition>
      </Paper>
    </Container>
  );
}
