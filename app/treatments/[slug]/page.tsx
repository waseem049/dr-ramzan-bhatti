import { TreatmentDetailPage } from "./TreatmentDetailPage";
import { TreatmentsList } from "@/utils/constants";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type TreatmentProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: TreatmentProps): Promise<Metadata> {
  const { slug } = await params;
  const treatment = TreatmentsList.find(
    (t) => t.treatment.toLowerCase().replace(/\s+/g, "-") === slug
  );

  if (!treatment) {
    return {
      title: "Treatment Not Found",
      description: "The requested treatment could not be found.",
    };
  }

  return {
    title: `${treatment.treatment} - Dr. Ramzan Bhatti`,
    description: treatment.description,
  };
}

export async function generateStaticParams() {
  return TreatmentsList.map((treatment) => ({
    slug: treatment.treatment.toLowerCase().replace(/\s+/g, "-"),
  }));
}

export default async function TreatmentPage({ params }: TreatmentProps) {
  const { slug } = await params;
  const treatment = TreatmentsList.find(
    (t) => t.treatment.toLowerCase().replace(/\s+/g, "-") === slug
  );

  if (!treatment) {
    notFound();
  }

  return <TreatmentDetailPage treatment={treatment} />;
}
