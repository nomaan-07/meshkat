import Row from "../layout/Flex";

const variations = {
  primary: "w-14",
  auth: "w-24",
};

function Logo({ variation = "primary", className = "" }) {
  const styles = `${variations[variation]} ${className}`;
  return (
    <div className={styles}>
      <img src="logo.png" alt="لوگوی مشکات" />
    </div>
  );
}

export default Logo;
