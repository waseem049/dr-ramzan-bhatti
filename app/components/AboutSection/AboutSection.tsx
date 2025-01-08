export const AboutSection = () => {
  return (
    <div
      className="w-full px-5 lg:px-16 py-5 lg:py-16 flex flex-col lg:flex-row lg:gap-10 gap-5"
      id="about"
    >
      <div
        className="w-full lg:w-[50%] h-[40vh] lg:h-[70vh] bg-cover bg-top rounded-md overflow-hidden"
        style={{ backgroundImage: `url("/images/about_image.png")` }}
      />
      <div className="w-full lg:w-[50%] rounded-md pt-5">
        <h1 className="text-primary text-[28px] font-poppinsRegular text-center lg:text-left">
          ABOUT
        </h1>
        <p className="text-lightGrey font-poppinsRegular text-[16px] lg:text-[21px] text-center lg:text-left">
          {`Dr. Jibran Bashir leads a distinguished orthopedic practice dedicated to providing world-class surgical care and comprehensive treatment solutions. With his extensive training in Germany and expertise in robotic joint replacement surgery, he has established himself as a pioneer in advanced orthopedic procedures. His practice embodies the perfect blend of cutting-edge technology and patient-centered care, offering innovative treatments for complex orthopedic conditions. Building upon his impressive credentials including MBBS, D.Ortho, DNB Orthopedics, and MNAMS, Dr. Bashir has developed structured treatment protocols that prioritize patient safety and optimal outcomes. His expertise spans across trauma care, sports medicine, and advanced joint replacement, making his practice a center of excellence for patients seeking high-quality orthopedic care. Through his commitment to evidence-based practices and integration of the latest surgical advancements, Dr. Bashir continues to set new standards in orthopedic treatment and patient recovery.`}
        </p>
      </div>
    </div>
  );
};
