import { useState } from 'react'

function Attendance({ onBack }) {

  const streak = 5

  const weekDays = ["월", "화", "수", "목", "금", "토", "일"]

  const weekDates = ["5/12", "5/13", "5/14", "5/15", "5/16", "5/17", "5/18"]

  const attended = [true, true, true, true, true, false, false]

  const bonuses = [
    { day: 3,  icon: "🪙", name: "냥냥코인", desc: "연속 3일 출석",  reward: "+30", done: true  },
    { day: 5,  icon: "🪙", name: "냥냥코인", desc: "연속 5일 출석",  reward: "+50", done: true  },
    { day: 7,  icon: "💗", name: "고양이 하트", desc: "연속 7일 출석", reward: "+2",  done: false },
    { day: 10, icon: "💎", name: "다이아",    desc: "연속 10일 출석", reward: "+3",  done: false },
  ]

  return (
    <div className="min-h-screen bg-[#fcf8f5] pb-32">

      {/* 헤더 */}
      <header className="px-5 pt-12 pb-4 flex items-center justify-center relative">

        <button
          onClick={onBack}
          className="absolute left-5 text-2xl text-zinc-500"
        >
          ←
        </button>

        <h1 className="text-xl font-bold text-zinc-800">
          출석 체크 🐾
        </h1>
      </header>

      <div className="px-5 flex flex-col gap-5">

        {/* 상단 배너 카드 */}
        <div className="bg-[#fff3ec] rounded-3xl p-5 flex items-center gap-4">

          <div className="text-6xl shrink-0">
            🐱
          </div>

          <div className="flex flex-col gap-2">

            <h2 className="text-2xl font-bold text-zinc-800 leading-snug">
              <span className="text-[#ff9eaa]">{streak}일 연속</span> 출석 중!
            </h2>

            <p className="text-sm text-zinc-500">
              매일 출석하고 보상을 받아요!
            </p>

            <div className="bg-white rounded-full px-4 py-2 flex items-center gap-2 shadow-sm w-fit">
              <span>🪙</span>
              <span className="text-sm text-zinc-700">
                다음 보상까지 <span className="text-[#ff9eaa] font-bold">2일</span> 남았어요!
              </span>
            </div>
          </div>
        </div>

        {/* 이번 주 출석 현황 */}
        <div className="bg-white rounded-3xl p-5 shadow-sm">

          <div className="flex items-center justify-between mb-5">

            <h3 className="text-lg font-bold text-zinc-800">
              이번 주 출석 현황
            </h3>

            <span className="text-sm">
              <span className="text-[#ff9eaa] font-bold">{streak}</span>
              <span className="text-zinc-400"> / 7일</span>
            </span>
          </div>

          <div className="grid grid-cols-7 gap-1">

            {weekDays.map((day) => (
              <div
                key={day}
                className="flex flex-col items-center text-xs text-zinc-400 mb-2"
              >
                {day}
              </div>
            ))}

            {attended.map((done, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-1"
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg ${done ? "bg-[#ff9eaa]" : "bg-zinc-100"}`}>
                  <span className={done ? "text-white" : "text-zinc-300"}>
                    🐾
                  </span>
                </div>

                <span className="text-[10px] text-zinc-400">
                  {weekDates[i]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 연속 출석 보너스 */}
        <div className="bg-white rounded-3xl p-5 shadow-sm">

          <h3 className="text-lg font-bold text-zinc-800 mb-5">
            연속 출석 보너스 🎁
          </h3>

          <div className="flex flex-col">

            {bonuses.map((bonus, i) => (
              <div key={bonus.day}>

                <div className="flex items-center gap-4 py-4">

                  {/* 일수 배지 */}
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${
                    streak >= bonus.day
                      ? "bg-[#ff9eaa] text-white"
                      : "bg-zinc-100 text-zinc-400"
                  }`}>
                    {bonus.day}일
                  </div>

                  {/* 아이콘 */}
                  <div className="text-3xl shrink-0">
                    {bonus.icon}
                  </div>

                  {/* 설명 */}
                  <div className="flex-1">
                    <p className="font-bold text-zinc-800">
                      {bonus.name}
                    </p>
                    <p className="text-sm text-zinc-400 mt-0.5">
                      {bonus.desc}
                    </p>
                  </div>

                  {/* 보상 */}
                  <div className={`px-4 py-2 rounded-full text-sm font-bold shrink-0 ${
                    bonus.done
                      ? "bg-[#ff9eaa] text-white"
                      : streak >= bonus.day
                        ? "bg-[#fff3ec] text-[#ff9eaa]"
                        : "bg-zinc-100 text-zinc-400"
                  }`}>
                    {bonus.done ? "✓ " : ""}{bonus.reward}
                  </div>
                </div>

                {/* 구분선 */}
                {i < bonuses.length - 1 && (
                  <div className="border-t border-zinc-100 ml-16" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 안내 문구 */}
        <p className="text-sm text-zinc-400 flex items-center gap-1 px-1">
          <span>ⓘ</span>
          <span>출석은 매일 00:00에 초기화돼요.</span>
        </p>
      </div>

      {/* 하단 버튼 */}
      <div className="fixed bottom-20 left-0 right-0 px-5">
        <button className="w-full bg-gradient-to-r from-[#ffb7b2] to-[#ff9eaa] text-white rounded-3xl py-5 shadow-md font-bold text-xl flex items-center justify-center gap-2">
          <span>🗓️</span>
          <span>오늘 출석 완료!</span>
          <span>🐾</span>
        </button>
      </div>
    </div>
  )
}

export default Attendance