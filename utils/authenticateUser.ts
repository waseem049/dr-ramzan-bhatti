import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";

export const authenticateUser = (
  context: GetServerSidePropsContext
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
): GetServerSidePropsResult<{ [key: string]: unknown }> => {
  const { req } = context;
  const token = req.cookies["jb-admin-token"];

  if (!token) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
      props: {},
    };
  }

  return {
    props: {},
  };
};
