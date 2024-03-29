import {
  Card,
  Center,
  Container,
  SimpleGrid,
  Title,
  Text,
  Image,
  Group,
  useMantineTheme,
  Modal,
} from "@mantine/core";
import classes from "./Home.module.css";
import { Variants, motion } from "framer-motion";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";

interface CertificateType {
  src: string;
  label: string;
  badge: string;
  desc: string;
}

const certificate: CertificateType[] = [
  {
    src: "https://kpi.co.id/public/upload/image/iso.png",
    label: "ISO 9001 : 2015",
    badge: "Certificate",
    desc: "Dikeluarkan oleh Bureau Veritas, pada tanggal 24 November 2015 dan berlaku hinggal 15 September 2018",
  },
  {
    src: "https://kpi.co.id/public/upload/image/iso.png",
    label: "ISO 14001 : 2015",
    badge: "Certificate",
    desc: "Dikeluarkan oleh Bureau Veritas, pada tanggal 24 November 2015 dan berlaku hingga 15 September 2018",
  },
  {
    src: "https://kpi.co.id/public/upload/image/ohsas.png",
    label: "OHSAS 18001 : 2007",
    badge: "Certificate",
    desc: "Dikeluarkan oleh Bureau Veritas, pada tanggal 24 November 2015 dan berlaku hingga 24 November 2018",
  },
  {
    src: "https://kpi.co.id/public/upload/image/rci.png",
    label: "Responsible Care Indonesia",
    badge: "Certificate",
    desc: "Ditetapkan oleh Komite Nasional Responsible Care Indonesia (KNRCI) sebagai anggota pada tanggal 01 Januari 2017 dan berlaku hingga 31 Desember 2017",
  },
  {
    src: "https://kpi.co.id/public/upload/image/smk3.png",
    label: "SMK3 2019-2022",
    badge: "Certificate",
    desc: "Dikeluarkan oleh Kementerian Tenaga Kerja dan Transmigrasi RI, tanggal 29 Maret 2019 dan berlaku hingga 29 Maret 2022",
  },
  {
    src: "https://kpi.co.id/public/upload/image/kecelakaan-nihil-prov.png",
    label: "Penghargaan Kecelakaan Nihil Provinsi",
    badge: "Certificate",
    desc: "Dikeluarkan oleh Pemerintah Daerah Provinsi Kalimantan Timur untuk penghargaan nihil kecelakaan dari tanggal 1 Januari 2003 s.d. 10 Desember 2018",
  },
  {
    src: "https://kpi.co.id/public/upload/image/kecelakaan-nihil-nas.png",
    label: "Penghargaan Kecelakaan Nihil Nasional",
    badge: "Certificate",
    desc: "Ditetapkan oleh Komite Nasional Responsible Care Indonesia (KNRCI) sebagai anggota pada tanggal 01 Januari 2017 dan berlaku hingga 31 Desember 2017",
  },
  {
    src: "https://kpi.co.id/public/upload/image/properda_2018_2019.gif",
    label: "Penghargaan PROPERDA 2018 - 2019",
    badge: "Certificate",
    desc: "Untuk periode 2018-2019 Perseroan mendapat peringkat Hijau untuk PROPERDA Kalimantan Timur",
  },
];

const cardVariants: Variants = {
  offscreen: {
    y: 300,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    rotate: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

export default function Certificate() {
  const [opened, { open, close }] = useDisclosure(false);
  const [selectedCertificate, setSelectedCertificate] =
    useState<CertificateType | null>(null);

  const theme = useMantineTheme();

  const items = certificate.map((certif, index) => {
    return (
      <motion.div
        key={index}
        className={`box ${classes.mobileMargin}`}
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0 }}
        variants={cardVariants}
        onClick={() => {
          setSelectedCertificate(certif);
          open();
        }}
      >
        <div>
          <Card shadow="sm" padding="lg" radius="md">
            <Card.Section component="a">
              <Image
                src={certif.src}
                fit="contain"
                alt="Certificate"
                height={160}
              />
            </Card.Section>
            <Group
              justify="space-between"
              mt="md"
              mb="xs"
              style={{ color: theme.colors.green[9] }}
            >
              <Text fw={700}>{certif.label}</Text>
            </Group>
            <div style={{ color: theme.colors.green[9] }}>
              <Text size="sm" c="dimmed">
                {certif.desc}
              </Text>
            </div>
          </Card>
        </div>
      </motion.div>
    );
  });

  return (
    <div>
      <Container size="xl" pt="xl">
        <div>
          <motion.div
            className="card-container"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0 }}
            variants={cardVariants}
          >
            <Center>
              <div style={{ color: theme.colors.green[9] }}>
                <Title className={classes.certificatetitle} ta="center">
                  Sertifikat dan Pencapaian
                </Title>
              </div>
            </Center>
          </motion.div>
          <SimpleGrid
            cols={{ xs: 1, sm: 1, md: 2, lg: 3 }}
            spacing={{ xs: "md", md: "xl" }}
          >
            {items}
          </SimpleGrid>
        </div>
      </Container>
      <Modal
        opened={opened}
        onClose={close}
        centered
        color={theme.colors.green[9]}
      >
        {selectedCertificate && (
          <Image
            src={selectedCertificate.src}
            fit="contain"
            alt="Certificate"
            height={400} // Adjust the height as needed
          />
        )}
      </Modal>
    </div>
  );
}
