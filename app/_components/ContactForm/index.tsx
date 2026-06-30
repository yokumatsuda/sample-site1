// app\_components\ContactForm\index.tsx
"use client";

import {
  createContactData,
  type ContactActionState,
} from "@/app/_actions/contact";
import { useActionState } from "react";

const initialState: ContactActionState = {
  status: "idle",
  message: "",
};

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    createContactData,
    initialState,
  );

  if (state.status === "success") {
    return (
      <p className="rounded-[var(--border-radius)] bg-[var(--color-bg-sub)] p-10 text-center max-sm:text-left">
        お問い合わせいただき、ありがとうございます。
        <br />
        お返事まで今しばらくお待ちください。
      </p>
    );
  }

  return (
    <form className="mx-auto max-w-[600px]" action={formAction}>
      <div className="flex w-full items-center justify-start gap-6">
        <div className="flex flex-1 flex-col py-2">
          <label className="text-sm" htmlFor="lastname">
            姓
          </label>
          <input
            className="w-full rounded border border-[var(--color-border)] p-2 leading-normal"
            type="text"
            id="lastname"
            name="lastname"
          />
        </div>

        <div className="flex flex-1 flex-col py-2">
          <label className="text-sm" htmlFor="firstname">
            名
          </label>
          <input
            className="w-full rounded border border-[var(--color-border)] p-2 leading-normal"
            type="text"
            id="firstname"
            name="firstname"
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col py-2">
        <label className="text-sm" htmlFor="company">
          会社名
        </label>
        <input
          className="w-full rounded border border-[var(--color-border)] p-2 leading-normal"
          type="text"
          id="company"
          name="company"
        />
      </div>

      <div className="flex flex-1 flex-col py-2">
        <label className="text-sm" htmlFor="email">
          メールアドレス
        </label>
        <input
          className="w-full rounded border border-[var(--color-border)] p-2 leading-normal"
          type="text"
          id="email"
          name="email"
        />
      </div>

      <div className="flex flex-1 flex-col py-2">
        <label className="text-sm" htmlFor="message">
          メッセージ
        </label>
        <textarea
          className="w-full rounded border border-[var(--color-border)] p-2 leading-normal"
          name="message"
          id="message"
        ></textarea>
      </div>

      <div className="mt-10 text-center">
        {state.status === "error" && (
          <p className="mb-2 text-sm text-[var(--color-text-error)]">
            {state.message}
          </p>
        )}

        <input
          type="submit"
          value={isPending ? "送信中..." : "送信する"}
          className="cursor-pointer rounded border-none bg-[var(--color-button-primary)] px-10 py-4 text-base text-[var(--color-text-unpainted)] disabled:cursor-not-allowed disabled:opacity-70"
          disabled={isPending}
        />
      </div>
    </form>
  );
}
