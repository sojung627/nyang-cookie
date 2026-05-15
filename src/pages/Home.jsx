import { useEffect, useState } from 'react'
import FortuneModal from '../components/FortuneModal'
import FortuneLoadingModal from '../components/FortuneLoadingModal'
import FortuneResultModal from '../components/FortuneResultModal'
import catProfile from '../assets/cat-profile.png'
import catCoin from '../assets/catCoin.png'
import calender from '../assets/calender.png'
import mainCat from '../assets/mainCat.png'

function Home({ setScreen }) {
  const STORAGE_KEY = 'nyangcookie_coin'

  const [isFortuneOpen, setIsFortuneOpen] = useState(false)
  const [isLoadingOpen, setIsLoadingOpen] = useState(false)
  const [isResultOpen, setIsResultOpen] = useState(false)
  const [reward, setReward] = useState(0)

  const [coin, setCoin] = useState(() => {
    const savedCoin = localStorage.getItem(STORAGE_KEY)
    const parsed = Number(savedCoin)
    return Number.isFinite(parsed) ? parsed : 2450
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, coin)
  }, [coin])

  const rewardPool = [
    { value: 10, weight: 14 }, { value: 20, weight: 13 }, { value: 30, weight: 12 }, { value: 40, weight: 10 },
    { value: 50, weight: 9 }, { value: 60, weight: 8 }, { value: 70, weight: 6 }, { value: 80, weight: 4 },
    { value: 90, weight: 2.5 }, { value: 100, weight: 1.5 }, { value: 11, weight: 2 }, { value: 22, weight: 2 },
    { value: 33, weight: 2 }, { value: 44, weight: 1.5 }, { value: 55, weight: 1.2 }, { value: 66, weight: 1 },
    { value: 77, weight: 0.8 }, { value: 88, weight: 0.6 }, { value: 99, weight: 0.4 }, { value: 999, weight: 0.15 },
  ]

  function getRandomReward() {
    const totalWeight = rewardPool.reduce((sum, item) => sum + item.weight, 0)
    let random = Math.random() * totalWeight
    for (const item of rewardPool) {
      random -= item.weight
      if (random <= 0) return item.value
    }
    return rewardPool[0].value
  }

  const missions = [
    { title: '오늘의 절약 성공', reward: 30, bg: 'bg-[#fff7f4]', icon: '🐹' },
    { title: '경제뉴스 읽기', reward: 30, bg: 'bg-[#f5f8ff]', icon: '📰' },
    { title: '투자 공부 5분', reward: 30, bg: 'bg-[#f2fffb]', icon: '📖' },
    { title: '충동 소비 참기', reward: 30, bg: 'bg-[#faf4ff]', icon: '🛍️' },
  ]

  return (
    <div className="min-h-screen bg-[#f5f1ed] flex justify-center">
      <div className="w-full max-w-[393px] min-h-screen bg-[#fcf8f5] pb-28">

        <header className="px-5 pt-10 flex items-start justify-between">
          <div className="flex gap-3 min-w-0">
            <div className="w-[52px] h-[52px] shrink-0 flex items-center justify-center">
              <img src={catProfile} alt="고양이" className="w-[52px] h-[52px] object-contain select-none pointer-events-none" />
            </div>
            <div className="min-w-0 pt-1">
              <h1 className="text-[18px] font-bold leading-tight text-zinc-900 whitespace-nowrap">집사야, 보고싶었다옹 💗</h1>
              <p className="text-[14px] text-zinc-500 mt-1 whitespace-nowrap">오늘도 좋은 투자 되길 바랄게!</p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <div className="bg-white rounded-full px-4 py-2 shadow-[0_4px_16px_rgba(0,0,0,0.04)] flex items-center gap-2">
              <span className="text-[13px]">🐾</span>
              <span className="font-semibold text-[13px]">3</span>
            </div>
            <button className="text-[20px] leading-none">🔔</button>
          </div>
        </header>

        <section className="grid grid-cols-2 gap-3 px-5 mt-6">
          <div onClick={() => setScreen('코인')} className="relative bg-white rounded-[28px] h-[112px] px-4 py-4 shadow-[0_8px_22px_rgba(0,0,0,0.035)] overflow-hidden">
            <div className="flex items-center h-full gap-3 pr-5">
              <img src={catCoin} alt="코인" className="w-[52px] h-[52px] object-contain select-none pointer-events-none" />
              <div className="min-w-0">
                <p className="text-[13px] leading-none text-zinc-400 font-medium whitespace-nowrap">냥냥코인</p>
                <h2 className="text-[24px] leading-none font-bold mt-3 whitespace-nowrap">{coin.toLocaleString()}</h2>
              </div>
            </div>
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#f0a08b] text-[30px] leading-none">›</span>
          </div>

          <div onClick={() => setScreen('출석')} className="relative bg-white rounded-[28px] h-[112px] px-4 py-4 shadow-[0_8px_22px_rgba(0,0,0,0.035)] overflow-hidden">
            <div className="flex items-start gap-3 pr-5">
              <div className="text-[34px] leading-none shrink-0 mt-[9px]">
                <img src={calender} alt="달력" className="w-[52px] h-[52px] object-contain select-none pointer-events-none" />
              </div>
              <div className="min-w-0">
                <p className="text-[13px] leading-none text-zinc-400 font-medium whitespace-nowrap">출석 체크</p>
                <h2 className="text-[23px] leading-none font-bold mt-3 whitespace-nowrap tracking-[-0.04em]">5일 연속</h2>
                <div className="flex gap-[2px] text-[13px] mt-3 whitespace-nowrap">
                  <span>🐾</span><span>🐾</span><span>🐾</span><span>🐾</span><span className="opacity-30">🐾</span>
                </div>
              </div>
            </div>
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#f0a08b] text-[30px] leading-none">›</span>
          </div>
        </section>

        <section onClick={() => setScreen("포춘쿠키")} className="mx-5 mt-6 relative overflow-hidden rounded-[34px] shadow-[0_10px_30px_rgba(255,182,193,0.12)] cursor-pointer active:scale-[0.985] transition-transform">

          {/* 배경 이미지 - 오버레이 없이 그대로 */}
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${mainCat})` }} />

          {/* ❌ 이 줄 삭제: <div className="absolute inset-0 bg-[#fff3ec]/25" /> */}

          <div className="relative z-10 h-[300px] p-5 flex flex-col justify-between">

            {/* 상단 - 반투명 배경 없이 그림자로만 가독성 확보 */}
            <div className="flex items-start justify-between">
              <div>
                <p className="text-zinc-500 text-[13px] drop-shadow-sm">Lv. 7 주냥이</p>
                <div className="flex items-center gap-2 mt-2">
                  <h2 className="text-[22px] font-bold leading-none drop-shadow-sm">쿠키</h2>
                  <span className="text-zinc-400 text-[18px]">✎</span>
                </div>
              </div>

                {/* 기분 말풍선 - 흰 배경으로 배경과 분리 */}
                <div className="w-[130px] h-[70px] bg-white/95 rounded-[18px] px-4 py-3 shadow-md text-center animate-[float_2.8s_ease-in-out_infinite]">
                  <p className="text-[11px] text-zinc-500"></p>
                  <p className="font-bold mt-1 text-[14px]"></p>
                </div>
            </div>

            {/* 하단 - 경험치 + 버튼 */}
            <div>
              <div className="flex justify-between text-[12px] text-zinc-500 mt-1">
                <span>경험치</span>
                <span>750 / 1,000</span>
              </div>
              <div className="w-full h-[10px] bg-white/70 rounded-full overflow-hidden">
                <div className="w-[75%] h-full bg-[#ffb7c5] rounded-full"></div>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setIsFortuneOpen(true)
                }}
                className="mt-3 w-full h-[60px] rounded-[24px] bg-[#ffb7c5]/90 py-5 shadow-[0_8px_18px_rgba(255,183,197,0.45)] active:scale-[0.985] transition-transform">
                <div className="flex items-center justify-center gap-3">
                  <span className="text-[32px] -mt-4">🥠</span>
                  <div className="text-left -mt-4">
                    <p className="text-white font-bold text-[16px]">오늘의 포춘쿠키 열기</p>
                    <p className="text-white/90 text-[10px] mt-1">하루에 한 번, 행운을 확인해보세요!</p>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </section>

        <section className="px-5 mt-10">
          <div className="flex items-center justify-between">
            <h2 className="text-[24px] font-bold">오늘의 미션</h2>
            <button className="text-zinc-400 text-[14px]">모두 보기</button>
          </div>

          <div className="grid grid-cols-2 gap-3 mt-5">
            {missions.map((mission) => (
              <div key={mission.title} className={`${mission.bg} rounded-[26px] p-5 min-h-[145px] shadow-[0_4px_18px_rgba(0,0,0,0.03)]`}>
                <div className="text-[34px]">{mission.icon}</div>
                <h3 className="font-bold text-[16px] leading-snug mt-3">{mission.title}</h3>
                <p className="text-zinc-400 mt-3 text-[13px]">냥냥코인 {mission.reward}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-5 mt-8 mb-8">
          <div className="bg-[#f4ecff] rounded-[30px] p-6 flex items-center justify-between shadow-[0_4px_18px_rgba(0,0,0,0.03)]">
            <div>
              <p className="text-violet-400 text-[13px] font-medium">나의 투자 성향은?</p>
              <h2 className="text-[24px] font-bold text-violet-700 mt-2 leading-tight">주린이 심리테스트</h2>
              <p className="text-violet-500 mt-2 text-[13px]">지금 바로 테스트해보세요!</p>
            </div>
            <div className="text-[72px]">🐱</div>
          </div>
        </section>

        <FortuneModal
          isOpen={isFortuneOpen}
          onClose={() => setIsFortuneOpen(false)}
          onOpenResult={() => {
            const rewardValue = getRandomReward()
            setReward(rewardValue)
            setIsFortuneOpen(false)
            setIsLoadingOpen(true)
            setTimeout(() => {
              setCoin((prev) => prev + rewardValue)
              setIsLoadingOpen(false)
              setIsResultOpen(true)
            }, 2000)
          }}
        />

        <FortuneLoadingModal isOpen={isLoadingOpen} />

        <FortuneResultModal isOpen={isResultOpen} reward={reward} onClose={() => setIsResultOpen(false)} />

      </div>
    </div>
  )
}

export default Home