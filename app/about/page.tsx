// app\about\page.tsx
import Image from "next/image";
import { getMembersList } from "../_libs/microcms";
import { MEMBERS_LIST_LIMIT } from "../_constants";

export default async function Page() {
  const data = await getMembersList({
    limit: MEMBERS_LIST_LIMIT,
  });
  return (
    <div>
      {data.contents.length === 0 ? (
        <p className="mb-10">メンバーが登録されていません</p>
      ) : (
        <ul>
          {data.contents.map((member) => (
            <li
              key={member.id}
              className="mb-20 flex items-start gap-10 even:flex-row-reverse max-sm:flex-col max-sm:items-center max-sm:gap-6 max-sm:even:flex-col"
            >
              <Image
                src={member.image.url}
                alt=""
                width={member.image.width}
                height={member.image.height}
                className="h-auto w-60 rounded-[var(--border-radius)]"
              />
              <dl>
                <dt className="text-[1.2rem] font-bold max-sm:text-center">
                  {member.name}
                </dt>
                <dt className="mb-2 max-sm:text-center">{member.position}</dt>
                <dt className="text-[0.9rem]">{member.profile}</dt>
              </dl>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
