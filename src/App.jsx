import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//header boxes
function HSideBox() {
  return <div className="h-box"></div>

}
function TopName(props) {
  return (
    <div className="inner-center">{props.name}</div>
  )
}
function HeaderCenterBox() {
  return <div className="h-center">
    <TopName name="Aaron" />
    <TopName name="Laxamana" />
  </div>

}
function TopHeader() {
  return (
    <>
      <HSideBox />
      <HeaderCenterBox />
      <HSideBox />
    </>
  )
}
//main boxes
function LeftMainBox() {
  return <div className="left-main"></div>
}

function InnerRightBox() {
  return <div className="inner-right"></div>
}

function RightMainBox() {
  return (
    <div className="right-main">
      <InnerRightBox />
      <InnerRightBox />
    </div>
  )
}

function MiddleMain() {
  return (
    <>
      <LeftMainBox />
      <RightMainBox />
    </>
  )
}

//footerboxes
function FooterSideBoxes() {
  return <div className="footer-sideBox"></div>
}

function FooterText(props) {
  return (
    <div className="footer-center">{props.text}</div>
  )
}

function FooterCenterBoxes() {
  return (
    <>
      <FooterText text="C-PEITEL3" />
      <FooterText text="IT3A" />
    </>
  )
}

function FooterBottom() {
  return (
    <>
      <FooterSideBoxes />
      <FooterCenterBoxes />
      <FooterSideBoxes />
    </>
  )
}

function App() {

  return (
    <div className="container">
      <header>
        <TopHeader />
      </header>

      <main>
        <MiddleMain />
      </main>

      <footer>
        <FooterBottom />
      </footer>

    </div>
  )
}

export default App
