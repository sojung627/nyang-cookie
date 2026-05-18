import React, { useEffect, useState } from 'react'
import newCatCoin from '../assets/main/newCatCoin.png'
import fortuneCookie from '../assets/main/fortuneCookie.png'
import calender from '../assets/main/calender.png'
import bagIcon from '../assets/main/bagIcon.png'
import catProfile from '../assets/main/catProfile.png'
import specialItem from '../assets/main/specialItem.png'
import document from '../assets/main/document.png'
import catPaw from '../assets/main/catPaw.png'
import talk from '../assets/main/talk.png'

const WEEKLY_GRAPH_THRESHOLD = 100

function CoinPage({ onBack }) {

  const STORAGE_KEY = 'nyangcookie_coin'
  const WEEKLY_STATS_KEY = 'nyangcookie_weekly_stats'
  const COIN_HISTORY_KEY = 'nyangcookie_coin_history'

  const getCurrentFormattedDateTime = () => {
    const now = new Date()
    const year = now.getFullYear()
    const month = String(now.getMonth() + 1).padStart(2, '0')
    const date = String(now.getDate()).padStart(2, '0')
    const hours = String(now.getHours()).padStart(2, '0')
    const minutes = String(now.getMinutes()).padStart(2, '0')
    return `${year}.${month}.${date} ${hours}:${minutes}`
  }

  const generateCurrentWeeklyLayout = () => {
    const days = ["일", "월", "화", "수", "목", "금", "토"]
    const current = new Date()
    const currentDay = current.getDay()

    const sunday = new Date(current)
    sunday.setDate(current.getDate() - currentDay)

    return days.map((day, index) => {
      const nextDate = new Date(sunday)
      nextDate.setDate(sunday.getDate() + index)

      const month = nextDate.getMonth() + 1
      const date = nextDate.getDate()

      return {
        day,
        date: `${month}.${date}`,
        value: 0
      }
    })
  }

  const [weeklyStats, setWeeklyStats] = useState(() => {
    const savedStats = localStorage.getItem(WEEKLY_STATS_KEY)
    const currentWeekLayout = generateCurrentWeeklyLayout()

    if (savedStats) {
      const parsedStats = JSON.parse(savedStats)
      return currentWeekLayout.map(layoutItem => {
        const matchingSaved = parsedStats.find(savedItem => savedItem.day === layoutItem.day)
        return matchingSaved
          ? { ...layoutItem, value: matchingSaved.value }
          : layoutItem
      })
    }
    return currentWeekLayout
  })

  const [coin, setCoin] = useState(() => {
    const savedCoin = localStorage.getItem(STORAGE_KEY)
    const parsed = Number(savedCoin)
    if (Number.isFinite(parsed)) {
      return parsed
    }
    return 0
  })

  const [historyList, setHistoryList] = useState(() => {
    const savedHistory = localStorage.getItem(COIN_HISTORY_KEY)
    if (savedHistory) {
      return JSON.parse(savedHistory)
    }
    return []
  })

  const getImageByType = (type) => {
    if (type === 'fortune') return fortuneCookie
    if (type === 'attendance') return calender
    if (type === 'mission') return document
    if (type === 'cancel') return bagIcon
    return newCatCoin
  }

  const getTitleByType = (type) => {
    if (type === 'fortune') return "포춘쿠키 열기"
    if (type === 'attendance') return "출석 체크"
    if (type === 'mission') return "오늘의 미션 완료"
    if (type === 'cancel') return "상점 구매 취소 보상"
    return "냥냥 활동 보상"
  }

  const handleEarnCoin = (type, amount) => {
    const title = getTitleByType(type)
    const image = getImageByType(type)
    const currentDateTime = getCurrentFormattedDateTime()

    const newLog = {
      id: Date.now() + Math.random(), // ✅ 고유 id 추가
      title,
      date: currentDateTime,
      reward: amount,
      image,
    }

    setHistoryList(prev => [newLog, ...prev])
    setCoin(prev => prev + amount)

    const currentDayIndex = new Date().getDay()
    setWeeklyStats(prev => prev.map((item, index) => {
      if (index === currentDayIndex) {
        return { ...item, value: item.value + amount }
      }
      return item
    }))
  }

  const handleEarnMultipleCoins = (rewards) => {
    const now = Date.now()
    const newLogs = rewards.map(({ type, amount }, i) => ({
      id: now + i,
      title: getTitleByType(type),
      date: getCurrentFormattedDateTime(),
      reward: amount,
      image: getImageByType(type),
    }))

    // ✅ 한 번에 모두 추가
    setHistoryList(prev => [...newLogs, ...prev])

    const totalAmount = rewards.reduce((sum, { amount }) => sum + amount, 0)
    setCoin(prev => prev + totalAmount)

    const currentDayIndex = new Date().getDay()
    setWeeklyStats(prev => prev.map((item, index) => {
      if (index === currentDayIndex) {
        return { ...item, value: item.value + totalAmount }
      }
      return item
    }))
  }

  useEffect(() => {
    localStorage.setItem(COIN_HISTORY_KEY, JSON.stringify(historyList))
  }, [historyList])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, String(coin))
  }, [coin])

  // ✅ id(timestamp) 기준으로 정렬 → 같은 제목도 순서 보장
  const sortedHistories = [...historyList].sort((a, b) => {
    return (b.id ?? 0) - (a.id ?? 0)
  })

  const weeklyEarnedCoin = weeklyStats.reduce((sum, item) => {
    return sum + item.value
  }, 0)

  const getWeeklyRangeString = () => {
    if (weeklyStats.length === 7) {
      return `${weeklyStats[0].date} ~ ${weeklyStats[6].date}`
    }
    return ""
  }

  useEffect(() => {
    localStorage.setItem(
      WEEKLY_STATS_KEY,
      JSON.stringify(weeklyStats)
    )
  }, [weeklyStats])

  const usages = [
    {
      image: catProfile,
      title: "고양이 꾸미기",
      desc: "아이템 꾸미기",
    },
    {
      image: newCatCoin,
      title: "배경 구매",
      desc: "배경 변경",
    },
    {
      image: talk,
      title: "감정 표현 구매",
      desc: "감정 표현",
    },
    {
      image: specialItem,
      title: "한정 상품",
      desc: "특별한 아이템",
    },
  ]

  return (
  <div className="min-h-screen bg-[#f5f1ed] flex justify-center">
    <div className="w-full max-w-[393px] min-h-screen bg-[#fcf8f5] pb-28">
      <header className="px-5 pt-12 flex items-center justify-center relative">
        <button
          onClick={onBack}
          className="absolute left-5 text-3xl text-zinc-500">
          &lt;
        </button>
        <h1 className="relative text-[25px] font-bold text-zinc-800 flex items-center -gap-5">
          냥냥코인
          <span>
            <img src={newCatCoin} alt="코인" className="relative top-[2px] left-[4px] w-[35px] h-[35px] object-contain select-none pointer-events-none" />
          </span>
        </h1>
      </header>

      <div className="px-5 mt-8 flex flex-col gap-6">
        <section className="bg-[#fff3ec] rounded-[36px] p-6 shadow-sm">
          <div className="relative flex items-center -gap-3">
              <span className="text-7xl">
                <img src={newCatCoin} alt="코인" className="absolute relative top-[2px] right-[3px] w-[100px] h-[100px] object-contain select-none pointer-events-none" />
              </span>
            <div className="flex-1">
              <p className="text-zinc-400 text-[15px] relative left-[10px]">
                현재 보유 코인
              </p>
              <h2 className="text-7xl font-bold text-[30px] relative left-[10px] text-zinc-800 mt-1">
                {coin.toLocaleString()}
              </h2>

              <div className="relative left-[10px] mt-2 bg-white rounded-full w-[215px] h-[25px] px-2 py-2 inline-flex items-center gap-2 shadow-sm">
                <p className="relative left-[7px] bottom-[3px] text-zinc-700 font-semibold text-[12px]">
                  이번 주
                  <span className="text-[#ff9eaa] font-bold">
                    {" "}+{weeklyEarnedCoin}
                  </span>
                  코인 획득했다옹!
                  <span className="text-xl inline-flex items-center">
                    <img src={newCatCoin} alt="코인" className="relative top-[5px] left-[3px] w-[20px] h-[20px] object-contain select-none pointer-events-none" />
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-3xl font-bold text-zinc-800">
              코인 획득 내역
            </h2>
            <button className="text-zinc-400">
              전체 보기 &gt;
            </button>
          </div>
          <div className="bg-white rounded-[36px] shadow-sm overflow-hidden min-h-[100px] flex flex-col justify-center">
            {sortedHistories.length === 0 ? (
              <p className="text-center text-zinc-400 py-10">코인 획득 내역이 없다옹!</p>
            ) : (
              sortedHistories.map((item, index) => (
                // ✅ 고유 id를 key로 사용
                <div key={item.id ?? `${item.title}-${index}`}>
                  <div className="flex items-center gap-4 px-5 py-5">
                    <div className="w-16 h-16 rounded-full bg-[#fff3ec] flex items-center justify-center shrink-0">
                      <span className="text-3xl">
                        <img src={item.image} alt={item.title} />
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-zinc-800">
                        {item.title}
                      </h3>
                      <p className="text-zinc-400 mt-1">
                        {item.date}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-3xl font-bold text-[#ff9eaa]">
                        +{item.reward.toLocaleString()}
                      </span>
                      <span className="text-2xl">
                        <img src={newCatCoin} alt="코인" className="relative top-[2px] right-[3px] w-[30px] h-[30px] object-contain select-none pointer-events-none" />
                      </span>
                    </div>
                  </div>

                  {index < sortedHistories.length - 1 && (
                    <div className="border-t border-zinc-100 ml-24" />
                  )}
                </div>
              ))
            )}
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-3xl font-bold text-zinc-800">
              주간 획득 통계
            </h2>
            <span className="text-zinc-400">
              {getWeeklyRangeString()}
            </span>
          </div>
          <div className="bg-white rounded-[36px] p-6 shadow-sm">
            <div className="flex items-end justify-between h-64">
              {weeklyStats.map((item) => (
                <div
                  key={item.day}
                  className="flex flex-col items-center flex-1">
                  <span className={`text-sm mb-2 ${
                    item.value >= WEEKLY_GRAPH_THRESHOLD
                      ? "text-[#ff9eaa] font-bold"
                      : "text-zinc-400"
                  }`}>
                    {item.value}
                  </span>
                  <div
                    className={`w-10 rounded-full ${
                      item.value >= WEEKLY_GRAPH_THRESHOLD
                        ? "bg-[#ff9eaa]"
                        : "bg-[#ffe3e0]"
                    }`}
                    style={{
                      height: `${Math.max(item.value * 1.2, 6)}px`
                    }}
                  />
                  <p className={`mt-4 font-bold ${
                    item.value >= WEEKLY_GRAPH_THRESHOLD
                      ? "text-[#ff9eaa]"
                      : "text-zinc-500"
                  }`}>
                    {item.day}
                  </p>
                  <p className="text-xs text-zinc-400 mt-1">
                    {item.date}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-3xl font-bold text-zinc-800">
              코인 사용처
            </h2>
            <button className="text-zinc-400">
              모두 보기 &gt;
            </button>
          </div>
          <div className="bg-white rounded-[36px] p-5 shadow-sm grid grid-cols-2 gap-5">
            {usages.map((item, index) => (
              <div
                key={`${item.title}-${index}`}
                className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-[#fff3ec] flex items-center justify-center">
                  <span className="text-3xl">
                    <img src={item.image} alt="코인사용처" className="w-[100px] h-[100px] object-contain select-none pointer-events-none" />
                  </span>
                </div>
                <h3 className="text-xl font-bold text-zinc-800 mt-4">
                  {item.title}
                </h3>
                <p className="text-zinc-400 text-sm mt-2">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#fff3ec] rounded-[36px] p-5 shadow-sm flex items-center gap-6">
          <div className="text-7xl flex-shrink-0">
            🐱
          </div>
          <div className="flex flex-col items-end w-full">
            <div className="flex items-center gap-2">
              <h3 className="text-2xl text-[23px] font-bold text-zinc-800 whitespace-nowrap">
                집사 돈벌라옹!
              </h3>
              <img
                src={catPaw}
                alt="고양이발바닥"
                className="relative right-[15px] w-[50px] h-[50px] object-contain select-none pointer-events-none"
              />
            </div>
            <button className="flex items-center justify-center w-[160px] h-[40px] mt-1 bg-gradient-to-r from-[#ffb7b2] to-[#ff9eaa] text-white rounded-3xl font-bold shadow-sm">
              미션 하러 가기
            </button>
          </div>
        </section>
      </div>
    </div>
   </div>
  )
}

export default CoinPage