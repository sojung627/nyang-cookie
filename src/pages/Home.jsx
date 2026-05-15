import { useEffect, useState } from 'react'
import FortuneModal from '../components/FortuneModal'
import FortuneLoadingModal from '../components/FortuneLoadingModal'
import FortuneResultModal from '../components/FortuneResultModal'

function Home() {

  const STORAGE_KEY = 'nyangcookie_coin'

  const [isFortuneOpen, setIsFortuneOpen] = useState(false)
  const [isLoadingOpen, setIsLoadingOpen] = useState(false)
  const [isResultOpen, setIsResultOpen] = useState(false)
  const [reward, setReward] = useState(0)

  const [coin, setCoin] = useState(() => {
    const savedCoin = localStorage.getItem(STORAGE_KEY)
    const parsed = Number(savedCoin)

    return Number.isFinite(parsed)
      ? parsed
      : 0
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, coin)
  }, [coin])

  const rewardPool = [
    { value: 10, weight: 14 },
    { value: 20, weight: 13 },
    { value: 30, weight: 12 },
    { value: 40, weight: 10 },
    { value: 50, weight: 9 },
    { value: 60, weight: 8 },
    { value: 70, weight: 6 },
    { value: 80, weight: 4 },
    { value: 90, weight: 2.5 },
    { value: 100, weight: 1.5 },
    { value: 11, weight: 2 },
    { value: 22, weight: 2 },
    { value: 33, weight: 2 },
    { value: 44, weight: 1.5 },
    { value: 55, weight: 1.2 },
    { value: 66, weight: 1 },
    { value: 77, weight: 0.8 },
    { value: 88, weight: 0.6 },
    { value: 99, weight: 0.4 },
    { value: 999, weight: 0.15 },
  ]

  function getRandomReward() {
    const totalWeight =
      rewardPool.reduce(
        (sum, item) => sum + item.weight,
        0
      )

    let random = Math.random() * totalWeight

    for (const item of rewardPool) {
      random -= item.weight

      if (random <= 0) {
        return item.value
      }
    }

    return rewardPool[0].value
  }

  const greetings = [
    {
      title: "집사야, 보고싶었다옹 💗",
      subtitle: "오늘도 좋은 투자 되길 바랄게!",
    },
    {
      title: "오늘도 만나서 반갑다냥 🐾",
      subtitle: "행운이 집사 곁에 머물고 있다옹!",
    },
    {
      title: "냥냥! 오늘 기분은 어떠냥? ✨",
      subtitle: "좋은 흐름이 슬쩍 다가오고 있다냥 💕",
    },
    {
      title: "집사 기다리고 있었다옹 🌸",
      subtitle: "오늘도 행복한 하루 보내라냥!",
    },
    {
      title: "포춘쿠키 굽고 있었댜냥 🥠",
      subtitle: "오늘의 행운도 잔뜩 준비했다옹 💗",
    },
  ]

  const missions = [
    { title: "오늘의 절약 성공", reward: 30 },
    { title: "경제뉴스 읽기", reward: 30 },
    { title: "투자 공부 5분", reward: 30 },
    { title: "충동 소비 참기", reward: 30 },
  ]

  const randomGreeting =
    greetings[Math.floor(Math.random() * greetings.length)]

  return (
    <div className="min-h-screen bg-[#fcf8f5] pb-28">
      <header className="px-5 pt-10 flex items-start justify-between">

        <div className="flex gap-3">

          <div className="w-14 h-14 rounded-full bg-[#fff1eb] flex items-center justify-center text-3xl shadow-sm">
            🐱
          </div>

          <div>
            <h1 className="text-2xl font-bold text-zinc-800">
              {randomGreeting.title}
            </h1>

            <p className="text-zinc-500 mt-1">
              {randomGreeting.subtitle}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">

          <div className="bg-white px-4 py-2 rounded-full shadow-sm flex items-center gap-2">
            <span>🐾</span>

            <span className="font-semibold">
              3
            </span>
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

          const rewardValue = getRandomReward()

          setReward(rewardValue)

          setIsFortuneOpen(false)
          setIsLoadingOpen(true)

          setTimeout(() => {

            setCoin((prev) => prev + rewardValue)

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
        reward={reward}
        onClose={() => setIsResultOpen(false)}
      />

      <section className="grid grid-cols-2 gap-4 px-5 mt-6">

        <div className="bg-white rounded-3xl p-5 shadow-sm">

          <p className="text-zinc-400 text-sm">
            냥냥코인
          </p>

          <h2 className="text-4xl font-bold mt-3">
            {coin.toLocaleString()}
          </h2>
        </div>

        <div className="bg-white rounded-3xl p-5 shadow-sm">

          <p className="text-zinc-400 text-sm">
            출석 체크
          </p>

          <h2 className="text-3xl font-bold mt-3">
            5일 연속
          </h2>

          <div className="flex gap-1 mt-3 text-lg">
            🐾🐾🐾🐾🐾
          </div>
        </div>
      </section>

      <section className="mx-5 mt-6 bg-[#fff3ec] rounded-[40px] p-5 shadow-sm overflow-hidden">

        <div className="flex items-start justify-between">

          <div>
            <p className="text-zinc-500">
              Lv. 7 주냥이
            </p>

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

        <div className="flex justify-center mt-6">
          <div className="text-[140px]">
            🐱
          </div>
        </div>

        <div className="mt-4">

          <div className="flex justify-between text-sm text-zinc-500 mb-2">
            <span>경험치</span>
            <span>750 / 1,000</span>
          </div>

          <div className="w-full h-3 bg-white rounded-full overflow-hidden">
            <div className="w-[75%] h-full bg-pink-300 rounded-full"></div>
          </div>
        </div>

        <button
          className="w-full bg-gradient-to-r from-[#ffb7b2] to-[#ff9eaa] text-white rounded-3xl py-5 mt-6 shadow-md"
          onClick={() => setIsFortuneOpen(true)}
        >
          <div className="text-2xl">🥠</div>

          <h3 className="text-2xl font-bold mt-2">
            오늘의 포춘쿠키 열기
          </h3>

          <p className="text-sm text-pink-100 mt-1">
            하루에 한 번, 행운을 확인해보세요!
          </p>
        </button>
      </section>

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

          {missions.map((mission) => (
            <div
              key={mission.title}
              className="bg-white rounded-3xl p-5 shadow-sm"
            >
              <div className="text-4xl">✨</div>

              <h3 className="font-bold text-lg mt-4 leading-snug">
                {mission.title}
              </h3>

              <p className="text-zinc-400 mt-3">
                냥냥코인 +{mission.reward}
              </p>
            </div>
          ))}
        </div>
      </section>

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
    </div>
  )
}

export default Home