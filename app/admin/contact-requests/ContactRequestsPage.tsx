"use client";
import { Loading } from "@/components";
import { useGetContacts } from "@/hooks/useGetContacts";
import { ContactRequests } from "./Components/ContactRequests";

export const ContactRequestsPage = () => {
  const { contacts, isLoading } = useGetContacts();

  if (isLoading) return <Loading className="text-white" size="4x" />;

  return (
    <div className="w-[100vw] h-[100vh] flex items-end ">
      <div className="w-full h-[90%] md:p-10 p-5">
        <ContactRequests contacts={contacts} />
      </div>
    </div>
  );
};
