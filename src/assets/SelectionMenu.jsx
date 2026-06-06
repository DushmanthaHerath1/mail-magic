function SelectionMenu({
  label,
  id,
  name,
  options,
  placeholder,
  className = "",
  ...props
}) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <lable htmlFor={id} classname="text-xs font-medium text-zinc-700">
          {label}
        </lable>
      )}
      <select
        name={name}
        id={id}
        defaultValue=""
        className={`w-full px-3 py-2 bg-zinc-50 border border-zinc-200 rounded-lg text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-all cursor-pointer ${className}`}
        {...props}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectionMenu;
