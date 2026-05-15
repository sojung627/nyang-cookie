import { useState } from 'react'
import Home from './pages/Home'
import CoinPage from './pages/CoinPage'
import Attendance from './pages/Attendance'
import BottomNav from './components/BottomNav'

function App() {

  const [current, setCurrent] = useState("홈")

  return (
    <div className="bg-[#fcf8f5] min-h-screen">
      {/* 메인홈 */}
      {current === "홈" && (
        <Home setScreen={setCurrent} />
      )}

      {/* 바텀 네비 */}
      {current === "포춘쿠키" && <div>포춘쿠키 페이지</div>}
      {current === "미션" && <div>미션 페이지</div>}
      {current === "상점" && <div>상점 페이지</div>}
      {current === "마이" && <div>마이 페이지</div>}

      {/* 출석체크 */}
      {current === "출석" && <Attendance onBack={() => setCurrent("홈")} />}

      {/* 코인 페이지 */}
      {current === "코인" && (<CoinPage onBack={() => setCurrent("홈")} />)}

      <BottomNav
        current={current}
        setScreen={setCurrent}
      />
    </div>
  )
}

export default App