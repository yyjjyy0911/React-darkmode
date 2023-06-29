import React, { useEffect, useState } from 'react'
import {MdDarkMode, MdOutlineDarkMode} from "react-icons/md"
import styled from "styled-components"

const Darkmode = ({onToggle, toggle}) => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date())
    },1000)
    return () => clearInterval(id)
  },[])
  // 출력하지 않고 싶을 땐, []의존성배열을 비우면 됨

  return (
    <Container>
      <HeaderWrapper>
        <h1>Ju Yeong</h1>
        {!toggle ? (<DarkButton onClick={onToggle} />) : 
        (<LightButton onClick={onToggle} />)}
        {/* 컴포넌트로 만든 거임 */}

      </HeaderWrapper>
      <DateTimer>{time.toLocaleDateString()}</DateTimer>
      <HourTimer>{time.toLocaleTimeString()}</HourTimer>
    </Container>
  )
}

// 스타일 꾸미기!!! ---------------------------------------------------------
// container 꾸미기 (익명함수식으로 만들면 됨)
const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
  font-size: 42px;
`;

// headerwrapper 꾸미기
const HeaderWrapper = styled.header`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  background: ${(props) => props.theme.headerColor};
  h1{
    color: ${(props) => props.theme.headerText};
    font-size: 40px;
  }
`;

// 날짜 꾸미기
const DateTimer = styled.p`
  text-align: center;
  font-size: 150%;
`;

// 시간 꾸미기
const HourTimer = styled.p`
  text-align: center;
  font-size: 200%;
`;

// react-icon 꾸미기
// html태그 이외의 스타일을 꾸밀 때는 소괄호 사용!!!
const DarkButton = styled(MdDarkMode)`
  font-size: 32px;
  color: ${(props) => props.theme.headerText};
  cursor: pointer;
`;
const LightButton = styled(MdOutlineDarkMode)`
  font-size: 32px;
  color: ${(props) => props.theme.headerText};
  cursor: pointer;
`;

export default Darkmode