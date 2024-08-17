import RolePanel1 from "../../assets/SolutionsUnified/RolePanel1.jpg";
import RolePanel2 from "../../assets/SolutionsUnified/RolePanel2.jpg";
import changesBetweenDMR from "../../assets/SolutionsUnified/changesBetweenDMR.jpg";

import dmrControl from "../../assets/SolutionsUnified/dmrControl.jpg";
import MemberAdminPanel from "../../assets/SolutionsUnified/MemberAdminPanel.jpg";

const SolutionUnifiedContent = () => {
  return (
    <>
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Solutions Unified is a startup focused on medical device manufacturing
          solutions in North America through the development of a manufacturing
          execution platform. Here are some things I developed at my time there.
        </h2>
        <div className="space-y-6 mb-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-700">
              Admin Controls
            </h3>
            <p className="text-gray-600">
              Built and refined admin controls for managing memberships and
              products of an organization, incorporating features for role
              assignments and data versioning.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-700">
              Product Management
            </h3>
            <p className="text-gray-600">
              Enhanced product tracking by developing features to manage the
              Device Master Record (DMR), which included version control for
              better traceability and quality analysis vital for medical
              devices.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-700">
              Data Handling
            </h3>
            <p className="text-gray-600">
              Implemented and optimized data models using a DAO pattern,
              ensuring efficient data access and consistency.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-700">
              UI Development
            </h3>
            <p className="text-gray-600">
              Designed user-friendly interface components to improve usability
              and interaction across the platform.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <p className="text-gray-600">
              Member Admin Panel: Developed a member admin panel for managing
              users and their roles within the organization. This panel includes
              features for adding, editing, and deleting users, as well as
              assigning roles to users.
            </p>
            <img src={MemberAdminPanel} alt="" />
          </div>

          <div>
            <p>
              Site Role Management: Allows admin to assign roles to users for a
              given site and department.
            </p>
            <img src={RolePanel2} alt="" />
          </div>
          <div>
            <p className="text-gray-600">
              Departments Management: Developed a department management feature
              for managing the roles within a department, including the ability
              to assign roles and view the changes between different versions of
              the data.
            </p>
            <img src={RolePanel1} alt="" />
          </div>
          <div>
            <p className="text-gray-600">
              DMR Control: Developed a feature for managing the Device Master
              Record (DMR) for a given product. This feature includes version
              control for better traceability and quality analysis.
            </p>
            <img src={dmrControl} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SolutionUnifiedContent;
