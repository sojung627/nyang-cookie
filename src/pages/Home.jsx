import { useState } from 'react'
import FortuneModal from '../components/FortuneModal'
import FortuneLoadingModal from '../components/FortuneLoadingModal'
import FortuneResultModal from '../components/FortuneResultModal'

function Home() {
  // 포춘쿠키 모달창
  const [isFortuneOpen, setIsFortuneOpen] = useState(false)
  // 포춘쿠키 로딩창
  const [isLoadingOpen, setIsLoadingOpen] = useState(false)
  // 포춘쿠키 결과창
  const [isResultOpen, setIsResultOpen] = useState(false)


  return (
    <div className="min-h-screen bg-[#fcf8f5] pb-28">

      {/* 상단 */}
      <header className="px-5 pt-10 flex items-start justify-between">
        <div className="flex gap-3">
          <div className="w-14 h-14 rounded-full bg-[#fff1eb] flex items-center justify-center text-3xl shadow-sm">
            🐱
          </div>

          <div>
            <h1 className="text-2xl font-bold text-zinc-800">
              집사야, 보고싶었다옹 💗
            </h1>

            <p className="text-zinc-500 mt-1">
              오늘도 좋은 투자 되길 바랄게!
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="bg-white px-4 py-2 rounded-full shadow-sm flex items-center gap-2">
            <span>🐾</span>
            <span className="font-semibold">3</span>
          </div>

          <button className="text-2xl">
              🔔
          </button>
        </div>
      </header>

      <FortuneModal
        isOpen={isFortuneOpen}
        onClose={() => setIsFortuneOpen(false)}
        onOpenResult={() => {

          // 포춘 모달 닫기
          setIsFortuneOpen(false)

          // 로딩 모달 열기
          setIsLoadingOpen(true)

          // 2.5초 뒤 결과 등장
          setTimeout(() => {
            setIsLoadingOpen(false)
            setIsResultOpen(true)
          }, 2500)
        }}
      />

      <FortuneLoadingModal
        isOpen={isLoadingOpen}
        progress={55}
      />

      <FortuneResultModal
        isOpen={isResultOpen}
        onClose={() => setIsResultOpen(false)}/>

      {/* 상단 카드 */}
      <section className="grid grid-cols-2 gap-4 px-5 mt-6">

        <div className="bg-white rounded-3xl p-5 shadow-sm">
          <p className="text-zinc-400 text-sm">냥냥코인</p>

          <h2 className="text-4xl font-bold mt-3">
            2,450
          </h2>
        </div>

        <div className="bg-white rounded-3xl p-5 shadow-sm">
          <p className="text-zinc-400 text-sm">출석 체크</p>

          <h2 className="text-3xl font-bold mt-3">
            5일 연속
          </h2>

          <div className="flex gap-1 mt-3 text-lg">
            🐾🐾🐾🐾🐾
          </div>
        </div>
      </section>

      {/* 메인 고양이 카드 */}
      <section className="mx-5 mt-6 bg-[#fff3ec] rounded-[40px] p-5 shadow-sm overflow-hidden">

        <div className="flex items-start justify-between">
          <div>
            <p className="text-zinc-500">Lv. 7 주냥이</p>

            <h2 className="text-4xl font-bold mt-2">
              쿠키
            </h2>
          </div>

          <div className="bg-white px-4 py-3 rounded-2xl text-center shadow-sm">
            <p className="text-sm text-zinc-500">
              기분 😊
            </p>

            <p className="font-bold mt-1">
              좋아!
            </p>
          </div>
        </div>

        {/* 고양이 */}
        <div className="flex justify-center mt-6">
          <div className="text-[140px]">
            🐱
          </div>
        </div>

        {/* 경험치 */}
        <div className="mt-4">
          <div className="flex justify-between text-sm text-zinc-500 mb-2">
            <span>경험치</span>
            <span>750 / 1,000</span>
          </div>

          <div className="w-full h-3 bg-white rounded-full overflow-hidden">
            <div className="w-[75%] h-full bg-pink-300 rounded-full"></div>
          </div>
        </div>

        {/* 포춘쿠키 버튼 */}
        <button className="w-full bg-gradient-to-r from-[#ffb7b2] to-[#ff9eaa] text-white rounded-3xl py-5 mt-6 shadow-md"
        onClick={() => setIsFortuneOpen(true)}>

          <div className="text-2xl">
            🥠
          </div>

          <h3 className="text-2xl font-bold mt-2">
            오늘의 포춘쿠키 열기
          </h3>

          <p className="text-sm text-pink-100 mt-1">
            하루에 한 번, 행운을 확인해보세요!
          </p>
        </button>
      </section>

      {/* 오늘의 미션 */}
      <section className="px-5 mt-10">

        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold">
            오늘의 미션
          </h2>

          <button className="text-zinc-400">
            모두 보기
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-5">

          {[
            "오늘의 절약 성공",
            "경제뉴스 읽기",
            "투자 공부 5분",
            "충동 소비 참기",
          ].map((mission) => (
            <div
              key={mission}
              className="bg-white rounded-3xl p-5 shadow-sm"
            >
              <div className="text-4xl">
                ✨
              </div>

              <h3 className="font-bold text-lg mt-4 leading-snug">
                {mission}
              </h3>

              <p className="text-zinc-400 mt-3">
                냥냥코인 +30
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 테스트 배너 */}
      <section className="px-5 mt-8">
        <div className="bg-[#f4ecff] rounded-[32px] p-6 flex items-center justify-between shadow-sm">

          <div>
            <p className="text-violet-400 font-medium">
              나의 투자 성향은?
            </p>

            <h2 className="text-3xl font-bold text-violet-700 mt-3">
              주린이 심리테스트
            </h2>

            <p className="text-violet-500 mt-2">
              지금 바로 테스트해보세요!
            </p>
          </div>

          <div className="text-[90px]">
            🐱
          </div>
        </div>
      </section>

      {/* 하단 네비 */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-zinc-100 px-3 py-3 flex justify-around rounded-t-[32px]">

        {[
          "홈",
          "미션",
          "꾸미기",
          "상점",
          "테스트",
        ].map((item) => (
          <button
            key={item}
            className="flex flex-col items-center text-sm text-zinc-400"
          >
            <div className="text-2xl">
              🐾
            </div>

            {item}
          </button>
        ))}
      </nav>
    </div>
  )
}

export default Home