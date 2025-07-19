import Heading from "../layout/Heading";

function HeaderTitle() {
  // FIXME: Change the title base on every page
  return (
    <Heading as="h3" className="hidden lg:block">
      پنل مدیریت
    </Heading>
  );
}

export default HeaderTitle;
