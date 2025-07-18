import { LucideUser } from "lucide-react";

function UserProfile() {
  // FIXME: get user data from api
  const avatar = undefined;
  const username = "نعمان ریگی کوته";

  return (
    <div className="mt-2 flex flex-col gap-y-3">
      <div className="flex size-12 items-center justify-center rounded-full border border-slate-300 bg-slate-100">
        {avatar ? (
          <img
            className="size-full rounded-full bg-cover"
            src={avatar}
            alt="user avatar"
          />
        ) : (
          <LucideUser className="size-7 text-slate-500" strokeWidth={1.5} />
        )}
      </div>
      <p className="text-sm text-slate-400">{username}</p>
    </div>
  );
}

export default UserProfile;
