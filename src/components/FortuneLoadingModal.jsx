function FortuneLoadingModal({
  isOpen,
  progress = 55,
}) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center px-5">

      {/* 메인 모달 */}
      <div className="w-full max-w-md bg-[#fcf8f5] rounded-[40px] shadow-sm p-6 overflow-hidden relative">

        {/* 리본 */}
        <div className="flex justify-center">
          <div className="bg-gradient-to-r from-[#ffb7b2] to-[#ff9eaa] px-8 py-3 rounded-full shadow-sm">
            <h2 className="text-white text-2xl font-bold">
              🐾 포춘쿠키 준비 중...
            </h2>
          </div>
        </div>

        {/* 타이틀 */}
        <div className="text-center mt-8">
          <h3 className="text-5xl font-bold text-zinc-800 leading-tight">
            행운을 구워내고 있어요!
          </h3>

          <p className="text-zinc-500 text-xl mt-5">
            조금만 기다려주세요, 냥~ 💗
          </p>
        </div>

        {/* 고양이 영역 */}
        <div className="relative flex flex-col items-center mt-10">

          {/* 배경 반짝이 */}
          <div className="absolute left-2 top-6 text-3xl">
            ✨
          </div>

          <div className="absolute right-4 top-20 text-3xl">
            💗
          </div>

          <div className="absolute left-5 top-40 text-3xl">
            🐾
          </div>

          {/* 메인 카드 */}
          <div className="w-full bg-[#fff3ec] rounded-[36px] p-6 shadow-sm">

            {/* 고양이 */}
            <div className="flex justify-center">
              <div className="text-center">

                {/* 요리사 모자 */}
                <div className="text-5xl mb-2">
                  👨‍🍳
                </div>

                {/* 고양이 */}
                <div className="text-[120px] leading-none">
                  🐱
                </div>

                {/* 쿠키 */}
                <div className="text-8xl -mt-3 animate-pulse">
                  🥠
                </div>
              </div>
            </div>

            {/* 조물딱 효과 */}
            <div className="flex justify-center gap-2 mt-5 text-2xl text-zinc-400">
              <span className="animate-bounce">🐾</span>
              <span className="animate-bounce delay-100">🐾</span>
              <span className="animate-bounce delay-200">🐾</span>
            </div>

            {/* 재료 */}
            <div className="flex justify-between items-end mt-6">

              <div className="bg-white rounded-3xl px-4 py-3 shadow-sm text-center">
                <div className="text-4xl">
                  🥣
                </div>

                <p className="text-zinc-500 text-sm mt-2">
                  행운의 재료
                </p>
              </div>

              <div className="bg-white rounded-3xl px-4 py-3 shadow-sm text-center">
                <div className="text-4xl">
                  🥛
                </div>

                <p className="text-zinc-500 text-sm mt-2">
                  행복 우유
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 진행바 */}
        <div className="mt-10">

          <div className="w-full h-6 bg-white rounded-full overflow-hidden shadow-sm">

            <div
              className="h-full rounded-full bg-gradient-to-r from-[#ffb7b2] to-[#ff9eaa] transition-all duration-500"
              style={{ width: `${progress}%` }}
            >
              <div className="flex h-full items-center justify-center text-sm">
                🐾🐾🐾
              </div>
            </div>
          </div>

          <div className="text-center mt-5">
            <span className="text-5xl font-bold bg-gradient-to-r from-[#ffb7b2] to-[#ff9eaa] bg-clip-text text-transparent">
              {progress}%
            </span>
          </div>
        </div>

        {/* TIP 카드 */}
        <div className="mt-10 bg-[#fff3ec] rounded-[32px] p-5 shadow-sm">

          <div className="flex justify-center">
            <div className="bg-gradient-to-r from-[#ffb7b2] to-[#ff9eaa] text-white px-5 py-2 rounded-full text-sm">
              🐾 TIP 🐾
            </div>
          </div>

          <div className="flex items-center justify-between mt-5 gap-4">

            <p className="text-zinc-600 text-lg leading-relaxed">
              매일 포춘쿠키를 열면 더 큰 행운이 찾아올 거예요!
            </p>

            <div className="text-6xl">
              🥠
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FortuneLoadingModal