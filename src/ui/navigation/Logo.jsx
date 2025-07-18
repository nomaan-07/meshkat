const variations = {
  primary: "w-14",
  auth: "w-18 md:w-24",
};

function Logo({ variation = "primary", className = "" }) {
  const styles = `select-none ${variations[variation]} ${className}`;
  return (
    <div className={styles}>
      <img src="logo.png" alt="لوگوی مشکات" />
    </div>
  );
}

export default Logo;
