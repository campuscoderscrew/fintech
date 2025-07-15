export default function Card({
  title = "FinTech Club Educational Material",
  speaker = "Club Tech Team",
  description = "",
  imageUrl = "src/assets/card_img_placeholder.jpg",
}) {
  return (
    <div className="bg-[#E5E5E5] rounded-lg shadow-lg/40 overflow-hidden w-full">
      <img
        src={imageUrl}
        alt={`${title} image`}
        className="hidden md:block w-full h-40 object-cover object-center"
      />
      <div className="p-4">
        <h3 className="font-[Open Sans] text-xl font-bold text-gray-600 mb-2">
          {title}
        </h3>
        <h4 className="font-[Open Sans] hidden sm:block text-lg text-gray-500 font-semibold mb-2">
          {speaker}
        </h4>
        <p className="font-[Open Sans] hidden sm:block text-md text-black leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
