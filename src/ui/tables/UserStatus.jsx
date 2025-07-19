const circleBaseStyles = "size-1.5 rounded-full";

function userStatus({ status = "pending" }) {
  return (
    <div className="flex items-center gap-1 select-none">
      {status === "confirmed" && (
        <>
          <div className={`${circleBaseStyles} bg-emerald-600`}></div>
          <span>تایید شده</span>
        </>
      )}
      {status === "rejected" && (
        <>
          <div className={`${circleBaseStyles} bg-rose-600`}></div>

          <span>رد شده</span>
        </>
      )}
      {status === "pending" && (
        <>
          <div className={`${circleBaseStyles} bg-amber-600`}></div>

          <span>در انتظار</span>
        </>
      )}
    </div>
  );
}

export default userStatus;
