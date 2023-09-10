import { useEffect, useState } from "react";

import "./index.css"

export default function App() {

  // const [contents, setContents] = useState([]);

  const content = [{ title: "Test", paragraph: "ABCD" }, { title: "Test 2", paragraph: "ABCD 2" }]

  const addChangeColor = () => {
    let banner = document.getElementById('banner')
    banner.style.backgroundColor = "red"
  }

  return (
    <div className="App">
      <Headline />
      <NavBar />
      <Banner handleAddContent={addChangeColor} />
      <Details contents={content} />
    </div>
  );
}

function Headline() {
  return (
    <div>
      <h2>Support Ukraine 🇺🇦 Help Provide Humanitarian Aid to Ukraine.</h2>
    </div>
  )
}

function NavBar() { // parent
  const navItems = [
    { name: "Docs", url: "http://www.google.com" },
    { name: "Help" },
    { name: "GitHub" }
  ]

  return (
    <div className="nav-bar" style={{ width: '100%', flex: 'right', height: '50px' }}>
      <NavItem name={"Create React App"} style={{ float: 'left' }} />
      {navItems.map((item) => {
        return <NavItem name={item.name} url={item.url} />
      })}
    </div>
  )
}

// props 
// state
function NavItem(props) { // children
  return (
    <a href={props.url}>
      <div style={{ padding: '10px', float: "right", ...props.style }}>
        {props.name}
      </div>
    </a>
  )
}

// 29: padding, float: left, backgroundColor
// padding, float: left, 

const Banner = (props) => {
  return (
    <div style={{ height: '40vh', backgroundColor: 'black', width: '100vw' }} id="banner">
      <h1 style={{ color: 'white' }}>Create React App</h1>
      <p style={{ color: 'white' }}>Set up a modern web app by running one command.</p>
      <button onClick={props.handleAddContent}>Get Started</button>
    </div>
  )
}

const Details = (props) => {
  return (
    <div style={{ display: 'flex' }}>
      {props.contents.map((content) => {
        return <div style={{ padding: '10px', width: '300px' }}>
          <h2>{content.title}</h2>
          <p>{content.paragraph}</p>
        </div>
      })}
    </div>
  )
}