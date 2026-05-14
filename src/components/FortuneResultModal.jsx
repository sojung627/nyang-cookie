function FortuneResultModal({
  isOpen,
  onClose,
  reward = 50,
  message = "흐름을 타는 하루예요! 지금의 작은 선택이 내일의 큰 수익으로 돌아올 수 있어요. 💗",
}) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center px-5">

      {/* 모달 */}
      <div className="w-full max-w-md bg-[#fcf8f5] rounded-[40px] shadow-sm p-6 relative overflow-hidden">

        {/* 닫기 */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-12 h-12 rounded-full bg-white shadow-sm text-zinc-400 text-2xl"
        >
          ✕
        </button>

        {/* 리본 */}
        <div className="flex justify-center">
          <div className="bg-gradient-to-r from-[#ffb7b2] to-[#ff9eaa] px-8 py-3 rounded-full shadow-sm">
            <h2 className="text-white text-2xl font-bold">
              🐾 포춘쿠키 결과
            </h2>
          </div>
        </div>

        {/* 타이틀 */}
        <div className="text-center mt-8">
          <h3 className="text-5xl font-bold text-zinc-800">
            행운이 찾아왔어요!
          </h3>

          <p className="text-zinc-500 text-lg mt-4">
            오늘의 선물이 도착했답니다!
          </p>
        </div>

        {/* 고양이 */}
        <div className="flex justify-center mt-10 relative">

          {/* 반짝이 */}
          <div className="absolute -left-2 top-10 text-3xl">
            ✨
          </div>

          <div className="absolute right-0 top-20 text-3xl">
            💗
          </div>

          <div className="w-72 h-72 rounded-full bg-[#fff3ec] flex items-center justify-center shadow-sm">
            <div className="text-center">
              <div className="text-[120px] leading-none">
                🐱
              </div>

              <div className="text-8xl -mt-2">
                🪙
              </div>
            </div>
          </div>
        </div>

        {/* 보상 카드 */}
        <div className="bg-white rounded-[36px] shadow-sm p-6 mt-8">

          <div className="flex justify-center">
            <div className="bg-[#ffb7b2] text-white px-5 py-2 rounded-full text-sm">
              획득한 보상
            </div>
          </div>

          <div className="flex flex-col items-center mt-6">

            <div className="text-7xl">
              🪙
            </div>

            <h4 className="text-5xl font-bold text-zinc-800 mt-5">
              냥냥코인
            </h4>

            <div className="text-7xl font-bold mt-4 bg-gradient-to-r from-[#ffb7b2] to-[#ff9eaa] bg-clip-text text-transparent">
              +{reward}
            </div>

            <p className="text-zinc-500 text-lg mt-5">
              냥냥코인이 {reward}개 증가했어요! 💗
            </p>
          </div>
        </div>

        {/* 운세 카드 */}
        <div className="bg-[#fff3ec] rounded-[36px] shadow-sm p-6 mt-6">

          <div className="flex items-center justify-center gap-2">
            <span className="text-2xl">✨</span>

            <h4 className="text-3xl font-bold text-zinc-800">
              오늘의 주식 운세
            </h4>

            <span className="text-2xl">✨</span>
          </div>

          <div className="bg-white rounded-[32px] p-5 mt-5 shadow-sm">

            <div className="flex gap-4">

              <div className="text-6xl">
                🐱
              </div>

              <div>
                <p className="text-zinc-700 text-xl leading-relaxed">
                  {message}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 확인 버튼 */}
        <button
          onClick={onClose}
          className="w-full mt-8 bg-gradient-to-r from-[#ffb7b2] to-[#ff9eaa] text-white rounded-[32px] py-5 shadow-sm"
        >
          <span className="text-3xl font-bold">
            확인
          </span>
        </button>

        {/* 하단 */}
        <div className="flex items-center justify-center gap-3 mt-5 text-zinc-400">
          <div className="w-6 h-6 rounded-full border-2 border-zinc-300"></div>

          <span>
            오늘 하루 보지 않기
          </span>
        </div>
      </div>
    </div>
  )
}

export default FortuneResultModal