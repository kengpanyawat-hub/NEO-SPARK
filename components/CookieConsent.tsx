'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { X } from 'lucide-react'
import clsx from 'clsx'

const COOKIE_KEY = 'neo-spark-cookie-consent'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY)
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const accept = () => {
    localStorage.setItem(COOKIE_KEY, 'accepted')
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem(COOKIE_KEY, 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      className={clsx(
        'fixed bottom-4 left-4 right-4 z-[9999] md:left-auto md:right-6 md:max-w-md',
        'rounded-2xl border border-white/10 bg-[#13101e]/95 backdrop-blur-xl',
        'p-5 shadow-[0_8px_40px_rgba(0,0,0,0.6)] ring-1 ring-white/5',
        'animate-in slide-in-from-bottom-4 duration-300'
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="text-xl">🍪</span>
          <p className="font-semibold text-white">นโยบายคุกกี้</p>
        </div>
        <button
          onClick={decline}
          className="rounded-lg p-1 text-white/50 hover:bg-white/10 hover:text-white transition"
          aria-label="ปิด"
        >
          <X size={16} />
        </button>
      </div>

      <p className="mt-3 text-sm text-white/70 leading-relaxed">
        เราใช้คุกกี้เพื่อวิเคราะห์การใช้งานและปรับปรุงประสบการณ์ของคุณ
        ตามพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล (PDPA){' '}
        <Link href="/privacy" className="text-violet-400 underline underline-offset-2 hover:text-violet-300">
          อ่านนโยบายความเป็นส่วนตัว
        </Link>
      </p>

      <div className="mt-4 flex gap-2">
        <button
          onClick={accept}
          className="flex-1 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-4 py-2 text-sm font-semibold text-white hover:brightness-110 transition"
        >
          ยอมรับทั้งหมด
        </button>
        <button
          onClick={decline}
          className="flex-1 rounded-xl border border-white/10 px-4 py-2 text-sm font-medium text-white/70 hover:bg-white/5 hover:text-white transition"
        >
          ปฏิเสธ
        </button>
      </div>
    </div>
  )
}
