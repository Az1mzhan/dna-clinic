import { FC } from "react";
import { Box, Button, Typography } from "@mui/material";
import handset from "../../assets/handset.svg";
import mail from "../../assets/mail.svg";
import instagram from "../../assets/instagram.svg";
import styles from "./footer.module.css";

export const Footer: FC = () => {
  const sections = ["О нас", "Услуги", "Контакты"];
  const contacts = [
    {
      info: "+7 700 000 0000",
      icon: handset,
    },
    {
      info: "info@mail.ru",
      icon: mail,
    },
    {
      info: "@неизвестно",
      icon: instagram,
    },
  ];

  return (
    <>
      <Box className={styles.footer}>
        <Box className={styles.footerColumn + " " + styles.flagmanColumn}>
          <Typography className={styles.companyName} variant="h4">
            ДНК-Клиника
          </Typography>
          <Button className={"secondaryBtn " + styles.contactUsBtn}>
            <Typography className={styles.contactUsTypography}>
              Связаться с нами
            </Typography>
          </Button>
        </Box>
        <Box className={styles.footerColumn}>
          {sections.map((section, id) => (
            <Typography key={id} className={styles.section}>
              {section}
            </Typography>
          ))}
        </Box>
        <Box className={styles.footerColumn}>
          {contacts.map((contact, id) => (
            <Box key={id} className={styles.contactRow}>
              <img src={contact.icon} />
              <Typography className={styles.contactInfo}>
                {contact.info}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};
