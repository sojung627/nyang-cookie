function FortuneModal({ isOpen, onClose, onOpenResult }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center px-5">

      {/* 모달 */}
      <div className="w-full max-w-md bg-[#fcf8f5] rounded-[40px] shadow-sm p-6 relative overflow-hidden">

        {/* 닫기 버튼 */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-12 h-12 bg-white rounded-full shadow-sm text-2xl text-zinc-400"
        >
          ✕
        </button>

        {/* 리본 */}
        <div className="flex justify-center">
          <div className="bg-gradient-to-r from-[#ffb7b2] to-[#ff9eaa] px-8 py-3 rounded-full shadow-sm">
            <h2 className="text-white text-2xl font-bold">
              🐾 오늘의 포춘쿠키
            </h2>
          </div>
        </div>

        {/* 타이틀 */}
        <div className="text-center mt-8">
          <h3 className="text-5xl font-bold text-zinc-800">
            쿠키를 열어볼까?
          </h3>

          <p className="text-zinc-500 mt-4 text-lg">
            하루에 한 번, 행운이 찾아와요!
          </p>
        </div>

        {/* 고양이 + 쿠키 */}
        <div className="flex flex-col items-center mt-10">

          {/* 말풍선 */}
          <div className="bg-white px-5 py-4 rounded-3xl shadow-sm text-zinc-500 self-start ml-3">
            맛있는 행운이 기다리고 있다옹! 🐾
          </div>

          {/* 고양이 */}
          <div className="relative mt-6">

            {/* 반짝이 */}
            <div className="absolute -top-6 -left-6 text-3xl">
              ✨
            </div>

            <div className="absolute top-0 -right-6 text-3xl">
              💗
            </div>

            {/* 쿠키 */}
            <div className="w-72 h-72 rounded-full bg-[#fff3ec] flex items-center justify-center shadow-sm">

              <div className="text-center">
                <div className="text-[120px] leading-none">
                  🐱
                </div>

                <div className="text-8xl -mt-2">
                  🥠
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 열기 버튼 */}
        <button className="w-full mt-10 bg-gradient-to-r from-[#ffb7b2] to-[#ff9eaa] text-white py-5 rounded-[32px] shadow-sm"
        onClick={() => onOpenResult()}>

          <div className="flex flex-col items-center">
            <span className="text-3xl">
              🐾
            </span>

            <span className="text-3xl font-bold mt-2">
              쿠키 열기
            </span>
          </div>
        </button>

        {/* 안내 문구 */}
        <p className="text-center text-zinc-400 mt-5">
          오늘의 진행 상황은 매일 00:00에 초기화돼요.
        </p>

        {/* 보상 미리보기 */}
        <div className="mt-10 bg-[#fff3ec] rounded-[32px] p-5">

          <h4 className="text-center text-2xl font-bold text-zinc-800">
            오늘의 포춘쿠키 보상 미리보기
          </h4>

          <div className="grid grid-cols-2 gap-4 mt-5">

            {[
              {
                icon: "🪙",
                title: "냥냥코인",
                reward: "+10 ~ 100",
              },
              {
                icon: "💗",
                title: "고양이 하트",
                reward: "+1 ~ 3",
              },
              {
                icon: "🍀",
                title: "행운의 클로버",
                reward: "+1",
              },
              {
                icon: "💎",
                title: "다이아",
                reward: "+1 ~ 3",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-3xl p-4 shadow-sm text-center"
              >
                <div className="text-5xl">
                  {item.icon}
                </div>

                <h5 className="font-bold text-zinc-800 mt-3">
                  {item.title}
                </h5>

                <p className="text-zinc-500 mt-2">
                  {item.reward}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 하단 tip */}
        <div className="mt-6 flex items-center justify-center gap-2 text-zinc-400">
          <span className="bg-[#ffb7b2] text-white px-3 py-1 rounded-full text-sm">
            TIP
          </span>

          <span>
            연속 출석을 하면 더 좋은 보상을 받을 수 있어요!
          </span>
        </div>
      </div>
    </div>
  )
}

export default FortuneModal