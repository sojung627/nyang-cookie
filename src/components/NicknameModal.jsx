// NicknameModal.jsx

import React from 'react'
import catProfile from '../assets/catProfile.png'

const NicknameModal = ({ isOpen, onClose }) => {

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/35 backdrop-blur-[2px]">
      <div className="relative w-[320px] rounded-[34px] bg-white px-6 pt-8 pb-6 shadow-[0_20px_60px_rgba(0,0,0,0.12)] animate-[modalShow_0.2s_ease-out]">
        {/* 닫기 버튼 */}
        <button onClick={onClose}
          className="absolute top-5 right-5 text-zinc-400 text-[26px] active:scale-90 transition-transform">
          ✕
        </button>

        {/* 고양이 */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-[110px] h-[110px] rounded-full bg-[#fff6f1] flex items-center justify-center overflow-hidden">
              <img
                src={catProfile}
                alt="고양이"
                className="w-[82px] h-[82px] object-contain"/>
            </div>

            {/* 연필 뱃지 */}
            <div className="absolute bottom-1 right-1 w-[36px] h-[36px] rounded-full bg-[#ffe3e6] flex items-center justify-center shadow-md">
              <i className="bi bi-pencil-fill text-[#ff8fa3] text-[15px]"></i>
            </div>
          </div>
        </div>

        {/* 텍스트 */}
        <div className="text-center mt-5">
          <h2 className="text-[28px] font-bold tracking-[-0.04em]">
            닉네임 변경
          </h2>
          <p className="text-zinc-400 text-[15px] mt-2">
            새로운 닉네임을 입력해주세요!
          </p>
        </div>

        {/* 입력창 */}
        <div className="mt-6">
          <div className="relative">
            <input
              type="text"
              maxLength={10}
              placeholder="새 닉네임을 입력해주세요"
              className="w-full h-[58px] rounded-[18px] border border-[#f1d8d3] bg-white px-5 pr-16 text-[15px] outline-none focus:border-[#ffb7c5]"/>
            <span className="absolute right-5 top-1/2 -translate-y-1/2 text-zinc-300 text-[14px]">
              0/10
            </span>
          </div>
          <p className="text-zinc-400 text-[13px] mt-3 px-1">
            · 한글, 영문, 숫자 2~10자까지 가능해요.
          </p>
        </div>

        {/* 버튼 */}
        <div className="flex gap-3 mt-7">
          <button onClick={onClose}
            className="flex-1 h-[56px] rounded-[20px] bg-[#f5f3f2] text-zinc-500 font-bold text-[18px] active:scale-[0.98] transition-transform">
            취소
          </button>
          <button className="flex-1 h-[56px] rounded-[20px] bg-[#ffb7c5] text-white font-bold text-[18px] shadow-[0_10px_20px_rgba(255,183,197,0.35)] active:scale-[0.98] transition-transform">
            확인
          </button>
        </div>
      </div>
    </div>
  )
}

export default NicknameModal