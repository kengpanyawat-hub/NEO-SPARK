import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, service, budget, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'กรุณากรอกข้อมูลที่จำเป็น' }, { status: 400 })
    }

    // ส่งอีเมลแจ้งเตือนไปยังทีม NEO SPARK
    const { error } = await resend.emails.send({
      from: 'NEO SPARK Contact Form <onboarding@resend.dev>',
      to: ['info@neo-spark-agency.com'],
      replyTo: email,
      subject: `[ติดต่องาน] ${name} — ${service || 'ไม่ระบุบริการ'}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#09070E;color:#fff;padding:32px;border-radius:16px;">
          <div style="text-align:center;margin-bottom:24px;">
            <h1 style="color:#a855f7;font-size:24px;margin:0;">NEO SPARK AGENCY</h1>
            <p style="color:#ffffff80;margin:4px 0 0;">มีข้อความใหม่จากฟอร์มติดต่อ</p>
          </div>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:10px 0;border-bottom:1px solid #ffffff15;color:#ffffff80;width:130px;">ชื่อ</td><td style="padding:10px 0;border-bottom:1px solid #ffffff15;font-weight:600;">${name}</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #ffffff15;color:#ffffff80;">อีเมล</td><td style="padding:10px 0;border-bottom:1px solid #ffffff15;"><a href="mailto:${email}" style="color:#a855f7;">${email}</a></td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #ffffff15;color:#ffffff80;">เบอร์โทร</td><td style="padding:10px 0;border-bottom:1px solid #ffffff15;">${phone || '-'}</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #ffffff15;color:#ffffff80;">บริการ</td><td style="padding:10px 0;border-bottom:1px solid #ffffff15;">${service || '-'}</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #ffffff15;color:#ffffff80;">งบประมาณ</td><td style="padding:10px 0;border-bottom:1px solid #ffffff15;">${budget || '-'}</td></tr>
          </table>
          <div style="margin-top:20px;padding:16px;background:#ffffff08;border-radius:12px;border:1px solid #ffffff10;">
            <p style="color:#ffffff80;margin:0 0 8px;font-size:13px;">ข้อความ:</p>
            <p style="margin:0;line-height:1.6;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          <div style="margin-top:24px;text-align:center;">
            <a href="mailto:${email}" style="display:inline-block;background:linear-gradient(135deg,#7c3aed,#ec4899);color:#fff;padding:12px 24px;border-radius:10px;text-decoration:none;font-weight:600;">ตอบกลับ ${name}</a>
          </div>
          <p style="text-align:center;color:#ffffff30;font-size:12px;margin-top:24px;">NEO SPARK AGENCY • www.neo-spark-agency.com</p>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: 'ส่งอีเมลไม่สำเร็จ' }, { status: 500 })
    }

    // ส่งอีเมลยืนยันไปยังผู้ส่ง
    await resend.emails.send({
      from: 'NEO SPARK AGENCY <onboarding@resend.dev>',
      to: [email],
      subject: 'ได้รับข้อความของคุณแล้ว — NEO SPARK AGENCY',
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#09070E;color:#fff;padding:32px;border-radius:16px;">
          <div style="text-align:center;margin-bottom:24px;">
            <h1 style="color:#a855f7;font-size:24px;margin:0;">NEO SPARK AGENCY</h1>
          </div>
          <h2 style="font-size:20px;margin:0 0 12px;">สวัสดีคุณ ${name} 👋</h2>
          <p style="color:#ffffff80;line-height:1.7;margin:0 0 16px;">
            ขอบคุณที่ติดต่อมายัง NEO SPARK AGENCY ทีมงานได้รับข้อความของคุณแล้ว และจะติดต่อกลับภายใน <strong style="color:#fff;">24 ชั่วโมง</strong>
          </p>
          <p style="color:#ffffff80;line-height:1.7;margin:0 0 24px;">
            หากต้องการติดต่อด่วน สามารถทักมาทาง LINE OA ได้เลยครับ
          </p>
          <div style="text-align:center;">
            <a href="https://lin.ee/WYbi1D5" style="display:inline-block;background:#06C755;color:#fff;padding:12px 24px;border-radius:10px;text-decoration:none;font-weight:600;">ทัก LINE OA</a>
          </div>
          <p style="text-align:center;color:#ffffff30;font-size:12px;margin-top:24px;">NEO SPARK AGENCY • www.neo-spark-agency.com</p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json({ error: 'เกิดข้อผิดพลาด กรุณาลองใหม่' }, { status: 500 })
  }
}
