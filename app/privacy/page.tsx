import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "นโยบายความเป็นส่วนตัว | NEO SPARK AGENCY",
  description:
    "นโยบายความเป็นส่วนตัวของ NEO SPARK AGENCY — ข้อมูลที่เราเก็บรวบรวม วิธีการใช้งาน และสิทธิ์ของคุณ",
  alternates: { canonical: "https://www.neo-spark-agency.com/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="relative min-h-screen">
      {/* Background Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle_at_center,theme(colors.violet.500/.2),transparent_60%)] blur-3xl" />
      </div>

      <div className="container-xl py-14 md:py-20 max-w-3xl">
        {/* Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs text-white/70 backdrop-blur mb-4">
            นโยบายความเป็นส่วนตัว
          </div>
          <h1 className="text-3xl font-extrabold leading-tight md:text-4xl">
            Privacy <span className="text-neo-violet">Policy</span>
          </h1>
          <p className="mt-3 text-white/60 text-sm">
            อัปเดตล่าสุด: พฤษภาคม 2568 (2025)
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-violet max-w-none space-y-8 text-white/80 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. บทนำ</h2>
            <p>
              NEO SPARK AGENCY (&ldquo;บริษัท&rdquo;, &ldquo;เรา&rdquo;) ให้ความสำคัญกับความเป็นส่วนตัวของคุณ
              นโยบายนี้อธิบายถึงข้อมูลที่เราเก็บรวบรวม วิธีการใช้งาน และสิทธิ์ของคุณในฐานะเจ้าของข้อมูล
              เมื่อคุณใช้งานเว็บไซต์ <strong>www.neo-spark-agency.com</strong> หรือติดต่อเราผ่านช่องทางต่างๆ
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. ข้อมูลที่เราเก็บรวบรวม</h2>
            <p>เราอาจเก็บรวบรวมข้อมูลดังต่อไปนี้:</p>
            <ul className="list-disc list-inside space-y-2 mt-3">
              <li><strong>ข้อมูลส่วนตัว</strong> — ชื่อ, เบอร์โทรศัพท์, อีเมล ที่คุณกรอกในแบบฟอร์มติดต่อ</li>
              <li><strong>ข้อมูลการใช้งาน</strong> — หน้าที่เข้าชม, ระยะเวลาที่ใช้งาน, ประเภทอุปกรณ์ และเบราว์เซอร์ (ผ่าน Google Analytics)</li>
              <li><strong>ข้อมูลการสื่อสาร</strong> — ข้อความที่ส่งผ่าน LINE OA, Facebook Messenger หรืออีเมล</li>
              <li><strong>Cookies</strong> — ไฟล์ขนาดเล็กที่ช่วยให้เว็บไซต์ทำงานได้ดีขึ้นและวิเคราะห์การใช้งาน</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. วัตถุประสงค์การใช้ข้อมูล</h2>
            <p>เราใช้ข้อมูลของคุณเพื่อ:</p>
            <ul className="list-disc list-inside space-y-2 mt-3">
              <li>ติดต่อกลับและให้บริการตามที่คุณร้องขอ</li>
              <li>ปรับปรุงและพัฒนาเว็บไซต์และบริการของเรา</li>
              <li>วิเคราะห์ประสิทธิภาพการตลาดและโฆษณา</li>
              <li>ส่งข้อมูลข่าวสาร โปรโมชัน (เฉพาะเมื่อคุณยินยอม)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. การแบ่งปันข้อมูล</h2>
            <p>
              เราไม่ขาย แลกเปลี่ยน หรือโอนข้อมูลส่วนตัวของคุณให้กับบุคคลภายนอก
              ยกเว้นกรณีที่จำเป็นต้องใช้บริการของบุคคลที่สาม เช่น Google Analytics, Meta Pixel
              เพื่อวัตถุประสงค์ด้านการวิเคราะห์และการตลาด ซึ่งผู้ให้บริการเหล่านี้มีนโยบายความเป็นส่วนตัวของตนเอง
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Cookies</h2>
            <p>
              เว็บไซต์ของเราใช้ Cookies เพื่อปรับปรุงประสบการณ์การใช้งาน
              คุณสามารถปิดการใช้งาน Cookies ได้ในการตั้งค่าเบราว์เซอร์ของคุณ
              อย่างไรก็ตาม การปิด Cookies อาจทำให้บางฟีเจอร์ของเว็บไซต์ทำงานไม่สมบูรณ์
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. สิทธิ์ของคุณ</h2>
            <p>คุณมีสิทธิ์ดังต่อไปนี้ตาม พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคล (PDPA):</p>
            <ul className="list-disc list-inside space-y-2 mt-3">
              <li>สิทธิ์ในการเข้าถึงข้อมูลส่วนตัวของคุณ</li>
              <li>สิทธิ์ในการแก้ไขข้อมูลที่ไม่ถูกต้อง</li>
              <li>สิทธิ์ในการลบข้อมูลส่วนตัว</li>
              <li>สิทธิ์ในการคัดค้านการประมวลผลข้อมูล</li>
              <li>สิทธิ์ในการถอนความยินยอม</li>
            </ul>
            <p className="mt-3">
              หากต้องการใช้สิทธิ์ดังกล่าว กรุณาติดต่อเราที่{" "}
              <a href="mailto:neo.spark@gmail.com" className="text-violet-400 hover:text-violet-300 underline">
                neo.spark@gmail.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">7. การรักษาความปลอดภัย</h2>
            <p>
              เราใช้มาตรการรักษาความปลอดภัยที่เหมาะสมเพื่อปกป้องข้อมูลของคุณ
              อย่างไรก็ตาม ไม่มีระบบใดที่ปลอดภัย 100% เราจึงไม่สามารถรับประกันความปลอดภัยสมบูรณ์แบบได้
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">8. การเปลี่ยนแปลงนโยบาย</h2>
            <p>
              เราอาจอัปเดตนโยบายนี้เป็นครั้งคราว การเปลี่ยนแปลงจะมีผลทันทีเมื่อเผยแพร่บนเว็บไซต์
              เราแนะนำให้คุณตรวจสอบหน้านี้เป็นระยะ
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">9. ติดต่อเรา</h2>
            <p>หากมีคำถามเกี่ยวกับนโยบายความเป็นส่วนตัว กรุณาติดต่อ:</p>
            <div className="mt-3 rounded-xl border border-white/10 bg-white/5 p-4 space-y-2 text-sm">
              <p><strong>NEO SPARK AGENCY</strong></p>
              <p>38/1742 KC Village 7, Thai Ramman Road, Sam Wa Tawan Subdistrict,</p>
              <p>Khlong Sam Wa District, Bangkok 10510</p>
              <p>
                อีเมล:{" "}
                <a href="mailto:neo.spark@gmail.com" className="text-violet-400 hover:text-violet-300">
                  neo.spark@gmail.com
                </a>
              </p>
              <p>
                โทร:{" "}
                <a href="tel:0615522545" className="text-violet-400 hover:text-violet-300">
                  061-552-2545
                </a>
              </p>
            </div>
          </section>
        </div>

        {/* Back button */}
        <div className="mt-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-white/70 backdrop-blur transition hover:bg-white/10 hover:text-white"
          >
            ← กลับหน้าหลัก
          </Link>
        </div>
      </div>
    </div>
  );
}
