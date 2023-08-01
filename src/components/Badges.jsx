import PropTypes from "prop-types";

const Badges = ({ tags, className = "" }) => {
  const colors = [
    "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300",
    "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
    "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
    "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300",
    "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
    "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300",
  ];

  return (
    <div className={className}>
      {tags?.map((tag, i) => (
        <span
          key={i}
          className={`text-sm font-medium px-2.5 py-0.5 rounded ${
            colors[i % colors.length]
          }`}
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

Badges.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string,
};

export default Badges;
