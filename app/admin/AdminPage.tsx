import { authenticateUser } from "@/utils/authenticateUser";
import { GetServerSideProps } from "next";

export const AdminPage = () => {
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center">
      <h1 className="font-poppinsRegular text-foreground text-[40px]">
        Admin Page
      </h1>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return authenticateUser(context);
};
