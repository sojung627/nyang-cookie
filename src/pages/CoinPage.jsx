import React from 'react'
import newCatCoin from '../assets/main/newCatCoin.png'
import fortuneCookie from '../assets/main/fortuneCookie.png'
import calender from '../assets/main/calender.png'
import bagIcon from '../assets/main/bagIcon.png'

function CoinPage({ onBack, coin = 2450 }) {

  const histories = [
    {
      title: "포춘쿠키 열기",
      date: "2026.05.16 14:30",
      reward: "+50",
      image: fortuneCookie,
    },
    {
      title: "출석 체크",
      date: "05.16 09:12",
      reward: "+30",
      image: calender,
    },
    {
      title: "오늘의 미션 완료",
      date: "05.16 08:45",
      reward: "+40",
      
    },
    {
      title: "상점 구매 취소 보상",
      date: "2026.05.15 16:20",
      reward: "+20",
      image: bagIcon,
    },
  ]

  const weeklyStats = [
    { day: "일", date: "5/12", value: 30 },
    { day: "월", date: "5/13", value: 0 },
    { day: "화", date: "5/14", value: 60 },
    { day: "수", date: "5/15", value: 40 },
    { day: "목", date: "5/16", value: 120 },
    { day: "금", date: "5/17", value: 0 },
    { day: "토", date: "5/18", value: 0 },
  ]

  const usages = [
    {
      icon: "🐱",
      title: "고양이 꾸미기",
      desc: "보유 아이템 32개",
    },
    {
      icon: "📚",
      title: "배경 구매",
      desc: "보유 배경 8개",
    },
    {
      icon: "💬",
      title: "감정 표현 구매",
      desc: "보유 감정 15개",
    },
    {
      icon: "🎁",
      title: "한정 상품",
      desc: "특별한 아이템",
    },
  ]

  return (
  <div className="min-h-screen bg-[#f5f1ed] flex justify-center">
    <div className="w-full max-w-[393px] min-h-screen bg-[#fcf8f5] pb-28">
      {/* 헤더 */}
      <header className="px-5 pt-12 flex items-center justify-center relative">
        <button
          onClick={onBack}
          className="absolute left-5 text-3xl text-zinc-500">
          &lt;
        </button>
        <h1 className="relative text-[20px] font-bold text-zinc-800 flex items-center -gap-5">
          냥냥코인
          <span>
            <img src={newCatCoin} alt="코인" className="relative top-[2px] left-[4px] w-[30px] h-[30px] object-contain select-none pointer-events-none" />
          </span>
        </h1>
      </header>

      <div className="px-5 mt-8 flex flex-col gap-6">
        {/* 현재 보유 코인 */}
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
                    {" "}+120
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

        {/* 코인 획득 내역 */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-3xl font-bold text-zinc-800">
              코인 획득 내역
            </h2>
            <button className="text-zinc-400">
              전체 보기 &gt;
            </button>
          </div>
          <div className="bg-white rounded-[36px] shadow-sm overflow-hidden">
            {histories.map((item, index) => (
              <div key={item.title}>
                <div className="flex items-center gap-4 px-5 py-5">
                  <div className="w-16 h-16 rounded-full bg-[#fff3ec] flex items-center justify-center shrink-0">
                    <span className="text-3xl">
                      <img src={item.image} alt="코인획득내역" />
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
                      {item.reward}
                    </span>
                    <span className="text-2xl">
                      <img src={newCatCoin} alt="코인" className="relative top-[2px] right-[3px] w-[30px] h-[30px] object-contain select-none pointer-events-none" />
                    </span>
                  </div>
                </div>

                {index < histories.length - 1 && (
                  <div className="border-t border-zinc-100 ml-24" />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 주간 통계 */}
        <section>

          <div className="flex items-center justify-between mb-4">

            <h2 className="text-3xl font-bold text-zinc-800">
              주간 획득 통계
            </h2>

            <span className="text-zinc-400">
              5.12 ~ 5.18
            </span>
          </div>

          <div className="bg-white rounded-[36px] p-6 shadow-sm">

            <div className="flex items-end justify-between h-64">

              {weeklyStats.map((item) => (

                <div
                  key={item.day}
                  className="flex flex-col items-center flex-1"
                >

                  <span className={`text-sm mb-2 ${
                    item.value >= 100
                      ? "text-[#ff9eaa] font-bold"
                      : "text-zinc-400"
                  }`}>
                    {item.value}
                  </span>

                  <div
                    className={`w-10 rounded-full ${
                      item.value >= 100
                        ? "bg-[#ff9eaa]"
                        : "bg-[#ffe3e0]"
                    }`}
                    style={{
                      height: `${Math.max(item.value * 1.2, 6)}px`
                    }}
                  />

                  <p className={`mt-4 font-bold ${
                    item.value >= 100
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

        {/* 코인 사용처 */}
        <section>

          <div className="flex items-center justify-between mb-4">

            <h2 className="text-3xl font-bold text-zinc-800">
              코인 사용처
            </h2>

            <button className="text-zinc-400">
              모두 보기
            </button>
          </div>

          <div className="bg-white rounded-[36px] p-5 shadow-sm grid grid-cols-2 gap-5">

            {usages.map((item) => (

              <div
                key={item.title}
                className="flex flex-col items-center text-center"
              >

                <div className="w-24 h-24 rounded-full bg-[#fff3ec] flex items-center justify-center">
                  <span className="text-5xl">
                    {item.icon}
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

        {/* 하단 CTA */}
        <section className="bg-[#fff3ec] rounded-[36px] p-5 shadow-sm flex items-center justify-between">

          <div className="flex items-center gap-4">

            <div className="text-7xl">
              🐱
            </div>

            <div>

              <h3 className="text-2xl font-bold text-zinc-800 leading-snug">
                더 많은 코인을 모아
                <br />
                쿠키를 꾸며보라냥! 🐾
              </h3>
            </div>
          </div>

          <button className="bg-gradient-to-r from-[#ffb7b2] to-[#ff9eaa] text-white rounded-3xl px-6 py-4 font-bold shadow-sm">
            미션 하러 가기
          </button>
        </section>
      </div>
    </div>
   </div>
  )
}

export default CoinPage