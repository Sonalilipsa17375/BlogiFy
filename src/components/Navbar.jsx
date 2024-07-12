import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarContainer = styled.div`
  background-color: #20063b; /* Dark background */
  color: whitesmoke; /* Text color */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Container = styled.div`
  padding: 15px 20px;
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.h2`
  font-size: 2rem;
  background: linear-gradient(
    90deg,
    #ff6f91,
    #8854d0
  ); /* Gradient from pink to violet */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const WriteButton = styled.span`
  background-color: #ffa07a;
  font-size: 16px;
  padding: 8px 12px;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  border: none;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #ff6347;
    color: white;
  }
`;

const WriteLink = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Container>
        <div className="logo">
          <Logo>Blogify</Logo>
        </div>
        <Links>
          {/* <span className="name">Sona</span> */}
          {/* <span>LogOut</span> */}
          <WriteButton>
            <WriteLink to="/write">Post</WriteLink>
          </WriteButton>
        </Links>
      </Container>
    </NavbarContainer>
  );
};

export default Navbar;
