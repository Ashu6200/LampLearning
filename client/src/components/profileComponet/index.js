import dynamic from "next/dynamic";

const DynamicBlogs = dynamic(async () => import("./Blogs"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
const DynamicChangePassword = dynamic(async () => import("./ChangePassword"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
const DynamicCourses = dynamic(async () => import("./Courses"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
const DynamicEditProfile = dynamic(async () => import("./EditProfile"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
const DynamicTabsections = dynamic(async () => import("./TabSection"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export {
  DynamicBlogs,
  DynamicChangePassword,
  DynamicTabsections,
  DynamicCourses,
  DynamicEditProfile,
};
