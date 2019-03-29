import styled from "styled-components"
import { styles } from "../utils"

const BannerButton = styled.button`
  display: block;
  color: ${styles.colors.mainWhite};
  background: transparent;
  padding: 0.5rem 1rem 0.5rem 1.5rem;
  text-transform: uppercase;
  font-size: 1.5rem;
  ${styles.letterSpacing({ spacing: "0.5rem" })};
  font-weight: 700;
  ${styles.border({ color: `${styles.colors.mainWhite}` })};
  margin-bottom: 1rem;
  ${styles.transObject({})};
  &:hover {
    color: ${styles.colors.mainBlack};
    background: ${styles.colors.mainWhite};
    cursor: pointer;
  }
`

const SectionButton = styled(BannerButton)`
  color: ${styles.colors.mainBlack};
  ${styles.border({ color: `${styles.colors.mainBlack}` })};

  a {
    color: ${styles.colors.mainBlack};
  }

  &:hover {
    color: ${styles.colors.mainYellow};
    background: ${styles.colors.mainBlack};

    a {
      color: ${styles.colors.mainYellow};
    }
  }
`

export { BannerButton, SectionButton }
