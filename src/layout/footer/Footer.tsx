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
      <Box
        className={styles.footer}
        sx={{
          flexWrap: { xs: "wrap", sm: "nowrap" },
          justifyContent: {
            xs: "space-around",
            sm: "space-around",
            md: "flex-start",
          },
        }}
      >
        <Box
          className={styles.footerColumn + " " + styles.flagmanColumn}
          sx={{
            width: { xs: "100%", sm: "fit-content" },
            marginLeft: { xs: "0", sm: "0", md: "5.703vw", lg: "15.703vw" },
          }}
        >
          <Typography className={styles.companyName}>ДНК-Клиника</Typography>
          <Button className={"secondaryBtn " + styles.contactUsBtn}>
            <Typography className={styles.contactUsTypography}>
              Связаться с нами
            </Typography>
          </Button>
        </Box>
        <Box
          className={styles.footerColumn + " " + styles.sectionsColumn}
          sx={{
            marginLeft: { xs: "0", sm: "0", md: "15.281vw", lg: "15.469vw" },
            marginBottom: { xs: "3.75vh", sm: "0" },
          }}
        >
          {sections.map((section, id) => (
            <Typography key={id} className={styles.section}>
              {section}
            </Typography>
          ))}
        </Box>
        <Box
          className={styles.footerColumn + " " + styles.contactsColumn}
          sx={{
            marginLeft: { xs: "0", sm: "0", md: "15.281vw", lg: "18.281vw" },
            marginBottom: { xs: "3.75vh", sm: "0" },
          }}
        >
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
