import {
  StyledGridItem,
  StyledTitle,
  StyledTitleDescription,
  StyledTitleFAQ,
  StyledWrap,
} from "@/components/Pages/Onboarding/components/FAQ/styled";
import { Container, Grid } from "@mui/material";

export const FAQ = () => {
  return (
    <StyledWrap>
      <Container maxWidth="md">
        <StyledTitle>Questions & Answers</StyledTitle>

        <Grid
          container
          spacing={{ xs: "24px", md: "48px" }}
          rowSpacing={{ xs: "32px" }}
        >
          <Grid item xs={12} sm={6}>
            <StyledTitleFAQ>How does it work?</StyledTitleFAQ>
          </Grid>
          <StyledGridItem item xs={12} sm={6}>
            <StyledTitleDescription>
              Websites are Nostr events, the themes are open-source{" "}
              <a href="https://ghost.org" target="_blank">
                Ghost
              </a>{" "}
              themes published on relays and Blossom servers. Npub.pro does not
              host your data, it only hosts the code to convert Nostr events to
              web pages. The proposed NIP-512 is here.
            </StyledTitleDescription>
          </StyledGridItem>

          <Grid item xs={12}>
            <hr />
          </Grid>

          <Grid item xs={12} sm={6}>
            <StyledTitleFAQ>What is the Web.atl5d CRM</StyledTitleFAQ>
          </Grid>
          <StyledGridItem item xs={12} sm={6}>
            <StyledTitleDescription>
              We use ATL5D Discord as an Atlanta business directly with
              everyone that subscribes managing their own branded channels.
              To start{" "}
              <a href="https://discord.com/servers/atl5d-1244450286337003520">
              Subscribe
              </a>
            </StyledTitleDescription>
          </StyledGridItem>

          <Grid item xs={12}>
            <hr />
          </Grid>

          <Grid item xs={12} sm={6}>
            <StyledTitleFAQ>How do I publish my site?</StyledTitleFAQ>
          </Grid>
          <StyledGridItem item xs={12} sm={6}>
            <StyledTitleDescription>
              You can use any Nostr client to publish, just make sure your post
              matches the filter you&apos;ve set up for your site (kind and
              hashtags). For long-form posts you can use{" "}
              <a href="https://blogstr.atl5d.com" target="_blank">
                Blogstr.atl5d
              </a>{" "}
              or{" "}
              <a href="https://social.atl5d.com" target="_blank">
                Social.atl5d
              </a>
              or{" "}
              <a href="https://highlighter.com" target="_blank">
                Highlighter
              </a>{" "}
              or{" "}
              , for micro-blog -{" "}
              <a href="https://damus.io/" target="_blank">
                Damus
              </a>
              ,{" "}
              <a href="https://amethyst.social/" target="_blank">
                Amethyst
              </a>
              ,{" "}
              <a href="https://primal.net" target="_blank">
                Primal
              </a>{" "}
              or almost any other Nostr app.
            </StyledTitleDescription>
          </StyledGridItem>

          <Grid item xs={12}>
            <hr />
          </Grid>

          <Grid item xs={12} sm={6}>
            <StyledTitleFAQ>Is it censorship resistant?</StyledTitleFAQ>
          </Grid>
          <StyledGridItem item xs={12} sm={6}>
            <StyledTitleDescription>
              The Web.atl5d website engine follows the outbox model, which means
              that if some relay blocks your events and you change your relay
              list, your website will fetch events from your new relays. We are
              making sure that your Nostr site is as robust as your Nostr
              profile.
            </StyledTitleDescription>
          </StyledGridItem>

          <Grid item xs={12}>
            <hr />
          </Grid>

          <Grid item xs={12} sm={6}>
            <StyledTitleFAQ>Is Web.atl5d website free?</StyledTitleFAQ>
          </Grid>
          <StyledGridItem item xs={12} sm={6}>
            <StyledTitleDescription>
              We will host your website for free on <em>your-name</em>.npub.pro
              address. If you want to attach a custom domain and get other
              benefits, you can switch to a <a href="#pro">Pro plan</a>.
            </StyledTitleDescription>
          </StyledGridItem>

          <Grid item xs={12}>
            <hr />
          </Grid>

          {/* <Grid item xs={12} sm={6}>
            <StyledTitleFAQ>What does “npub” mean?</StyledTitleFAQ>
          </Grid>
          <StyledGridItem item xs={12} sm={6}>
            <StyledTitleDescription>
              “npub” is an abbreviation for “nostr public key”, nostr being the
              protocol that is home to your social identity, and the public key
              being your public identity. It helps to visualize this as a
              username handle that everyone can find you by.
            </StyledTitleDescription>
          </StyledGridItem>

          <Grid item xs={12}>
            <hr />
          </Grid> */}
        </Grid>
      </Container>
    </StyledWrap>
  );
};
