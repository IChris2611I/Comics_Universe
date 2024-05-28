import PropTypes from "prop-types";

const PersonalInformationList = ({ info }) => {
  return (
    <ul className="gap-20">
      {Object.entries(info).map(([key, value]) => (
        <li key={key} className="text-[#39e991] my-8 text-lg">
          <strong>{key.replace(/_/g, " ")}:</strong>{" "}
          <span className="text-white">{value}</span>
        </li>
      ))}
    </ul>
  );
};

PersonalInformationList.propTypes = {
  info: PropTypes.object.isRequired,
};

export default PersonalInformationList;
