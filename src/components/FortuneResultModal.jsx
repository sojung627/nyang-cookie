function FortuneResultModal({
  isOpen,
  onClose,
}) {

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

  // 특수 숫자
  { value: 11, weight: 2 },
  { value: 22, weight: 2 },
  { value: 33, weight: 2 },

  { value: 44, weight: 1.5 },
  { value: 55, weight: 1.2 },
  { value: 66, weight: 1 },
  { value: 77, weight: 0.8 },
  { value: 88, weight: 0.6 },
  { value: 99, weight: 0.4 },

  // 잭팟
  { value: 999, weight: 0.15 },
]

  function getRandomReward() {
    const totalWeight = rewardPool.reduce(
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

    return 10
  }

  const fortuneMessages = [
    "흐름을 타는 하루다냥! 지금의 작은 선택이 내일의 큰 수익으로 돌아올 수 있다옹 💗",
    "조급함보다 기다림이 더 좋은 결과를 가져오는 하루다냥 🐾",
    "오늘의 작은 관심이 내일의 큰 행운으로 이어질지도 모른다냥 ✨",
    "행운은 예상하지 못한 순간에 살짝 찾아온다옹 🍀",
    "조용히 흐름을 지켜보면 좋은 기회를 발견할 수 있다냥 🐱",
    "오늘은 욕심보다 균형이 더 중요한 하루다냥 💕",
    "마음이 편안할수록 더 좋은 선택을 할 수 있다옹 🌸",
    "천천히 한 걸음씩 나아가도 충분히 멋진 하루다냥 ✨",
    "뜻밖의 반가운 소식이 찾아올 가능성이 보인다냥 💗",
    "오늘의 작은 절약이 미래의 큰 행복으로 이어질 수 있다옹 🪙",
    "행운은 이미 집사 곁에서 꼬리를 흔들고 있다냥 🐾",
    "너무 서두르지 않아도 괜찮다냥! 좋은 흐름은 천천히 찾아온다옹 💗",
    "오늘은 평소보다 더 반짝이는 기운이 느껴지는 하루다냥 ✨",
    "작은 도전 하나가 의외의 행운을 불러올 수도 있다냥 🍀",
    "내가 보기엔 오늘 집사님의 운이 꽤 좋아 보인다냥 🐱",
    "차분하게 생각하면 더 좋은 선택이 기다리고 있다옹 💕",
    "오늘의 미소가 행운까지 데려올지도 모른다냥 🌸",
    "지금의 꾸준함이 나중에 큰 보상으로 돌아올 하루다냥 🪙",
    "행운은 멀리 있지 않다냥! 집사님 바로 곁에 있다옹 💗",
    "오늘은 작은 행복들을 하나씩 발견하게 되는 하루다냥 🐾",
  ]

  const reward = getRandomReward()

  const message =
    fortuneMessages[
      Math.floor(Math.random() * fortuneMessages.length)
    ]

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