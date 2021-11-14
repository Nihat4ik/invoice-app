import React from "react";
import styled from "styled-components";
import profilepic from "../../images/image-avatar.jpg";

const ProfileBox = styled.div`
  display: flex;
  justify-content: center;
  padding: 2.4rem 0;

  @media screen and (max-width: 880px) {
    padding: 0 3.2rem;
  }
`;

const ProfilePictureBox = styled.div`
  width: 4rem;
  height: 4rem;
  @media screen and (max-width: 880px) {
    width: 3.2rem;
    height: 3.2rem;
  }
`;

const ProfilePicture = styled.img.attrs({
  src: profilepic,
  alt: "profile picture",
})`
  max-width: 100%;
  height: auto;
  border-radius: 100%;
`;

const NavProfile = () => {
  return (
    <ProfileBox>
      <ProfilePictureBox>
        <ProfilePicture />
      </ProfilePictureBox>
    </ProfileBox>
  );
};

export default NavProfile;
