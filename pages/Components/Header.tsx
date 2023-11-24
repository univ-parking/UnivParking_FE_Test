import Link from "next/link";
import styled from "styled-components";

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <HeaderContainer>
      <HeaderContentsWrapper>
        <Link href={"/"}>
          <h3>&lt; 이전으로</h3>
        </Link>
        <h1>{title}</h1>
      </HeaderContentsWrapper>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  width: 100%;
  height: 8vh;

  /* display: flex;
  justify-content: center;
  align-items: center; */

  h1 {
    position: relative;
    left: 1000;
  }
`;

const HeaderContentsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Header;
