const screens = ["홈", "포춘쿠키", "미션", "상점", "마이"]

function BottomNav({ current, setScreen }) {

  const icons = {
    "홈": "🏠",
    "포춘쿠키": "🍪",
    "미션": "📋",
    "상점": "🛍️",
    "마이": "😸",
  }

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#fcf8f5] border-t border-[#f5e6de] px-3 py-3 flex justify-around z-50">

      {screens.map((s) => (
        <button
          key={s}
          onClick={() => setScreen(s)}
          className="flex flex-col items-center gap-1"
        >
          <div className={`text-2xl transition-transform duration-200 ${current === s ? "scale-110" : "scale-100"}`}>
            {icons[s]}
          </div>

          <span className={`text-xs transition-colors duration-200 ${current === s ? "text-[#ff9eaa] font-bold" : "text-zinc-400"}`}>
            {s}
          </span>

          {current === s && (
            <div className="w-1 h-1 rounded-full bg-[#ff9eaa]" />
          )}
        </button>
      ))}
    </nav>
  )
}

export default BottomNav