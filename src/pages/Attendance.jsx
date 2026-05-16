import { useState } from 'react'
import happyCat from '../assets/main/happyCat.png'
import newCatCoin from '../assets/main/newCatCoin.png'
import catPaw from '../assets/main/catPaw.png'
import specialItem from '../assets/main/specialItem.png'
import calender from '../assets/main/calender.png'
import diamond from '../assets/main/diamond.png'
import heart from '../assets/main/heart.png'

function Attendance({ onBack }) {

  const streak = 5
  const weekDays = ["월", "화", "수", "목", "금", "토", "일"]
  const weekDates = ["5/12", "5/13", "5/14", "5/15", "5/16", "5/17", "5/18"]
  const attended = [true, true, true, true, true, false, false]
  const bonuses = [
    { day: 3,  image: newCatCoin, name: "냥냥코인", desc: "연속 3일 출석",  reward: "+30", done: true  },
    { day: 5,  image: newCatCoin, name: "냥냥코인", desc: "연속 5일 출석",  reward: "+50", done: true  },
    { day: 7,  image: heart, name: "고양이 하트", desc: "연속 7일 출석", reward: "+2",  done: false },
    { day: 10, image: diamond, name: "다이아",    desc: "연속 10일 출석", reward: "+3",  done: false },
  ]

  return (
    <div className="min-h-screen bg-[#f5f1ed] flex justify-center">
      <div className="w-full max-w-[393px] min-h-screen bg-[#fcf8f5] pb-28">
      {/* 헤더 */}
      <header className="px-5 pt-12 pb-4 flex items-center justify-center relative">
        <button
          onClick={onBack}
          className="absolute left-5 text-2xl text-zinc-500">
          &lt;
        </button>
        <h1 className="text-xl flex items-center font-bold text-zinc-800">
          출석 체크
          <img src={catPaw} alt="고양이발바닥" className="w-[40px] relative top-[3px]" />
        </h1>
      </header>

      <div className="px-5 flex flex-col gap-5">
        {/* 상단 배너 카드 */}
        <div className="bg-[#fff3ec] rounded-3xl p-5 flex items-center gap-4">
          <div className="text-6xl shrink-0">
            <img src={happyCat} alt="출석고양이" className="w-[100px]" />
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold text-zinc-800 leading-snug">
              <span className="text-[#ff9eaa]">{streak}일 연속</span> 출석 중!
            </h2>
            <p className="text-sm text-zinc-500">
              매일 출석하고 보상을 받아요!
            </p>
            <div className="relative right-[13px] w-[220px] h-[30px] bg-white rounded-full flex items-center justify-center gap-2 shadow-sm">
              <img src={newCatCoin} alt="코인" className="relative left-[5px] w-[20px]" />
              <div className="flex items-center gap-1 text-[12px] text-zinc-700 whitespace-nowrap">
                다음 보상까지 <span className="text-[#ff9eaa] font-bold">2일</span> 남았다옹!
                <img src={catPaw} alt="고양이발바닥" className="relative w-[25px] top-[1.2px] right-[4px]" />
              </div>
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
                className="flex flex-col items-center text-xs text-zinc-400 mb-2">
                {day}
              </div>
            ))}
            {attended.map((done, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-1">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg ${done ? "bg-[#ffc7cf]" : "bg-zinc-100"}`}>
                  <span className={done ? "text-white" : "text-zinc-300"}>
                    <img src={catPaw} alt="고양이발바닥" />
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
        <div className="bg-white rounded-3xl p-5 shadow-sm mb-5">
          <h3 className="flex items-center text-lg font-bold text-zinc-800 mb-5">
            연속 출석 보너스 <img src={specialItem} alt="출석보너스" className="w-[30px] relative left-[4px]" />
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
                    <img src={bonus.image} alt="아이콘" className="w-[40px]" />
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
      </div>
      {/* 하단 버튼 */}
      <div className="bottom-20 left-0 right-0 px-5">
        <button className="w-[250px] h-[60px] mx-auto block bg-gradient-to-r from-[#ff9eaa] to-[#ffc7cf] text-white rounded-full py-5 shadow-md font-bold text-xl flex items-center justify-center gap-2">
          <img src={calender} alt="캘린더" className="relative left-[8px] w-[40px]" />
          <span>오늘 출석 완료!</span>
          <img src={catPaw} alt="고양이발바닥" className="relative right-[8px] top-[2.5px] w-[40px]" />
        </button>
      </div>
    </div>
   </div>
  )
}

export default Attendance