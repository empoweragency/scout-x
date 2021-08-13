import React from "react"
import logo from "./logo.svg"
import * as Styles from "../../components/Footer/Footer.styles"

export const vars_bod = {
  slug: "bod",
  title: "Bucks Online Directory",
  contactEmail: "directory@buckinghamshire.gov.uk",
  contactPhone: "01296 383 293",
  serviceHomepageUrl: "https://directory.buckinghamshire.gov.uk",
  organisation: "Buckinghamshire Council",
  organisationUrl: "https://www.buckinghamshire.gov.uk/",
  tagline: "Find activities, groups and services near you",
  beta: true,
  headerLogo: logo,
  footerNav: (
    <Styles.Nav>
      <Styles.NavLink href="https://familyinfo.buckinghamshire.gov.uk/about/">
        About the Buckinghamshire Online Directory
      </Styles.NavLink>
      <Styles.NavLink href="https://familyinfo.buckinghamshire.gov.uk/accessibility-statement-/">
        Accessibility statement
      </Styles.NavLink>
      <Styles.NavLink href="https://familyinfo.buckinghamshire.gov.uk/privacy-policy/">
        Privacy policy
      </Styles.NavLink>
      <Styles.NavLink href="https://www.buckinghamshire.gov.uk/about/cookies/">
        Cookies
      </Styles.NavLink>
      <Styles.NavLink href="https://familyinfo.buckinghamshire.gov.uk/publiccustomer-disclaimer/">
        Public and customer disclaimer
      </Styles.NavLink>
    </Styles.Nav>
  ),
}

export default vars_bod
