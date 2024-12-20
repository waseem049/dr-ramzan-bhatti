import { Contact } from "@prisma/client";
import { ContactRequestCard } from "../ContactRequestCard";

export type ContactRequestsProps = {
  contacts: Contact[];
};

export const ContactRequests: React.FC<ContactRequestsProps> = ({
  contacts,
}) => {
  return (
    <div className="h-full w-full overflow-y-auto pb-4">
      <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {contacts?.map((c) => (
          <div key={c.id} className="min-h-fit">
            <ContactRequestCard key={c.id} {...c} />
          </div>
        ))}
      </div>
    </div>
  );
};
