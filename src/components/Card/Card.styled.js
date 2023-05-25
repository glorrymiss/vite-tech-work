import styled from "@emotion/styled";

export const Wrap = styled.div`
  display: block;
  width: calc((100%-90px) / 4);
  height: 480px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  position: relative;
`;

export const ImgLogo = styled.img`
  margin-top: 20px;
  margin-left: 20px;
`;
export const ImgGeneral = styled.img`
  position: absolute;
  top: 28px;
  left: 36px;
`;
export const Line = styled.div`
  margin-top: 18px;
  height: 8px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;
export const ImgPerson = styled.img`
  position: absolute;
  top: 200px;
  left: 160px;
  border-radius: 50%;
  border: 8px solid #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const WrapText = styled.div`
  margin-top: 62px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const Text = styled.p`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  color: #ebd8ff;
`;

export const Button = styled.button`
  width: 200px;
  margin-top: 26px;
  margin-left: 92px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  padding: 14px 0;
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "Montserrat", sans-serif;

  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;

  text-transform: uppercase;

  color: #373737;
`;
