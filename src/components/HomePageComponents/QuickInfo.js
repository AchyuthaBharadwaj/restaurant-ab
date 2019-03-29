import React, { Component } from "react"
import { styles, Section, Title, SectionButton } from "../../utils"
import styled from "styled-components"
import { Link } from "gatsby"

export default class QuickInfo extends Component {
  render() {
    return (
      <Section>
        <Title message="let us tell you" title="our mission" />
        <QuickInfoWrapper>
          <p className="text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
            ducimus sequi architecto ea maiores? Exercitationem esse, velit
            facilis nostrum, obcaecati eligendi temporibus veniam laborum
            consequuntur omnis dicta voluptatum ipsum modi provident! Est,
            reprehenderit qui animi distinctio voluptatum quam numquam nihil
            tenetur perspiciatis! Cupiditate doloremque sint eum, dolorem et
            molestiae ipsa?
          </p>
          <Link to="/about/" style={{ textDecoration: "none" }}>
            <SectionButton style={{ margin: "2rem auto" }}>about</SectionButton>
          </Link>
        </QuickInfoWrapper>
      </Section>
    )
  }
}

const QuickInfoWrapper = styled.div`
  width: 90%;
  margin: 2rem auto;
  .text {
    line-height: 2rem;
    color: ${styles.colors.mainGrey};
    word-spacing: 0.2rem;
  }

  @media (min-width: 768px) {
    width: 70%;
  }

  @media (min-width: 992px) {
    width: 60%;
  }
`
