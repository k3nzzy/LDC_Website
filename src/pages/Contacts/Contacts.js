import MainLayout from "../../components/Main Layout/Main Layout";
import { MainPage, Title, SubTitle, LinkContainter, LinkText, LinkContainerB} from "./Styles";
import Vector from "../../images/Vector.svg";
import Footer from "../../components/Dark Footer/Footer";

export default function Catch() {

    return (
        <MainLayout>
            <MainPage>
                    <Title>Contact Us</Title>
                    <SubTitle>We will get back to you as soon as possible</SubTitle>

                    <LinkContainter>
                        <LinkText>LinkedIn</LinkText>
                        <a href="https://www.linkedin.com/company/ladybug-development/about/"><img src={Vector} alt=""/></a>
                    </LinkContainter>

                    <LinkContainter>
                        <LinkText>Instagram</LinkText>
                        <a href="/"><img src={Vector} alt=""/></a>
                    </LinkContainter>

                    <LinkContainter>
                        <LinkText>OrgCentral</LinkText>
                        <a href="/https://orgcentral.psu.edu/organization/ladybugdevclub"><img src={Vector} alt=""/></a>
                    </LinkContainter>

                    <LinkContainerB>
                        <LinkText>Email (President)</LinkText>
                        <a href="mailto:jbj5347@psu.edu"><img src={Vector} alt=""/></a>
                    </LinkContainerB>
            </MainPage>
            <Footer/>
        </MainLayout>
    );
};