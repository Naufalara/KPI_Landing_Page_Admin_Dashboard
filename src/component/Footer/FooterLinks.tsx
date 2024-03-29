import {
  Text,
  Container,
  ActionIcon,
  Group,
  rem,
  Flex,
  Center,
  Space,
  SimpleGrid,
  em,
} from "@mantine/core";
import {
  IconBrandYoutube,
  IconBrandInstagram,
  IconPhone,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import kpiLogo from "../../../public/kpi_logo.png";
import classes from "./FooterLinks.module.css";
import { useMediaQuery } from "@mantine/hooks";

export function FooterLinks() {
  const ismobile = useMediaQuery(`(max-width: ${em(750)})`);

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <Flex justify={ismobile ? "center" : "flex-start"}>
          <div className={classes.logo}>
            <div style={{ display: "flex" }}>
              <Center inline>
                <img src={kpiLogo} alt="KPI Logo" style={{ width: "32px" }} />
                <Text
                  c="dimmed"
                  className={classes.logotext}
                  style={{ marginLeft: "10px" }}
                  size="sm"
                >
                  PT KALTIM PARNA INDUSTRI
                </Text>
              </Center>
            </div>
          </div>
        </Flex>

        <div>
          <Space h="md" />
          <SimpleGrid cols={ismobile ? 1 : 2}>
            <div>
              <Center>
                <Text fw={500} size="xs" c="dimmed">
                  Head Office & Plant
                </Text>
              </Center>

              {/* Graha Parna */}
              <Text
                size="xs"
                c="dimmed"
                fw={700}
                className={classes.description}
              >
                Graha Parna
              </Text>
              <Text size="xs" c="dimmed" className={classes.description}>
                Jalan NPK Pelangi RT.52 Kelurahan Loktuan Kecamatan Bontang
                Utara Kota Bontang 75314 Kalimantan Timur
              </Text>
              <Flex justify={ismobile ? "center" : "flex-start"}>
                <Center>
                  <IconPhone size="1rem" stroke={1.5} />
                  <Space w="xs" />
                  <Text size="xs" c="dimmed" className={classes.phonenumber}>
                    [+62-548] 41717
                  </Text>
                </Center>
              </Flex>

              {/* Plant */}
              <Text
                size="xs"
                c="dimmed"
                fw={700}
                className={classes.description}
              >
                Plant
              </Text>
              <Text size="xs" c="dimmed" className={classes.description}>
                Kawasan Industri PT Kaltim Industrial Estate Guntung, Bontang
                Utara, Kota Bontang 75314 Bontang, Kalimantan Timur
              </Text>
              <Flex justify={ismobile ? "center" : "flex-start"}>
                <Center>
                  <IconPhone size="1rem" stroke={1.5} />
                  <Space w="xs" />
                  <Text size="xs" c="dimmed" className={classes.phonenumber}>
                    [+62-548] 41091-2
                  </Text>
                </Center>
              </Flex>
            </div>

            <div>
              <Center>
                <Text fw={500} size="xs" c="dimmed">
                  Representative Office
                </Text>
              </Center>
              <Text
                size="xs"
                c="dimmed"
                fw={700}
                className={classes.description}
              >
                Menara Imperium 10th Floor
              </Text>
              <Text size="xs" c="dimmed" className={classes.description}>
                Metropolitan Kuningan Superblock Jl. H.R Rasuna Said kav.1
                Jakarta Selatan 12980
              </Text>
              <Flex justify={ismobile ? "center" : "flex-start"}>
                <Center>
                  <IconPhone size="1rem" stroke={1.5} />
                  <Space w="xs" />
                  <Text size="xs" c="dimmed" className={classes.phonenumber}>
                    [+62-21] 8354081
                  </Text>
                </Center>
              </Flex>
            </div>
          </SimpleGrid>
        </div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          © 2024 All rights reserved.
        </Text>

        <Group
          gap={0}
          className={classes.social}
          justify="flex-end"
          wrap="nowrap"
        >
          <a
            href="https://www.instagram.com/ptkpi_id/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ActionIcon size={ismobile ? 50 : 60} color="gray" variant="subtle">
              <IconBrandInstagram
                style={{
                  width: rem(ismobile ? 40 : 40),
                  height: rem(ismobile ? 40 : 40),
                }}
                stroke={1.5}
              />
            </ActionIcon>
          </a>
          <a
            href="https://www.linkedin.com/company/pt-kaltim-parna-industri/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ActionIcon size={ismobile ? 50 : 60} color="gray" variant="subtle">
              <IconBrandLinkedin
                style={{
                  width: rem(ismobile ? 40 : 40),
                  height: rem(ismobile ? 40 : 40),
                }}
                stroke={1.5}
              />
            </ActionIcon>
          </a>
          <a
            href="https://www.youtube.com/channel/UCBIW_34hXxve6QgQyL-dogQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ActionIcon size={ismobile ? 50 : 60} color="gray" variant="subtle">
              <IconBrandYoutube
                style={{
                  width: rem(ismobile ? 40 : 40),
                  height: rem(ismobile ? 40 : 40),
                }}
                stroke={1.5}
              />
            </ActionIcon>
          </a>
        </Group>
      </Container>
    </footer>
  );
}
