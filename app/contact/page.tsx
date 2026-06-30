// app\contact\page.tsx
import ContactForm from "../_components/ContactForm";

export default function Page() {
  return (
    <div>
      <p className="mb-10 text-center max-sm:text-left">
        ご質問、ご相談は下記フォームよりお問い合わせください。
        <br />
        内容確認後、担当者より通常３営業日以内にご連絡いたします。
      </p>
      <ContactForm />
    </div>
  );
}
