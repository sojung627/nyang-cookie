import { useState } from 'react'
import Home from './pages/Home'
import BottomNav from './components/BottomNav'

function App() {

  const [current, setCurrent] = useState("홈")

  return (
    <div className="bg-[#fcf8f5] min-h-screen">

      {current === "홈" && <Home />}
      {current === "포춘쿠키" && <div>포춘쿠키 페이지</div>}
      {current === "미션" && <div>미션 페이지</div>}
      {current === "상점" && <div>상점 페이지</div>}
      {current === "마이" && <div>마이 페이지</div>}

      <BottomNav
        current={current}
        setScreen={setCurrent}
      />
    </div>
  )
}

export default App