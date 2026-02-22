import WhatsAppIcon from "@/components/WhatsAppIcon";

const FloatingCTA = () => {
  return (
    <a
      href="https://wa.me/919074771838?text=Hello!%20I%20am%20interested%20in%20knowing%20more%20about%20the%20services%20at%20Kannur%20Gardens."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon className="w-6 h-6 text-white" />
    </a>
  );
};

export default FloatingCTA;
