import styled, { css } from "styled-components";
const common = css`
display: flex;
flex-direction: column;
`
export const Container = styled.div`
overflow: hidden;
${common}
text-align: center;
height: 100vh;
`
export const Content = styled.section`
margin-bottom: 100vw;
width: 100%;
position: relative;
min-height: 100vh;
box-sizing: border-box;
${common}
align-items: center;
justify-content: center;
padding: 80px 40px;
height: 100%;
`
export const BgImage = styled.div`
height: 100%;
background-position: top;
background-size: cover;
background-repeat: no-repeat;
background-image: url('/images/login-background.jpg');
top:0;
left: 0;
bottom: 0;
right: 0;
position: absolute;
z-index: -1;
`
export const CTA = styled.div`
  max-width: 650px;
  width: 100%;
 ${common}
`
export const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
  margin: 0 auto;
`
export const SignUp = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;
  margin-top: 20px;

  &:hover {
    background-color: #0483ee;
  }
`
export const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 11px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
  font-family: "Montserrat-Regular";
`;

export const CTALogoTwo = styled.img`
  max-width: 600px;
  margin-bottom: 20px;
  display: inline-block;
  vertical-align: bottom;
  width: 100%;
`;