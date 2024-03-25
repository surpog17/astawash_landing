export default function InputField({
  label,
  labelClass = "block text-sm font-semibold text-gray-600 mb-2",
  type,
  placeholder,
  className = "w-full  border border-gray-300 rounded-md focus:outline-none bg-transparent p-4 text-white",
}) {
  return (
    <div className="mb-2">
      <label className={labelClass}>{label}</label>
      <input type={type} placeholder={placeholder} className={className} />
    </div>
  );
}
